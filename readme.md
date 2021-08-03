# EZYJSON - NEW NODEJS FILESYSTEM

### Install

```bash
npm i --save @xevaltan/freejson
```

### Import

```js
const ezyjson = require("ezyjson");
```

### Testing

#### Example 1

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// add a key with the value.

myJsonDatabase().key = value;

// then save (necessary).
myJsonDatabase.save();
```

#### Example 2

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// add a key with the value.

myJsonDatabase().key1.key2inKey1 = value;

// then save (necessary).
myJsonDatabase.save();
```

#### Example 3

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// add a key with the value.

myJsonDatabase()["userID"] = {
  coins: 563,
  xp: 561,
  lvl: 3,
  linkedMCaccount: "Qwerty123",
};

// then save (necessary).
myJsonDatabase.save();
```

#### Example 4

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// add a key with the value.

myJsonDatabase()["userID"].coins += 500;

// then save (necessary).
myJsonDatabase.save();
```

#### Example 5

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// get value of a key

console.log(`This user has ${myJsonDatabase()["userID"].coins} coins.`);
```

#### Example 6

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// get value of a key

console.log(`Debug : ${myJsonDatabase().key}`);
```

#### Example 7

```js
const ezyjson = require("ezyjson");
const myJsonDatabase = ezyjson(`${__dirname}/myDatabase.json`);

// get value of a key

console.log(`Debug : ${myJsonDatabase().key1.key2inKey1}`);
```

### Where is this plugin used?

This nodejs plugin is used for projects that needs json databases.

### Creator:

- Xevaltan
