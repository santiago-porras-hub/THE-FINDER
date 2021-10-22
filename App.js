import React from "react";
import { Text, View, StyleSheet, Image,TouchableOpacity } from "react-native";
import image from './assets/UEB-logo.png'

const App = () => {
  return (

  
    <View style={styles.container}>

      <Text style={styles.title}> THE FINDER </Text>
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
    backgroundColor: "aliceblue",
    padding:20,
    
  },
  title: { fontSize: 40, fontWeight:'bold',flex:1,padding:20},

  image: { height: 200, width: 220, alignItems:'center' }

})


export default App;