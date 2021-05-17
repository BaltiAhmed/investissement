import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../pages/login'
import Signup from '../pages/signup'


const LoginNav = createStackNavigator(
    {
        Login: Login,
        Signup: Signup
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#4a148c",
            },
            headerTintColor: "white",
        },
    }
);

export default createAppContainer(LoginNav);