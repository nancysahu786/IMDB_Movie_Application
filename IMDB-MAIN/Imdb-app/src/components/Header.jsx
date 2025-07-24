import { Link, Navigate } from "react-router";
// import { useAuth } from "../AuthContext";
import "../App.css";
const Header = () => {
  //   const { currentUser } = useAuth();
  //   console.log("current user", currentUser);

  // if(!currentUser){
  //     return <Navigate to='/login' replace/>
  // }

  return (
    <div className="header">
      <h1>IMDB</h1>
      <ul>
        <li>
          {/* here by using href it is called to server when ever gets called. It is not client side routing*/}
          {/* <a href="/">List</a> */}
          {/* in react use Link  */}
          <Link to="/movieList">List</Link>
        </li>
        <li>
          <Link to="/watchlist">Watch List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
