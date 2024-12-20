import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    width: "100%",
    height: 40,
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 30,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: "#E5E7EB",
    borderWidth: 1,
  },
  inputText: {
    paddingLeft: 10,
    width: "100%",
    fontWeight: "bold",
    color: "#828385",
  },
  leftIcon: {
    marginRight: 10, // Espaço entre o ícone e o campo de texto
  },
  eyeIconContainer: {
    marginLeft: 10,
    padding: 5, // Para aumentar a área clicável
  },
  icon: {
    marginLeft: 10, // Adiciona espaço entre os ícones
  },
});

export default styles;
