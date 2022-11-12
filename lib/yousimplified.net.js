'use babel';

import Yousimplified.netView from './yousimplified.net-view';
import { CompositeDisposable } from 'atom';

export default {

  yousimplified.netView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.yousimplified.netView = new Yousimplified.netView(state.yousimplified.netViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.yousimplified.netView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'yousimplified.net:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.yousimplified.netView.destroy();
  },

  serialize() {
    return {
      yousimplified.netViewState: this.yousimplified.netView.serialize()
    };
  },

  toggle() {
    console.log('Yousimplified.net was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
