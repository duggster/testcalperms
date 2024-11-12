import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import * as Calendar from "expo-calendar";

export default function Index() {
  const [status, requestPermission] = Calendar.useCalendarPermissions();

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  const onPress = async () => {
    const permissions = await Calendar.requestCalendarPermissionsAsync();
    console.log(permissions);
  }

  return (
    <View>
      <Text>Calendar Permission Status: {status?.status}</Text>
      <Button title="Request Permission" onPress={onPress} />
    </View>
  );
}
