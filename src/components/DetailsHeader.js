import React from 'react';
import {StyleSheet, Dimensions, Text, Image, View} from 'react-native';
import {Colors, Fonts} from '../theme';

const DetailsHeader = ({title, subtitle, author, time}) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.image}
        source={require('../images/icons/male.png')}
      />
      <View style={styles.titleTimeContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>{author}</Text>
          <View style={styles.dot} />
          <Text style={[styles.timelineText]}>{time}</Text>
          <View style={styles.dot} />
          <Text style={[styles.timelineText]}>i.reddit</Text>
        </View>
      </View>
      <View style={styles.join}>
        <Text style={styles.joinText}>JOIN</Text>
      </View>
    </View>
  );
};

export default DetailsHeader;

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  titleTimeContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '70%',
    marginLeft: 10,
  },
  image: {
    width: '12%',
    height: 40,
    borderRadius: 40,
  },
  join: {
    width: '16%',
    height: 35,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    paddingBottom: 10,
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timelineText: {
    ...Fonts.style.light,
  },
  time: {
    marginLeft: 10,
  },
  joinText: {
    color: Colors.primary,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.grey,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
});
