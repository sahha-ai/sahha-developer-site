---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Managing User Profiles

User Profiles are core to how Sahha works. Each User Profile is associated with a health analysis and corresponding sensor, and health data. This guide will teach you how to create, authenticate and manage user profiles. 

---

## Authenticating a User Profile

The Sahha SDK must be authenticated in order to connect to the Sahha API. Do this once per user profile. Once a profile is authenticated, the SDK will take care of automatically issuing and refreshing API tokens.

#### But before we start authenticating User Profiles we need to know how to use the `ExternalID` field

### Using the External ID

You will need to provide your own unique External ID to authenticate a user profile. An External ID can be any string you choose to identify a user profile within your organization. This ID must be unique for each of your users. This ID has a limit of 100 characters.

We suggest using an anonymous UUID e.g. `123e4567-e89b-12d3-a456-426614174000`

:::tip If your user changes devices, make sure to use the same External ID to identify them on the new device.

:::

:::danger User Privacy Warning

Sahha does not collect personally identifiable information from users to safegaurd user data privacy and security.

**DO NOT** use an `ExternalID` that could be used to personally identify a user.

For example, do not use emails or usernames for an `ExternalID`:
 - Email (Samantha.Jones@website.com)
 - Username (TimmyT_123)

:::

Now that we know how to use the ExternalID we can start authenticating User Profiles. You can authenticate a User Profile in 2 ways - via the API or SDK.

### Option A) Authenticate via SDK

