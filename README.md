# React Micro Section Template

This project is a template to create micro-section that will be part of your main-container app

## Dependencies

| Dependency    | Version   |
|---------------|-----------|
| React         | 16\.13\.1 |
| React DOM     | 16\.13\.1 |
| Express       |  4\.17\.1 |
| Cors          |  2\.8\.5  |

## Usage

In the sections you can work normally, the only exception is in the render flow. Look the <code>src/index.jsx</code>

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (!document.getElementById("MicroSection-container")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}

window.renderMicroSection = (containerId) => {
    ReactDOM.render(<App />, document.getElementById(containerId));
}

window.unmountMicroSection = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}
```

The changes you should make in this sections is in every **MicroSection** word, you should change it with the name of your app, and must a unique name, when you call this in to the main container, the could be another micro-section, to make a difference between sections, you should manage the name of each one.

## License 

### MIT

Copyright 2020, Carlos Montes \<Kaito>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
