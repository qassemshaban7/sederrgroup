(function () {
  const C = window.SIDER_CONFIG || {
    phoneDisplay: "0532265519",
    phoneTel: "+966532265519",
    whatsapp: "966532265519",
  };
  const WHATSAPP_URL = `https://wa.me/${C.whatsapp}`;

  function buildWhatsAppLink(serviceName, action) {
    const actionText = action === "quote" ? "طلب عرض سعر" : "حجز";
    const text = encodeURIComponent(
      `السلام عليكم، أرغب في ${actionText} لخدمة: ${serviceName}\nرقم التواصل: ${C.phoneDisplay}`
    );
    return `${WHATSAPP_URL}?text=${text}`;
  }

  document.querySelectorAll("[data-wa-book]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.getAttribute("data-service") || "خدمة";
      window.open(buildWhatsAppLink(service, "book"), "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-wa-quote]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.getAttribute("data-service") || "خدمة";
      window.open(buildWhatsAppLink(service, "quote"), "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-wa-general]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const msg = btn.getAttribute("data-wa-message") || "استفسار عام";
      const text = encodeURIComponent(`السلام عليكم، ${msg}`);
      window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.name?.value?.trim() || "";
      const email = contactForm.email?.value?.trim() || "";
      const phone = contactForm.phone?.value?.trim() || "";
      const message = contactForm.message?.value?.trim() || "";
      const text = encodeURIComponent(
        `رسالة من موقع سدر للخدمات\n\nالاسم: ${name}\nالبريد: ${email}\nالجوال: ${phone}\n\nالرسالة:\n${message}`
      );
      window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuClose = document.getElementById("menu-close");
  const backdrop = document.querySelector(".mobile-menu-backdrop");

  function openMenu() {
    mobileMenu?.classList.add("open");
    document.body.style.overflow = "hidden";
    menuToggle?.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mobileMenu?.classList.remove("open");
    document.body.style.overflow = "";
    menuToggle?.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);
  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 80) header?.classList.add("scrolled");
      else header?.classList.remove("scrolled");
    },
    { passive: true }
  );
})();
