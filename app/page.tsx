import { auth } from "@/auth";
import Link from "next/link";

export default async function SessionPage() {

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-8xl font-bold mb-6">
        Main Page
      </h1>

      <div className="border rounded-lg p-5">
        <p className="mb-4">
          Authenticate through GitHub: <Link
            href="/api/auth/signin"
            className="text-blue-600 hover:underline"
          >
            Authentication
          </Link>
        </p>



        <p className="mt-6">
          Profile:
          <Link
            href="/profile"
            className="text-blue-600 hover:underline"
          >
            Profile
          </Link>
        </p>

      </div>
    </main>
  );
}
