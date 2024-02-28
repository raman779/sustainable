

import { useState } from 'react';

const BASE_URL = 'http://localhost:3000/api/v1'

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (obj) => {
    console.log(obj,"fdhjfdfj",BASE_URL)
    const url= obj?.url
    const method = obj?.method || 'GET' 
    const data = obj?.data || null
    const isHeader= obj?.isHeader || false

    setLoading(true);
    setError(null);

    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(isHeader && {
          'Authorization': localStorage.getItem('authToken'), 
        }),
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    try {
      const response = await fetch(`${BASE_URL}${url}`, requestOptions);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }

      return responseData;
    } catch (error) {
      console.log("fdhjfdfj",error)
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchData };
};

export default useFetch;
