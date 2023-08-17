import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';

function NavScrollExample(props) {
  const {query, setQuery, handleSearch} = props;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Pension Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">E-Commerce</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>

          </Nav>
        <Search 
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;