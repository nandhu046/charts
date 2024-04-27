import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

class CowinDashboard extends Component {
  state = {status: 'inProgress', vaccinationData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const responseObj = await fetch(
      'https://apis.ccbp.in/covid-vaccination-data',
    )

    const data = await responseObj.json()
    if (responseObj.status === 200) {
      this.setState({
        status: 'SUCCESS',
        vaccinationData: {
          last7DaysVaccination: data.last_7_days_vaccination,
          vaccinationByAge: data.vaccination_by_age,
          vaccinationByGender: data.vaccination_by_gender,
        },
      })
    } else {
      this.setState({status: 'FAILED'})
    }
  }

  renderOnSuccess = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <div className="chart-container">
          <VaccinationCoverage
            vaccinationOfWeek={vaccinationData.last7DaysVaccination}
          />
        </div>
        <div className="chart-container">
          <VaccinationByGender
            vaccinationByGenderData={vaccinationData.vaccinationByGender}
          />
        </div>
        <div className="chart-container">
          <VaccinationByAge
            vaccinationByAgeData={vaccinationData.vaccinationByAge}
          />
        </div>
      </>
    )
  }

  renderOnFail = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
    />
  )

  renderWhileFetching = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderOnStatus = () => {
    const {status} = this.state
    switch (status) {
      case 'inProgress':
        return this.renderWhileFetching()
      case 'SUCCESS':
        return this.renderOnSuccess()
      default:
        return this.renderOnFail()
    }
  }

  render() {
    const {status, vaccinationData} = this.state
    console.log(vaccinationData)
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="main-heading">Co-Win</h1>
        </div>
        <h1 className="sub-heading">CoWIN Vaccination in India</h1>
        {this.renderOnStatus()}
      </div>
    )
  }
}

export default CowinDashboard
