import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import api from '../api/contacts'; 

import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ContactDetails from './components/ContactDetails';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  const[contacts, setContacts] = useState([]); //could also initilize with storedContacts but that results in undesired empty contact card in this particular design.

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  


  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post('/contacts', request)
    console.log(response);
    setContacts([...contacts,response.data]);
  } 

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    console.log(response.data);
    const {id,name,email} = response.data;
    setContacts(contacts.map(contact => { //update state for immediate showing of edited data.
      return contact.id === id ? {...response.data} : contact; // contact.id === id of existing data update else return as it was.
    }));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact)=>{
      return contact.id != id;
    });

    setContacts(newContactList);
  }


  //console.log(uuidv4());
  
  useEffect(() => {
    /* if(storedContacts) setContacts(storedContacts); */

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
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
            element ={<ContactDetails />}
          />

          <Route 
            path="/edit" 
            element= {<EditContact updateContactHandler={updateContactHandler} /> 
            } 
          />
          
        </Routes>
        
      </Router>

       {/* <AddContact addContactHandler={addContactHandler}/> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      
    </div>
  );
}

export default App
