---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure

You will need to configure the Sahha SDK before you can use it.

:::caution Configure the SDK immediately

The Sahha SDK must be configured immediately on app launch.

:::

Choose your specific platform from the options below.

<Tabs groupId="os">

<TabItem value="ios-swiftui" label="iOS (SwiftUI)">

```swift title=MyApp.swift
import SwiftUI
// highlight-next-line
import Sahha

@main
struct MyApp: App {

  // highlight-next-line
  // Configure Sahha inside `init` of your app's `App` view.
    
  init() {
    // highlight-start
    let settings = SahhaSettings(environment: .development)
    Sahha.configure(settings) {
      // SDK is ready to use
      print("SDK Ready")
    }
    // highlight-end
  }

  var body: some Scene {
    WindowGroup {
      ContentView()
    }
  }
    
}
```

</TabItem>

<TabItem value="ios-uikit" label="iOS (UIKit)">

```swift title=AppDelegate.swift

import UIKit
// highlight-next-line
import Sahha

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

// highlight-next-line
// Configure Sahha inside `application didFinishLaunchingWithOptions` of your app's `AppDelegate`.

  func application(_: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
  // highlight-start
    let settings = SahhaSettings(
      environment: .development, // Required - .development for testing
      sensors: [.sleep], // Optional - defaults to all sensors
      postSensorDataManually: false // Optional - defaults to false
    )
    Sahha.configure(settings) {
      // SDK is ready to use
      print("SDK Ready")
    }
    // highlight-end
    return true
  }

}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt

// highlight-next-line
import sdk.sahha.android.source.*

// highlight-next-line
// Configure Sahha inside `onCreate` of your app's `MainActivity`.

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

// highlight-start
        // You can specify optional custom notification settings
        val notificationSettings = SahhaNotificationConfiguration(
            icon = R.drawable.ic_test, // The icon id must match the filename you add to the project
            title = "Custom Title",
            shortDescription = "Custom description",
        )

        val settings = SahhaSettings (
            environment = SahhaEnvironment.development,
            notificationSettings = notificationSettings, // Optional - defaults to null
            sensors = [.pedometer, .sleep], // Optional - defaults to all avaialable sensors
            postSensorDataManually = false, // Optional - defaults to false
        )

        Sahha.configure(application, settings) { error, success ->
            if (error != null) {
                println(error)
            } else {
                println(success.toString())
            }
        }
        // highlight-end
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart

import 'package:sahha_flutter/sahha_flutter.dart';

// Configure Sahha inside `initState` of your app's `AppState`.

class _MyAppState extends State<MyApp> {

  @override
  void initState() {
      super.initState();

    // Optional - Android only
    var notificationSettings = {
      'icon': 'Custom Icon',
      'title': 'Custom Title',
      'shortDescription': 'Custom Description'
    };

      // Use custom values
      SahhaFlutter.configure(
          environment: SahhaEnvironment.production, // Required - .development for testing
          sensors: [SahhaSensor.device], // Optional - defaults to all sensors
          postSensorDataManually: true, // Optional - defaults to false
          notificationSettings: notificationSettings) // Optional - Android only
      .then((success) => {
          debugPrint(success.toString())
        })
      .catchError((error, stackTrace) => {
          debugPrint(error.toString())
        });
  }
}
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx

import Sahha, { SahhaEnvironment, SahhaSensor } from "sahha-react-native";

// Configure Sahha inside your App's `export function`.

export default function App() {
  // Use custom values
  const settings = {
    environment: SahhaEnvironment.production, // Required -  .development for testing
    // Optional - Android only
    notificationSettings: {
      icon: "ic_test",
      title: "Test Title",
      shortDescription: "Test description.",
    },
    sensors: [SahhaSensor.sleep, SahhaSensor.pedometer], // Optional - defaults to all sensors
    postSensorDataManually: true, // Optional - defaults to false
  };
  Sahha.configure(settings, (error: string, success: boolean) => {
    console.log(`Success: ${success}`);
    if (error) {
      console.error(`Error: ${error}`);
    }
  });
}
```

</TabItem>

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
import {
  Sahha,
  SahhaSensor,
  SahhaEnvironment,
  SahhaSettings,
} from "sahha-capacitor";

// Configure Sahha inside your App's `export function`.

const App: React.FC = () => {
  const settings: SahhaSettings = {
    environment: SahhaEnvironment.production, // Required -  .development for testing
    sensors: [SahhaSensor.sleep], // Optional - defaults to all sensors
    postSensorDataManually: true, // Optional - defaults to false
    // Optional - Android only
    notificationSettings: {
      icon: "ic_test",
      title: "Test Title",
      shortDescription: "Test description.",
    },
  };

  Sahha.configure({ settings: settings })
    .then((data) => {
      console.log(`Success: ${data.success}`);
    })
    .catch((error: Error) => {
      console.error(error);
    });
};

```

</TabItem>

</Tabs>