const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const pages = [
  { path: "/", view: "home", title: "Welcome to Cricket Club" },
  { path: "/about", view: "about", title: "About the Club" },
  { path: "/team", view: "team", title: "Team & Staff" },
  { path: "/fixtures", view: "fixtures", title: "Match Fixtures" },
  { path: "/news", view: "news", title: "Latest News" },
  { path: "/gallery", view: "gallery", title: "Gallery" },
  { path: "/stats", view: "stats", title: "Club Stats" },
  { path: "/shop", view: "shop", title: "Shop" },
  { path: "/contact", view: "contact", title: "Contact Us" },
  { path: "/faq", view: "faq", title: "FAQ" },
];

const nav = pages.map((p) => ({
  href: p.path,
  label: p.view.charAt(0).toUpperCase() + p.view.slice(1),
}));

pages.forEach(({ path: route, view, title }) => {
  app.get(route, (req, res) => {
    res.render(view, { title, page: view, nav });
  });
});

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
