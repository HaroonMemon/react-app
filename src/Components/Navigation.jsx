import React, { useState } from "react";
import style from "../Css/nav.css"
// import style from "./style.css"
import { Link } from "react-router-dom";

// function Navigation() {
//     const [showMenu, setShowMenu] = useState(false);

//     const handleToggleMenu = () => {
//       setShowMenu(!showMenu);
//     };

//     return (
//       <nav className="navbar">
//         <div className="navbar-logo">
//           Welcome
//         </div>
//         <div className={`navbar-menu ${showMenu ? 'show-menu' : ''}`}>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Resume
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <button className="navbar-toggle" onClick={handleToggleMenu}>
//           <span className="navbar-toggle-icon"></span>
//         </button>
//       </nav>
//     );
//   }
//   export default Navbar;

function Navigation() {
  return (
    <div className="header">
      {/* <!-- NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  --> */}
      <div className="logo">
        <h1>Welcome</h1>
      </div>
      <nav className="nav-bar" id="nav">
        <ul>
          <li><Link to="/" style={{textDecoration:"none",color:"white"}} >Home</Link></li>
          <li><Link to="/about" style={{textDecoration:"none",color:"white"}} >About</Link></li>
          <li><Link to="/portfolio" style={{textDecoration:"none",color:"white"}} >Portfolio</Link></li>
          <li><Link to="/resume" style={{textDecoration:"none",color:"white"}} >Resume</Link></li>
          <li><Link to="/contact" style={{textDecoration:"none",color:"white"}} >Contact</Link></li>
        </ul>
      </nav>
      {/* <!-- NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  --> */}
      
    </div>
  );
}
export default Navigation;