function categoryDetails({ articles, category }) {
  console.log(articles);
  return (
    <>
      <h1>Showing news for category {category}</h1>
      {articles.map((article) => {
        <div key={article.id}>
          <h1>
            {article.id} {article.title}
          </h1>
          <p>{article.body}</p>
          <hr />
        </div>;
      })}
    </>
  );
}

export default categoryDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
