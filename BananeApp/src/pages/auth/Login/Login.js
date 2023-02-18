import React, {useState} from "react";
import { SafeAreaView, View, Text } from "react-native";
import {Formik} from 'formik';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFromValues = {
    usermail: '',
    password: '',
}

const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    function handleSignUp() {
        navigation.navigate('SignPage');
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail, 
                formValues.password);
            setLoading(false);
        } catch (error) {
           // console.log(error);
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "warning",
              });
            setLoading(false);
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <Input
                onType={handleChange('usermail')}
                value={values.usermail} 
                placeholder="e-postanızı giriniz.."/>
                <Input
                onType={handleChange('password')}
                value={values.password} 
                placeholder="şifrenizi giriniz.." 
                isSecure/>
                <Button text="Giriş Yap" theme="secondary" onPress={handleSubmit} loading={loading}/>
              </>
            )}
            </Formik>
            <Button text="Kayıt Ol" theme="primary" onPress={handleSignUp}/>
        </SafeAreaView>
    )
};

export default Login;