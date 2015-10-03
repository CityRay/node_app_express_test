var React = require('react');
var request = require('request');
var Job = require('./Job.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        // This will be an API call eventually...
        return {
            data: []
        };
    },
    componentDidMount: function(){
        request('http://localhost:3000/api/jobs/', function(error, response, body) {
            var result = JSON.parse(body);
            if (this.isMounted()) {
                console.log(result.data.jobs);
                this.setState({data: result.data.jobs});
            }
        }.bind(this));
    },
    render: function(){
        return (
            <div className="list-group">
                {this.state.data.map(function(job, index){
                    return (
                        <Job {...job} key={job.job_id}/>
                    )
                })}
            </div>
        )
    }
});