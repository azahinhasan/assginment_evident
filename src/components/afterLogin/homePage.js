
import '../../App.css';
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

        


        if(sortedData!=''){  //checking sortedData are emepty or not
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
        else{ //if sorteddata are empty it will not store in DB
            setMsg("Failed!! Please input atlast one number!!");
            setResult('');
        }

    }

    const searchData=()=>{
        //searching data from Input values
        console.log(inputValue,' inputValue');
        console.log(searchValue,' search');


        if(inputValue!=''){
            setMsg('Input Values stored in DB');
            let splitInputValue= inputValue.split(/[a-zA-Z]+|[\s., ]+/);
            //removing things like Alphabet,space,comma etc from input values

            const found = splitInputValue.find(v => v == searchValue);
            //searching operation

            found!=undefined?setResult('True'):setResult('False');

            console.log(found,' found');

            sortInputValue(splitInputValue); //sending data to sorting function to sort
            
        }
        else{
            setMsg("Failed!! Input Value text box is Empty!!");
            setResult('');
        }

    }


    const sortInputValue=(data)=>{

    
        let sortedData= data.sort((a,b) => b - a); //sorting data 

        setDataToDB(sortedData.join('').split('')); 

        //removng extra spaces again  sorting data sending to setDataToDB fucntion to store them in DB


        console.log(sortedData, ' sortedData');
    }


    const logOut=()=>{
        localStorage.clear(); 
        window.location.reload(); 
        
    }

    useEffect(()=>{
        //localStorage.setItem('userID','01');
        setMsg('');

    },[])





    let pageData = '';

    
    if(showSearchPage){

        // if press Search Page button it will show this part
        pageData= <div>
                    <h2>Khoj the search Page</h2>
                    <table style={{fontWeight:'bold',width:'80%'}}>
                        <tr>
                            <td>Input values: </td>
                            <td><input onChange={e=>setInputValue(e.target.value)}/> </td>
                        
                        </tr>
                        <tr>
                            <td>Search values: </td>
                            <td><input onChange={e=>setSearchValue(e.target.value)} type='number'/> </td>
                        </tr>
                        <tr>
                            <td style={{color:'#9A00FF'}}>{msg} </td>
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
         // Previous Values button it will show this part
        pageData= <PriviousValues/>;
        
    }

  return (
    <div className="App">
        
        <h2>Welcome {localStorage.getItem('email')}</h2>

        <button onClick={()=>setShowSearchPage(true)}>Search Page</button>
        <button onClick={()=>setShowSearchPage(false)}>Previous Values</button>

        <button onClick={()=>logOut()} style={{backgroundColor:'red',borderColor:'red'}}>LogOut</button>



            {pageData}

    </div>
  );
}

export default HomePage;
