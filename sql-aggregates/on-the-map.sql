select count("cities".*) as "numberOfCities",
       "countries"."name" as "country"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."countryId";
