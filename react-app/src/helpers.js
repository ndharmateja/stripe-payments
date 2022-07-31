import { auth } from './firebase'
const API = 'http://localhost:3003'

export const fetchFromApi = async (endpoint, options) => {
  const { method, body } = { method: 'POST', body: null, ...options }

  const user = auth.currentUser
  const token = user && (await user.getIdToken())

  const response = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.json()
}
