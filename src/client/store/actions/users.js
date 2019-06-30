import axios from 'axios';

const getRemoteUsers = () => (dispatch) => {
  axios.get('http://localhost:3000/api/users').then((response)=>{
    // console.log(response.data);
    dispatch({ type: 'SET_USERS', payload: response.data });
  });
};

export default {
  onAddUser: (dispatch) => (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
  },
  onGetUsers: (dispatch) => () => {
    dispatch(getRemoteUsers());
  }
}