import React from "react";
import { Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <>
      <header className="site-header">
        <div className="logo">
          <Link className="removelink" to="/">
            खबर खाबर
          </Link>
        </div>

        <nav className="navlist">
          <ul>
            <li>
              <Link className="sanolink" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li>
              <Link className="sanolink" to="/politics">
                Politics
              </Link>
            </li>
            <li>
              <Link className="sanolink" to="/automobiles">
                Automobiles
              </Link>
            </li>
            <li>
              <Link className="sanolink" to="/business">
                Business
              </Link>
            </li>
            <li>
              <Link className="sanolink" to="/sharemarket">
                ShareMarket
              </Link>
            </li>
            <li>
              <Link className="sanolink" to="/tech">
                Tech
              </Link>
            </li>
          </ul>
        </nav>
        <div class="search-box">
          <button class="btn-search">
            <i class="fas fa-search"></i>
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </header>
    </>
  );
};
