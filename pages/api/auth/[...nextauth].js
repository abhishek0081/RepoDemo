import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
const encryptionSecret = crypto.randomBytes(32).toString('hex');

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const apiUrl = "http://localhost:3001/users"; // Adjust the URL accordingly

        try {
          // Make a GET request to fetch data from the server
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const items = await response.json();

          const { email, password } = credentials;
          const user = items.find(
            (u) => u.email === email && u.password === password
          );

          if (user) {
            // Return the user data if authentication is successful
            return Promise.resolve(user);
          } else {
            // Return null if authentication fails
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error("Fetch error:", error);
          // Throw an error if there's an issue with the fetch request
          throw new Error("Error fetching data");
        }
      },
    }),
  ],
  session: {
    jwt: true,
    secret: secret,
    encryptionSecret: encryptionSecret,
  },
  secret: process.env.JWT_SECRET,
});
