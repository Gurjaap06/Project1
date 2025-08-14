// scripts/reset-views.js
const fs = require("fs");
const path = require("path");

// If you want to also rewrite "home", add it here too.
const pages = [
  "home",
  "about",
  "team",
  "fixtures",
  "news",
  "gallery",
  "stats",
  "shop",
  "contact",
  "faq",
];

const tpl = `<!doctype html>
<html lang="en">
  <%- include('partials/head') %>
  <body class="min-h-screen flex flex-col bg-base-100">
    <%- include('partials/nav') %>

    <main class="container mx-auto p-6 flex-1">
      <section class="prose">
        <h1 class="page-title"><%= title %></h1>
        <p>This is the <%= page %> page. Replace with real content/data.</p>

        <div class="grid md:grid-cols-3 gap-4 mt-6">
          <div class="card bg-base-100 shadow">
            <div class="card-body">
              <h2 class="card-title">Card A</h2>
              <p>Use daisyUI components.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow">
            <div class="card-body">
              <h2 class="card-title">Card B</h2>
              <p>EJS variable: <%= page %></p>
            </div>
          </div>
          <div class="card bg-base-100 shadow">
            <div class="card-body">
              <h2 class="card-title">Card C</h2>
              <p>SCSS per-page demo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <%- include('partials/footer') %>
    <script src="/js/main.js"></script>
  </body>
</html>`;

const viewsDir = path.join(process.cwd(), "views");
for (const p of pages) {
  const file = path.join(viewsDir, `${p}.ejs`);
  fs.writeFileSync(file, tpl, "utf8");
  console.log("Rewrote", `views/${p}.ejs`);
}
console.log("Done.");
