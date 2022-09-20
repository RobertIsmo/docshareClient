import externalLoad from "../lib/LOAD";


const query = `
{
	me {
		username
	}
}
`

export const load = async (event: any) => {
	return await externalLoad(query, event);
}