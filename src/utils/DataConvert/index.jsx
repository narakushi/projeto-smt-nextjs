const addZeros = (day) => {
  return day < 10 ? `0${day}` : day;
}

const DataConvert = (date, dateCurrent) => {
  if (typeof date == "string") {
    const dateString = date; // Formato: DD/MM/YYYY
    const [day, month] = dateString.split("/").map(Number);
    date = new Date(2024, month - 1, day); // Mês é 0-indexado
  }

  const numMonth = date.getMonth();
  const day = addZeros(date.getDate());
  const year = date.getFullYear();
  

  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const weekDay = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  return `${day} de ${dateCurrent ? months[numMonth]: months[numMonth].substring(0, 3)} de ${year}`
};

export default DataConvert;
