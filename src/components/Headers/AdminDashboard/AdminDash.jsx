import './AdminDash.css'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
  } from "react-router-dom";

function TopHeader() {
    return ( 

        <div className="header"> 
        
            <ul>
       
                <li><Link to="/Admin">Admin</Link></li>
                <li><a href="/Vendor">Vendor</a></li>
               
            </ul>
        </div>
        
     );
}

export default TopHeader;