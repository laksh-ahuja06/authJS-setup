import { auth } from "@/auth";

export default async function SessionPage() {
  const session = await auth();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Session
      </h1>

      <div className="border rounded-lg p-5 bg-gray-50">
        <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </main>
  );
}
