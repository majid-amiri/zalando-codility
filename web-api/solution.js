'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

const candidates = [];

app.post('/candidates', function(req, res, next) {
  const { body } = req;

  if(!body.id || !body.name || !body.skills || !body.skills.length) {
    res.status(400).end()
    return next();
  } 

  candidates.push(body);
  res.status(200).end();
});


app.get('/candidates/search', function(req, res) {
  const { skills } = req.query;

  if(candidates.length === 0 || skills === ""){
    res.status(404).end();
    return next();
  }

  if(skills === undefined) {
    res.status(400).end();
    return next();
  }

  const parsedSkills = skills.split(",");
  let maxSkills;
  let matching;

  candidates.forEach(cand => {
    const skillsCount = cand.skills.filter(skill => parsedSkills.indexOf(skill) > -1).length

    if(skillsCount > 0 && (maxSkills === undefined || skillsCount > maxSkills)){
      maxSkills = skillsCount;
      matching = cand;
    }
  })

  if(!matching) {
    res.status(404).end();
    return next();
  }

  res.status(200).json(matching)
});

app.listen(process.env.HTTP_PORT || 3000);
