import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link><br />
                  <Link to="./About">About</Link><br />
                  <Link to="./Careers">Careers</Link>
            </div>
      )
}
export default Navbar;