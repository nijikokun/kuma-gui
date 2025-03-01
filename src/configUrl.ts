/**
 * determines the config URL based on environment
 */
export default () => {
  const url = window.location
  const envConfig = String(process.env.VUE_APP_KUMA_CONFIG)

  if (process.env.NODE_ENV === 'development') {
    return envConfig
  }

  return String(`${url.origin}${url.pathname.replace('/gui/', '/')}${envConfig}/`)
}

export function kumaDpServerUrl() {
  const url = window.location
  const envConfig = String(process.env.VUE_APP_KUMA_DP_SERVER_URL)

  if (process.env.NODE_ENV === 'development') {
    return envConfig
  }

  return envConfig.replace('localhost', url.hostname)
}
