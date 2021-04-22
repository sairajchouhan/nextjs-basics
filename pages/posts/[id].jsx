import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const eachPost = ({ post, comments }) => {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title as="h2">{post.title}</Card.Title>
        <Card.Text>
          {post.body}
          Faucibus a pellentesque sit amet porttitor. Laoreet id donec ultrices
          tincidunt arcu non. Sed pulvinar proin gravida hendrerit lectus a.
          Tellus at urna condimentum mattis pellentesque. Neque sodales ut etiam
          sit amet nisl purus. Interdum consectetur libero id faucibus nisl
          tincidunt. Nisl pretium fusce id velit ut tortor pretium. Lobortis
          mattis aliquam faucibus purus in massa tempor. Et tortor consequat id
          porta. Dolor sit amet consectetur adipiscing elit duis tristique
          sollicitudin. Interdum velit euismod in pellentesque massa placerat
          duis ultricies. Quam quisque id diam vel quam elementum pulvinar
          etiam. Sagittis purus sit amet volutpat consequat mauris. At erat
          pellentesque adipiscing commodo elit at. Tortor aliquam nulla facilisi
          cras fermentum odio eu feugiat. Condimentum id venenatis a condimentum
          vitae. Pellentesque adipiscing commodo elit at imperdiet. Ut tortor
          pretium viverra suspendisse potenti nullam ac tortor.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem as="h5">Comments</ListGroupItem>
        {comments.map((cmt) => {
          return (
            <ListGroupItem key={cmt.id}>
              <h6>{cmt.name}</h6>
              <p>{cmt.body}</p>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Card>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
  );
  const post = await res.json();

  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}/comments`
  );
  const comments = await resComments.json();

  return {
    props: { post, comments },
  };
};

export default eachPost;
