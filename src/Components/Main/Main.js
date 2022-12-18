import React from "react";
import { Box } from "@mui/material";

import AllPetsDialog from "./AllPetsDialog";
import DialogContainer from "./DialogContainer";
import dog from "../../assets/body1.jpg";
import woman from "../../assets/body2.jpg";
import "../../App.css";

const Main = () => {
  return (
    <Box
      sx={{ padding: { xs: "90px 5vw 20px 5vw", md: "150px 7vw 25px 7vw" } }}
      className="d-grid"
    >
      <div className="row">
        <div className="col col-md-6 my-3">
          <h3>Welcome to the Animal Shelter!</h3>
          <div className="my-4">
            Glad that you care for the animals so much. We make sure that you'll
            not repent your decision of adopting your favorite pet!!
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <div>
              <DialogContainer
                btnProp="btn-primary border-light"
                btnMsg="Adopt"
                dialogTitle="Adopt a pet"
                dialogMsg="What pet do you want to adopt?"
                dialogBtnMsg="REQUEST FOR ADOPTION"
              />
            </div>
            <div>
              <AllPetsDialog />
            </div>
          </div>
        </div>
        <div className="col col-md-2 offset-md-1 pt-4 pb-3">
          <img
            src={dog}
            className="image-fluid"
            alt="dog & cat"
            width="300vw"
          />
        </div>
      </div>

      <Box sx={{ textAlign: { xs: "left", md: "right" } }} className="row my-5">
        <div className="col col-md-9 col-sm-12 offset-md-3">
          <h3>We do take in pets if you can't take care of them !</h3>
          <div className="my-4">
            Lorem epsom msdifcbij wef wef efnwekifbkewjm Wkie febf weubfwef
            wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf
            iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf
            kjsdnfkjesdnf kisekdfieskfic fksdifcekeisdfikes chebsf beskdb
            cfkjebf kjbejk fbwekisf bkewb
          </div>
          <div>
            <DialogContainer
              btnProp="bg-transparent text-black border-dark"
              btnMsg="Give Away"
              dialogTitle="Give Away"
              dialogMsg="What pet do you want to give away?"
              dialogBtnMsg="REQUEST FOR GIVE AWAY"
            />
          </div>
        </div>
      </Box>

      <Box className="row align-items-center mb-3">
        <div className="col col-md-3 offset-1 my-3">
          <img src={woman} alt="woman with dog" width="200px" />
        </div>
        <div className="col col-md-8 text-wrap">
          Lorem epsum difcbij j jebfkejbfewkjbfwkejbfwkefe wef wef efnweki kewj
          wkje febf weubfwef wiuefb ewfu webfuwe bfewufb em ebf
          uewbfiuwemwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe
          fejsdefsjnekdf ksjdnf kjsdnmesdnf kisekdteskfyc fksdifcekeisdtkes
          efiebsf beskdb efkjebf kjbejk fbwekjsf bkewb
        </div>
      </Box>
    </Box>
  );
};

export default Main;
