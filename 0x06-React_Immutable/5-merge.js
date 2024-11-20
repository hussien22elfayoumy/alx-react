import { List, merge, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  // prettier-ignore
  return  (map1.equals(map2)) ? map2.toList() : map1.toList().concat(map2.toList());
}
