// app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/backend/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
      console.log('token',data.token)
      localStorage.setItem('adminToken', data.token);
      router.push('/admin/dashboard');
    } else {
      alert(data.message);
    }
  };

  return (
    <Container className=' w-72 h-svh m-4 rounded-4xl'>
      <form onSubmit={handleLogin}>
        <TextField
         InputProps={{ style: { color: 'white' } }}
         label="Username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         fullWidth
         margin="normal"
         className="border border-b-emerald-600 focus:border-blue-700" // Border color + focus effect
         InputLabelProps={{ style: { color: 'blue' } }} // Label color
        />
        <TextField
          InputProps={{ style: { color: 'white' } }} // Text inside input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: 'blue' } }} // Label color
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}