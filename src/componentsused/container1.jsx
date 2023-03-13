import { Container, Box } from "@mui/system";
import mobile1 from "../Images/mobile-1.svg";
import "./container1.css";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import mobile2 from "../Images/mobile-2.svg";
import mobile3 from "../Images/mobile-3.svg";
import mobile4 from "../Images/mobile-4.svg";
import Musiccard from "../common/Musicicon";
import { CardData } from "../mockdata/datasetcontainer";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Containertop({ reverse }) {
  return (
    <>
      <Container
        className="topcontainer"
        sx={{ display: "flex",marginTop:'100px' }}
      >
        <Container className="firstcontainer"
                id='home'
                >
          <img className="mobile1" src={mobile1} alt="" />
        </Container>
        <Container sx={{ p: "100px" }}>
          <h2>Evalynn Music</h2>
          <h1>Best Music App 2020</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            delectus aspernatur optio ab, ducimus harum beatae natus quia, at
            nesciunt temporibus facere adipisci! Excepturi possimus aliquid
            nulla numquam culpa beatae.
          </p>

          <Button className="video" variant="outlined">
            Click To Watch a Video
          </Button>
          <Container
            className="bluebutton"
            sx={{ display: "flex", marginTop: "100px", paddingLeft: "0px" }}
          >
            <Button
              className="video"
              variant="contained"
              startIcon={<AndroidIcon />}
              sx={{ borderRadius: "20px", marginRight: "10px" }}
            >
              App Store
            </Button>
            <Button
              className="video"
              variant="contained"
              startIcon={<AppleIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Play Store
            </Button>
          </Container>
        </Container>
      </Container>
      <Container
        className="topcontainer" id='Works' sx={{ display: "flex" ,justifyContent:"space-between",marginTop:'100px'}}
      >
        <Container
          sx={{ display: "flex", flexDirection: "column"}}
        >
          <Container>
            <h1>App Features</h1>
          </Container>
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              id error, numquam magnam exercitationem hic nostrum. Architecto
            </p>
          </Container>
          <Container sx={{ display: "flex", flexWrap: "wrap",width:"100%" }}>
            {CardData.map((e) => (
              <Musiccard
                header={e.header}
                imageicon={e.imageicon}
                description={e.description}
              />
            ))}
          </Container>
        </Container>
        <Container sx={{width:'33%'}}
                
                >
          <img src={mobile2} alt="" />
        </Container>
      </Container>
      <Container
        className="topcontainer"
        id='Service'
        sx={{ display: "flex", justifyContent: "space-between",marginTop:'100px'}}
      >
        <Box>
          <img src={mobile3} alt="" />
        </Box>
        <Box sx={{paddingTop:'100px',paddingLeft:'225px'}} >
          <Container sx={{ display: "flex",}}>
            <h1>Great Product Analytics</h1>

          </Container>
          <Container
            sx={{ display: "flex"}}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              omnis magni, corporis qui ut soluta, eius fuga velit praesentium
              facere molestias repellat numquam nisi autem blanditiis? Aut,
              numquam ut? Iure.
            </p>
          </Container>
          <Container
            sx={{
              py: "48px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="Feat">
              <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Box>
            <Box className="Feat">
              <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Box>
            <Box className="Feat">
              <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Box>
            <Box className="Feat">
              <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Box>
          </Container>
          <Container sx={{ p: "10px" }}>
            <Button variant="Text" sx={{ color: "blue" }}>
              Click To View More
              <ArrowForwardIosIcon color="primary" />
            </Button>
          </Container>
        </Box>
      </Container>
      <Container
        className="topcontainer"
        sx={{ display: "flex", justifyContent: "space-between",marginTop:'100px' }}
      >
        <Box>
          <Box >
            <Container
              sx={{ display: "flex", justifyContent: "center", w: "70%" }}
            >
              <Box>
              <Container>
                <h1>App Features</h1>
              </Container>
              <Container>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores id error, numquam magnam exercitationem hic nostrum.
                  Architecto
                </p>
              </Container>
              <Container sx={{display:"flex"}}>
                <Button variant="outlined" sx={{color:'grey'}}>Community</Button>
                <Button variant="outlined" sx={{color:'grey'}}> Self Service</Button>
                <Button  variant="outlined" sx={{color:'grey'}}>TeamWork</Button>

              </Container>
              <Container>
                <h1>Great Product Analytics</h1>
              </Container>
              <Container
            sx={{ display: "flex"}} >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              omnis magni, corporis qui ut soluta, eius fuga velit praesentium
              facere molestias repellat numquam nisi autem blanditiis? Aut,
              numquam ut? Iure.
            </p>
          </Container>
              </Box>
            </Container>
            
            <Container
              sx={{
                py: "48px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box className="Feat">
                <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </Box>
              <Box className="Feat">
                <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </Box>
              <Box className="Feat">
                <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </Box>
              <Box className="Feat">
                <DoneIcon color="primary" sx={{ marginRight: "12px" }} />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </Box>
            </Container>
            <Container sx={{ p: "10px" }}>
              <Button variant="Text" sx={{ color: "blue" }}>
                Click To View More
                <ArrowForwardIosIcon color="primary" />
              </Button>
            </Container>
          </Box>
        </Box>
        <Box>
          <img src={mobile4} alt="" />
        </Box>
      </Container>
    </>
  );
}
