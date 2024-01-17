import { ChangellyPaymentMethod } from "../enums";

export interface ChangellyPaymentMethodOffer {
  /**
   * The amount of funds that the user is expected to get after the purchase.
   */
  amountExpectedTo: string;

  /**
   * The payment method code.
   */
  method: ChangellyPaymentMethod;

  /**
   * The payment method name.
   */
  methodName: string;

  /**
   * Current rate of purchase, which includes all the fees.
   */
  invertedRate: string;

  /**
   * Total fee of purchase.
   */
  fee: string;
}
