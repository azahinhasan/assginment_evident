
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

        if(sortedData!='' && searchValue!=''){  //checking sortedData are emepty or not

            setMsg('Input Values stored in DB');
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
            setMsg("Failed!! Textbox is Emply or given invalid data!!");
            setResult('');
        }

    }

    const searchData=()=>{
        //searching data from Input values
        console.log(inputValue,' inputValue');
        console.log(searchValue,' search');


        if(inputValue!=''){

            

            let splitInputValue= inputValue.split(/[a-zA-Z]+|[\s., ]/);
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

    
        var filterOutIsNotInteger = data.filter(function (item) {
            return (parseInt(item) == item);
            //filerting for 2nd time and making sure there is only Integer type element in the array
            //if there is other type it will removed from array
        });


        let sortedData= filterOutIsNotInteger.sort((a,b) => b - a); //sorting array in descending order

        setDataToDB(sortedData); 
        //sending this sorted array to setDataToDB() for storing data in Database

        console.log(sortedData, ' sending to DB');
    }


    const logOut=()=>{
        localStorage.clear(); 
        window.location.reload(); 
        
    }

    useEffect(()=>{
        //localStorage.setItem('userID','01');
        setMsg('');
        setResult('');
    },[])



    let Instructions= ( 
            <div className="instructions">
                <h3>Instructions </h3>
                <div>
                    1. In Input Values user can input like 1, 2 or 1,2 or 1.2 or 1 2 etc.
                    <br/>
                    2.If you give Alphabet in input it will not store in DB.
                    Such as: 
                        <br/>
                        &nbsp;&nbsp; Input Given: 1, -A, 4, 9,  -2, 7, b 
                        <br/>
                        &nbsp;&nbsp; Will store in DB: 9, 7, 4, 1, -2
                    <br/>
                    4. If Search Values or Input values textbox are empty,values will not store in DB
                    <br/>
                    5. In Privious Values page it will show by defult all privious input values of that user.
                    <br/>
                    6.User can filter by Start Datetime and End Datetime
                    <br/>
                    7.If user is not enterd any input values and Is not press on Khoj button there will be Emapty msg in Previous page
                </div>
            </div>
    )


    let pageData = '';

    
    if(showSearchPage){

        // if press Search Page button it will show this part
        pageData= <div>
                    <h2>Khoj the search Page</h2>
                    <table style={{fontWeight:'bold',width:'80%'}}>
                        <tr>
                            <td>Input values: </td>
                            <td><input onChange={e=>setInputValue(e.target.value)}  value={inputValue}/> </td>
                        
                        </tr>
                        <tr>
                            <td>Search values: </td>
                            <td><input onChange={e=>setSearchValue(e.target.value)} type='number' value={searchValue}/> </td>
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

                    {Instructions} 
                    {/* showing instructions part by calling Instructions variable */}

                </div>
    }
    else{
         // Previous Values button it will show this part
        pageData= <PriviousValues/>;
        
    }

    return (
        <div className="App">
            
            <h2>Welcome {localStorage.getItem('email')}</h2>
            <br/>

            <button onClick={()=>setShowSearchPage(true)}>Search Page</button>
            <button onClick={()=>setShowSearchPage(false)}>Previous Values</button>
            <button onClick={()=>logOut()} style={{backgroundColor:'red',borderColor:'red'}}>LogOut</button>
            
            <br/>

            {pageData}

        </div>
    );
}

export default HomePage;
