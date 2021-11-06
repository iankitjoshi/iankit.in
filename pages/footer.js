import { Grid } from '@material-ui/core';

function Footer(){
    return(
        <Grid container className="footer-grid" >
            <Grid item xs={12} sm={6} md={6} lg={6} className="">
                <p className="footer-text" >©{new Date().getFullYear()} Ankit Joshi.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className="" >
                <p className="footer-thank-text" >Thank You for Visiting.</p>
            </Grid>
        </Grid>
    )
}

export default Footer