import { Container} from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
// import { Button } from "@mui/material";
import "./profile.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import StartIcon from "@mui/icons-material/Start";
// import AndroidIcon from "@mui/icons-material/Android";

import face1 from "../Images/face-1.png";
import face2 from "../Images/face-2.png";
import face3 from "../Images/face-3.png";
import face4 from "../Images/face-4.png";
export default function Profilecard() {
  const customers = [
    {
      image: face1,
      name: "John Doe",
      role: "Product Manager",
      icon: <TwitterIcon />,
    },
    { image: face2, name: "Adam Smith", role: "CEO", icon: <FacebookIcon /> },
    {
      image: face3,
      name: "john white",
      role: "SoftWare Engineer",
      icon: <TwitterIcon />,
    },
    {
      image: face4,
      name: "Jessica Hiche",
      role: "CEO",
      icon: <FacebookIcon />,
    },
  ];
  return (
    <Container>
      <Box className="customer-sec">
        <Box className="customers">
          {customers.map((item) => (
            <Box>
              <Box className="customer-imgs">
                <img className="custom-pics" src={item.image} alt="customer" />
              </Box>

              <Box className="customer-card">
                <p className="sep-customer-description">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </p>
                <Divider variant="middle" className="custom-sec-divider" />
                <Box className="icon">
                  <StartIcon className="start-icon" color="secondary"/>
                  <StartIcon className="start-icon" color="secondary"/>
                  <StartIcon className="start-icon" color="secondary"/>
                  <StartIcon className="start-icon" color="secondary"/>
                  <StartIcon className="start-icon" color="secondary"/>
                </Box>
                <Box className="user-details">
                  <Box>{item.name}</Box>
                  <Box className="customer-role">
                    <Box className="user-role">{item.role}</Box>
                    <Box className="social-media-icon">{item.icon}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
