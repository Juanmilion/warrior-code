// "use strict";
// const { fs, path, clean, number, normalizeUrl, classifyWebsite, readCsv, writeCsv } = require("./lib");
// const root = path.join(__dirname, ".."); const inputFile = path.join(root, "data", "electricista-huelva.csv"); const output = path.join(root, "output");
// const columns = ["leadId", "name", "category", "rating", "reviews", "phone", "website", "websiteType", "websiteStatus", "address", "city", "state", "country", "googleMapsUrl", "businessScore", "businessReason", "preliminaryOpportunityScore", "preliminaryOpportunityLevel", "preliminaryOpportunityReason"];
// function businessScore(lead) { let score = 0; const reasons = []; if (lead.rating >= 4.8) { score += 30; reasons.push("excelente valoración"); } else if (lead.rating >= 4.5) { score += 25; reasons.push("buena valoración"); } else if (lead.rating >= 4) { score += 16; reasons.push("valoración positiva"); } if (lead.reviews >= 500) { score += 45; reasons.push("500+ reseñas"); } else if (lead.reviews >= 300) { score += 40; reasons.push("300+ reseñas"); } else if (lead.reviews >= 100) { score += 34; reasons.push("100+ reseñas"); } else if (lead.reviews >= 50) { score += 27; reasons.push("50+ reseñas"); } else if (lead.reviews >= 30) { score += 18; reasons.push("30+ reseñas"); } else if (lead.reviews >= 10) { score += 9; reasons.push("10+ reseñas"); } if (lead.phone) { score += 15; reasons.push("teléfono disponible"); } if (lead.googleMapsUrl) { score += 10; reasons.push("ficha de Google Maps"); } return { score: Math.min(score, 100), reason: reasons.join(" · ") || "pocas señales disponibles" }; }
// function preliminaryOpportunity(lead) { let score = 0; const reasons = []; const needs = { none: [45, "sin web registrada"], social: [38, "solo presencia social"], directory: [34, "solo presencia en directorio"], own_website: [5, "tiene web propia"], invalid: [20, "URL no válida"] }; const [points, reason] = needs[lead.websiteType] || [20, "presencia web desconocida"]; score += points; reasons.push(reason); if (lead.rating >= 4.8) { score += 20; reasons.push("excelente reputación"); } else if (lead.rating >= 4.5) { score += 16; reasons.push("buena reputación"); } else if (lead.rating >= 4) { score += 9; reasons.push("reputación positiva"); } if (lead.reviews >= 300) { score += 20; reasons.push("300+ reseñas"); } else if (lead.reviews >= 100) { score += 17; reasons.push("100+ reseñas"); } else if (lead.reviews >= 50) { score += 14; reasons.push("50+ reseñas"); } else if (lead.reviews >= 30) { score += 9; reasons.push("30+ reseñas"); } else if (lead.reviews >= 20) { score += 5; reasons.push("20+ reseñas"); } if (lead.phone) { score += 10; reasons.push("teléfono disponible"); } return { score: Math.min(score, 100), reason: reasons.join(" · ") }; }
// function initialStatus(type) { return ({ none: "website_not_found", social: "social_only", directory: "directory_only", own_website: "website_found", invalid: "invalid_url" })[type] || "unknown"; }
// if (!fs.existsSync(inputFile)) throw new Error(`No se encontró el CSV de entrada: ${inputFile}`);
// const leads = readCsv(inputFile).map((row) => { const website = normalizeUrl(row.website); const lead = { leadId: clean(row.url || row.googleMapsUrl) || `${clean(row.title || row.name || row.businessName).toLowerCase()}|${clean(row.address).toLowerCase()}`, name: clean(row.title || row.name || row.businessName), category: clean(row.categoryName || row.category), rating: number(row.totalScore || row.rating), reviews: number(row.reviewsCount || row.reviews), phone: clean(row.phone || row.phoneUnformatted), website, websiteType: classifyWebsite(website), address: clean(row.address), city: clean(row.city), state: clean(row.state), country: clean(row.countryCode || row.country), googleMapsUrl: clean(row.url || row.googleMapsUrl) }; const business = businessScore(lead); const opportunity = preliminaryOpportunity(lead); return { ...lead, websiteStatus: initialStatus(lead.websiteType), businessScore: business.score, businessReason: business.reason, preliminaryOpportunityScore: opportunity.score, preliminaryOpportunityLevel: opportunity.score >= 75 ? "HIGH" : opportunity.score >= 55 ? "MEDIUM" : "LOW", preliminaryOpportunityReason: opportunity.reason }; }).filter((lead) => lead.name).sort((a, b) => b.preliminaryOpportunityScore - a.preliminaryOpportunityScore || b.businessScore - a.businessScore || b.reviews - a.reviews);
// const auditQueue = leads.filter((lead) => lead.preliminaryOpportunityScore >= 45);
// writeCsv(path.join(output, "potential-leads.csv"), leads, columns); writeCsv(path.join(output, "audit-queue.csv"), auditQueue, columns);
// console.log(`Procesados ${leads.length} negocios; ${auditQueue.length} pasan a descubrimiento y auditoría.`);

