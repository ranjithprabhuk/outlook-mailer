import { loginActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { ILoginFormParams, IUserState } from '../ILogin';
// import axios from 'axios';
// import { APP_CONFIG } from '../../../utils/app.constants';


// export const validateUser = (credentials: ILoginFormParams): any => {
//   return (dispatch: any) => {
//     authenticate({} as any);
//     return axios.get(`${APP_CONFIG.serviceBase}user.json?user=${credentials.username}&password=${credentials.username}`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//         res.data.token ? dispatch(authenticate(res.data)) : null;
//       });
//   }
// };

export const validateUser = (credentials: ILoginFormParams): any => (dispatch: Function) => {
  dispatch({
    type: loginActionTypes.VALIDATE_USER,
    payload: {
      isLoggedIn: true,
      ...credentials
    },
  })
};

export const setUserInformation = (data: IUserState): IAction => {
  return {
    type: loginActionTypes.VALIDATE_USER,
    payload: {
      isLoggedIn: true,
      ...data
    },
  };
};





