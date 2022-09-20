import post from "../../lib/POST";

const putQuery = `
query getSignedPutUrl($name: String!) {
	put(name: $name)
}
`

export const POST = post(putQuery);