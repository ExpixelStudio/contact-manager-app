import user from '../assets/user.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/* import { v4 as uuidv4 } from 'uuid'; */

function ContactCard(props){

    const {id, name, email} = props.contact; //contactlist.jsx
    console.log(name)

    return (
        <div className="item">
                <img src={user} alt="user" className="ui avatar image" />
                <div className="content">
                    <Link to = {`/contact/${id}`} state={{ contact: props.contact }}> {/*state can pass prop data to linked component https://ui.dev/react-router-pass-props-to-link */}
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                    
                </div>
                <i 
                    className="trash alternate outline icon"
                        style={{color:'red', marginTop:'7px', marginLeft:'10px'}} 
                    onClick={() => props.clickHandler(id)} >
                </i>

                <Link to = {'/edit'} state={{ contact: props.contact }}> {/*state can pass prop data to linked component https://ui.dev/react-router-pass-props-to-link */}
                    <i 
                        className="edit alternate outline icon"
                            style={{color:'blue', marginTop:'7px'}} 
                    >
                    </i>
                </Link>
            </div>
    );
};

export default ContactCard;