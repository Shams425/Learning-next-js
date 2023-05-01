import { useRouter } from "next/router";

function ProductList() {
  const router = useRouter();
  const params = router.query.productId;

  return (
    <>
      <h2>Details about product {params}</h2>
    </>
  );
}

export default ProductList;
