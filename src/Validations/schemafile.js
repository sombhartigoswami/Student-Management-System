import * as yup from "yup";
export const schemafile = yup.object({
  // validation rules
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit number"),
  date: yup.string().required("Register Date is required"),
  fees: yup.string().required("Fees Status is required"),
  seat: yup.string().required("Seat Availability is required"),
  seatno: yup.string().required("Seat no is required"),
});
