const InsertMaskTel = (tel) => {
    tel = tel.replace(/\D/g, '');
    tel = tel.replace(/(\d{2})(\d)/, '($1) $2');
    tel = tel.replace(/(\d{5})(\d)/, '$1-$2')

    return tel;
}

export default InsertMaskTel;