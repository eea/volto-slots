import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';

import View from './View';
import defaultSlots from '@eeacms/volto-slots/slots';
import config from '@plone/volto/registry';

beforeAll(() => {
  config.set('views', {
    defaultView: () => <div id="DefaultView" />,
    layoutViews: {
      summary_view: () => <div id="SummaryView" />,
      tabular_view: () => <div id="TabularView" />,
    },
    contentTypesViews: {
      Event: () => <div className="event" />,
    },
    errorViews: {
      ECONNREFUSED: () => <div className="ECONNREFUSED" />,
    },
  });
  config.settings.publicURL = 'https://plone.org';
  config.slots = defaultSlots;
});

const mockStore = configureStore();

jest.mock('react-portal', () => ({
  Portal: jest.fn(() => <div id="Portal" />),
}));
jest.mock('@plone/volto/components/theme/SocialSharing/SocialSharing', () =>
  jest.fn(() => <div id="SocialSharing" />),
);
jest.mock('@plone/volto/components/theme/Comments/Comments', () =>
  jest.fn(() => <div id="Comments" />),
);
jest.mock('@plone/volto/components/theme/Tags/Tags', () =>
  jest.fn(() => <div id="Tags" />),
);
jest.mock(
  '@plone/volto/components/theme/ContentMetadataTags/ContentMetadataTags',
  () => jest.fn(() => <div id="ContentMetadataTags" />),
);

const actions = {
  document_actions: [],
  object: [
    {
      icon: '',
      id: 'view',
      title: 'View',
    },
    {
      icon: '',
      id: 'edit',
      title: 'Edit',
    },
    {
      icon: '',
      id: 'folderContents',
      title: 'Contents',
    },
    {
      icon: '',
      id: 'history',
      title: 'History',
    },
    {
      icon: '',
      id: 'local_roles',
      title: 'Sharing',
    },
  ],
  object_buttons: [
    {
      icon: '',
      id: 'cut',
      title: 'Cut',
    },
    {
      icon: '',
      id: 'copy',
      title: 'Copy',
    },
    {
      icon: '',
      id: 'delete',
      title: 'Delete',
    },
    {
      icon: '',
      id: 'rename',
      title: 'Rename',
    },
    {
      icon: '',
      id: 'ical_import_enable',
      title: 'Enable icalendar import',
    },
  ],
  portal_tabs: [],
  site_actions: [
    {
      icon: '',
      id: 'sitemap',
      title: 'Site Map',
    },
    {
      icon: '',
      id: 'accessibility',
      title: 'Accessibility',
    },
    {
      icon: '',
      id: 'contact',
      title: 'Contact',
    },
  ],
  user: [
    {
      icon: '',
      id: 'preferences',
      title: 'Preferences',
    },
    {
      icon: '',
      id: 'dashboard',
      title: 'Dashboard',
    },
    {
      icon: '',
      id: 'plone_setup',
      title: 'Site Setup',
    },
    {
      icon: '',
      id: 'logout',
      title: 'Log out',
    },
  ],
};

describe('View', () => {
  it('renders an empty view', () => {
    const store = mockStore({
      actions: { actions },
      content: { get: { error: null } },
      userSession: { token: null },
      apierror: {},
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/test' }]}>
          <View location={{ pathname: '/test' }} />
        </MemoryRouter>
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a summary view', () => {
    const store = mockStore({
      actions: { actions },
      content: { data: { layout: 'summary_view' }, get: { error: null } },
      userSession: { token: null },
      apierror: {},
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/test' }]}>
          <View location={{ pathname: '/test' }} />
        </MemoryRouter>
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a tabular view', () => {
    const store = mockStore({
      actions: { actions },
      content: { data: { layout: 'tabular_view' }, get: { error: null } },
      userSession: { token: null },
      apierror: {},
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/test' }]}>
          <View location={{ pathname: '/test' }} />
        </MemoryRouter>
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a document view', () => {
    const store = mockStore({
      actions: { actions },
      content: { data: {}, get: { error: null } },
      userSession: { token: null },
      apierror: {},
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/test' }]}>
          <View location={{ pathname: '/test' }} />
        </MemoryRouter>
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
