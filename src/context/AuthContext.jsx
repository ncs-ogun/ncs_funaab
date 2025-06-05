/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

// Mock user database
const mockUsers = [
  {
    email: 'adeolalalasisi6@gmail.com',
    password: 'OgunNACOS@155',
    name: 'deola Lasisi'
  }
];

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (email, password, name) => {
    // Check if user already exists
    if (mockUsers.some(u => u.email === email)) {
      toast.error('An account already exists with this email.');
      throw new Error('Email already in use');
    }

    // Create new user
    const newUser = { email, name };
    mockUsers.push({ email, password, name });
    
    // Store in localStorage and update state
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    toast.success('Account created successfully!');
    return { user: newUser };
  };

  const login = async (email, password) => {
    // Find user in mock database
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      toast.error('Invalid email or password');
      throw new Error('Invalid credentials');
    }

    const userData = { email: user.email, name: user.name };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    toast.success('Logged in successfully!');
    return { user: userData };
  };

  const logout = async () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully!');
  };

  const resetPassword = async (email) => {
    // Check if user exists
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      toast.error('No account found with this email.');
      throw new Error('User not found');
    }

    toast.success('Password reset instructions have been sent to your email (mock)');
  };

  const value = {
    user,
    signup,
    login,
    logout,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 