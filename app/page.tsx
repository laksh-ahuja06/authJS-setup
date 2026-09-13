import { auth } from "@/auth";
import Link from "next/link";

export default async function SessionPage() {

  return (
    <main>
      <h1>Main Page: </h1>

      {/*<h2>Welcome, {session.user?.name} </h2>*/}
      <br></br>

      Authenticate through github: <Link href="/api/auth/signin">Authentication</Link>

      <br></br>
      <br></br>

      Profile: <Link href = "/profile">Profile</Link>

    </main>
  );
}
