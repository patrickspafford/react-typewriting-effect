# react-typewriting-effect

> The simplest typewriter effect component in React. ( Requires react >=16.8.0 )

[![NPM](https://img.shields.io/npm/v/react-typewriting-effect.svg)](https://www.npmjs.com/package/react-typewriting-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![](preview.gif)

## Install

```bash
npm install --save react-typewriting-effect
```

## Usage

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

const App = () => {
  return <Typewriter string='This is an example of typewriting 😄' speed={80} />
}

export default App
```

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

const App = () => {
  return (
    <Typewriter
      string='In this example, the cursor will stop blinking after ther string is completely rendered'
      speed={80}
      stopBlinkinOnComplete
    />
  )
}

export default App
```

## Options

| Name                  | Type            | Default value | Description                                         |
| --------------------- | --------------- | ------------- | --------------------------------------------------- |
| string                | String          | ''            | String to type out                                  |
| speed                 | number          | 100           | The delay between each key when typing.             |
| onComplete            | Lambda/Function | () => null    | Function to execute when string is completely typed |
| stopBlinkinOnComplete | Boolean         | false         | Whether to blink cursor after string is typed       |
| className             | String          | ''            | Field to set classes for the HTML Element           |

## License

MIT © [tanmaylaud](https://github.com/tanmaylaud)
