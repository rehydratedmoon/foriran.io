import type { MarkdownHeading } from 'astro';
// import type { FunctionalComponent } from 'preact';
import { unescape } from 'html-escaper';
// import { useState, useEffect, useRef } from 'preact/hooks';
import {  createSignal, onCleanup, onMount } from 'solid-js';
type ItemOffsets = {
  id: string;
  topOffset: number;
};

const TableOfContents = (props: { headings?: MarkdownHeading[]}) => {
  // const toc = useRef<HTMLUListElement>();
  let toc;
  const onThisPageID = 'on-this-page-heading';
  // const itemOffsets = useRef<ItemOffsets[]>([]);
  let itemOffsets = [];
  
  // const [currentID, setCurrentID] = useState('');
  const [currentID, setCurrentID] = createSignal('un-set');
  // useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll('article :is(h2, h3)');
      itemOffsets = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };
    onMount(() => {
      getItemOffsets();
      window.addEventListener('resize', getItemOffsets);
    });
    
    // onCleanup(
    //   () =>  window.removeEventListener('resize', getItemOffsets)
    //   );
  // }, []);

  // useEffect(() => {
    // if (!toc.current) return;

    const setCurrent: IntersectionObserverCallback = (headingEntries) => {
      for (const entry of headingEntries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentID(entry.target.id);
          break;
        }
      }
    };
    
    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '0 0% -66% 0',
      threshold: 1,
    };
    onMount(() => {
      const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);
      console.log("🚀 ~ headingsObserver:", headingsObserver)
      
      // Observe all the headings in the main page content.
      onMount(() => {
        document.querySelectorAll('article :is(h2,h3)').forEach((h) => headingsObserver.observe(h));
      })
    })
    // Stop observing when the component is unmounted.
    // onCleanup( () => headingsObserver.disconnect())
  // }, [toc.current]);
  
  const onLinkClick = (e) => {
    setCurrentID(e.target.getAttribute('href').replace('#', ''));
  };
  
  return (
    <>
      <h2 id={onThisPageID} class='font-family-content c-gray10 text-sm pt-2'>
        فهرست
      </h2>
      <ul ref={toc} class=' list-none p-0 vertical_dashed-line'>
        {props?.headings && props.headings.length > 0 && props.headings
          .filter(({ depth }) => depth === 2 || depth === 3)
          .map((heading) => (
            <li
              class={`c-gray10 truncate ${heading.depth === 2 ? ' mt-3 mb-1 py-0  pis-4 ' : "" }  ${heading.depth === 3 ? 'py-0.4 pis-12 text-sm c-gray11' : "" } ${currentID() === heading.slug ? 'bg-gray3' : '' }`}
            >
              <a href={`#${heading.slug}`} onClick={onLinkClick}>
                {unescape(heading.text)}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TableOfContents;
