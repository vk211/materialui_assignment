import { Container,Box } from "@mui/system";
export default function Musiccard({header,imageicon,description}){
    return(
        <>
        <Box sx={{display:"flex",flexDirection:'column',width:'225px',height:"250px",paddingRight:'32px'}}> 
        <div><img src={imageicon} alt="" height="75px" width="75px" /></div>
        <div><h3>{header}</h3></div>
        <div>{description}</div>

       
        </Box>
        </>
    );
}