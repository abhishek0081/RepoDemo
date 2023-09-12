export default async function login(req, res) {
    if (req.method === 'POST') {
      // Extract email and password from the request body
      const { email, password } = req.body;
  
      // Perform your authentication logic here
      // Example: Check if email and password are valid
      if (email === 'user@example.com' && password === 'password') {
        // Successful login
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Invalid credentials
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      // Reject requests that are not POST requests
      res.status(405).end();
    }
  }