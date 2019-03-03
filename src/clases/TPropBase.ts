import { PropsWithChildren, CSSProperties } from "react";

export type TPropBase<T> = Readonly<PropsWithChildren<T>> & {style?:CSSProperties, className?: string }
