const Header = (props) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src={ props.logo }
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;