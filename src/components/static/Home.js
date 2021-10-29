import { Typography } from '@mui/material'
import React from 'react'
import { Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'mui-image'
import finance_photo from '../../../public/finance_photo.jpeg'




const Home = () => {
    const theme = createTheme({
        Container:{
            padding:"200px"
        },
        typography: {
            p:"50px",
            h4:{
                color:"black"
            },
            body: {

            }
        },
      });

    return (
        <ThemeProvider theme={theme}>
            <Box >
                <Container style={{padding:"100px"}} maxWidth="md">
                    <Typography style={{}} variant="h4">Welcome to Your Personal Finance Helper</Typography><br/>
                    <Typography style={{fontSize:25, }} variant="body">Make a budget and record your progress on how your finances met your expectations in one month and adjust your expectations accordingly for the next month. </Typography>
                </Container>
                <Image />
            </Box>
        </ThemeProvider>
    )
}

export default Home
