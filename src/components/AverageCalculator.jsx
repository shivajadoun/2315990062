import { useState } from "react"

export default function AverageCalculator() {
  const [numberType, setNumberType] = useState("e")
  const [result, setResult] = useState(null)

  const calculateAverage = async () => {
    try {
      const res = await fetch(`http://localhost:9876/numbers/${numberType}`)
      setResult(await res.json())
    } catch (error) {
      console.error("Calculation Error:", error)
    }
  }

  return (
    <div>
      <select 
        value={numberType}
        onChange={(e) => setNumberType(e.target.value)}
      >
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={calculateAverage}>Calculate</button>
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  )
}