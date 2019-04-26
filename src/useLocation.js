import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const setPosition = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  };

  useEffect(() => {
    setPosition();
  }, []); // fire only once, when component mounts

  return [lat, errorMessage];
};
