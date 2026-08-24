"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "output");
const REPORT_DIR = path.join(OUTPUT_DIR, "reports");
const REPORT_FILE = path.join(REPORT_DIR, "lead-dashboard.html");

// ============================================================
// CONFIGURACIÓN
// ============================================================

const MIN_SELLABLE_SCORE = 45;

// Categorías que Google puede devolver con nombres distintos
// pero que comercialmente pertenecen a un mismo mercado.
const NICHE_GROUPS = [
    {
        name: "Automoción",
        keywords: [
            "taller mecánico",
            "taller de automóviles",
            "taller de reparacion de automoviles",
            "taller de reparación de automóviles",
            "reparación de automóviles",
            "reparacion de automoviles",
            "mecánico de automóviles",
            "mecanico de automoviles",
            "taller de motos",
            "taller de reparación de motos",
            "reparación de motos",
            "reparacion de motos"
        ]
    },
    {
        name: "Electricidad",
        keywords: [
            "electricista",
            "electricistas",
            "empresa de electricidad",
            "servicio eléctrico",
            "servicio electrico"
        ]
    },
    {
        name: "Fontanería",
        keywords: [
            "fontanero",
            "fontaneros",
            "fontanería",
            "fontaneria"
        ]
    },
    {
        name: "Cerrajería",
        keywords: [
            "cerrajero",
            "cerrajeros",
            "cerrajería",
            "cerrajeria"
        ]
    },
    {
        name: "Reformas y construcción",
        keywords: [
            "reformas",
            "reformista",
            "constructor",
            "constructora",
            "contratista",
            "empresa constructora",
            "albañil",
            "albañiles"
        ]
    }
];

// ============================================================
// UTILIDADES
// ============================================================

function clean(value) {
    if (value === undefined || value === null) {
        return "";
    }

    return String(value).trim();
}

function number(value) {
    if (value === undefined || value === null || value === "") {
        return 0;
    }

    const normalized = String(value)
        .replace(",", ".")
        .replace(/[^\d.-]/g, "");

    const result = Number(normalized);

    return Number.isFinite(result) ? result : 0;
}

function bool(value) {
    return (
        value === true ||
        value === "true" ||
        value === "TRUE" ||
        value === "1" ||
        value === 1
    );
}

