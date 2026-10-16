import { profile } from '../data/content'

function Footer() {
  return (
    <footer className="bg-negro px-6 py-8 text-sm text-crema/70 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Hecho con React, TypeScript y Tailwind</span>
      </div>
    </footer>
  )
}

export default Footer