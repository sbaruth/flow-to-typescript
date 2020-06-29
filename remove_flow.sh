#!/bin/sh

. ./set_env.sh
. ./check_env.sh
. ./check_repo.sh

cd ../$project

yarn remove flow-bin eslint-plugin-flowtype

sed -i '' -e '/\"flow-check\"/s/flow-check.*/type-check\": \"node_modules\/.bin\/tsc\",/g' package.json

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typecript: removed flow and added typescript type-check tool"

# Update build scripts to use typescript
sed -i '' -e '/yarn run flow-check/s/yarn run flow-check/yarn run type-check/g' continuous_integration/*.sh

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): update build scripts to use typescript"

cd ..
