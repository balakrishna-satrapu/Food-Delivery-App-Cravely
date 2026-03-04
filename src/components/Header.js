import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex shadow-md justify-between items-center">
      <div>
        <img
          className="w-20 "
          alt="logo"
          src={ LOGO_URL }
        />
      </div>
      <div>
        <ul className="flex gap-4 mr-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;