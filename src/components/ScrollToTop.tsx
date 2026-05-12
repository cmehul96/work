import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on non-POP navigations (e.g., clicking a link)
    // and when there is no hash in the URL targeted
    if (navType !== "POP" && !hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash, navType]);

  return null;
}
