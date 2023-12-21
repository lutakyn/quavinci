import React from 'react';
import {StyleSheet, Dimensions, Text, Image, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {
  faArrowDown,
  faArrowUp,
  faComment,
  faShare,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import {Colors, Fonts} from '../theme';

const TrendingCard = ({
  title,
  image,
  subtitle,
  author,
  children,
  time,
  props,
}) => {
  return (
    <View style={styles.main} {...props}>
      <Text style={styles.trendingText}>Trending</Text>
      <View style={styles.divider} />
      <View style={styles.headerContainer}>
        <View style={styles.titleImageContainer}>
          <Image
            style={styles.image}
            source={require('../images/icons/male.png')}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </View>
      <View>{children}</View>
      <View style={styles.timeline}>
        <Text style={styles.timelineText}>{author}</Text>
        <Text style={[styles.time, styles.timelineText]}>{time}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.likes}>
          <FontAwesomeIcon icon={faArrowUp} />
          <Text>1.3</Text>
          <FontAwesomeIcon icon={faArrowDown} />
        </View>
        <View style={styles.comments}>
          <FontAwesomeIcon icon={faComment} />

          <Text>1.3</Text>
        </View>
        <View style={styles.share}>
          <FontAwesomeIcon icon={faShare} />

          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingCard;

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
const properWidthOfMainCard = screenWidth - 40;

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
    alignSelf: 'center',
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
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  time: {
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  timeline: {
    flexDirection: 'row',
  },
  timelineText: {
    ...Fonts.style.light,
  },
  footer: {
    flexDirection: 'row',
  },
  likes: {
    flexDirection: 'row',
    gap: 15,
    width: '45%',
  },
  comments: {
    flexDirection: 'row',
    gap: 15,
    width: '35%',
  },
  share: {
    flexDirection: 'row',
    gap: 15,
    width: '30%',
  },
  trendingText: {
    fontSize: 20,
    fontWeight: '800',
  },
  divider: {
    width: screenWidth - 80,
    marginVertical: 8,
    borderWidth: 0.8,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#999',
    borderColor: '#999',
  },
});
