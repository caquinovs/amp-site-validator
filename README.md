![Current Version](https://img.shields.io/npm/v/amp-site-validator.svg)
![NPM Minified size](https://img.shields.io/bundlephobia/min/amp-site-validator.svg)
![Github Code Size](https://img.shields.io/github/languages/code-size/wjsc/amp-site-validator.svg)
![Downloads/Week](https://img.shields.io/npm/dw/amp-site-validator.svg)
![Issues](https://img.shields.io/github/issues/wjsc/amp-site-validator.svg)
![License](https://img.shields.io/github/license/wjsc/amp-site-validator.svg)
![Contributors](https://img.shields.io/github/contributors/wjsc/amp-site-validator.svg)

[![NPM](https://nodei.co/npm/amp-site-validator.png)](https://nodei.co/npm/amp-site-validator)

# amp-site-validator | Full site AMP Pages validator

If you publish your pages in AMP, you want to be sure any change does not affect your AMP performance. How? Setup a function generator that returns all URLS you want to validate and test them with the official Google's validator.

## Usage
```
// 1. Import module
const validator = require('amp-site-validator');

// 2. Create your own url generator
const urlGenerator = function* (){
  for(let i=1; i < 200; i++){
    yield 'https://yourSite.com/page/'+i;
  }
}

// 3. Set the number of parallel jobs and validate!
async function run(){
  // This will fetch and validate 10 pages at the same time
  const results = await validator(urlGenerator, 10);
  console.log(results);
}
run();
```

### Another way to create a generator?
```
const urlGenerator = function* (){
  yield 'https://yourSite.com/page/1';
  yield 'https://yourSite.com/page/2';
  yield 'https://yourSite.com/page/3';
  yield 'https://yourSite.com/page/4';
  yield 'https://yourSite.com/page/5';
  yield 'https://yourSite.com/page/6';
}
```

### How to count correct and failed pages ?
```
console.log('Valid pages : '+ results.filter( result => result.status === 'PASS').length)
console.log('Invalid pages : '+ results.filter( result => result.status !== 'PASS').length)
```

## FAQs

- How minimal it is? Less than 20 lines of code
- Which version of Node is required? > 8.0.0 because it uses async/await
- Where to find more documentation? Visit Google's official docs: https://www.npmjs.com/package/amphtml-validator
- What's a function generator ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
