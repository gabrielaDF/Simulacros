import losTutoresLogo from "./assets/losTutoresLogo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <NavLink to="/" className="flex items-center">
        <div className="flex items-center flex-1">
          <img
            src={losTutoresLogo}
            alt="Los Tutores"
            className="w-20 h-20 object-contain "
          />
        </div>
      </NavLink>
    </div>
  );
}
export default Navbar;
