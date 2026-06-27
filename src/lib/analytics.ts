import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-TMG5M2JKHG";

let isGAInitialized = false;

export const initGA = () => {
  if (isGAInitialized) return;
  ReactGA.initialize(GA_MEASUREMENT_ID);
  isGAInitialized = true;
};

export const logPageView = (path?: string) => {
  if (!isGAInitialized) return;
  const currentPath = path || window.location.pathname + window.location.search;
  ReactGA.send({ hitType: "pageview", page: currentPath });
};

export const logEvent = (category: string, action: string, label?: string) => {
  if (!isGAInitialized) return;
  ReactGA.event({
    category,
    action,
    label,
  });
};
