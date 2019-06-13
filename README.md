# emoji-unicode-range
_
> list of emoji codepoint ranges for unicode-range CSS

Emoji are fun! But sometimes when you add an emoji font to your `font-family`
CSS you run into a problem where the emoji font is used for every character.
That's not fun!

You can specify which range of Unicode characters your font should support with
a cool CSS property called [`unicode-range`][1], but it's hard to come up with
a Unicode range that accurately describes every emoji character.

## Usage

```js
const emojiUnicodeRange = require('emoji-unicode-range')
console.log(emojiUnicodeRange)
```

See [`css-fragment.txt`][2] for output. 🙃

## Installation

With [npm](https://npmjs.org/):

```shell
npm install emoji-unicode-range
```

With [yarn](https://yarnpkg.com/en/):

```shell
yarn add emoji-unicode-range
```

## License

ISC

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face/unicode-range
[2]: css-fragment.txt
