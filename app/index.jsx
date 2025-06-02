import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../src/styles/styles.jsx";

export default function index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("./assets/images/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem vindo de volta Nome</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("bancos")}
        >
          <Text style={styles.textoBotao}>Bancos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("extrato")}
        >
          <Text style={styles.textoBotao}>Extrato</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("entradas")}
        >
          <Text style={styles.textoBotao}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("saidas")}
        >
          <Text style={styles.textoBotao}>Saidas</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
