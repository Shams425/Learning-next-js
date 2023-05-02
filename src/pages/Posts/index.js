import Link from "next/link";

function ProductsList({ posts }) {
  return (
    <>
      <h1>Posts List</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ProductsList;

export async function getStaticProps() {
  const response = await fetch("https://jasonplaceholder.io.com/posts");
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
