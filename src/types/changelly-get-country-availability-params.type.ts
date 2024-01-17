import { ChangellyProvider } from "../enums";

export interface ChangellyGetCountryAvailabilityParams {
  /**
   * The provider whose countries you want to view.
   * If the On-Ramp provider code is not specified, the endpoint will return the supported countries of all providers.
   */
  providerCode?: ChangellyProvider;
}
