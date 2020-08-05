/* global Hooks, CONFIG, OBSIDIAN, ui */

import actorResource from './actor/resource'
import actorArmorClass from './actor/ac'

Hooks.once('init', function () {
  console.log('INIT OBSIDIAN-FIXER', CONFIG.statusEffects)
})

// // This hook is required for Tokens NOT linked to an Actor
// Hooks.on("updateToken", (scene, sceneID, update, tokenData, userId) => {
//   const token = canvas.tokens.get(update._id);
//   // if (token.owner) token._updateHealthOverlay(token);
//   console.log('UPDATE TOKEN', token, {scene, sceneID, update, tokenData, userId})
// });

// This hook is required for Tokens linked to an Actor
Hooks.on('updateActor', (actor, updated) => {
  // console.log('HOOKS >', 'updateActor', { actor, updated })

  actorResource.onUpdateActor(actor, updated)
  actorArmorClass.onUpdateActor(actor, updated)
})

// This hook is required for Tokens linked to an Actor
Hooks.on('updateOwnedItem', (actor, item) => {
  actorResource.onUpdateOwnedItem(actor, item)
})
