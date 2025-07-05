import dayjs from "dayjs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MessageBubble = ({ message }) => {
  const isSelf = message.sender.self;

  return (
    <View style={[styles.container, isSelf ? styles.self : styles.other]}>
      {!isSelf && <Text style={styles.name}>{message.sender.name}</Text>}
      <View
        style={[styles.bubble, isSelf ? styles.selfBubble : styles.otherBubble]}
      >
        <Text style={styles.messageText}>{message.message}</Text>
        <Text style={styles.timeText}>
          {dayjs(message.time).format("HH:mm")}
        </Text>
      </View>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 10,
  },
  self: {
    alignItems: "flex-end",
  },
  other: {
    alignItems: "flex-start",
  },
  name: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 2,
    color: "#333",
  },
  bubble: {
    maxWidth: "80%",
    borderRadius: 12,
    padding: 10,
  },
  selfBubble: {
    backgroundColor: "#0F6EFF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  otherBubble: {
    backgroundColor: "#f2f2f2",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  messageText: {
    fontSize: 14,
    color: "#000",
  },
  timeText: {
    fontSize: 10,
    textAlign: "right",
    marginTop: 4,
    color: "gray",
  },
});
