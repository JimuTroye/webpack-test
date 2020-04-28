import _ from 'lodash';
import print from './print';

function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var button = document.createElement('button');
  button.innerHTML = 'click';
  button.onclick = print;
  element.appendChild(button);
  return element;
}

document.body.appendChild(component());