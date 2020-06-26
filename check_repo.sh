# Ensure repo has been cloned
if [ ! -d "../$project" ]
then
    echo "Directory ../$project does not exist. Clone $project first."
    exit 1
fi
