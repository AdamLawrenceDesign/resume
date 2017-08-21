import { App } from './app';


const appData = {
  version: '0.0.1',
  name: 'adamLawrenceResume',
  displayName: 'Adam Lawrence | Resume'
}

document.addEventListener('readystatechange', bootstrap, false);

function bootstrap(event) {
  if (event.target.readyState === 'interactive' || event.target.readyState === 'complete') {
    init();
  }
}

function init(event) {
  var app = new App(document.getElementById('app'), appData);
}
