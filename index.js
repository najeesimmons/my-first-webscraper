const PORT = 4000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const url =
  "https://www.milehighcomics.com/cgi-bin/backissue.cgi?action=enlarge&issue=24427252592%200";
axios(url).then((response) => {
  const html = response.data;
  console.log(html)
});
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
