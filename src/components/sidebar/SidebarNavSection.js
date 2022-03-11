import React from "react";
import styled from "styled-components/macro";
import { Typography } from "@material-ui/core";
import SidebarNavList from "./SidebarNavList";

const Title = styled(Typography)`
  color: ${(props) => props.theme.sidebar.color};
  font-size: ${(props) => props.theme.typography.caption.fontSize};
  padding: ${(props) => props.theme.spacing(4)}
    ${(props) => props.theme.spacing(7)} ${(props) => props.theme.spacing(1)};
  opacity: 0.4;
  text-transform: uppercase;
  display: block;
`;

const SidebarNavSection = (props) => {
  const {
    title,
    pages,
    className,
    component: Component = "nav",
    handleDrawerToggle,
    ...rest
  } = props;

  return (
    <Component {...rest}>
      {title && <Title variant="subtitle1">{title}</Title>}
      <SidebarNavList
        pages={pages}
        depth={0}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Component>
  );
};

export default SidebarNavSection;