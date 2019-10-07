import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions
} from "react-native";
import cards from "../utils/Cards";
import Card, { CARD_HEIGHT, CARD_TITLE } from "./Card";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    margin: 16,
    flex: 1
  },
  container: {
    flex: 1
  }
});

const Root = () => {
  const animatedY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {cards.map((card, index) => {
          const translateY = animatedY.interpolate({
            // explanation for input/output
            // -CARD_HEIGHT: when user scrolls max down which is equal to full card height length
            //    output: each card needs to be translated down by it's height * it's index
            // 0: when user has not scrolled at all
            //    output: each card needs to be translated down by a small amount just to reveal its title
            inputRange: [-CARD_HEIGHT, 0],
            outputRange: [
              CARD_HEIGHT * index,
              (CARD_HEIGHT - CARD_TITLE) * -index
            ]
          });
          return (
            <Animated.View
              // contentContainerStyle={styles.scroll}
              key={card.name}
              style={{ transform: [{ translateY }] }}
            >
              <Card {...card} />
            </Animated.View>
          );
        })}
      </View>
      <Animated.ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animatedY
              }
            }
          }
        ])}
      />
    </View>
  );
};

export default Root;
