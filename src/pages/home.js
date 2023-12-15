import React, {useEffect}from 'react'
import {useDispatch, useSelector} from "react-redux"
import { DeleteUserStart, loadUserStart } from '../redux/actions';
import { 
    MDBTable, 
    MDBTableHead, 
    MDBTableBody,
    MDBBtn, 
    MDBIcon, 
    MDBTooltip, 
    MDBSpinner} from "mdb-react-ui-kit";
import UserInfo from './userinfo';
import {Link} from "react-router-dom";

function Home() {
  const dispatch =useDispatch();
  const {users, loading}=useSelector(state=>state.data);

  useEffect(()=>{
    dispatch(loadUserStart());
  },[]);

  
  if(loading){
    return(
      <MDBSpinner style={{marginTop:"150px"}} role="status">
          <span className='visually-hidden'>loading...</span>
      </MDBSpinner>
    )
  }

  const handleDelete=(id)=>{
      if(window.confirm("Are you sure, wont to delete user?")){
        dispatch(DeleteUserStart(id))
      }
  }
  return(
    <div className='container' style={{marginTop:"150px"}}>
      <MDBTable>
        <MDBTableHead dark>
            <tr>
              <th scope='col'>No.</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Address</th>
              <th scope='col'>Action</th>
            </tr>
        </MDBTableHead>
        {users && users.map((item,index)=>(
          <MDBTableBody key={index}>
              <tr>
                <th scope='row'>{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                    <MDBBtn 
                      className='m-1' 
                      tag="a" 
                      color="none"
                      onClick={()=> handleDelete(item.id)}>
                        <MDBTooltip title="delete" tag="a">
                          <MDBIcon fas icon='trash' style={{color:'red'}} size='lg'/>
                        </MDBTooltip>
                      </MDBBtn>{"     "}
                      <Link to={`/editUser/${item.id}`}>
                      <MDBTooltip title="edit" tag="a">
                          <MDBIcon fas icon='pen' style={{color:'green', marginBottom:'10px'}} size='lg'/>
                        </MDBTooltip>
                      </Link>{"     "}
                      <Link to={`/userInfo/${item.id}`}>
                      <MDBTooltip title="view" tag="a">
                          <MDBIcon fas icon='eye' style={{color:'black', marginBottom:'10px'}} size='lg'/>
                        </MDBTooltip>
                      </Link>
                </td>
              </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  )
}

export default Home