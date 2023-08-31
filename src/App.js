import React,{useState} from "react";
import {Card,CardContent,Grid,Button} from "@mui/material"

function App() {
  const[img, setImg]=useState("");
  return (
    <Card sx={{bgcolor:"lightsteelblue"}}> 
         <CardContent>
       <Grid container spacing={2} align="center">
       <Grid item xs={6}>
        <Card>
            <CardContent>
              <img src={`img/${img}.jpg`} height={300} width={400} alt="" />
            </CardContent>
        </Card>
       </Grid>

       <Grid item xs={6}>
       <Card sx={{fontSize:50,height:345, fontWeight:"bold", color:"red"}} >
            <CardContent>
           <Grid container spacing={3} align="center"> 
            <Grid item xs={3}></Grid> 
              <Grid item xs={4}>
              
              <h1>{img}</h1>
            
              </Grid>
                          </Grid>
                          </CardContent>
        </Card>
        
       </Grid>

      
      <Grid item xs={3}>
       <Button onClick={()=>setImg("apple")} variant="contained" color="error" fullWidth>
         Apple
       </Button>
       </Grid>

       <Grid item xs={3}>
       <Button onClick={()=>setImg("banana")} variant="contained" color="error" fullWidth>
         Banana
       </Button>
       </Grid>

      
       <Grid item xs={3}>
       <Button onClick={()=>setImg("Kiwi")} variant="contained" color="error" fullWidth>
         Kiwi
       </Button>
       </Grid>

       <Grid item xs={3}>
       <Button onClick={()=>setImg("mango")} variant="contained" color="error" fullWidth>
         Mango
       </Button>
       </Grid>

       <Grid item xs={3}>
       <Button onClick={()=>setImg("orange")} variant="contained" color="error" fullWidth>
         Orange
       </Button>
       </Grid>




    
     </Grid>
      </CardContent></Card>
    
  );
}

export default App;
