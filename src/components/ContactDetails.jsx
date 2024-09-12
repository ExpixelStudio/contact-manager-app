import user from '../assets/user.png';
import { Link } from 'react-router-dom';


const ContactDetails = (props) =>{

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">EXPixel</div>
                    <div className="description">expstudio@gmail.com</div>
                </div>
            </div>
        </div>
    )
};

export default ContactDetails;