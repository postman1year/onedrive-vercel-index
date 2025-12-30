import path from "path"
import { i18n, localePath } from "./next-i18next.config.js"

const config = {
  createOldCatalogs: false,
  defaultNamespace: "common",
  defaultValue: (lng, _ns, key) => (lng === i18n.defaultLocale ? key : ""),
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: "——",
  contextSeparator: "——",
  lineEnding: "lf",
  locales: i18n.locales,
  output: path.join(localePath, "$LOCALE/$NAMESPACE.json"),
  input: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  sort: true
}

export default config
