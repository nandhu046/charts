import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationOfWeek} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <BarChart
      width={1000}
      height={300}
      data={vaccinationOfWeek}
      margin={{
        top: 5,
      }}
    >
      <XAxis
        dataKey="vaccine_date"
        tick={{
          stroke: 'gray',
          strokeWidth: 1,
        }}
      />
      <YAxis
        tickFormatter={DataFormatter}
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar dataKey="dose_1" name="Dose 1" fill="#1f77b4" barSize="20%" />
      <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
    </BarChart>
  )
}

export default VaccinationCoverage
