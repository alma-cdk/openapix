

/**
 * Specifies the TLS configuration for an integration.
 */
export interface XAmazonApigatewayIntegrationTlsConfig {

  /**
   * Specifies whether or not API Gateway skips verification that the
   * certificate for an integration endpoint is issued by a supported c
   * ertificate authority. This isn’t recommended, but it enables you to
   * use certificates that are signed by private certificate authorities,
   * or certificates that are self-signed. If enabled, API Gateway still
   * performs basic certificate validation, which includes checking the
   * certificate's expiration date, hostname, and presence of a root certificate
   * authority. Supported only for HTTP and HTTP_PROXY integrations.
   */
  readonly insecureSkipVerification: boolean;
}
