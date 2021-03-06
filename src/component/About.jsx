import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { height } from '@mui/system';

function Copyright() {
  return <></>;
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={5}
                  >
                    Creative and renovate fashion trends
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: 'auto', verticalAlign: 'middle' }}
                    >
                      On the Spring/Summer 2022 men's runways, every emerging trend seems to have been put in place to get you out of the long, never-ending winter. Airy silhouettes, bold cut-outs, and a relaxed style are just three of the buzzwords from this season's trends.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%', height:'80%' }}
                    image="https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '70%', heigth: '60%' }}
                    image="https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Shop"
                    ml={8}
                  />
                </Grid>

                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    sx={{ align: 'center' }}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    ml={5}
                  >
                    We are marketpress
                    <Typography variant="h5" color="text.secondary" paragraph>
                      Dynamically procrastinate B2C users after installed base
                      benefits. Dramatically visualize customer directed
                      convergence without revolutionary ROI. VISION Credibly
                      innovate granular internal Grantedly underconstructions
                      reloaded Interactively procrastinate high-payoff
                      Completely synergize resource taxing relationships
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>
        {/* End hero unit */}

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://avatars.mds.yandex.net/get-zen_doc/5262999/pub_618bcc2b2543ca3458b691a6_618bcc5b2d5fe804ba2c7860/scale_1200"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}
