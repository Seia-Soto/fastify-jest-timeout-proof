# Seia-Soto/fastify-jest-timeout-proof (actually depends on ESM module)

This repository proofs that Jest will cause `RangeError: Maximum call stack size exceeded` when we run the test.

## Table of Contents

- [Reproduction](#reproduction)

----

# Disclaimer

- I didn't care about ESlint things on this repository since current repository is only for reproduction.

# Reproduction

You can see the test results via [GitHub actions](https://github.com/Seia-Soto/fastify-jest-timeout-proof/runs/1803308741), or do it yourself.

```sh
git clone https://github.com/Seia-Soto/fastify-jest-timeout-proof
cd fastify-jest-timeout-proof
yarn
yarn test
```

## Result of above

```
→ C:\Users\seia\__tmp__\__seia\fs\layer\shares\template\tmp› yarn test
yarn run v1.22.10
$ jest
 FAIL  ./test.js
  ● Test suite failed to run

    Maximum call stack size exceeded

      RangeError: Maximum call stack size exceeded

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        12.311 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
