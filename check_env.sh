#!/bin/sh

if [ -z "$user" -o -z "$token" -o -z "$branch" -o -z "$project" ]
then
  echo "github user/token/branch/project are not set in 'set_env.sh'"
  exit 1
fi
