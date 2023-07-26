import axios from "axios";


export const GET_POSTS = "GET_POSTS"

export const getPosts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/api/v1/user').then((res) => {
            console.log(res)
        });
    };
};