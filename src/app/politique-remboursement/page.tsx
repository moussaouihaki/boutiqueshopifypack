
import Link from "next/link";

export default function RefundPolicy() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#030014', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    ← Retour au site
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Politique de Remboursement</h1>

                <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', lineHeight: '1.8', color: '#cbd5e1' }}>
                    <p>
                        <strong>Contenu Numérique et Droit de Rétractation</strong>
                    </p>
                    <p>
                        S'agissant d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé avec votre accord préalable, et pour lequel vous avez renoncé à votre droit de rétractation, <span style={{ color: '#f87171', fontWeight: 'bold' }}>aucun remboursement n'est possible après le téléchargement</span>.
                    </p>
                    <p>
                        En validant votre commande, vous acceptez expressément que la fourniture du contenu numérique commence immédiatement après votre achat et vous renoncez expressément à votre droit de rétractation.
                    </p>
                    <p>
                        Si vous rencontrez un problème technique avec le fichier, notre support est à votre disposition pour vous aider à accéder à votre achat.
                    </p>
                </div>
            </div>
        </main>
    );
}
