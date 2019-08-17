import {
  useEffect,
  useState
} from 'react';
import { DEFAULT_COORDS, DEFAULT_ZOOM } from '../constants';

export const useInitialPosition = () => {
  const [position, setPosition] = useState(DEFAULT_COORDS);
  const [zoom, setZoom]         = useState(DEFAULT_ZOOM);

  const onChange = position => {
    const { latitude, longitude } = position.coords;
    setPosition({ lat: latitude, lng: longitude })
    setZoom(13)
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) return;

    const watcher = geo.watchPosition(onChange);
    return () => geo.clearWatch(watcher);
  }, [])

  return { center: position, zoom };
}

//https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de
