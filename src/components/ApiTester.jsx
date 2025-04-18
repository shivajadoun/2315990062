import { useState } from "react"

export default function ApiTester() {
  const [response, setResponse] = useState(null)

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`http://20.244.56.144/evaluation-service${endpoint}`)
      setResponse(await res.json())
    } catch (error) {
      console.error("API Error:", error)
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => fetchData("/users")}>Get Users</button>
        <button onClick={() => fetchData("/users/1/posts")}>Get Posts</button>
      </div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}