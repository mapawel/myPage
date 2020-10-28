import React, { useEffect, useState, useRef } from 'react';
import Wrapper from 'templates/Wrapper';
import styled from 'styled-components';
import TwoColumns from 'templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import IconInfo from 'components/atoms/IconInfo';
import TextBox from 'components/molecules/TextBox';
import mapIcon from 'assets/icons/map.svg';
import languageIcon from 'assets/icons/language.svg';
import caseIcon from 'assets/icons/case.svg';
import graduateIcon from 'assets/icons/graduate.svg';
import kidIcon from 'assets/icons/kid.svg';
import hobbyIcon from 'assets/icons/hobby.svg';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const personalInfoList = [
  {
    title: 'characteristic',
    content: ['Assertive, determined, strict mind, perfectionist. Avoiding conflict, seeking solutions.', 'Looking for improvement, high committed, strongly motivated to learn a lot to front- end development and back - end basics.', 'Ready to give 100 % of power to work as a front - end / full - stack developer.'],
  },
  {
    title: 'experience',
    content: ['10 years of experience in cooperating with business customers and vandors.', 'Professional experience in project management including some web developing projects.', '15 years of experience in starting up developing projects in business.'],
  },
];

const personalInfoIcons = [
  {
    icon: mapIcon,
    title: 'location',
    content: ['Wroclaw / POLAND'],
  },
  {
    icon: languageIcon,
    title: 'language',
    content: ['polish', 'english'],
  },
  {
    icon: caseIcon,
    title: 'seniority',
    content: ['15years (total, different areas)'],
  },
  {
    icon: graduateIcon,
    title: 'education',
    content: ['Master’s Degree | Economy', 'certification IPMA LevelD | Project Management'],
  },
  {
    icon: kidIcon,
    title: 'family',
    content: ['wife, 1 kid'],
  },
  {
    icon: hobbyIcon,
    title: 'after work',
    content: ['acoustic, construction of laudspeakers, electronics, arduino, design'],
  },
];

const StyledTwoColumns = styled(TwoColumns)`
  margin-bottom: 8rem;
    @media screen and (min-width: ${breakpoint.S}) {
        flex-direction: column;
    }
    @media screen and (min-width: ${breakpoint.L}) {
        flex-direction: row;
        align-items: center;
    }
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint.L}) {
    order: ${({ invert }) => (invert ? -1 : null)};
    padding: ${({ invert }) => (invert ? '0 10rem 0 0' : '0 0 0 10rem')};
    }
`;

const PersonalInfo = () => {
  const [iconsFirsArr, setIconsFirsArr] = useState([]);
  const [iconsSecondArr, setIconsSecondArr] = useState([]);
  const firstIconsArrRef = useRef(null);
  const secondIconsArrRef = useRef(null);
  useEffect(() => {
    let iconsBreakPoint;
    if (personalInfoIcons) {
      iconsBreakPoint = Math.floor(personalInfoIcons.length / 2);
      setIconsFirsArr(personalInfoIcons.slice(0, iconsBreakPoint));
      setIconsSecondArr(personalInfoIcons.slice(iconsBreakPoint, personalInfoIcons.length));
    }
  }, []);
  useEffect(() => {
    const iconsAnimTarget = (triggerElement) => ({
      x: '0',
      opacity: 1,
      stagger: 0.35,
      duration: 0.4,
      scrollTrigger:
      {
        trigger: triggerElement,
        start: 'top 50%',
      },
    });

    gsap.fromTo(firstIconsArrRef.current.children, { x: '+=500', opacity: 0 }, iconsAnimTarget(firstIconsArrRef.current));
    gsap.fromTo(secondIconsArrRef.current.children, { x: '-=500', opacity: 0 }, iconsAnimTarget(secondIconsArrRef.current));
  });
  return (
    <section>
      <Wrapper>
        <SectionHeading>
          {'<personal info />'}
        </SectionHeading>
        <StyledTwoColumns>
          <TextBox data={personalInfoList[0]} rect />
          <StyledColumn ref={firstIconsArrRef}>
            {iconsFirsArr.map((element, index) => (
              <IconInfo key={index} title={element.title} content={element.content} icon={element.icon} />
            ))}
          </StyledColumn>
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextBox data={personalInfoList[1]} triangle />
          <StyledColumn invert ref={secondIconsArrRef}>
            {iconsSecondArr.map((element, index) => (
              <IconInfo key={index} title={element.title} content={element.content} icon={element.icon} />
            ))}
          </StyledColumn>
        </StyledTwoColumns>
      </Wrapper>
    </section>
  );
};

// PersonalInfo.propTypes = {

// };

export default PersonalInfo;
