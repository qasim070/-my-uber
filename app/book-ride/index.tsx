import { StyleSheet , TextInput , Pressable } from "react-native";
import { Link, Tabs } from "expo-router";
import {FontAwesome , FontAwesome5 , MaterialCommunityIcons} from '@expo/vector-icons/';
import { Text, View } from "@/components/Themed";
import { useState } from "react";

export default function BookRide() {
  const [destinationVal , setDestiVal] = useState<string | undefined>(undefined);

  const getLocName = () => {
    // alert(destinationVal)
  }

  return (
    
    <View style={styles.containerBottom}>
     <View style={styles.innerContainerBtm}>
      <Text style={{ fontFamily: "Poppins-Medium", fontSize: 20 }}>
          Choose Destination
        </Text>
      
        <View style={styles.inputContainer}>
          <TextInput
            style={{height: 40 , borderWidth: 2 , fontFamily: 'Poppins' , borderColor: '#ddd' ,borderRadius: 5, width: '100%', paddingLeft: 60 , fontSize: 16 ,  paddingVertical: 10 ,}}
            onChangeText={(val: string) => setDestiVal(val)}
          />
           <FontAwesome5 name="map-marked-alt" style={{position: 'absolute' , left: 20}} size={20} color="black" />
        </View>
        <Pressable onPress={getLocName} style={{ backgroundColor: '#000' , width: '100%' , borderRadius: 10 , marginTop: 10}}>
          <Text style={{color: '#fff' , fontFamily: 'Poppins-Medium' , fontSize: 16 ,paddingVertical:5 , textAlign: 'center'}}>
            Search <FontAwesome5 name="search" size={18} color="white" />
          </Text>
        </Pressable>
        <Text className="bg-slate-100 text-6xl">{destinationVal}</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  innerContainerBtm: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#eee',

    paddingTop: 10,
    flex: 1,
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  main: {
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
