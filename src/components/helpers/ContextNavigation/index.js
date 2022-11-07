// const fields = [
//   'bottomLevel',
//   'currentFolderOnly',
//   'includeTop',
//   'name',
//   'no_icons',
//   'no_thumbs',
//   'root_path',
//   'thumb_scale',
//   'topLevel',
// ];

export function contextNavPath(url, params) {
  let qs = Object.keys(params)
    .sort()
    .map((key) => `expand.contextnavigation.${key}=${params[key]}`)
    .join('&');
  const path = `${url}/@contextnavigation${qs ? `?${qs}` : ''}`;
  return path;
}
