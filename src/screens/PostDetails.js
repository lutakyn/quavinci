import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import {Card} from '../components';
import {Colors, Fonts} from '../theme';

const PostDetails = props => {
  const {navigation, route} = props;
  const {postDetails} = route.params;
  const {title, subtitle, author, time, content} = postDetails;
  console.log(title, subtitle, author, time, content);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.image}>
          <Text>LD</Text>
        </View>
        <View style={styles.titleTimeContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.timeline}>
            <Text style={styles.timelineText}>{author}</Text>
            <View style={styles.dot} />
            <Text style={[styles.timelineText]}>{time}</Text>
            <View style={styles.dot} />
          </View>
        </View>
        <View style={styles.join}>
          <Text style={styles.joinText}>JOIN</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Card
          key={title}
          title={title}
          author={author}
          subtitle={subtitle}
          time={time}>
          <Text> {content}</Text>
        </Card>
      </ScrollView>
    </View>
  );
};

export default PostDetails;

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
  },
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
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 10,
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
