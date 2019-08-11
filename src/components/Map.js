import React, {
  useEffect,
  useRef
} from 'react';
import { GOOGLE_MAP_URL } from '../constants';
import { usePosition } from '../hooks/usePosition';

export default function Map({ options, onMount, className }) {
  const props = {
    className,
    pos: usePosition(),
    ref: useRef()
  }
  const onLoad = () => {
    const map = new window.google.maps.Map(
      props.ref.current,
      { ...props.pos, options }
    )
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
  }, [])

  return (
    <div { ...props } style={{ height: `80vh`, margin: `1em 0`, borderRadius: `0.5em` }} />
  )
}

Map.defaultProps = {
  options: {}
}

// code for map from:
// https://janosh.io/blog/google-maps+react-hooks
// https://developers.google.com/maps/documentation/javascript/tutorial?hl=en_US
