'use babel';
export default class Yousimplified.netView {
    constructor(serializedState) {
      // Create root element
      this.element = document.createElement('div');
      this.element.classList.add('my-package');

      // Create message element
      const message = document.createElement('div');
      message.textContent = 'The Yousimplified package is Alive! It\'s Yousimplified!';
      message.classList.add('message');
      this.element.appendChild(message);
    }

    // ...
}

let myPackageView = new MyPackageView(state.myPackageViewState);
let modalPanel = atom.workspace.addModalPanel({
item: myPackageView.getElement(),
visible: false;
});



modalPanel.show();
