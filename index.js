const PORT = 4000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const url = "https://covrprice.com/issue/west-coast-avengers-vol-2-45/";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const info = [];

    $("span", html).each(function () {
      const item = $(this).text();
      info.push({
        item,
      });
    });
    console.log(info);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
