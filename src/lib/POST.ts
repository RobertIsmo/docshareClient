import gqlRequest from "./graphql";
const POST = (query: string) => {
	return async ({ request }) => {
		const body = await request.json();
		const { data, headers, status } = await gqlRequest(query, body, request.headers);
		const responseHeaders = new Headers(headers);
		responseHeaders.delete('content-length');
		return new Response(JSON.stringify(data), {
			headers,
			status
		});
	}
}
export default POST