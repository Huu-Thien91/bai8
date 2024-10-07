import React, { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const formatPhoneNumber = (input) => {
    let cleaned = ('' + input).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return `${match[1]}${match[2] ? '-' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
    }
    return input;
  };

  const handlePhoneChange = (input) => {
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
    validatePhoneNumber(formattedNumber);
  };

  const validatePhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    setIsValid(cleaned.length === 10);
  };

  const handleSubmit = () => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length !== 10) {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ. Vui lòng nhập lại số điện thoại hợp lệ.');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={[styles.input, !isValid && styles.inputError]}
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          keyboardType="numeric"
          placeholder="Nhập số điện thoại của bạn"
          maxLength={12}
        />
        {!isValid && <Text style={styles.errorText}>Số điện thoại không hợp lệ</Text>}

        <View style={styles.buttonContainer}>
          <Button title="Tiếp tục" onPress={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // Your existing styles here...
});

export default SignInScreen;
