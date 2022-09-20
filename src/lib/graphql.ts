import { GRAPHQL_ENDPOINT } from "$env/static/private"; 

const gqlRequest = async (query:string, variables={}, reqheaders:Headers=new Headers()) => {
	const cookieHeader = reqheaders.get("Cookie") ?? "";
	const response = await fetch(GRAPHQL_ENDPOINT, {
		method: "POST",
		mode: 'cors',
		body: JSON.stringify({
			query,
			variables
		}),
		headers: {
			'Cookie': cookieHeader,
			'content-type': 'application/json'
		}
	});
	const data = await response.json();
	const { headers, status } = response;
	return { data, headers, status }
}

export default gqlRequest