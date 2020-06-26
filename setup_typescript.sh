#!/bin/sh

. ./set_env.sh
. ./check_env.sh

# Ensure horsehoe has been cloned
if [ ! -d "../$project" ]
then
    echo "Directory ../$project does not exist. Clone $project first."
    exit 1
fi

cd ../$project
echo "Installing typescript dependencies in $PWD"
git checkout -b "typescript-migration-${branch}"

###### CONFIGURE FOR TYPESCRIPT
# 1. install typescript depdencies
yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer

cp ../tsconfig.json.flow_compliant_source_only tsconfig.json
cp ../jest.config.js .
cp ../.eslintrc  .
cp ../babel.config.js .


# Install IDE specific modules
yarn add --dev typescript-eslint

git add .
git commit -m "typescript: typescript env setup"

cd ..
