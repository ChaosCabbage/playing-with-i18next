So at work it seems like react-i18next is causing loads of things to re-render.

Here's a demo with various components. Re-renders are logged to the console.

We have a redux store of a single number, and we can increment the number.

`TranslateReduxCounter` uses the `withTranslation()` HOC and is connected to redux.

`TranslateReduxThing` uses `withTranslation()` and is also connected to redux, but doesn't use any of the state.

`ReduxHook` is connected to redux, but the inner component uses the`useTranslation()` hook.

Open the console and press the button a few times.
You will see that only the components using the redux counter will re-render.
