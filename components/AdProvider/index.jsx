import { useEffect } from 'react';

function AdProvider() {
  useEffect(() => {
    (AdProvider = window.AdProvider || []).push({"serve": {}});
  }, []);

  return (
    <ins className="adsbyexoclick" data-zoneid="4914952"></ins>
  );
}

export default AdProvider;
