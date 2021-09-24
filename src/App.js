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
      //this condition is checking user in already login or not.
    }
  },[])

  return (
    <div className="App">

        {verified?<HomePage/>:<LoginPage/>}
        {/* if user already login then it will take to the Homepage otherwise Login page */}

       
    </div>
  );
}

export default App;
