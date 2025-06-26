import { Link } from 'react-router';
import '../App.css'
const Header = () => {
    return (
        <div className="header">
            <h1>IMDB</h1>
            <ul>
                <li>
                    {/* here by using href it is called to server when ever gets called. It is not client side routing*/}
                    {/* <a href="/">List</a> */}
                     {/* in react use Link  */}
                    <Link to="/">List</Link>

                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
                <li>
                    <Link to="/watchlist">Watch List</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;