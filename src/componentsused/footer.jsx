import {  Container, Box } from "@mui/system";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { TextField } from "@mui/material";
import './footer.css'
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
      <Container
        className="FooterCard"
        id='Contact'
        sx={{ display: "flex", bgcolor: "#011C3A", color: "#fff",py:10,width:'100%'}}
      >
        <Container>
          <Box><h2>ABOUT US</h2></Box>
          <Box>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              fugiat quos nesciunt asperiores iste laudantium illo est porro,
              provident obcaecati rerum reprehenderit consectetur cumque dolore
              autem sapiente voluptas suscipit. Consequatur.
            </p>
          </Box>
          <Box sx={{display:"flex"}}>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>

          </Box>
        </Container>
        <Container>
          <Box><h2>Company</h2></Box>
          <Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} />
              About Us
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Services
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Projects{" "}
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Team
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Pricing
            </Box>
          </Box>
        </Container>
        <Container>
          <Box><h2>Useful Links</h2></Box>
          <Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} />
              Terms of Services
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Privacy
              Policy
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} />{" "}
              Documentation{" "}
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Changelog
            </Box>
            <Box>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 10 }} /> Components
            </Box>
          </Box>
        </Container>
        <Container>
          <Box>
            <Box>
              <h2>News Letter</h2>
            </Box>
            <Box>Sign Up for the latest news</Box>
            <Box sx={{display:"flex",alignItems:"center"}}>
              <Box><EmailIcon variant="outlined"/></Box>
              <Box>
                <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Your Email"
                variant="filled"
                size="small"
              /></Box>
            </Box>
            <Box>
<Button variant="contained" sx={{width:'100%'}}>Subscribe</Button>
</Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}
