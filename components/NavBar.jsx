import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-5">
      <Link href="/">
        <a className="navbar-brand" href="#">
          <Image src="/logo.png" width={40} height={40} />
        </a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="nav-item">
            <Link href="/">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/about">
              <a className="nav-link " aria-current="page" href="#">
                About
              </a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/posts">
              <a className="nav-link " aria-current="page" href="#">
                Posts
              </a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/pg2q84htnq24[8">
              <a className="nav-link " aria-current="page" href="#">
                404
              </a>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
