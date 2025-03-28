import { useState } from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Left from './componets/Left';
import Right from './componets/Right';

function App() {
  
  const [mylist, setMylist] = useState([{
    title: 'Learn About React',
    disc: 'Complete html, CSS and javascript after than learn about react.',
    status: false,
    sno: 1
  }, {
    title: 'Learn About Git and github',
    disc: 'Create your profile on github and learn about git and github.',
    status: false,
    sno: 2
  }, {
    title: 'Get an internship at 30 Apr 2025',
    disc: 'Learn more and get your gol to achiveval poit.',
    status: false,
    sno: 3
  }]);

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
      if (mylist.length<=0) {
        let sno = 0;
      } else {
        let sno = mylist[mylist.length - 1].sno;
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
