import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';

const Card = ({title, image, subtitle, author, children, time, props}) => {
  return (
    <View style={styles.main} {...props}>
      <View style={styles.headerContainer}>
        <View style={styles.titleImageContainer}>
          <View style={styles.image}>
            <Text>LD</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text>LD</Text>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View>{children}</View>
      <View style={styles.timeline}>
        <Text>{author}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.likes}>
          <Text>1.3</Text>
        </View>
        <View style={styles.comments}>
          <Text>1.3</Text>
        </View>
        <View style={styles.share}>
          <Text>1.3</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const screenWidth = Dimensions.get('window').width;

export const elevationStyle = {
  elevation: 5,
  shadowColor: '#171717',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowRadius: 2,
  shadowOpacity: 0.2,
};

const heightToWidthRatio = 0.6;
const properWidthOfMainCard = screenWidth - 30;

const styles = StyleSheet.create({
  main: {
    width: properWidthOfMainCard,
    height: properWidthOfMainCard * heightToWidthRatio,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    ...elevationStyle,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  titleImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  time: {
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeline: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  share: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
