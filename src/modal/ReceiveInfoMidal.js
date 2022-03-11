import React, { useState } from "react";
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
import QR from "../assets/svg/qr.svg";

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

const ReceiveInfoMidal = () => {
  const [open, setOpen] = useState(true);
  const [state, setState] = useState({
    phone: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(" value", values);
    // setTimeout(() => {
    //   setOpen(false);
    // }, 1000);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="inherit" component="div">
            Receive Information
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
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img src={QR} alt="QR" width={180} height={180} />
                </Grid>
                <Grid
                  sx={{ width: "100%", textAlign: "center", padding: "25px" }}
                >
                  <Typography variant="h4" color="inherit" component="div">
                    Your XRP Address
                  </Typography>
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
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClose}
                    sx={{ width: "150px" }}
                    type="button"
                  >
                    Back
                  </Button>
                  <Box mx={3} />
                  <Button
                    sx={{ width: "150px" }}
                    variant="contained"
                    type="submit"
                  >
                    Continue
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

export default ReceiveInfoMidal;
