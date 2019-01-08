import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Button } from "native-base";

const FacebookButton = props => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center"
    }}
  >
    <View>
      <Button rounded onPress={props.signInAsync}>
        <Text>{props.primaryLabel} with facbook</Text>
      </Button>
    </View>
    <View style={{ marginTop: 5 }}>
      <TouchableOpacity onPress={props.switchBack}>
        <Text>
          <Text style={{ color: "white" }}>
            {props.AlreadyOrDont} have an account?
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default FacebookButton;
