[![npm](https://img.shields.io/npm/v/nativescript-popup.svg)](https://www.npmjs.com/package/nativescript-popup)
[![npm](https://img.shields.io/npm/dt/nativescript-popup.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-popup)
[![Build Status](https://travis-ci.org//triniwiz/nativescript-popup.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-popup)

# Installation

`tns plugin add nativescript-popup`

## Screenshots

![Popup Example](screenshots/android.gif)

## Usage

```xml
    <Button tap="openPopup"/>
```

```ts
import { Popup } from 'nativescript-popup';

function openPopup(args){
    const popup = new Popup({
        backgroundColor:'white' | '#fff',
        height:100,
        width:100,
        unit:'dp' | 'px' | '%',
        elevation:10, // android only
        borderRadius:25, // android only
        outsideTouchble: true,
    });
    const view = new Label();
    view.text = "Test";

    /* IOS */
    const nativeView = UILabel.new();
    nativeView.text = "Native Button";
    nativeView.frame = CGRectMake(0,0,50,50);
    /* -- IOS */

    /* Android */
    const nativeView = new new android.widget.TextView(context);
    nativeView.setText("Native Button");
    nativeView.setWidth(50);
    nativeView.setHeight(50);
    /* -- Android */

    popup.showPopup(anchor: View | nativeView , view: View | nativeView);
}
```

## Usage in Vue

```js
// in main.js
import Vue from 'nativescript-vue'
import Popup from 'nativescript-popup/vue'

Vue.use(Popup)
```

In components

```js
// this is the component to show as content
import PopupComponent from './PopupComponent'

export default {
  methods: {
    async showPopup(args) {
      // show(anchor, component, options)
      const res = await this.$popup.show(args.object, PopupComponent, {
        width: 200,
        height: 200,
        backgroundColor: "#22543D",
        elevation: 20,
      });
      console.log(`Selected item from popup: ${res}`);
    },
  },
};
```

```html
<!-- PopupComponent.vue -->
<template>
  <StackLayout>
    <Label
      v-for="i in 5"
      :key="i"
      :text="`Hello Popup! ${i}`"
      color="white"
      fontSize="24"
      @tap="$popup.close(i)"
    />
  </StackLayout>
</template>
```

## API

## Constructor

`Popup(options: PopupOptions)`

## Constructor Example

```js
import { Popup, PopupOptions } from "nativescript-popup";

const opts: PopupOptions = {
  backgroundColor: "white" | "#fff",
  height: 100,
  width: 100,
  unit: "dp" | "px" | "%",
  elevation: 10, // android only
  borderRadius: 25 // android only
};

const popup = new Popup(opts);
```

### Popup Methods

| Method                                         | Description                                                                                                                                                                                                                             |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _showPopup(source: any, view: any)_: `Promise` | Shows the popup anchored to the `source` argument with the `view` argument as the popup contents. The `view` argument can be a native Android/iOS view, a NativeScript View, or a string path to a template within the `app` directory. |
| _hidePopup(data?: any)_: `Promise`             | Hides the popup and removes it from the view hierarchy.                                                                                                                                                                                 |

## License

Apache License Version 2.0, January 2004
