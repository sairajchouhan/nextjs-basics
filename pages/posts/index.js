import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

const posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <Card key={post.id} className="my-3">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text className="mb-3">{post.body}</Card.Text>
              <Link href={`/posts/${post.id}`}>
                <Button variant="primary">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default posts;
