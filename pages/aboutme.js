import { Grid } from '@material-ui/core';
import moment from 'moment'

function About(){

    function MonthToYears() {
        let startDate = moment('03/2020', 'M/YYYY');
        let currentDate = moment(new Date(), 'M/YYYY');
        let diffMonths = currentDate.diff(startDate, 'months');

        let year = diffMonths / 12 | 0
        let month = diffMonths % 12

        if (month) return `${year} ${year > 1 ? 'years' : 'year'} & ${month} ${month > 1 ? 'months' : 'month'}`

        return `${year} ${year > 1 ? 'years' : 'year'}`
    }

    return(
        <Grid container className="about-grid" >
            <Grid item xs={12} sm={12} md={7} lg={7} className="about-me-grid">
                <h2 className="heading" >About Me</h2>
                {/* <p className="min-heading" >My Profession...</p> */}
                <p className="paragraph" >
                    Yes, I'm a coder. I have {MonthToYears() || ''} of experience.
                    Currently, I'm working as a Full-Stack Developer in Chandigarh. 
                    which is where my passion for design and development converge. 
                    I've been developing applications and making Websites using Javascript, React, and Node. 
                    I love to create something different like my imagination.         
                </p>

                <p className="paragraph">
                    I live in Alwar, Rajasthan. 
                    I have done my schooling and college from Jaipur.
                    I love spending time with friends and family and I like playing and watch Cricket. 
                    I'm a foodie person, I love to eat, and Tea lover also. 
                    I have so much curiosity about gadgets.  
                    I like Adventures and go to where I've never been before. 
                    I'd love to get tea and get to know you, so don’t hesitate to get in touch.  
                </p>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} className="img-grid" >
                <img src='/images/ankit.jpeg' className="about-me-img" />
            </Grid>
        </Grid>
    )
}

export default About