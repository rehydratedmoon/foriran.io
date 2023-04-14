import { registerSW } from 'virtual:pwa-register';
import { toast } from 'solid-toast';
registerSW({
  immediate: true,
  onRegisteredSW(swScriptUrl: string) {
    // eslint-disable-next-line no-console
    toast('SW registered');
    console.log('SW registered: ', swScriptUrl);
  },
  onOfflineReady() {
    // eslint-disable-next-line no-console
    toast('PWA Updated');
    console.log('PWA application ready to work offline');
  },
});
