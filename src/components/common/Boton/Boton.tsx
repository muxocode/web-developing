import React, { PropsWithChildren } from 'react';
import { Button } from 'react-bootstrap';
import {TPropBase} from "../../../clases"

export enum typeBoton {
    link= "link",
    outlight= "outline-light"
}

export interface IBotonModel{
    type?: typeBoton
    onClick:(event: MouseEvent) => void
}

export const Boton = (props: TPropBase<IBotonModel>)=>{
    return <Button onClick={(e:any)=>{props.onClick(e)}} variant={props.type}>{props.children}</Button>;
}