import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './AddTask.styles';

const AddTask = props => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={props.inputValue}
          onChangeText={props.onText}
          placeholder={'Yapılacak...'}
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.button} onPress={props.addItem}>
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;
