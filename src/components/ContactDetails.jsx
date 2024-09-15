import user from '../assets/user.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ContactDetails = (props) =>{
    const location = useLocation();
    const {email,name} = location.state.contact;
    console.log(location);
    
    /* const {name , email} = props.details */
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
        </div>
    )
};

export default ContactDetails;