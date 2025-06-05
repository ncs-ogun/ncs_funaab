import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* BANNER */}
      <div className="py-2 md:text-xs text-[9px] bg-primary text-white">
        <div className="container flex items-center justify-between font-medium px-0">
          <div className="flex items-center cursor-pointer sm:gap-2">
            <img src="/icons/phone.svg" alt="Phone" width="18" height="18" />
            <p>+2349020250260</p>
          </div>
          <p className="flex items-center md:gap-4 gap-1">
            <span>Get Agricultural Loans Up to ₦5,000,000</span> <span>|</span>
            <span>Apply Now</span>
          </p>
          <div className="nav-list2">
            <div>
              <span id="cart-count">Eng</span>
              <img src="/icons/chevron-down.svg" alt="Language" width="20" height="20" />
            </div>
          </div>
        </div>
      </div>

      <nav className="px-2 md:px-0">
        <div className="container" id="nav-container">
          <div>
            <Link to="/" className="flex items-center gap-2" id="logo">
              <img src="/images/logo.png" alt="AgroPlus Logo" width="34" height="34" />
              <span className="font-bold text-2xl">AgroPlus</span>
            </Link>
          </div>
          <ul className="nav-list text-sm">
            <li><Link to="/categories">Products</Link></li>
            <li><Link to="/loans">Loans</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <div className="nav-list2 text-sm">
            <div className="nav-list3 text-sm">
              <img src="/icons/user.svg" alt="User Account" width="18" height="18" />
              <Link to="/login"><span id="cart-count">Login</span></Link>
            </div>
            <Link to="/cart">
              <img src="/icons/cart.svg" alt="Shopping Cart" width="18" height="18" />
              <span id="cart-count">Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 