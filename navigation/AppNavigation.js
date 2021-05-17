import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../pages/home'
import AjoutProjet from '../pages/ajoutProjer'

const HomeNav = createStackNavigator(
    {
        Home: Home,
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

const AjoutNav = createStackNavigator(
    {
        Ajout: AjoutProjet,
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

const mainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNav,
            navigationOptions: {
                drawerLabel: "Home",
            },
            contentOptions: {
                labelStyle: {
                    marginTop: 100
                }

            },
        },
        Ajout: {
            screen: AjoutNav,
            navigationOptions: {
                drawerLabel: "Ajout projet",
            },
            contentOptions: {
                labelStyle: {
                    marginTop: 100
                }

            },
        },
    },
    {
        contentOptions: {
            activeTintColor: "#4a148c",
            labelStyle: {
                fontSize: 18,
                marginTop: 50
            },
        },
    }
);

export default createAppContainer(mainNavigator);





