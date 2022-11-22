### App.jsx

The customization exists because of the asyncConnect call for 'slots' which generates the required data during ssr.

```jsx
{
      key: 'slots',
      promise: ({ location, store: { dispatch } }) =>
        __SERVER__ && dispatch(getSlots(getBaseUrl(location.pathname))),
}

```

The original file: https://github.com/plone/volto/blob/master/src/components/theme/App/App.jsx
