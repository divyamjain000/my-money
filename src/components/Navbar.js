import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ExpenseTracker from "./expense/ExpenseTracker";

export default function NavBar() {
  return (
    <div>
      <BrowserRouter>
        {/* <!-- Navbar --> */}
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <!-- Navbar brand --> */}
              <Link className="navbar-brand mt-2 mt-lg-0" to="#">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="15"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ExpenseTracker">
                    Expenses
                  </Link>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <Link className="text-reset me-3" to="#">
                <i className="fas fa-shopping-cart"></i>
              </Link>

              {/* <!-- Avatar --> */}
              <div className="dropdown">
                <Link
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of div Man"
                    loading="lazy"
                  />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
        {/* <!-- Navbar --> */}
        <Routes>
          <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