function escapeHtml(value) {
    return clean(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function safeUrl(value) {
    try {
        const url = new URL(clean(value));

        if (!["http:", "https:"].includes(url.protocol)) {
            return "";
        }

        return url.href;
    } catch {
        return "";
    }
}

function csvParse(text) {
    const rows = [];

    let row = [];
    let field = "";
    let quoted = false;

    for (let i = 0; i < text.length; i += 1) {
        const char = text[i];

        if (quoted) {
            if (char === '"' && text[i + 1] === '"') {
                field += '"';
                i += 1;
            } else if (char === '"') {
                quoted = false;
            } else {
                field += char;
            }

            continue;
        }

        if (char === '"') {
            quoted = true;
        } else if (char === ",") {
            row.push(field);
            field = "";
        } else if (char === "\n" || char === "\r") {
            if (char === "\r" && text[i + 1] === "\n") {
                i += 1;
            }

            row.push(field);
            field = "";

            if (row.some((value) => value !== "")) {
                rows.push(row);
            }

            row = [];
        } else {
            field += char;
        }
    }

    if (field || row.length) {
        row.push(field);
        rows.push(row);
    }

    const [headers = [], ...records] = rows;

    headers[0] = clean(headers[0]).replace(/^\uFEFF/, "");

    return records.map((record) => {
        const result = {};

        headers.forEach((header, index) => {
            result[header] = clean(record[index]);
        });

        return result;
    });
}

function readCsv(filePath) {
    return csvParse(fs.readFileSync(filePath, "utf8"));
}

// ============================================================
// DETECCIÓN DE COLUMNAS
// ============================================================

function getField(row, fields) {
    for (const field of fields) {
        if (row[field] !== undefined && row[field] !== "") {
            return row[field];
        }
    }

    return "";
}

// ============================================================
// NICHO
// ============================================================

function normalizeText(value) {
    return clean(value)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function getNiche(category, name) {
    const text = normalizeText(`${category} ${name}`);

    for (const group of NICHE_GROUPS) {
        const match = group.keywords.some((keyword) =>
            text.includes(normalizeText(keyword))
        );

        if (match) {
            return group.name;
        }
    }

    return clean(category) || "Otros";
}

// ============================================================
// CLASIFICACIÓN COMERCIAL
// ============================================================

function getWebsiteType(lead) {
    return normalizeText(
        getField(lead, [
            "websiteType",
            "website_type"
        ])
    );
}

function isNoWebsite(lead) {
    const type = getWebsiteType(lead);

    return [
        "none",
        "no_website",
        "website_not_found",
        "sin_web"
    ].includes(type);
}

function isSocial(lead) {
    const type = getWebsiteType(lead);

    return [
        "social",
        "social_only"
    ].includes(type);
}

function isDirectory(lead) {
    const type = getWebsiteType(lead);

    return [
        "directory",
        "directory_only"
    ].includes(type);
}

function isWeakWebsite(lead) {
    const quality = normalizeText(
        getField(lead, [
            "websiteQuality",
            "website_quality"
        ])
    );

    return [
        "poor",
        "weak"
    ].includes(quality);
}

function isHigh(lead) {
    const level = normalizeText(
        getField(lead, [
            "opportunityLevel",
            "preliminaryOpportunityLevel",
            "opportunity_level"
        ])
    );

    return level === "high";
}

function opportunityScore(lead) {
    return number(
        getField(lead, [
            "opportunityScore",
            "preliminaryOpportunityScore",
            "opportunity_score",
            "preliminary_opportunity_score"
        ])
    );
}

function isSellable(lead) {
    return (
        isNoWebsite(lead) ||
        isSocial(lead) ||
        isWeakWebsite(lead) ||
        opportunityScore(lead) >= MIN_SELLABLE_SCORE
    );
}

// ============================================================
// NORMALIZACIÓN DE LEADS
// ============================================================

function normalizeLead(row, sourceFile) {
    const name = getField(row, [
        "name",
        "title",
        "businessName"
    ]);

    const category = getField(row, [
        "category",
        "categoryName"
    ]);

    const rating = number(
        getField(row, [
            "rating",
            "totalScore"
        ])
    );

    const reviews = number(
        getField(row, [
            "reviews",
            "reviewsCount"
        ])
    );

    const website = getField(row, [
        "website",
        "inputWebsite",
        "finalUrl"
    ]);

    const phone = getField(row, [
        "phone",
        "phoneUnformatted"
    ]);

    const googleMapsUrl = getField(row, [
        "googleMapsUrl",
        "url"
    ]);

    const websiteScore = number(
        getField(row, [
            "websiteScore"
        ])
    );

    const businessScore = number(
        getField(row, [
            "businessScore"
        ])
    );

    const preliminaryScore = number(
        getField(row, [
            "preliminaryOpportunityScore"
        ])
    );

    const finalOpportunityScore = number(
        getField(row, [
            "opportunityScore"
        ])
    );

    const score =
        finalOpportunityScore ||
        preliminaryScore ||
        businessScore ||
        websiteScore;

    return {
        ...row,

        sourceFile,

        name,
        category,
        niche: getNiche(category, name),

        rating,
        reviews,

        phone,
        website,
        googleMapsUrl,

        websiteType: getWebsiteType(row),
        websiteQuality: clean(
            getField(row, [
                "websiteQuality",
                "website_quality"
            ])
        ),

        opportunityScore: score,

        businessScore,

        isHigh: isHigh(row),
        isNoWebsite: isNoWebsite(row),
        isSocial: isSocial(row),
        isDirectory: isDirectory(row),
        isWeakWebsite: isWeakWebsite(row),
        isSellable: isSellable(row)
    };
}

// ============================================================
// CARGA DE TODOS LOS CSV
// ============================================================

function loadAllLeads() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        throw new Error(
            `No existe la carpeta output: ${OUTPUT_DIR}`
        );
    }

    // ========================================================
    // BUSCAR RECURSIVAMENTE TODOS LOS CSV
    // ========================================================

    function findCsvFiles(directory) {
        const results = [];

        const entries = fs.readdirSync(
            directory,
            { withFileTypes: true }
        );

        for (const entry of entries) {
            const fullPath = path.join(
                directory,
                entry.name
            );

            if (entry.isDirectory()) {
                results.push(
                    ...findCsvFiles(fullPath)
                );
                continue;
            }

            if (
                entry.isFile() &&
                entry.name
                    .toLowerCase()
                    .endsWith(".csv")
            ) {
                results.push(fullPath);
            }
        }

        return results;
    }

    const csvFiles =
        findCsvFiles(OUTPUT_DIR);

    console.log(
        `📄 CSV encontrados: ${csvFiles.length}`
    );

    if (!csvFiles.length) {
        return [];
    }

    // ========================================================
    // AGRUPAR POR CARPETA DE NICHO
    // ========================================================

    const nicheFiles = new Map();

    for (const filePath of csvFiles) {

        const relative =
            path.relative(
                OUTPUT_DIR,
                filePath
            );

        const parts =
            relative.split(path.sep);

        /*
         * Si está dentro de:
         *
         * output/electricista/xxx.csv
         *
         * el nicho será "electricista".
         *
         * Si está directamente en output:
         *
         * output/xxx.csv
         *
         * usamos "_root".
         */

        const niche =
            parts.length >= 2
                ? parts[0]
                : "_root";

        if (!nicheFiles.has(niche)) {
            nicheFiles.set(
                niche,
                []
            );
        }

        nicheFiles
            .get(niche)
            .push(filePath);
    }

    // ========================================================
    // PRIORIDAD DE ARCHIVOS
    // ========================================================

    const FILE_PRIORITY = [
        "website-analysis.csv",
        "potential-leads.csv",
        "audit-queue.csv",
        "priority-leads.csv"
    ];

    const selectedFiles = [];

    for (
        const [
            niche,
            files
        ] of nicheFiles.entries()
    ) {

        let selected = null;

        // Primero intentamos encontrar
        // el archivo más completo.

        for (
            const preferredName
            of FILE_PRIORITY
        ) {

            const candidate =
                files.find(
                    (file) =>
                        path.basename(
                            file
                        ).toLowerCase() ===
                        preferredName
                );

            if (candidate) {
                selected =
                    candidate;

                break;
            }
        }

        // Si no coincide con ninguno de
        // los nombres conocidos, usamos
        // el primer CSV encontrado.

        if (!selected) {
            selected = files[0];
        }

        selectedFiles.push({
            niche,
            filePath: selected
        });

        console.log(
            `   📂 ${niche} → ${path.basename(selected)}`
        );
    }

    // ========================================================
    // LEER LOS ARCHIVOS SELECCIONADOS
    // ========================================================

    const allLeads = [];

    for (
        const {
            niche,
            filePath
        } of selectedFiles
    ) {

        let rows;

        try {
            rows = readCsv(
                filePath
            );
        } catch (error) {

            console.warn(
                `⚠️ No se pudo leer ${filePath}`
            );

            console.warn(
                error.message
            );

            continue;
        }

        console.log(
            `      ${rows.length} registros`
        );

        for (const row of rows) {

            const lead =
                normalizeLead(
                    row,
                    path.relative(
                        OUTPUT_DIR,
                        filePath
                    )
                );

            if (!lead.name) {
                continue;
            }

            /*
             * Guardamos el nicho de origen.
             *
             * Después normalizeLead() puede
             * reclasificar categorías conocidas,
             * pero el origen queda disponible.
             */

            lead.sourceNiche =
                niche;

            allLeads.push(
                lead
            );
        }
    }

    return allLeads;
}

// ============================================================
// ELIMINACIÓN DE DUPLICADOS
// ============================================================

function deduplicateLeads(leads) {
    const map = new Map();

    for (const lead of leads) {
        const mapsUrl = clean(
            lead.googleMapsUrl
        ).toLowerCase();

        const key =
            mapsUrl ||
            `${normalizeText(lead.name)}|${normalizeText(
                lead.phone
            )}`;

        if (!map.has(key)) {
            map.set(key, lead);
            continue;
        }

        const existing = map.get(key);

        // Conservamos el registro que tenga
        // más información.
        const existingCompleteness =
            Object.values(existing)
                .filter(Boolean)
                .length;

        const newCompleteness =
            Object.values(lead)
                .filter(Boolean)
                .length;

        if (newCompleteness > existingCompleteness) {
            map.set(key, lead);
        }
    }

    return [...map.values()];
}

// ============================================================
// ANÁLISIS DE NICHOS
// ============================================================

function volumeScore(count) {
    if (count >= 100) return 45;
    if (count >= 75) return 40;
    if (count >= 50) return 35;
    if (count >= 30) return 30;
    if (count >= 20) return 25;
    if (count >= 10) return 20;
    if (count >= 5) return 12;
    if (count >= 3) return 7;
    if (count >= 2) return 4;

    // Un solo lead no debe competir con un nicho real.
    return 1;
}

function calculateNichePotential(leads) {
    const total = leads.length;

    if (!total) {
        return 0;
    }

    const high = leads.filter(
        (lead) => lead.isHigh
    ).length;

    const noWebsite = leads.filter(
        (lead) => lead.isNoWebsite
    ).length;

    const weakWebsite = leads.filter(
        (lead) => lead.isWeakWebsite
    ).length;

    const sellable = leads.filter(
        (lead) => lead.isSellable
    ).length;

    const averageScore =
        leads.reduce(
            (sum, lead) =>
                sum + lead.opportunityScore,
            0
        ) / total;

    // --------------------------------------------------------
    // COMPONENTE 1 — VOLUMEN
    // --------------------------------------------------------

    const volume = volumeScore(total);

    // --------------------------------------------------------
    // COMPONENTE 2 — OPORTUNIDADES HIGH
    // --------------------------------------------------------

    const highPoints = Math.min(
        30,
        high * 5
    );

    // --------------------------------------------------------
    // COMPONENTE 3 — SIN WEB
    // --------------------------------------------------------

    const noWebsitePoints = Math.min(
        20,
        noWebsite * 2
    );

    // --------------------------------------------------------
    // COMPONENTE 4 — WEB DÉBIL
    // --------------------------------------------------------

    const weakPoints = Math.min(
        10,
        weakWebsite
    );

    // --------------------------------------------------------
    // COMPONENTE 5 — CALIDAD MEDIA
    // --------------------------------------------------------

    const qualityPoints =
        Math.min(
            20,
            averageScore * 0.20
        );

    // --------------------------------------------------------
    // COMPONENTE 6 — CONVERSIÓN POTENCIAL
    //
    // Premia que haya muchos leads realmente atacables.
    // --------------------------------------------------------

    const sellableRatio =
        sellable / total;

    const sellablePoints =
        Math.min(
            20,
            sellableRatio * 20
        );

    // --------------------------------------------------------
    // PENALIZACIÓN POR MUESTRA PEQUEÑA
    //
    // Evita:
    // 1 lead → 100% HIGH → ranking #1
    // --------------------------------------------------------

    let sampleMultiplier = 1;

    if (total === 1) {
        sampleMultiplier = 0.35;
    } else if (total === 2) {
        sampleMultiplier = 0.50;
    } else if (total === 3) {
        sampleMultiplier = 0.65;
    } else if (total <= 5) {
        sampleMultiplier = 0.80;
    }

    const raw =
        volume +
        highPoints +
        noWebsitePoints +
        weakPoints +
        qualityPoints +
        sellablePoints;

    const finalScore =
        raw * sampleMultiplier;

    return {
        score: Math.round(
            Math.min(100, finalScore)
        ),

        rawScore: Math.round(raw),

        volumePoints: volume,
        highPoints,
        noWebsitePoints,
        weakPoints,
        qualityPoints: Math.round(
            qualityPoints
        ),
        sellablePoints: Math.round(
            sellablePoints
        ),

        sampleMultiplier,

        total,
        high,
        noWebsite,
        weakWebsite,
        sellable,

        averageScore: Math.round(
            averageScore * 10
        ) / 10,

        highPercentage:
            Math.round(
                (high / total) * 1000
            ) / 10,

        sellablePercentage:
            Math.round(
                (sellable / total) * 1000
            ) / 10
    };
}

function buildNicheAnalysis(leads) {
    const groups = new Map();

    for (const lead of leads) {
        if (!groups.has(lead.niche)) {
            groups.set(
                lead.niche,
                []
            );
        }

        groups
            .get(lead.niche)
            .push(lead);
    }

    const results = [];

    for (const [
        niche,
        nicheLeads
    ] of groups.entries()) {
        const analysis =
            calculateNichePotential(
                nicheLeads
            );

        results.push({
            niche,
            leads: nicheLeads,
            ...analysis
        });
    }

    return results.sort(
        (a, b) => {

            if (
                b.score !==
                a.score
            ) {
                return (
                    b.score -
                    a.score
                );
            }

            if (
                b.sellable !==
                a.sellable
            ) {
                return (
                    b.sellable -
                    a.sellable
                );
            }

            return (
                b.total -
                a.total
            );
        }
    );
}

// ============================================================
// CSV MERGED
// ============================================================

function escapeCsv(value) {
    const text = clean(value);

    return /[",\n\r]/.test(text)
        ? `"${text.replace(/"/g, '""')}"`
        : text;
}

function writeMergedCsv(leads) {
    const filePath = path.join(
        OUTPUT_DIR,
        "merged-leads.csv"
    );

    const columns = [
        "name",
        "category",
        "niche",
        "rating",
        "reviews",
        "phone",
        "website",
        "websiteType",
        "websiteQuality",
        "opportunityScore",
        "businessScore",
        "isHigh",
        "isNoWebsite",
        "isSocial",
        "isDirectory",
        "isWeakWebsite",
        "isSellable",
        "city",
        "state",
        "googleMapsUrl",
        "sourceFile"
    ];

    const rows = [
        columns.join(","),

        ...leads.map(
            (lead) =>
                columns
                    .map((column) =>
                        escapeCsv(
                            lead[column]
                        )
                    )
                    .join(",")
        )
    ];

    fs.writeFileSync(
        filePath,
        rows.join("\n"),
        "utf8"
    );

    return filePath;
}

// ============================================================
// HTML
// ============================================================

function renderNicheTable(niches) {
    return niches
        .map(
            (niche, index) => {

                let priorityClass =
                    "";

                if (niche.score >= 70) {
                    priorityClass =
                        "excellent";
                } else if (
                    niche.score >= 50
                ) {
                    priorityClass =
                        "good";
                } else if (
                    niche.score >= 30
                ) {
                    priorityClass =
                        "medium";
                }

                return `
<tr>
    <td class="rank">
        ${index + 1}
    </td>

    <td>
        <strong>
            ${escapeHtml(
                    niche.niche
                )}
        </strong>
    </td>

    <td>
        <strong>
            ${niche.total}
        </strong>
    </td>

    <td>
        <strong class="${priorityClass}">
            ${niche.sellable}
        </strong>
    </td>

    <td>
        ${niche.high}
    </td>

    <td>
        ${niche.highPercentage}%
    </td>

    <td>
        ${niche.noWebsite}
    </td>

    <td>
        ${niche.weakWebsite}
    </td>

    <td>
        ${niche.averageScore}
    </td>

    <td>
        <span class="potential ${priorityClass}">
            ${niche.score}
        </span>
    </td>
</tr>
`;
            }
        )
        .join("");
}

function renderLeadCards(leads) {
    return leads
        .map(
            (lead, index) => {

                const maps =
                    safeUrl(
                        lead.googleMapsUrl
                    );

                const website =
                    safeUrl(
                        lead.website
                    );

                const opportunity =
                    lead.opportunityScore;

                let badge =
                    "LOW";

                if (
                    lead.isHigh ||
                    opportunity >= 75
                ) {
                    badge = "HIGH";
                } else if (
                    opportunity >= 55
                ) {
                    badge = "MEDIUM";
                }

                return `
<article
    class="lead-card"
    data-search="${escapeHtml(
                    normalizeText(
                        `${lead.name}
             ${lead.category}
             ${lead.niche}`
                    )
                )}"
    data-level="${badge}"
    data-sellable="${lead.isSellable}"
>

<div class="lead-header">

    <div>
        <div class="lead-rank">
            #${index + 1}
        </div>

        <h3>
            ${escapeHtml(
                    lead.name
                )}
        </h3>

        <p class="category">
            ${escapeHtml(
                    lead.category ||
                    "Negocio local"
                )}
        </p>

        <p class="niche">
            ${escapeHtml(
                    lead.niche
                )}
        </p>
    </div>

    <div class="lead-score">
        <strong>
            ${opportunity}
        </strong>

        <span>
            ${badge}
        </span>
    </div>

</div>

<div class="stats">

    <span>
        ⭐ ${lead.rating || "—"}
    </span>

    <span>
        ${lead.reviews || 0}
        reseñas
    </span>

    ${lead.isNoWebsite
                        ? `<span class="danger">SIN WEB</span>`
                        : ""
                    }

    ${lead.isWeakWebsite
                        ? `<span class="warning">WEB DÉBIL</span>`
                        : ""
                    }

    ${lead.isSocial
                        ? `<span>SOCIAL</span>`
                        : ""
                    }

</div>

<div class="lead-body">

    <p>
        <strong>
            Oportunidad:
        </strong>

        ${lead.isNoWebsite
                        ? "No tiene web registrada."
                        : lead.isWeakWebsite
                            ? "Tiene una web que presenta señales de mejora."
                            : lead.isSocial
                                ? "Tiene presencia social pero no una web propia sólida."
                                : "Tiene presencia web."
                    }
    </p>

    ${lead.phone
                        ? `
<p>
    <strong>
        Teléfono:
    </strong>

    ${escapeHtml(
                            lead.phone
                        )}
</p>
`
                        : ""
                    }

</div>

<div class="actions">

    ${maps
                        ? `
<a
    href="${escapeHtml(
                            maps
                        )}"
    target="_blank"
    rel="noopener"
>
    Google Maps ↗
</a>
`
                        : ""
                    }

    ${website
                        ? `
<a
    href="${escapeHtml(
                            website
                        )}"
    target="_blank"
    rel="noopener"
>
    Web ↗
</a>
`
                        : ""
                    }

</div>

</article>
`;
            }
        )
        .join("");
}

