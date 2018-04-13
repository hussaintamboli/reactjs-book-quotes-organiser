import React from "react"
import PropTypes from "prop-types"

export class Home extends React.Component {
    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <textarea className="form-control-lg" rows="2" placeholder="e.g. I would like to have coffee"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10">
                        <button type="submit" className="btn btn-primary">Go</button>
                        </div>
                    </div>
                </form>

                <ul>
                    {this.props.data.results.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

Home.propTypes = {
    data: PropTypes.object
}