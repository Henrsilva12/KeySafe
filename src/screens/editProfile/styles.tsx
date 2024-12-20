import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#87CEFA",
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 20,
    marginBottom: 20,
  },
  viewText: {
    marginBottom: 30,
    alignItems: "center",
  },
  viewTitle: {
    marginBottom: 30,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 2,
  },
  textText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -10,
  },
  inputContainer: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonAlterar: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#124DBC",
  },
  buttonEdit: {
    backgroundColor: "#124DBC",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonContainer: {
    position: "absolute", // Para fixar o botão na parte inferior
    bottom: -200, // Distância do final da tela
    alignSelf: "center", // Centraliza o botão horizontalmente
    width: "90%", // Largura opcional para alinhar melhor
    margin: 10,
    justifyContent: "flex-start",
  },

  buttonExcluir: {
    backgroundColor: "#C50F1F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row", // Alinha os botões verticalmente
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: -1,
    color: "#274BDB",
    padding: 10,
  },
  buttonRow: {
    marginRight: 100,
    marginLeft: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textDel: {
    fontSize: 20,
    color: "#000",
    margin: 20,
    marginTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
export default styles;
