#!/bin/sh

. ./set_env.sh 
. ./check_env.sh

cd $project

output=/tmp/tsc_errors
yarn tsc --incremental >$output 2>&1

count=`grep "error TS" $output | wc -l`
echo "typescript error count: $count"

echo "\nTop 5 errors"
cat $output | sort | sed 's/.*TS/TS/' | sed 's/:.*//' | sort | uniq -c | sort -nr | head -5
echo "For all errors, see $output."

echo "\nTop 5 error files"
cat $output | sed 's/tsx.*/tsx/' | sort | uniq -c | sort -nr | head -5
