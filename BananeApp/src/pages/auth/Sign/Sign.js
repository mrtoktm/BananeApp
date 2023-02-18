import React, {useState} from "react";
import { SafeAreaView, View, Text } from "react-native";
import {Formik} from 'formik';
import styles from './Sign.style';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFromValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const Sign = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    function handleLogin() {
        navigation.goBack();
    }

    async function handleFormSubmit(formValues) {
        if(formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: "warning",
              });
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail, 
                formValues.password);
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: "success",
                });
            navigation.navigate('LoginPage');
            setLoading(false);
        } catch (error) {
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
                <Input
                onType={handleChange('repassword')}
                value={values.repassword} 
                placeholder="şifrenizi tekrar giriniz.."
                isSecure />
                <Button 
                text="Giriş Yap" 
                theme="secondary" 
                loading={loading} 
                onPress={handleSubmit}/>
              </>
            )}
            </Formik>
            <Button text="Geri" theme="primary" onPress={handleLogin}/>
        </SafeAreaView>
    )
};

export default Sign;