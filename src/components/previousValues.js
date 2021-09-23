
import '../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from "moment";


const PriviousValue=()=> {

    const [inputValue,setInputValue]=useState('');
    const [fetchedData,setFetchedData]=useState(['']);
    const [searchValue,setSearchValue]=useState('');
    const [start_datetime,setStart_datetime]=useState('2021-09-05 10:32:58');
    const [end_datetime,setEnd_datetime]=useState('2025-09-05  10:32:58');
    const [msg,setMsg]=useState('');
    const [result,setResult]=useState('');

    const getDataFromDB=()=>{
        axios.get('https://ami-coding-pari-na-default-rtdb.asia-southeast1.firebasedatabase.app/Userdata.json')
            .then(response =>{
                console.log(response.data, ' getDataFromDB');

                const fetchedOrders = [];
                for (let key in response.data) {
                    if( response.data[key].user_id == localStorage.getItem('userID')){
                        fetchedOrders.push({       //puting get value in arrayyyyyyyy
                            ...response.data[key],
                            id: key})
                    }
                }
                setFetchedData(fetchedOrders);
                console.log(fetchedOrders, ' fetchedOrders');

            })
            .catch(
                error=>{
                    console.log(error);
            });
    }


    const filterHandaler=()=>{
        
        var dateStart = new Date(start_datetime);
        var dateEnd = new Date(end_datetime);
        const filterdValues = [];


        fetchedData.map(d=>{
            var date =  new Date(d.timestamp);

            console.log(dateStart<date, ' d');

            if(date>=dateStart && date<=dateEnd){
                filterdValues.push(d);
            }
        
        })


        setFetchedData(filterdValues);
    
    
    }

    useEffect(()=>{
        localStorage.setItem('userID','01');

        getDataFromDB();
    },[])



  return (
    <div className="App">
        
        <br/>
        <h2>Previous Values</h2>
        <br/>
        <div>
            <table  style={{width:'700px',fontWeight:'bold'}}>
                <tr>
                    <td>Start Datetime</td>
                    <td><input type='date' placeholder='start_datetime' onChange={e=>setStart_datetime(e.target.value)}/></td>

                </tr>
                <tr>
                    <td>End Datetime</td>
                    <td><input type='date' placeholder='end_datetime' onChange={e=>setEnd_datetime(e.target.value)}/></td>
                </tr>
            </table>
            <br/>
            <button onClick={()=>filterHandaler()} style={{width:'700px'}}>Filter</button>
            <br/>
            <br/>
            <hr/>
            <br/>
            <table>
                <tr>
                    <th>Input Values</th>
                    <th>Timestamp</th>
                </tr>
                {fetchedData.map(d=>{
                
                    return(
                        <tr>
                            <td>{d.input_values}</td>
                            <td>{d.timestamp}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    </div>
  );
}

export default PriviousValue;
