#!/bin/bash

# Przejdź do folderu projektu (tam gdzie jest ten plik)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "================================================"
echo "  BDJ Product Catalog — Deploy na GitHub"
echo "================================================"
echo ""
echo "📁 Folder projektu: $DIR"
echo ""

# Inicjalizuj git jeśli nie istnieje
if [ ! -d ".git" ]; then
  echo "⚙️  Inicjalizacja repozytorium git..."
  git init
  git branch -M main
fi

# Ustaw lub zaktualizuj remote
if git remote | grep -q "origin"; then
  git remote set-url origin https://github.com/Smaily1337/BDJ-Product-Catalog.git
  echo "✅ Remote origin zaktualizowany"
else
  git remote add origin https://github.com/Smaily1337/BDJ-Product-Catalog.git
  echo "✅ Remote origin dodany"
fi

# Skonfiguruj git jeśli brak danych użytkownika
if [ -z "$(git config user.email)" ]; then
  git config user.email "bartlomiejrozycki5@gmail.com"
  git config user.name "Smaily1337"
fi

echo ""
echo "📦 Dodawanie plików..."
git add .

echo ""
echo "💾 Tworzenie commita..."
git commit -m "fix: napraw deployment na GitHub Pages" 2>/dev/null || echo "ℹ️  Brak nowych zmian do zacommitowania"

echo ""
echo "🚀 Wysyłanie na GitHub..."
echo "   (jeśli pojawi się prośba o hasło — wpisz swój GitHub Personal Access Token)"
echo ""
git push -u origin main

echo ""
echo "================================================"
echo "✅ Gotowe! Sprawdź GitHub Actions:"
echo "   https://github.com/Smaily1337/BDJ-Product-Catalog/actions"
echo "================================================"
echo ""
echo "Naciśnij Enter żeby zamknąć..."
read
