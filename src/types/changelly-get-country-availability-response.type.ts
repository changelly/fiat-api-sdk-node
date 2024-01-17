import { ChangellyProvider } from "../enums";

import { ChangellyState } from "./changelly-state.type";

export interface ChangellyGetCountryAvailabilityResponse {
  /**
   * On-Ramp provider code.
   */
  code: ChangellyProvider;

  /**
   * On-Ramp provider's name.
   */
  name: string;

  /**
   * US states.
   * Is returned if the code of the country is US.
   */
  states?: ChangellyState[];
}
