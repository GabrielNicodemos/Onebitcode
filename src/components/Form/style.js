import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30
  },

  form: {
    width: "100%",
  },

  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },

  formInput: {
    width: "90%",
    borderRadius: 50,
    height: 40,
    margin: 12,
    paddingLeft: 10,
    backgroundColor: "#f6f6f6",
  },
  
  buttonCalc: {
    backgroundColor: "#FF0043",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },

  TextbuttonCalc: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  errorMesage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },

  exibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  
  listImcs: {
    marginTop: 20,
  },

  resultImcItem: {
    color: "red",
    fontSize: 24,
    height: 50,
    width: "100%",
    paddingRight: 20,
  },

  resultImcText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles;