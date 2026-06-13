import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../Api/axios";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemafile } from "../Validations/schemafile";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

function AddEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  // react hook form's all variables
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemafile) });

  // data varible hold all form data
  const submitFun = async (data) => {
    // console.log(data);
    if (id) {
      await Api.put(`/students/${id}`, data);
    } else {
      // add data in file
      await Api.post("/students", data);
    }
    navigate("/users");
  };

  // useEffect hook for Edit Data
  useEffect(() => {
    if (id) {
      Api.get(`/students/${id}`).then((res) => {
        Object.keys(res.data).map((key) => {
          setValue(key, res.data[key]);
        });
      });
    }
  }, [id, setValue]);

  return (
    <div>
      <h3>{id ? "Edit Student Details" : "Add Student Details"}</h3>
      <form onSubmit={handleSubmit(submitFun)}>
        <div>
          <label>Register Date</label>
          <InputText
            type="date"
            {...register("date")}
            style={{ width: "100%" }}
          />
          <small>{errors.date?.message}</small>
        </div>
        <div>
          <label>Name</label>
          <InputText {...register("name")} style={{ width: "100%" }} />
          <small>{errors.name?.message}</small>
        </div>
        <div>
          <label>PhoneNo</label>
          <InputText {...register("phone")} style={{ width: "100%" }} />
          <small>{errors.phone?.message}</small>
        </div>
        <div>
          <label>fees status</label>
          <InputText {...register("fees")} style={{ width: "100%" }} />
          <small>{errors.fees?.message}</small>
        </div>
        <div>
          <label>Seat Availability</label>
          <InputText {...register("seat")} style={{ width: "100%" }} />
          <small>{errors.seat?.message}</small>
        </div>
        <div>
          <label>Seat No</label>
          <InputText {...register("seatno")} style={{ width: "100%" }} />
          <small>{errors.seatno?.message}</small>
        </div>
        <Button label="submit" style={{ marginTop: "5px" }} />
      </form>
    </div>
  );
}
export default AddEdit;

