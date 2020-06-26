#!/bin/sh

. ./set_env.sh
. ./check_env.sh

###### CLONE
cd ../
echo cloning github.com/$user/$project
git clone https://${user}:${token}@github.com/$user/$project
cd horseshoe
git checkout $branch

yarn install
cd ios
pod install
cd ../..
