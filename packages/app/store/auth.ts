import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'app/store/index';

const initialState = {
	user: null,
};

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateLogged: (state, { payload }) => {
			state.user = payload;
		},
		reset: () => {},
	},
});

//export reducer
export default slice.reducer;

// Actions
export const { updateLogged, reset } = slice.actions;

// And their actionCreaters

export const setLogged = (payload) => (dispatch: AppDispatch) => {
	dispatch(updateLogged(payload));
	if (!payload) {
		dispatch(reset());
	}
};
