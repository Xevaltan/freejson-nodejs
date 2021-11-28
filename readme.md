# FREEJSON - NEW NODEJS JSON FILESYSTEM

## Install

```bash
npm i --save @xevaltan/freejson
```

## Import

```js
const freejson = require("@xevaltan/freejson");
```

## Start

```js
const freejson = require("@xevaltan/freejson");
const myDb = freejson(`${__dirname}/myDatabase.json`);

// add a key with the value.

myDb()["userID"] = {
  coins: 563,
  xp: 561,
  lvl: 3,
  linkedMCaccount: "Qwerty123",
};

// YOU DON'T HAVE TO SAVE MANUALLY, IT SAVES AUTOMATICALLY, YESSS!!.

// Get key
console.log(mydb().key1.key2);
```

## Why should I use this plugin?

You should use this plugin if you need a fast json file manager

## Creator:

- Xevaltan
