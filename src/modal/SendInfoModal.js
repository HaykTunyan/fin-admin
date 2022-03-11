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
import { XCircle } from "react-feather";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { spacing } from "@material-ui/system";

// Custom Style.
const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const TextField = styled(MuiTextField)(spacing);
const Spacer = styled.div(spacing);

// Validation Schema.
const sendValidaion = Yup.object().shape({
  address: Yup.string().required("Name is requrired"),
  amount: Yup.string().required("Name is requrired"),
  tag: Yup.string().required("Name is requrired"),
});

const SendInfoModal = () => {
  const [open, setOpen] = useState(true);
  const [state, setState] = useState({
    address: "",
    amount: "",
    tag: "",
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
          <Typography variant="h5" color="inherit" component="div">
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
                <Spacer my={8} />
                <Typography variant="h5" color="inherit" component="div">
                  Your XRP Address
                </Typography>
                <TextField
                  margin="dense"
                  id="address"
                  defaultValue={state.address}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Send to XRP address"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <Spacer my={8} />
                <Typography variant="h5" color="inherit" component="div">
                  Your Tag
                </Typography>
                <TextField
                  margin="dense"
                  id="phone"
                  defaultValue={state.tag}
                  error={Boolean(touched.tag && errors.tag)}
                  helperText={touched.tag && errors.tag}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Destination tag"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <Spacer my={8} />
                <Typography variant="h4" color="inherit" component="div">
                  Your Amount
                </Typography>
                <TextField
                  margin="dense"
                  id="amount"
                  defaultValue={state.amount}
                  error={Boolean(touched.amount && errors.amount)}
                  helperText={touched.amount && errors.amount}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Amount"
                  type="number"
                  variant="outlined"
                  fullWidth
                />
                <Spacer my={8} />
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

export default SendInfoModal;
