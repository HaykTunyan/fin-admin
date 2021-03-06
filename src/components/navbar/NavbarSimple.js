import React, { Fragment } from "react";
import styled, { withTheme } from "styled-components/macro";
import {
  Grid,
  Hidden,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

// Custom Style.
const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const NavbarSimple = ({ onDrawerToggle }) => {
  return (
    <Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden lgUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default withTheme(NavbarSimple);
