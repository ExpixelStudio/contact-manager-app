import user from '../assets/user.png';

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
                    style={{color:'red', marginTop:'7px'}} >
                </i>
                
            </div>
    );
};

export default ContactCard;