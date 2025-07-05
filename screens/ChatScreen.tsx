import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import MessageBubble from "../components/MessageBubble";
import { getChatData } from "../services/chatApi";

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const ChatScreen = () => {
  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const formatChatWithDates = (chatArray) => {
    const formatted = [];
    let lastDate = null;

    chatArray.forEach((msg) => {
      const msgDate = dayjs(msg.time).format("DD MMM, YYYY");
      if (msgDate !== lastDate) {
        formatted.push({ type: "date", date: msgDate });
        lastDate = msgDate;
      }
      formatted.push({ ...msg, type: "message" });
    });

    return formatted;
  };

  const loadChats = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await getChatData(page);
      const formatted = formatChatWithDates(response.chats);
      setChats((prev) => [...prev, ...formatted]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Error loading chats", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  const renderItem = ({ item }) => {
    if (item.type === "date") {
      return (
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      );
    }

    return <MessageBubble message={item} />;
  };

  const handleSendMessage = (text) => {
    const newMsg = {
      id: Date.now(),
      message: text,
      sender: {
        name: "You",
        self: true,
      },
      time: new Date().toISOString(),
      type: "message",
    };

    // Insert new message at the top (since FlatList is inverted)
    setChats((prev) => [newMsg, ...prev]);
  };

  return (
    <View style={styles.container}>
      <ChatHeader />

      <FlatList
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={loadChats}
        onEndReachedThreshold={0.5}
        inverted
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      {loading && (
        <ActivityIndicator size="small" color="gray" style={{ margin: 10 }} />
      )}

      <View
        style={{
          padding: 8,
          backgroundColor: "#f2f2f2",
          borderLeftWidth: 3,
          borderLeftColor: "#0F6EFF",
          marginHorizontal: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 12, color: "#555" }}>
          Replying to @Rohit Yadav
        </Text>
      </View>

      <ChatInput onSend={handleSendMessage} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dateContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  dateText: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    color: "#555",
  },
});
