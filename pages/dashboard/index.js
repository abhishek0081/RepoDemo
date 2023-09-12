// pages/protected.js
import { UseRequireAuth } from "@/utils/auth";
import Link from "next/link";
import { Fragment } from "react";
// import { useSession } from 'next-auth/react';
import { getSession } from 'next-auth/react';

function SecurePage({ user }) {
    return (
      <div>
        {user ? (
          <p>Welcome, {user.name}!</p>
        ) : (
          <p>Please log in to access this page.</p>
        )}
      </div>
    );
  }

  export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session)
    if (!session || !session.user) {
      // Redirect unauthenticated users or handle as needed
      return {
        redirect: {
          destination: '/Login', // Redirect to the login page
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        user: session.user,
      },
    };
  }
  
  export default SecurePage;
