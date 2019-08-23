import React, {
  useEffect,
  useRef
} from 'react';
import {
  appendGoogleScriptTag,
  createGoogleScriptTag 
} from '../utils/googleScriptTag';
import SideBar from './SideBar';
import { useInitialPosition } from '../hooks/useInitialPosition';

export default function Map({ options, onMount, className }) {
  const props = {
    className,
    ref: useRef()
  }
  const { center, zoom } = useInitialPosition();

  const onLoad = () => {
    const map = new window.google.maps.Map(
      props.ref.current,
      { center, zoom, options }
    )
    return map;
  }

  useEffect(() => {
    if (!window.google) {
      const mapScriptTag = createGoogleScriptTag();
      appendGoogleScriptTag(mapScriptTag);
      mapScriptTag.addEventListener('load', onLoad)

      return () => mapScriptTag.removeEventListener('load', onLoad)
    } else onLoad()
  }, [window.google])

  return (
    <div id='pageContainer'>
      <SideBar />
      <div { ...props } style={{ height: `80vh`, margin: `1em 0`, borderRadius: `0.5em` }} />
    </div>
  )
}

Map.defaultProps = {
  options: {}
}

// code for map from:
// https://janosh.io/blog/google-maps+react-hooks
// https://developers.google.com/maps/documentation/javascript/tutorial?hl=en_US
