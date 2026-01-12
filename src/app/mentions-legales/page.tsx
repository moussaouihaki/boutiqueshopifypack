
import Link from "next/link";

export default function MentionsLegales() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#030014', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    ← Retour au site
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Mentions Légales</h1>

                <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', lineHeight: '1.8', color: '#cbd5e1' }}>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '1rem', color: '#fff' }}>1. Éditeur du Site</h3>
                    <p>
                        Le site <strong>Le Pack Shopify</strong> est édité par une entreprise individuelle spécialisée dans la vente de produits numériques.
                    </p>
                    <p>
                        <strong>Contact :</strong> contact@shoplaunch.com<br />
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>2. Hébergement</h3>
                    <p>
                        Ce site est hébergé par <strong>Vercel Inc.</strong><br />
                        Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>3. Propriété Intellectuelle</h3>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                    </p>
                </div>
            </div>
        </main>
    );
}
