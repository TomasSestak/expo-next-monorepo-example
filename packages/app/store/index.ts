import { combineReducers } from 'redux';
import auth from 'app/store/auth';
import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch as useReduxDispatch,
	useSelector as useReduxSelector,
	useStore as useReduxStore,
} from 'react-redux';

const combinedReducer = combineReducers({
	auth,
});

const reducer = (state: any, action: any) => {
	if (action.type === 'auth/reset') {
		state = undefined;
	}
	return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useStore = () => useReduxStore<RootState>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const store = configureStore({ reducer });
