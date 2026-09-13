import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main>
      <h1>Profile</h1>

      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>

      <p>Welcome, {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
    </main>
  );
}
