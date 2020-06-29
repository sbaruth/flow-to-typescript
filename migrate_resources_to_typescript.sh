#!/bin/sh

. ./set_env.sh
. ./check_env.sh
. ./check_repo.sh

cd ../$project
git checkout -b "typescript-migration-${branch}"
git checkout "typescript-migration-${branch}" # in case the branch already existed

echo "Migrating flow to typescript in $PWD"

#### USE CONVERSION TOOL
# 2. Perform tool based migration

for dir in src __tests__ storybook __sampledata__
do
    find $dir -type f -name '*'tsx | while read file
    do
        rm -f /tmp/file.tmp
        npx @khanacademy/flow-to-ts $file  > /tmp/file.tmp
        cp /tmp/file.tmp $file
        node_modules/prettier/bin-prettier.js --single-quote --trailing-comma es5 --write $file
        #sleep 1
    done
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): ran migration tool - flow-to-ts"

cd ..
