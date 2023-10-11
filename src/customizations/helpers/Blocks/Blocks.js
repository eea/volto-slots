/**
 * Blocks helper.
 * @module helpers/Blocks
 */

import { omit } from 'lodash';
import * as original from '@plone/volto-original/helpers/Blocks/Blocks';
import config from '@plone/volto/registry';

/**
 * Returns true if the block data is an empty placeholder block
 * @function isPlaceholderBlock
 * @param {Object} blockData Block data
 * @return {Boolean} True if block data is an empty placeholder block
 */
function isPlaceholderBlock(blockData) {
  const { settings } = config;
  return (
    blockData?.['@type'] === settings.defaultBlockType &&
    !original.blockHasValue(blockData)
  );
}

/**
 * Placeholder blocks are annoying to deal with when they're inherited.
 * We remove the last placeholder blocks from provided form data
 *
 * @function cleanupLastPlaceholders
 * @param {Object} formData Form data with `blocks` and `blocks_layout`
 * @return {Object} formData without placeholder blocks at the end
 */
function cleanupLastPlaceholders(formData) {
  const { blocks, blocks_layout } = formData;
  if (!blocks_layout?.items?.length) return formData;

  const remove = [];
  const blocksLayoutItems = [...(blocks_layout.items || [])]
    .reverse()
    .find((uid) => {
      if (isPlaceholderBlock(blocks[uid])) {
        remove.push(uid);
        return false;
      } else {
        return true;
      }
    });

  return {
    ...formData,
    blocks_layout: {
      ...blocks_layout,
      items: blocks_layout.items.filter((uid) => remove.indexOf(uid) === -1),
    },
    blocks: omit(blocks, remove),
    blocksLayoutItems,
  };
}

original.isPlaceholderBlock = isPlaceholderBlock;
original.cleanupLastPlaceholders = cleanupLastPlaceholders;

module.exports = original;
