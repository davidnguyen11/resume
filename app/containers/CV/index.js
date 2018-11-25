import React from 'react';
import PersonalInfo from '~/app/components/PersonalInfo';
import WorkExperience from '~/app/components/WorkExperience';
import Education from '~/app/components/Education';
import Project from '~/app/components/Project';
import Skill from '~/app/components/Skill';
import Achievement from '~/app/components/Achievement';

import data from './data'
class CV extends React.Component {
    render() {
        const personalInfo = data[0];
        const workExperience = data[1];
        const education = data[2];
        const project = data[3];
        const skill = data[4];
        const achievement = [data[5], data[6]]
        return (<div>
            <PersonalInfo {...personalInfo} />
            <WorkExperience {...workExperience} />
            <Education {...education} />
            <Project {...project} />
            <Skill {...skill} />
            <Achievement data = {achievement} />
        </div>);
      }
}

export default CV;