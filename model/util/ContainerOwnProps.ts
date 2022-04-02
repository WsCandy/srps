import { ComponentProps, JSXElementConstructor } from "react";

type ContainerOwnProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>, S> = Omit<ComponentProps<T>, keyof S>;

export default ContainerOwnProps;
