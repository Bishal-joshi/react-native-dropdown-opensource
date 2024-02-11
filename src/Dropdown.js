import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { getStyle } from './stylesDropdown';

const CustomDropdown = (props) => {
  // required
const { options, onSelect, selectedOption }=props
// optional
const {dropdownStyle,textStyle,buttonStyle,scroll,itemsVisible}=props

const styles=getStyle(props)

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isDropdownVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isDropdownVisible, fadeAnim]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={{...styles.header,...buttonStyle}}>
        <Text>{selectedOption}</Text>
      </TouchableOpacity>

      <Animated.View style={{ ...styles.dropdown,...dropdownStyle, opacity: fadeAnim }}>
        {isDropdownVisible && (
          <ScrollView>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => handleSelect(option)}>
                <Text style={{...styles.option,...textStyle}}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </Animated.View>
    </View>
  );



};

export default CustomDropdown;
