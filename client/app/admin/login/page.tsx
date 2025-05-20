// app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔐 Attempting login...');

    try {
      console.log('📦 Sending credentials:', { email, password });

      const res = await fetch(`${apiUrl}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log('📡 Response received. Status:', res.status);

      const data = await res.json();
      console.log('📨 Response JSON:', data);

      if (data.token) {
        console.log('✅ Login successful. Token:', data.token);
        localStorage.setItem('adminToken', data.token);
        router.push('/admin/dashboard');
      } else {
        console.warn('⚠️ Login failed. Server message:', data.message);
        alert(data.message);
      }
    } catch (err) {
      console.error('🔥 Error during login request:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-xl"
      >
        <h2 className="text-2xl text-center text-white font-bold mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <TextField
            InputProps={{ style: { color: 'white' } }}
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            className="text-white"
            InputLabelProps={{ style: { color: '#ccc' }}}
          />
          <TextField
            InputProps={{ style: { color: 'white' } }}
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            className="text-white"
            InputLabelProps={{ style: { color: '#ccc' } }}
          />
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-emerald-600 hover:!bg-emerald-700 text-white"
            >
              Login
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
