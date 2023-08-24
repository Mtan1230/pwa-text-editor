const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // Store the triggered events
  window.deferredPrompt = event;

  // Show the button.
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Hide the button
  butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (event) => {
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
});
