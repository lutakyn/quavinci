/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import {Card, TrendingCard} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../theme';

const data = [
  {
    title: 'r/AskReddit',
    subtitle: 'Navigating the new Central',
    image: '',
    author: 'by internetPositif',
    time: '16h',
    content:
      'Poison ivy grew through the fence they said was impenetrable.Green should have smelled more tranquil, but somehow it just tasted rotten.',
    type: 'trending',
  },
  {
    title: 'r/Coronavirus',
    subtitle: 'Navigating the new Central',
    image: require('../images/icons/ice.jpeg'),
    author: 'by internetPositif',
    time: '16h',
    content: '',
    type: 'post',
  },
  {
    title: 'r/books',
    subtitle: 'Navigation for change',
    image: require('../images/icons/ice.jpeg'),
    author: 'by coochiebreakfast',
    time: '18h',
    content: 'more content',
    type: 'post',
  },
  {
    title: 'r/authors',
    subtitle: 'Navigation for change',
    image: require('../images/icons/ice.jpeg'),
    author: 'by coochiebreakfast',
    time: '18h',
    content: 'more content',
    type: 'post',
  },
];

const HomeScreen = props => {
  const {navigation} = props;
  const {title, subtitle, author, time, content} = data[0];
  console.log(title, subtitle, author, time, content);

  const SingleCard = ({item}) => {
    switch (item.type) {
      case 'trending':
        return (
          <TrendingCard
            key={item.title}
            title={item.title}
            author={item.author}
            subtitle={item.subtitle}
            time={item.time}>
            <Text> {item.content}</Text>
          </TrendingCard>
        );
      case 'post':
        return (
          <Pressable
            onPress={() =>
              navigation.navigate('PostDetailsScreen', {postDetails: item})
            }>
            <Card
              key={item.title}
              title={item.title}
              author={item.author}
              subtitle={item.subtitle}
              time={item.time}>
              {item.image ? (
                <Image
                  source={item.image}
                  resizeMethod="contain"
                  style={styles.hero}
                />
              ) : null}
              {item.content ? <Text> {item.content}</Text> : null}
            </Card>
          </Pressable>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          scrollEnabled={true}
          scrollEventThrottle={1}
          renderItem={SingleCard}
          keyExtractor={item => item.title}
          horizontal={false}
        />
      </View>

      <TouchableOpacity
        onPress={() => {}}
        style={styles.floatingButton}
        activeOpacity={1}>
        <FontAwesomeIcon icon={faPlus} size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
    marginHorizontal: 15,
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
  floatingButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    top: screenHeight - 230,
    right: 30,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
  scroll: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  hero: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
});
