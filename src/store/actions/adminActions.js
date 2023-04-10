import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService,
    getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService

} from "../../services/userService";

import { toast } from 'react-toastify';

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENGER_SUCCESS,
    data: genderData
});
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START });

            let res = await getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart err ', e)
        }
    }

};


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
});
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed err ', e)
        }
    }

};


export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
});
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchRoleFailed err ', e)
        }
    }

};


//Redux create
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS

});
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED

});
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success('Create user succeed!')
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart())
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed err ', e)
        }
    }
}



//Redux read 
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
});
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
});
export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error('fetch all users err!')
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error('fetch all users err!')
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed err ', e)
        }
    }
};

//Redux delete
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
});
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
});
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.info('Delete user succeed!')
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Delete user fail!')
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error('Delete user fail! ')
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed err ', e)
        }
    }
}

// Redux Edit
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
});
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
});
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.info('Update user succeed!')
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Edit user fail!')
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error('Edit user fail! ')
            dispatch(editUserFailed());
            console.log('editUserFailed err ', e)
        }
    }
}

//Get TopDoctor
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('10')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    dataDoctor: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTOR_FAILED', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
            })
        }
    }
}

//Get All Doctos
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    dataDrs: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTOR_FAILED', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAILED,
            })
        }
    }
}

//Post detail doctor
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
                toast.success('Save detail infor doctor succeed!')

            } else {
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
                toast.error('Save detail infor doctor error!')
            }
        } catch (e) {
            console.log('SAVE_DETAIL_DOCTOR_FAILED', e)
            toast.error('Save detail infor doctor error!')
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })

        }
    }
}


