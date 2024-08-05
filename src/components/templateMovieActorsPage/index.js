import React, { useState } from "react";
import MovieActorList from "../movieActorList";

import Grid from "@mui/material/Grid";

function MovieActorListPageTemplate({ actor, name, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  //const [originalName, setOriginalName] = useState("");

  let displayedMovieActor = actor
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((actor) => {
      return genderFilter === "" || actor.gender === genderFilter;
    })
    .filter((m) => {
      return m.name.toLowerCase().search(originalName.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "gender") setGenderFilter(value);
    //    else if (type === "originalName") setOriginalName(value);
  };

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}></Grid>
      <Grid item container spacing={5}>
        <MovieActorList
          action={action}
          actor={displayedMovieActor}
        ></MovieActorList>
      </Grid>
    </Grid>
  );
}
export default MovieActorListPageTemplate;
