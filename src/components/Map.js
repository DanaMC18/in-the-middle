import React, {
  useEffect,
  useRef
} from 'react';
import { GOOGLE_MAP_URL } from '../constants';

export default function Map({ options, onMount, className }) {
  const props = { ref: useRef(), className }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  }
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = GOOGLE_MAP_URL
      const headScript = document.getElementsByTagName('script')[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener('load', onLoad)
      return () => script.removeEventListener('load', onLoad)
    } else onLoad()
  })

  return (
    <div { ...props } style={{ height: `80vh`, margin: `1em 0`, borderRadius: `0.5em` }} />
  )
}

Map.defaultProps = {
  options: {
    center: { lat: 40.7125, lng: -74.0060 },
    zoom: 11,
  },
}

// code for map from:
// https://janosh.io/blog/google-maps+react-hooks
// https://developers.google.com/maps/documentation/javascript/tutorial?hl=en_US
