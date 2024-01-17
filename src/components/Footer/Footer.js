// Context
import { useAuth } from "../../context/AuthContext";

const Footer = () => {

  const { email } = useAuth();

  return (
    <div className="w-50 p-5 bg-warning rounded-4 my-4">
      Footer: {email}
    </div>
  );
}

export default Footer;