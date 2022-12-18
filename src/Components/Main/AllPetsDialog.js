import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CancelIcon from "@mui/icons-material/Cancel";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";

import DogsData from "../../Data/DogsData.json";
import CatsData from "../../Data/CatsData.json";

export default function AllPetsDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [petData, setPetData] = useState([]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabs = (e, val) => {
    // console.log(val);
    setValue(val);
  };

  useEffect(() => {
    if (value === 0) {
      setPetData(DogsData);
    } else {
      setPetData(CatsData);
    }
  }, [value]);

  return (
    <Box className="dialogBg">
      <Button
        onClick={handleClickOpen}
        className="bg-transparent text-black border-dark"
      >
        What all pets do we have?
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="responsive-dialog-title"
      >
        <div className="d-flex justify-content-between">
          <DialogTitle id="responsive-dialog-title">
            {"What all pets do we have ?"}
          </DialogTitle>
          <Button
            className="bg-transparent text-black border-0 me-3"
            autoFocus
            onClick={handleClose}
          >
            <CancelIcon />
          </Button>
        </div>
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Dogs" />
          <Tab label="cats" />
        </Tabs>
        <TabPanel value={value} index={value}>
          <Table
            sx={{
              "& .MuiTableRow-root:hover": {
                backgroundColor: "silver",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Breed</TableCell>
                <TableCell>Age (Months)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {petData.map((pet) => {
                return (
                  <TableRow key={pet.id}>
                    <TableCell>{pet.name}</TableCell>
                    <TableCell>{pet.breed}</TableCell>
                    <TableCell>{pet.age}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabPanel>
      </Dialog>
    </Box>
  );
}

function TabPanel({ children, value, index }) {
  return <div>{value === index ? children : ""}</div>;
}
