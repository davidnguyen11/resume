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
        const { 0: personalInfo, 1: workExperience, 2: education, 3: project, 4: skill } = data;
        const achievement = [data[5], data[6]]
        return (<div>
            <PersonalInfo dataSource={personalInfo} />
            <WorkExperience dataSource={workExperience} />
            <Education dataSource={education} />
            <Project dataSource={project} />
            <Skill dataSource={skill} />
            <Achievement dataSource={achievement} />
        </div>);
    }
}

export default CV;