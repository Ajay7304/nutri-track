import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.userName}>Najma Khan</Text>
        </View>

        <View style={styles.userDetailsContainer}>
          <View style={styles.userDetailsSection}>
            <Text style={styles.userDetails}>Age: 29 </Text>
            <Text style={styles.userDetails}>Height: 5'4" </Text>
          </View>

          <View style={styles.userDetailsSection}>
            <Text style={styles.userDetails}>Gender: Female </Text>
            <Text style={styles.userDetails}>Starting Weight: 63kg </Text>
          </View>
        </View>
      </View>

      <View style={styles.fitnessJourneyContainer}>
        <Text style={styles.sectionTitle}>Your Fitness Journey</Text>
        <View style={styles.fitnessJourney}>
          <View style={styles.progressBar}>
            {[...Array(8)].map((_, i) => (
              <View key={i} style={[styles.dot, i === 0 && styles.activeDot]}></View>
            ))}
          </View>
          <View style={styles.weekLabels}>
            {[...Array(8)].map((_, i) => (
              <Text key={i} style={styles.weekLabel}>{`W${i + 1}`}</Text>
            ))}
          </View>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <View style={styles.infoItemIcon}>
              <Ionicons name="body" size={28} color="#17A2B8" />
            </View>
            <Text style={styles.infoLabel}>Current BMI</Text>
            <Text style={styles.infoValue}>23.84</Text>
            <Text style={styles.infoSubtext}>Range 18-25 (Recommended)</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoItemIcon}>
              <Ionicons name="flame" size={28} color="#17A2B8" />
            </View>
            <Text style={styles.infoLabel}>Suggested calories</Text>
            <Text style={styles.infoValue}>2,045 kcal/day</Text>
          </View>
        </View>

        <View style={styles.weightSectionContainer}>
          <View style={styles.weightSection}>
            <View>
              <Text style={styles.weightLabel}>Current weight</Text>
              <Text style={styles.weightValue}>63 kg</Text>
            </View>

            <View>
              <Text style={styles.weightLabel}>Desired weight</Text>
              <Text style={styles.weightValue}>58 kg</Text>
            </View>
          </View>

          <View>
            <Text style={styles.weightSubtext}>Target/Ideal weight recommended: 50kg - 61kg</Text>
          </View>
        </View>

        <View style={styles.nutritionSectionContainer}>
          <Text style={styles.sectionTitle}>Nutritional{"\n"}Requirements (On daily basis)</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Fiber</Text>
              <Text style={styles.nutritionValue}>25g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Carbs</Text>
              <Text style={styles.nutritionValue}>230g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Protein</Text>
              <Text style={styles.nutritionValue}>102g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Fats</Text>
              <Text style={styles.nutritionValue}>79g</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.editableSection}>
        <Ionicons name="fitness" size={24} color="#17A2B8" />
        <View style={styles.editableSectionText}>
          <Text style={styles.editableSectionLabel}>Physical Activity</Text>
          <Text style={styles.editableSectionValue}>Extremely Active</Text>
        </View>
        <Ionicons name="pencil" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.editableSection}>
        <Ionicons name="medical" size={24} color="#17A2B8" />
        <View style={styles.editableSectionText}>
          <Text style={styles.editableSectionLabel}>Health Conditions</Text>
        </View>
        <Ionicons name="pencil" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.editableSection}>
        <Ionicons name="restaurant" size={24} color="#17A2B8" />
        <View style={styles.editableSectionText}>
          <Text style={styles.editableSectionLabel}>Meal Preferences</Text>
          <Text style={styles.editableSectionValue}>Non-Vegetarian</Text>
        </View>
        <Ionicons name="pencil" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.editableSection}>
        <Ionicons name="globe" size={24} color="#17A2B8" />
        <View style={styles.editableSectionText}>
          <Text style={styles.editableSectionLabel}>Regional Preferences in Food</Text>
          <Text style={styles.editableSectionValue}>India</Text>
        </View>
        <Ionicons name="pencil" size={20} color="black" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LightGray,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfo: {
    marginBottom: 20,
    backgroundColor: Colors.White,
    borderRadius: 5,
    padding: 10,
    position: "relative",
    elevation: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#17A2B8',
    marginBottom: 10,
    position: "absolute",
    top: -30,
    left: 20
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingTop: 30
  },
  userDetailsContainer: {
    flexDirection: 'row',
    gap: 50,
    paddingLeft: 5,

  },
  userDetailsSection: {
    gap: 10
  },
  userDetails: {
    fontSize: 16,
    color: Colors.LightText,
  },
  fitnessJourneyContainer: {
    backgroundColor: Colors.White,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  fitnessJourney: {
    marginBottom: 30,
    backgroundColor: Colors.LightGray,
    padding: 8,
    paddingVertical: 20,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  activeDot: {
    backgroundColor: '#17A2B8',
  },
  weekLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekLabel: {
    fontSize: 12,
    color: '#666',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoItem: {
    width: "48%",
    backgroundColor: Colors.LightGray,
    borderRadius: 5,
    padding: 8,
    position: "relative",

  },
  infoItemIcon: {
    position: "absolute",
    top: -15,
    right: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoValue: {
    fontSize: 18,
    marginBottom: 10
  },
  infoSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  weightSectionContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    backgroundColor: Colors.LightGray,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingTop: 20,
    paddingBottom: 15
  },
  weightSection: {
    flexDirection: "row",
    gap: 75,
  },
  weightLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  weightValue: {
    fontSize: 18,
    marginBottom: 5,
  },
  weightSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  nutritionSectionContainer: {
    marginBottom: 20,
    backgroundColor: Colors.LightGray,
    borderRadius: 5,
    padding: 5,
    paddingTop: 20,

  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    padding: 8,
    marginBottom: 10,
  },
  nutritionLabel: {
    fontSize: 14,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  editableSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  editableSectionText: {
    flex: 1,
    marginLeft: 15,
  },
  editableSectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.LightText
  },
  editableSectionValue: {
    fontSize: 16,
    color: '#666',
    // marginTop: 5,
  },
});

export default ProfileScreen;