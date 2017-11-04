export const logger = store => next => action => {
    console.group("Logger");
    console.info("current State =", store.getState());
    console.log("action =", action);
    next(action);
    console.info("Updated current State =", store.getState());
    console.groupEnd("Logger");
}

export const thunk = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch, store.getState())
    } else {
        next(action);
    }
}
