import { ChangellyProvider, ChangellyErrorType } from "../enums";

import { ChangellyPaymentMethodOffer } from "./changelly-payment-method-offer.type";
import { ChangellyErrorDetails } from "./changelly-error-details.type";

/**
 * Successful offer
 */
interface Offer {
  /**
   * On-Ramp provider code.
   */
  providerCode: ChangellyProvider;

  /**
   * The best rate of purchase among all payment methods.
   * The rate includes all the fees.
   */
  rate: string;

  /**
   * Inverted rate of purchase.
   */
  invertedRate: string;

  /**
   * The lowest value of the total fee of purchase among all payment methods.
   */
  fee: string;

  /**
   * Amount of currency the user is going to pay.
   */
  amountFrom: string;

  /**
   * The largest amount of funds among all payment methods that the user is expected to get after the purchase.
   */
  amountExpectedTo: string;

  /**
   * Purchase details for each available payment type.
   * Payment methods other than "card" will be available later.
   */
  paymentMethodOffers: ChangellyPaymentMethodOffer[];
}

/**
 * Error offer
 */
interface Offer {
  /**
   * On-Ramp provider code.
   */
  providerCode: ChangellyProvider;

  /**
   * Error type.
   */
  errorType:
    | ChangellyErrorType.Timeout
    | ChangellyErrorType.Unavailable
    | ChangellyErrorType.Limits
    | ChangellyErrorType.Country
    | ChangellyErrorType.State
    | ChangellyErrorType.Currency
    | ChangellyErrorType.PaymentMethod
    | ChangellyErrorType.InvalidOffer;

  /**
   * Error message.
   */
  errorMessage: string;

  /**
   * Error details.
   * If the error contains no details, errorDetails equals null.
   */
  errorDetails: ChangellyErrorDetails[] | null;
}

/**
 * Can be successful and fail.
 */
export type ChangellyGetOffersResponse = Offer;
