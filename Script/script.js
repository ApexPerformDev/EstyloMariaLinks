const botaoWpp = document.getElementById("btn-wpp");
const botaoTg = document.getElementById("btn-tg");

function trackGrupoVIP(event, url, nomeDoCanal) {
  event.preventDefault(); 

  fbq("trackCustom", "GrupoVIP", {
    canal: nomeDoCanal,
    pixel_id: "885360972067096",
  });

  setTimeout(function () {
    //window.location.href = url;
  }, 500);
}


botaoWpp.addEventListener("click", function (e) {
  const linkwpp = "https://chat.whatsapp.com/CZpfQP8SbmdIFx8cJSlo2g?mode=gi_t";
  trackGrupoVIP(e, linkwpp, "whatsapp");
});


botaoTg.addEventListener("click", function (e) {
  const linktg = "https://t.me/lojaestylomaria";
  trackGrupoVIP(e, linktg, "telegram");
});
