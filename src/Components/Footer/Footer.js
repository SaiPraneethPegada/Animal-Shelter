import React from "react";

import { Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";

import DialogContainer from "../Main/DialogContainer";

const pages = ["home", "contact_Us"];
const misc = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "5vw 8vw",
      }}
    >
      <Box
        sx={{
          display: "grid",
        }}
      >
        <div className="row">
          <div className="col mt-3 col-md-4 col-sm me-5">
            <h4>ANIMAL SHELTER</h4>
            <div className="text-muted my-4">
              <p className="mb-0">
                One of the best animal shelter places in India.
              </p>
              <p className="mb-0">We're recognized by the government.</p>
              <p>Please take a pledge to take care of these pets !</p>
            </div>
            <div>
              <DialogContainer
                btnProp="btn-primary border-light"
                btnMsg="Adopt"
                dialogTitle="Adopt a pet"
                dialogMsg="What pet do you want to adopt?"
                dialogBtnMsg="REQUEST FOR ADOPTION"
              />
            </div>
          </div>

          <Box sx={{ display: { sx: "block", md: "none" } }}>
            <hr />
          </Box>

          <div className="col mt-3 col-md-5 col-sm me-3">
            <div>
              <h6>GET IN TOUCH</h6>
              <div className="text-muted">
                <div className="me-5 my-4 d-flex">
                  <LocationOnOutlinedIcon
                    style={{ color: "white" }}
                    className="me-2"
                  />
                  <div>
                    Ilesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                    woiwemfwokm fwe w ecen cloenwo we - 355233
                  </div>
                </div>
                <div className="me-5 my-4 d-flex">
                  <MailOutlineIcon
                    style={{ color: "white" }}
                    className="me-2"
                  />
                  {/* <a href="mailto: animalshelter@gmail.com">
                    animalshelter@gmail.com
                  </a> */}
                  animalshelter@gmail.com
                </div>
              </div>
            </div>
            <div className="my-4">
              <h6>FOLLOW US</h6>
              <div className="d-flex gap-3 my-3">
                <NavLink to="/" style={{ color: "inherit" }}>
                  <TwitterIcon />
                </NavLink>
                <NavLink to="/" style={{ color: "inherit" }}>
                  <FacebookRoundedIcon />
                </NavLink>
                <NavLink to="/" style={{ color: "inherit" }}>
                  <LinkedInIcon />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col col-md-2 mt-3 col-sm">
            <h6 className="text-nowrap">QUICK LINKS</h6>
            <div className="text-muted my-4">
              {pages.map((page) => (
                <div className="my-2" key={page}>
                  <NavLink
                    to={`/${page}`}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>

      <hr />

      <Box className="d-flex my-3 justify-content-between flex-wrap">
        <div className="text-muted mt-3">Copyright @2023. Animal Shelter</div>
        <div className="d-flex gap-3 mt-3 flex-wrap">
          {misc.map((item) => {
            return (
              <div key={item}>
                <NavLink
                  to="/"
                  style={{
                    color: "inherit",
                  }}
                >
                  {item}
                </NavLink>
              </div>
            );
          })}
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
