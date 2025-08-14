const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const players = [
  {
    name: "Gurjaap Sekhon",
    role: "Batting All-rounder",
    bat: "RHB",
    bowl: "Off-spin",
    matches: 22,
    runs: 712,
    wkts: 18,
  },
  {
    name: "A. Khan",
    role: "Opener",
    bat: "RHB",
    bowl: "-",
    matches: 18,
    runs: 534,
    wkts: 0,
  },
  {
    name: "R. Patel",
    role: "Spinner",
    bat: "LHB",
    bowl: "Leg-spin",
    matches: 25,
    runs: 304,
    wkts: 41,
  },
];

const fixtures = [
  {
    date: "2025-08-16",
    opp: "Toronto Titans",
    ground: "Centennial Park",
    time: "10:00",
  },
  {
    date: "2025-08-23",
    opp: "Scarborough Sharks",
    ground: "L’Amoreaux",
    time: "14:00",
  },
  {
    date: "2025-08-30",
    opp: "Mississauga Mavericks",
    ground: "Meadowvale",
    time: "12:30",
  },
];

const news = [
  {
    id: 1,
    title: "Pre-season camp announced",
    date: "2025-08-10",
    excerpt: "Three-day skills camp with fitness screens.",
    link: "#",
  },
  {
    id: 2,
    title: "Sponsorship with Local Sports",
    date: "2025-08-05",
    excerpt: "New kits arriving next week.",
    link: "#",
  },
];

const gallery = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
];

const products = [
  { name: "Club Jersey", price: 45, img: "/images/jersey.jpg" },
  { name: "Cap", price: 15, img: "/images/cap.jpg" },
  { name: "Kit Bag", price: 65, img: "/images/bag.jpg" },
];

const faqs = [
  {
    q: "How do I join?",
    a: "Use the contact form—someone will reach out in 48h.",
  },
  { q: "Practice days?", a: "Tue/Thu/Fri evenings; matches on weekends." },
  {
    q: "What gear do I need?",
    a: "At minimum bat, pads, gloves, helmet; rentals available for trials.",
  },
];

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

function pageRoute(route, view, title, extraData = {}) {
  app.get(route, (req, res) => {
    res.render(view, { title, page: view, nav, ...extraData });
  });
}

pageRoute("/", "home", "Welcome to Cricket Club", { players, fixtures, news });
pageRoute("/about", "about", "About the Club");
pageRoute("/team", "team", "Team & Staff", { players });
pageRoute("/fixtures", "fixtures", "Match Fixtures", { fixtures });
pageRoute("/news", "news", "Latest News", { news });
pageRoute("/gallery", "gallery", "Gallery", { gallery });
pageRoute("/stats", "stats", "Club Stats", { players });
pageRoute("/shop", "shop", "Shop", { products });
pageRoute("/contact", "contact", "Contact Us");
pageRoute("/faq", "faq", "FAQ", { faqs });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
