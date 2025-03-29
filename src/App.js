import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Left from './componets/Left';
import Right from './componets/Right';

function App() {

  const [mylist, setMylist] = useState([]);

  useEffect(() => {
      setMylist(JSON.parse(localStorage.getItem('key')));      
}, []);

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(mylist)); 
    console.log('update');
    console.log(mylist);
    
  }, [mylist]);

  const deleteItem = (list) => {
    setMylist(mylist.filter((e) => {
      return e !== list;
    }))
  }

  const completeItem = (i) => {
    console.log('This work is comleted');
  }

  const addNewList = (title, disc) => {
    if (title == "" && disc == "") {
      alert("Enter details");
    } else {
      let sno;
      if (mylist.length <= 0) {
        sno = 1;
      } else {
        sno = mylist[mylist.length-1].sno+1;
        console.log(sno);  
      }
      const myItem = {
        sno: sno,
        title: title,
        disc: disc,
        status: false
      }
      setMylist([...mylist, myItem]);
    }
  }

  return (
    <>
      <div className='main'>
        <Header totalList={mylist.length} />
        <div className='main-section'>
          <Left mylist={mylist} deleteItem={deleteItem} completeItem={completeItem} />
          <Right addNewList={addNewList} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
