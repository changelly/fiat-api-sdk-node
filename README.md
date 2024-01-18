# Changelly Fiat API SDK for Typescript and Javascript

This SDK allows you to work with the [Changelly Fiat API](https://fiat-api.changelly.com/docs/) in JavaScript and TypeScript. JavaScript developers will find a fully featured library with convenient functions to automate all of the method calls within the Changelly fiat API; developers using TypeScript will find a rich definition of strict types.

# Using this SDK

This tutorial will walk you through the basics of creating a project that uses the Changelly Fiat API SDK.

1. Let's begin by creating a new project with a skeleton `package.json` file using in NodeJS:

```bash
> npm init --y
```

2. Add necessary Axios dependency:

```bash
> npm install axios
```

3. If you choose to use TypeScript, you can now add TypeScript features to this project. The following steps will install TypeScript, create a `tsconfig.json` file, and gain access to most built-in types for NodeJS:

```bash
> npm install typescript
> npx tsc --init
> npm install -D @types/node
```

4. Add the Changelly Fiat API SDK to your project via Node Package Manager:

```bash
> npm install @changelly/fiat-api-sdk-node
```

5. Register on the [Changelly website](https://changelly.com/) if you don't have an account yet.
6. Write us at [psp@changelly.com](psp@changelly.com) to get the API keys. Indicate the email that you used for registration on the Changelly website.
7. Set your API keys to an environment variable such as `CHANGELLY_PRIVATE_KEY` and `CHANGELLY_PUBLIC_KEY` so that it will not be committed to source control.
8. Create a basic `index.ts` file for your project that creates a Changelly Fiat API client:

```typescript
import { ChangellyFiatClient } from "@changelly/fiat-api-sdk-node";

const client = new ChangellyFiatClient({
  privateKey: process.env["CHANGELLY_PRIVATE_KEY"],
  publicKey: process.env["CHANGELLY_PUBLIC_KEY"],
});
```

9. Make an API call and check the result:

```typescript
const providers = await client.getProviderList();
const currencies = await client.getCurrencyList();

console.log({ providers, currencies });
```

10. For more information, see [documentation](https://fiat-api.changelly.com/docs/#tag/Integration-guide/SDK).
11. If you have any questions, feel free to write us at [psp@changelly.com](psp@changelly.com).

# API Reference

## ChangellyFiatClient

Changelly Fiat API Node.js SDK class.

### Constructor

Create ChangellyFiatClient instance.

```typescript
new ChangellyFiatClient(
  params: ChangellyFiatClientParams
): ChangellyFiatClient
```

**Parameters**

- **params**: [_ChangellyFiatClientParams_](#changellyfiatclientparams)

**Returns** [_ChangellyFiatClient_](#changellyfiatclient)

### Methods

  - [buildSignature](#buildsignature)
  - [validateOrderCallbackSignature](#validateordercallbacksignature)
  - [getProviderList](#getproviderlist)
  - [getCurrencyList](#getcurrencylist)
  - [getCountryAvailabilityList](#getcountryavailabilitylist)
  - [getOffers](#getoffers)
  - [createOrder](#createorder)
  - [validateWalletAddress](#validatewalletaddress)

### buildSignature

Build X-Api-Signature.

```typescript
buildSignature(
  params: ChangellyBuildSignatureParams
): string;
```

**Parameters**

- **params**: [_ChangellyBuildSignatureParams_](#changellybuildsignatureparams)

**Returns** _string_ — Changelly X-Api-Signature

### validateOrderCallbackSignature

Validate order X-Callback-Signature.

```typescript
validateOrderCallbackSignature(
  signature: string,
  orderId: string
): boolean;
```

**Parameters**

- **signature**: _string_ — The serialized string with an orderId signed by Changelly private key according to the RSA-SHA256 method.
- **orderId**: _string_ — Changelly order identifier.

**Returns** _boolean_ — Is callback signature valid?

### getProviderList

Get extended information about On-Ramp providers to users.

```typescript
getProviderList(
  config?: AxiosRequestConfig
): Promise<ChangellyGetProviderListResponse[]>;
```

**Parameters**

- (optional) **config**: [_AxiosRequestConfig_](https://axios-http.com/docs/req_config)

**Returns** _Promise<[ChangellyGetProviderListResponse](#changellygetproviderlistresponse)[]>_

### getCurrencyList

Get list of supported cryptos and fiat currencies.

```typescript
getCurrencyList(
  params?: ChangellyGetCurrencyListParams,
  config?: AxiosRequestConfig
): Promise<ChangellyGetCurrencyListResponse[]>;
```

**Parameters**

- (optional) **params**: [_ChangellyGetCurrencyListParams_](#changellygetcurrencylistparams)
- (optional) **config**: [_AxiosRequestConfig_](https://axios-http.com/docs/req_config)

**Returns** _Promise<[ChangellyGetCurrencyListResponse](#changellygetcurrencylistresponse)[]>_

### getCountryAvailabilityList

Get list of countries where crypto purchases are supported.

```typescript
getCountryAvailabilityList(
  params?: ChangellyGetCountryAvailabilityParams,
  config?: AxiosRequestConfig
): Promise<ChangellyGetCountryAvailabilityResponse[]>;
```

**Parameters**

- (optional) **params**: [_ChangellyGetCountryAvailabilityParams_](#changellygetcountryavailabilityparams)
- (optional) **config**: [_AxiosRequestConfig_](https://axios-http.com/docs/req_config)

**Returns** _Promise<[ChangellyGetCountryAvailabilityResponse](#changellygetcountryavailabilityresponse)[]>_

### getOffers

Get list of purchase offers from On-Ramp providers.

```typescript
getOffers(
  params: ChangellyGetOffersParams,
  config?: AxiosRequestConfig
): Promise<ChangellyGetOffersResponse[]>;
```

**Parameters**

- **params**: [_ChangellyGetOffersParams_](#changellygetoffersparams)
- (optional) **config**: [_AxiosRequestConfig_](https://axios-http.com/docs/req_config)

**Returns** _Promise<[ChangellyGetOffersResponse](#changellygetoffersresponse)[]>_

### createOrder

Create a crypto purchase order and get a redirect URL to the purchase page. If any of the optional parameters are not provided in the request, they will be returned with the "null" value in the response.

```typescript
createOrder(
  data: ChangellyCreateOrderParams,
  config?: AxiosRequestConfig
): Promise<ChangellyCreateOrderResponse>;
```

**Parameters**

- **data**: [_ChangellyCreateOrderParams_](#changellycreateorderparams)
- (optional) **config**: [_AxiosRequestConfig_](https://axios-http.com/docs/req_config)

**Returns** _Promise<[ChangellyCreateOrderResponse](#changellycreateorderresponse)[]>_

### validateWalletAddress

Check if the given wallet address and (optional) extra ID are valid for the given currency.

```typescript
validateWalletAddress(
  data: ChangellyValidateWalletAddressParams,
  config?: AxiosRequestConfig
): Promise<ChangellyValidateWalletAddressResponse>;
```

**Parameters**

- **data**: [_ChangellyValidateWalletAddressParams_](#changellyvalidatewalletaddressparams)
- (optional) **config**: [_AxiosRequestConfig_](https://axios-http.com/docs/req_config)

**Returns** _Promise<[ChangellyValidateWalletAddressResponse](#changellyvalidatewalletaddressresponse)[]>_

### Types

  - [ChangellyFiatClientParams](#changellyfiatclientparams)
  - [ChangellyBuildSignatureParams](#changellybuildsignatureparams)
  - [ChangellyGetProviderListResponse](#changellygetproviderlistresponse)
  - [ChangellyGetCurrencyListParams](#changellygetcurrencylistparams)
  - [ChangellyGetCurrencyListResponse](#changellygetcurrencylistresponse)
  - [ChangellyGetCountryAvailabilityParams](#changellygetcountryavailabilityparams)
  - [ChangellyGetCountryAvailabilityResponse](#changellygetcountryavailabilityresponse)
  - [ChangellyGetOffersParams](#changellygetoffersparams)
  - [ChangellyGetOffersResponse](#changellygetoffersresponse)
    - [Successfull offer](#successfull-offer)
    - [Fail offer](#fail-offer)
  - [ChangellyCreateOrderParams](#changellycreateorderparams)
  - [ChangellyCreateOrderResponse](#changellycreateorderresponse)
  - [ChangellyValidateWalletAddressParams](#changellyvalidatewalletaddressparams)
  - [ChangellyValidateWalletAddressResponse](#changellyvalidatewalletaddressresponse)
  - [ChangellyState](#changellystate)
  - [ChangellyPaymentMethodOffer](#changellypaymentmethodoffer)
  - [ChangellyErrorDetails](#changellyerrordetails)

### ChangellyFiatClientParams

```typescript
interface ChangellyFiatClientParams {
  publicKey: string;
  privateKey: string;
  callbackPublicKey?: string;
  baseUrl?: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **publicKey**

  </td>
  <td>

  _string_ — Changelly Fiat API public key.

  </td>
</tr>
<tr>
  <td>

  **privateKey**

  </td>
  <td>

  _string_ — Changelly Fiat API private key.

  </td>
</tr>
<tr>
  <td>

  (optional) **callbackPublicKey**

  </td>
  <td>

  _string_ — Changelly Fiat API callback public key.

  </td>
</tr>
<tr>
  <td>

  (optional) **baseUrl**

  </td>
  <td>

  _string_ — Base url of Changelly Fiat API. `https://fiat-api.changelly.com/v1` by default.

  </td>
</tr>
</tbody></table>

### ChangellyBuildSignatureParams

```typescript
interface ChangellyBuildSignatureParams {
  baseUrl?: string;
  pathname: ChangellyRequestUrl | string;
  params?:
    | ChangellyGetCurrencyListParams
    | ChangellyGetCountryAvailabilityParams
    | ChangellyGetOffersParams;
  data?: ChangellyCreateOrderParams | ChangellyValidateWalletAddressParams;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  (optional) **baseUrl**

  </td>
  <td>

  _string_ — Base url. `https://fiat-api.changelly.com/v1` by default.

  </td>
</tr>
<tr>
  <td>

  **pathname**

  </td>
  <td>

  _[ChangellyRequestUrl](#changellyrequesturl) | string_ — Request address.

  </td>
</tr>
<tr>
  <td>

  (optional) **params**

  </td>
  <td>

  _[ChangellyGetCurrencyListParams](#changellygetcurrencylistparams) | [ChangellyGetCountryAvailabilityParams](#changellygetcountryavailabilityparams) | [ChangellyGetOffersParams](#changellygetoffersparams)_ — Request query parameteres.

  </td>
</tr>
<tr>
  <td>

  (optional) **data**

  </td>
  <td>

  _[ChangellyCreateOrderParams](#changellycreateorderparams) | [ChangellyValidateWalletAddressParams](#changellyvalidatewalletaddressparams)_ — Request body parameters.

  </td>
</tr>
</tbody></table>

### ChangellyGetProviderListResponse

```typescript
interface ChangellyGetProviderListResponse {
  code: ChangellyProvider;
  name: string;
  trustPilotRating: string;
  iconUrl: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **code**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  **name**

  </td>
  <td>

  _string_ — On-Ramp provider's name.

  </td>
</tr>
<tr>
  <td>

  **trustPilotRating**

  </td>
  <td>

  _string_ — Provider's rating on Trustpilot.

  </td>
</tr>
<tr>
  <td>

  **iconUrl**

  </td>
  <td>

  _string_ — URL of On-Ramp provider's icon.

  </td>
</tr>
</tbody></table>

### ChangellyGetCurrencyListParams

```typescript
interface ChangellyGetCurrencyListParams {
  type?: ChangellyCurrency;
  providerCode?: ChangellyProvider;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  (optional) **type**

  </td>
  <td>

  [_ChangellyCurrency_](#changellycurrency) — Type of currency. If the currency type is not specified, the endpoint will return both fiat currencies and cryptocurrencies.

  </td>
</tr>
<tr>
  <td>

  (optional) **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — The provider whose currencies you want to view. If the On-Ramp provider code is not specified, the endpoint will return the supported currencies of all providers.

  </td>
</tr>
</tbody></table>

### ChangellyGetCurrencyListResponse

```typescript
interface ChangellyGetCurrencyListResponse {
  ticker: string;
  name: string;
  type: ChangellyCurrency;
  extraIdName: string | null;
  iconUrl: string;
  precision: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **ticker**

  </td>
  <td>

  _string_ — Currency ticker in uppercase. It is a unique identifier of the currency.

  </td>
</tr>
<tr>
  <td>

  **name**

  </td>
  <td>

  _string_ — Currency name that you can specify in your interface.

  </td>
</tr>
<tr>
  <td>

  **type**

  </td>
  <td>

  [_ChangellyCurrency_](#changellycurrency) — Currency type.

  </td>
</tr>
<tr>
  <td>

  **extraIdName**

  </td>
  <td>

  _string | null_ — Extra ID name of the cryptocurrency, for example, "Memo". Required for the following currencies: XRP, XLM, EOS, BNB. For fiat currencies and cryptocurrencies without an extra ID, extraIdName equals null. If the currency has an extra ID, you need to provide the `walletExtraId` parameter in the request to `/v1/orders` and `/v1/validate-address` endpoints.

  </td>
</tr>
<tr>
  <td>

  **iconUrl**

  </td>
  <td>

  _string_ — URL of the currency icon.

  </td>
</tr>
<tr>
  <td>

  **precision**

  </td>
  <td>

  _string_ — Currency precision. For fiat currencies, it is always equal to 2.

  </td>
</tr>
</tbody></table>

### ChangellyGetCountryAvailabilityParams

```typescript
interface ChangellyGetCountryAvailabilityParams {
  providerCode?: ChangellyProvider;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  (optional) **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — The provider whose countries you want to view. If the On-Ramp provider code is not specified, the endpoint will return the supported countries of all providers.

  </td>
</tr>
</tbody></table>

### ChangellyGetCountryAvailabilityResponse

```typescript
interface ChangellyGetCountryAvailabilityResponse {
  code: ChangellyProvider;
  name: string;
  states?: ChangellyState[];
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **code**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  **name**

  </td>
  <td>

  _string_ — On-Ramp provider's name.

  </td>
</tr>
<tr>
  <td>

  (optional) **states**

  </td>
  <td>

  [_ChangellyState_](#changellystate)[] — US states. Is returned if the code of the country is US.

  </td>
</tr>
</tbody></table>

- **code**: [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.
- **name**: _string_ — On-Ramp provider's name.
- (optional) **states**: [_ChangellyState_](#changellystate)[] — US states. Is returned if the code of the country is US.

### ChangellyGetOffersParams

```typescript
interface ChangellyGetOffersParams {
  providerCode?: ChangellyProvider;
  externalUserId?: string;
  currencyFrom: string;
  currencyTo: string;
  amountFrom: string;
  country: string;
  state?: string;
  ip?: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  (optional) **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  (optional) **externalUserId**

  </td>
  <td>

  _string_ — User ID provided by you.

  </td>
</tr>
<tr>
  <td>

  **currencyFrom**

  </td>
  <td>

  _string_ — Ticker of the pay-in currency in uppercase.

  </td>
</tr>
<tr>
  <td>

  **currencyTo**

  </td>
  <td>

  _string_ — Ticker of the payout currency in uppercase.

  </td>
<tr>
  <td>

  **amountFrom**

  </td>
  <td>

  _string_ — Amount of currency the user is going to pay.

  </td>
</tr>
<tr>
  <td>

  **country**

  </td>
  <td>

  _string_ — Country ISO 3166-1 code (Alpha-2).

  </td>
<tr>
  <td>

  (optional) **state**

  </td>
  <td>

  _string_ — State ISO 3166-2 code. Is required if the provided country is US.

  </td>
</tr>
<tr>
  <td>

  (optional) **ip**

  </td>
  <td>

  _string_ — User's IP address.

  </td>
</tr>
</tbody></table>

### ChangellyGetOffersResponse

Can be successful and fail.

#### Successfull offer

```typescript
interface Offer {
  providerCode: ChangellyProvider;
  rate: string;
  invertedRate: string;
  fee: string;
  amountFrom: string;
  amountExpectedTo: string;
  paymentMethodOffers: ChangellyPaymentMethodOffer[];
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  **rate**

  </td>
  <td>

  _string_ — The best rate of purchase among all payment methods. The rate includes all the fees.

  </td>
</tr>
<tr>
  <td>

  **invertedRate**

  </td>
  <td>

  _string_ — Inverted rate of purchase.

  </td>
</tr>
<tr>
  <td>

  **fee**

  </td>
  <td>

  _string_ — The lowest value of the total fee of purchase among all payment methods.

  </td>
<tr>
  <td>

  **amountFrom**

  </td>
  <td>

  _string_ — Amount of currency the user is going to pay.

  </td>
</tr>
<tr>
  <td>

  **amountExpectedTo**

  </td>
  <td>

  _string_ — The largest amount of funds among all payment methods that the user is expected to get after the purchase.

  </td>
<tr>
  <td>

  **paymentMethodOffers**

  </td>
  <td>

  [_ChangellyPaymentMethodOffer_](#changellypaymentmethodoffer)[] — Purchase details for each available payment type. Payment methods other than "card" will be available later.

  </td>
</tr>
</tbody></table>

#### Fail offer

```typescript
interface Offer {
  providerCode: ChangellyProvider;
  errorType:
    | ChangellyErrorType.Timeout
    | ChangellyErrorType.Unavailable
    | ChangellyErrorType.Limits
    | ChangellyErrorType.Country
    | ChangellyErrorType.State
    | ChangellyErrorType.Currency
    | ChangellyErrorType.PaymentMethod
    | ChangellyErrorType.InvalidOffer;
  errorMessage: string;
  errorDetails: ChangellyErrorDetails[] | null;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  **errorType**

  </td>
  <td>

  [_ChangellyErrorType_](#changellyerrortype) _(Timeout, Unavailable, Limits, Country, State, Currency, PaymentMethod, InvalidOffer)_ — Error type.

  </td>
</tr>
<tr>
  <td>

  **errorMessage**

  </td>
  <td>

  _string_ — Error message.

  </td>
</tr>
<tr>
  <td>

  **errorDetails**

  </td>
  <td>

  [_ChangellyErrorDetails_](#changellyerrordetails)[] | null — Error details. If the error contains no details, `errorDetails` equals null.

  </td>
</tr>
</tbody></table>

### ChangellyCreateOrderParams

```typescript
type ChangellyCreateOrderParams = {
  externalOrderId: string;
  externalUserId: string;
  providerCode: ChangellyProvider;
  currencyFrom: string;
  currencyTo: string;
  amountFrom: string;
  country: string;
  state?: string;
  ip?: string;
  walletAddress: string;
  walletExtraId?: string;
  paymentMethod?: ChangellyPaymentMethod;
  userAgent?: string;
  metadata?: Record<string, unknown>;
};
```

**Properties**

<table><tbody>
<tr>
  <td>

  **externalOrderId**

  </td>
  <td>

  _string_ — Order ID provided by you.

  </td>
</tr>
<tr>
  <td>

  **externalUserId**

  </td>
  <td>

  _string_ — User ID provided by you.

  </td>
</tr>
<tr>
  <td>

  **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  **currencyFrom**

  </td>
  <td>

  _string_ — Ticker of the pay-in currency in uppercase.

  </td>
</tr>
<tr>
  <td>

  **currencyTo**

  </td>
  <td>

  _string_ — Ticker of the payout currency in uppercase.

  </td>
</tr>
<tr>
  <td>

  **amountFrom**

  </td>
  <td>

  _string_ — Amount of currency the user is going to pay.

  </td>
</tr>
<tr>
  <td>

  **country**

  </td>
  <td>

  _string_ — Country ISO 3166-1 code (Alpha-2).

  </td>
</tr>
<tr>
  <td>

  (optional) **state**

  </td>
  <td>

  _string_ — State ISO 3166-2 code. Is required if the provided country is US.

  </td>
</tr>
<tr>
  <td>

  (optional) **ip**

  </td>
  <td>

  _string_ — User's IP address.

  </td>
</tr>
<tr>
  <td>

  **walletAddress**

  </td>
  <td>

  _string_ — Recipient wallet address. Here are 2 simple use cases of this parameter:
  - If you want to provide the cryptocurrency purchase service, you should enable the user to specify the wallet address.
  - If you want to sell your products for fiat and receive cryptocurrency in your wallet, you should specify your own wallet address.

  </td>
</tr>
<tr>
  <td>

  (optional) **walletExtraId**

  </td>
  <td>

  _string_ — Property required for wallet addresses of currencies that use an additional ID for transaction processing (XRP, XLM, EOS, BNB).

  </td>
</tr>
<tr>
  <td>

  (optional) **paymentMethod**

  </td>
  <td>

  [_ChangellyPaymentMethod_](#changellypaymentmethod) — The payment method code.

  </td>
</tr>
<tr>
  <td>

  (optional) **userAgent**

  </td>
  <td>

  _string_ — User Agent.

  </td>
</tr>
<tr>
  <td>

  (optional) **metadata**

  </td>
  <td>

  _Record<string, unknown>_ — Metadata object, which can contain any parameters you need.

  </td>
</tr>
</tbody></table>

### ChangellyCreateOrderResponse

```typescript
interface ChangellyCreateOrderResponse {
  redirectUrl: string;
  orderId: string;
  externalUserId: string;
  externalOrderId: string;
  providerCode: ChangellyProvider;
  currencyFrom: string;
  currencyTo: string;
  amountFrom: string;
  country: string;
  state: string | null;
  ip: string | null;
  walletAddress: string;
  walletExtraId: string | null;
  paymentMethod: ChangellyPaymentMethod | null;
  userAgent: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **redirectUrl**

  </td>
  <td>

  _string_ — URL to the provider's purchase page.

  </td>
</tr>
<tr>
  <td>

  **orderId**

  </td>
  <td>

  _string_ — Internal order ID provided by Fiat API.

  </td>
</tr>
<tr>
  <td>

  **externalUserId**

  </td>
  <td>

  _string_ — User ID provided by you.

  </td>
</tr>
<tr>
  <td>

  **externalOrderId**

  </td>
  <td>

  _string_ — Order ID provided by you.

  </td>
</tr>
<tr>
  <td>

  **providerCode**

  </td>
  <td>

  [_ChangellyProvider_](#changellyprovider) — On-Ramp provider code.

  </td>
</tr>
<tr>
  <td>

  **currencyFrom**

  </td>
  <td>

  _string_ — Ticker of the pay-in currency in uppercase.

  </td>
</tr>
<tr>
  <td>

  **currencyTo**

  </td>
  <td>

  _string_ — Ticker of the payout currency in uppercase.

  </td>
</tr>
<tr>
  <td>

  **amountFrom**

  </td>
  <td>

  _string_ — Amount of currency the user is going to pay.

  </td>
</tr>
<tr>
  <td>

  **country**

  </td>
  <td>

  _string_ — Country ISO 3166-1 code (Alpha-2).

  </td>
</tr>
<tr>
  <td>

  **state**

  </td>
  <td>

  _string | null_ — State ISO 3166-2 code. Will be null if the provided country is not US.

  </td>
</tr>
<tr>
  <td>

  **ip**

  </td>
  <td>

  _string | null_ — User's IP address.

  </td>
</tr>
<tr>
  <td>

  **walletAddress**

  </td>
  <td>

  _string_ — Recipient wallet address.

  </td>
</tr>
<tr>
  <td>

  **walletExtraId**

  </td>
  <td>

  _string | null_ — Property required for wallet addresses of currencies that use an additional ID for transaction processing (XRP, XLM, EOS, BNB).

  </td>
</tr>
<tr>
  <td>

  **paymentMethod**

  </td>
  <td>

  [_ChangellyPaymentMethod_](#changellypaymentmethod) | null — The payment method code.

  </td>
</tr>
<tr>
  <td>

  **userAgent**

  </td>
  <td>

  _string | null_ — User Agent.

  </td>
</tr>
<tr>
  <td>

  **metadata**

  </td>
  <td>

  _Record<string, unknown> | null_ — Metadata object, which can contain any parameters you need. If you don't provide the metadata object in the request, null will be returned in metadata in the response. If you specify an empty object in the request, an empty object will be returned in the response.

  </td>
</tr>
<tr>
  <td>

  **createdAt**

  </td>
  <td>

  _string_ — Time in ISO 8601 format.

  </td>
</tr>
</tbody></table>

### ChangellyValidateWalletAddressParams

```typescript
interface ChangellyValidateWalletAddressParams {
  currency: string;
  walletAddress: string;
  walletExtraId?: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **currency**

  </td>
  <td>

  _string_ — Cryptocurrency ticker in uppercase.

  </td>
</tr>
<tr>
  <td>

  **walletAddress**

  </td>
  <td>

  _string_ — Recipient wallet address.

  </td>
</tr>
<tr>
  <td>

  (optional) **walletExtraId**

  </td>
  <td>

  _string_ — Property required for wallet addresses of currencies that use an additional ID for transaction processing (XRP, XLM, EOS, BNB).

  </td>
</tr>
</tbody></table>

### ChangellyValidateWalletAddressResponse

```typescript
interface ChangellyValidateWalletAddressResponse {
  result: boolean;
  cause: "walletAddress" | "walletExtraId" | null;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **result**

  </td>
  <td>

  _boolean_ — Is false if the wallet address or extra ID is incorrect.

  </td>
</tr>
<tr>
  <td>

  **cause**

  </td>
  <td>

  "walletAddress" | "walletExtraId" | null — Specifies whether the wallet address or extra ID is incorrect. If the result is true, cause equals null.

  </td>
</tr>
</tbody></table>

### ChangellyState

```typescript
interface ChangellyState {
  code: string;
  name: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **code**

  </td>
  <td>

  _string_ — State ISO 3166-2 code.

  </td>
</tr>
<tr>
  <td>

  **name**

  </td>
  <td>

  _string_ — State name.

  </td>
</tr>
</tbody></table>

### ChangellyPaymentMethodOffer

```typescript
interface ChangellyPaymentMethodOffer {
  amountExpectedTo: string;
  method: ChangellyPaymentMethod;
  methodName: string;
  invertedRate: string;
  fee: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **amountExpectedTo**

  </td>
  <td>

  _string_ — The amount of funds that the user is expected to get after the purchase.

  </td>
</tr>
<tr>
  <td>

  **method**

  </td>
  <td>

  [_ChangellyPaymentMethod_](#changellypaymentmethod) — The payment method code.

  </td>
</tr>
<tr>
  <td>

  **methodName**

  </td>
  <td>

  _string_ — The payment method name.

  </td>
</tr>
<tr>
  <td>

  **invertedRate**

  </td>
  <td>

  _string_ — Current rate of purchase, which includes all the fees.

  </td>
</tr>
<tr>
  <td>

  **fee**

  </td>
  <td>

  _string_ — Total fee of the purchase.

  </td>
</tr>
</tbody></table>

### ChangellyErrorDetails

```typescript
interface ChangellyErrorDetails {
  cause: string;
  value: string;
}
```

**Properties**

<table><tbody>
<tr>
  <td>

  **cause**

  </td>
  <td>

  _string_ — Error cause. For example, it can equal the missing request parameter for the validation error type.

  </td>
</tr>
<tr>
  <td>

  **value**

  </td>
  <td>

  _string_ — Error value.

  </td>
</tr>
</tbody></table>

### Enumerations

  - [ChangellyRequestUrl](#changellyrequesturl)
  - [ChangellyProvider](#changellyprovider)
  - [ChangellyCurrency](#changellycurrency)
  - [ChangellyErrorType](#changellyerrortype)
  - [ChangellyPaymentMethod](#changellypaymentmethod)

### ChangellyRequestUrl

```typescript
enum ChangellyRequestUrl {
  ProvderList = "/v1/providers",
  CurrencyList = "/v1/currencies",
  CountryAvailability = "/v1/available-countries",
  GetOffers = "/v1/offers",
  CreateOrder = "/v1/orders",
  ValidateWalletAddress = "/v1/validate-address",
}
```

**Members**

- **ProvderList**: _"/v1/providers"_
- **CurrencyList**: _"/v1/currencies"_
- **CountryAvailability**: _"/v1/available-countries"_
- **GetOffers**: _"/v1/offers"_
- **CreateOrder**: _"/v1/orders"_
- **ValidateWalletAddress**: _"/v1/validate-address"_

### ChangellyProvider

```typescript
enum ChangellyProvider {
  Moonpay = "moonpay",
  Banxa = "banxa",
  Wert = "wert",
}
```

**Members**

- **Moonpay**: _"moonpay"_
- **Banxa**: _"banxa"_
- **Wert**: _"wert"_

### ChangellyCurrency

```typescript
enum ChangellyCurrency {
  Crypto = "crypto",
  Fiat = "fiat",
}
```

**Members**

- **Crypto**: _"crypto"_
- **Fiat**: _"fiat"_

### ChangellyErrorType

```typescript
enum ChangellyErrorType {
  Validation = "validation",
  Timeout = "timeout",
  Unavailable = "unavailable",
  Limits = "limits",
  Country = "country",
  State = "state",
  Currency = "currency",
  PaymentMethod = "paymentMethod",
  InvalidOffer = "invalidOffer",
  Unauthorized = "unauthorized",
  TooManyRequests = "tooManyRequests",
  InternalServerError = "internalServerError",
}
```

**Members**

- **Validation**: _"validation"_ — Validation error.
- **Timeout**: _"timeout"_ — Request to the provider was not completed in the allotted time.
- **Unavailable**: _"unavailable"_ — Request failed at the provider's end.
- **Limits**: _"limits"_ — Specified pay-in amount is less than the minimum or more than the maximum value for the fiat currency.
- **Country**: _"country"_ — Specified country is not supported by the provider.
- **State**: _"state"_ — Offer requested for the United States, but the state parameter is not provided.
- **Currency**: _"currency"_ — Specified currency pair is not supported by the provider.
- **PaymentMethod**: _"paymentMethod"_ — Specified payment method is not supported by the provider.
- **InvalidOffer**: _"invalidOffer"_ — On-Ramp provider returned an invalid offer.
- **Unauthorized**: _"unauthorized"_ — Unauthorized error
- **TooManyRequests**: _"tooManyRequests"_ — Too many requests error
- **InternalServerError**: _"internalServerError"_ — Internal server error

### ChangellyPaymentMethod

```typescript
enum ChangellyPaymentMethod {
  Card = "card",
  Sepa = "sepa_bank_transfer",
}
```

**Members**

- **Card**: _"card"_
- **Sepa**: _"sepa_bank_transfer"_
