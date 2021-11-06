import { Grid } from '@material-ui/core';

function Services(){
    const content = [
        {
            id : 1 , 
            title : 'UI/UX DESIGN' , 
            icon : '/images/design.svg', 
            text : `UI/UX involves planning and iterating a site's structure and layout. 
                    Once the proper information architecture is in place, I design the visual 
                    layer to create a beautiful user experience.`,
        },
        {
            id : 2 , 
            title : 'FRONTEND DEVELOPMENT' , 
            icon : '/images/frontend.svg', 
            text : `Front End Development is building out the visual components of a website. 
                    Using JavaScript, ReactJS, NextJS, NodeJS, HTML, and CSS. I build fast, interactive websites. 
                    This also may include integrating a CMS.`,
        },
        {
            id : 3 , 
            title : 'BACKEND DEVELOPMENT' , 
            icon : '/images/backend.svg', 
            text : `Back end Development refers to the server-side of development where you are primarily 
                    focused on how the site works. I'm using NodeJS with User Authentication.`,
        },

    ]
    return(
        <div  className="about-grid service-page">
            <h2 className="heading" >Services</h2>
            <Grid container spacing={6}>
                {
                    content && content.map(text => {
                        return (
                            <Grid item xs={12} sm={12} md={4} lg={4} id={text.id}>
                                <img src={text?.icon} className="svg-icon" />
                                <p className="service-title"> {text?.title} </p>
                                <p className="service-text"> {text?.text} </p>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Services