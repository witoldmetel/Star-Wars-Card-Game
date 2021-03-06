import { Container, Typography, Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useGameContext } from 'src/hooks/useGameContext';
import { InitCard, InitCardProps } from 'src/core/components';
import { initCards, INIT_CARD_TITLE } from 'src/constants';

type DashboardProps = {
  onPlayClick: (isGameActive: boolean) => void;
};

export function Dashboard({ onPlayClick }: DashboardProps) {
  const classes = useStyles();
  const { resource, onResourceSelect } = useGameContext();

  return (
    <Container className={classes.root} maxWidth="lg" component="main">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        Star Wars Card Game
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Choose one of the resources and participate in the galactic battle!
      </Typography>
      <Grid className={classes.cardsWrapper} container spacing={5} alignItems="flex-start">
        {initCards.map((card: Pick<InitCardProps, 'title' | 'icon' | 'description'>) => (
          <InitCard
            key={card.title}
            {...card}
            selectedCard={resource}
            onClick={(cardTitle: INIT_CARD_TITLE) => onResourceSelect(cardTitle)}
          />
        ))}
      </Grid>
      <Button className={classes.button} variant="contained" onClick={() => onPlayClick(true)}>
        Play
      </Button>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40
  },
  cardsWrapper: {
    padding: 30
  },
  button: {
    height: 50,
    width: 100
  }
}));
