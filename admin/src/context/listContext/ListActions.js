export const getListsStart = () =>({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) =>({
    payload:lists,
    type: "GET_LISTS_SUCCESS",
});

export const getListsFailure = () =>({
    type: "GET_LISTS_FAILURE",
});

export const deleteListStart = () =>({
    type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) =>({
    payload:id,
    type: "DELETE_LIST_SUCCESS",
});

export const deleteListFailure = () =>({
    type: "DELETE_LIST_FAILURE",
});

export const createListStart = () =>({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (list) =>({
    payload:list,
    type: "CREATE_LIST_SUCCESS",
});

export const createListFailure = () =>({
    type: "CREATE_LIST_FAILURE",
});

export const updateListStart = () =>({
    type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) =>({
    payload:list,
    type: "UPDATE_LIST_SUCCESS",
});

export const updateListFailure = () =>({
    type: "UPDATE_LIST_FAILURE",
});