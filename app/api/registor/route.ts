export const POST = async (request : Request) => {
    const {name, email, password} = await request.json();
}