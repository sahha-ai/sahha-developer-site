---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Get Started

This page will help you get started with Sahha. You'll be up and running in a jiffy!

---

## Step 1) Register Your Account

Tap "Register Account" to quickly sign up for an account that your organization can use to access Sahha services.

<Link
            className="button button--secondary button--lg"
            to='https://app.sahha.ai/?rel=docs'>
            Register Account
          </Link>

---

## Step 2) Access Your API Keys

:::info You will need to access your API Keys in order to start connecting to the Sahha API.

You can find your Client ID and Client Secret inside the Dashboard by going to `API Credentials` from the sidebar menu.
:::

![Access](./img/api-credentials.png)

---

## Step 3) Authenticate Your Account

You will need to authenticate your account to access the Sahha API.

View the API docs: [API - Authenticate Account](/api/#tag/1.-Account-Authentication/paths/~1api~1v1~1oauth~1account~1token/post)

Use your Client ID and Client Secret from the Dashboard to authenticate your account via the API.

```json title="REQUEST"
// POST "/oauth/account/token"
{
  "clientId": "MY_CLIENT_ID",
  "clientSecret": "MY_CLIENT_SECRET"
}
```

You will receive an `accountToken` that allows you to create new user profiles.

```json title="RESPONSE"
// 200 OK
{
  "accountToken": "MY_ACCOUNT_TOKEN",
  "expiresIn": "86400",
  "tokenType": "Account"
}
```

***

## Step 4) Authenticate a User Profile

User profiles represent the unique individuals that user your app or service. You will need to authenticate your users in order to upload data and download an analysis for each individual. You can authenticate a user profile via the API or SDK.

### Authenticate via API

You can authenticate a user profile via the API.

View the API docs: [API - Authenticate User Profile](/api/#tag/3.-Profile-Authentication)

Use your `accountToken` and `externalId` to authenticate a user profile via the `profile/register` endpoint.

```json title="REQUEST"
// POST "/oauth/profile/register"
// AUTHORIZATION HEADER "Account MY_ACCOUNT_TOKEN"

// BODY
{
  "externalId": "MY_EXTERNAL_ID"
}
```

You will receive a `profileToken` and `refreshToken` in the API response.

```json title="RESPONSE"
// POST "/oauth/profile/register"
// AUTHORIZATION HEADER "Account MY_ACCOUNT_TOKEN"

// BODY
{
  "profileToken": "PROFILE_TOKEN",
  "expiresIn": "86400",
  "tokenType": "Profile",
  "refreshToken": "REFRESH_TOKEN"
}
```

### Authenticate via SDK

You can also authenticate a user profile via the SDK.

You will need to pass `appId`, `appSecret`, and `externalId` to the `authenticate` method.

View the SDK docs: [Profile - Authenticate](/docs/use-the-sdk/profile)

---

## Step 5) Build with Sahha

It's time to start building with Sahha!

You can either:

**Option A)** [Use the API](/api/)

**Option B)** [Use the SDK](/docs/use-the-sdk/configuration)

:::caution Disclaimer

We recommend sending behavioral data using one of the available SDK's instead of directly via the API. Behavioral data that is uploaded via the API may differ in the structure and frequency typical of the device sensors. This could lead to reduced accuracy in your data analysis results.

:::

***

## Step 6) Try the Sahha Demo App

To see what you can build with Sahha, we recommend trying one of our demo apps.

[Try the Demo App](/docs/try-the-demo)

***

## Step 7) Join Sahha on Slack

Sahha hosts an open Slack community for developers. Please join us on Slack to get help from the Sahha team and fellow developers to better integrate Sahha into your project.

<Link
            className="button button--secondary button--lg"
            to='https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw'>
            Join Sahha on Slack
          </Link>