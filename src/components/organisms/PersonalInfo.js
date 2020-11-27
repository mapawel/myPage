import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'templates/Wrapper';
import styled from 'styled-components';
import TwoColumns from 'templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import IconInfo from 'components/atoms/IconInfo';
import TextBox from 'components/molecules/TextBox';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const StyledTwoColumns = styled(TwoColumns)`
  margin: 2rem 0 5rem;
  :last-child{
    margin-bottom: 0;
  }
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

const PersonalInfo = ({ title, dataBoxes, dataIcons, sectionId }) => {
  const [iconsFirsArr, setIconsFirsArr] = useState([]);
  const [iconsSecondArr, setIconsSecondArr] = useState([]);
  const firstIconsArrRef = useRef(null);
  const secondIconsArrRef = useRef(null);
  useEffect(() => {
    let iconsBreakPoint;
    if (dataIcons) {
      iconsBreakPoint = Math.floor(dataIcons.length / 2);
      setIconsFirsArr(dataIcons.slice(0, iconsBreakPoint));
      setIconsSecondArr(dataIcons.slice(iconsBreakPoint, dataIcons.length));
    }
  }, [dataIcons]);
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
    <section id={sectionId}>
      <Wrapper>
        <SectionHeading>
          {title}
        </SectionHeading>
        <StyledTwoColumns>
          <TextBox data={dataBoxes && dataBoxes[0]} rect />
          <StyledColumn ref={firstIconsArrRef}>
            {iconsFirsArr.length !== 0 && iconsFirsArr.map((element) => (
              <IconInfo key={element.id} title={element.title} content={element.content} icon={element.icon.url} />
            ))}
          </StyledColumn>
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextBox data={dataBoxes && dataBoxes[1]} triangle />
          <StyledColumn invert ref={secondIconsArrRef}>
            {iconsSecondArr.map((element) => (
              <IconInfo key={element.id} title={element.title} content={element.content} icon={element.icon.url} />
            ))}
          </StyledColumn>
        </StyledTwoColumns>
      </Wrapper>
    </section>
  );
};

PersonalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  dataBoxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PersonalInfo;
