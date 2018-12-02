import * as fromUI from './ui.actions';

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false,
};

export function uiReducer(state = initialState, action: fromUI.acciones) {
    switch (action.type) {

        case fromUI.ACTIVAR_LOADING:
            return {
                isLoading: true
            };

        case fromUI.DESACTIVAR_LOADING:
            return {
                isLoading: false
            };

        default:
            return state;
    }
}
