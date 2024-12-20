import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "75%",
    height: 40,
    alignItems: "center",
    paddingLeft: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  inputText: {
    paddingLeft: 10,
    width: "100%",
    fontWeight: "bold",
  },
  iconEye: {
    marginLeft: -45, // Espaçamento entre o "olhinho" e o campo de texto
  },
});

export default styles;
