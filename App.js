import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductsDetailScreen from './src/screens/ProductDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <ProductsScreen /> */}

     <ProductsDetailScreen /> 



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  });
