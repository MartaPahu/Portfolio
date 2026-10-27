import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="flex min-h-[70svh] flex-col items-start justify-center bg-negro px-6 py-24 text-crema md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-serif text-6xl italic text-citronella md:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl uppercase md:text-5xl">
          Esta página no existe
        </h1>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-citronella px-8 py-3 font-bold text-negro hover:bg-crema"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage