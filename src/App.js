import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Tables from './Tables';


function App() {
  var t='';
  const [btnchange,setbtn] = useState([])
  const [search,setsearch] = useState('')

  
  const [val,setval] = useState({
    rollno:'',
    name:'',
    science:0,
    math:0,
    sanskrit:0,
  computer:0,
  english:0,
  total:0

  })
  console.log(setval)

function inputhandler(e){
  setval({...val,[e.target.name]:e.target.value})
}

function btnhandler(){
  setbtn(btnchange=>[...btnchange,val])
  val.total=parseInt(val.science)+parseInt(val.math)+parseInt(val.english)+parseInt(val.computer)+parseInt(val.sanskrit)
}
const removehandle =(remove)=>{
 setbtn(btnchange=>{
  return  btnchange.filter((rdat,rdata)=> rdata !==remove)
 }

 )   

}
function searchdata(e){
  setsearch(btnchange=>{
    return btnchange.filter((data,rdata,value)=>value === e)
    if(btnchange.match == search){
      alert(setsearch)
    }
})

}

function resethandler(){
  
  setval({
    rollno:'',
    name:'',
    science:0,
    math:0,
    sanskrit:0,
  computer:0,
  english:0,

  })
}
  return (
    <div className="App">
      <div className='table'>
        <table>
          <tr>
            <td>Roll No.</td>
            <td><input type='text' name='rollno' value={val.rollno} onChange={inputhandler}></input></td>
          </tr>
          <tr>
            <td>Name</td>
            <td><input type='text' name='name' value={val.name}onChange={inputhandler}></input></td>
          </tr>
          <tr>
            <td>English</td>
            <td><input type='text'name='english' value={val.english}onChange={inputhandler}></input></td>
          </tr>
          <tr>
            <td>Science</td>
            <td><input type='text'name='science' value={val.science}onChange={inputhandler}></input></td>
          </tr>
          <tr>
            <td>Sanskrit</td>
            <td><input type='text' name='sanskrit' value={val.sanskrit}onChange={inputhandler}></input></td>
          </tr>
          <tr>
            <td>Maths</td>
            <td><input type='text' name='math'value={val.math}onChange={inputhandler}/></td>
          </tr>
          <tr>
            <td>Computer</td>
            <td><input type='text' name='computer'value={val.computer}onChange={inputhandler}></input></td>
          </tr>
          
          <tr align='center'>
            <td><input type='button' value='submit' className='btn' onClick={btnhandler}></input></td>
            
            <td><input type='button' value='reset'className='btn'onClick={resethandler}></input></td>
            
            <td><input type='text' name='text'value={search}  onChange={(e)=>setsearch(e.target.value)}></input></td>
            
            <td> <input type='button' name='search' value='search' onClick={searchdata}></input></td>

            
          </tr>
          
        </table>
        <br></br>
        <br></br>
      
          <table border={1}  >
          
            <tr>
              <td>Roll No.</td>
              <td>Name</td>
              <td>English</td>
              <td>Science</td>
              <td>Sanskrit</td>
              <td>Maths</td>
              <td>Computer</td>
              <td>Total</td>
              <td>Delete</td>
            </tr>
       
            {
            btnchange.map((item,index)=>{
              console.log('table',item)
              return(
                <tr >
                  <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.english}</td>
                <td>{item.science}</td>
                <td>{item.sanskrit}</td>
                <td>{item.math}</td>
                <td>{item.computer}</td>
                <td>{item.total}</td>
                <td ><button  name='remove' onClick={()=>removehandle(index)}>delete</button></td>
                
                </tr>
                
              )
            })
           
            }
           
          </table>
            
        
      
       <div>
      
       </div>
        
      </div>
    </div>
  );
}

export default App;
