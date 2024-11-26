import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#000000"
        >
          <path d="M480-96 96-672q81-69 179.5-106.5T480-816q106 0 204.5 37.5T864-672L480-96Zm0-130 286-429q-64-42-136.31-65.5-72.3-23.5-149.5-23.5-77.19 0-149.69 23.5T194-655l286 429Zm-96-326q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm96 168q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm0 158Z" />
        </svg>
        <Link to="/" className="tracking-widest">
          Neopolitan Co.
        </Link>
      </div>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
