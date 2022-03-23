select "films"."releaseYear",
       "films"."title",
       "genres"."name" as "genre"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie';
