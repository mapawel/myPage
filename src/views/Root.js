/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RootTemplate from 'templates/RootTemplate';
import Home from 'views/Home';
import Projects from 'views/Projects';
import Menu from 'components/organisms/Menu';
import CmsProvider from 'Providers/CmsProvider';

const Root = () => (
  <RootTemplate>
    <BrowserRouter>
      <CmsProvider
        render={
          (data) => (
            <>
              <Menu sectiontitles={data.sectiontitles} />
              <Switch>
                <Route exact path="/" render={() => (<Home {...data} />)} />
                <Route path="/projects" render={() => (<Projects sectiontitles={data.sectiontitles} projects={data.projects} />)} />
              </Switch>
            </>
          )
        }
      />
    </BrowserRouter>
  </RootTemplate>
);

export default Root;
