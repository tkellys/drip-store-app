import { Avatar, Box, Drawer, useTheme, SwipeableDrawer } from "@mui/material"


export function MenuCima({children}){
    const theme = useTheme();
return(
    <>
    <Drawer variant="permanent">
        <Box width={theme.spacing(28)}>
        <Avatar variant="square" alt="logo" src="src\assets\logoDC.png"/>
        </Box>
       
    </Drawer>
    <Box height="100vh" marginTop={theme.spacing(28)}>
     {children}
    </Box>
 
    </>
);
};