import { auth } from "@/auth";

export default async function SessionPage() {
  const session = await auth();

  return (
    <main>
      <h1>Main Page: </h1>

      {/*<h2>Welcome, {session.user?.name} </h2>*/}

      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
