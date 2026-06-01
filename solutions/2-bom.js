// BEGIN
export default function solution(url) {
  window.location.href = url;
  return window.navigator.appCodeName + '/' + window.navigator.appVersion + ' ' + window.location.href;
}
// END