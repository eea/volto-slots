import ContextNavigationEdit from '@eeacms/volto-slots/components/manage/Blocks/ContextNavigation/ContextNavigationEdit';
import ContextNavigationView from '@eeacms/volto-slots/components/manage/Blocks/ContextNavigation/ContextNavigationView';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import tableSVG from '@plone/volto/icons/table.svg';
import { defaultToolbar } from './toolbar';
import defaultSlots from './slots';
import * as slotsReducers from './reducers';
import EditSlot from '@eeacms/volto-slots/components/manage/Slots/EditSlot';

import './quanta.less';
import './slots.less';

const applyConfig = (config) => {
  config.blocks.blocksConfig.text.disableQuantaToolbar = true;
  config.blocks.groupBlocksOrder.push({ id: 'site', title: 'Site' });
  config.blocks.toolbarGroups = [
    ...(config.blocks.toolbarGroups || []),
    { id: 'slot', title: 'Slot' },
    { id: 'misc', title: 'Miscellaneous' },
  ];
  config.blocks.blocksConfig.contextNavigation = {
    id: 'contextNavigation',
    title: 'Navigation',
    icon: tableSVG,
    group: 'site',
    view: ContextNavigationView,
    edit: ContextNavigationEdit,
    schema: BlockSettingsSchema,
    restricted: true,
    isSlotFill: true,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.addonRoutes = [
    ...(config.addonRoutes || []),
    {
      path: '/edit-slot/:id',
      component: EditSlot,
    },
    {
      path: '/**/edit-slot/:id',
      component: EditSlot,
    },
  ];

  config.addonReducers = {
    ...config.addonReducers,
    ...slotsReducers,
  };

  config.settings.nonContentRoutes.push('/edit-slot', /\/edit-slot\/.*$/);
  // config.settings.prefixPath = process.env.RAZZLE_PREFIX_PATH || '';
  config.settings.useQuantaToolbar = true;
  config.slots = defaultSlots;
  config.registerComponent({
    name: 'toolbar',
    component: defaultToolbar,
  });
  config.settings.toolbar = defaultToolbar;

  return config;
};

export default applyConfig;
