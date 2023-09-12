// components/LoginForm.js
// import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      username: e.target.email.value,
      password: e.target.password.value,
    };
    const result = await signIn(credentials, { redirect: false, ...credentials });
    console.log(result)
    if (result.error) {
      console.error('Login failed:', result.error);
    } else {
      // Redirect to the dashboard or any other page on successful login
    //   router.push('/dashboard');
    console.log("done")
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
