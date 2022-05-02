import { useNavigate } from "react-router-dom";
import logo from "@src/assets/fxdigitallogo.png";
import HomeIcon from "@src/components/icons/HomeIcon";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="flex justify-between items-center border-b-2 border-gray-100 p-6">
        <button onClick={() => { navigate("/")}}>
          <HomeIcon />
        </button>

        <div>
          <a href="#">
            <img className="h-6 w-auto sm:h-8" src={logo} alt="logo"/>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
