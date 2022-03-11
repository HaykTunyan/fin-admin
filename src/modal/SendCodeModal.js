import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  IconButton as MuiIconButton,
  Box,
  Button,
  TextField as MuiTextField,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { spacing } from "@material-ui/system";
import { XCircle } from "react-feather";
import { useNavigate } from "react-router-dom";

// Custom Style.
const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;
const TextField = styled(MuiTextField)(spacing);

// Validation Schema.
const sendValidaion = Yup.object().shape({
  phone: Yup.string().required("Name is requrired"),
});

const SendCode = () => {
  // Hooks.
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [state, setState] = useState({
    phone: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(" value", values);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    navigate("/dashboard");
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} size="larg">
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="inherit" component="div">
            Send Information
          </Typography>
          <IconButton aria-label="close" color="primary" onClick={handleClose}>
            <XCircle />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              ...state,
            }}
            initialForms={state}
            validationSchema={sendValidaion}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <TextField
                  margin="dense"
                  id="phone"
                  defaultValue={state.phone}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Success Code"
                  type="phone"
                  variant="outlined"
                  fullWidth
                  my={8}
                />

                <Box sx={{ display: "flex" }}>
                  <Button variant="contained" type="submit" fullWidth>
                    Send
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SendCode;
