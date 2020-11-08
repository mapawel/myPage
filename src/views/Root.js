import React, { useEffect, useReducer } from 'react';
// import PropTypes from 'prop-types';
import RootTemplate from 'templates/RootTemplate';
import Header from 'components/organisms/Header';
import TechSkills from 'components/organisms/TechSkills';
import PersonalInfo from 'components/organisms/PersonalInfo';
import RecentProjects from 'components/organisms/RecentProjects';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';
import { request } from 'graphql-request';

const initialState = {
  sectiontitles: null,
  header: {
    headings: null,
    headerImageUrl: null,
  },
  techSkills: null,
  personalBoxes: null,
  personalIcons: null,
  projects: null,
  contactForm: null,
  contactIcons: null,
};

const reducer = (state, { type, payload }) => {
  let headingsArr = [];
  let sectiontitlesArr = [];
  switch (type) {
    case 'ADD_DATA':
      headingsArr = payload.headers.map((header) => header.text);
      sectiontitlesArr = payload.sectiontitles.map((sectiontitle) => sectiontitle.title);
      return {
        ...state,
        sectiontitles: sectiontitlesArr,
        header: {
          headings: headingsArr,
          headerImageUrl: payload.photos[0].image[0].url,
        },
        techSkills: payload.skills,
        personalBoxes: payload.personalInfoBoxes,
        personalIcons: payload.personalInfoIcons,
        projects: payload.projects,
        contactForm: payload.contactForms[0],
        contactIcons: payload.contactIcons,
      };
    default:
      return state;
  }
};

const Root = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const { headers, photos, sectiontitles, skills, personalInfoBoxes, personalInfoIcons, projects, contactForms, contactIcons } = await request('https://api-eu-central-1.graphcms.com/v2/ckh5f8hmje23b01xq813bgpb5/master', `
      {
        headers {
          text
        }
        photos {
          image {
            url
          }
        }
        sectiontitles{
          title
        }
        techStackLists {
          id
          listItem
          inProgress
        }
        skills {
          id
          title
          lists {
           __typename
            ... on TechStackList {
              id
              listItem
              inProgress
            }
                ... on UseSkillsList {
              id
              listItem
            }
          }
        }
        personalInfoBoxes {
          id
          title
          content
        }
        personalInfoIcons {
          id
          title
          content
          icon {
            url
          }
        }
        projects {
          id
          title
          description
          code
          live
          images {
            id
            url
          }
        }
        contactForms {
          title1
          placeholder1
          title2
          placeholder2
          title3
          placeholder3
          title4
          placeholder4
        }
        contactIcons{
          id
          title
          link
          icon{
            url
          }
        }
      }
    `);
      dispatch({ type: 'ADD_DATA', payload: { headers, photos, sectiontitles, skills, personalInfoBoxes, personalInfoIcons, projects, contactForms, contactIcons } });
    };

    fetchData();
  }, []);

  return (
    <RootTemplate>
      <Header data={state.header} />
      <TechSkills title={state.sectiontitles && state.sectiontitles[0]} data={state.techSkills} />
      <PersonalInfo title={state.sectiontitles && state.sectiontitles[1]} dataBoxes={state.personalBoxes} dataIcons={state.personalIcons} />
      <RecentProjects title={state.sectiontitles && state.sectiontitles[2]} data={state.projects} />
      <Contact title={state.sectiontitles && state.sectiontitles[3]} data={state.contactForm} icons={state.contactIcons} />
      <Footer />
    </RootTemplate>
  );
};

// Root.propTypes = {

// };

export default Root;
