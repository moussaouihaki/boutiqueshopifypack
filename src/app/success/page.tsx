
import Link from "next/link";

export default function SuccessPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#030014', color: '#fff', textAlign: 'center', padding: '2rem' }}>
            <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', padding: '3rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>Paiement Réussi !</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
                    Merci pour votre commande. Votre pack est prêt à être téléchargé.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Téléchargement Immédiat</p>
                    <a
                        href="https://mega.nz/folder/bJAlUaSb#7dG2y_qDsMO_HzJNftQlRQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ display: 'inline-block', width: '100%', textDecoration: 'none' }}
                    >
                        Télécharger mon Pack 🚀
                    </a>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '1rem' }}>
                        Un email de confirmation vous a également été envoyé (vérifiez vos spams).
                    </p>
                </div>

                <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none' }}>
                    Retour à l'accueil
                </Link>
            </div>
        </main>
    );
}
