const useDevice = () => {
  return {
    browser: navigator.userAgent,
    platform: navigator.platform
  };
};

export default useDevice;