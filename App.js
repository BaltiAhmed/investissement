import React, { useState,useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PagesNav from './navigation/AppNavigation'
import LoginNav from './navigation/authNavigation'
import { Authcontext } from './context/authContext'

export default function App() {
  const [token,setToken]=useState(null)
  const [userId,setUserId]=useState(null)

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes

  if(token){
    routes=(
      <PagesNav/>
    )
  }else{
    routes=(
      <LoginNav/>
    )
  }

  

  return (
    <Authcontext.Provider value={{ userId: userId, token: token, login: login, logout: logout }} >
      {routes}
    </Authcontext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
