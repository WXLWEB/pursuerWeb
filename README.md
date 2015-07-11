# pursuerWeb
#这是一个webapp项目
## Install
This project is a `gulp-webapp`, it depends `bower` and `gulp`. So we should first install them in **global**.

```shell
$ sudo npm i -d -g bower
$ sudo npm i -d -g gulp
```

And then in `langdifeng` directory, install package from `package.json` and `bower.json`,so just run below command:

```shell
$ npm i
$ bower i
```

if run "npm i" failed，maybe the Chinese network is not well，you can install a cnpm：

```shell
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
it used like npm and it just add "c" in front of the "npm"

```shell
$ cnpm install [name]
```
##Set up

**devlopment:** just run `gulp` command

```shell
$ gulp serve
```

**build for production:** just run `gulp build` command

```shell
$ gulp build
```
