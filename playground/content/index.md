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
