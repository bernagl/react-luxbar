# react-luxbar

>

[![NPM](https://img.shields.io/npm/v/react-luxbar.svg)](https://www.npmjs.com/package/react-luxbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

###Description

A [Luxbar](https://balzss.github.io/luxbar/ 'Luxbar') implementation for React.js

###Installation
`yarn add react-luxbar` -or- `npm install --save react-luxbar`

###Demo
[Demo](https://build-ttrkyrbbjw.now.sh/ 'Demo')

###API
####Navbar
| Prop | Type |Default|Options|Description|
| ------------ | ------------ |
| backgroundColor | String:Color |||Navbar background color|
| className | String |||Custom classNames for Navbar|
|color|String:Color|white||Navbar color text|
|hoverColor|String:Color|white||Navbar items hover color|
|onToggle|Function(status)|||Callback for navbar toggles|
|position|string|fixed|'fixed', 'fixedBottom', 'static'|Navbar position|
|rtl|Bool|true|true, false|Options right to left|

####Navbar.Option
| Prop | Type |Default|Options|Description|
| ------------ | ------------ |
| className | String |||Custom classNames for Navbar.Option|

####Navbar.Logo
| Prop | Type |Default|Options|Description|
| ------------ | ------------ |
| className | String |||Custom classNames for Navbar.Option|

###Usage

```jsx
import React, { Component } from 'react'
import Navbar from 'react-luxbar'

class Example extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Logo>
          <a href="index.html">
            <span>Brand</span>
          </a>
        </Navbar.Logo>
        <Navbar.Option>
          <a href="https://google.com">Google</a>
        </Navbar.Option>
      </Navbar>
    )
  }
}
```

###Credits
[Luxbar](https://balzss.github.io/luxbar/ 'Luxbar')

### License

MIT © [bernagl](https://github.com/bernagl)
