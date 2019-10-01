import React from 'react';
import './App.css';
import { increment, RootState } from "./redux"
import { connect }  from 'react-redux';
import { useTranslation, withTranslation } from 'react-i18next';
import { TextThing, Loggy, CounterThing } from './Thing';

// Connected to redux but doesn't use the state
const TranslateReduxThing = withTranslation()(connect(
  () => ({ label: "redux but stateless" })
)(TextThing))

interface HKProps {
  count: number;
  label?: string;
}
const HookCounter = ({count, label = "unconnected hook" }: HKProps) => {
  const { t } = useTranslation();
  return <CounterThing count={count} label={label} t={t} />
}

const TranslateReduxCounter = withTranslation()(connect(
  ({ count }: RootState) => ({ count, label: "withTranslation->redux counter" })
)(CounterThing))

const ReduxHook = connect(
  ({ count }: RootState) => ({ count, label: "redux->useTranslation counter" })
)(HookCounter)

interface AppProps {
  increment(): void;
}
const App = (props:AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={props.increment}>Dispatch a redux action</button>
        <TranslateReduxThing/>
        <TranslateReduxCounter/>
        <ReduxHook />
        <HookCounter count={0}/>
        <Loggy label="app"/>
      </header>
    </div>
  );
}

const mapDispatch = { increment };
const ReduxApp = connect(undefined, mapDispatch)(App)

export default ReduxApp;
