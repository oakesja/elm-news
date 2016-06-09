git clean -fd
git clean -fX
rm -rf dist
git checkout master
git pull origin master
git log -1 --format="%H" > hash
git clone git@github.com:oakesja/elm-news.git dist
cd dist
git checkout gh-pages
rm -rf *
cp -r ../* .
rm -f deploy.sh save-commands.json main.js
rm -rf dist elm-stuff
elm-package install -y
./build.sh
rm -rf elm-stuff
git add .
git commit -m "Deploying version $(cat hash)"
git push origin gh-pages
cd ../
rm -rf dist
rm hash