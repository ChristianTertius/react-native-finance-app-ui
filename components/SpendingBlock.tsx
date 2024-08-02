import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import {
  AirbnbIcon,
  AmazonIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/Icons";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  return (
    <View style={{ marginVertical: 20, alignItems: "flex-start" }}>
      <Text
        style={{
          color: "white",
          fontWeight: "400",
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        July{" "}
        <Text style={{ color: Colors.white, fontWeight: "700" }}>Spending</Text>
      </Text>
      {spendingList.map((item) => {
        // let icon = (
        //   <ShoopingCartIcon color={Colors.white} width={22} height={22} />
        // );
        // if (item.name == "Netflix") {
        //   icon = <NetflixIcon color={Colors.white} width={22} height={22} />;
        // } else if (item.name == "AirBnB Rent") {
        //   icon = <AirbnbIcon color={Colors.white} width={22} height={22} />;
        // } else if (item.name == "Spotify") {
        //   icon = <SpotifyIcon color={Colors.white} width={22} height={22} />;
        // } else if (item.name == "Amazon") {
        //   icon = <AmazonIcon color={Colors.white} width={22} height={22} />;
        // } else if (item.name == "Figma") {
        //   icon = <FigmaIcon color={Colors.white} width={22} height={22} />;
        // } else if (item.name == "Online Shopping") {
        //   icon = (
        //     <ShoopingCartIcon color={Colors.white} width={22} height={22} />
        //   );
        // } else {
        //   icon = icon;
        // }
        const iconComponents = {
          Netflix: NetflixIcon,
          "AirBnB Rent": AirbnbIcon,
          Spotify: SpotifyIcon,
          Amazon: AmazonIcon,
          Figma: FigmaIcon,
          "Online Shopping": ShoopingCartIcon,
        };

        const IconComponent = iconComponents[item.name] || ShoopingCartIcon;
        const icon = (
          <IconComponent color={Colors.white} width={22} height={22} />
        );

        return (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.grey,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 80,
                }}
              >
                {icon}
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 14,
                    fontWeight: "700",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: "400",
                    fontSize: 12,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{ color: Colors.white, fontSize: 14, fontWeight: "700" }}
              >
                ${item.amount}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({});
