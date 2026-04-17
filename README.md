<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BDJ Product Katalog

Interaktywny katalog produktów dla Blue Dragon Jet.

## Deploy na GitHub Pages

### Konfiguracja (jednorazowo)

1. W repozytorium na GitHubie przejdź do **Settings → Pages**
2. W sekcji **Source** wybierz **"GitHub Actions"** (nie "Deploy from a branch"!)
3. Zapisz zmiany

### Wdrożenie

Każdy `git push` na gałąź `main` automatycznie uruchomi build i deploy przez GitHub Actions.

Możesz też uruchomić workflow ręcznie: **Actions → Deploy to GitHub Pages → Run workflow**

## Uruchomienie lokalne

**Wymagania:** Node.js

1. Zainstaluj zależności:
   ```
   npm install
   ```
2. (Opcjonalnie) Ustaw `GEMINI_API_KEY` w pliku `.env.local`
3. Uruchom aplikację:
   ```
   npm run dev
   ```
