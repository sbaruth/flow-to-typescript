#!/bin/sh

. ./set_env.sh
. ./check_env.sh

cd $project

# rename files
for dir in src __tests__ storybook __sampledata__
do
	find $dir -type f -name '*'.js | while read js
	do
	  tgt=`echo $js | sed 's/\.js$/\.tsx/'`
	  git mv $js $tgt
	done
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): resources renamed to .tsx"

cd ..