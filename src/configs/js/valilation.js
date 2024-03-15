export const valiLation = (values) => {
    let error = {};
    var emai_partern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var password_partern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    // check error
    if (values.name === "") {
        error.name = "không được bỏ trống!";
    }
    else {
        error.name = "";
    }
    //check email
    if (values.email === "") {
        error.email = "không được bỏ trống!";
    } else if (!emai_partern.test(values.email)) {
        error.email = "email không đúng định dạng!";
    }
    else {
        error.email = "";
    }
    // check error
    if (values.password === "") {
        error.password = "không được bỏ trống!";
    } else if (!password_partern.test(values.password)) {
        error.password = "password phải có ít nhất 8 ký tự và chữ hoa chữ thương!";
    }
    else {
        error.password = "";
    }
    return error;
}