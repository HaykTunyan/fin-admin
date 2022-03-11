import React from "react";
import styled, { css } from "styled-components/macro";
import { rgba } from "polished";
import {
  Box,
  Button,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

// Spacing.
const Typography = styled(MuiTypography)(spacing);
const Spacer = styled.div(spacing);

// Custom Style.
const Card = styled(MuiCard)`
  position: relative;
  margin-bottom: ${(props) => props.theme.spacing(6)};

  ${(props) =>
    props.illustration &&
    props.theme.palette.mode !== "dark" &&
    css`
      background: ${(props) => rgba(props.theme.palette.primary.main, 0.125)};
      color: ${(props) => props.theme.palette.primary.main};
    `}
`;

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

const EachCard = ({
  title,
  amount,
  ViewMore,
  className,
  color,
  SendModal,
  ReceiveModal,
}) => {
  return (
    <Card sx={{ background: className, height: "100%" }}>
      <CardContent onClick={ViewMore}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" sx={{ color: color }}>
            {title}
          </Typography>
          <Spacer mt={3} />
          <Typography variant="subtitle1" sx={{ color: color }}>
            {title}
          </Typography>
        </Box>
        <Box mt={8}>
          <Box display="flex" justifyContent="space-between">
            {SendModal && (
              <Button variant="contained" color="inherit" onClick={SendModal}>
                Send
              </Button>
            )}
            {ReceiveModal && (
              <Button
                variant="contained"
                color="inherit"
                onClick={ReceiveModal}
              >
                Receive
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EachCard;
