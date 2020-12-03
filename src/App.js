import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from 'pusher-js'
import axios from './axios'




function App() {
  const[messages, setMessages]= useState([])

useEffect(()=>{
  //fetching
axios.get('/messages/sync')
.then(response =>{
  
  setMessages(response.data)
})

},[])

useEffect(()=>{
   //once
   const pusher = new Pusher('54487c30b1f91b98f8ad', {
    cluster: 'ap2',
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessages)=> {
    setMessages([...messages,newMessages])
  });

 return ()=>{  //cleanup function
    channel.unbind_all();
    channel.unsubscribe();
  }
   
 }, [messages])


 console.log(messages);

  return (
    <div className="app">
      <div className = "app__body">
      <Sidebar />
    
    <Chat messages={messages}/>

      </div>
    
    
    </div>
  );
}

export default App;
