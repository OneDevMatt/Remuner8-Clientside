const mainReducer = (state, action) => {
	switch (action.type) {
		case "STORE_TOKEN":
			return {
				...state,
				token: action.payload,
			};

		case "UPLOAD_IMAGE":
			return {
				...state
			}
		default:
			return state;
	}
};

export default mainReducer;
