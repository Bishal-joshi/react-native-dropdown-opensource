import {StyleSheet} from 'react-native';

export function getStyle(props){
    const styles = StyleSheet.create({
        container: {
          position: 'relative',
        },
        header: {
          padding: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
        },
        dropdown: {
          position: 'absolute',
          top: 40, // adjust as needed
          left: 0,
          right: 0,
          zIndex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          backgroundColor: 'white',
          maxHeight:props.scroll?(props.itemsVisible?props.itemsVisible*45:5*45):null
        },
        option: {
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          color:'black'
        },
      });

      return styles
}
