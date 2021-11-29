import React from 'react'
import { Navbar, Container, Dropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false)

  return (
    <header className="mb-4">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Blog Forum</Navbar.Brand>

          <Nav>
            {isAuth ? (
              <Dropdown>
                <Dropdown.Toggle variant="dark">
                  Username
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider /> */}
                  <Dropdown.Item>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link>
                <Link to="/login">Log in</Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
