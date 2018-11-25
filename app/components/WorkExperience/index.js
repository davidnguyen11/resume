import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SectionName = styled.h2`
  width:100%;
  text-align: left;
  font-size: 22px;
`;

const CompanyName = styled.h3`
  font-size: 18px;
`;

const LeftColumn =styled.div`
  width: 70%;
  float:left;
`;

const RightColumn = styled.div`
  width: 30%;
  text-align: right;
  float:right;
`;



function WorkingExperience(props){
    const {text,data} = props
    return (
        <SectionWrapper>
             <SectionName>{text}</SectionName>
            { 
                data.map((item, key) => <SectionWrapper key={"experience"+key}>
                    <SectionWrapper>
                        <LeftColumn key={"lcol"+key}>
                            <CompanyName key={"cname"+key}>{item.company_name}</CompanyName>
                            {item.title}
                        </LeftColumn>
                        <RightColumn key={"rcol"+key}>
                            <p>{item.time}</p>
                        </RightColumn>
                    </SectionWrapper>
                    <SectionWrapper>
                        <ul>
                            {item.accomplishments.map((item, idx) => <li key={"accomplishment"+idx}>{item}</li>)}
                        </ul>
                    </SectionWrapper>
            </SectionWrapper>)
            }
        </SectionWrapper>
    );  
} 

export default WorkingExperience;