function ProductsList({ post }) {
  const posts = post.map((post) => {
    return (
      <div key={post.id}>
        <h2>
          {post.id} {post.title}
        </h2>
      </div>
    );
  });
  return (
    <>
      <h1>Posts List</h1>
      {}
    </>
  );
}

export default ProductsList;

export async function getStaticProps() {
  const response = await fetch("https://jasonplaceholder.io.com/posts");
  const data = response.json();

  return {
    props: {
      post: data,
    },
  };
}