"use strict";

const {
    fs,
    path,
    clean,
    number,
    normalizeUrl,
    classifyWebsite,
    readCsv,
    writeCsv
} = require("./lib");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "data");
const output = path.join(root, "output");

const columns = [
    "leadId",
    "name",
    "category",
    "rating",
    "reviews",
    "phone",
    "website",
    "websiteType",
    "websiteStatus",
    "address",
    "city",
    "state",
    "country",
    "googleMapsUrl",
    "businessScore",
    "businessReason",
    "preliminaryOpportunityScore",
    "preliminaryOpportunityLevel",
    "preliminaryOpportunityReason"
];

function businessScore(lead) {
    let score = 0;
    const reasons = [];

    if (lead.rating >= 4.8) {
        score += 30;
        reasons.push("excelente valoración");
    } else if (lead.rating >= 4.5) {
        score += 25;
        reasons.push("buena valoración");
    } else if (lead.rating >= 4) {
        score += 16;
        reasons.push("valoración positiva");
    }

    if (lead.reviews >= 500) {
        score += 45;
        reasons.push("500+ reseñas");
    } else if (lead.reviews >= 300) {
        score += 40;
        reasons.push("300+ reseñas");
    } else if (lead.reviews >= 100) {
        score += 34;
        reasons.push("100+ reseñas");
    } else if (lead.reviews >= 50) {
        score += 27;
        reasons.push("50+ reseñas");
    } else if (lead.reviews >= 30) {
        score += 18;
        reasons.push("30+ reseñas");
    } else if (lead.reviews >= 10) {
        score += 9;
        reasons.push("10+ reseñas");
    }

    if (lead.phone) {
        score += 15;
        reasons.push("teléfono disponible");
    }

    if (lead.googleMapsUrl) {
        score += 10;
        reasons.push("ficha de Google Maps");
    }

    return {
        score: Math.min(score, 100),
        reason: reasons.join(" · ") || "pocas señales disponibles"
    };
}

function preliminaryOpportunity(lead) {
    let score = 0;
    const reasons = [];

    const needs = {
        none: [45, "sin web registrada"],
        social: [38, "solo presencia social"],
        directory: [34, "solo presencia en directorio"],
        own_website: [5, "tiene web propia"],
        invalid: [20, "URL no válida"]
    };

    const [points, reason] =
        needs[lead.websiteType] || [20, "presencia web desconocida"];

    score += points;
    reasons.push(reason);

    if (lead.rating >= 4.8) {
        score += 20;
        reasons.push("excelente reputación");
    } else if (lead.rating >= 4.5) {
        score += 16;
        reasons.push("buena reputación");
    } else if (lead.rating >= 4) {
        score += 9;
        reasons.push("reputación positiva");
    }

    if (lead.reviews >= 300) {
        score += 20;
        reasons.push("300+ reseñas");
    } else if (lead.reviews >= 100) {
        score += 17;
        reasons.push("100+ reseñas");
    } else if (lead.reviews >= 50) {
        score += 14;
        reasons.push("50+ reseñas");
    } else if (lead.reviews >= 30) {
        score += 9;
        reasons.push("30+ reseñas");
    } else if (lead.reviews >= 20) {
        score += 5;
        reasons.push("20+ reseñas");
    }

    if (lead.phone) {
        score += 10;
        reasons.push("teléfono disponible");
    }

    return {
        score: Math.min(score, 100),
        reason: reasons.join(" · ")
    };
}

function initialStatus(type) {
    return ({
        none: "website_not_found",
        social: "social_only",
        directory: "directory_only",
        own_website: "website_found",
        invalid: "invalid_url"
    })[type] || "unknown";
}

// ============================================================
// 1. BUSCAR TODOS LOS CSV DE DATA/
// ============================================================

if (!fs.existsSync(dataDir)) {
    throw new Error(`No existe la carpeta de datos: ${dataDir}`);
}

const csvFiles = fs
    .readdirSync(dataDir)
    .filter((file) => file.toLowerCase().endsWith(".csv"))
    .map((file) => path.join(dataDir, file));

if (csvFiles.length === 0) {
    throw new Error(`No se encontraron archivos CSV en: ${dataDir}`);
}

console.log("");
console.log("========================================");
console.log("🚀 WARRIOR CODE — LEAD PROCESSOR");
console.log("========================================");
console.log(`📂 Carpeta: ${dataDir}`);
console.log(`📄 CSV encontrados: ${csvFiles.length}`);
console.log("");

// ============================================================
// 2. LEER TODOS LOS CSV
// ============================================================

