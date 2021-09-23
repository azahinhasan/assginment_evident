
import '../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from "moment";


const HomePage=()=> {

    const [inputValue,setInputValue]=useState('');
    const [fetchedData,setFetchedData]=useState(['']);
    const [searchValue,setSearchValue]=useState('');
    const [start_datetime,setStart_datetime]=useState('2021-09-05 10:32:58');
    const [end_datetime,setEnd_datetime]=useState('2025-09-05  10:32:58');
    const [filter,setFilter]=useState(true);
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



        let splitInputValue= inputValue.split(/[\s, ]+/);


        // let d= parseInt(inputValue);

        //setSplitInputValue(splitInputValue);

        sortInputValue(splitInputValue);

        const found = splitInputValue.find(v => v == searchValue);

        found!=undefined?setResult('True'):setResult('False');



        console.log(found,' result');
    }


    const sortInputValue=(data)=>{

        let sortedData= data.sort((a,b) => b - a);
       // setDataToDB(sortedData);
        getDataFromDB();

        console.log(sortedData, ' sortedData');
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

    
        dateStart = new Date('2012-09-01');
        dateEnd = new Date('06/25/2013');

       console.log(dateStart);

        setFetchedData(filterdValues);
    
    
    }

    useEffect(()=>{
        localStorage.setItem('userID','01');
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

        <br/>
        <h3>Privious Values</h3>
        <br/>
        <div>
            <table>
                <tr>
                    <td><input type='date' placeholder='start_datetime' onChange={e=>setStart_datetime(e.target.value)}/></td>
                    <td><input type='date' placeholder='end_datetime' onChange={e=>setEnd_datetime(e.target.value)}/></td>
                    <td><button onClick={()=>filterHandaler()}>Filter</button></td>
                </tr>
            </table>
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

export default HomePage;
