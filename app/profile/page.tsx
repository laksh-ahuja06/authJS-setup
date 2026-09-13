import { auth } from "@/auth";
import { redirect } from "next/navigation";
import UserInfo from "@/components/UserInfo";
import { getUsers } from "@/lib/users";
import { updateProfile } from "@/actions/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "View your profile",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const users = await getUsers();

  return (
     <main className="max-w-2xl mx-auto p-6">
       <h1 className="text-2xl font-bold mb-6">
         Profile
       </h1>

       <div className="border rounded-lg p-5 mb-5">
         <UserInfo
           name={session.user?.name}
           email={session.user?.email}
         />
       </div>

       <div className="border rounded-lg p-5 mb-5">
         <h2 className="text-lg font-semibold mb-4">
           List emails of all users
         </h2>

         {users.map((user) => (
           <div
             key={user.id}
             className="border-b py-2"
           >
             {user.email}
           </div>
         ))}
       </div>

       <div className="border rounded-lg p-5">
         <h2 className="text-lg font-semibold mb-4">
           Update Profile
         </h2>

         <form action={updateProfile} className="flex gap-2">
           <input
             type="text"
             name="name"
             placeholder="New name"
             className="border rounded-md px-3 py-2"
           />

           <button
             type="submit"
             className="bg-black text-white px-4 py-2 rounded-md"
           >
             Update Name
           </button>
         </form>
       </div>
     </main>
  );
}
