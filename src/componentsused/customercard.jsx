import { Container } from "@mui/system";
import Profilecard from "../common/profile";
export default function Customercard() {
  return (
    <>
      <Container
        sx={{
          py: 10,
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <Container className="customercard" sx={{display:"flex",flexDirection:'column',justifyContent:'center',width:'600px'}}>
        <Container  ><h1>What our Customers Have to Say</h1></Container>
          <Container >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            quaerat tenetur asperiores facilis ab nulla, nesciunt, debitis
            itaque, magni sint sequi accusamus laboriosam illum est aspernatur
          </p>
          </Container>
        </Container>
        <Container sx={{display:"flex" }}>
          <Profilecard></Profilecard>

        </Container>
      </Container>
    </>
  );
}
