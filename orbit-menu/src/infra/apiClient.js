import axios from 'axios';

class ApiClient {

  static async fetchDataWithToken(token) {
    const apiUrlOnboarding = "https://onboarding-dev.officevibe.com:6870/api/onboarding"
    const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJlZjQ5ZWUwZi0yOTI2LTRhNWEtYTk4NC0zNDZjOGVlYjg1YTgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiZ2l2ZW5fbmFtZSI6IkRlbm5pcyBCb2xpdmFyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YS9uZXR3b3JraWQiOiJkYmI2YmM2Ny0zMjdhLTQ4ZDUtYmU3OC1lOGUwMTA0MDNjYjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhL29yZ2FuaXNhdGlvbmlkIjoiZGJiNmJjNjctMzI3YS00OGQ1LWJlNzgtZThlMDEwNDAzY2IzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvYXV0aGVudGljYXRpb24vaXN0ZW1wb3JhcnkiOiJGYWxzZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEvdXNlcmlzY29tcGFueW1hbmFnZXIiOiJUcnVlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YS91c2VyaXNncm91cG1hbmFnZXIiOiJUcnVlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YS9vbmJvYXJkaW5nYWN0aXZpdHkiOiI1IiwiZW1haWwiOiJvZmZpY2V2aWJlQGJpZ2NvcmVwb3JhdGlvbjYzODE4MDI2NTMyNDMwNjM4MC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhL3VzZXJpc25ldHdvcmtjcmVhdG9yIjoiVHJ1ZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEvdXNlcmlzbmV0d29ya2FkbWluIjoiVHJ1ZSIsInVuaXF1ZV9uYW1lIjoib2ZmaWNldmliZWJpZ2NvcmVwb3JhdGlvbjYzODE4MDI2NTMyNDMwNjM4MGNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9uL2lzaW1wZXJzb25hdGlvbiI6InRydWUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbi9pbXBlcnNvbmF0b3JlbWFpbCI6ImVsaXNlLmp1aWZAZ3NvZnQuY29tIiwibmJmIjoxNjk3NzQ5MTA5LCJleHAiOjE2OTc3NTAwMDksImlhdCI6MTY5Nzc0OTEwOSwiaXNzIjoib2ZmaWNldmliZS5jb20iLCJhdWQiOiJNaWNyb01vbm9saXRoIn0.kONQ617m1nX0hCpmXeOXK4Zr4dkgNpZnQjsiIEnuGic";

    try {
      const response = await axios.get(apiUrlOnboarding, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Bearer token to the headers
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your API URL
    const apiUrlOnboarding = "https://onboarding-dev.officevibe.com:6870/api/onboarding/test"

    try {
      const response = await axios.get(apiUrlOnboarding);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiClient;

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace this with your API URL

// axios.get(apiUrl)
//   .then(response => {
//     // Handle the successful response
//     console.log('Response data:');
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
//   });
