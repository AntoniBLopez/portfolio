export const THEME_STORAGE_KEY = "portfolio-theme";

/**
 * Applies the stored theme while the browser parses the HTML, so the correct
 * palette is painted on the very first frame instead of flashing after hydration.
 */
export function ThemeScript() {
  const script = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
