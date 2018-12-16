const createPool = require('async-functions-pool');
const amphtmlValidator = require('amphtml-validator');
const fetch = require('node-fetch');

module.exports = () => {
    const pool = createPool();
    return async (urlGenerator, parallel = 1) => {
    const validator = await amphtmlValidator.getInstance();
    for(url of urlGenerator()){
      pool.add(makeJob(validator, url));
    }
    return pool.run(parallel);
  }
}

const makeJob = (validator, url) =>
  async () =>
    ({url, ...await validator.validateString(await fetch(url).then(res => res.text()))});
