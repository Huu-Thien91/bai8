import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScanScreen() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#7E57C2" />
      </TouchableOpacity>
      
      {/* Hình ảnh chai nước */}
      <View style={styles.scanContainer}>
        <Image 
          source={{ uri: 'https://dexprint.co.id/wp-content/uploads/2019/09/Sticker4-680x680.jpg' }} 
          style={[styles.bottleImage, { width: windowWidth * 0.6, height: windowWidth * 1.2 }]} 
        />
        
        {/* Khung quét */}
        <View style={[styles.scanOverlay, { width: windowWidth * 0.7, height: windowWidth * 1.2 }]}>
          <View style={styles.scanFrame} />
        </View>
      </View>
      
      {/* Thông tin sản phẩm */}
      <View style={[styles.productInfo, { width: windowWidth * 0.9 }]}>
        <Image 
          source={{ uri: 'https://dexprint.co.id/wp-content/uploads/2019/09/Sticker4-680x680.jpg' }} 
          style={styles.productImage} 
        />
        <View style={styles.productDetails}>
          <Text style={styles.productLabel}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF1E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    zIndex: 10,
  },
  scanContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bottleImage: {
    resizeMode: 'contain',
  },
  scanOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: '80%',
    height: '50%',
    borderWidth: 2,
    borderColor: '#4285F4',
    borderRadius: 20,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productLabel: {
    fontSize: 14,
    color: '#888',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#7E57C2',
    borderRadius: 20,
    padding: 10,
  },
});
