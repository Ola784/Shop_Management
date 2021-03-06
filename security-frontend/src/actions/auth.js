import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CHANGED_SUCCESS,
    //ADD_SUCCESS,

} from "./types";

  import AuthService from "../services/auth.service";
  import ProductService from "../services/product.service";

  export const register = (username, email, password, role) => (dispatch) => {
    return AuthService.register(username, email, password, role).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

export const changePassword=(username,newpassword,password)=>(dispatch)=>{

    return  AuthService.changePassword(username,newpassword, password).then(
        (response) => {
            dispatch({
                type: CHANGED_SUCCESS,
                payload: { user: response},
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message)
                ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
  };
  export const infoedit=(username, name, surname, pesel,tel)=>(dispatch)=>{

    return  AuthService.infoedit(username, name, surname, pesel,tel).then(
        (response) => {
            dispatch({
                  type: CHANGED_SUCCESS,
                  payload: { user: response},
            });
              dispatch({
                  type: SET_MESSAGE,
                  payload: response.data.message,
              });

              return Promise.resolve();
          },
          (error) => {
              const message =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message)
                  ||
                  error.message ||
                  error.toString();

              dispatch({
                  type: SET_MESSAGE,
                  payload: message,
              });

              return Promise.reject();
          }
      );


};

export const getInfo=(username)=>(dispatch)=>{

  return  AuthService.getInfo(username);/*.then(
      (response) => {
          dispatch({
                type: CHANGED_SUCCESS,
                payload: { user: response},
          });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message)
                ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );*/


};

/*
export const add_product=(name, price, size, category, type)=>(dispatch)=>{

  return  ProductService.addProduct(name, price, size, category, type).then(
      (response) => {
          dispatch({
              type: ADD_SUCCESS,
              //payload: { user: response},
          });
          dispatch({
              type: SET_MESSAGE,
              payload: response.data.message,
          });

          return Promise.resolve();
      },
      (error) => {
          const message =
              (error.response &&
                  error.response.data &&
                  error.response.data.message)
              ||
              error.message ||
              error.toString();

          dispatch({
              type: SET_MESSAGE,
              payload: message,
          });

          return Promise.reject();
      }
  );
};
*/