The fastest way to authenticate a User Profile is via the Sahha SDK. You will need your `appID` and `appSecret` to authenticate user profiles with an External ID which you can get from your [Sahha Dashboard](https://app.sahha.ai) under the API keys tab. 

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.authenticate(appId: "APP_ID", appSecret: "APP_SECRET", externalId: "EXTERNAL_ID") { error, success in
	if let error = error {
   	print(error)
	} else if success {
 		print("You are now authenticated")
 	}
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.authenticate(appId: "APP_ID", appSecret:  "APP_SECRET", externalId: "EXTERNAL_ID") { error, success ->
    if (success) greeting = "Successful"
    else greeting = error ?: "Failed"
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.authenticate(appId: "APP_ID", appSecret: "APP_SECRET", externalId: "EXTERNAL_ID")
  .then((success) => {
    debugPrint(success.toString())
  })
  .catchError((error, stackTrace) => {
    debugPrint(error.toString())
  });
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.authenticate(
  "APP_ID",
  "APP_SECRET",
  "EXTERNAL_ID",
  (error: string, success: boolean) => {
    console.log(`Success: ${success}`);
    if (error) {
      console.error(`Error: ${error}`);
    }
  }
);
```

</TabItem>

</Tabs>

:::tip Finding your App ID and App Secret

Your `appId` and `appSecret` are available in the Sahha dashboard.

[Login to the Sahha Dashboard](https://app.sahha.ai)

These values are separate from your `clientId` and `clientSecret` and should only be used to authenticate a profile via the SDK.

:::

:::danger Using your App ID and App Secret

**DO NOT** store your app ID and App Secret in your app code. Your account could be harmed if any 3rd party gains access to these two values. 

We recommend storing and accessing these values from your server on app launch.

:::

---

### Option B) Authenticate via API

You can also authenticate a user profile via the API and then pass the Profile Token to the SDK.

View the API docs: [API - Authenticate User Profile](/api/#tag/3.-Profile-Authentication)

#### Step 1) Use your `accountToken` and `externalId` to authenticate a user profile via the `profile/register` endpoint.

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

#### Step 2) Pass the `profileToken` and `refreshToken` you generated via the API to the SDK.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.authenticate(profileToken: "PROFILE_TOKEN", refreshToken: "REFRESH_TOKEN") { error, success in
	if let error = error {
   	print(error)
	} else if success {
 		print("You are now authenticated")
 	}
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.authenticate(profileToken: "PROFILE_TOKEN", refreshToken:  "REFRESH_TOKEN") { error, success ->
    if (success) greeting = "Successful"
    else greeting = error ?: "Failed"
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.authenticateToken(profileToken: "PROFILE_TOKEN", refreshToken: "REFRESH_TOKEN")
  .then((success) => {
    debugPrint(success.toString())
  })
  .catchError((error, stackTrace) => {
    debugPrint(error.toString())
  });
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.authenticateToken(
  "PROFILE_TOKEN",
  "REFRESH_TOKEN",
  (error: string, success: boolean) => {
    console.log(`Success: ${success}`);
    if (error) {
      console.error(`Error: ${error}`);
    }
  }
);
```

</TabItem>

</Tabs>

***

## Deauthenticate

If you would like to change authenticated users, first deauthenticate the current user before authenticating a new user.

The SDK will take care of switching user data and automatically issuing and refreshing API tokens.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.deauthenticate { error, success in
	if let error = error {
   	print(error)
	} else if success {
 		print("You are now deauthenticated")
 	}
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.deauthenticate { error, success ->
    if (success) farewell = "Successful"
    else farewell = error ?: "Failed"
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.deauthenticate()
  .then((success) => {
    debugPrint(success.toString())
  })
  .catchError((error, stackTrace) => {
    debugPrint(error.toString())
  });
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.deauthenticate(
  (error: string, success: boolean) => {
    console.log(`Success: ${success}`);
    if (error) {
      console.error(`Error: ${error}`);
    }
  }
);
```

</TabItem>

</Tabs>

---

## Check Authentication

You can easily check if a profile is already authenticated via the SDK.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
if Sahha.isAuthenticated {
  print("Profile is ready")
} else {
 	print("You must authenticate your profile")
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
if Sahha.isAuthenticated {
  print("Profile is ready")
} else {
 	print("You must authenticate your profile")
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.isAuthenticated()
  .then((success) => {
    debugPrint(success.toString())
  })
  .catchError((error, stackTrace) => {
    debugPrint(error.toString())
  });
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.isAuthenticated(
  (error: string, success: boolean) => {
    console.log(`Success: ${success}`);
    if (error) {
      console.error(`Error: ${error}`);
    }
  }
);
```

</TabItem>

</Tabs>

---

## User Profile Demographics

Each authenticated profile includes an optional demographic which can be used to increase the accuracy of any analysis. This data is not collected automatically. Your app can choose to `GET` or `POST` this demographic via the Sahha API.

:::info All values are optional

String values are case insensitive (for example: `'us'` and `'US'` are equal and valid).

:::

 #### `age : Int`

Age must be a valid `Int` between `1 - 99`.

#### `gender : String`

Gender must be a valid `String` from this list:

- `'male'`
- `'female'`
- `'gender diverse'`

#### `country : String`

Country must be a valid 2 character ISO `String` from this list:

[ISO Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

#### `birthCountry : String`

Birth Country must be a valid 2 character ISO `String` from this list:

[ISO Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

#### `ethnicity : String`

Any `String` value.

#### `occupation : String`

Any `String` value.

#### `industry : String`

Any `String` value.

#### `incomeRange : String`

Any `String` value.

#### `education : String`

Any `String` value.

#### `relationship : String`

Any `String` value.

#### `locale : String`

Any `String` value.

#### `livingArrangement : String`

Any `String` value.

#### `birthDate : String`

Birth Date must be a `String` in the format `'YYYY-MM-DD'`. For example, `'1990-05-20'`.

***

## Using the API for Demographics

You can `GET` or `POST` demographic info via the API using this model.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
// All values are optional

public struct SahhaDemographic: Codable {
    public var age: Int?
    public var gender: String? // "male", "female", "gender diverse"
    public var country: String? // ISO 2 character code, i.e. "us", "uk", "au", etc.
    public var birthCountry: String?  // ISO 2 character code, i.e. "us", "uk", "au", etc.
    public var ethnicity: String? // any string
    public var occupation: String? // any string
    public var industry: String? // any string
    public var incomeRange: String? // any string
    public var education: String? // any string
    public var relationship: String? // any string
    public var locale: String? // any string
    public var livingArrangement: String? // any string
    public var birthDate: String? // must be in format "YYYY-MM-DD", i.e. "1990-05-20"
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
// All values are optional

class SahhaDemographic {
    public var age: Int?
    public var gender: String? // "male", "female", "gender diverse"
    public var country: String? // ISO 2 character code, i.e. "us", "uk", "au", etc.
    public var birthCountry: String?  // ISO 2 character code, i.e. "us", "uk", "au", etc.
    public var ethnicity: String? // any string
    public var occupation: String? // any string
    public var industry: String? // any string
    public var incomeRange: String? // any string
    public var education: String? // any string
    public var relationship: String? // any string
    public var locale: String? // any string
    public var livingArrangement: String? // any string
    public var birthDate: String? // must be in format "YYYY-MM-DD", i.e. "1990-05-20"
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
// All values are optional

var demographic = {
  "age" : 35, // int
  "gender" : "Female", // string, "Male", "Female", "Gender Diverse"
  "country" : "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  "birthCountry" : "UK" // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
};
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
// All values are optional

const demographic = {
  age: 35, // number
  gender: "Female", // string, "Male", "Female", "Gender Diverse",
  country: "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthCountry: "UK", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthDate: "1990-05-20" // must be in format "YYYY-MM-DD", i.e. "1990-05-20"
}
```

</TabItem>

</Tabs>

***

### POST

An example `POST` of demographic info via the SDK.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
let demographic = SahhaDemographic(
    age: 32,
    gender: "Female",
    country: "NZ",
    birthCountry: "UK",
    birthDate: "1990-05-20"
)

Sahha.postDemographic(demographic) { error, success in
    if let error = error {
        print(error)
    }
    print(success)
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
var demographic = SahhaDemographic(
    age: 32, 
    gender: "Female", 
    country: "NZ", 
    birthCountry: "UK", 
    birthDate: "1990-05-20"
)

Sahha.postDemographic(demographic) { error, success ->
    if (error != null) {
        println(error)
    } else {
        println(success.toString())
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
var demographic = {
  "age" : 32, // int
  "gender" : "Female", // string, "Male", "Female", "Gender Diverse"
  "country" : "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  "birthCountry" : "UK" // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
};

SahhaFlutter.postDemographic(demographic)
  .then((success) => {
    debugPrint(success.toString())
  })
  .catchError((error, stackTrace) => {
    debugPrint(error.toString())
  });
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
const demographic = {
  age: 32, // number
  gender: "Female", // string, "Male", "Female", "Gender Diverse",
  country: "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthCountry: "UK", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthDate: "1990-05-20" // must be in format "YYYY-MM-DD", i.e. "1990-05-20"
}

Sahha.postDemographic(demographic, (error: string, success: boolean) => {
  if error {
    console.error(`Error: $ {error}`);
  } else if success {
    console.log(`Success: $ {success}`);
  }
});
```

</TabItem>

</Tabs>

---

### GET

An example `GET` of demographic info via the SDK.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.getDemographic() { error, demographic in
    if let error = error {
        print(error)
    }
    if let demographic = demographic {
        print(demographic)
    }
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.getDemographic() { error, demographic ->
    if (error != null) {
        println(error)
    } else if (demographic != null) {
        println(demographic)
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.getDemographic()
  .then((value) => {
    debugPrint(value)
  })
  .catchError((error, stackTrace) => {
    debugPrint(error.toString())
  });
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.getDemographic((error: string, value: string) => {
  if error {
    console.error(`Error: $ {error}`);
  } else if value {
    console.log(`Value: $ {value}`);
  }
});
```

</TabItem>

</Tabs>