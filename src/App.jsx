import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetails from './components/ContactDetails';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  const[contacts, setContacts] = useState([]); //could also initilize with storedContacts but that results in undesired empty contact card in this particular design.

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id: uuidv4(), ...contact}]);
  } 

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id != id;
    });

    setContacts(newContactList);
  }


  console.log(uuidv4());
  
  useEffect(() => {
    if(storedContacts) setContacts(storedContacts);
  },[]); // Empty dependency array means this effect runs only once after initial render


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]); // This effect runs whenever contacts state changes
  
  /* const contacts = [
    {
      id: '1',
      name : 'Mehitak',
      email: 'hitak123@gmail.com',
    },

    {
      id: '2',
      name : 'Carta',
      email: 'cartaissue@hotmail.com',
    }
  ] */

  return (
    <div className='ui container'>
      {/* <Switch> is replaced by <Routes> in ReactRouter v6 */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = { <ContactList contacts={contacts} getContactId={removeContactHandler} /> } />
          
          <Route 
            path="/add" 
            element= {<AddContact addContactHandler={addContactHandler} /> 
            } 
          />

          <Route
            path="/contact/:id" // :propname ,colon followed by prop name refrences the prop.
            element ={<ContactDetails/>}
          />
          
        </Routes>
        
      </Router>

       {/* <AddContact addContactHandler={addContactHandler}/> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      
    </div>
  );
}

export default App
