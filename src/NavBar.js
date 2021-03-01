import { Link } from "react-router-dom";
function NavBar ({currentUser, logout}) {

return (



    <div>
    {currentUser ? 
    <nav>
    <Link  to ='/profile' exact='true'>
         {currentUser.name}'s Profile 
    </Link>

    <Link to ='/find-hang' exact='true' >
          Find-a-Hang 
    </Link>

    <Link to ='/my-hangs' exact='true'>
          My Hangs 
    </Link>

    <Link to ='/make-hang' exact='true'>
          Make a Hang
    </Link>

    <Link to ='/karma' exact='true'>
          Karma
    </Link>

    <Link  
        to='/logout' exact='true' onClick={logout}>Log Out
    </Link>
        </nav>
       : 
       <nav>
       <Link to='/login' exact='true'>
           Login 
       </Link>
       <Link to='/signup' exact='true'>
           Sign up
       </Link>
       
       </nav>}
       </div>
)
}

export default NavBar