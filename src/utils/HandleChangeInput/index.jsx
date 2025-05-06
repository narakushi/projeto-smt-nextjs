import InsertMaskTel from "../InsertMaskTel";
import IsValidEmail from "../IsValidEmail";
import IsValidTel from "../IsValidTel";
import "./handlechange.css";

const HandleChangeInput = (
  event,
  setTypeMsg,
  setName,
  setEmail,
  setTel,
  setMsg
) => {
  let value = event.target.value;
  const id = event.target.id;
  const classList = event.target.classList;

  if (id === "tipo-mensagem") {
    setTypeMsg(value);
  } else if (id === "name") {
    setName(value);
  } else if (id === "email") {
    setEmail(value);
    !IsValidEmail(value)
      ? classList.add("notValid")
      : classList.remove("notValid");
  } else if (id === "telefone") {
    value = InsertMaskTel(value.toString());
    setTel(value);
    !IsValidTel(value)
      ? classList.add("notValid")
      : classList.remove("notValid");
    event.target.value = value;
  } else if (id === "mensagem") {
    setMsg(value);
  }
};

export default HandleChangeInput;
