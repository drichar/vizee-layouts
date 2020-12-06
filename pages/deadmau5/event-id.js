import Layout from '../../components/Layout'

export default function Event() {
  return (
    <Layout>
      <article className="max-w-screen-2xl mx-auto sm:p-6 lg:p-8 lg:flex page-min-height">
        <section className="flex-grow">
          <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/tp4sRMoxlig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <aside className="flex-none lg:w-80">

        </aside>
      </article>
    </Layout>
  )
}
