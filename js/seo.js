(function () {
  const C = window.SIDER_CONFIG;
  if (!C?.siteUrl) return;

  const linkedIn = C.officialLinkedIn;

  document.querySelectorAll('link[rel="canonical"]').forEach((el) => {
    const path = window.location.pathname.replace(/^\//, "") || "";
    const page = path === "" ? "" : path.endsWith(".html") ? path : path + ".html";
    const base = C.siteUrl.replace(/\/$/, "");
    el.href = page ? `${base}/${page}` : `${base}/`;
  });

  if (linkedIn && !document.querySelector('meta[property="og:see_also"]')) {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:see_also");
    meta.content = linkedIn;
    document.head.appendChild(meta);
  }

  if (linkedIn && !document.querySelector('link[rel="me"][href*="linkedin"]')) {
    const link = document.createElement("link");
    link.rel = "me";
    link.href = linkedIn;
    document.head.appendChild(link);
  }
})();