function renderDashboard(
    leads,
    niches
) {
    const total =
        leads.length;

    const sellable =
        leads.filter(
            (lead) =>
                lead.isSellable
        ).length;

    const high =
        leads.filter(
            (lead) =>
                lead.isHigh
        ).length;

    const noWebsite =
        leads.filter(
            (lead) =>
                lead.isNoWebsite
        ).length;

    const weak =
        leads.filter(
            (lead) =>
                lead.isWeakWebsite
        ).length;

    const topNiche =
        niches[0];

    return `<!DOCTYPE html>

<html lang="es">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    Warrior Code · Lead Intelligence V2
</title>

<style>

:root {
    --bg: #080b12;
    --panel: #111722;
    --panel2: #171e2c;
    --line: #283244;
    --text: #f2f5f9;
    --muted: #8995a8;
    --blue: #60a5fa;
    --green: #4ade80;
    --yellow: #facc15;
    --red: #fb7185;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background:
        radial-gradient(
            circle at top,
            #172033 0,
            var(--bg) 45%
        );
    color: var(--text);
    font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}

main {
    max-width: 1500px;
    margin: auto;
    padding: 45px 25px 80px;
}

header {
    margin-bottom: 35px;
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: .14em;
    font-size: .72rem;
    color: var(--blue);
    font-weight: 800;
}

h1 {
    font-size: clamp(
        2rem,
        5vw,
        3.5rem
    );
    margin: 8px 0;
}

.subtitle {
    color: var(--muted);
    max-width: 850px;
}

.metrics {
    display: grid;
    grid-template-columns:
        repeat(
            auto-fit,
            minmax(170px, 1fr)
        );
    gap: 14px;
    margin-bottom: 35px;
}

.metric {
    background:
        rgba(17,23,34,.92);
    border:
        1px solid var(--line);
    border-radius: 16px;
    padding: 20px;
}

.metric strong {
    display: block;
    font-size: 2rem;
}

.metric span {
    color: var(--muted);
    font-size: .85rem;
}

.section {
    margin-top: 45px;
}

.section-header {
    margin-bottom: 18px;
}

.section-header h2 {
    margin: 0;
}

.section-header p {
    color: var(--muted);
}

.table-wrap {
    overflow-x: auto;
    background: var(--panel);
    border:
        1px solid var(--line);
    border-radius: 16px;
}

table {
    width: 100%;
    border-collapse: collapse;
    min-width: 950px;
}

th,
td {
    padding: 13px 15px;
    border-bottom:
        1px solid var(--line);
    text-align: left;
}

th {
    color: var(--muted);
    font-size: .75rem;
    text-transform: uppercase;
    letter-spacing: .06em;
}

.rank {
    color: var(--muted);
}

.potential {
    display: inline-flex;
    min-width: 42px;
    justify-content: center;
    padding: 5px 8px;
    border-radius: 8px;
    font-weight: 800;
}

.excellent {
    color: var(--green);
}

.good {
    color: #93c5fd;
}

.medium {
    color: var(--yellow);
}

.potential.excellent {
    background:
        rgba(74,222,128,.12);
}

.potential.good {
    background:
        rgba(96,165,250,.12);
}

.potential.medium {
    background:
        rgba(250,204,21,.12);
}

.controls {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

input,
select {
    background: var(--panel);
    border:
        1px solid var(--line);
    color: var(--text);
    padding: 11px 13px;
    border-radius: 9px;
    font: inherit;
}

input {
    flex: 1;
    min-width: 280px;
}

.leads-grid {
    display: grid;
    grid-template-columns:
        repeat(
            auto-fill,
            minmax(330px, 1fr)
        );
    gap: 16px;
}

.lead-card {
    background: var(--panel);
    border:
        1px solid var(--line);
    border-radius: 16px;
    padding: 19px;
}

.lead-header {
    display: flex;
    justify-content: space-between;
    gap: 15px;
}

.lead-rank {
    color: var(--muted);
    font-size: .75rem;
}

.lead-card h3 {
    margin: 3px 0;
    font-size: 1.1rem;
}

.category,
.niche {
    margin: 3px 0;
    color: var(--muted);
}

.niche {
    color: var(--blue);
    font-size: .82rem;
}

.lead-score {
    text-align: center;
    background: var(--panel2);
    border-radius: 11px;
    padding: 8px 11px;
    height: fit-content;
}

.lead-score strong {
    display: block;
    font-size: 1.5rem;
}

.lead-score span {
    font-size: .65rem;
    font-weight: 800;
}

.stats {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
    margin: 15px 0;
}

.stats span {
    background: var(--panel2);
    border-radius: 999px;
    padding: 4px 8px;
    font-size: .72rem;
}

.stats .danger {
    color: var(--red);
}

.stats .warning {
    color: var(--yellow);
}

.lead-body {
    color: #c5cedc;
    font-size: .88rem;
}

.actions {
    display: flex;
    gap: 15px;
    margin-top: 16px;
}

.actions a {
    color: #93c5fd;
    text-decoration: none;
    font-weight: 700;
}

.actions a:hover {
    text-decoration: underline;
}

.hidden {
    display: none;
}

.explanation {
    background: var(--panel);
    border:
        1px solid var(--line);
    border-radius: 16px;
    padding: 20px;
    color: var(--muted);
    line-height: 1.7;
}

.explanation strong {
    color: var(--text);
}

@media(max-width:700px) {

    main {
        padding:
            28px 15px 60px;
    }

    .metrics {
        grid-template-columns:
            repeat(2, 1fr);
    }

}

</style>

</head>

<body>

<main>

<header>

<p class="eyebrow">
Warrior Code · Lead Intelligence V2
</p>

<h1>
¿Dónde debo vender primero?
</h1>

<p class="subtitle">
Dashboard comercial generado localmente.
El ranking de nichos prioriza el tamaño de la oportunidad,
la cantidad de negocios vendibles y la calidad de los leads,
no simplemente el porcentaje de HIGH.
</p>

</header>

<section class="metrics">

<div class="metric">
<strong>${total}</strong>
<span>Leads totales</span>
</div>

<div class="metric">
<strong>${sellable}</strong>
<span>Leads vendibles</span>
</div>

<div class="metric">
<strong>${high}</strong>
<span>HIGH</span>
</div>

<div class="metric">
<strong>${noWebsite}</strong>
<span>Sin web</span>
</div>

<div class="metric">
<strong>${weak}</strong>
<span>Web débil</span>
</div>

<div class="metric">
<strong>
${topNiche
            ? escapeHtml(
                topNiche.niche
            )
            : "—"
        }
</strong>
<span>Mejor nicho</span>
</div>

</section>

<section class="section">

<div class="section-header">

<h2>
🥇 Mejores nichos para atacar
</h2>

<p>
El ranking evita que un nicho con 1 solo negocio
domine artificialmente el mercado.
</p>

</div>

<div class="table-wrap">

<table>

<thead>

<tr>

<th>#</th>
<th>Nicho</th>
<th>Leads</th>
<th>Vendibles</th>
<th>HIGH</th>
<th>% HIGH</th>
<th>Sin web</th>
<th>Web débil</th>
<th>Score medio</th>
<th>Potencial</th>

</tr>

</thead>

<tbody>

${renderNicheTable(
            niches
        )}

</tbody>

</table>

</div>

<div class="explanation">

<strong>
Cómo interpretar el ranking:
</strong>

<br>

El <strong>Potencial</strong> combina volumen,
leads vendibles, oportunidades HIGH,
negocios sin web, webs débiles y calidad media.
Además, las muestras demasiado pequeñas reciben
una penalización para evitar conclusiones falsas.

</div>

</section>

<section class="section">

<div class="section-header">

<h2>
🎯 Negocios a contactar
</h2>

<p>
Ordenados por oportunidad comercial individual.
</p>

</div>

<div class="controls">

<input
    id="search"
    type="search"
    placeholder="Buscar negocio, nicho o categoría..."
>

<select id="level">

<option value="">
Todos
</option>

<option value="HIGH">
HIGH
</option>

<option value="MEDIUM">
MEDIUM
</option>

<option value="LOW">
LOW
</option>

</select>

<select id="sellable">

<option value="">
Todos
</option>

<option value="true">
Solo vendibles
</option>

<option value="false">
No vendibles
</option>

</select>

</div>

<div
    class="leads-grid"
    id="leads"
>

${renderLeadCards(
            [...leads].sort(
                (a, b) =>
                    b.opportunityScore -
                    a.opportunityScore ||
                    b.reviews -
                    a.reviews
            )
        )}

</div>

</section>

</main>

<script>

const search =
    document.getElementById(
        "search"
    );

const level =
    document.getElementById(
        "level"
    );

const sellable =
    document.getElementById(
        "sellable"
    );

const cards = [
    ...document.querySelectorAll(
        ".lead-card"
    )
];

function applyFilters() {

    const query =
        search.value
            .toLowerCase()
            .trim();

    const selectedLevel =
        level.value;

    const selectedSellable =
        sellable.value;

    cards.forEach(
        (card) => {

            const text =
                card.dataset.search;

            const cardLevel =
                card.dataset.level;

            const cardSellable =
                card.dataset.sellable;

            const matchesSearch =
                !query ||
                text.includes(query);

            const matchesLevel =
                !selectedLevel ||
                cardLevel ===
                    selectedLevel;

            const matchesSellable =
                !selectedSellable ||
                cardSellable ===
                    selectedSellable;

            card.classList.toggle(
                "hidden",
                !(
                    matchesSearch &&
                    matchesLevel &&
                    matchesSellable
                )
            );

        }
    );
}

search.addEventListener(
    "input",
    applyFilters
);

level.addEventListener(
    "change",
    applyFilters
);

sellable.addEventListener(
    "change",
    applyFilters
);

</script>

</body>

</html>`;
}

