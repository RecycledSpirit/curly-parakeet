import React, { createContext, useContext, useState, useEffect } from "react";
import { mockUser } from "../data/mock";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - in real app, this would call an API
    if (email && password) {
      const loggedInUser = { ...mockUser, email };
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  };

  const signup = async (name, email, password) => {
    // Mock signup - in real app, this would call an API
    if (name && email && password) {
      const newUser = { ...mockUser, name, email };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return { success: true };
    }
    return { success: false, error: "Invalid data" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};