import React, {useEffect,useState} from 'react';
import './App.css';
import HomePage from './components/afterLogin/homePage';
import LoginPage from './components/beforeLogin/logInPage';


const App=()=> {

  const [verified,setVerified]=useState(false);


  useEffect(()=>{

    if(localStorage.getItem('userVerified') && localStorage.getItem('userID')!='' && 
    localStorage.getItem('email')!=''){
      setVerified(true);
    }
  },[])

  return (
    <div className="App">
        {/* <HomePage/> */}

        {verified?<HomePage/>:<LoginPage/>}

       
    </div>
  );
}

export default App;
