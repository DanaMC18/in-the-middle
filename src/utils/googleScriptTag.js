import { GOOGLE_MAP_URL } from '../constants';

export function createGoogleScriptTag() {
  const newScriptTag  = document.createElement('script');
  newScriptTag.type   = 'text/javascript';
  newScriptTag.src    = GOOGLE_MAP_URL;
  
  return newScriptTag;
}

export function appendGoogleScriptTag(mapScriptTag) {
  const indexScriptTag  = document.getElementsByTagName('script')[0]
  const bodyTag         = document.getElementsByTagName('body')[0]

  bodyTag.insertBefore(mapScriptTag, indexScriptTag);
}
