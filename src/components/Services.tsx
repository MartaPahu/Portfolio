import { services } from '../data/content'

function Services() {
  return (
    <section id="que-hago" className="bg-citronella px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85]">
          Qué hago
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.id} className="border-t-2 border-negro pt-6">
              {/* padStart convierte 1 en "01" */}
              <span className="font-display text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-3xl uppercase">
                {service.title}
              </h3>
              <p className="mt-3 text-lg">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services