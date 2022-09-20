const headers = new Headers([
	["set-cookie", "AuthorizationToken=.; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"],
	["set-cookie", "RefreshToken=.; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"],
	["set-cookie", "UserIdentity=.; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"],
]);

export const GET = () => new Response(null, {
	headers
})