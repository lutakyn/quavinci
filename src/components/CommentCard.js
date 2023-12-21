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

const CommentCard = ({
  title,
  subtitle,
  comments,
  replies,
  children,
  time,
  props,
}) => {
  console.log({title, subtitle, comments, replies, children, time, props});
  return (
    <View style={styles.main} {...props}>
      <Text style={styles.trendingText}>Best Comments</Text>
      <View style={styles.headerContainer}>
        <View style={styles.titleImageContainer}>
          <Image
            style={styles.image}
            source={require('../images/icons/male.png')}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.timelineText}>{title}</Text>
            <Text style={styles.title}>{subtitle}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </View>
      <View style={styles.mainCommentsContainer}>
        <View style={styles.verticalLine} />
        <View>
          {comments.map(comment => {
            return (
              <View style={styles.commentsContainer}>
                <Image
                  style={styles.image}
                  source={require('../images/icons/male.png')}
                />
                <View>
                  <Text style={styles.timelineText}>{comment.user}</Text>
                  <Text style={styles.title}>{comment.comment}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <Text style={styles.reply}>Reply</Text>

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

export default CommentCard;

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
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 10,
    paddingTop: 8,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
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
    marginTop: 10,
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
    fontWeight: '500',
    marginVertical: 8,
  },
  divider: {
    width: screenWidth - 80,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#999',
    borderColor: '#999',
  },
  mainCommentsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  commentsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  verticalLine: {
    margin: 8,
    borderWidth: 0.85,
    borderRadius: 8,
    alignSelf: 'stretch',
    backgroundColor: '#999',
    borderColor: '#999',
    marginTop: 20,
  },
  reply: {
    color: Colors.primary,
    marginVertical: 10,
  },
});
