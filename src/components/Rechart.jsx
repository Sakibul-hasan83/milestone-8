
import { LineChart, Line } from 'recharts';

const Rechart = () => {

  const information = [
    { "student": 1, "math_marks": 78 },
    { "student": 2, "math_marks": 85 },
    { "student": 3, "math_marks": 92 },
    { "student": 4, "math_marks": 65 },
    { "student": 5, "math_marks": 88 },
    { "student": 6, "math_marks": 74 },
    { "student": 7, "math_marks": 91 },
    { "student": 8, "math_marks": 80 },
    { "student": 9, "math_marks": 77 },
    { "student": 10, "math_marks": 84 }
  ]
  
    
 
    return (
        <LineChart width={400} height={400} data={information}>
        <Line type="monotone" dataKey="math_marks" stroke="#8884d8" />
        <Line type="monotone" dataKey="student" stroke="#d88492" />
      </LineChart>
  )
}

export default Rechart
