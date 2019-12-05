import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 0 auto;
`;

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 500
  },
});

const PokeCard = (props) => {
  const { pokemon } = props;
  const classes = useStyles({});

  return (
    <StyledCard className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokemon.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.number} - {pokemon.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pokemon.classification}
          </Typography>
        </CardContent>
      </CardActionArea>
      {JSON.stringify(pokemon)}
    </StyledCard>
  )
};

export default PokeCard;
