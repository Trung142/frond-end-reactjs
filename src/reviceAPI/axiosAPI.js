import axios from './Creatsaxios';
const login = (values) => {
    return axios.post(`/api/v1/user/login`, values);
}
const Listuser = (page) => {
    return axios.get(`/api/v1/user?page=${page}&limit=${5}`);
}
const Users = (page) => {
    return axios.get(`/api/v1/user`);
}
const deleteUser = (id) => {
    return axios.delete(`/api/v1/user/delete?id=${id}`);
}
const updateUser = (values) => {
    return axios.post(`/api/v1/user/create`, values);
}
const editUser = (id, valuse) => {
    return axios.put(`/api/v1/user/update?id=${id}`, valuse);
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
    return axios.get(`/api/v1/product?page=${page}&limit=${8}`);
}
const apicreateProduct = (values) => {
    return axios.post(`/api/v1/create/product`, values);
}
const deleteProducts = (id) => {
    return axios.delete(`/api/v1/delete/product?id=${id}`);
}
const editProduct = (id, value) => {
    return axios.put(`/api/v1//update/product?id=${id}`, value);
}
//services
const apiservices = (page) => {
    return axios.get(`/api/v1/services?page=${page}&limit=${8}`)
}
const serviecs = () => {
    return axios.get(`/api/v1/services`);
}
const apicreateServices = (values) => {
    return axios.post(`/api/v1/create/services`, values);
}
const deleteServices = (id) => {
    return axios.delete(`/api/v1//delete/services?id=${id}`);
}
const editServices = (id, value) => {
    return axios.put(`/api/v1//update/services?id=${id}`, value);
}
// create update application
const apishowapiapoinment = (id) => {
    return axios.get(`/api/v1/v2?id=${id}`);
}
const apiappointment = (value) => {
    return axios.post(`/api/v1/create/appointment`, value);
}
export {
    login, deleteUser, updateUser, editUser, Listuser, Users,
    apicustomer, apicreatecustomer,
    apiemployee, apicreateEmployee, employees,
    apiproduct, apicreateProduct, deleteProducts, editProduct,
    apiservices, apicreateServices, serviecs, deleteServices, editServices,
    apiappointment, apishowapiapoinment
}