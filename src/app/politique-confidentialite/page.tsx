
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#030014', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    ← Retour au site
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Politique de Confidentialité</h1>

                <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', lineHeight: '1.8', color: '#cbd5e1' }}>
                    <p>
                        <strong>Respect de votre Vie Privée</strong>
                    </p>
                    <p>
                        Chez Le Pack Shopify, nous prenons votre vie privée très au sérieux. Notre philosophie est simple : <span style={{ color: '#fff', fontWeight: 'bold' }}>nous ne conservons aucune donnée inutile.</span>
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>1. Collecte des Données</h3>
                    <p>
                        Les seules informations que nous utilisons sont celles strictement nécessaires pour vous livrer votre commande (votre email). Ces données sont traitées uniquement le temps de la transaction et de la livraison.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>2. Paiements Sécurisés</h3>
                    <p>
                        Toutes les transactions sont gérées intégralement par <strong>Stripe</strong>, leader mondial du paiement en ligne sécurisé. Nous n'avons jamais accès à vos informations bancaires (numéro de carte, cryptogramme). Elles ne transitent jamais par nos serveurs.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>3. Pas de Revente</h3>
                    <p>
                        Nous nous engageons formellement : <strong>vos informations ne sont ni stockées, ni partagées, ni revendues</strong> à des tiers publicitaires.
                    </p>
                </div>
            </div>
        </main>
    );
}
