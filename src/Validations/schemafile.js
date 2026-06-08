import * as yup from "yup"
export const schemafile = yup.object({
    // validation rules
    name:yup.string().required("Name is required"),
    email:yup.string().email("Invalid email").required("Email is required"),
    age:yup.number().positive().integer().required("Age is required"),

})