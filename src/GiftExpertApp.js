import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
   menuButton: {
     marginRight: theme.spacing(2),
   },
   title: {
     flexGrow: 1,
   },
 }));

export const GiftExpertApp = () => {
   const classes = useStyles();
   const [categories, setCategories] = useState(['One Punch Man']);

   // const handleAdd = () => {
   //    setCategories([...categories, "Hunter x Hunter"]);
   // }

   return (
      <div>
         <AppBar position="fixed">
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  Gift Expert App
               </Typography>
               <Button color="inherit">Login</Button>
            </Toolbar>
         </AppBar>

         <AddCategory setCategories={setCategories} />

         {
            categories.map(categorie => <GifGrid key={categorie} category={categorie} />)
         }
      </div>
   )
}
