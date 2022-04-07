import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import image from '../images/1.jpeg';
import ImageCollage from "../components/ImageCollage";

const Tour = () =><Container sx={{width:900}}>
<Typography variant="h3" component="h1" marginTop={3  }>
    Explore the World in Vegas
</Typography>
<Box marginTop={3} sx={{display:"flex"}}>
<img src={image} alt="" height={325}/>
<ImageCollage/>
</Box>
<Box>
<Typography variant="h6" component="h4" marginTop={3  }>
    About this ticket
</Typography>
<Typography variant="paragraph" component="p" marginTop={3  }>
ERROR in Plugin "react" was conflicted between "package.json » 
eslint-config-react-app » D:\cholayya\MyApp\frontend\app\
node_modules\eslint-config-react-app\base.js" and "BaseConfig » 
D:\cholayya\MyApp\Frontend\app\node_modules\eslint-config-react-app\base.js".
</Typography>
</Box>
<Box>
<Typography variant="h6" component="h4" marginTop={3  }>
    Frequently Asked Questions
</Typography>
<Typography variant="paragraph" component="p" marginTop={3  }>
ERROR in Plugin "react" was conflicted between "package.json » 
eslint-config-react-app » D:\cholayya\MyApp\frontend\app\
node_modules\eslint-config-react-app\base.js" and "BaseConfig » 
D:\cholayya\MyApp\Frontend\app\node_modules\eslint-config-react-app\base.js".
</Typography>
</Box>
</Container>




export default Tour;