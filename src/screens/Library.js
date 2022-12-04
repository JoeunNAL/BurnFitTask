import { View, Text, StyleSheet } from 'react-native';

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Ligrary</Text>
    </View>
  );
};
export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
