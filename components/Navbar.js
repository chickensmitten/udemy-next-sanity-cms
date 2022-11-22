
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'

const BlogNavbar = () => {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          Filip-Jerga
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={() =>
              <Link href='/' className="fj-navbar-item fj-navbar-link">
                Home
              </Link>
            }
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BlogNavbar;