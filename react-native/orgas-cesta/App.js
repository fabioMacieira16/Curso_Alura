import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from '../src/telas/Cesta';

export default function App() {
  return (
    <View style={styles.container}>
      <Cesta />
      <StatusBar style="auto" />
    </View>
  );
}

constinuar da aula
https://cursos.alura.com.br/course/react-native-comecando-zero/task/97005

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
