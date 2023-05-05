const { useRouter } = require("next/router");

function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <div key={post.id}>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.description}</p>
    </div>
  );
}

export default PostDetails;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: `1` },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/posts/${params.postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
