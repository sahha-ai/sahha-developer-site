---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Profile

Manage a Sahha user profile

---

## Authenticate

The Sahha SDK must be authenticated in order to connect to the Sahha API. Do this once per user profile. The SDK will take care of automatically issuing and refreshing API tokens.

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
SahhaFlutter.authenticate("APP_ID", "APP_SECRET", "EXTERNAL_ID")
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

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
Sahha.authenticate({
  appId: "APP_ID",
  appSecret: "APP_SECRET",
  externalId: "EXTERNAL_ID"
  
})
  .then((data) => {
    console.log(`Success: ${data.success}`);
  })
  .catch((error: Error) => {
    console.error(error);
  });
```

</TabItem>

</Tabs>

---

### App ID / App Secret

You will need your App ID and App Secret to authenticate user profiles via the SDK.

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

### External ID

You will need to use an External ID to authenticate user profiles via the SDK.

:::tip Choosing your External ID

An External ID can be any string you choose to identify a user profile within your organization. This ID must be unique for each of your users. This ID has a limit of 100 characters.

We suggest using an anonymous UUID e.g. `123e4567-e89b-12d3-a456-426614174000`

If your user changes devices, make sure to use the same External ID to identify them on the new device.

:::

:::danger User Privacy

Sahha does not collect personally identifiable information from users due to privacy and security.

**DO NOT** use an External ID that could be used to personally identify a user.

For example, do not use emails or usernames for External ID:
 - Email (Samantha.Jones@website.com)
 - Username (TimmyT_123)

:::

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

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
Sahha.deauthenticate()
  .then((data) => {
    console.log(`Success: ${data.success}`);
  })
  .catch((error: Error) => {
    console.error(error);
  });
```

</TabItem>

</Tabs>

---

## Demographic

Each authenticated profile includes an optional demographic which can be used to increase the accuracy of analyzation. This data is not collected automatically. Your app can choose to `GET` or `POST` this demographic via the Sahha API.

:::info All values are optional

String values are case insensitive (for example: `'us'` and `'US'` are equal and valid).

:::

### `age : Int`

Age must be a valid `Int` between `1 - 99`.

### `gender : String`

Gender must be a valid `String` from this list:

- `'male'`
- `'female'`
- `'gender diverse'`

### `country : String`

Country must be a valid 2 character ISO `String` from this list:

[ISO Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

### `birthCountry : String`

Birth Country must be a valid 2 character ISO `String` from this list:

[ISO Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

### `ethnicity : String`

Any `String` value.

### `occupation : String`

Any `String` value.

### `industry : String`

Any `String` value.

### `incomeRange : String`

Any `String` value.

### `education : String`

Any `String` value.

### `relationship : String`

Any `String` value.

### `locale : String`

Any `String` value.

### `livingArrangement : String`

Any `String` value.

### `birthDate : String`

Birth Date must be a `String` in the format `'YYYY-MM-DD'`. For example, `'1990-05-20'`.

***

## MODEL

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

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
// All values are optional

const demographic: SahhaDemographic = {
  age: 35, // number
  gender: "Female", // string, "Male", "Female", "Gender Diverse",
  country: "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthCountry: "UK", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthDate: "1990-05-20", // must be in format "YYYY-MM-DD", i.e. "1990-05-20"
};
```

</TabItem>

</Tabs>

***

## POST

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

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
const demographic: SahhaDemographic = {
  age: 32, // number
  gender: "Female", // string, "Male", "Female", "Gender Diverse",
  country: "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthCountry: "UK", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.
  birthDate: "1990-05-20", // must be in format "YYYY-MM-DD", i.e. "1990-05-20"
};

Sahha.postDemographic({ demographic: demographic })
  .then((data) => {
    console.log(`Success: ${data.success}`);
  })
  .catch((error: Error) => {
    console.error(error);
  });
```

</TabItem>

</Tabs>

---

## GET

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

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
Sahha.getDemographic()
  .then((data) => {
    console.log(data.value);
  })
  .catch((error: Error) => {
    console.error(error);
  });
```

</TabItem>

</Tabs>