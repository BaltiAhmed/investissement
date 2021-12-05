import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../pages/financière/home'
import ListeEquipement from '../pages/listeEquipement'
import ListeProduction from '../pages/liste-production'
import ListeMarketing from '../pages/marketing/liste-marketing'


const HomeNav = createStackNavigator(
    {
        Home: Home,
        ListeEquipement: ListeEquipement,
        ListeProduction: ListeProduction,
        ListeMarketing: ListeMarketing,
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






