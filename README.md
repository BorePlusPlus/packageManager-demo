---
author: @BorePlusPlus
test_array: [1, 2, 3]
---
# Package Manger Managment Demo

A demo repository for a project with pinned down specific package manager utilising [corepack](https://nodejs.org/docs/latest-v18.x/api/corepack.html) to provision the package manager if missing.

Pinning down the package manager can be useful to avoid subtle errors that occur when packages are installed with different (versions of) package managers.

## Usage

Make sure that you're using node version that supports `corepack`. The one mandated by `.nvmrc` (latest long term support release - `18.16.0` at time of writing) does. If you're using nvm execute:

```bash
nvm use
```
Or better yet make `nvm use` [execute automagically](https://github.com/nvm-sh/nvm#automatically-call-nvm-use) when entering directories with `.nvmrc` file.

### ↗️ Tangent: `fnm` - fast `nvm` alternative
At this point I may mention that I am switching to [`fnm`](https://github.com/Schniz/fnm) from `nvm` for faster startup times and [less clutter in my `.bashrc`](https://github.com/Schniz/fnm#shell-setup). It is writen in Rust and thus blazing fast™. 🚀


Once you have the right version of node, activate `corepack` like so:

```bash
corepack activate
```

Then install the dependencies using `pnpm` as mandated in `engines.pnpm` and `packageManager` properties of `package.json`.

```bash
pnpm install
```

Voila - the correct version of `pnpm` should be provisioned for you and used to install the dependencies.

Because seeing is believing you can run tests by executing:
```bash
pnpm test
```
