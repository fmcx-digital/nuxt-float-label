![Nuxt Float Label](https://raw.githubusercontent.com/fmcx-digital/nuxt-float-label/main/playground/public/meta-image.png)

# Nuxt Float Label
### Access the [demo](https://nuxt-float-label.onrender.com/) website.
<p>
  <a href="https://www.npmjs.com/package/nuxt-float-label">
    <img src="https://img.shields.io/npm/dw/nuxt-float-label" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/nuxt-float-label">
    <img src="https://img.shields.io/npm/v/nuxt-float-label?color=%230066ff" alt="NPM"/>
  </a>
</p>

## Features
- Apply float labels automatically to your **inputs**, **selects** and **textareas**
- Works on Nuxt 3
- Fully css customizable

## Quick Setup

1. Add `nuxt-float-label` dependency to your project

```bash
# Using npm
npm i -D nuxt-float-label
```

2. Add `nuxt-float-label` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-float-label'
  ]
}
```

## Props

| Name | Type | Description | Required |
| ----------------- | :--- | :--- | ---: |
| `label` | `String` | Overrides placeholder | No |
| `label-class` | `String` | Attribute a custom class to the label | No |
| `dispatch` | `Boolean` | Shows float label on mount | No |

## Configs
> To use on nuxt.config.ts

| Name | Type | Description |
| ----------------- | :--- | ---: |
| `useCss` | `Boolean` | Choose to use the default css or a custom one |

#### Example

```js
nuxtFloatLabel: {
    useCss: false
}
```


## Css classes
| Name | Description |
| -- | ---: |
| `fl-wrapper` | Wrapper class |
| `fl-label` | Label class |
| `fl-on-focus` | Label on focus and blur event |
| `fl-on-input` | Label on input event |


