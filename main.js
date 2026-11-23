/* ===========================================================
   CONFIGURAÇÃO: troque pelo seu número com DDI + DDD (só números)
   Exemplo: 5511987654321
   =========================================================== */
const WHATSAPP = "5531996916719";

// Links do WhatsApp com mensagem pronta
document.querySelectorAll(".js-whatsapp").forEach((el) => {
  const msg = el.dataset.msg || "Olá! Vim pelo site da Ônix.";
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Menu no celular
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Alternar entre site avulso e combo de 6 meses
const plans = document.getElementById("plans");
document.querySelectorAll(".switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    document.querySelectorAll(".switch__btn").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active);
    });
    plans.querySelectorAll("[data-avulso]").forEach((el) => {
      el.textContent = el.dataset[mode];
    });
    plans.querySelector('[data-plan="essencial"]').classList.toggle("plan--off", mode === "combo");
  });
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Abrir os planos já no Combo 6 meses
document.querySelector('.switch__btn[data-mode="combo"]').click();
