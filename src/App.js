import Header from './header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import "./App.css";
import Post from './post/Post';
import Blog from './blog/Blog';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row className='mb-5'>
          <Col md={12}>
            <div className='flyer'>
              <h2 className='title'>Blog de la materia de aplicaciones distribuidas</h2>
              <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque enim quis scelerisque fermentum. Nullam iaculis aliquet sollicitudin. Phasellus leo ipsum, cursus in neque convallis, faucibus facilisis urna.
              </p>
              <a href='#'>Mas Post</a>
            </div>
          </Col>
          <h5>Post Recientes</h5>
          <Col md={4}>
            <Post></Post>
          </Col>
          <Col md={4}>
            <Post></Post>
          </Col>
          <Col md={4}>
            <Post></Post>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Blog></Blog>
          </Col>
          <Col md={4}>
            <div className='about mb-3'>
              <h5>Sobre nosotros</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque enim quis scelerisque fermentum. Nullam iaculis aliquet sollicitudin. Phasellus leo ipsum, cursus in neque convallis, faucibus facilisis urna.
              </p>
            </div>
            <div className='files'>
              <h5>Archivos</h5>
              <ul>
                <li>
                  <a href='#'>Semana 1</a>
                </li>
                <li>
                  <a href='#'>Semana 2</a>
                </li>
                <li>
                  <a href='#'>Semana 3</a>
                </li>
                <li>
                  <a href='#'>Semana 4</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
