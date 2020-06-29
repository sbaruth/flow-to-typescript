# Flow to Typescript

### Usage
- Clone `flow-to-typescript`. If you have an existing `horsehose` clone you'd like to run the migration on, make sure `flow-to-typescript` and `horseshoe` are in the same parent directory (siblings).
- Configure `set_env.sh`
- `yarn install`
- `yarn clone` (optional, if you don't have `horsehose` cloned yet, or would like a fresh clone)
- `yarn migrate`

### Getting a git access token for yarn clone
- Visit github.com -> Click on your Avatar -> Settings
- Developer Settings -> Personal Access Tokens -> Generate new token
- Scopes required:
  - `Repo` - Full control of private repositories

# Older Documentation

## Configure env properties
* Configure set_env.sh 

## Clone repository
* ./clone_horseshoe.sh 

## Setup typescript and rename resources
* ./setup_typescript.sh
* ./rename_resources.sh

##  Migrate using flow-to-ts
* ./migrate_resources_to_typescript.sh

## Apply known fixes
* ./fix_typescript_errors.sh 

## Note: 
* To check type errors, run ./check_errors.sh
* Inspect commit log from inside 'horseshoe' directory to view the changes made to resources.
* Use appropriate tsconfig to migrate specific set of resources.
* Remember not all typescript changes are flow compliant. 

* To convert specific resources to typescript, copy them over to horseshoe project and run migrate_some_to_typescript.sh. Prior to running, ensure these files are included in tsconfig.json.

* To type check based on a specific typescript config use the command `yarn tsc --project <tsconfig.json.specific_resources>` from horseshoe directory.

### Pending
* migrate tests and run
* test debugging
* set types for missing modules
* missing type definitions
* yarn add --dev @types/react-native-iap
* test CI build, pr, release
* optimize type checking speed


## Final Migration
* ./remove_flow.sh
