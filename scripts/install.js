let deferredPrompt;

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;

  // Exibir mensagem de instalação
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';
  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice
      .then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou instalar o Controle de Frotas');
        }
        deferredPrompt = null;
      });
  });
});