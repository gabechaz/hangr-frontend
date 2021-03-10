import './css-files/App.css'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
function NaviBar ({currentUser, logout}) {

return (



    <div>
    {currentUser ? 
    <Container>
    <Navbar bg='warning'  >

        <Nav>
    <Link  to ='/profile' exact='true'>
         {currentUser.name}'s Profile 
         <Navbar.Brand href="#home">
      <img
        src={currentUser.img}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="User Avatar"
      />
    </Navbar.Brand>
    </Link>
    </Nav>

        <Nav.Link>
    <Link to ='/find-hang' exact='true' >
          Find-a-Hang 
    </Link>
    </Nav.Link>

    <Nav.Link>
    <Link to ='/hang-feed' exact='true' >
          Hangs Feed
    </Link>
    </Nav.Link>

    <Nav.Link>
    <Link to ='/my-hangs' exact='true'>
          My Hangs 
    </Link>
    </Nav.Link>

    <Nav.Link>
    <Link to ='/make-hang' exact='true'>
          Make a Hang
    </Link>
    </Nav.Link>

    <Nav.Link>
    <Link to ='/karma' exact='true'>
          Karma
    </Link>
    </Nav.Link>

    <Nav.Link>
    <Link  
        to='/logout' exact='true' onClick={logout}>Log Out
    </Link>
    </Nav.Link>
        </Navbar>
        </Container>
       : 
       <Container>
       <Navbar bg='warning' variant='dark' >
        <Nav.Link>
       <Link to='/login' exact='true'>
           Login 
       </Link>
       </Nav.Link>
       <Nav.Link>
       <Link to='/signup' exact='true'>
           Sign up
       </Link>
       </Nav.Link>
       </Navbar>
       </Container>}
       </div>
)
}

export default NaviBar