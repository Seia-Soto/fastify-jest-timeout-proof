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
