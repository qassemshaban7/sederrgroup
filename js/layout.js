(function () {
  const C = window.SIDER_CONFIG;
  const WA = `https://wa.me/${C.whatsapp}`;
  const pages = [
    { id: "home", href: "index.html", label: "الرئيسية" },
    { id: "services", href: "services.html", label: "الخدمات" },
    { id: "about", href: "about.html", label: "من نحن" },
    { id: "contact", href: "contact.html", label: "التواصل" },
  ];

  function navLink(page, active) {
    const cls = page.id === active ? "active" : "";
    return `<a href="${page.href}" class="${cls}">${page.label}</a>`;
  }

  function officialBar() {
    const corp = C.officialCorporateUrl || "https://sedergroup.com";
    const li = C.officialLinkedIn || "#";
  const corpName = C.officialCorporateName || "SEDER GROUP";
    return `
<div class="official-bar" role="note">
  <div class="official-bar-inner">
    <span>موقع خدمات معتمد تابع لـ <strong>${corpName}</strong></span>
    <span class="official-bar-links">
      <a href="${corp}" target="_blank" rel="noopener noreferrer">الموقع الرسمي للمجموعة</a>
      <span aria-hidden="true">|</span>
      <a href="${li}" target="_blank" rel="noopener noreferrer">LinkedIn المعتمد</a>
    </span>
  </div>
</div>`;
  }

  function header(active) {
    return `
${officialBar()}
<header class="site-header">
  <nav class="nav-inner" aria-label="التنقل الرئيسي">
    <a href="index.html" class="logo" title="${C.siteName}">
      <span class="brand-primary">سدر</span><span> للخدمات</span>
    </a>
    <div class="nav-links">
      ${pages.map((p) => navLink(p, active)).join("")}
    </div>
    <div class="nav-actions">
      <a href="${WA}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg hide-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        <span>واتساب</span>
      </a>
      <a href="tel:${C.phoneTel}" class="btn btn-primary btn-lg hide-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span dir="ltr">${C.phoneDisplay}</span>
      </a>
      <button type="button" class="menu-toggle hide-lg" id="menu-toggle" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mobile-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </div>
  </nav>
</header>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <div class="mobile-menu-backdrop"></div>
  <div class="mobile-menu-panel">
    <button type="button" class="mobile-menu-close" id="menu-close" aria-label="إغلاق القائمة">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
    <nav class="mobile-nav">
      ${pages.map((p) => navLink(p, active)).join("")}
    </nav>
    <div class="mobile-contact">
      <a href="tel:${C.phoneTel}" class="btn btn-primary btn-block btn-lg">
        <span dir="ltr">${C.phoneDisplay}</span>
      </a>
      <a href="${WA}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block btn-lg">واتساب</a>
    </div>
  </div>
</div>`;
  }

  function footer() {
    return `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid footer-grid-5">
      <div>
        <div class="footer-brand"><span>سدر</span><span class="accent"> للخدمات</span></div>
        <p class="footer-desc">حلول بيئية متكاملة لإدارة النفايات ونقل المياه في المملكة العربية السعودية</p>
      </div>
      <div class="footer-col">
        <h3>معلومات التواصل</h3>
        <ul class="footer-contact">
          <li><a href="tel:${C.phoneTel}"><span dir="ltr">${C.phoneDisplay}</span></a></li>
          <li><a href="${WA}" target="_blank" rel="noopener noreferrer"><span dir="ltr">${C.phoneDisplay}</span> واتساب</a></li>
          <li><span>${C.address}</span></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>ساعات العمل</h3>
        <p style="font-size:0.875rem;opacity:0.85;"><strong style="display:block;">24/7</strong>متاح طوال أيام الأسبوع</p>
      </div>
      <div class="footer-col">
        <h3>روابط سريعة</h3>
        <ul class="footer-links">
          <li><a href="index.html">الرئيسية</a></li>
          <li><a href="services.html">الخدمات</a></li>
          <li><a href="about.html">من نحن</a></li>
          <li><a href="contact.html">التواصل</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>المجموعة الرسمية</h3>
        <ul class="footer-links">
          <li><a href="${C.officialCorporateUrl}" target="_blank" rel="noopener noreferrer">${C.officialCorporateName} — الموقع الرسمي</a></li>
          <li><a href="${C.officialLinkedIn}" target="_blank" rel="noopener noreferrer">صفحة LinkedIn المعتمدة</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} سدر للخدمات. جميع الحقوق محفوظة.</p>
      <div class="footer-legal">
        <a href="privacy.html">سياسة الخصوصية</a>
        <a href="terms.html">الشروط والأحكام</a>
      </div>
    </div>
  </div>
</footer>
<a href="${WA}" class="fab-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;
  }

  const active = document.body.getAttribute("data-page") || "home";
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.innerHTML = header(active);
  if (footerSlot) footerSlot.innerHTML = footer();
})();
