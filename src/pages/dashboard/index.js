import { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function getDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setLoading(false);
      setDashboard(data);
    }
    getDashboardData();
  }, []);

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  {
    return (
      <div>
        <h2>posts : {dashboard.posts}</h2>
        <h2>likes : {dashboard.likes}</h2>
        <h2>followers : {dashboard.followers}</h2>
        <h2>following : {dashboard.following}</h2>
      </div>
    );
  }
}

export default Dashboard;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();

  return {
    props: {
      dashboard: data,
    },
  };
}
