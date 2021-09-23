
import '../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from "moment";
import PriviousValues from './previousValues';


const HomePage=()=> {

    const [inputValue,setInputValue]=useState('');
    const [searchValue,setSearchValue]=useState('');
    const [showSearchPage,setShowSearchPage]=useState(true);
    const [msg,setMsg]=useState('');
    const [result,setResult]=useState('');


    const setDataToDB=(sortedData)=>{

        // storing values in Database

        axios.post('https://ami-coding-pari-na-default-rtdb.asia-southeast1.firebasedatabase.app/Userdata.json',{
            input_values:sortedData.toString(),
            timestamp:moment().format("YYYY-MM-DD hh:mm:ss"),
            user_id:localStorage.getItem('userID')
        })
        .then(response =>{
            console.log(response.data, ' post');
        })
        .catch(
            error=>{
                console.log(error);
        });

    }

    const searchData=()=>{
        //searching data from Input values
        console.log(inputValue,' inputValue');
        console.log(searchValue,' search');


        if(inputValue!=''){
            setMsg('Input Values stored in DB');
            let splitInputValue= inputValue.split(/[a-zA-Z]+|[\s., ]+/);

            const found = splitInputValue.find(v => v == searchValue);

            found!=undefined?setResult('True'):setResult('False');

            console.log(found,' found');

            sortInputValue(splitInputValue); //sending data to sorting function to sort
            
        }
        else{
            setMsg("Failed!! Input Value text box is Empty!!");
        }

    }


    const sortInputValue=(data)=>{

    
        let sortedData= data.sort((a,b) => b - a); //sorting data 

        //setDataToDB(sortedData.join('').split(''));  

        //after sorting data sendting to setDataToDB fucntion to store them in DB


        console.log(sortedData, ' sortedData');
    }



    useEffect(()=>{
        localStorage.setItem('userID','01');

    },[])



    let pageData = '';

    
    if(showSearchPage){

        pageData= <div>
                    <h2>Store and Search</h2>
                    <table style={{fontWeight:'bold'}}>
                        <tr>
                            <td>Input values: </td>
                            <td><input onChange={e=>setInputValue(e.target.value)}/> </td>
                        
                        </tr>
                        <tr>
                            <td>Search values: </td>
                            <td><input onChange={e=>setSearchValue(e.target.value)} type='number'/> </td>
                        </tr>
                        <tr>
                            <td style={{color:'red'}}>{msg} </td>
                            <td><button onClick={()=>searchData()}>Khoj</button></td>
                        </tr>
                        <tr>
                            <td>Result </td>
                            <td style={{color:result=='False'?'red':'green',fontWeight:'bold'}}>{result}</td>
                        </tr> 
                    </table>
                </div>
    }
    else{
        pageData= <PriviousValues/>;
        // 
    }

  return (
    <div className="App">
        
        <h2>Welcome {localStorage.getItem('Username')}</h2>

        <button onClick={()=>setShowSearchPage(true)}>Store and Search</button>
        <button onClick={()=>setShowSearchPage(false)}>Previous Values</button>




            {pageData}

    </div>
  );
}

export default HomePage;
