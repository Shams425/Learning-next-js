const { useRouter } = require("next/router");

function Products() {
  const router = useRouter();

  const { params = [] } = router.query;

  if (params.length === 1) {
    console.log(params);
    return <>Detalis about {params[0]}</>;
  } else if (params.length === 2) {
    return (
      <>
        Detalis about {params[0]} {params[1]}
      </>
    );
  } else {
    return <>Products Home Page</>;
  }
}

export default Products;
