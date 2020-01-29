export const SET_AUTHD_USER = "SET_AUTHD_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export function setAuthdUser(userID){
  return {
    type: SET_AUTHD_USER,
    authdUser: userID
  }
}

export function signOutUser(){
  return {
    type: SIGN_OUT_USER,
  }
}
