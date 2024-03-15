import axios from "./Creatsaxios";
const login = (values) => {
    return axios.post(`/api/v1/user/login`, values);
}
const Listuser = (page) => {
    return axios.get(`/api/v1/user?page=${page}&limit=${5}`);
}
const deleteUser = (id) => {
    return axios.delete(`/api/v1/user/delete/` + id);
}
const updateUser = (values) => {
    return axios.post(`/api/v1/user/1/`, values);
}
const editUser = (id, valuse) => {
    return axios.put(`/api/v1/user/update/` + id, valuse);
}
//customer
const apicustomer = (page) => {
    return axios.get(`/api/v1/customer?page=${page}&limit=${6}`);
}
const apicreatecustomer = (values) => {
    return axios.post(`/api/v1/create`, values)
}
//Employee
const apiemployee = (page) => {
    return axios.get(`/api/v1/employees?page=${page}&limit=${6}`);
}
const employees = () => {
    return axios.get(`/api/v1/employees`);
}
const apicreateEmployee = (values) => {
    return axios.post(`/api/v1/create/employ`, values);
}
//product
const apiproduct = (page) => {
    return axios.get(`/api/v1/product?page=${page}&limit=${6}`);
}
const apicreateProduct = (values) => {
    return axios.post(`/api/v1/create/product`, values);
}
//services
const apiservices = (page) => {
    return axios.get(`/api/v1/services?page=${page}&limit=${6}`)
}
const serviecs = () => {
    return axios.get(`/api/v1/services`);
}
const apicreateServices = (values) => {
    return axios.post(`/api/v1/create/services`, values);
}
// create update application
const apishowapiapoinment = (id) => {
    return axios.get(`/api/v1/v2/` + id);
}
const apiappointment = (value) => {
    return axios.post(`/api/v1/create/appointment`, value);
}
export {
    login, deleteUser, updateUser, editUser, Listuser,
    apicustomer, apicreatecustomer,
    apiemployee, apicreateEmployee, employees,
    apiproduct, apicreateProduct,
    apiservices, apicreateServices, serviecs, apiappointment, apishowapiapoinment
}