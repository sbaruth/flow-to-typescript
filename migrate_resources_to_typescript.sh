#!/bin/sh

. ./set_env.sh
. ./check_env.sh

cd $project

#### USE CONVERSION TOOL
# 2. Perform tool based migration
yarn global add @khanacademy/flow-to-ts
yarn add --dev utility-types

if [ ! -x "/usr/local/bin/flow-to-ts" ]
then
   echo "/usr/local/bin/flow-to-ts is not found"
   exit 1
fi

for dir in src __tests__ storybook __sampledata__
do
    find $dir -type f -name '*'tsx | while read file
    do
        rm -f /tmp/file.tmp
        flow-to-ts $file  > /tmp/file.tmp
        cp /tmp/file.tmp $file
        node_modules/prettier/bin-prettier.js --single-quote --trailing-comma es5 --write $file
        #sleep 1
    done
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): ran migration tool - flow-to-ts"

cd ..
