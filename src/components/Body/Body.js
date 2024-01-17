import { useAuth } from "../../contexts/AuthContext";
const Body = () =>{ 
    const {  email } = useAuth();
    return(
        <div>
        CUerpo {email}
        </div>
    );
};
export default Body;