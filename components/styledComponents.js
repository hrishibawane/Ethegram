import React from "react";
import styled from "styled-components";
import { Button, Dropdown } from "semantic-ui-react";

export const CustButton = styled(Button)`
  &:hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

export const CustDropdown = styled(Dropdown)`
&:hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;
