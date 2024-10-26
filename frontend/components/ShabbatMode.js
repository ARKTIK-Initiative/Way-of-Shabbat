
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const ShabbatMode = () => {
  const [isShabbat, setIsShabbat] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const checkShabbat = () => {
      const now = new Date();
      const shabbatStart = new Date();
      shabbatStart.setHours(18, 0, 0, 0); // Candle lighting at 6:00 PM
      const shabbatEnd = new Date();
      shabbatEnd.setHours(19, 0, 0, 0); // Havdalah at 7:00 PM the next day

      if (now >= shabbatStart && now <= shabbatEnd) {
        setIsShabbat(true);
        const remaining = Math.floor((shabbatEnd - now) / (1000 * 60)); // Minutes left
        setTimeLeft(`${remaining} minutes left in Shabbat`);
      } else {
        setIsShabbat(false);
        setTimeLeft('Shabbat has ended or has not started yet.');
      }
    };

    checkShabbat();
    const interval = setInterval(checkShabbat, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleShabbatAlert = () => {
    if (isShabbat) {
      Alert.alert('Shabbat Mode', 'Enjoy the peaceful rest of Shabbat!');
    } else {
      Alert.alert('Not Shabbat', 'Shabbat is not active right now.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>
        {isShabbat ? 'Shabbat is Active' : 'Shabbat is Inactive'}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>{timeLeft}</Text>
      <Button title="Check Shabbat Mode" onPress={handleShabbatAlert} />
    </View>
  );
};

export default ShabbatMode;
