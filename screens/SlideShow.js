import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';


const SlideShow = () => {
  const images = [
    require('./../images/Slideshow1.png'),
    require('./../images/Slideshow2.png'),
    // Add more image paths here
  ];

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slide:{

  },
  image: {
    width: '100%', // Adjust image size as needed
    height: 230, // Adjust image height as needed
    resizeMode: 'contain',
  },
});

export default SlideShow;
