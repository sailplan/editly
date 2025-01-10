#/bin/bash
set -xe

for f in *.json5; do
  node ../cli.js --fast --json "$f"
done

for f in *.js; do
  node "$f"
done
