
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Alert } from 'react-native';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim() === '') {
      Alert.alert('Empty Entry', 'Please write something before adding.');
      return;
    }
    setEntries([...entries, { id: Date.now().toString(), text: newEntry }]);
    setNewEntry('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Spiritual Journal</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.entry}>{item.text}</Text>}
        style={styles.list}
      />
      <TextInput
        style={styles.input}
        placeholder="Write your thoughts..."
        value={newEntry}
        onChangeText={setNewEntry}
      />
      <Button title="Add Entry" onPress={addEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginBottom: 20,
  },
  entry: {
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Journal;
