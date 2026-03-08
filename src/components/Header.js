import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  

  return (
    <div className="flex shadow-md justify-between items-center">
      <div>
        <img className="w-20 " alt="logo" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex gap-4 mr-8 justify-center items-center  ">
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
          <li className="relative">
            <Link to="/cart">
              <svg
              className=" cursor-pointer w-6 h-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              {items.length > 0 && <p className="text-[12px] border-2 border-white bg-red-500 absolute -right-3 -top-2 h-5 w-5 rounded-2xl text-white  flex justify-center items-center">
                {items.length}</p>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