// ============================================================
// MAIN
// ============================================================

function main() {

    console.log("");
    console.log(
        "=============================================="
    );
    console.log(
        "🚀 WARRIOR CODE — LEAD MERGER V2"
    );
    console.log(
        "=============================================="
    );
    console.log("");

    console.log(
        "📂 Buscando CSVs en:"
    );

    console.log(
        OUTPUT_DIR
    );

    const rawLeads =
        loadAllLeads();

    console.log(
        `📥 Registros encontrados: ${rawLeads.length}`
    );

    const leads =
        deduplicateLeads(
            rawLeads
        );

    console.log(
        `🧹 Después de eliminar duplicados: ${leads.length}`
    );

    if (!leads.length) {
        console.log(
            "❌ No se encontraron leads."
        );

        process.exit(1);
    }

    const niches =
        buildNicheAnalysis(
            leads
        );

    const csv =
        writeMergedCsv(
            leads
        );

    fs.mkdirSync(
        REPORT_DIR,
        {
            recursive: true
        }
    );

    fs.writeFileSync(
        REPORT_FILE,
        renderDashboard(
            leads,
            niches
        ),
        "utf8"
    );

    console.log("");

    console.log(
        "🔥 TOP NICHOS"
    );

    niches
        .slice(0, 10)
        .forEach(
            (niche, index) => {

                console.log(
                    `${index + 1}. ` +
                    `${niche.niche} | ` +
                    `Potencial ${niche.score} | ` +
                    `${niche.total} leads | ` +
                    `${niche.sellable} vendibles | ` +
                    `${niche.high} HIGH`
                );

            }
        );

    console.log("");

    console.log(
        "📄 Archivos generados:"
    );

    console.log(
        `CSV: ${csv}`
    );

    console.log(
        `Dashboard: ${REPORT_FILE}`
    );

    console.log("");

    console.log(
        "=============================================="
    );
}

try {
    main();
} catch (error) {

    console.error(
        "❌ Error:",
        error.message
    );

    process.exitCode = 1;
}