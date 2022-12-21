import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LandingPageCMS() {
  return (
    <>
    <div><h2>LandingPageCMS</h2></div>
    <div>
    <TextField id="outlined-basic" label="Product Name" variant="outlined" />
    <TextField id="outlined-basic" label="Product Code" variant="outlined" />
    </div>
    <div>
    <TextField id="outlined-basic" label="Product Price" variant="outlined" />
    <TextField id="outlined-basic" label="GST (%)" variant="outlined" />
    </div>
    <div>
    <TextField id="outlined-basic" label="Total" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
    </>
  )
}

export default LandingPageCMS