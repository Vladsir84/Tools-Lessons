import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var listItem = document.querySelector('.list');
export var renderListElements = function renderListElements(tasks) {
  listItem.innerHTML = '';
  var listItemsElements = tasks.sort(function (a, b) {
    return b.date - a.date;
  }).sort(function (a, b) {
    return a.done - b.done;
  }).map(function (_ref) {
    var text = _ref.text,
        done = _ref.done,
        id = _ref.id;
    var listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    if (done) {
      listItemElem.classList.add('list__item_done');
    }

    var checkboxItem = document.createElement('input');
    checkboxItem.setAttribute('type', 'checkbox');
    checkboxItem.setAttribute('id', id);
    checkboxItem.checked = done;
    checkboxItem.classList.add('list__item-checkbox');
    listItemElem.append(checkboxItem, text);
    return listItemElem;
  });
  listItem.append.apply(listItem, _toConsumableArray(listItemsElements));
};