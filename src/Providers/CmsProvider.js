import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { request } from 'graphql-request';
import { Waiter } from 'components/organisms/Waiter';

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
  switch (type) {
    case 'ADD_DATA':
      headingsArr = payload.headers.map((header) => header.text);
      return {
        ...state,
        sectiontitles: payload.sectiontitles,
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

const CmsProvider = ({ render }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const {
        headers, photos, sectiontitles, skills, personalInfoBoxes, personalInfoIcons, projects, contactForms, contactIcons,
      } = await request('https://api-eu-central-1.graphcms.com/v2/ckh5f8hmje23b01xq813bgpb5/master', `
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
          titleMenuId
          path
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
          heading
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
      dispatch({
        type: 'ADD_DATA',
        payload: {
          headers, photos, sectiontitles, skills, personalInfoBoxes, personalInfoIcons, projects, contactForms, contactIcons,
        },
      });
      setDataFetched(true);
    };

    fetchData();
  }, []);

  return (
    <>
      {dataFetched ? (
        render(state)
      ) : (
        <Waiter />
      )}
    </>
  );
};

CmsProvider.propTypes = {
  render: PropTypes.func.isRequired,
};

export default CmsProvider;
