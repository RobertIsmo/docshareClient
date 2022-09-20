import post from '../../../lib/POST';

const query = `
mutation SignUp($username: String!, $email: String!, $password: String!) {
	signup(fields: {username: $username, email: $email, password: $password})
}
`

export const POST = post(query);