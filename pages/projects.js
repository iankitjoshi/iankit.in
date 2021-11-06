import { Grid } from '@material-ui/core';

function Projects(){

    const projects = [
        {
            id : 1 ,
            title : 'NGR (Nirvana Gold Rush)',
            details : `NGR is the affiliate website of Club Nirvana. I build the Admin panel of NGR, 
                       This is a Credit System that manages the credit balance of the exciting contacts and 
                       also their transactions coming from different affiliates. We can also add and manage 
                       Affiliates. For tracking data, we have also added different graphs in the dashboard 
                       section of this system for Affiliates, Contacts, and Transaction.`
        },
        {
            id : 2 ,
            title : 'BitesBee POS Panel',
            details : `This is also the admin panel, and this project was very exciting because this 
                       is not only the project but this is the Product of our company's restaurant. 
                       This is for the POS billing. In this, we add customers, menu items, groups, 
                       cards and we can issue a card to the customer that he can top-up, whenever he orders /
                       from BitesBee he can pay through his card by telling his details and we verify this from  
                       OTP verification. And for the customer, they can check their last transactions.
                       and there are a lot more things.`
        },
        {
            id : 3 ,
            title : 'Top Challenge',
            details : `This is a live online competition show of different-different categories of questions. 
                        In this, I build the Admin panel of this where the details of the user who took part in this 
                        competition details of categories of question and which question will be asked during the live 
                        show and who is the winner all details are stored in there.`
        },
        {
            id : 4 ,
            title : 'Truckbook',
            details : `TruckBook is an end-to-end app that not only lets you search and find well-paying trucking job 
                       opportunities but also offers a Truck Maps/GPS, routes, roadside assistance, and truck stops. 
                       What's more, TruckBook also offers you a platform to buy, sell, lease, or rent commercial trucks.`
        },

    ]

    return(
        <div  className="about-grid story-page">
            <h2 className="story-heading" >Projects</h2>
            <Grid container spacing={6}>
                {
                    projects && projects.map(project => {
                        return (
                            <Grid item xs={12} sm={12} md={6} lg={6} id={project.id}>
                                <p className="service-title"> {project?.title} </p>
                                <p className="projects-details">{project?.details} </p>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}



export default Projects