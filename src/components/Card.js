import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {
  faArrowDown,
  faArrowUp,
  faComment,
  faShare,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import {Fonts, Images} from '../theme';
import maleAvatar from '../images/icons/male.png';

const Card = ({title, image, subtitle, author, children, time, props}) => {
  return (
    <View style={styles.main} {...props}>
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
      <Text style={styles.subtitle}>{subtitle}</Text>
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
const properWidthOfMainCard = screenWidth - 40;

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    ...elevationStyle,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
    justifyContent: 'space-between',
    // alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  titleImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 30,
    height: 30,
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
    marginTop: 15,
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
});
