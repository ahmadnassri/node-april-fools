> **WARNING: This is a foolproof way to lose friends and alienate people. Will likely get you fired!**

## Install

```bash
npm install april-fools
```

## Usage

Require anywhere in your app:

```js
require('april-fools')
```

364 days a year, this will do nothing.

on April 1st, it will **randomly** `throw` an `Error` with a _(hopefully)_ funny message:

```plain
/path/to/your/app.js:9
  throw new Error(message)
  ^

Error: Unexpected keyboard with a focused architecture
    at Object.<anonymous> (/path/to/your/app.js:9:9)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:423:7)
    at startup (bootstrap_node.js:147:9)
    at bootstrap_node.js:538:3
```
