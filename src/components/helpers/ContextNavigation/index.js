export function contextNavPath(url, params) {
  let qs = Object.keys(params)
    .sort((a, b) => a.localeCompare(b))
    .map((key) => `expand.contextnavigation.${key}=${params[key]}`)
    .join('&');

  return `${url}/@contextnavigation${qs ? `?${qs}` : ''}`;
}
