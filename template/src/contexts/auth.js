import React, { createContext, useState, useEffect, useContext } from 'react';
import api from 'services/api';

const AuthContext = createContext({});

export function login(values) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '130212dnkl21j3nd21kldn231kj3',
        user: {
          name: 'Inovando',
          email: values.email,
        },
      });
    }, 2000);
  });
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem('@user');
      const storagedToken = localStorage.getItem('@token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        api.interceptors.response.use(
          function(response) {
            return response;
          },
          function(error) {
            if (error.response.status === 401) {
              signOut();
            }
            return Promise.reject(error);
          },
        );
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn(values) {
    const response = await login(values);

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    localStorage.setItem('@user', JSON.stringify(response.user));
    localStorage.setItem('@token', response.token);
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
