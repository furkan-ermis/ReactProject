import { FaUserDoctor } from "react-icons/fa6";
import logo from "../logoBlue.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <button className="btn-main">
        <FaUserDoctor size="20px" color="white" className="doctorIcon" />
        &nbsp; &nbsp; Hekim Giriş
      </button>
    </div>
  );
}

export default Header;
