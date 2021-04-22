import { Container } from 'react-bootstrap';
import Nav from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