let allRecords = [];

for (const file of csvFiles) {
    console.log(`📥 ${path.basename(file)}`);

    const records = readCsv(file);

    console.log(`   → ${records.length} registros`);

    allRecords.push(
        ...records.map((record) => ({
            ...record,
            sourceFile: path.basename(file)
        }))
    );
}

console.log("");
console.log(`📊 Registros totales antes de deduplicar: ${allRecords.length}`);

// ============================================================
// 3. TRANSFORMAR LEADS
// ============================================================

const leads = allRecords
    .map((row) => {
        const name = clean(
            row.title ||
            row.name ||
            row.businessName
        );

        const address = clean(row.address);

        const googleMapsUrl = clean(
            row.url ||
            row.googleMapsUrl
        );

        const website = normalizeUrl(row.website);

        const leadId =
            googleMapsUrl ||
            `${name.toLowerCase()}|${address.toLowerCase()}`;

        const lead = {
            leadId,

            name,

            category: clean(
                row.categoryName ||
                row.category
            ),

            rating: number(
                row.totalScore ||
                row.rating
            ),

            reviews: number(
                row.reviewsCount ||
                row.reviews
            ),

            phone: clean(
                row.phone ||
                row.phoneUnformatted
            ),

            website,

            websiteType: classifyWebsite(website),

            websiteStatus: "",

            address,

            city: clean(row.city),

            state: clean(row.state),

            country: clean(
                row.countryCode ||
                row.country
            ),

            googleMapsUrl
        };

        return lead;
    })
    .filter((lead) => lead.name);

// ============================================================
// 4. ELIMINAR DUPLICADOS
// ============================================================

const uniqueLeads = [];
const seen = new Set();

for (const lead of leads) {
    const key = lead.googleMapsUrl
        ? `maps:${lead.googleMapsUrl}`
        : `business:${lead.name.toLowerCase()}|${lead.address.toLowerCase()}`;

    if (seen.has(key)) {
        continue;
    }

    seen.add(key);
    uniqueLeads.push(lead);
}

console.log(
    `🧹 Duplicados eliminados: ${leads.length - uniqueLeads.length}`
);

console.log(
    `✅ Negocios únicos: ${uniqueLeads.length}`
);

// ============================================================
// 5. SCORING
// ============================================================

const scoredLeads = uniqueLeads
    .map((lead) => {

        const business = businessScore(lead);

        const opportunity =
            preliminaryOpportunity(lead);

        return {
            ...lead,

            websiteStatus:
                initialStatus(lead.websiteType),

            businessScore:
                business.score,

            businessReason:
                business.reason,

            preliminaryOpportunityScore:
                opportunity.score,

            preliminaryOpportunityLevel:
                opportunity.score >= 75
                    ? "HIGH"
                    : opportunity.score >= 55
                        ? "MEDIUM"
                        : "LOW",

            preliminaryOpportunityReason:
                opportunity.reason
        };
    })

    .sort(
        (a, b) =>
            b.preliminaryOpportunityScore -
            a.preliminaryOpportunityScore ||

            b.businessScore -
            a.businessScore ||

            b.reviews -
            a.reviews
    );

// ============================================================
// 6. COLA DE AUDITORÍA
// ============================================================

const auditQueue = scoredLeads.filter(
    (lead) =>
        lead.preliminaryOpportunityScore >= 45
);

// ============================================================
// 7. CREAR OUTPUT
// ============================================================

if (!fs.existsSync(output)) {
    fs.mkdirSync(output, {
        recursive: true
    });
}

writeCsv(
    path.join(output, "potential-leads.csv"),
    scoredLeads,
    columns
);

writeCsv(
    path.join(output, "audit-queue.csv"),
    auditQueue,
    columns
);

// ============================================================
// 8. RESUMEN
// ============================================================

const high = scoredLeads.filter(
    (lead) =>
        lead.preliminaryOpportunityLevel === "HIGH"
).length;

const medium = scoredLeads.filter(
    (lead) =>
        lead.preliminaryOpportunityLevel === "MEDIUM"
).length;

const low = scoredLeads.filter(
    (lead) =>
        lead.preliminaryOpportunityLevel === "LOW"
).length;

console.log("");
console.log("========================================");
console.log("📊 RESULTADO");
console.log("========================================");

console.log(
    `Negocios únicos: ${scoredLeads.length}`
);

console.log(
    `🔥 HIGH: ${high}`
);

console.log(
    `🟠 MEDIUM: ${medium}`
);

console.log(
    `⚪ LOW: ${low}`
);

console.log(
    `🔎 Cola de auditoría: ${auditQueue.length}`
);

console.log("");
console.log("📄 Archivos generados:");

console.log(
    `→ ${path.join(output, "potential-leads.csv")}`
);

console.log(
    `→ ${path.join(output, "audit-queue.csv")}`
);

console.log("========================================");