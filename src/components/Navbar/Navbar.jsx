import { FiShoppingCart } from "react-icons/fi";
import "./navbar.scss";
function NavBar({
  restName
}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid p-0 m-0">
          <a className="navbar-brand" href="#">
           {restName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    My Orders
                  </a>
                </li>
              </ul>
              {/* <div className=""> */}

              <span>
                <FiShoppingCart className="icon_color " />
              </span>
              {/* </div> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
