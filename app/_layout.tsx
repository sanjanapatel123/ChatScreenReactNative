import ChatScreen from "@/screens/ChatScreen";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

const _layout = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <ChatScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
