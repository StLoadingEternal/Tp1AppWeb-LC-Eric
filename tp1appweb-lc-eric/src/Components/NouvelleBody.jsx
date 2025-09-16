import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import {Drawer} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {InfoOutline} from "@mui/icons-material";
import {useContext} from "react";
import InfoOutlineSharpIcon from '@mui/icons-material/InfoOutlineSharp';
import {NewsContext} from "./NewsContext.jsx";


// const ExpandMore = styled((props) => {
//     const {expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme }) => ({
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
//     variants: [
//         {
//             props: ({ expand }) => !expand,
//             style: {
//                 transform: 'rotate(0deg)',
//             },
//         },
//         {
//             props: ({ expand }) => !!expand,
//             style: {
//                 transform: 'rotate(180deg)',
//             },
//         },
//     ],
// }));

//Composant pour la definiton du contenu des nouvelles
//Les éléments en commentaires sont des parties du Mui que j'ai retiré
export default function NouvelleBody(props) {

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    //Utilisation du newsContext
    const newsContext = useContext(NewsContext)

    //Effacer une nouvelle(Alert?)
    function handleClear() {
        newsContext.setNews((ancien) => ancien.filter((nouvelle) => nouvelle.id !== props.id));
    }

    return (
        //Composant MUI qu'on a retravaillé
        <Card sx={{ maxWidth: 360, height:'100%'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <Typography variant="h7" component="div" sx={{fontWeight: 'bold'}}>
                        {props.titre}
                    </Typography>
                }
                subheader={props.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt=""
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.resume}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Modify">
                    <ModeEditIcon/>
                </IconButton>
                <IconButton aria-label="Clear">
                    <ClearIcon onClick={handleClear}></ClearIcon>
                </IconButton>
                <IconButton>
                    <InfoOutlineSharpIcon aria-label="show more"></InfoOutlineSharpIcon>
                </IconButton>
            </CardActions>

        </Card>
    );
}

// <ExpandMore
//     expand={expanded}
//     onClick={handleExpandClick}
//     aria-expanded={expanded}
//     aria-label="show more"
// >
//     <ExpandMoreIcon />
// </ExpandMore>

// <Collapse in={expanded} timeout="auto" unmountOnExit>
//     <CardContent>
//         <Typography sx={{ marginBottom: 2 }}>Texte:</Typography>
//         <Typography sx={{ marginBottom: 2 }}>
//             {props.texte}
//         </Typography>
//     </CardContent>
// </Collapse>