import { registerSW } from 'virtual:pwa-register';
import { toast } from 'solid-toast';
registerSW({
  immediate: true,
  onRegisteredSW(swScriptUrl: string) {
    // toast('SW registered');
    // console.log('SW registered: ', swScriptUrl);
  },
  onOfflineReady() {
    toast.success('برنامه بروز شد.');
    // console.log('PWA application ready to work offline');
  },
});
