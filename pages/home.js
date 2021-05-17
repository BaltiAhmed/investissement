import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'


const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text>home pages</Text>
        </View>
    )
}

Home.navigationOptions = (navData) => {
    return {
        headerTitle: "Home",
        headerLeft: (
            <IconAntDesign name='menuunfold' size={30} color='#ff6f00' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />

        ),
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home