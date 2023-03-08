import express from "express";

const url = "https://api.visualthinking.fdnd.nl/api/v1/";

// Maak een nieuwe express app
const app = express();

// Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maak een route voor de index
app.get("/", (request, response) => {
  let methodsUrl = url + "/methods?first100";
  fetchJson(methodsUrl).then((data) => {
    response.render("index", data);
  });
});

app.get("/werkwijze", (request, response) => {
  let slug = request.query.werkwijzeSlug || "roadmap";
  let werkwijzeUrl = url + "/werkwijze/" + slug;
  fetchJson(werkwijzeUrl).then((data) => {
    response.render("werkwijze", data);
  });
});

// Stel het poortnummer in en start express
app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}
