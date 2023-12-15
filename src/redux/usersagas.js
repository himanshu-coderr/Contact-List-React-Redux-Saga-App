import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call} from "redux-saga/effects";

import * as types from "./actionTypes";

import {loadUserSuccess, loadUserError, CreateUserSuccess,CreateUserError, DeleteUserSuccess, DeleteUserError, UpdateUserSuccess, UpdateUserError} from "./actions";
import { loadUsersApi, CreateUsersApi, DeleteUsersApi, UpdateUsersApi } from "./api";

function* onLoadUsersStartAsync(){
    try{
        const response= yield call(loadUsersApi);
        if(response.status===200){
            yield delay(500);
            yield put(loadUserSuccess(response.data))
        }
    }
    catch(error){
        yield put(loadUserError(error.response.data));
    }
}

function* onCreateUsersStartAsync({payload}){
    try{
        const response= yield call(CreateUsersApi,payload);
        if(response.status===200){
            yield put(CreateUserSuccess(response.data))
        }
    }
    catch(error){
        yield put(CreateUserError(error.response.data));
    }
}

function* onDeleteUserStartAsync(userId){
    try{
        const response= yield call(DeleteUsersApi,userId);
        if(response.status===200){
            yield delay(500);
            yield put(DeleteUserSuccess(userId))
        }
    }
    catch(error){
        yield put(DeleteUserError(error.response.data));
    }
}

function* onUpdateUsersStartAsync({payload:{id,formValue}}) {
    try{
        const response=yield call(UpdateUsersApi,id,formValue);
        if(response.status === 200){
            yield put(UpdateUserSuccess());
        }
    }catch(error){
        yield put(UpdateUserError(error.response.data))
    }
}

function* onDeleteUsers(){
    while(true){
        const {payload: userId}=yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync, userId )
    }
}

function* onLoadUsers(){
    yield takeEvery(types.LOAD_USERS_START,onLoadUsersStartAsync)
}

function* onCreateUser(){
    yield takeLatest(types.CREATE_USER_START,onCreateUsersStartAsync)
}

function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USER_START,onUpdateUsersStartAsync)
}


const userSagas=[
    fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUsers),fork(onUpdateUser)
];

export default function* rootSaga(){
    yield all([...userSagas]);
}

