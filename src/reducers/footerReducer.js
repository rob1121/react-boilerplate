const footerReducer = (state = {
    title: "footer",
    creator: "rob"
}, action) => {
    switch(action.type)
    {

        case "SET_FOOTER_TITLE":
            state = {
                ...state,
                title: action.payload
            };
            break;

        case "SET_FOOTER_CREATOR":
            state = {
                ...state,
                creator: action.payload
            };
            break;
    }

    return state;
};

export default footerReducer;