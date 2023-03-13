import { Container,Box } from "@mui/system";
import React from "react";
import Subscription from "../common/subscription";

export default function OurServices(){
    return(
        <>
        <Container className="Servicescontainer" id='Pricing' sx={{display:"flex",flexDirection:'column', py:10,justifyContent:"center",width:'600px'}} >
            <Box sx={{display:"flex",justifyContent:"center"}}><h1>Our Services</h1></Box>
            <Box><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero numquam
                 porro et animi! Sit placeat consequuntur magnam, quis doloribus iusto 
                esse cumque ullam accusamus assumenda temporibus consectetur quas aperiam nihil!</p></Box>
            

        </Container>
        <Container className='cardcontainer' sx={{display:'flex',}}>
            <Subscription  />
            <Subscription  />
            <Subscription  />
            <Subscription  />

            
            


        </Container>

        </>
    );
    
}