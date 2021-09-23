
import '../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from "moment";
import PriviousValues from './previousValues';


const HomePage=()=> {

    const [inputValue,setInputValue]=useState('');
    const [fetchedData,setFetchedData]=useState(['']);
    const [searchValue,setSearchValue]=useState('');
    const [start_datetime,setStart_datetime]=useState('2021-09-05 10:32:58');
    const [end_datetime,setEnd_datetime]=useState('2025-09-05  10:32:58');
    const [msg,setMsg]=useState('');
    const [result,setResult]=useState('');


    const setDataToDB=(sortedData)=>{

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
        console.log(inputValue,' inputValue');
        console.log(searchValue,' search');


        if(inputValue!=''){
            setMsg('');
            let splitInputValue= inputValue.split(/[\s, ]+/);

            const found = splitInputValue.find(v => v == searchValue);

            found!=undefined?setResult('True'):setResult('False');


            sortInputValue(splitInputValue);
        }
        else{
            setMsg("Failed!! Input Value text box is Empty!!");
        }

    }


    const sortInputValue=(data)=>{

        let sortedData= data.sort((a,b) => b - a);

        setDataToDB(sortedData);

        console.log(sortedData, ' sortedData');
    }



    useEffect(()=>{
        localStorage.setItem('userID','01');

      //  getDataFromDB();
    },[])

    // useEffect(()=>{
    //     localStorage.setItem('userID','01');
    //     getDataFromDB();
    // },[fetchedData])

  return (
    <div className="App">
        
        <h2>Welcome {localStorage.getItem('Username')}</h2>

        <button onClick={()=>searchData()}>Store and Search</button>
        <button onClick={()=>searchData()}>Previous Values</button>


            <div>
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


        <PriviousValues/>


    </div>
  );
}

export default HomePage;
