import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialData: FormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUp = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
        toast.error('All fields are required.');
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try{    
        console.log('Submitting form data:', formData);
        console.log('Base URL:', import.meta.env.VITE_BASE_URL);
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/signUp`, formData);
        if (res.status === 200) {
            console.log('Signup successful:', res.data);
            setSuccess(true);
            setFormData(initialData);
        } else {
            toast.error('Signup failed. Please try again.');
            setError('Signup failed. Please try again.');
        }
    }
    catch (err) {
        console.error('Signup error:', err);
        toast.error('An error occurred during signup. Please try again later.');
        setError('An error occurred during signup. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">Signup successful!</p>}

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded"
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Create Account
      </button>
    </form>
  );
};
