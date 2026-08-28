const QRCode = require("qrcode")
const fs = require("fs")
const path = require("path")

const url = process.argv[2]

if (!url) {
    console.error("❌ Debes proporcionar una URL.")
    console.error('Ejemplo: npm run qr -- "https://casaolivo.es/reservas"')
    process.exit(1)
}

try {
    new URL(url)
} catch {
    console.error("❌ La URL proporcionada no es válida.")
    process.exit(1)
}

const outputDir = path.join(__dirname, "output")

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
}

const parsedUrl = new URL(url)

const filename = parsedUrl.hostname
    .replace(/^www\./, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

const outputPath = path.join(outputDir, `${filename || "qr-code"}.png`)

QRCode.toFile(
    outputPath,
    url,
    {
        type: "png",
        width: 1000,
        margin: 4,
        errorCorrectionLevel: "H",
    },
    (error) => {
        if (error) {
            console.error("❌ Error generando el código QR:", error)
            process.exit(1)
        }

        console.log("✅ Código QR generado correctamente.")
        console.log(`🔗 URL: ${url}`)
        console.log(`📁 Archivo: ${outputPath}`)
    },
)