import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign'


const AjoutProjet = (props) => {
  return (
    <View style={styles.container}>
      <Text>Ajout Projet</Text>
    </View>
  );
};

AjoutProjet.navigationOptions = (navData) => {
  return {
    headerTitle: "Ajout projet",
    headerLeft: (
      <IconAntDesign
        name="menuunfold"
        size={30}
        color="#ff6f00"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AjoutProjet;
