import React, { Component } from "react";
import axios from "axios";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Container, Button, Text } from "native-base";

import LoginOrSignin from "../../components/LoginOrSignin/index";
import FacebookButton from "../../components/FacebookButton/FacebookButton";

//API_KEY
import API_KEY from "../../../API_KEY";

class LoginSignup extends Component {
  state = {
    screen: "Login",
    credentialValues: ["", "", ""]
  };

  inputArr = [
    {
      placeholder: "Email"
    },
    {
      placeholder: "Password"
    }
  ];

  setInputState = (text, index) => {
    if (text.trim().length) {
      this.setState({
        credentialValues: { ...this.state.credentialValues, [index]: text }
      });
    } else {
      this.setState({
        credentialValues: { ...this.state.credentialValues, [index]: "" }
      });
    }
  };

  AlreadyOrDont = "Don't";
  switchTo = screen => this.setState({ screen });

  switchToOther = () => {
    let rn = this;
    if (rn.state.screen === "Login") {
      rn.switchTo("SignIn");
      rn.inputArr.push({ placeholder: "Confirm Password" });
      rn.AlreadyOrDont = "Already";
      rn.changeToScreen = "Login";
    } else {
      rn.switchTo("Login");
      rn.inputArr.splice(2, 1);
      rn.AlreadyOrDont = "Don't";
    }
  };

  firebaseAuth = () => {
    const { credentialValues, screen } = this.state;
    let email = credentialValues[0];
    let password = credentialValues[1];

    axiosPostOnApi = api => {
      axios
        .post(api, { email, password, returnSecureToken: true })
        .then(res => {
          console.log(res);
          this.props.navigation.navigate("App");
        })
        .catch(er => alert("Something  went wrong, try again - error: 200"));
    };

    switch (screen) {
      case "SignIn": {
        let confirmPassword = credentialValues[2];
        if (
          email.trim().length &&
          password.trim().length &&
          confirmPassword.trim().length
        ) {
          confirmPassword === password
            ? axiosPostOnApi(
                `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`
              )
            : alert("Passwords Dont match");
          return 0;
        } else {
          alert("fill in all the fields first");
        }

        break;
      }
      default: {
        if (email.trim().length && password.trim().length) {
          axiosPostOnApi(
            `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`
          );
        } else {
          alert("fill in all the fields first");
        }

        break;
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <LinearGradient colors={["#667eea", "#764ba2"]} style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 10
              }}
            >
              <Image
                source={require("../../images/logo.png")}
                style={{ height: 100, width: 100 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignContent: "center",
                margin: 10
              }}
            >
              <LoginOrSignin
                inputArr={this.inputArr}
                login={this.state.login}
                value={this.state.credentialValues}
                setInputState={this.setInputState}
                primaryLabel={this.state.screen}
                firebaseAuth={() => this.firebaseAuth()}
              />
            </View>
            <FacebookButton
              AlreadyOrDont={this.AlreadyOrDont}
              primaryLabel={this.state.screen}
              switchBack={this.switchToOther}
            />
          </LinearGradient>
        </Container>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  ParentContainer: {
    flex: 1
  }
});

const _signInAsync = async () => {
  await AsyncStorage.setItem("userToken", "token_abc");
  this.props.navigation.navigate("App");
};

export default LoginSignup;
