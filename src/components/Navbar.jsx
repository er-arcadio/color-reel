import "./Navbar.css";

function Navbar() {
  return (
    <nav id="sticky-nav">
      <div id="nav-left">
        <img
          id="nav-flavicon"
          src="src/assets/colorwheel.png"
          alt="ColorReel Homepage logo"
        />
      </div>
      <div id="nav-right">
        <button id="nav-likes">
          Favorites: <span>0</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
