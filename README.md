# node-bauer-plugin-watch

Plugin for `bauer` to watch for file changes

## Installation

```
npm install bauer-plugin-watch
```

## Usage

The awesome `chokidar` module is used internally to watch files. Note that after the given files change, promise is resolved and files are no longer watched. This is a one-time thing.

```js
module.exports = function(promise) {
  
  return promise.watch(__dirname + "/sample.txt")
    .then(function(details) {
      console.log(details.event, details.path);
    });
};
```

```js
module.exports = function(promise) {
  
  return promise.return(__dirname + "/sample.txt")
    .watch()
    .then(function(details) {
      console.log(details.event, details.path);
    });
};
```

## Configuration

```js
{
  workers: 1,
  slots: 1,
  delay: 0,
  options: { // default options for chokidar
    persistent: true,
    ignored: '*.txt',
    ignoreInitial: false,
    followSymlinks: true,
    cwd: '.',
    usePolling: true,
    alwaysStat: false,
    depth: undefined,
    interval: 100,
    ignorePermissionErrors: false,
    atomic: true
  }
}
```

## API Summary

  * `Promise`
    * `.watch() :Promise`
    * `.watch(files String) :Promise`
    * `.watch(file String) :Promise`
    * `.watch(files String, options Object) :Promise`
    * `.watch(file String, options Object) :Promise`
    * `.watch(options Object) :Promise`


## License

[MIT](./LICENSE)


  
