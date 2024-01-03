import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const handleOnPress = async () => {
    console.log("Button pressed");
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound } = await Audio.Sound.createAsync({
      uri: "https://firebasestorage.googleapis.com/v0/b/spreed-9532e.appspot.com/o/static%2Ftest%2Fhello-world.mp3?alt=media&token=b3d7542f-f11e-4592-885a-fe707b3b350f",
    });
    await sound.setVolumeAsync(1);
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
