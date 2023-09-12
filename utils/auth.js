// utils/auth.js
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function UseRequireAuth() {
  const { data: session, status } = useSession();
  const route = useRouter();
//   while (status === "loading") {
//     console.log("loading")
//   }
  if (status === "unauthenticated") {
    // Redirect to the login page if the user is not authenticated
    // You can replace '/login' with the actual path to your login page
    if (typeof window === "undefined") return null;
    route.push("/Login")
  }

  return session;
}
