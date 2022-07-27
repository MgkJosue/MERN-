import axios from "axios"

const url="http://localhost:4000"



export const getPostsRequest = async () => await axios.get( `${url}/posts` )

export const createPostsRequest = async (post) => await axios.post(`${url}/posts`,post)

export const deletePostsRequest = async id => await axios.delete(`${url}/posts/`+id)

export const getPostRequest = async id => await axios.get(`${url}/posts/`+id)

export const updatePostRequest = async (id,newFields) => await axios.put(`${url}/posts/${id}`, newFields)
