import * as actionTypes from '../actions';
const initialState = {
	persons: []
};

const reducer = (state= initialState, action) => {
	switch(action.type){
		case actionTypes.PERSONADDED:
			return {
				...state,
				persons: state.persons.concat(action.person)
			};
		case actionTypes.PERSONDELETE:
			const updateArray = state.persons.filter(result => result.id !== action.id)
			return {
				...state,
				persons: updateArray
			};
	}
	return state;
}

export default reducer;