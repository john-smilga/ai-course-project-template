import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api').then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div className='flex flex-col items-center min-h-screen p-8'>
      <h1 className='text-3xl font-bold mb-4'>AI Course Project Template</h1>
      <h2 className='text-2xl font-semibold text-emerald-500'>{message}</h2>
    </div>
  );
}
