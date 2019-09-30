import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import { Input, Button, Icon, Card } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';

// import KeyboardShift from '../../keyboardShift';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// const BG_IMAGE = require('../../../assets/logos/slider1.jpg');

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date:"",
            fullName: "",
            username: "",
            email: "",
            organ: "",           
            phone: '',
            password: "",
            gender: "",
            address: "",
            phone_valid: true,
            password_valid: true,
            email_valid: true,
            username_valid: true,
            organ_valid: true,
            login_failed: false,
            showLoading: false,
        };
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    validatePhone(phone) {
        if (phone.length !== 11) {
            return this.setState({ phone_valid: false });
        }

        return phone;
    }

    
   submitSignupCredentials = async () => {
       const { showLoading, email, phone } = this.state;
       const url = 'https://us-central1-serve-ng.cloudfunctions.net/';

      try {
        //  await axios.post(`${url}createUser`, { email, phone });
        //  await axios.post(`${url}oneTimePassword`, { email, phone });
          console.log('Account Created!');
          return this.props.navigation.navigate("biometrics");
      } catch (error) {
          console.log(error)
          alert(`signup error: email or phone number already exist! `);
      }
      

       this.setState({
           showLoading: !showLoading,
       });
   }

    render() {
        const { email, 
            phone, email_valid, 
            organ_valid, 
            username_valid, 
            phone_valid, 
            showLoading, 
            fullName, 
            date,
            password_valid,
            password,
            gender,
            address
         } = this.state;

        return (
           
                    <View style={styles.container}>
                        <ImageBackground  style={styles.bgImage}>
                            <View style={styles.signUpView}>
                                <View style={styles.signUpTitle}>    
                                    <Image
                                        style={{  width: 200, height: 80, marginBottom: 80 }}
                                        source={require('../../../assets/Logo/dipsims.png')}
                                    /> 
                                </View>
                                <View style={styles.signUpInput}>
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="user"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={fullName => this.setState({ fullName })}
                                        value={fullName}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Full Name"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="ascii-capable"
                                        returnKeyType="next"
                                        ref={input => (this.fullNameInput = input)}
                                        onSubmitEditing={() => {
                                            // this.setState({ email_valid: this.validateEmail(fullName) });
                                            this.emailInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            fullName ? null : 'Please enter a valid Name'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="envelope-square"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={email => this.setState({ email })}
                                        value={email}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Email"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        ref={input => (this.emailInput = input)}
                                        onSubmitEditing={() => {
                                            this.setState({ email_valid: this.validateEmail(email) });
                                            this.passwordInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            email_valid ? null : 'Please enter a valid email address'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="lock"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={password => this.setState({ password })}
                                        value={password}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Password"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="visible-password"
                                        returnKeyType="next"
                                        ref={input => (this.passwordInput = input)}
                                        onSubmitEditing={() => {
                                            this.setState({ password_valid: this.validatePassword(password) });
                                            this.phoneInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            password_valid ? null : 'Please enter a valid Password'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="phone"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 20 }}
                                        onChangeText={phone => this.setState({ phone })}
                                        value={phone}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        secureTextEntry={false}
                                        keyboardAppearance="light"
                                        placeholder="Phone"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="phone-pad"
                                        returnKeyType="done"
                                        ref={input => (this.phoneInput = input)}
                                        blurOnSubmit={true}
                                        placeholderTextColor="white"
                                        onSubmitEditing={() => {
                                            this.setState({ phone_valid: this.validatePhone(phone) });
                                        }}
                                        errorMessage={
                                            phone_valid ? null : 'Please enter a valid phone number'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="calendar"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={address => this.setState({ address })}
                                        value={address}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Address"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="ascii-capable"
                                        returnKeyType="next"
                                        ref={input => (this.fullNameInput = input)}
                                        onSubmitEditing={() => {
                                            // this.setState({ email_valid: this.validateEmail(email) });
                                            this.genderInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            address ? null : 'Please enter a valid address'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="user"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={gender => this.setState({ gender })}
                                        value={gender}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Gender"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="ascii-capable"
                                        returnKeyType="next"
                                        ref={input => (this.genderInput = input)}
                                        onSubmitEditing={() => {
                                            // this.setState({ email_valid: this.validateEmail(email) });
                                            this.dateInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            gender ? null : 'Please select gender'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="user"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={date => this.setState({ date })}
                                        value={date}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Date of Birth"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="ascii-capable"
                                        returnKeyType="next"
                                        ref={input => (this.dateInput = input)}
                                        onSubmitEditing={() => {
                                            // this.setState({ email_valid: this.validateEmail(email) });
                                            // this.phoneInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            gender ? null : 'Please enter a valid Date of Birth'
                                        }
                                    />
                                    {/*<View style={styles.dateItems}>
                                        <Text style={{color: "#b0b0b0", marginBottom: 4}}>DOB</Text>
                                    <DatePicker
                                        containerStyle={{ marginVertical: 15 }}
                                        style={{width: 200}}
                                        date={date}
                                        placeholder="DOB"
                                        mode="date"
                                        format="YYYY-MM-DD"
                                        minDate="1930-01-01"
                                        maxDate="1999-01-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0,
                                            height: 0, 
                                            opacity: 0
                                        },
                                        placeholderText: {
                                            fontSize: 12
                                        },
                                        dateInput: {
                                            marginLeft: 0,
                                            marginVertical: 15,
                                            borderWidth: 0,
                                            borderBottomWidth: 0
                                        }
                                        // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => {this.setState({date: date})}}
                                        ref={input => (this.dateInput = input)}
                                        onSubmitEditing={() => {
                                        this.setState({ date: date });
                                        }}
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            date ? null : "Date of Birth is required!"
                                        }
                                    />
                                    <Icon
                                                name="calendar"
                                                type="font-awesome"
                                                color="#3599d7"
                                                size={20}
                                                marginBottom={7}
                                                marginLeft={14}
                                    />
                                 </View>*/}
                                </View>
                                <Button
                                    title="SIGN UP"
                                    activeOpacity={1}
                                    underlayColor="transparent"
                                    onPress={this.submitSignupCredentials}
                                    loading={showLoading}
                                    loadingProps={{ size: 'small', color: 'white' }}
                                    disabled={!email_valid || !phone_valid || !username_valid || !organ_valid}
                                    buttonStyle={{
                                        height: 50,
                                        width: 350,
                                        backgroundColor: 'transparent',
                                        borderWidth: 2,
                                        borderColor: 'white',
                                        borderRadius: 30,
                                        marginTop: 150
                                    }}
                                    containerStyle={{ marginVertical: 10 }}
                                    titleStyle={{ fontWeight: 'bold', color: 'white' }}
                                />
                                <View style={styles.footerView}>
                                    <Text style={{ color: 'grey' }}>Already have an Account?</Text>
                                    <Button
                                        title="Log in"
                                        type="clear"
                                        activeOpacity={0.5}
                                        titleStyle={{ color: 'white', fontSize: 15 }}
                                        containerStyle={{ marginTop: -10 }}
                                        onPress={() => this.props.navigation.navigate("signIn")}
                                    />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                     
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    signUpView: {
        marginTop: 30,
        backgroundColor: 'transparent',
        width: 350,
        height: 900,
    },
    signUpTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    supplicantDet: {
        marginTop: 20,
        backgroundColor: 'transparent',
        width: 350,
        height: 500,
        marginLeft: 10,
        alignItems: "center"
      },
    signUpInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView: {
        marginTop: 0,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});