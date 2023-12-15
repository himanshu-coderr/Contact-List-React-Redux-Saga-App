import axios from "axios";

export const loadUsersApi=async()=>
    await axios.get("http://localhost:5000/users");

export const CreateUsersApi=async(users)=>
    await axios.post("http://localhost:5000/users",users);

export const DeleteUsersApi=async(userId)=>
    await axios.delete(`http://localhost:5000/users/${userId}`);
   
export const UpdateUsersApi=async(userId,userInfo)=>
    await axios.put(`http://localhost:5000/users/${userId}`,userInfo);