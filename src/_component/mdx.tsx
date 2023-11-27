import ReactMarkdown, { Components } from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import scn from "scn";
// import "highlight.js/styles/github-dark-dimmed.min.css";
import "highlight.js/styles/base16/apathy.min.css";

const components: Components = {
  h1: ({ className, node: _n, ...props }) => (
    <h1
      className={scn(
        "mt-2 scroll-m-20 text-3xl font-bold tracking-tight text-black",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, node: _n, ...props }) => (
    <h2
      className={scn(
        "mt-10 scroll-m-20 border-b  border-b-zinc-50/10 pb-3 text-2xl font-semibold tracking-tight text-black first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, node: _n, ...props }) => (
    <h3
      className={scn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-black",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, node: _n, ...props }) => (
    <h4
      className={scn(
        "mt-8 scroll-m-20 text-lg font-semibold text-black tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, node: _n, ...props }) => (
    <h5
      className={scn(
        "mt-8 scroll-m-20 text-sm font-semibold text-black tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, node: _n, ...props }) => (
    <h6
      className={scn(
        "mt-8 scroll-m-20 text-base font-semibold text-black tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, node: _n, ...props }) => (
    <a
      className={scn(
        "font-medium text-black-800 underline underline-offset-4",
        className
      )}
      href={href ?? ""}
      {...props}
    />
  ),
  strong: ({ className, node: _n, ...props }) => (
    <strong className={scn("font-bold text-black-800", className)} {...props} />
  ),
  p: ({ className, node: _n, ...props }) => (
    <p
      className={scn("leading-7  text-black [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, node: _n, ...props }) => (
    <ul className={scn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, node: _n, ...props }) => (
    <ol className={scn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, node: _n, ...props }) => (
    <li className={scn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, node: _n, ...props }) => (
    <blockquote
      className={scn(
        "mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, node: _n, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <div className="w-full grid place-items-center">
      <img
        className={scn("rounded-md inline-block", className)}
        alt={alt}
        {...props}
      />
    </div>
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props} />
  ),
  table: ({ className, node: _n, ...props }) => (
    <div className="w-full my-6 overflow-y-auto">
      <table className={scn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, node: _n, ...props }) => (
    <tr
      className={scn(
        "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, node: _n, ...props }) => (
    <th
      className={scn(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, node: _n, ...props }) => (
    <td
      className={scn(
        "border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, node: _n, ...props }) => (
    <pre
      className={scn(
        "overflow-x-auto rounded-lg p-0 border-zinc-700",
        className
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
  baseUri?: string;
}

export function Mdx({ code, baseUri }: MdxProps) {


  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        rehypeSlug,
        rehypeAutolinkHeadings,

      ]}
      className="mdx text-black"
    >
      {code}
    </ReactMarkdown>
  );
}
