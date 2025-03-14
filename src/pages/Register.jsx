import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {

    alert('Account created successfully');
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">"Ro'yxatdan o'tish"</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <button onClick={handleRegister} className="w-full bg-blue-500 text-white py-2 rounded-lg">
      "Ro'yxatdan o'tish"
      </button>
    </div>
  );
}

export default Register;
