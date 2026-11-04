import { useState } from 'react';
  
function App() {
  const [username,setUserName]=useState([])
  const [data,setdata]=useState(null)
  const [error,setError]=useState('');
  const handleSearch=async()=>{
    try{
      const response= await fetch(`https://api.github.com/users/${username}`)
      const resp= await response.json()
      setdata(resp); 
      setError(''); 
      setUserName('');
    } catch(error){   
      setError(error.message); 
      setdata(null);  
    } 
  }   
  return (  
    <div style={{width:"100%",display:"flex",
      flexDirection:"column",
      gap:9,
      textAlign:"center",
      alignItems:"center",
      marginTop:30,
    }}>
      <h2 style={{
        fontSize:"30px",
        marginBottom:20,
      }}>Github Search</h2>   
      <input style={{
        padding:"15px 10px",
        borderRadius:6,
        width:"250px",
        border:"2px solid navy", 
        
      }} type='text' placeholder='Enter User name' value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <button  style={{
        padding:"8px 22px",
        fontSize:"18px",
        background:"navy",
        color:"whitesmoke",
        borderRadius:10,
        cursor:"pointer",
        border:"2px solid whitesmoke",
        marginBottom:20,
      }} onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>} 
      {data &&(      
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          textAlign:"center",
          gap:15,
          padding:"30px 20px",
          background:"navy",
          borderRadius:10,
          width:"35%",
          height:"60%",
        }}>
          <div style={{
            display:"flex",
            flexDirection:"row",
            gap:16,
            textAlign:'center',
            alignItems:"center",
            justifyContent:"space-between"
          }}>
          <img  src={data.avatar_url}  alt='user Name' style={{
            width:"80px",
            height:"80px",
            borderRadius:"50%",
            border:"1px solid navy",
          }}   /> 
          <p style={{
            color:"white",
            fontSize:"20px",
          }}>Name : {data.name} </p>
            </div>
          <p style={{
            color:"white",
            fontSize:"20px",
          }}>Followers :{data.followers} </p>   

          <p style={{
            color:"white",
            fontSize:"20px",
          }}>Repo : {data.public_repos}   </p>  

          <p style={{
            fontSize:"20px",
          }}> <a style={{
             color:"orange",
          }} href={data.html_url}> {data.html_url} </a>   </p>    
          </div> 
      )}                            
    </div> 
  )    
} 

export default App;  