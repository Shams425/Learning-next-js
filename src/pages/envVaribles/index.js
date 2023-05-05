export default function EnvVariable() {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASSWORD;
  const key = process.env.NEXT_PUBLIC_KEY;
  return (
    <>
      <h1>your environment variables</h1>
      <h2>User is {user}</h2>
      <h2>password is {pass}</h2>
      <h2>analytic is {key}</h2>
    </>
  );
}
