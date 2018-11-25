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

function Education(props){
    const {text, data} = props;
    return(
        <SectionWrapper>
            <SectionName>{text}</SectionName>
            {data.map((item, idx)=>
                <SectionWrapper key={"education"+idx}>
                    <SectionWrapper>
                        <b>{item.school_name}</b>,
                        <span> {item.time}</span>,
                        <span> {item.degree} of {item.field_of_study}</span>,
                        <span> GPA:{item.gpa}</span>
                    </SectionWrapper>
                    <SectionWrapper><i>Publication:</i></SectionWrapper>
                    <ul>
                        {item.publications.map((item,idx)=>
                            <li key={"pub"+idx}> {item} </li>
                        )}
                    </ul>
                </SectionWrapper>
            )}
        </SectionWrapper>
    );

}

export default Education;