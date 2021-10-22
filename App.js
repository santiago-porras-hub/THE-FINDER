import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import image from './assets/UEB-logo.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> The Finder !</Text>
      <Image
        source={image}
        style={styles.image}

      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EEAB02",
    
  },
  title: { fontSize: 50 },
  image: { height: 200, width: 220, alignItems:'center' }



})
export default App;