(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  const inProjectsFolder = location.pathname.includes("/projects/");
  const root = inProjectsFolder ? "../" : "";
  const navItems = [
    [`${root}index.html`, "Home"],
    [inProjectsFolder ? "projects.html" : "projects/projects.html", "Projects"],
    [`${root}people.html`, "People"],
    [`${root}publications.html`, "Publications"],
    [`${root}news.html`, "News & Media"],
    [`${root}prospective-students.html`, "Prospective Students"],
    [`${root}contact.html`, "Contact"],
  ];
  const header = `<a class="skip-link" href="#main">Skip to main content</a><header class="site-header"><a class="brand" href="${root}index.html" aria-label="DELA Lab home"><span class="brand-name">DELA Lab</span><span class="brand-tagline">Design · Emerging Technologies · Learning · Analytics</span></a><button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span class="sr-only">Open navigation</span><span aria-hidden="true">Menu</span></button><nav class="nav" id="site-nav" aria-label="Main navigation">${navItems.map(([href, label]) => `<a href="${href}"${path === href.split("/").pop() ? ' aria-current="page"' : ""}>${label}</a>`).join("")}<form class="site-search" action="${root}search.html" role="search"><label class="sr-only" for="site-search-input">Search the site</label><input id="site-search-input" type="search" name="q" placeholder="Search…"><button type="submit" aria-label="Search">Go</button></form></nav></header>`;
  const footer = `<footer class="site-footer"><div class="footer-grid"><div><h2>DELA Lab</h2><p>Design · Emerging Technologies · Learning · Analytics</p></div><div><h2>Contact</h2><p>Department of Education and Human Development<br>Clemson University<br>Clemson, SC</p><p class="placeholder-text">[Add lab email]</p></div><div><h2>Quick Links</h2><div class="footer-links">${navItems.slice(1).map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</div></div></div><div class="footer-bottom"> <span data-current-year></span> DELA Lab · Clemson University</div></footer>`;
  document.querySelector("[data-site-header]")?.replaceWith(document.createRange().createContextualFragment(header));
  document.querySelector("[data-site-footer]")?.replaceWith(document.createRange().createContextualFragment(footer));
  document.querySelectorAll("[data-current-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
