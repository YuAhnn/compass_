import ArticleContent from "components/article/ArticleContent"
import { getArticleBySlug } from "lib/article/queries"

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return (
    <main>
      <ArticleContent article={article} />
    </main>
  )
}