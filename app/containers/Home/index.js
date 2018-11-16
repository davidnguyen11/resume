import React from 'react';
const data = require('../../data/data');

class Home extends React.Component {
  render() {
    const { 0: basicInfo, 1: workExperience } = data;

    return (
      <div className="page a4">
        <section className="row">
          <div className="u-pull-left">
            <h1 className="basicInfo-Title">{basicInfo.name}</h1>
          </div>
          <div className="u-pull-right u-align-right">
            <div>
              <span>{basicInfo.email}</span>
            </div>
            <div>
              <a href={basicInfo.socials[0]}>{basicInfo.socials[0]}</a>
            </div>
          </div>
          <div className="clearFix" />
        </section>

        <section className="row">
          <h2 className="heading-2">
            <i>{workExperience.text}</i>
          </h2>

          {workExperience.data.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <h3 className="heading-3">{item.company_name}</h3>
              </div>
              <div>
                <div className="u-pull-left">
                  <h4 className="heading-4">{item.title}</h4>
                </div>
                <div className="u-pull-right u-align-right">{item.time}</div>
                <div className="clearFix" />
              </div>

              <div>
                <ul>
                  {item.accomplishments.map((acc, index) => (
                    <li key={index}>{acc}</li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </section>
      </div>
    );
  }
}

export default Home;
