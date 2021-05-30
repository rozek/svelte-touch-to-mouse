# svelte-touch-to-mouse #

maps touch events to mouse events

### Installation ###

```
npm install svelte-touch-to-mouse
```

### Usage ###

```
<style>
  div {
    -webkit-touch-callout:none;
    -ms-touch-action: none; touch-action: none;
  }
</style>

<script>
  import mapTouchToMouseFor from 'svelte-touch-to-mouse'
  mapTouchToMouseFor('div')
</script>

<div>just as an example - works with other elements as well</div>
```

### Examples ###

This module was initially developed in order to make [svelte-agnostic-draggable](https://github.com/rozek/svelte-agnostic-draggable) "mobile capable" - please, look there for some examples.

### Background Information ###

There still exist numerous JavaScript libraries and frameworks dealing with `MouseEvent`s only - and ignoring the `TouchEvent`s used on mobile devices. This simple module maps `TouchEvent`s to corresponding `MouseEvent`s and, thus, allows such libraries to be used on mobile devices as well.

It does so by mapping events for certain HTML elements only in order to avoid undesired side effects on other elements.

`mapTouchToMouseFor(<css-selector>)`

maps `TouchEvent`s for all HTML elements matching the given `<css-selector>`. `mapTouchToMouseFor` may well be called multiple times (for different selectors) - or (in the extreme case) once with selector `*` to map events for all HTML elements

**Important Note**

Presumably, you also want to apply the following CSS settings to all HTML elements affected by `mapTouchToMouseFor`

```
-webkit-touch-callout:none;
-ms-touch-action: none; touch-action: none;
```

for the `MouseEvent` consumers to work as expected.
