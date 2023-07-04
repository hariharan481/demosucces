import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Table from "./Table";
import { Star } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerticalTabs from "./Vertical";
import TabPanel from "./openTab";

export const Main = () => {
  return (
    <div>
      <Stack direction={"row"} gap={"10px"} mt={1}>
        <Box
          classname="indexpage"
          sx={{
            height: "590px",
            width: "900px",
            display: "flex",
            border: "0.5px solid black",
          }}
        >
          <Box
            sx={{
              height: "20px",
              width: "700px",

              mt: "20px",
            }}
          >
            <Typography
              variant="subtitle1"
              fontFamily={"sans-serif"}
              color={"blue"}
              sx={{
                backgroundColor: "#ccc6ed",
                width: "100%",
              }}
            >
              Index Search
            </Typography>
          </Box>
        </Box>

        <Box
          classname="Tabularsearch"
          sx={{
            height: "590px",
            width: "900px",
            display: "flex",
            backgroundColor: "white",
            border: "0.5px solid black",
          }}
        >
          <Box
            sx={{
              height: "20px",
              width: "200px",

              mt: "20px",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#ccc6ed",
                width: "900px",
              }}
              variant="subtitle1"
              fontFamily={"sans-serif"}
              color={"black"}
            >
              Tabular Search
            </Typography>
          </Box>
          <Stack direction={"column"} mt={9} ml={-25}>
            {/*   <Typography
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"blueviolet"}
                fontWeight={600}
                ml={-25}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "1000px",
                }}
              >
                Code details
              </Typography>
            */}
            <TabPanel />
            <Box
              sx={{
                height: "35px",
                width: "900px",
                backgroundColor: "#c8e2dd",
                color: "black",
                fontFamily: "sans-serif",
                fontSize: "13px",

                mt: "20px",
              }}
            >
              <Stack direction={"row"} gap={"70px"} ml={5}>
                <Link variant="subtitle1" fontWeight={"700"}>
                  Code notes
                </Link>
                <Link variant="subtitle1" fontWeight={"700"}>
                  Section notes
                </Link>
                <Link variant="subtitle1" fontWeight={"700"}>
                  Chapter Notes
                </Link>
                <Link variant="subtitle1" fontWeight={"700"}>
                  Chapter guidlines
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};
