import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: "72f897f502c4b1067161bac4e59275b1383a397b40af05fe31bdf96a798289fa",
  providers: [GitHub],
});
