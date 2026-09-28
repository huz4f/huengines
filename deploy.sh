#!/bin/bash
set -e

# Always run from the project root
cd "$(dirname "$0")"

echo "==> 1. Generating production static build into out/..."
npm run build

# Ensure .nojekyll, CNAME, and config.local.php are in out/
touch "out/.nojekyll"
echo "huengines.com" > "out/CNAME"

if [ -f "public/config.local.php" ]; then
    cp -f "public/config.local.php" "out/config.local.php"
fi

echo "==> 2. Generating clean public deployment tree from out/..."
TMP_INDEX="/tmp/git_out_index_$$"
rm -f "$TMP_INDEX"
GIT_INDEX_FILE=$TMP_INDEX git --work-tree=out add -A .
# Strictly remove private config and backups from Git index
GIT_INDEX_FILE=$TMP_INDEX git --work-tree=out rm --cached config.local.php 2>/dev/null || true
GIT_INDEX_FILE=$TMP_INDEX git --work-tree=out rm --cached __leads_secure_backup.jsonl 2>/dev/null || true
TREE_ID=$(GIT_INDEX_FILE=$TMP_INDEX git write-tree)
rm -f "$TMP_INDEX"

# Create a single clean root commit (no parent, no history, no trace of source code)
COMMIT_ID=$(git commit-tree $TREE_ID -m "Initial commit")

echo "==> 3. Updating local main branch to single clean commit $COMMIT_ID..."
git update-ref refs/heads/main $COMMIT_ID

echo "==> 4. Force-pushing clean commit to GitHub main..."
git push --force origin main

echo "==> 5. Updating deployment zip archive..."
cd out && zip -rq ../hu-engines-deploy.zip . && cd ..

echo "==> Done! GitHub Pages and domain ready with working CSS, CNAME, and .nojekyll."
