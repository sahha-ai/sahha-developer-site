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

[API - Authenticate Account](/api/#tag/1.-Account-Authentication/paths/~1api~1v1~1oauth~1account~1token/post)

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

User profiles represent the unique individuals that user your app or service. You will need to authenticate your users in order to upload data and download an analysis for each individual.

[<u>API - Authenticate User Profile</u>](/api/#tag/3.-Profile-Authentication)

Use your `accountToken` and `externalId` to authenticate a user profile via the API.

```json title="REQUEST"
// POST "/oauth/profile/register"
// AUTHORIZATION HEADER "Account MY_ACCOUNT_TOKEN"

// BODY
{
  "externalId": "MY_EXTERNAL_ID"
}
```

:::tip Choosing your External ID

An External ID can be any string you choose to identify a user profile within your organization. This ID must be unique for each of your users.

Suggested formats:

- **UUID**, e.g. `123e4567-e89b-12d3-a456-426614174000`
- **Email**, e.g. `user@email.com`
- **Username**, e.g. `User123`

If your user changes devices, make sure to use the same External ID to identify them on the new device.

:::

You will receive a `profileToken` that allows that specific user profile to connect to the Sahha API.

```json title="RESPONSE"
// 200 OK
{
  "profileToken": "MY_PROFILE_TOKEN",
  "expiresIn": "86400",
  "tokenType": "Profile",
  "refreshToken": "MY_REFRESH_TOKEN"
}
```

You can also authenticate a user profile via the SDK.

:::caution Authenticate a User Profile with the SDK

If you also install the Sahha SDK in your app, you will need to pass `appId`, `appSecret`, and `externalId` to the `authenticate` method.

[Profile - Authenticate](/docs/use-the-sdk/profile)

:::

---

## Step 5) Build with Sahha

It's time to start building with Sahha!

You can either:

**A)** [Use the API](/api/)

**B)** [Use the SDK](/docs/use-the-sdk/configuration)

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