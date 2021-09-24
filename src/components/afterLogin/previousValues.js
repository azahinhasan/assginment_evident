
import '../../App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';


const PriviousValue=()=> {


    const [fetchedData,setFetchedData]=useState(['']);
    const [start_datetime,setStart_datetime]=useState('2000-01-01 10:32:58');
    const [end_datetime,setEnd_datetime]=useState('2050-12-12  10:32:58');


    const getDataFromDB=()=>{
        //fatching data for database
        axios.get('https://ami-coding-pari-na-default-rtdb.asia-southeast1.firebasedatabase.app/Userdata.json')
            .then(response =>{
                //console.log(response.data, ' getDataFromDB');

                const fetchedOrders = [];
                for (let key in response.data) {
                    if( response.data[key].user_id == localStorage.getItem('userID')){
                        fetchedOrders.push({      
                            ...response.data[key],
                            
                            id: key})
                             //after fatching doing litle bit modifying and putting them in array 
                    }
                }
                //setFetchedData(fetchedOrders);
                //console.log(fetchedOrders, ' fetchedOrders');

                filterHandaler(fetchedOrders); 

                //after fatching that array is sedning to the filter Function 

            })
            .catch(
                error=>{
                    console.log(error);
            });
    }


    const filterHandaler=(fetchedOrder)=>{
        
        //filtering data according to user given Start Datetime and End Datetime
        //defult time are 2000-01-01 10:32:58 and 2050-12-12  10:32:58

        var dateStart = new Date(start_datetime);
        var dateEnd = new Date(end_datetime);
        const filterdValues = [];


        fetchedOrder.map(d=>{
            var date =  new Date(d.timestamp);

            //console.log(dateStart<date, ' d');

            if(date>=dateStart && date<=dateEnd){
                filterdValues.push(d);
                //filtering and pushing them in array
            }
        
        })


        setFetchedData(filterdValues); //storing filterd data in State
    
    
    }

    useEffect(()=>{
        getDataFromDB();
    },[])



  return (
    <div className="App">
        
        <br/>
        <h2>Previous Values (Section 3: API Endpoints)</h2>
        <br/>
        {fetchedData!=''?
        //if fatchData state is not emply then it will show this part
            <div>
                <table  style={{width:'480px',fontWeight:'bold'}}>
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
                <button onClick={()=>getDataFromDB()} style={{width:'480px'}}>Filter</button>
                <br/>
                <br/>
                <hr/>

                <div style={{color:'blue'}}> [P.S. Without Filter table will show all previous input values of User(who logged in)]</div>
                <br/>

                <table>
                    <tr>
                        <th>Input Values</th>
                        <th>Timestamp</th>
                    </tr>
                    {fetchedData.map(d=>{
                        // printing data from state
                    
                        return(
                            <tr key={d.id}>
                                <td>{d.input_values}</td>
                                <td>{d.timestamp}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        :<h3>You donn't have any previous data! Please store something</h3>}
        {/* otherwise it will show this part */}
    </div>
  );
}

export default PriviousValue;
