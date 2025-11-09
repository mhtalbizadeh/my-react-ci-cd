// scripts/lint-folders.js
import fs from "fs";
import path from "path";

// ریشه پروژه‌ای که می‌خواهیم بررسی کنیم
const rootDir = "src";

// Regex برای تشخیص camelCase
// شروع با حرف کوچک، و سپس حروف و اعداد یا کلمات جدید با حرف بزرگ
const camelCaseRegex = /^[a-z]+([A-Z][a-z0-9]*)*$/;

let hasError = false;

function checkDirectoryNames(directory) {
  const items = fs.readdirSync(directory, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      const dirName = item.name;

      if (!camelCaseRegex.test(dirName)) {
        console.error(
          `❌ Invalid folder name: "${dirName}" in "${directory}". Folders must be in camelCase.`
        );
        hasError = true;
      }

      // به صورت بازگشتی وارد پوشه‌های داخلی شو
      checkDirectoryNames(path.join(directory, dirName));
    }
  }
}

console.log("🔍 Checking folder naming conventions...");
checkDirectoryNames(rootDir);

if (hasError) {
  console.error("\nFolder naming convention check failed.");
  // این خط باعث می‌شود که اسکریپت با خطا خارج شده و CI/CD را متوقف کند
  process.exit(1);
} else {
  console.log("✅ All folder names are correct.");
}
