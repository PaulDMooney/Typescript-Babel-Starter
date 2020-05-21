# Typescript Babel Starter

The project goal is to provide a sample starter project that supports:

* Watch typechecking and compilation for development.
* An obvious way to connect a debugger.
* Module aliasing.
* Testing using Jest.

## Why compile Typescript with Babel

Babel is one option to use for supporting module aliasing. It may have some drawbacks like lack of decorator metadata and a few other caveats mentioned [here](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/).

Alternatives may be:

* [Module-Alias](https://www.npmjs.com/package/module-alias) - Whether this be compiling with webpack, or just registering it in the app and taking the resolving to the fact it changes some module import functionality.
* [Link-Module-Alias](https://github.com/Rush/link-module-alias) - Creates symlinks, but only happens post install.

## Inspiration

* [Microft Typescript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter/blob/master/package.json) - Usefull but also very full. Lots to clean out of this project. Doesn't have babel integration. Interesting use of `concurrent`
* [Microsoft Typescript Babel Starter](https://github.com/microsoft/TypeScript-Babel-Starter/blob/master/package.json)
* [https://dev.to/dotorimook/using-absolute-path-import-with-typescript-babel-nodemon-in-your-node-project-ha7](https://dev.to/dotorimook/using-absolute-path-import-with-typescript-babel-nodemon-in-your-node-project-ha7)
