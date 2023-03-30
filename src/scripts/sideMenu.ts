export const openMenu = () => {
    document.documentElement.style.setProperty('--is-side-menu-close', 'var(--FALSE)');
    document.documentElement.style.setProperty('--is-side-menu-open', 'var(--TRUE)');
    document.querySelector('#not-sidebar')?.setAttribute('inert', '');
}

export const closeMenu = () => {
     document.documentElement.style.setProperty('--is-side-menu-open', 'var(--FALSE)');
     document.documentElement.style.setProperty('--is-side-menu-close', 'var(--TRUE)');
     document.querySelector('#not-sidebar')?.removeAttribute('inert');
}