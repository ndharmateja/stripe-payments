const API = 'http://localhost:3003'

export const fetchFromApi = async (endpoint, options) => {
  const { method, body } = { method: 'POST', body: null, ...options }

  const response = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}
