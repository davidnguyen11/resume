import React from 'react';

import styled from 'styled-components';

import messages from './messages';

const SectionWrapper = styled.section`
  width: 100%;
`;

const FullName = styled.h2`
    font-size: 22px;
`;

const LeftColumn = styled.div`
    width: 40%;
    float:left;
`;

const RightColumn = styled.div`
    width: 60%;
    text-align: right;
    float:right;
`;



function PersonalInfo(props) {
    const { name, email, socials } = props.dataSource
    return (
        <SectionWrapper>
            <LeftColumn>
                <FullName>{name}</FullName>
            </LeftColumn>
            <RightColumn>
                <p>{email}</p>
                {socials.map((s, idx) => <a href={s} key={'social' + idx}>{s}</a>)}
            </RightColumn>
        </SectionWrapper>
    );

}

export default PersonalInfo;