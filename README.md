# Seia-Soto/fastify-jest-timeout-proof

This repository proofs that Jest will cause `RangeError: Maximum call stack size exceeded` when we run the test.

## Table of Contents

- [Reproduction](#reproduction)

----

# Disclaimer

- I didn't care about ESlint things on this repository since current repository is only for reproduction.

# Reproduction

```sh
git clone https://github.com/Seia-Soto/fastify-jest-timeout-proof
cd fastify-jest-timeout-proof
yarn
yarn test
```

## Result of above

- Without passing ESM module, I could make test success.

```
→ C:\Users\seia\__tmp__\__seia\fs\layer\shares\template\tmp› yarn test
yarn run v1.22.10
$ jest
 PASS  tests/bundled.test.js    
 FAIL  tests/inlineAsync.test.js
  ● Test suite failed to run

    Maximum call stack size exceeded

      RangeError: Maximum call stack size exceeded
          at Object.deleteProperty (<anonymous>)
          at Object.<anonymous> (LAYER_HIDDEN)

 FAIL  tests/inlineSync.test.js
  ● Test suite failed to run

    Maximum call stack size exceeded

      RangeError: Maximum call stack size exceeded
          at Object.deleteProperty (<anonymous>)
          at Object.<anonymous> (LAYER_HIDDEN)

 FAIL  tests/beforeAsync.test.js
  ● Test suite failed to run

    Maximum call stack size exceeded

      RangeError: Maximum call stack size exceeded

 FAIL  tests/beforeSync.test.js
  ● Test suite failed to run

    Maximum call stack size exceeded

      RangeError: Maximum call stack size exceeded

Test Suites: 4 failed, 1 passed, 5 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        20.591 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
