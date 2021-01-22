import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DescriptionIcon from "@material-ui/icons/Description";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import FindInPageIcon from "@material-ui/icons/FindInPage";

const Image = styled.img`
  width: 50%;
  height: 450px;

  @media (max-width: 400px) {
    height: 350px;
    width: 100%;
  }
`;

const Main = styled.div`
  background-color: #f9f5f1;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box ml={2} mr={2} mb={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ExampleVideo(props) {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   let v = setInterval(() => {
  //     if (value == 2) {
  //       setValue(0);
  //     } else {
  //       setValue(value + 1);
  //     }
  //   }, 5000);

  //   return () => clearInterval(v);
  // }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabButtons = [
    {
      icon: DescriptionIcon,
      label: "สร้างเเบบสำรวจ",
    },
    {
      icon: MobileScreenShareIcon,
      label: "เเชร์",
    },
    {
      icon: FindInPageIcon,
      label: "ดูผล",
    },
  ];

  const tabContent = [
    {
      srcImg:
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/personal/templates/desktop/resume-v2.png",
      index: 0,
    },
    {
      srcImg:
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/tasks-v5/en-US.png",
      index: 1,
    },
    {
      srcImg:
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/notes-v5/en-US.png",
      index: 2,
    },
  ];

  return (
      <Main className="pt-5 pb-5">
        <div className="mb-2">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              centered
            >
              {tabButtons.map((tab) => (
                <Tab
                  icon={<tab.icon />}
                  style={{
                    fontFamily: "Kanit",
                    fontSize: "1em",
                    color: "black",
                  }}
                  label={tab.label}
                />
              ))}
            </Tabs>
        </div>
        <div>
            {tabContent.map((content) => (
              <TabPanel value={value} index={content.index}>
                <Box display="flex" justifyContent="center">
                  <Image src={content.srcImg}></Image>
                </Box>
              </TabPanel>
            ))}
        </div>
      </Main>

  );
}

export default ExampleVideo;
