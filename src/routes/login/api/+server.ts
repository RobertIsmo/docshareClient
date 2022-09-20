import post from '../../../lib/POST';

const query = `
query SignIn($username: String!, $password: String!) {
	signin(fields: {username: $username, password: $password})
}
`

export const POST = post(query);