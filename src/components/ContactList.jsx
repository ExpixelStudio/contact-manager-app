import ContactCard from "./ContactCard";


function ContactList(props){
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
        console.log(`removed ID:${id}`)
    }

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} clickHandler ={deleteContactHandler} key={contact.id}/>
           
        )
    })

    console.log(props.contacts);
    
    return (
        <div className="ui celled list">
            {renderContactList}
            
        </div>
    )
}

export default ContactList;