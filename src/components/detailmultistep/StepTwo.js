
import React from 'react'

export class StepTwo extends React.Component {
    render() {
        return (
            <div>
                <h3 className="fs-subtitle">willingness to marry</h3>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">within a few years</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">nuetral</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">not willing</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">sooner, better</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
