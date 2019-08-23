export const DEFAULT_COORDS = { lat: 40.7125, lng: -74.0060 };
export const DEFAULT_ZOOM   = 11;

const KEY = process.env.REACT_APP_GOOGLE_MAP
export const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${KEY}&libraries=places`;
