import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Input.style';

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
            autoCapitalize="none"
            placeholder={placeholder}
            onChangeText={onType}
            value={value}
            secureTextEntry={isSecure}
            placeholderTextColor={"black"} />
            <Icon name={iconName} size={25} color="black" />
        </View>
    )
};

export default Input;