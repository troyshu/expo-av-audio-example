import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const handleOnPress = async () => {
    console.log("Button pressed");
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound } = await Audio.Sound.createAsync({
      uri: "https://firebasestorage.googleapis.com/v0/b/spreed-9532e.appspot.com/o/static%2Fvoice-samples%2FEKulI7jrH6kM0HWJLfZi.mp3?alt=media&token=b81705f5-9d24-4c68-add6-ff45c0c4c194",
    });
    await sound.setVolumeAsync(1);
    // Some audio is "cut out" at rates higher than 2
    await sound.setRateAsync(3, true);
    await sound.playAsync();

    console.warn("Played sound");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click me" onPress={handleOnPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
