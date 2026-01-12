
import Link from "next/link";

export default function CGV() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#030014', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    ← Retour au site
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Conditions Générales de Vente (CGV)</h1>

                <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', lineHeight: '1.8', color: '#cbd5e1' }}>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '1rem', color: '#fff' }}>1. Objet</h3>
                    <p>
                        Les présentes conditions régissent les ventes de produits numériques (pack de thèmes Shopify) par Le Pack Shopify.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>2. Prix</h3>
                    <p>
                        Les prix de nos produits sont indiqués en euros (€) toutes taxes comprises (TTC). Le Pack Shopify se réserve le droit de modifier ses prix à tout moment.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>3. Livraison</h3>
                    <p>
                        Les produits sont livrés instantanément par email après validation du paiement. Le client doit s'assurer de fournir une adresse email valide.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>4. Non-Remboursement</h3>
                    <p>
                        Conformément à l'article L221-28 du Code de la Consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel. <strong style={{ color: '#f87171' }}>Tout achat est ferme et définitif.</strong>
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>5. Responsabilité</h3>
                    <p>
                        Les thèmes sont fournis "tels quels". Le Pack Shopify ne saurait être tenu responsable des problèmes techniques liés à Shopify ou à l'hébergement du client.
                    </p>
                </div>
            </div>
        </main>
    );
}
