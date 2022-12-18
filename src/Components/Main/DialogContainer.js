import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CancelIcon from "@mui/icons-material/Cancel";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import CatsData from "../../Data/CatsData.json";
import DogsData from "../../Data/DogsData.json";
import { addUserData, createIndexedDB } from "./IndexedDB";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  petType: "",
  breed: "",
};

export default function DialogContainer({
  btnProp,
  btnMsg,
  dialogTitle,
  dialogMsg,
  dialogBtnMsg,
}) {
  const [open, setOpen] = useState(false);
  const [breedList, setBreedList] = useState([]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    formik.resetForm();
  };

  const dogsBreedsList = DogsData.map((dog) => dog.breed);
  const catsBreedsList = CatsData.map((cat) => cat.breed);

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (values.fullName.length < 6) {
      errors.fullName = "Minimum 6 characters required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length < 10 || values.phone.length > 14) {
      errors.phone = "Number should be 10 digits length";
    }

    if (!values.petType) {
      errors.petType = "Required";
    }

    if (!values.breed) {
      errors.breed = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      // console.log(values);
      if (btnMsg === "Adopt") {
        // user filled adopt form data is sent to the IndexedDB.js to add data in DB.
        addUserData(values, btnMsg);
        alert("Adopt input details have been saved successfully in IndexedDB!");
      } else {
        // user filled giveaway form data is sent to the IndexedDB.js to add data in DB.
        addUserData(values, btnMsg);
        alert(
          "Giveaway input details have been saved successfully in IndexedDB!"
        );
      }
      formik.resetForm();
    },
  });

  useEffect(() => {
    // as soon as the dialog container opens, IndexedDB will be created for the 1st time.
    createIndexedDB();
  }, []);

  useEffect(() => {
    formik.values.petType === "Dog"
      ? setBreedList(dogsBreedsList)
      : formik.values.petType === "Cat"
      ? setBreedList(catsBreedsList)
      : setBreedList([]);
    // eslint-disable-next-line
  }, [formik.values.petType]);

  return (
    <Box>
      <Button onClick={handleClickOpenDialog} className={btnProp}>
        {btnMsg}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
        aria-labelledby="responsive-dialog-title"
      >
        <div className="d-flex justify-content-between">
          <DialogTitle id="responsive-dialog-title" className="fs-3">
            {dialogTitle}
          </DialogTitle>
          <Button
            className="bg-transparent text-black border-0 me-3"
            autoFocus
            onClick={handleCloseDialog}
          >
            <CancelIcon />
          </Button>
        </div>
        <DialogTitle>{dialogMsg}</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup className="mx-4 d-flex flex-column">
            <FormControl className="w-75 my-2">
              <InputLabel id="petType">Pet Type: *</InputLabel>
              <Select
                labelId="petType"
                id="petType"
                name="petType"
                value={formik.values.petType}
                label="Pet Type: *"
                error={formik.touched.petType && Boolean(formik.errors.petType)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <MenuItem value={"Dog"}>Dog</MenuItem>
                <MenuItem value={"Cat"}>Cat</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="w-75 my-2">
              <InputLabel id="breed">Breed: *</InputLabel>
              <Select
                labelId="breed"
                id="breed"
                name="breed"
                value={formik.values.breed}
                error={formik.touched.breed && Boolean(formik.errors.breed)}
                onBlur={formik.handleBlur}
                label="Breed: *"
                onChange={formik.handleChange}
              >
                {breedList?.length > 0 ? (
                  breedList?.map((item) => {
                    return (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem>
                    Please select a "Pet Type" to see the options.
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </FormGroup>
          <DialogTitle>Please fill in your details</DialogTitle>

          <FormGroup className="mx-4 d-flex flex-column">
            <TextField
              id="outlined-basic"
              label="Full Name *"
              name="fullName"
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              onChange={formik.handleChange}
              type={"text"}
              variant="outlined"
              className="w-75 my-2"
            />
            <TextField
              id="outlined-basic"
              label="Email *"
              type={"email"}
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
              className="w-75 my-2"
            />
            <TextField
              id="outlined-basic"
              label="Phone *"
              name="phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type={"tel"}
              variant="outlined"
              className="w-75 my-2"
            />

            <div className="d-flex justify-content-end my-4">
              <Button type="submit" className="btn-primary border-light">
                {dialogBtnMsg}
              </Button>
            </div>
          </FormGroup>
        </form>
      </Dialog>
    </Box>
  );
}
