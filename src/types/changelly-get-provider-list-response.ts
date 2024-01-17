import { ChangellyProvider } from "../enums";

export interface ChangellyGetProviderListResponse {
  /**
   * On-Ramp provider code.
   */
  code: ChangellyProvider;

  /**
   * On-Ramp provider's name.
   */
  name: string;

  /**
   * Provider's rating on Trustpilot.
   */
  trustPilotRating: string;

  /**
   * URL of On-Ramp provider's icon.
   */
  iconUrl: string;
}
