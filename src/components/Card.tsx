import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
interface Props {
  name: string;
  color: string;
  price: string;
}

export const CARD_HEIGHT = 250;
export const CARD_TITLE = 45;

const styles = StyleSheet.create({
  card: {
    height: 250,
    borderRadius: 10
  }
});
const Card: FunctionComponent<Props> = ({ color, name, price }) => {
  return <View style={[styles.card, { backgroundColor: color }]}></View>;
};

export default Card;
