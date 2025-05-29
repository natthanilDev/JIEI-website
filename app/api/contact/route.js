

export async function GET() {
  return new Response(JSON.stringify({ message: 123456789 }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
// 

