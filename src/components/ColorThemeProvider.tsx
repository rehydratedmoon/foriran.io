
// import { useStore } from '@nanostores/solid';
// import { isCartOpen } from '../cartStore';

// import { ThemeProvider } from "next-themes";

// export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider disableTransitionOnChange attribute="class">
//       {children}
//     </ThemeProvider>
//   );
// }

// export default function CartFlyout() {
//   const $isCartOpen = useStore(isCartOpen);

//   return $isCartOpen() ? <aside>...</aside> : null;
// }