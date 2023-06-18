import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import axios from "axios";

const ChatComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleUserInput = text => {
    setUserInput(text);
  };

  const generateResponse = async () => {
    try {
      const response = await axios.post("https://api.chatgpt.com/generate", {
        input: userInput
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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"
        }
      });
      setGeneratedResponse(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return <View>
      <TextInput value={userInput} onChangeText={handleUserInput} placeholder="Enter your message" style={_styles.aJDittRq} />
      <Button title="Generate Response" onPress={generateResponse} />
      {generatedResponse && <Text>{generatedResponse}</Text>}
    </View>;
};

export default ChatComponent;

const _styles = StyleSheet.create({
  aJDittRq: {
    height: 50,
    backgroundColor: "#cddfc7"
  }
});