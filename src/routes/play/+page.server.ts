export function load({setHeaders}) {
    setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Cross-Origin-Opener-Policy': 'unsafe-none',
        'Cross-Origin-Embedder-Policy': 'credentialless'
    });
}