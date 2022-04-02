import AppState from "_redux/model/AppState";

export type MapStateToProps<T, P = Record<string, unknown>> = (
    state: AppState,
    ownProps: P
) => T;
