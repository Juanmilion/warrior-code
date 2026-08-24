"use strict";

const { execSync } = require("child_process");

function run(command) {
    console.log(`\n> ${command}\n`);

    execSync(command, {
        stdio: "inherit",
        shell: true
    });
}

try {
    run("git add .");

    try {
        run('git diff --cached --quiet');

        console.log(
            "\nℹ️ No hay cambios para hacer commit."
        );

        process.exit(0);

    } catch {
        // Hay cambios staged.
    }

    const now = new Date();

    const date = now.toLocaleString(
        "es-ES",
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    );

    const message =
        `Update leads - ${date}`;

    run(
        `git commit -m "${message}"`
    );

    run(
        "git push -u origin main"
    );

    console.log(
        "\n✅ Git actualizado correctamente."
    );

} catch (error) {

    console.error(
        "\n❌ Error durante el proceso Git."
    );

    process.exit(1);
}