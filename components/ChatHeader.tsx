import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "react-native-paper";

const ChatHeader = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.headerContainer}>
      {/* Left: Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Middle: Trip Info */}
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          {/* Avatar Row */}
          <View style={styles.avatarRow}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/1.jpg",
              }}
              style={styles.avatar}
            />
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/2.jpg" }}
              style={[styles.avatar, { marginLeft: -10 }]}
            />
          </View>

          <Text style={styles.tripTitle}>Trip 1</Text>
        </View>

        <Text style={styles.routeText}>
          <Text style={styles.label}>From </Text>
          <Text style={styles.value}>IGI Airport, T3</Text>
        </Text>
        <Text style={styles.routeText}>
          <Text style={styles.label}>To </Text>
          <Text style={styles.value}>Sector 28</Text>
        </Text>
      </View>

      {/* Right: Icon Menu */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={{ marginHorizontal: 12 }}>
          <Ionicons name="call-outline" size={20} color="black" />
        </TouchableOpacity>

        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Ionicons name="ellipsis-vertical" size={20} color="black" />
            </TouchableOpacity>
          }
          contentStyle={{ borderRadius: 8 }}
        >
          <Menu.Item
            onPress={() => {}}
            title="Members"
            leadingIcon="account-group"
          />
          <Menu.Item
            onPress={() => {}}
            title="Share Number"
            leadingIcon="phone"
          />
          <Menu.Item
            onPress={() => {}}
            title="Report"
            leadingIcon="alert-circle-outline"
          />
        </Menu>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  backButton: {
    paddingRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  avatarRow: {
    flexDirection: "row",
    marginRight: 8,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#fff",
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  routeText: {
    fontSize: 13,
    color: "#333",
  },
  label: {
    color: "gray",
  },
  value: {
    fontWeight: "600",
    color: "#000",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
