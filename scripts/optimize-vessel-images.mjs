import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "images", "vessels");
const outputDir = path.join(process.cwd(), "public", "images", "vessels-optimized");

fs.mkdirSync(outputDir, { recursive: true });

const validExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

const files = fs.readdirSync(inputDir).filter((file) => {
    const ext = path.extname(file);
    return validExtensions.includes(ext);
});

async function run() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);

        const baseName = path.parse(file).name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-_]/g, "");

        const outputPath = path.join(outputDir, `${baseName}.webp`);

        await sharp(inputPath)
            .rotate()
            .resize({
                width: 1600,
                height: 1600,
                fit: "inside",
                withoutEnlargement: true
            })
            .webp({
                quality: 76
            })
            .toFile(outputPath);

        const before = fs.statSync(inputPath).size;
        const after = fs.statSync(outputPath).size;

        console.log(
            `${file} -> ${baseName}.webp | ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`
        );
    }

    console.log("\nDone. Optimized images saved in:");
    console.log(outputDir);
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});