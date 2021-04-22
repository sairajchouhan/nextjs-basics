import { Jumbotron } from 'react-bootstrap';

const notFound = () => {
  return (
    <Jumbotron className="mt-5 pt-5">
      <h1>Opps! Page not found</h1>
      <p>This is a custom 404 page of next.js</p>
    </Jumbotron>
  );
};

export default notFound;
