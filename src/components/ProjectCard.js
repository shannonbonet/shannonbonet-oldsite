import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = makeStyles({
    root: {
        margin: 30,
        borderRadius: 18, 
        padding: 20,
        backgroundColor: 'rgba(260, 200, 169, 0.654)',
        boxShadow: '7px 7px 10px rgba(113, 128, 246, 0.675)'
    }, 
    title: {
        margin: 20, 
        lineHeight: 0.75,
    }, 
    icons: {
        direction: 'flex', 
        flexDirection: 'row'
    }
  });

const ProjectCard = (props) => {
    const classes = useStyles(); 
    return (
        <Card className={classes.root}>
            <div className={classes.title}>
                <h2> {props.title} </h2> 
                    <subhead> {props.subhead} </subhead> 
            </div>
            <CardContent>
                <p>
                    {props.description}
                </p>
            </CardContent>
            <div className={classes.icons}>
                {props.git? <IconButton size="large"> 
                <a href={props.gitUrl}> <GitHubIcon /> </a>
                </IconButton> : null} 

                {props.figma? <IconButton size="large"> 
                <a href={props.figmaUrl}> <PaletteIcon /> </a>
                </IconButton> : null} 
            </div>
        </Card>
    ); 
}

export default ProjectCard; 