import { StyleSheet, Image, Pressable } from "react-native";
import { Link, Tabs } from "expo-router";
import { Text, View } from "@/components/Themed";
const car = require("../../assets/images/ride.png");
const food = require("../../assets/images/order-food.png");

export default function BookRide() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
        My Uber App
      </Text>
      <View style={styles.main}>
        <Link href="/" asChild>
          <View style={styles.card}>
            <Image source={car} />
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}>
              Get A Ride
            </Text>
          </View>
        </Link>

        <Link href="/" asChild>
        <View style={styles.card}>
          <Image source={food} />
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}>
            Order Food
          </Text>
        </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
    margin: 12,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#eee",
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
