#!/bin/sh

. ./set_env.sh
. ./check_env.sh

cd $project

#### FIX ERRORS MANUALLY
# 2b. Fix some errors introduced by the tool
cp ../GAEventConfig_types.tsx src/middleware/analytics/GAEventConfig/types.tsx
cp ../mediaPlayer_types.tsx src/redux/mediaPlayer/types.tsx

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): FIXED tool conversion errors manually"


# 3 Allow .android .ios flavors
mv src/styles/ListViewStyles/styles.android.tsx src/styles/ListViewStyles/styles.android.js
mv src/styles/ListViewStyles/index.tsx src/styles/ListViewStyles/index.js 
mv src/styles/ListViewStyles/styles.ios.tsx src/styles/ListViewStyles/styles.ios.js 

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): keeping platform specific files in .js"


# 4. Add types
for type in @types/abba @types/bridge-mobile @types/expo__react-native-action-sheet @types/fbjs @types/jsonpath @types/keymirror @types/localytics-react-native @types/moment-timezone @types/ms.byzantium-core @types/pluralize @types/react-mixin @types/react-native-app-settings @types/react-native-cache @types/react-native-confetti @types/react-native-datepicker @types/react-native-fbsdk @types/react-native-google-cast @types/react-native-i18n @types/react-native-image-placeholder @types/react-native-md5 @types/react-native-progress @types/react-native-push-notification @types/react-native-remote-svg @types/react-native-send-intent @types/react-native-share @types/react-native-slider @types/react-native-swipe-list-view @types/react-native-typewriter @types/react-native-video @types/react-native-view-transformer-next @types/react-native-viewpager @types/react-navigation @types/react-redux @types/react-timer-mixin @types/redux-logger @types/redux-mock-store @types/redux-saga-test-plan @types/shallowequal @types/storybook__addon-storyshots @types/uuid
do
    yarn add --dev $type
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): added types for several other libs"

# 5 install types
yarn add --dev @types/lodash@4.14.149
yarn add --dev @types/styled-components@4.4.1

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): added types for styled-components, lodash"


# 6 Replace Object with any
for dir in src __tests__ storybook __sampledata__
do
    find $dir -type f -name '*'tsx -exec grep -l Object {} \; | while read file
    do
        sed -i '' -e '/Object/s/: Object/: any/g' $file
    done
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): replaced type Object with any"


# 7 replace flow fixmes
for dir in src __tests__ storybook __sampledata__
do
        find $dir -type f -name '*'.tsx -exec grep -il "\/\/ \$FlowFixMe" {} \; | while read file
        do
         sed -i '' -e '/FlowFixMe/s/\/\/ \$FlowFixMe/\/\/ \@ts-ignore/g' $file
        done
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): replaced FlowFixMe with ts-ignore"


# 8 import styled from 'styled-components/native'
for dir in src __tests__ storybook __sampledata__
do
        find $dir -type f -name '*'.tsx -exec grep -il "^import styled from \'styled-components\';" {} \; | while read file
        do
         echo "replacing styled-components $file"
         sed -i '' -e "/styled-components/s/styled-components\'/styled-components\/native\'/g" $file
        done
done

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): styled imported from styled-components/styled"


# Reference union type keys with  'key in'
for dir in src __tests__
do
        find $dir -type f -name '*'.tsx -exec egrep -l "\[key: [A-Z]" {} \; | while read file
        do
         sed -i '' -e 's/\[key: \([A-Z][A-Za-z]*\)/\[key in \1/' $file
        done
done
errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): Reference union type keys with \'key in\'"


# Replace Component<Props, void> with Component<Props>
# Fixes TS2605 - JSX element type 'xxx' is not a constructor function for JSX elements.

for dir in src __tests__ storybook __sampledata__
do
        find $dir -type f -name '*'.tsx -exec grep -il "Component<Props, void>" {} \; | while read file
        do
         sed -i '' -e '/Component<Props, void>/s/Component<Props, void>/Component<Props>/g' $file
        done
done
errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): replaced Component<Props, void> with Component<Props> in component declaration"


# Replace Component<PropsType, void> with Component<PropsType>
for dir in src __tests__ storybook __sampledata__
do
        find $dir -type f -name '*'.tsx -exec grep -il "Component<PropsType, void>" {} \; | while read file
        do
         sed -i '' -e '/Component<PropsType, void>/s/Component<PropsType, void>/Component<PropsType>/g' $file
        done
done
errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): removed \'void\' arg in Component<PropsType, void> declaration"


# Upgrade libs to use their types
yarn add react-navigation@3.4.0
yarn add react-navigation-tabs@2.7.0
yarn add --dev @types/react-native-orientation @types/node 
yarn add --dev @types/react-navigation

errors=`yarn tsc | grep "error TS" | wc -l`
git add .
git commit -m "typescript(errors=$errors): upgraded react-navigation and react-navigation-tabs"

