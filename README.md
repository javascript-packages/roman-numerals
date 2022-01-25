# Roman Numerals

[![Build](https://github.com/javascript-packages/roman-numerals/actions/workflows/main.yml/badge.svg)](https://github.com/javascript-packages/roman-numerals/actions/workflows/main.yml)
[![Coverage Status](https://coveralls.io/repos/github/javascript-packages/roman-numerals/badge.svg?branch=main)](https://coveralls.io/github/javascript-packages/roman-numerals?branch=main)
![NPM Total Downloads](https://img.shields.io/npm/dt/@javascript-packages/roman-numerals)

Easily convert integers to roman numerals in one line of code.

## Installation

Please execute the following command.

```sh
npm i @javascript-packages/roman-numerals
```

## Getting started

By using the following code snippet you can convert numbers in the interval `[1, 4999]` to Roman numerals.

```js
import { toRoman } from '@javascript-packages/roman-numerals';

const romanNumeral = toRoman(2022);
console.log(romanNumeral); // MMXXII
```

## Found a bug? 💁‍♀️

Thanks for letting us know! Please [file an issue](../../issues/new?assignees=&labels=&template=bug_report.md&title=) and we should reply shortly.

## License

This repository is licensed under the MIT license.

Copyright © Stefan Kühnel, All rights reserved.
