export default function Product({ product }) {
  return (
    <>
      <h2>
        {product.id} {product.name}
      </h2>
      <h2>{product.description}</h2>
      <h2>{product.price}</h2>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
      {
        params: { productId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("generating within 10 seconds...");
  const { params } = context;
  const productId = params.productId;
  const response = await fetch(`http://localhost:4000/products/${productId}`);

  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
