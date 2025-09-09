export default function Resume() {
    const isMobile = window.innerWidth <= 600;

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <p style={{ textAlign: 'center', marginTop: '1em' }}>
                If the PDF does not display, <a href="/Connor McDonald_Frontend_Website_Developer.pdf" target="_blank" rel="noopener noreferrer">click here to view or download the resume.</a>
            </p>
            {!isMobile && (
                <embed
                    src="/Connor McDonald_Frontend_Website_Developer.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    style={{ minHeight: 500 }}
                />
            )}
        </div>
    );
}