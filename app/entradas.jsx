import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../src/styles/styles.jsx";

export default function entradas() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("./assets/images/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Olá, Mundo!</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.replace("/")}>
          <Text style={styles.textoBotao}>Voltar para Página inicial</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
