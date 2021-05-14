import React from 'react';
import BeerCard from '../../components/BeerCard';


const BeerData = [
    {
        image: "./images/freaking nuts.png",
        title: "Freaking Nuts",
        description: "About freaking nuts beer"
    },
    {
        image: "./images/freaking nuts.png",
        title: "Freaking Nuts",
        description: "About freaking nuts beer"
    },
    {
        image: "./images/freaking nuts.png",
        title: "Freaking Nuts",
        description: "About freaking nuts beer"
    },
]


function Beer() {
    return (
        <main>
            <div className="mb-5"><h2>Beers on Tap</h2></div>
            <div className="container-fluid p-4">
                <div className="row">
                    {BeerData.map((item) => (
                    <div className="card-body">
                    <div className="col-6">
                        <BeerCard project={item} />
                    </div>
                    </div>
                    ))}  
                </div>
            </div>
        </main>

    )
}

export default Beer



// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Copyright from '../../components/Copyright';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
// }));

// export default function BeerList() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <div>
//     <Card className={classes.root}>
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography component="h5" variant="h5">
//             Beer Name
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Beer Type
//           </Typography>
//         </CardContent>
//         <div>
//           <Typography variant="paragraph" component="p">
//             This will be a paragraph form of a beer description
//           </Typography>
//         </div>
//       </div>
//       <CardMedia
//         className={classes.cover}
//         image="/static/images/cards/live-from-space.jpg"
//         title="Beer Image"
//       />
//     </Card>
  
//     <Copyright />
//     </div>
//   );
// }