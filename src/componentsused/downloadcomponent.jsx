import { Button } from "@mui/material";
import { Container } from "@mui/system";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import './downloadcomponent.css'

export default function DownloadSection(){
    return(
        <>
        <Container  sx={{py:10,display:"flex",flexDirection:'column'}}>
            <Container className="download">
                <h1>Download Now!</h1>
            </Container>
            <Container className="download" sx={{width:'500px'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illum sed quo ducimus rem! Sed, quas qui quae aut repudiandae 
                    </p>
            </Container>
            <Container className="download">
            <Button
              className="video"
              variant="contained"
              startIcon={<AppleIcon />}
              sx={{borderRadius:'20px',mx:'5px'}}
              
            >
              App Store
            </Button>
            <Button
              className="video"
              variant="contained"
              startIcon={<AndroidIcon />}
              sx={{borderRadius:'20px',mx:'5px'}}


            >
              Play Store
            </Button>
            </Container>
        </Container>

        </>
    );
}