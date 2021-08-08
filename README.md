# svelte-touch-to-mouse #

maps touch events to mouse events (not only for Svelte)

**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-touch-to-mouse/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

> Just a small note: if you like this module and plan to use it, consider "starring" this repository (you will find the "Star" button on the top right of this page), so that I know which of my repositories to take most care of.

## Installation ##

`svelte-touch-to-mouse` may be used as an ECMAScript module (ESM), a CommonJS or AMD module or from a global variable.

You may either install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install svelte-touch-to-mouse
```

or load the plain script file directly

```
<script src="https://unpkg.com/svelte-touch-to-mouse"></script>
```

## Access ##

How to access the package depends on the type of module you prefer

* ESM (or Svelte): `import mapTouchToMouseFor from 'svelte-touch-to-mouse'`
* CommonJS: `const mapTouchToMouseFor = require('svelte-touch-to-mouse')`
* AMD: `require(['svelte-touch-to-mouse'], (mapTouchToMouseFor) => {...})`

Alternatively, you may access the global variable `mapTouchToMouseFor` directly.

## Usage within Svelte ##

For Svelte, it is recommended to import the package in a module context. From then on, its exports may be used as usual:

```
<style>
  div {
    -webkit-touch-callout:none;
    -ms-touch-action:none; touch-action:none;
  }
</style>

<script context="module">
  import mapTouchToMouseFor from 'svelte-touch-to-mouse'
</script>

<script>
  mapTouchToMouseFor('div')
</script>

<div>just as an example - works with other elements as well</div>
```

## Usage as ECMAScript, CommonJS or AMD Module (or as a global Variable) ##

Let's assume that you already "required" or "imported" (or simply loaded) the module according to your local environment. In that case, you may use it as follows:

```
mapTouchToMouseFor('div')
```

## Examples ##

This module was initially developed in order to make [svelte-agnostic-draggable](https://github.com/rozek/svelte-agnostic-draggable) "mobile capable" - for that reason, please, look there for some meaningful examples.

## Background Information ##

There still exist numerous JavaScript libraries and frameworks dealing with `MouseEvent`s only - ignoring the `TouchEvent`s used on mobile devices. This simple module maps `TouchEvent`s to corresponding `MouseEvent`s and, thus, allows such libraries to be used on mobile devices as well.

It does so by mapping events for certain HTML elements only in order to avoid undesired side effects on other elements.

`mapTouchToMouseFor(<css-selector>)`

maps `TouchEvent`s for all HTML elements matching the given `<css-selector>`. `mapTouchToMouseFor` may well be called multiple times (for different selectors) - or (in the extreme case) once with selector `*` to map events for all HTML elements

**Important Note**

Presumably, you also want to apply the following CSS settings to all HTML elements affected by `mapTouchToMouseFor`

```
-webkit-touch-callout:none;
-ms-touch-action:none; touch-action:none;
```

for the `MouseEvent` consumers to work as expected.

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/svelte-touch-to-mouse/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

You may also look into the author's [build-configuration-study](https://github.com/rozek/build-configuration-study) for a general description of his build environment.

## License ##

[MIT License](LICENSE.md)
