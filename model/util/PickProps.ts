import { ComponentProps, JSXElementConstructor } from "react";

type PickProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>, K extends keyof ComponentProps<T>> = Pick<ComponentProps<T>, K>;

export default PickProps;
