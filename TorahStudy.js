
import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';

const TorahStudy = () => {
  const [portion, setPortion] = useState('');

  useEffect(() => {
    const fetchPortion = async () => {
      try {
        const response = await axios.get(
          'https://www.sefaria.org/api/texts/Genesis.1.1?commentary=1'
        );
        setPortion(response.data.text);
      } catch (error) {
        console.error('Error fetching Torah portion:', error);
      }
    };
    fetchPortion();
  }, []);

  return (
    <ScrollView>
      <Text>{portion}</Text>
    </ScrollView>
  );
};

export default TorahStudy;
