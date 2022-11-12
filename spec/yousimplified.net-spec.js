'use babel';

import Yousimplified.net from '../lib/yousimplified.net';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Yousimplified.net', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('yousimplified.net');
  });

  describe('when the yousimplified.net:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.yousimplified.net')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'yousimplified.net:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.yousimplified.net')).toExist();

        let yousimplified.netElement = workspaceElement.querySelector('.yousimplified.net');
        expect(yousimplified.netElement).toExist();

        let yousimplified.netPanel = atom.workspace.panelForItem(yousimplified.netElement);
        expect(yousimplified.netPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'yousimplified.net:toggle');
        expect(yousimplified.netPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.yousimplified.net')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'yousimplified.net:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let yousimplified.netElement = workspaceElement.querySelector('.yousimplified.net');
        expect(yousimplified.netElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'yousimplified.net:toggle');
        expect(yousimplified.netElement).not.toBeVisible();
      });
    });
  });
});
