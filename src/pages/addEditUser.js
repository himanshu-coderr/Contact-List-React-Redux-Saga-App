import React, {useState,useEffect} from 'react'
import {MDBValidation, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { CreateUserStart, UpdateUserStart } from '../redux/actions';
// import { toast } from 'react-toastify';


const initialState={
  name:"",
  email:"",
  phone:"",
  address:""
}

const AddEditUser=()=> {
  const [formValue, setFormValue]=useState(initialState);
  const {name,email, phone, address}= formValue;
  const history=useNavigate();
  const dispatch=useDispatch();
  const {id}=useParams();
  const {users}=useSelector(state=>state.data);
  const [editMode, setEditMode]= useState(false);

  useEffect(()=>{
    if(id){
      setEditMode(true)
      const singleUser=users.find(item=>item.id===Number(id));
      setFormValue({...singleUser});
    }else{
      setEditMode(false);
      setFormValue({...initialState});
    }
  },[id])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name && email && phone && address){
      if(!editMode){
        dispatch(CreateUserStart(formValue));
      // toast.success("User added successfully");
      setTimeout(()=>history("/"),10);
      }
      else{
        dispatch(UpdateUserStart({id,formValue}));
        setTimeout(()=>history("/"),10);
        setEditMode(false);
      }
      
    }
  };

  const onInputChange=(e)=>{
    let{name,value}=e.target;
    setFormValue({...formValue,[name]:value});
  };

  return (
    <MDBValidation
      className='row g-3'
      style={{marginTop:'100px'}}
      noValidate
      onSubmit={handleSubmit}>


      <p className='fs-2 fw-bold'>{!editMode? "Add user detail":"update user detail"}</p>
      <div style={{margin:'auto', padding:'15px', maxWidth:'400px', alignContent:'center'}}>
        <MDBInput
          value={name || ""}
          name="name"
          type="text"
          onChange={onInputChange}
          required
          label="name"
          validation="provide name"/>
          <br/>
          <MDBInput
          value={email || ""}
          name="email"
          type="email"
          onChange={onInputChange}
          required
          label="email"
          validation="provide email"/>
          <br/>
          <MDBInput
          value={phone || ""}
          name="phone"
          type="number"
          onChange={onInputChange}
          required
          label="phone"
          validation="provide phone"/>
          <br/>
          <MDBInput
          value={address || ""}
          name="address"
          type="text"
          onChange={onInputChange}
          required
          label="address"
          validation="provide address"/>
          <br/>
          <div className='col-12'>
              <MDBBtn style={{marginRight:'10px'}}  type="submit">
                  {!editMode? "Add":"Update"}
              </MDBBtn>
              <MDBBtn onClick={()=>history("/")} color="danger"> 
                  Go Back
              </MDBBtn>
          </div>
      </div>
    </MDBValidation>
  )
}

export default AddEditUser