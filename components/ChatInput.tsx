import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;

    onSend(text); // 👈 Pass message up
    setText(""); // Clear input
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="camera-outline" size={20} color="#fff" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={text}
        onChangeText={setText}
      />

      {text.length > 0 ? (
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color="#0084ff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="video" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Ionicons name="mic-outline" size={24} color="#555" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    backgroundColor: "#fff",
  },
  actionButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  input: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 10,
    fontSize: 14,
  },
  rightIcons: {
    flexDirection: "row",
  },
});
