
import '../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';

const HomePage=()=> {

    const [inputValue,setInputValue]=useState('');
    const [splitInputValue,setSplitInputValue]=useState([]);
    const [searchValue,setSearchValue]=useState('');
    const [result,setResult]=useState('');

    const getDataFromDB=()=>{
              // axios.get('https://ami-coding-pari-na-default-rtdb.asia-southeast1.firebasedatabase.app/Userdata.json')
        // .then(response =>{
        //     console.log(response.data);
        // })
        // .catch(
        //     error=>{
        //         console.log(error);
        //     });
    }

    const setDataToDB=(data)=>{
        
    }

    const searchData=()=>{
        console.log(inputValue,' inputValue');
        console.log(searchValue,' search');

        let splitInputValue= inputValue.split(/[\s, ]+/);


        // let d= parseInt(inputValue);

        //setSplitInputValue(splitInputValue);

        sortInputValue(splitInputValue);

        const found = splitInputValue.find(v => v == searchValue);

        found!=undefined?setResult('True'):setResult('False');



        console.log(found,' result');
    }


    const sortInputValue=(data)=>{

        let sortedData= data.sort((a,b) => a - b);
        setDataToDB(sortedData);

        console.log(sortedData, ' sortedData');


    }

    useEffect(()=>{

    },[])

  return (
    <div className="App">
        
        <h2>Home Page</h2>
            <div>
                <table>
                    <tr>
                        <td>Input values: </td>
                        <td><input onChange={e=>setInputValue(e.target.value)}/> </td>
                      
                    </tr>
                    <tr>
                        <td>Search values: </td>
                        <td><input onChange={e=>setSearchValue(e.target.value)} type='number'/> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td><button onClick={()=>searchData()}>Khoj</button></td>
                    </tr>
                    <tr>
                        <td>Result </td>
                        <td>{result}</td>
                    </tr> 
                </table>
            </div>

        <div>

        </div>
    </div>
  );
}

export default HomePage;
