import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



function NavPage() {

    return (
        <Nav fill variant="tabs" defaultActiveKey="/home" style={{backgroundColor:"skyblue",padding:"20px"}}>
            <Nav.Item style={{marginTop:"8px"}}>
                <Link to={"/login"} style={{textDecoration:"none"}}>Login</Link>
            </Nav.Item>
            <Nav.Item style={{marginTop:"8px"}}>
                <Link to={"/registration"} style={{textDecoration:"none"}}>RegistionPage</Link>
            </Nav.Item>
            <Nav.Item style={{marginTop:"8px"}}>
                <Link to={"/home"} style={{textDecoration:"none"}}>Home</Link>
            </Nav.Item>
            <Nav.Item style={{marginTop:"8px"}}>
                <Link to={"/about"} style={{textDecoration:"none"}}>About</Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Item style={{marginTop:"8px"}}>
                <Link to={"/cart"} style={{textDecoration:"none"}}>Cart</Link>
            </Nav.Item>
                
            </Nav.Item>
        </Nav>

    )
}
export default NavPage