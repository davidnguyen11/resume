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

function Skill(props) {
    const { text, data } = props.dataSource;
    return (
        <SectionWrapper>
            <SectionName>{text}</SectionName>
            <ul>
                {data.map((item, idx) =>
                    <li key={'skill' + idx}><b>{item.text}:</b>{item.content}</li>
                )}
            </ul>
        </SectionWrapper>
    );
}

export default Skill;