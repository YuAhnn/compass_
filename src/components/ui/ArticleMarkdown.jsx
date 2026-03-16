// Override default Markdown components
export const MarkdownComponents = {
  // # 
  h1: ({ children }) => (
    <h1 className="text-3xl font-extrabold text-neutral mt-10 mb-4">
      {children}
    </h1>
  ),

  // ## 
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-neutral mt-8 mb-3">
      {children}
    </h2>
  ),

  // ### 
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-neutral mt-6 mb-2">
      {children}
    </h3>
  ),

  // ---  (horizontal rule)
  hr: () => (
    <div className="divider divider-neutral my-6"></div>
  ),

  // Markdown tables
  table: ({ children }) => (
    <div className="overflow-x-auto my-6 border border-base-300 rounded-box">
      <table className="table table-zebra w-full text-sm">
        {children}
      </table>
    </div>
  ),

  // table header
  thead: ({ children }) => (
    <thead className="bg-base-200 text-neutral">
      {children}
    </thead>
  ),

  // | Header |
  th: ({ children }) => (
    <th className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-left">
      {children}
    </th>
  ),

  // | Cell |
  td: ({ children }) => (
    <td className="px-4 py-2 align-top">
      {children}
    </td>
  ),

  // Paragraph
  p: ({ children }) => (
    <p className="leading-relaxed mb-4 text-base-content/80">
      {children}
    </p>
  ),

  // - list
  li: ({ children }) => (
    <li className="ml-6 mb-1 list-disc text-base-content/80">
      {children}
    </li>
  ),

  // > blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary bg-base-200/40 pl-4 py-2 italic text-base-content/80 my-4 rounded-r-box">
      {children}
    </blockquote>
  ),

  // [text](url)
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link link-primary hover:link-hover"
    >
      {children}
    </a>
  ),

  // **bold**
  strong: ({ children }) => (
    <span className="font-bold text-neutral">
      {children}
    </span>
  ),

  // *italic*
  em: ({ children }) => (
    <span className="italic text-neutral/90">
      {children}
    </span>
  ),

  // `inline code`
  code: ({ children }) => (
    <code className="bg-base-200 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),

  // ```code block```
  pre: ({ children }) => (
    <pre className="bg-base-300 p-4 rounded-box overflow-x-auto mb-6 text-sm font-mono">
      {children}
    </pre>
  ),

  // ![alt](image)
  img: ({ src, alt }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="rounded-box shadow-md max-w-full h-auto"
      />
      {alt && (
        <figcaption className="text-xs text-base-content/60 mt-2 text-center">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
}