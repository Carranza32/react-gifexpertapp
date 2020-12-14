import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

export const GifFridItem = ({url, title}) => {
   return (
      <Grid item xs={12} md={3}>
         <Card>
            <CardActionArea>
               <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  src={url}
                  title="Contemplative Reptile"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {title}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  Share
               </Button>
            </CardActions>
         </Card>
      </Grid>
   )
}