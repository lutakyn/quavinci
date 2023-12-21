import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from '../components';

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
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <Card
            key={item.title}
            title={item.title}
            author={item.author}
            subtitle={item.subtitle}
            time={item.time}>
            <Text> {item.content}</Text>
          </Card>
        );
      })}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
