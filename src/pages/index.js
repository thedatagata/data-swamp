import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceOfferings from  '../sections/service-offering';
import Feature from '../sections/feature';
import WorkFlow  from '../sections/workflow';
import TeamPage from '../sections/team-page'


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <KeyFeature />
          <ServiceOfferings />
          <Feature />
          <WorkFlow/>
          <TeamPage />
        </Layout>
    </ThemeProvider>
  );
}