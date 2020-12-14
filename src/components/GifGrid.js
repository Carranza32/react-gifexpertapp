import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifFridItem } from './GifFridItem';

export const GifGrid = ({category}) => {
   const {data, loading} = useFetchGifts(category);

   return (
      <div>
         <h3>{category}</h3>
         {loading && <CircularProgress />}
         <Grid container spacing={2}>
            {
               data.map(gif => (
                  <GifFridItem key={gif.id} {...gif} />
               ))
            }
         </Grid>
      </div>
   )
}
