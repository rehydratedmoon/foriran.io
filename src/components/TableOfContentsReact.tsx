import type { MarkdownHeading } from 'astro';
import type { FunctionalComponent } from 'preact';
import { unescape } from 'html-escaper';
import { useState, useEffect, useRef } from 'preact/hooks';

type ItemOffsets = {
  id: string;
  topOffset: number;
};

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({ headings = [] }) => {
  const toc = useRef<HTMLUListElement>();
  const onThisPageID = 'on-this-page-heading';
  const itemOffsets = useRef<ItemOffsets[]>([]);
  
  const [currentID, setCurrentID] = useState('');
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll('article :is(h2, h3)');
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener('resize', getItemOffsets);

    return () => {
      window.removeEventListener('resize', getItemOffsets);
    };
  }, []);

  useEffect(() => {
    if (!toc.current) return;

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
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

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);
    console.log("🚀 ~ headingsObserver:", headingsObserver)

    // Observe all the headings in the main page content.
    document.querySelectorAll('article :is(h2,h3)').forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [toc.current]);
  
  const onLinkClick = (e) => {
    setCurrentID(e.target.getAttribute('href').replace('#', ''));
  };
  
  console.log("🚀 ~ currentID:", currentID)
  return (
    <>
      <h2 id={onThisPageID} className='font-family-content c-gray10 text-sm pt-2'>
        فهرست
      </h2>
      <ul ref={toc} className=' list-none p-0 vertical_dashed-line'>
        {headings
          .filter(({ depth }) => depth === 2 ||depth === 3)
          .map((heading) => (
            <li
              className={`c-gray10 truncate ${heading.depth === 2 ? ' mt-3 mb-1 py-0  pis-4 ' : "" }  ${heading.depth === 3 ? 'py-0.4 pis-12 text-sm c-gray11' : "" } ${currentID === heading.slug ? 'bg-gray3' : '' }`}
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
