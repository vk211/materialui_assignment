import { Box, Container } from "@mui/system";
import one from "../Images/one.png";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import './subscription.css'

export default function Subscription() {
  return (
    <>
      <Box className="subscriptioncard" sx={{border:'1px',borderColor: 'text.primary'}} >
        <Container sx={{ display: "flex" }}>
          <Box>
            <img src={one} alt="" />
          </Box>
          <Container>
            <Box>
              <h1>Free</h1>
            </Box>
            <Box sx={{ display: "flex" }}>
              <span>$</span>
              <span>0</span>
              <span>per/month</span>
            </Box>
          </Container>
        </Container>
        <Container
          className="subscriptionfeat"
          sx={{ display: "flex", flexDirection: "column",my:'24px' }}
        >
          <Box className='Feat'>
            <DoneIcon color="primary" sx={{marginRight:'12px'}}/>
            <Box >Full Access</Box>
          </Box >
          <Box className='Feat'>
          <DoneIcon color="primary" sx={{marginRight:'12px'}}/>
            <span>Source Files </span>
          </Box>
          <Box className='Feat'>
          <DoneIcon color="primary" sx={{marginRight:'12px'}}/>
            <span>Code Upload</span>
          </Box>
          <Box className='Feat'>
          <DoneIcon color="primary" sx={{marginRight:'12px'}}/>
            <span>Enhanced Security</span>
          </Box>
          <Box className='Feat'>
          <DoneIcon color="primary" sx={{marginRight:'12px'}}/>
            <span>Free Installment</span>
          </Box>
        </Container>
        <Button className="video" variant="contained"  sx={{marginLeft:'24px',borderRadius:'20px',bgcolor:'#3f51b5',marginBottom:'32px'}}>
          Buy Now
        </Button>
      </Box>
    </>
  );
}
