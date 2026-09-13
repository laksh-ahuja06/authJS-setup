import { auth } from "@/auth";

export default async function SessionPage() {
  const session = await auth();

  return (
    <main>
      <h1>Session</h1>

      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
