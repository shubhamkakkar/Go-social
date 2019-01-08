import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { CardItem, Item, Input, Body, Button, Text } from "native-base";

const LoginOrSignin = props => (
  <View>
    <KeyboardAvoidingView behavior="position">
      <CardItem
        style={{
          backgroundColor: "transparent",
          padding: 5
        }}
      >
        <Body
          style={{
            alignItems: "center"
          }}
        >
          {props.inputArr.map((res, index) => (
            <Item key={index}>
              <Input
                placeholder={res.placeholder}
                style={{ color: "white" }}
                placeholderTextColor="white"
                value={props.value[index]}
                onChangeText={text => props.setInputState(text, index)}
              />
            </Item>
          ))}
          <View>
            <Button
              rounded
              onPress={props.firebaseAuth}
              style={{
                backgroundColor: "#e91e63",
                marginTop: 20
              }}
            >
              <Text> {props.primaryLabel} </Text>
            </Button>
          </View>
        </Body>
      </CardItem>
    </KeyboardAvoidingView>
  </View>
);

export default LoginOrSignin;
