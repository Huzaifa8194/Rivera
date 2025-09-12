import { Button, Box, Typography, Container, Grid } from "@mui/material"

export default function ContentSection() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                   {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ px: 4, py: { xs: 6, lg: 12 }, pb: { xs: 2, lg: 4 } }}>
         <Box sx={{ 
           display: 'flex', 
           flexDirection: { xs: 'column', lg: 'row' }, 
           gap: { xs: 6, lg: 0 },
           alignItems: 'center',
           justifyContent: 'center'
         }}>
                       {/* Left Content */}
            <Box sx={{ 
              flex: 2,
              display: 'flex', 
              flexDirection: 'column', 
              gap: 6 
            }}>
             {/* Main Heading */}
                            <Typography
                 variant="h1"
                 sx={{
                   fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                   fontWeight: 'bold',
                   color: '#00223A',
                   lineHeight: 1.2
                 }}
               >
               Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
             </Typography>

             {/* Main Description */}
                            <Typography
                 variant="body1"
                 sx={{
                   color: '#00223A',
                   fontSize: { xs: '1rem', md: '1.125rem' },
                   lineHeight: 1.6
                 }}
               >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula vulputate,
               malesuada gravida sapien. Nulla sed sagittis turpis. Nunc dapibus ullamcorper mollis. Sed tincidunt purus
               ac purus aliquet convallis. Integer consectetur quam imperdiet metus blandit commodo. Pellentesque
               convallis fermentum tortor, nec accumsan turpis. Fusce auctor justo augue, ut convallis ante bibendum
               convallis.
             </Typography>

             {/* Two Column Text */}
             <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                   <Typography
                     variant="body2"
                     sx={{
                       color: '#666666',
                       fontSize: '0.875rem',
                       lineHeight: 1.6
                     }}
                   >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula vulputate,
                   malesuada gravida sapien. Nulla sed sagittis turpis. Nunc dapibus ullamcorper mollis. Sed tincidunt
                   purus ac purus aliquet convallis. Integer consectetur quam imperdiet metus blandit commodo.
                   Pellentesque convallis fermentum tortor
                 </Typography>
               </Grid>
             </Grid>

             {/* Additional Text */}
                            <Typography
                 variant="body1"
                 sx={{
                   color: '#00223A',
                   fontSize: '1.125rem',
                   fontWeight: 500
                 }}
               >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula vulputate,
               malesuada gravida sapien.
             </Typography>

             {/* CTA Button */}
             <Box sx={{ pt: 2 }}>
               <Button
                 variant="contained"
                 size="large"
                 sx={{
                   bgcolor: '#00223A',
                   color: 'primary.contrastText',
                   px: 4,
                   py: 1.5,
                   fontSize: '1rem',
                   fontWeight: 500,
                   textTransform: 'none',
                   '&:hover': {
                     bgcolor: '#003B66'
                   }
                 }}
               >
                 Explore our Deals
               </Button>
             </Box>
           </Box>

                       {/* Right Image */}
            <Box sx={{ 
              flex: 1,
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              order: { xs: -1, lg: 1 }
            }}>
              <Box
                sx={{
                  aspectRatio: '3/4',
                  borderRadius: 4,
                  overflow: 'hidden',
                  bgcolor: 'grey.200',
                  width: { xs: '60%', md: '40%', lg: '60%' }
                }}
              >
               <img
                 src="/about/about-image.png"
                 alt="Product showcase"
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover'
                 }}
               />
             </Box>
           </Box>
         </Box>
       </Container>

      {/* Statistics Section */}
      <Box sx={{ py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container maxWidth="lg" sx={{ px: 2, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={{ xs: 4, lg: 6 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={6} lg={3}>
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                    fontWeight: 'bold',
                    color: '#00223A'
                  }}
                >
                  +12K
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00223A',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Our Packages
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                    fontWeight: 'bold',
                    color: '#00223A'
                  }}
                >
                  +1.5K
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00223A',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Our Total Clients
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                    fontWeight: 'bold',
                    color: '#00223A'
                  }}
                >
                  +14
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00223A',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Our Winning Award
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                    fontWeight: 'bold',
                    color: '#00223A'
                  }}
                >
                  +4.9K
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00223A',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  People flown
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
