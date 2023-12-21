import React, {useState} from 'react';
import {
  Dimensions,
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {Card, CommentCard, DetailsHeader} from '../components';
import {Colors, Fonts} from '../theme';

const comment = {
  title: 'HelloWorld404',
  subtitle: 'What is the new normal',
  comments: [
    {
      user: 'BlueSky312',
      comment: 'Her death be no pity',
    },
    {
      user: 'BubbleWrapMan',
      comment: "Don't lift it, search for vaccine",
    },
    {
      user: 'BubbleWrapMan',
      comment: "Don't lift it, search for vaccine",
    },
  ],
};

const PostDetails = props => {
  const {navigation, route} = props;
  const {postDetails} = route.params;
  const [reply, setReply] = useState('');
  const {title, subtitle, author, time, content} = postDetails;
  console.log(title, subtitle, author, time, content);

  return (
    <View style={styles.container}>
      <DetailsHeader
        title={title}
        author={author}
        subtitle={subtitle}
        time={time}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Card
          key={title}
          title={title}
          author={author}
          subtitle={subtitle}
          time={time}>
          <Text> {content}</Text>
        </Card>
        <CommentCard {...comment} />
      </ScrollView>

      <View style={styles.replyBoxContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setReply(text)}
          value={reply}
          placeholderTextColor={Colors.grey}
          underlineColorAndroid="transparent"
          placeholder="Add a comment"
        />
        <View style={styles.sendButton}>
          <Text>Hi</Text>
        </View>
      </View>
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
  replyBoxContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: screenWidth,
    // position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    // backgroundColor: Colors.primary,
    // borderRadius: 100,
    flexDirection: 'row',
    textAlignVertical: 'bottom',
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
  input: {
    width: '80%',
    height: 40,
    color: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grey,
    backgroundColor: 'white',
    paddingLeft: 5,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    marginHorizontal: 10,
  },
});
