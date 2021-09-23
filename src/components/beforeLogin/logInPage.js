
import '../../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from "moment";
import SignUpPage from './signUpPage';


const PriviousValue=()=> {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showLoginPage,setShowLoginPage]=useState(true);
    const authApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaMLRpxmGQ6asNZYY0_m1Y8UMxKelLKcw';
    const [msg,setMsg]=useState('');

   
    const logIn=()=>{
        const authData ={
            email: email,
            password: password,
            returnSecureToken:true
        }

        axios.post(authApi,authData)
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
                    setMsg('FAILED!! '+error.response.data.error.message);
            });


    }

    useEffect(()=>{
        
    },[])

    let pageData = '';

    if(showLoginPage){
        pageData=(
            <div>
                <h2>LogIn Page</h2>
                <table style={{width: '600px'}}>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" onChange={e=>setEmail(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" onChange={e=>setPassword(e.target.value)}/></td>
                    </tr>
                </table>
                <br/>
                <div style={{color:'red',fontWeight:'bold'}}>{msg}</div>
                <br/>
                <button style={{width: '600px'}} onClick={()=>logIn()}>LogIn</button>
                <br/><br/>
                <button style={{width: '600px'}} onClick={()=>setShowLoginPage(false)}>Go to SignUp</button>
            </div>
        )
    }
    else{
        pageData=<SignUpPage setShowLoginPage={setShowLoginPage}/>
    }



  return (
    <div className="App">
     

        {pageData}
       
    </div>
  );
}

export default PriviousValue;
