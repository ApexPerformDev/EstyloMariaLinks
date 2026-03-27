const botaoWpp = document.getElementById("btn-wpp");
const botaoTg = document.getElementById("btn-tg");

function trackLead(event, url, nome) {
  event.preventDefault();

  fbq("track", "Lead", {
    content_name: nome,
    content_category: "Grupo VIP",
    pixel_id: "885360972067096",
  });

  setTimeout(function () {
    window.location.href = url;
  }, 500);
}

botaoWpp.addEventListener("click", function (e) {
  const linkwpp = "https://chat.whatsapp.com/CZpfQP8SbmdIFx8cJSlo2g?mode=gi_t";
  trackLead(e, linkwpp, "Grupo VIP - WhatsApp");
});


botaoTg.addEventListener("click", function (e) {
  const linktg = "https://t.me/lojaestylomaria";
  trackLead(e, linktg, "Grupo VIP - Telegram");
});
