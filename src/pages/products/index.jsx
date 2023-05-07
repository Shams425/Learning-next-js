import Link from "next/link";
import "@/styles/product.module.css";

function Products() {
  return (
    <>
      <h2 className="title">The Products Home Page</h2>
      <Link href="/products/1">product 1</Link>
      <Link href="/products/2">product 2</Link>
      <Link href="/products/3">product 3</Link>
    </>
  );
}

export default Products;
