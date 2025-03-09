import { useEffect } from "react";
import {  NavLink, useLocation } from "react-router-dom";
import { paths } from "../utils/path";
import { LOCATION_ENUM } from "../utils/globalTypes";

const SideBar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li className={pathName === LOCATION_ENUM.STORE ? "active" : ""}>
              <NavLink to={paths.store}>Store</NavLink>
            </li>
            <li className={pathName === LOCATION_ENUM.SKU ? "active" : ""}>
              <NavLink to={paths.sku}>SKU</NavLink>
            </li>
            <li className={pathName === LOCATION_ENUM.PLANNING ? "active" : ""}>
              <NavLink to={paths.planning}>Planning</NavLink>
            </li>
            <li className={pathName === LOCATION_ENUM.CHARTS ? "active" : ""}>
              <NavLink to={paths.planning}>Charts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
