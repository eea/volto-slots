export function contextNavPath(url, params) {
  let qs = Object.keys(params)
    .sort()
    .map((key) => `expand.contextnavigation.${key}=${params[key]}`)
    .join('&');

  return `${url}/@contextnavigation${qs ? `?${qs}` : ''}`;
}
