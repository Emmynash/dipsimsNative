
import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{marginTop: 22,  backgroundColor: "#3599d7" }}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{ width: 200}}>Welcome to Dipsims</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Image
                style={{  width: 370, height: 150, marginBottom: 120, marginTop: 120, marginLeft: 3 }}
                source={require('../../assets/Logo/dipsims.png')}
            /> 
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>The Next Generation</Text>
                <Text style={{fontSize: 20}}>School Management Software</Text>
            </View> 
        </Content>
        <Footer>
          <FooterTab>
            <Button full light>
              <Text onPress={() => this.props.navigation.navigate("signUp")}>Proceed</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: "bold",
  },
});
