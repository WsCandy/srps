import { AppDispatch } from "_redux/stores/store";
import { PropsWithChildren } from "react";

export type MapDispatchToProps<A, P = Record<string, unknown>> = (
    dispatch: AppDispatch,
    ownProps: PropsWithChildren<P>
) => A;
