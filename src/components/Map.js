import React, {
  useEffect,
  useRef
} from 'react';
import { GOOGLE_MAP_URL }     from '../constants';
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
      const newScriptTag  = document.createElement('script')
      newScriptTag.type   = 'text/javascript'
      newScriptTag.src    = GOOGLE_MAP_URL

      const indexScriptTag  = document.getElementsByTagName('script')[0]
      const bodyTag         = document.getElementsByTagName('body')[0]

      bodyTag.insertBefore(newScriptTag, indexScriptTag)
      newScriptTag.addEventListener('load', onLoad)

      return () => newScriptTag.removeEventListener('load', onLoad)
    } else onLoad()
  }, [window.google])

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
