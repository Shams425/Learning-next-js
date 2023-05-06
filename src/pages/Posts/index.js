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
  const response = await fetch("http://localhost:4000/posts");
  const data = await response.json();

  console.log("calling with the validate time");

  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}
