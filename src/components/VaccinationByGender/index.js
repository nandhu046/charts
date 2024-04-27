import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props

  return (
    <>
      <h1 className="sub-heading">Vaccination by gender</h1>
      <ResponsiveContainer height={300} width="100%">
        <PieChart height={300} width={1000}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByGenderData}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationByGender
