// same as

import React from "react";
import MovieActorCard from "../actorCard";
import Grid from "@mui/material/Grid";

const MovieActorList = ({ actor, action }) => {
  let movieActorCards = actor.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieActorCard key={m.id} actor={m} action={action} />
    </Grid>
  ));
  return movieActorCards;
};

export default MovieActorList;
