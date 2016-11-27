# Deploying

To deploy the site, the elm code must be compiled, and then all assets pushed to the `gh-pages` branch. To make things easier, `deploy.sh` takes care of all of this for you.

Before deploying make sure you are on the `master` branch, it is up to date have the following installed
  - [UglifyJS 2](https://github.com/mishoo/UglifyJS2)
  - [cssnano]](https://github.com/ben-eb/cssnano)

```bash
npm install uglify-js cssnano-cli -g
```

To deploy just run the `deploy.sh` script.

```bash
./deploy.sh
```
