
import '../../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from "moment";


const PriviousValue=({setShowLoginPage})=> {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState('');
    const signUpApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaMLRpxmGQ6asNZYY0_m1Y8UMxKelLKcw';

   
    const singup=()=>{
        const authData ={
            email: email,
            password: password,
            returnSecureToken:true
        }

        axios.post(signUpApi,authData)
            .then(response =>{
                setMsg('');
                console.log(response.data, ' post');
                localStorage.setItem('userID',response.data.localId);
                localStorage.setItem('email',response.data.email);
                localStorage.setItem('idToken',response.data.idToken);
                localStorage.setItem('userVerified',true);
                window.location.reload(); 
            })
            .catch(
                error=>{
                    console.log(error.response.data.error);
                    setMsg('FAILED!! '+error.response.data.error.message);
            });


    }

    useEffect(()=>{
        
    },[])



  return (
    <div className="App">
        <h2>SignUp Page</h2>

        <table style={{width: '600px'}}>
            <tr>
                <td>Email</td>
                <td><input placeholder='exp@exemple.com' type="email" onChange={e=>setEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input placeholder='at least 6 characters' type="password" onChange={e=>setPassword(e.target.value)}/></td>
            </tr>
        </table>
        <br/>
        <div style={{color:'red',fontWeight:'bold'}}>{msg}</div>
        <br/>
        <button style={{width: '600px'}} onClick={()=>singup()}>SignUp</button>
        <br/><br/>
        <button style={{width: '600px'}} onClick={()=>setShowLoginPage(true)}>Go to LogIn</button>
    </div>
  );
}

export default PriviousValue;
