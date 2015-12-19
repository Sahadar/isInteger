isInteger
=========
isInteger implementation based on ES6 [Number.isInteger](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) specification

[![Build Status](https://travis-ci.org/Sahadar/isInteger.svg)](https://travis-ci.org/Sahadar/isInteger)

[NPM isinteger link](https://www.npmjs.com/package/isinteger)

## Installation
* download from Github
* npm: `npm install isinteger`

## Description

If the target value is an integer, return true, otherwise return false. If the value is NaN or infinite, return false.

## Examples

```javascript
isInteger(0.1);     // false
isInteger(1);       // true
isInteger(Math.PI); // false
isInteger(-100000); // true
isInteger(NaN);     // false
isInteger(0);       // true
isInteger("10");    // false
```

### For more working examples:

[Check out tests file](https://github.com/Sahadar/isInteger/blob/master/test/main.js)

## License

MIT