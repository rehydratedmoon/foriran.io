// import NextLink from "next/link";
// import { useRouter } from "next/router";
// import type { LinkProps } from "next/link";

const Lnk = (props) => {
  // const router = useRouter();
  // let isInPath = props.href === router?.asPath;
  // let isInSubPath = isInPath === false && router?.asPath?.startsWith(props.href as string);
  // if (isInPath) return <NextLink {...props} data-in-path />;
  // if (isInSubPath) return <NextLink {...props} data-in-sub-path />;
  return <a {...props} />;
};

export default Lnk;
