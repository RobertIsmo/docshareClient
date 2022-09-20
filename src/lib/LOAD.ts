import gqlRequest from "./graphql";
import cookieParser from "set-cookie-parser";
const LOAD = async (query, { request, cookies }) => {
	const reqHeaders = request.headers;
	const { data, headers, status } = await gqlRequest(query, {}, reqHeaders);
	const ckies = headers.get('set-cookie');
	if(ckies) {
		cookieParser(ckies).forEach(({name, value, ...rest}) => {
			cookies.set(name, value, rest)
		});
	}
	return { status, ...data }

}
export default LOAD