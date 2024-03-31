import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import BillForm from "./BillForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submit } from "../../Store/Slices/formSlice";
import Toast from "../../Components/Toast";

const addressValidation = Yup.object().shape({
  zipCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(10, "Must be exactly 10 digits")
    .required("Required"),
  street: Yup.string().required("Required"),
  unit: Yup.string(),
  number: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .positive("Must be a positive number")
    .required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  neighborhood: Yup.string().required("Required"),
  paymentMethod: Yup.string()
    .oneOf(["Cash", "Debit Card", "Credit Card"])
    .required("Please choose a payment method"),
});
export default function Checkout() {
  const [toast, setToast] = useState(false);
  const handleToast = (message) => {
    setToast(message);
  };
  const dispatch = useDispatch();
  const [validation, setValidation] = useState(false);
  const handleValidation = () => {
    setValidation(true);
  };
  const { handleSubmit, values, handleChange, errors, setFieldValue } =
    useFormik({
      initialValues: {
        zipCode: "",
        street: "",
        number: "",
        unit: "",
        neighborhood: "",
        city: "",
        state: "",
        paymentMethod: "",
      },
      validationSchema: addressValidation,
      validateOnChange: validation,
      validateOnBlur: false,
      onSubmit: () => {
        dispatch(submit(values));
        window.location.replace("/success");
      },
    });
  return (
    <>
      <Box sx={{ backgroundColor: "#FAFAFA", minHeight: "100vh" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            paddingTop: "50px",
          }}
          component={"form"}
          onSubmit={handleSubmit}
        >
          <Box sx={{ width: { xs: "100%", md: "60%" } }}>
            <Typography
              variant="h6"
              component="p"
              marginBottom={2}
              textTransform={"capitalize"}
            >
              Complete your order
            </Typography>
            <AddressForm
              values={values}
              handleChange={handleChange}
              errors={errors}
            />
            <PaymentForm
              paymentMethod={values.paymentMethod}
              handlePaymentMethod={setFieldValue}
              errors={errors.paymentMethod}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <BillForm
              handleValidation={handleValidation}
              handleToast={handleToast}
            />
          </Box>
        </Container>
      </Box>
      <Toast toastMessage={toast}/>
    </>
  );
}
