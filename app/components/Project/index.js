import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`;

const SectionName = styled.h2`
  width:100%;
  text-align: left;
  font-size: 22px;
`;

function Project(props){
    const {text, data} = props;
    return(
      <SectionWrapper>
          <SectionName>{text}</SectionName>
          {data.map((item, idx) => 
                <SectionWrapper key ={"project"+idx}>
                    <SectionWrapper><b>{item.project_name}</b>&nbsp;({item.time})</SectionWrapper>
                    <SectionWrapper>
                        <p>{item.description}</p>
                    </SectionWrapper>
                
                </SectionWrapper>

          )}
      </SectionWrapper>  
    );

}

export default Project;