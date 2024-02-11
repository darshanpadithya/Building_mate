import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const PaymentScreen = () => {
  const handlePaytmPayment = () => {
    console.log('Processing Paytm payment...');
  };

  const handleGPayPayment = () => {
    console.log('Processing GPay payment...');
  };

  const handlePhonePePayment = () => {
    console.log('Processing PhonePe payment...');
  };

  const handleCardPayment = () => {
    console.log('Processing Card payment...');
  };
  const handlePayment = () => {
    console.log('Processing your payment...');
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Payment Options</Text>

        <TouchableOpacity onPress={handlePaytmPayment} style={styles.paymentOption}>
          <Image source={require('./../images/paytm.jpg')} style={styles.paymentLogo} />
          <Text>Paytm</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGPayPayment} style={styles.paymentOption}>
          <Image source={require('./../images/gpay.jpg')} style={styles.paymentLogo} />
          <Text>Google Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePhonePePayment} style={styles.paymentOption}>
          <Image source={require('./../images/phonepay.jpg')} style={styles.paymentLogo} />
          <Text>PhonePe</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCardPayment} style={styles.paymentOption}>
          <Icon name="credit-card" type="font-awesome" size={30} />
          <Text>Credit/Debit Card</Text>
        </TouchableOpacity>

        <Button title="Pay Now" onPress={handlePayment} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE8C6',
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  paymentLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default PaymentScreen; 










