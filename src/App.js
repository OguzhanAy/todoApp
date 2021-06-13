import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AddTask from './components/AddTask';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setValue] = useState('');
  const [count, setCount] = useState(0);

  const onChange = text => {
    setValue(text);
  };

  useEffect(() => {
    const activeList = todos.filter(item => item.active);
    setCount(activeList.length);
  }, [setCount, todos]);

  const handleAddTodo = text => {
    if (title !== '') {
      setTodos(prevTodo => {
        return [
          {
            value: title,

            id: Math.random().toString(),
            active: true,
          },
          ...prevTodo,
        ];
      });
      setValue('');
    }
  };

  function deleteTodoItem(id) {
    const filteredTodos = todos.filter(item => item.id !== id);
    setTodos(filteredTodos);
  }

  const toggleComplete = i => {
    setTodos(
      todos.map((todo, k) =>
        k === i ? {...todo, active: !todo.active} : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.big_container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>Yapılacaklar</Text>
        </View>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{count}</Text>
        </View>
      </View>
      <ScrollView>
        {todos.map(({value, active, id}, i) => (
          <TouchableOpacity
            style={active ? styles.item : styles.item2}
            key={id}
            onPress={() => toggleComplete(i)}
            onLongPress={() => deleteTodoItem(id)}>
            <Text style={active ? styles.text : styles.text2}>{value}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <AddTask
        inputValue={title}
        onText={onChange}
        addItem={() => setValue(handleAddTodo(title))}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#102027'},
  big_container: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {color: '#ffa500', fontSize: 35, fontWeight: 'bold', margin: 10},
  item: {backgroundColor: '#7da453', margin: 10, padding: 7, borderRadius: 10},
  item2: {backgroundColor: '#37474f', margin: 10, padding: 7, borderRadius: 10},
  text: {color: 'white', fontSize: 25},
  text2: {color: '#808080', textDecorationLine: 'line-through', fontSize: 25},
});
