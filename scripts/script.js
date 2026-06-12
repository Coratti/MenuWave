const WHATSAPP_NUMBER = "5534984416794";

const whatsappButton = document.getElementById("whatsappButton");
const planButtons = document.querySelectorAll(".plan-button");

function createWhatsappLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;// Link que direciona para o zap zaps
}

whatsappButton.addEventListener("click", function (event) {
  event.preventDefault();

  const message = "Olá! Tenho interesse em conhecer melhor o cardápio digital da MenuWave.";
  window.open(createWhatsappLink(message), "_blank");
});

planButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedPlan = button.dataset.plan;
    const message = `Olá! Tenho interesse no ${selectedPlan} da MenuWave. Pode me passar mais informações?`;

    window.open(createWhatsappLink(message), "_blank");
  });
});