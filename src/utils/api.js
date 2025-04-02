// src/utils/api.js
const mockUsers = [
    {
      id: 1,
      email: 'user@example.com',
      password: 'password123',
      name: 'John Doe',
      role: 'user',
      permissions: ['job:view', 'profile:edit'],
      avatar: 'https://i.pravatar.cc/150?img=1',
      token: 'mock-user-token-123'
    },
    {
      id: 2,
      email: 'admin@example.com',
      password: 'admin123',
      name: 'Admin User',
      role: 'admin',
      permissions: ['job:create', 'job:edit', 'user:manage'],
      avatar: 'https://i.pravatar.cc/150?img=5',
      token: 'mock-admin-token-456'
    }
  ];
  
  // Simulate network delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const api = {
    // Mock login endpoint
    async post(url, data) {
      await delay(500); // Simulate network latency
      
      if (url === '/auth/login') {
        const user = mockUsers.find(
          u => u.email === data.email && u.password === data.password
        );
        
        if (!user) {
          throw { response: { data: { message: 'Invalid credentials' } } };
        }
        
        return { 
          data: { 
            user: { ...user, password: undefined }, 
            token: user.token 
          } 
        };
      }
  
      // Mock registration endpoint
      if (url === '/auth/register') {
        const emailExists = mockUsers.some(u => u.email === data.email);
        if (emailExists) {
          throw { response: { data: { message: 'Email already exists' } } };
        }
  
        const newUser = {
          id: mockUsers.length + 1,
          ...data,
          role: 'user',
          permissions: ['job:view'],
          avatar: `https://i.pravatar.cc/150?img=${mockUsers.length + 10}`,
          token: `mock-new-user-token-${Math.floor(Math.random() * 1000)}`
        };
  
        mockUsers.push(newUser);
        return { 
          data: { 
            user: { ...newUser, password: undefined }, 
            token: newUser.token 
          } 
        };
      }
  
      throw new Error(`Mock API endpoint not found: ${url}`);
    },
  
    // Mock protected endpoint (token verification)
    async get(url, config) {
      await delay(300);
      
      if (url === '/auth/verify') {
        const token = config?.headers?.Authorization?.split(' ')[1];
        const user = mockUsers.find(u => u.token === token);
        
        if (!user) {
          throw { response: { status: 401, data: { message: 'Invalid token' } } };
        }
        
        return { data: { user: { ...user, password: undefined } } };
      }
  
      // Mock user profile endpoint
      if (url === '/user/profile') {
        const token = config?.headers?.Authorization?.split(' ')[1];
        const user = mockUsers.find(u => u.token === token);
        
        if (!user) {
          throw { response: { status: 401 } };
        }
        
        return { data: { ...user, password: undefined } };
      }
  
      throw new Error(`Mock API endpoint not found: ${url}`);
    },
  
    // Mock profile update
    async put(url, data, config) {
      await delay(400);
      
      if (url === '/user/profile') {
        const token = config?.headers?.Authorization?.split(' ')[1];
        const userIndex = mockUsers.findIndex(u => u.token === token);
        
        if (userIndex === -1) {
          throw { response: { status: 401 } };
        }
        
        mockUsers[userIndex] = { 
          ...mockUsers[userIndex], 
          ...data,
          password: mockUsers[userIndex].password // Preserve password
        };
        
        return { data: { ...mockUsers[userIndex], password: undefined } };
      }
  
      throw new Error(`Mock API endpoint not found: ${url}`);
    }
  };
  
  export default api;