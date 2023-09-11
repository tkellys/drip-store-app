import { Grid, Input, Button, AppBar, Box, Toolbar, Typography } from "@mui/material"

export default function Cabecalho(){
    return (
    <>
    <Grid container>
    
        <Grid item xs={12} md={2}>
            <img src="src\assets\logoDC.png"/> Digital Store
        </Grid>
        <Grid item xs={12} md={6}>
            <Input type="text" placeholder="Pesquisar produto...">
            </Input>
        </Grid>
        <Grid item xs={12} md={4}>
            <a href="cadastro.jsx">Cadastre-se</a>
            <Button >Entrar</Button>
            <img src="src\assets\carrinho.png"/>
        </Grid>
         

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>                
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Home
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Produtos
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                     Categorias
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Meus Pedidos
                </Typography>

                </Toolbar>
            </AppBar>
        </Box> 
        
    </Grid>
       </> )
}