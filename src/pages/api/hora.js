export async function GET() {
    const fecha = new Date().toLocaleDateString()
    const hora = new Date().toLocaleString("es-ES")
    return new Response(JSON.stringify({laFecha: fecha, laHora: hora}))
}