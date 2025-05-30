export async function GET() {


    return new Response(JSON.stringify({message : 123456798}))
    
}

export async function POST(req) {
    const body = await req.json()

    const {name} = body
    
    return new Response(JSON.stringify({message : 132}))
}