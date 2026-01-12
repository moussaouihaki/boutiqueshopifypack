import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="section relative overflow-hidden" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Full Width Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}>
          {/* Dark Overlay to make text readable */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(3,0,20,0.7) 0%, rgba(3,0,20,0.9) 100%)' }}></div>
        </div>

        <div className="container flex-center" style={{ position: 'relative', zIndex: 10, padding: '0 20px' }}>
          <div className="hero-badge">
            ⚡️ Pack Tout-en-un
          </div>

          <h1 style={{ maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
            100+ Thèmes <span className="text-gradient">Shopify Premium</span><br />
            Pour Toutes Vos Boutiques
          </h1>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.9 }}>
            Accédez instantanément à 100+ Thèmes, une Formation complète et des Exemples de Pubs TikTok. Ne perdez plus de temps sur le design : importez et vendez.
          </p>


        </div>
      </section>

      {/* Features Grid */}
      {/* Key Features (Updated) */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="flex-center">
            <h2 className="text-gradient">Pourquoi Choisir Notre Pack ?</h2>
            <p>Lancer un business en ligne ne devrait pas être compliqué ni coûter une fortune.</p>
          </div>

          <div className="grid-3">
            <FeatureCard
              icon="⏱️"
              title="Gagnez 50h+ de Travail"
              desc="Ne partez pas de zéro. Nos thèmes sont pré-configurés pour la conversion. Importez, modifiez le logo, et vendez le jour même."
            />
            <FeatureCard
              icon="💸"
              title="Économisez 2000€+"
              desc="Un développeur Shopify coûte cher. Avec ce pack, vous avez accès à une bibliothèque de designs agence pour le prix d'un café."
            />
            <FeatureCard
              icon="🚀"
              title="Lancement Instantané"
              desc="Pas besoin de compétences techniques. Compatible avec toutes les niches (Mode, Beauté, Tech...). Votre boutique est prête en 5 min."
            />
            <FeatureCard
              icon="📚"
              title="Guide d'Installation"
              desc="Pas de panique. On vous fournit un guide PDF étape par étape pour installer votre thème en 2 minutes chrono."
            />
            <FeatureCard
              icon="🎵"
              title="Bonus Pubs TikTok"
              desc="En cadeau : Une bibliothèque d'exemples de publicités TikTok virales pour vous inspirer et lancer vos premières ventes."
            />
            <FeatureCard
              icon="🎓"
              title="Formation Dropshipping Offerte"
              desc="De Zéro à Expert : Accédez à une formation vidéo complète de A à Z. Recherche de produits, marketing, influenceurs... Tout est là."
            />
          </div>
        </div>
      </section>

      {/* Showcase / Preview Section */}
      <section className="section">
        <div className="container">
          <div className="flex-center" style={{ marginBottom: '4rem' }}>
            <h2>Des Designs <span className="text-gradient">Premium</span></h2>
            <p>Compatible avec toutes les niches. Aperçu de ce que vous recevez.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '1rem' }}>
              <img src="/images/showcase-main-v2.png" alt="Collection de thèmes" style={{ width: '100%', borderRadius: '12px' }} />
              <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>100+ Templates Variés</p>
            </div>
            <div className="glass-panel" style={{ padding: '1rem' }}>
              <img src="/images/showcase-mobile-v2.png" alt="Optimisé Mobile" style={{ width: '100%', borderRadius: '12px' }} />
              <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>100% Responsive & Mobile First</p>
            </div>
            <div className="glass-panel" style={{ padding: '1rem' }}>
              <img src="/images/showcase-niches-v2.png" alt="Pour toutes les niches" style={{ width: '100%', borderRadius: '12px' }} />
              <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>Mode, Beauté, Tech, Maison...</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', marginTop: '2rem' }}>
            <img src="/images/showcase-grid-v2.png" alt="Grille de thèmes" style={{ width: '100%', borderRadius: '12px' }} />
            <p style={{ marginTop: '1rem', textAlign: 'center', color: '#a78bfa' }}>Et bien plus encore...</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section">
        <div className="container">
          <div className="flex-center">
            <h2>Arrêtez de Payer Trop Cher</h2>
            <p>Le moyen le plus intelligent de lancer votre boutique en 2025.</p>
          </div>

          <div className="comparison-container glass-panel" style={{ padding: 0 }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Fonctionnalité</th>
                  <th className="comparison-highlight">Notre Pack</th>
                  <th>Dév Freelance</th>
                  <th>Faire Soi-même</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>⚡️ Temps de lancement</td>
                  <td className="comparison-highlight-middle"><span style={{ color: '#fff', fontWeight: 'bold' }}>5 Minutes</span></td>
                  <td>3 Semaines</td>
                  <td>2 Mois</td>
                </tr>
                <tr>
                  <td>💰 Coût Estimé</td>
                  <td className="comparison-highlight-middle"><span style={{ color: '#fff', fontWeight: 'bold' }}>49€ (Tout inclus)</span></td>
                  <td>2000€ +</td>
                  <td>0€ (mais 100h perdues)</td>
                </tr>
                <tr>
                  <td>🎨 Design Professionnel</td>
                  <td className="comparison-highlight-middle"><span className="check-icon">✓</span></td>
                  <td>Variable</td>
                  <td><span className="cross-icon">✕</span></td>
                </tr>
                <tr>
                  <td>📱 Mobile Optimisé</td>
                  <td className="comparison-highlight-middle"><span className="check-icon">✓</span></td>
                  <td><span className="check-icon">✓</span></td>
                  <td><span className="cross-icon">✕</span></td>
                </tr>
                <tr>
                  <td style={{ borderBottom: 'none' }}>🔒 Support Inclus</td>
                  <td className="comparison-highlight-bottom"><span className="check-icon">✓</span></td>
                  <td style={{ borderBottom: 'none' }}>Payant ($$$)</td>
                  <td style={{ borderBottom: 'none' }}><span className="cross-icon">✕</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="flex-center">
            <h2 className="text-gradient">Ils ont réussi avec ce pack</h2>
          </div>

          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="flex-center">
              <div className="stats-circle" style={{ '--percent': '94%' } as any}>
                <div className="stats-inner">94%</div>
              </div>
              <h3>Lancement Rapide</h3>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Ont lancé leur site plus vite que prévu.</p>
            </div>
            <div className="flex-center">
              <div className="stats-circle" style={{ '--percent': '91%' } as any}>
                <div className="stats-inner">91%</div>
              </div>
              <h3>Conversion Boostée</h3>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Ont remarqué un meilleur taux de conversion.</p>
            </div>
            <div className="flex-center">
              <div className="stats-circle" style={{ '--percent': '88%' } as any}>
                <div className="stats-inner">88%</div>
              </div>
              <h3>Confiance Totale</h3>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Se sentent plus crédibles face à leurs clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview (Simple) */}
      <section id="products" className="section">
        <div className="container flex-center">
          <div className="glass-panel" style={{ maxWidth: '800px', width: '100%', padding: '3rem' }}>
            <div className="hero-badge" style={{ background: 'rgba(244, 114, 182, 0.1)', color: '#f472b6', borderColor: 'rgba(244, 114, 182, 0.2)' }}>
              🔥 Offre Limitée
            </div>
            <h2>Obtenez votre accès maintenant</h2>
            <p>Rejoignez les entrepreneurs malins qui ne gaspillent pas leur budget en design.</p>

            <div style={{
              width: '100%',
              borderRadius: '12px',
              margin: '2rem 0',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative'
            }}>
              <img
                src="/images/bundle-preview.png"
                alt="Aperçu du pack de thèmes Shopify"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, #030014 0%, transparent 100%)',
                height: '80px'
              }}></div>
            </div>

            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>
              49€ <span style={{ fontSize: '1.2rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 'normal' }}>297€</span>
            </div>
            <p style={{ color: '#a78bfa', fontSize: '0.9rem', marginBottom: '2rem' }}>Licence Commerciale • Mises à jour à vie • <span style={{ color: '#fff', fontWeight: 'bold' }}>BONUS (Guide + Ads + Formation)</span></p>

            <Link href="/api/checkout" className="btn btn-primary" style={{ width: '100%', display: 'inline-block' }}>
              Télécharger le Pack Maintenant
            </Link>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
              TVA incluse • Accès immédiat par email
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="flex-center">
            <h2>Une Question ?</h2>
            <p>Notre équipe vous répond sous 24h.</p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <div className="glass-panel">
              <p style={{ marginBottom: '2rem' }}>
                Besoin d'aide pour installer votre pack ou une question avant d'acheter ?<br />
                Notre équipe est là pour vous accompagner.
              </p>
              <a href="mailto:parisportifvip@outlook.com" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                ✉️ Envoyer un email
              </a>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1.5rem', marginBottom: 0 }}>
                Réponse garantie sous 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', background: 'rgba(3, 0, 20, 0.8)', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', color: '#64748b' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>Le Pack Shopify</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a href="/mentions-legales" style={{ color: '#94a3b8', textDecoration: 'none' }}>Mentions Légales</a>
            <a href="/politique-confidentialite" style={{ color: '#94a3b8', textDecoration: 'none' }}>Politique de Confidentialité</a>
            <a href="/politique-remboursement" style={{ color: '#94a3b8', textDecoration: 'none' }}>Politique de Remboursement</a>
            <a href="/cgv" style={{ color: '#94a3b8', textDecoration: 'none' }}>CGV</a>
          </div>

          <p>© 2026 Le Pack Shopify. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Le Pack Shopify 🚀
        </Link>
        <div className="nav-links">
          <a href="#products" className="nav-link">Produits</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="glass-panel">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p style={{ fontSize: '0.95rem', margin: 0 }}>{desc}</p>
    </div>
  );
}
