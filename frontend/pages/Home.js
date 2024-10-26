
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Way of Shabbat</Text>
      <Text style={styles.subtitle}>
        Your personal companion for Torah study, Shabbat observance, and spiritual growth.
      </Text>
      <Button
        title="Start Torah Study"
        onPress={() => navigation.navigate('TorahStudy')}
      />
      <Button
        title="Activate Shabbat Mode"
        onPress={() => navigation.navigate('ShabbatMode')}
        style={{ marginTop: 10 }}
      />
      <Button
        title="Open Journal"
        onPress={() => navigation.navigate('Journal')}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default Home;
