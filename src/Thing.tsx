import React from "react";
import { WithT } from "i18next";

interface LoggyProps {
  label: string;
}

export const Loggy = ({ label }: LoggyProps) => {
  console.log(`Rendered ${label}`)
  return null
}

export interface TextThingProps extends WithT {
  label: string;
}

export const TextThing = (props: TextThingProps) => 
  <p>
    <Loggy label={props.label}/>
    {props.label} {props.t("thing")}
  </p>
  
export interface CounterProps extends TextThingProps {
  count: number;
}
export const CounterThing = (props: CounterProps) => 
  <TextThing t={props.t} label={`${props.label}: ${props.count}`}/>