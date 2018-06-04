
import React from 'react'

export class StepThree extends React.Component {

  render () {
    return (
      <div>
          <h3 className="fs-subtitle">Marital Status</h3>
          <div className="row">
              <div className="col-md-12 text-center">
                  <button type="button" className="btn btn-outline-info btn-rounded waves-effect">single(not married ever)</button>
                  <button type="button" className="btn btn-outline-info btn-rounded waves-effect">single(devorced)</button>
                  <button type="button" className="btn btn-outline-info btn-rounded waves-effect">single(bereavement)</button>
                  <button type="button" className="btn btn-outline-info btn-rounded waves-effect">married</button>
                  <button type="button" className="btn btn-outline-info btn-rounded waves-effect">skip</button>
              </div>
          </div>
      </div>
    )
  }
}
