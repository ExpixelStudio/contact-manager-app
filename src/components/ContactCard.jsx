import user from '../assets/user.png';
/* import { v4 as uuidv4 } from 'uuid'; */

function ContactCard(props){
    const {id, name, email} = props.contact; //contactlist.jsx
    console.log(name)

    return (
        <div className="item">
                <img src={user} alt="user" className="ui avatar image" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i 
                    className="trash alternate outline icon"
                        style={{color:'red', marginTop:'7px'}} 
                    onClick={() => props.clickHandler(id)} >
                </i>
                
            </div>
    );
};

export default ContactCard;