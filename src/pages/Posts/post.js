function ProductsList() {
  return <>{}</>;
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
