import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();

  const handleRoute = () => {
    router.push("./");
  };

  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <h2>
        {product.id}- {product.name}
      </h2>
      <h2>{product.description}</h2>
      <h2>{product.price}</h2>
      <button onClick={handleRoute()}>Go Home</button>
      <hr />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
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
