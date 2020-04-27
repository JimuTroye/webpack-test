import _ from 'lodash';
import './style.css';
import cat from './cat.jpg'

function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // element.className = 'hello';
  var img = new Image();
  img.src = cat;
  img.width = 200;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());