
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'
import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({theme, toggleTheme}) => {
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/" style={{color: theme.fontColor}}>
          Filip-Jerga
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <div></div> */}
          <ThemeToggle onChange={toggleTheme} />
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