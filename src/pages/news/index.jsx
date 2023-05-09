import Link from "next/link";

function NewsList({ news }) {
  {
    news.map((item) => {
      console.log(item.id, item.title, item.body);
    });
  }
  return (
    <>
      <h1>News category</h1>
      <hr />

      <Link href={`/news/sports`}>1-sports</Link>
      <Link href={`/news/food`}>2-food</Link>
      <Link href={`/news/economics`}>3-economics</Link>
    </>
  );
}

export default NewsList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
