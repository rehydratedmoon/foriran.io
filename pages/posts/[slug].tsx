import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticProps } from "next";
import NextImage from "next/image";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className='H1'>{post.title}</h1>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
        <MDXContent components={{ 
          h1: (props) => <h3 className="H1" {...props} />,
          h2: (props) => <h3 className="H2" {...props} />,
          h3: (props) => <h3 className="H3" {...props} />,
          h4: (props) => <h3 className="H4" {...props} />,
          code: (props) => <code className="bg-gray2 px-2 py-1 rd-md c-gray11" {...props} />,
          Image: (props) => (
            <div className="relative overflow-hidden isolate">
              <NextImage fill={true} {...props} className="object-cover" />
            </div>
          ),
        }} />
      </article>
    </>
  );
};

export default PostLayout;

