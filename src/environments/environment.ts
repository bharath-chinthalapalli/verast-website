// https://www.builder.io/c/docs/using-your-api-key
export const environment = {
  production: false,
  builderApiKey: "",
  // Add your API endpoints
  apiUrl: '',
  // Add feature flags
  enableDebug: true,
  // Add authentication settings
  authEnabled: true,
  // Add other third-party service configurations
  googleAnalyticsId: '',
  // Add any other environment-specific variables
  version: '1.0.0',
  VERAST_BASE_URL:'https://verast.io/api/v1/mail/',
  recaptcha: {
    siteKeyV2: '',
    siteKeyV3: '6LeTQoQrAAAAAAKzOjSQYc3EgL2Makmz3XGCRE00'
  }
};
