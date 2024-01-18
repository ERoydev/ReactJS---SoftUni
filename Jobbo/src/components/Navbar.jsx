import '../static/Navbar.css'
import Jobs from './Jobs';

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div>
        <h2 className="Logo">Jobbo</h2>
      </div>
      <ul className="navbar">
        <li><a href="#">Job Search</a></li>
        <li><a href="#">Post a Job</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Login</a></li>
      </ul>

    </div>
  );
}