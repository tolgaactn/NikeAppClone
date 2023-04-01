import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from "../data/products";
import ProductsDetailScreen from './ProductDetailsScreen';


const ProductsScreen = () => {
 return (
    <FlatList
        data={products}
        renderItem={({ item }) =>(
          <View style={styles.itemContainer}>
          <Image source={{ uri: item.image}} style={styles.image} />
          </View>
       )}
       numColumns={2}
      />
 )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    itemContainer:{
      width: '50%',
      padding: 1,
  
    },
  });
  
  export default ProductsScreen;