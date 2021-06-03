import React, { useContext, useState, useEffect, useCallback } from "react";
import { ListItem, Body, Right, Text } from "native-base";
import { Authcontext } from "../context/authContext";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { View, RefreshControl, ScrollView } from "react-native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ListeProjet = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.1.185:5000/api/projet/utilisateur/${auth.userId}`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.projet);
    };
    sendRequest();
  }, []);

  const [list, setList] = useState([]);

  const auth = useContext(Authcontext);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.1.185:5000/api/projet/utilisateur/${auth.userId}`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.projet);
    };
    sendRequest();
  }, []);

  console.log(list);
  return (
    <View>
      <View style={{ marginLeft: "8%", marginTop: 30 }}>
        <IconEntypo
          name="add-to-list"
          size={60}
          color="#1976d2"
          onPress={() => {
            props.navigation.navigate({
              routeName: "AjoutProjet",
            });
          }}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {list &&
          list.map((item, index) => (
            <ListItem avatar>
              <Body>
                <View style={{ marginTop: 20 }}>
                  <Text>{item.titre}</Text>
                  <Text note>{item.descreption}</Text>
                  <Text note>{item.datelancement}</Text>
                </View>
              </Body>
              <Right>
                <IconAntDesign
                  name="delete"
                  size={20}
                  color="#c62828"
                  onPress={() => {}}
                  style={{ marginTop: 30 }}
                  onPress={async () => {
                    let response = await fetch(
                      `http://192.168.1.185:5000/api/projet/${item._id}`,
                      {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    let responsedata = await response.json();
                    if (!response.ok) {
                      Alert.alert("Message", "Failed !!", [{ text: "fermer" }]);
                      throw new Error(responsedata.message);
                    }
                    setList(list.filter((el) => el._id !== item._id));
                    Alert.alert("Message", "Votre reclamation est suprimée", [
                      { text: "fermer" },
                    ]);
                  }}
                />
              </Right>
            </ListItem>
          ))}
      </ScrollView>
    </View>
  );
};

ListeProjet.navigationOptions = (navData) => {
  return {
    headerTitle: "Mes projet",
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

export default ListeProjet;
