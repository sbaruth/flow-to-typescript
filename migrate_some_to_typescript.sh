#!/bin/sh

. ./set_env.sh
. ./check_env.sh
. ./check_repo.sh

cd ../$project

for dir in src __tests__ storybook __sampledata__
do
        find $dir -type f -name '*'.js | while read js
        do
          tgt=`echo $js | sed 's/\.js$/\.tsx/'`
          cp $js $tgt
          rm -f $js
        done
done


git ls-files -m | egrep "src|__tests__|storybook|__sampledata__" | egrep ".tsx$" | while read file
do
	rm -f /tmp/file.tmp
        npx flow-to-ts $file  > /tmp/file.tmp
        cp /tmp/file.tmp $file
        node_modules/prettier/bin-prettier.js --single-quote --trailing-comma es5 --write $file

        sed -i '' -e '/Object/s/: Object/: any/g' $file

        sed -i '' -e '/FlowFixMe/s/\/\/ \$FlowFixMe/\/\/ \@ts-ignore/g' $file

        sed -i '' -e "/styled-components/s/styled-components\'/styled-components\/native\'/g" $file

        sed -i '' -e 's/\[key: \([A-Z][A-Za-z]*\)/\[key in \1/' $file

        sed -i '' -e '/Component<Props, void>/s/Component<Props, void>/Component<Props>/g' $file

        sed -i '' -e '/Component<PropsType, void>/s/Component<PropsType, void>/Component<PropsType>/g' $file

        node_modules/prettier/bin-prettier.js --single-quote --trailing-comma es5 --write $file
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): migrated resources to typescript"

cd ..
