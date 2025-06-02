import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  botao: {
    width: '100%',
    backgroundColor: '#fff4',
    padding: 10,
    borderRadius: 16,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 64,
  },
});

export default styles;
