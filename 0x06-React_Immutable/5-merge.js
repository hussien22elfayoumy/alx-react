import { List, merge, Map } from 'immutable';

export function concatElements(page1, page2) {
  return merge(List(page1), List(page2));
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  // prettier-ignore
  return  (map1.equals(map2)) ? map2.toList() : merge(map1.toList(), map2.toList());
}
