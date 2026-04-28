#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "================================================"
echo "  BDJ Product Catalog — Automatyczny Deploy"
echo "================================================"
echo ""

# Krok 1: Generuj SSH key jeśli nie istnieje
if [ ! -f ~/.ssh/id_ed25519 ]; then
  echo "🔑 Generowanie SSH key..."
  ssh-keygen -t ed25519 -C "bartlomiejrozycki5@gmail.com" -f ~/.ssh/id_ed25519 -N ""
  echo "✅ SSH key wygenerowany"
else
  echo "✅ SSH key już istnieje"
fi

# Krok 2: Dodaj do ssh-agent
eval "$(ssh-agent -s)" > /dev/null 2>&1
ssh-add ~/.ssh/id_ed25519 > /dev/null 2>&1

# Krok 3: Pokaż klucz i otwórz GitHub
echo ""
echo "================================================"
echo "📋 TWÓJ KLUCZ PUBLICZNY (skopiowany do schowka):"
echo "================================================"
cat ~/.ssh/id_ed25519.pub | pbcopy
cat ~/.ssh/id_ed25519.pub
echo ""
echo "✅ Klucz skopiowany do schowka!"
echo ""
echo "🌐 Otwieranie GitHub SSH settings..."
open "https://github.com/settings/ssh/new"
echo ""
echo "================================================"
echo "👆 W przeglądarce:"
echo "   1. W polu 'Title' wpisz: MacBook"
echo "   2. W polu 'Key' wklej (Cmd+V)"
echo "   3. Kliknij 'Add SSH key'"
echo "================================================"
echo ""
echo "Naciśnij Enter gdy dodasz klucz na GitHub..."
read

# Krok 4: Git setup i push
echo ""
echo "⚙️  Konfiguracja git..."

if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

git remote remove origin 2>/dev/null
git remote add origin git@github.com:Smaily1337/BDJ-Product-Catalog.git
git config user.email "bartlomiejrozycki5@gmail.com"
git config user.name "Smaily1337"

echo ""
echo "📦 Dodawanie plików..."
git add .

echo ""
echo "💾 Commit..."
git commit -m "fix: napraw deployment na GitHub Pages" 2>/dev/null || echo "ℹ️  Brak nowych zmian"

echo ""
echo "🚀 Push na GitHub..."
git push -u origin main

echo ""
echo "================================================"
if [ $? -eq 0 ]; then
  echo "✅ SUKCES! Aplikacja jest na GitHub!"
  echo "   GitHub Actions zbuduje ją w ciągu ~2 minut"
  echo "   https://github.com/Smaily1337/BDJ-Product-Catalog/actions"
else
  echo "❌ Błąd pushu. Sprawdź czy klucz został dodany na GitHub."
fi
echo "================================================"
echo ""
echo "Naciśnij Enter żeby zamknąć..."
read
