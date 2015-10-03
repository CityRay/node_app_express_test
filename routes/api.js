var express = require('express');
var router = express.Router();

var data = {
    jobs: [
        {
            job_id: 1,
            company: 'TrackMaven',
            position: 'Software Maven',
            local: 'Washington, DC, USA',
            lookingFor: 'Angular.js, Django, ElasticSearch',
            postedDate: '4 April 2015',
            description: '',
            category: 'Engineering'
        },
        {
            job_id: 2,
            company: 'TrackMaven',
            position: 'Junior Software Maven',
            local: 'Washington, DC, USA',
            lookingFor: 'Javascript, Python',
            postedDate: '4 April 2015',
            description: '',
            category: 'Engineering'
        }
    ]
}

router.get('/jobs', function(req, res) {
    res.json({data: data});
});


router.route('/jobs/:job_id')
    .get(function(req, res) {
        var job_id = req.params.job_id;
        for (i = 0, len = data.jobs.length; i < len; i++) {
            if (data.jobs[i].job_id === parseInt(job_id)) {
                res.json({data: data.jobs[i]});
            }
        }
        res.json({data: "No job found..."});
    })
    .put(function(req, res) {

        console.log('Put ' + req.params.job_id);
        res.json({message: 'put', data: 200, id: req.body.id});
    })
    .delete(function(req, res) {
        
        console.log('Delete ' + req.params.job_id);
        res.json({message: 'delete', data: 200, id: req.body.id});
    });


router.route('/bears')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        console.log(req.body);
        res.json({ message: req.body.name, data: 200 });
        
    });


module.exports = router;