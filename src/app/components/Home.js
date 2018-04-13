import React from "react"
import PropTypes from "prop-types"

export class Home extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <textarea className="form-control" rows="2" placeholder="e.g. I would like to have coffee"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Go</button>
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