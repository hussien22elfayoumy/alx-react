import { List, merge } from 'immutable';

export function concatElements(page1, page2) {
  return merge(List(page1), List(page2));
}

console.log(concatElements([1, 2], [3, 4]));
