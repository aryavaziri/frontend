echo "switching to branch master"
git checkout master


echo "Building app..."
npm run build



echo "Deploying files to server..."
scp -r build/* root@143.42.54.186:/home/arya/poker/frontend/build/
# scp -r build/* arya@78.135.89.244:/home/arya/poker/build/
echo "Done"