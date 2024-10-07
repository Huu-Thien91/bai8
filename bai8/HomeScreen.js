import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Tiêu đề và ảnh đại diện */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.username}>Christie Doe</Text>
          </View>
          <Image 
            source={{ uri: 'https://anhgaidep.net/wp-content/uploads/2023/01/tiktoker-min-min-sexy-body-goi-cam-81-1024x1024.webp' }} 
            style={styles.profileImage} 
          />
        </View>

        {/* Các thẻ Insights */}
        <View style={styles.insightsContainer}>
          <Text style={styles.insightsTitle}>Your Insights</Text>
          <View style={styles.insightGrid}>
            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="scan-outline" size={40} color="#7E57C2" />
              <Text style={styles.insightText}>Scan new</Text>
              <Text style={styles.insightNumber}>Scanned 483</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="alert-circle-outline" size={40} color="#FF7043" />
              <Text style={styles.insightText}>Counterfeits</Text>
              <Text style={styles.insightNumber}>Counterfeited 32</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="checkmark-circle-outline" size={40} color="#66BB6A" />
              <Text style={styles.insightText}>Success</Text>
              <Text style={styles.insightNumber}>Checkouts 8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="calendar-outline" size={40} color="#42A5F5" />
              <Text style={styles.insightText}>Directory</Text>
              <Text style={styles.insightNumber}>History 26</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore More */}
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreTitle}>Explore More</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Ionicons name="arrow-forward-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Thanh điều hướng dưới cùng */}
      <View style={styles.bottomNavigation}>
        <Ionicons name="home" size={30} color="#7E57C2" />
        <Ionicons name="notifications-outline" size={30} color="#B0BEC5" />
        <Ionicons name="scan-outline" size={30} color="#B0BEC5" />
        <Ionicons name="time-outline" size={30} color="#B0BEC5" />
        <Ionicons name="cart-outline" size={30} color="#B0BEC5" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
  },
  username: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsContainer: {
    marginBottom: 20,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  insightCard: {
    backgroundColor: '#F7F8FA',
    borderRadius: 10,
    width: '48%',
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  insightText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  insightNumber: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  exploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  exploreButton: {
    padding: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
});
