/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {Card} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../theme';
const data = [
  {
    title: 'r/Coronavirus',
    subtitle: 'Navigating the new Central',
    image: '',
    author: 'by internetPositif',
    time: '16h',
    content: 'more content',
  },
  {
    title: 'r/books',
    subtitle: 'Navigation for change',
    image: '',
    author: 'by coochiebreakfast',
    time: '18h',
    content: 'more content',
  },
  {
    title: 'r/authors',
    subtitle: 'Navigation for change',
    image: '',
    author: 'by coochiebreakfast',
    time: '18h',
    content: 'more content',
  },
];

const HomeScreen = props => {
  const {navigation} = props;
  const SingleCard = ({item}) => {
    return (
      <Card
        key={item.title}
        title={item.title}
        author={item.author}
        subtitle={item.subtitle}
        time={item.time}
        navigate={() =>
          navigation.navigate('PostDetailsScreen', {postDetails: item})
        }>
        <Text> {item.content}</Text>
      </Card>
    );
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
    justifyContent: 'center',
    padding: 10,
  },
});
