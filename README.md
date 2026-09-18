# Yene Birr (የኔ ብር) — Ethiopian Calendar Expense Tracker

A personal finance app built around the Ethiopian calendar: home dashboard,
add income/expense, calendar view, ledger & accounts, categories, budgets,
analysis, theming, and CSV export.

This repo follows the same CI/CD architecture as the Salon Manager reference
project: the web app is plain Vite (HTML/CSS/JS), and the Android project is
generated fresh in GitHub Actions rather than committed.

## Push this to GitHub and get an APK

1. Create a new empty repository on GitHub (no README/license, so it stays empty).
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yene Birr expense tracker"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. Go to your repo's **Actions** tab on GitHub. The **Build Android APK**
   workflow will run automatically on push (or trigger it manually with
   "Run workflow").
4. When it finishes, open the completed run and download the
   **yenebirr-debug-apk** artifact — that's your installable `.apk`.

## Local development (optional)

```bash
npm install
npm run dev       # live preview in a browser
npm run build     # produces /dist
```

## Project structure

```
yenebirr/
├── index.html              ← app shell
├── src/
│   ├── main.js              ← all app logic (calendar math, state, rendering)
│   └── style.css             ← all styling / themes
├── scripts/
│   └── setup-native-plugin.cjs   ← placeholder for future native plugins
├── capacitor.config.ts
├── vite.config.ts
├── package.json
└── .github/workflows/build-apk.yml
```

## Notes

- Data is stored on-device only (`localStorage`), per user — nothing is sent
  to a server. There is no backend in this project.
- App id is set to `com.melaku.yenebirr` in `capacitor.config.ts` — change it
  before a real release if you want a different package name.
- To customize the launcher icon/splash screen later, use
  `npx @capacitor/assets generate` after adding source art, or edit the
  generated `android/app/src/main/res` files directly once `android/` exists
  locally.
- This app has no custom native (Java/Kotlin) plugin yet, so
  `scripts/setup-native-plugin.cjs` is currently a safe no-op — it's kept so
  this repo matches the reusable pipeline pattern from other apps.
