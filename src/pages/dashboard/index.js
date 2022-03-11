import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components/macro";
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { getTotalAmounts_req } from "../../api/dashboardAPI";
import EachCard from "../../components/EachCard";
import SendInfoModal from "../../modal/SendInfoModal";
import ReceiveInfoMidal from "../../modal/ReceiveInfoMidal";

// Spacing.
const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

const DashboardPage = () => {
  // Hooks
  const [totalAmounts, setTotalAmounts] = useState({});
  const [openSend, setOpenSend] = useState(false);
  const [openRecive, setOpenRecive] = useState(false);

  const SendModal = () => {
    setOpenSend(!openSend);
  };

  const ReceiveModal = () => {
    setOpenRecive(!openRecive);
  };

  async function getTotalAmounts() {
    try {
      const response = await getTotalAmounts_req();
      if (response) {
        setTotalAmounts(response);
      }
    } catch (e) {}
  }

  useEffect(() => {
    getTotalAmounts();
  }, []);

  return (
    <Fragment>
      <Helmet title="Dashboard" />
      <Grid container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
      </Grid>
      <Divider my={6} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <EachCard
            title={"Coin Name"}
            chip="100%"
            className={"#376fd0"}
            color={"#FFFFFF"}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <EachCard
            title={" Coins Balance"}
            chip="100%"
            className={"#376fd0"}
            color={"#FFFFFF"}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <EachCard
            title={"Actual USD value"}
            chip="100%"
            className={"#376fd0"}
            color={"#FFFFFF"}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <EachCard
            title={"Send | Receive"}
            chip="100%"
            className={"#376fd0"}
            color={"#FFFFFF"}
            SendModal={SendModal}
            ReceiveModal={ReceiveModal}
          />
        </Grid>
      </Grid>
      {openSend && <SendInfoModal />}
      {openRecive && <ReceiveInfoMidal />}
    </Fragment>
  );
};

export default DashboardPage;
