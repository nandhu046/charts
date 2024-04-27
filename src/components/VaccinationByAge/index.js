import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props

  return (
    <PieChart width={1000} height={300}>
      <Pie
        cx="70%"
        cy="40%"
        data={vaccinationByAgeData}
        startAngle={0}
        endAngle={360}
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="19-44" fill="#2d87bb" />
        <Cell name="44-60" fill="#a3df9f" />
        <Cell name="Above 60" fill="#64c2a6" />
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  )
}

export default VaccinationByAge
