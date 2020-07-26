[![npm version](https://badge.fury.io/js/vue-snap.svg)](https://badge.fury.io/js/vue-snap)
[![Build Status](https://travis-ci.org/bartdominiak/vue-snap.svg?branch=develop)](https://travis-ci.org/bartdominiak/vue-snap)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-snap)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/vue-snap/blob/master/LICENSE.md)

<div align="center">
  <img width="150" heigth="150" src="/static/snap.jpg" alt="vue-snap logo">
</div>

# vue-snap
> Lightweight Slider/Carousel based on CSS Scroll Snap.

## About
Please note that this lib is on very early stage. The idea behind this plugin is that to create fully responsive and well optimised Carousel. I created this as PoC for one of my biggest client, who wants to speed up his website.

## Storybook & Docs
- 📺 [Storybook (Examples)](https://vue-snap.vercel.app)
- 📖 [Docs (Guide)](https://bartdominiak.github.io/vue-snap)

## Benefits:
- Lightweight (5-10x times lighter than other libs)
- There is no calculation or heavy logic inside (Performence)
- Mostly all custamization via CSS!
- You can set how many slides you want to display per current breakpoint (via css)
- Fully responsive

## Usage
There are two ways to use it.

### Globally

```js
import Vue from 'vue'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

Vue.use(VueSnap)
```

### Locally

```js
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

export default {
  components: {
    Carousel,
    Slide
  }
}
```

### Using with Nuxt.js

When using Vue-Snap on the server side with Nuxt.js, it may prompt `Unexpected token import` because Nuxt.js has configured an `external` option by default, which prevent files under `node_modules` from being bundled into the server bundle with only a few exceptions. We need to whitelist `vue-snap` in `nuxt.config.js` as follows:

#### For Nuxt.js 2:

```js

module.exports = {
  // ...
  build: {
    transpile: [/^vue-snap/]
  }
}
```

#### For Nuxt.js 1:

```js
// Don't forget to
// npm i --save-dev webpack-node-externals
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // ...
  build: {
    extend (config, { isServer }) {
      // ...
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-snap/]
          })
        ]
      }
    }
  }
}
```

#### Unit Testing with Jest

Make sure to whitelist `vue-snap` from the `transformIgnorePattern`. Add following configuation in `test/unit/jest.conf.js`:

```diff
transformIgnorePatterns: [
  '/node_modules(?![\\\\/]vue-snap[\\\\/])/'
],
```

## Development

Install necessary depandancies with yarn or npm
```
  yarn
```

Run in Development mode
```
  yarn dev
```

Run in Production mode
```
  yarn build
```

Run Storybook for preview
```
  yarn storybook:dev
```

## Contribution
Feel free to grab an issue from the list, just remember to squash your commits before merge.
