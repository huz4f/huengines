#!/bin/bash
set -e

# Always run from the project root
cd "$(dirname "$0")"

echo "==> 1. Generating production static build into out/..."
npm run build

echo "==> 2. Generating clean public deployment tree from out/..."
TMP_INDEX="/tmp/git_out_index_$$"
rm -f "$TMP_INDEX"
GIT_INDEX_FILE=$TMP_INDEX git --work-tree=out add -A .
TREE_ID=$(GIT_INDEX_FILE=$TMP_INDEX git write-tree)
rm -f "$TMP_INDEX"

# Get parent commit of main if it exists
PARENT_ARG=""
if git rev-parse --verify refs/heads/main >/dev/null 2>&1; then
    PARENT_ARG="-p refs/heads/main"
fi

COMMIT_ID=$(git commit-tree $TREE_ID $PARENT_ARG -m "deploy: update public production files for Hostinger domain [$(date +'%Y-%m-%d %H:%M:%S')]")

echo "==> 3. Updating local main branch to commit $COMMIT_ID..."
git update-ref refs/heads/main $COMMIT_ID

echo "==> 4. Pushing public files to GitHub main branch for Hostinger..."
git push origin main

echo "==> 5. Updating deployment zip archive..."
cd out && zip -rq ../hu-engines-deploy.zip . && cd ..

echo "==> Deployment complete! Hostinger main branch now contains ONLY the public files."
