import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-TMG5M2JKHG";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (path?: string) => {
  const currentPath = path || window.location.pathname + window.location.search;
  ReactGA.send({ hitType: "pageview", page: currentPath });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
