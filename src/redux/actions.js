import * as types from "./actionTypes";

export const loadUserStart=()=>({
    type:types.LOAD_USERS_START,
});

export const loadUserSuccess=(users)=>({
    type:types.LOAD_USERS_SUCCESS,
    payload: users,
});

export const loadUserError=(error)=>({
    type:types.LOAD_USERS_ERROR,
    payload:error,
});

export const CreateUserStart=(user)=>({
    type:types.CREATE_USER_START,
    payload:user
});

export const CreateUserSuccess=()=>({
    type:types.CREATE_USER_SUCCESS
});

export const CreateUserError=(error)=>({
    type:types.CREATE_USER_ERROR,
    payload:error,
});

export const DeleteUserStart=(userId)=>({
    type:types.DELETE_USER_START,
    payload:userId
});

export const DeleteUserSuccess=(userId)=>({
    type:types.DELETE_USER_SUCCESS,
    payload:userId
});

export const DeleteUserError=(error)=>({
    type:types.DELETE_USER_ERROR,
    payload:error,
});

export const UpdateUserStart=(userInfo)=>({
    type:types.UPDATE_USER_START,
    payload:userInfo
});

export const UpdateUserSuccess=()=>({
    type:types.UPDATE_USER_SUCCESS,
});

export const UpdateUserError=(error)=>({
    type:types.UPDATE_USER_ERROR,
    payload:error,
});
