import { useAuth } from "../../contexts/AuthContext";
const Footer= () =>{
    const {  email } = useAuth();
        return(
            <div>
            Pies {email}
            </div>
        );
    };

export default Footer;