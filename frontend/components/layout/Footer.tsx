import Link from 'next/link'

const footerLinks = {
  product: [
    { name: 'Análise de Perfil', href: '/analyze' },
    { name: 'Top Virais', href: '/top-virais' },
    { name: 'Templates', href: '/templates' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Suporte', href: '/support' },
    { name: 'Documentação', href: '/docs' },
  ],
  company: [
    { name: 'Sobre', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-800 dark:bg-dark-900 text-white border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
              ViralPulse
            </h3>
            <p className="text-dark-300 text-sm">
              Análise inteligente de perfis Instagram com IA
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-700 text-center text-sm text-dark-300">
          <p>&copy; {new Date().getFullYear()} ViralPulse. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

