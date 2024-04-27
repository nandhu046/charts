import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props

  return (
    <>
      <h1 className="sub-heading">Vaccination by Age</h1>
      <ResponsiveContainer height={300} width="100%">
        <PieChart height={300} width={1000}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByAgeData}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="age"
          >
            <Cell name="19-44" fill="#fecba6" />
            <Cell name="44-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
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

export default VaccinationByAge
