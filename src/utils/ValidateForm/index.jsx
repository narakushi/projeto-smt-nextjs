
import IsValidEmail from "../IsValidEmail";
import IsValidTel from "../IsValidTel";

const ValidateForm = (typeMsg, name, email, tel, msg, setAlert) => {
  if (typeMsg === "escolha") {
    setAlert("Selecione o tipo de mensagem!");
    return false;
  }
  if (name === "") {
    setAlert("Está faltando você preencher o nome!");
    return false;
  }
  if (email === "") {
    setAlert("Está faltando você preencher o e-mail!");
    return false;
  }
  if (!IsValidEmail(email)) {
    setAlert("E-mail informado é inválido!");
    return false;
  }
  if (tel === "") {
    setAlert("Está faltando você preencher o telefone!");
    return false;
  }
  if (!IsValidTel(tel)) {
    setAlert("O telefone informado é inválido, informe outro por gentileza");
    return false;
  }
  if (msg === "") {
    setAlert("Está faltando você preencher o campo de mensagem!");
    return false;
  }
  setAlert("");
  return true;
};

export default ValidateForm;
