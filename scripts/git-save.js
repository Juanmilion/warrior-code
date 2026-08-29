import { execSync } from "node:child_process";
import { createInterface } from "node:readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

function run(command) {
    console.log(`\n→ ${command}`);

    execSync(command, {
        stdio: "inherit",
        shell: true,
    });
}

function getDate() {
    const now = new Date();

    return new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(now);
}

function question(text) {
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
}

async function main() {
    try {
        console.log("\n=== Warrior Code · Git Save ===\n");

        // Comprobar si hay cambios
        const status = execSync("git status --porcelain", {
            encoding: "utf8",
            shell: true,
        }).trim();

        if (!status) {
            console.log("✓ No hay cambios que guardar.\n");
            rl.close();
            return;
        }

        console.log("Cambios detectados.");

        const customAnswer = await question(
            "\n¿Quieres añadir un mensaje personalizado al commit? (s/N): "
        );

        let commitMessage;

        if (
            customAnswer.trim().toLowerCase() === "s" ||
            customAnswer.trim().toLowerCase() === "si" ||
            customAnswer.trim().toLowerCase() === "sí"
        ) {
            commitMessage = await question("Mensaje del commit: ");

            if (!commitMessage.trim()) {
                commitMessage = `Last update - ${getDate()}`;
            }
        } else {
            commitMessage = `Last update - ${getDate()}`;
        }

        console.log(`\nCommit: "${commitMessage}"`);

        // Añadir cambios
        run("git add .");

        // Commit
        run(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`);

        // Push
        run("git push -u origin main");

        console.log("\n✓ Cambios guardados y subidos correctamente.\n");
    } catch (error) {
        console.error("\n✖ Se ha producido un error.");
        console.error("Los cambios NO se han considerado correctamente subidos.");
        process.exitCode = 1;
    } finally {
        rl.close();
    }
}

main();