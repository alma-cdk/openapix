import { Integration } from '../../integration';
import { HTTPMethodValue } from '../props';

export interface IMethodIntegrations {
  get?: Integration;
  post?: Integration;
  put?: Integration;
  delete?: Integration;
  options?: Integration;
  head?: Integration;
  patch?: Integration;
  trace?: Integration;
};

/**
 * Methods with integrations.
 *
 * Has to be a class because of JSII limitations.
 *
 * Because of JSII5000 all getters are renamed to non-getXxx named methods.
 */
export class Methods {
  private readonly methods: IMethodIntegrations;

  public constructor(methods: IMethodIntegrations) {
    // check if the methods are empty
    if (Object.keys(methods).length === 0) {
      throw new Error('At least one method must be defined');
    }

    this.methods = methods;
  }

  /**
   * Add or update an integration for a specific HTTP method
   */
  public setIntegration(method: HTTPMethodValue, integration: Integration): void {
    this.methods[method] = integration;
  }

  /**
   * Get an integration for a specific HTTP method
   */
  public fetchIntegration(method: HTTPMethodValue): Integration | undefined {
    return this.methods[method];
  }

  /**
   * Check if there is an integration for a specific HTTP method
   */
  public hasIntegration(method: HTTPMethodValue): boolean {
    return this.methods.hasOwnProperty(method);
  }

  /**
   * Remove integration from a specific HTTP method
   */
  public removeIntegration(method: HTTPMethodValue): boolean {
    if (this.hasIntegration(method)) {
      delete this.methods[method];
      return true;
    }
    return false;
  }

  /**
   * Get all integrations
   */
  public fetchAllIntegrations(): IMethodIntegrations {
    return this.methods;
  }
}