const API_URL = 'http://127.0.0.1:8000/';
// Reusable function to make API requests
const apiRequest = async (url, method, data = null, token = null) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    // Combine API_URL and url to form the full URL
  const fullUrl = `${API_URL}${url}`;

//   Make the API request  
  const response = await fetch(fullUrl,  {
    method: method, // HTTP method (e.g., POST, GET)
    headers: headers, // Request headers
    body: data ? JSON.stringify(data) : null, // Request body (for POST/PUT)
  })

  // Handle errors
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  // Return the parsed JSON response
  return response.json();
};
// Sign-up function
export const signUp = async (data) => {
    return apiRequest('http://127.0.0.1:8000/api/auth/register/', 'POST', data);
  };
// Login function
export const login = async (data) => {
    return apiRequest('/login/', 'POST', data);
  };
  // Fetch dashboard data (protected route)
export const fetchDashboard = async (token) => {
    return apiRequest('/user/', 'GET', null, token);
  };