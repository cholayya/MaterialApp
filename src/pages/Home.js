import MyCard from "../components/MyCard";
// import Login from "./components/Login/Login";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import cities from "../data.json"
import { Typography } from "@mui/material"; 

const Home = () =>(
    <div>
  {/* <Login/> */}
  
  <Container sx={{marginY:5}}>
    {cities.map((city)=>(
      <>
      <Typography
        variant="h4"
        component="h2"
        marginTop={5}
        marginBottom={3}
        >
          Top {city.name} Tours
      </Typography>
      <Grid container spacing={5}>
    {city.tours.map((tour, index)=>(
    <MyCard tour={tour} key={index}/>
    ))}
    </Grid>
    </>
    ))}
    
  </Container> 
</div>  
)

export default Home;