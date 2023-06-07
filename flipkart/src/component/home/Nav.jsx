import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { navData } from "../../constant/Data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overFlow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Conatainer = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
function Nav(props) {
  return (
    <Box style={{ background: "#fff" }}>
      <Component>
        {navData.map((Data) => (
          <Conatainer>
            <img src={Data.url} alt="nav" style={{ width: 64 }} />
            <Text>{Data.text}</Text>
          </Conatainer>
        ))}
      </Component>
    </Box>
  );
}

export default Nav;
