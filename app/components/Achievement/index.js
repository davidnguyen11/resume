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

function Achievement(props){
    const {data} = props;
    return(
        <SectionWrapper>
            <SectionWrapper>
                <SectionName>{data[0].text}</SectionName>
                <ul>
                    {data[0].data.map((item,idx)=>
                        <li key={"award"+idx}>{item}</li>
                    )}
                </ul>
            </SectionWrapper>
            <SectionWrapper>
                <SectionName>{data[1].text}</SectionName>
                <ul>
                    {data[1].data.map((item,idx)=>
                        <li key={"publications"+idx}><a href={item.link}>{item.text}</a></li>
                    )}
                </ul>
            </SectionWrapper>
        </SectionWrapper>
    );
}

export default Achievement;