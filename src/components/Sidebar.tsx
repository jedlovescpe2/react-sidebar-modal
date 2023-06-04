import { useGlobalContext } from "../context/GlobalContext";
import { links, social } from "../data";
import { FaTimes } from "react-icons/fa";


const Sidebar = () => {
  
  const { isSidebarOpen,closeSidebar } = useGlobalContext();

  return (
      <aside className={ isSidebarOpen? "sidebar show-sidebar" : "sidebar"}>
        
        <div className="sidebar-header">
          <div className="logo-container">
            <img src="https://www.jedllenado.com/static/portfolio2/personal-hotspot/images/favicon.ico" alt="logo" className="logo" />
            <span className="fname">jed</span>
            <span className="lname">Llenado</span>
          </div>
          
          <button className="close-btn" type="button" onClick={closeSidebar}><FaTimes/></button>
          
        </div>
        
        <ul className="links">
          {links.map(({ id, url, text, icon }) => {
            return (
              <li key={id}>
                <a href={url}>
                  <span>{icon}</span>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="social-links">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
  );
};
export default Sidebar;
