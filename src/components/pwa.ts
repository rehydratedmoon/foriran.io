import { registerSW } from 'virtual:pwa-register';

window.addEventListener('load', () => {
  const pwaToast = document.querySelector<HTMLDivElement>('#pwa-toast')!;
  const pwaToastMessage = pwaToast.querySelector<HTMLDivElement>('.message #toast-message')!;
  const pwaCloseBtn = pwaToast.querySelector<HTMLButtonElement>('#pwa-close')!;
  const pwaRefreshBtn = pwaToast.querySelector<HTMLButtonElement>('#pwa-refresh')!;

  let refreshSW: ((reloadPage?: boolean) => Promise<void>) | undefined;

  const refreshCallback = () => refreshSW?.(true);

  const hidePwaToast = ({ withRAF = false }) => {
    if (withRAF) {
      requestAnimationFrame(() => hidePwaToast({ withRAF: false }));
      return;
    }
    if (pwaToast.classList.contains('refresh')) pwaRefreshBtn.removeEventListener('click', refreshCallback);

    pwaToast.classList.remove('show', 'refresh');
  };
  const showPwaToast = ({ event }) => {
    if (event === 'need-refresh') pwaRefreshBtn.addEventListener('click', refreshCallback);
    requestAnimationFrame(() => {
      hidePwaToast({ withRAF: false });
      if (event === 'need-refresh') pwaToast.classList.add('refresh');
      pwaToast.classList.add('show');
    });
  };

  pwaCloseBtn.addEventListener('click', () => hidePwaToast({ withRAF: true }));

  refreshSW = registerSW({
    immediate: true,
    onOfflineReady() {
      pwaToastMessage.innerHTML = 'App ready to work offline';
      showPwaToast({ event: 'offline-ready' });
    },
    onNeedRefresh() {
      pwaToastMessage.innerHTML = 'New content available, click on reload button to update';
      showPwaToast({ event: 'need-refresh' });
    },
    onRegisteredSW(swScriptUrl) {
      // eslint-disable-next-line no-console
      console.log('SW registered: ', swScriptUrl);
    },
  });
});
