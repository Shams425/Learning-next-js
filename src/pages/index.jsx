import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Hello world</h2>
      <Link href="/products">Product Page</Link>
    </div>
  );
}
