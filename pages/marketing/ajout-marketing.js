import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { Item, Input, Textarea } from "native-base";

const AjoutMarketing = (props) => {
  const [type, setType] = useState();

  const [cout, setCout] = useState();
  const [duree, setDuree] = useState();

  const EId = props.navigation.getParam("id");

  console.log(EId + " Ajout equipement");

  const submit = async () => {
    let response = await fetch(
      "http://192.168.1.185:5000/api/marketing/ajout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          cout: cout,
          duree: duree,

          idProjet: EId,
        }),
      }
    );
    let responsedata = await response.json();
    if (!response.ok) {
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }

    Alert.alert("Message", "Votre demande est enregistrer", [
      { text: "fermer" },
    ]);
  };

  return (
    <View>
      <Item regular>
        <Input
          placeholder="Type"
          style={{ marginTop: "10%" }}
          value={type}
          onChangeText={(text) => {
            setType(text);
          }}
        />
      </Item>

      <Item regular>
        <Input
          placeholder="Cout"
          keyboardType="numeric"
          style={{ marginTop: "10%" }}
          value={cout}
          onChangeText={(text) => {
            setCout(text);
          }}
        />
      </Item>

      <Item regular>
        <Input
          placeholder="Duré par semaine"
          keyboardType="numeric"
          style={{ marginTop: "10%" }}
          value={duree}
          onChangeText={(text) => {
            setDuree(text);
          }}
        />
      </Item>

      <Button
        style={{ marginTop: 20 }}
        title="Envoyer"
        color="#0086c3"
        onPress={() => {
          submit();
        }}
      />
    </View>
  );
};

AjoutMarketing.navigationOptions = (navData) => {
  return {
    headerTitle: "Ajout solution marketing",
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

export default AjoutMarketing;
