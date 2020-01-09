export const SET_AUTHD_USER = "SET_AUTHD_USER";

export function setAuthdUser(user){
  return {
    type: SET_AUTHD_USER,
    authdUser: user
  }
}
