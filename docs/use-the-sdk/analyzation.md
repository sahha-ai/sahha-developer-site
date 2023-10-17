---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Behavioral Health Analysis

:::tip Sahha creates a behavioral health analysis every 24 hours.
 
Sahha analyzes device activity daily (data such as sleep, steps and more) to create a comprehensive physical & mental health analysis report for each end user, which you can display or action within your application or access through the Sahha REST API.

Each behavioral analysis report includes the MHRS (Mental Health Resilience Scores) and Wellbeing Scores (Sleep, Movement, Phone Activity)
[Mental Health Resilience Scores](https://sahha.notion.site/Sahha-Mental-Health-Models-4c589cf92a2345f59977f2aff8428993?pvs=4)
[Wellbeing Scores](https://sahha.notion.site/Sahha-Mental-Health-Models-4c589cf92a2345f59977f2aff8428993?pvs=4)

**The default time period for an analysis is the previous 24 hours.**

:::

***

## Analyze

Get the most recent analysis for the previous 24 hours in the user's local timezone.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
// Analyze Previous 24 Hours
// Leave date range empty

Sahha.analyze(includeSourceData: true) { error, json in
    if let error = error {
        print(error)
    } else if let json = json {
        print(json)
    }
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
// Analyze previous 24 hours
// Leave date range empty

Sahha.analyze { error, success ->
    error?.also {
        println(error)
    }
    success?.also {
        println(success)
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
// Analyze previous 24 hours
// Leave date range empty

SahhaFlutter.analyze()
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
// Analyze previous 24 Hours
// Leave date range empty

Sahha.analyze((error: string, value: string) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else if (value) {
        console.log(`Value: ${value}`);
    }
});
```

</TabItem>

</Tabs>

---

## Analyze (Date Range)

You can provide an optional data range if you would like to receive multiple analysis over a specific time period. The response will include an array of analysis for each 24 hour segment in that time period.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
// Analyze Previous 7 Days
// Add a date range

let today = Date()
let sevenDaysAgo = Calendar.current.date(byAdding: .day, value: -7, to: today) ?? Date()
Sahha.analyze(dates: (startDate: sevenDaysAgo, endDate: today)) { error, json in
    if let error = error {
        print(error)
    } else if let json = json {
        print(json)
    }
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
// Analyze Previous 7 Days
// Add a date range

val now = Date()
val lastWeek = Date(now.time - SEVEN_DAYS_MILLIS)

Sahha.analyze(
    Pair(lastWeek, now)
) { error, success ->
    error?.also {
        println(error)
    }
    success?.also {
        println(success)
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
// Analyze previous 7 days
// Add a date range

var week = DateTime.now().subtract(Duration(days: 7));
SahhaFlutter.analyzeDateRange(startDate: week, endDate: DateTime.now())
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
// Analyze previous 7 Days
// Add date range as milliseconds since epoch time

let endDate: Date = new Date();
let days = endDate.getDate() - 7;
var startDate = new Date();
startDate.setDate(days);

Sahha.analyzeDateRange(startDate.getTime(), endDate.getTime(), (error: string, value: string) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else if (value) {
        console.log(`Value: ${value}`);
    }
});
```

</TabItem>

</Tabs>

---

## `200 Response`

The response will be in JSON format. An example response includes these fields:

```json title=RESPONSE
{
    "inferences": [
        {
            "id": "26051AB2-867F-4F8D-B134-0031C20D3FDC",
            "type": "stress_resilience",
            "state": "low",
            "score": 0.34,
            "factors": {
                "sleep_routine": 0.22,
                "sleep_regularity": -0.23,
                "daily_steps": 0.17,
                "total_sleep_time": 0.28,
                "sleep_debt": -0.13,
            },
            "inputData": ["age", "sleep", "steps", "heart_rate"],
        },
        {
            "id": "601ADC2F-4830-45E7-B538-F7821EC009EA",
            "type": "depression_resilience",
            "state": "minimal",
            "score": 0.14,
            "factors": {
                "sleep_routine": 0.12,
                "sleep_regularity": -0.08,
                "daily_steps": 0.05,
                "total_sleep_time": 0.15,
                "sleep_debt": -0.11,
            },
            "inputData": ["age", "sleep", "steps"],
        },
        {
            "id": "601ADC2F-4830-45E7-B538-F7821EC009EA",
            "type": "anxiety_resilience",
            "state": "medium",
            "score": 0.62,
            "factors": {
                "sleep_routine": 0.51,
                "sleep_regularity": 0.11,
                "daily_activity": 0.22,
                "total_sleep_time": 0.13,
                "sleep_debt": 0.14,
            },
            "inputData": ["age", "sleep", "steps", "screen"],
        },
        {
            "id": "acde070d-8c4c-4f0d-9d8a-162843c10333",
            "type": "sleep",
            "state": "high",
            "score": 0.75,
            "factors": {
                "sleep_routine": 0.013,
                "sleep_regularity": 0.11,
                "night_time_activity": 0.005,
                "total_sleep_time": -0.03,
                "sleep_debt": -0.023,
            },
            "inputData": ["age", "gender", "sleep", "activity"],
        },
    ],
    "createdAt": "2023-07-31T12:00:35+12:00",
}
```

***

## `204 Response`

An empty but successful response.

:::caution MINIMUM DATA REQUIREMENTS

The analysis engine requires a minimum amount of device sensor data to be uploaded and processed before an analysis can be determined.

If you call `analyze` for a new user profile or a user that has been inactive lately, it's possible for the response to be `204 No Content`. This is not an error.

**You will need to wait and try again every 24 hours until an analysis is available.**

:::

```json title=RESPONSE
// An analysis is not ready yet
// Try again in 24 hours
// Empty JSON
{}
```

***

## Data Sources

Data sources are required to generate an analysis.

:::tip The analysis is created from various data sources

To receive an analysis, a minimum of one data source must be configured by the SDK.

The more data sources that you configure via the SDK, the better the analysis that will be generated.

Some data sources are not yet available on all platforms. Sahha continues to improve its analysis engine by bringing feature parity between platforms as well as adding new data sources.

:::

| Data Source | Description             | Android | iOS |
| ----------- | ----------------------- | :-----: | :-: |
| sleep       | User sleep patterns     |    ✓    |  ✓  |
| steps       | User walking patterns   |    ✓    |  ✓  |
| screen      | User device screen time |    ✓    |  X  |
| heart       | User heart patterns     |    X    |  ✓  |
| blood       | User blood patterns     |    X    |  ✓  |
| age         | User age                |    ✓    |  ✓  |
| gender      | User gender             |    ✓    |  ✓  |

***

### Sensors

:::info Use Sensors as a Data Source

Learn how to configure sensors a data source.

[Configure Sensors](./sensors)

:::

***

### Demographics

:::info Use Demographics as a Data Source

Learn how to configure demographics as a data source.

[Configure Demographics](./profile#demographic)


:::

***

## Data Output

Each inference in the analysis generated will include these distinct data types.

| Data Output          | Description                                |   Data Type  | Possible Values                                            |
| -------------------- | ------------------------------------------ | :----------: | :--------------------------------------------------------- |
| id                   | Unique id for the inference                |   String      | |
| type                 | Name of the inference type being predicted |   String      | `stress_resilience`, `depression_resilience`, `anxiety_resilience`, `sleep` |
| state                 | Level of the inference type being predicted |   String      | `minimal`, `low`, `medium`, `high` |
| score                 | Score of the inference type being predicted |   Number      | Any number between `0.0` to `1.0`  |
| factors               | Factors which influence the score and state |    String Array    | Any combination of `active_hours`, `night_time_activity`, `daily_steps`, `activity_goals`, `sedentary_periods`, `activity_deviation`, `total_sleep_time`, `night_time_activity`, `sleep_regularity`, `sleep_routine`, `sleep_debt`                  |
| inputData           | Data sources used to generate the analysis | String Array | Any combination of `sleep`, `steps`, `screen`, `heart`, `blood`, `age`, `gender`, `activity` |
| createdAt            | Time the analysis was generated            |    String    | TimeStamp in format `yyyy-MM-dd'T'HH:mm:ssxxx`             |

### Example
```json title=RESPONSE
{
    "inferences": [
    {
        "id": "26051AB2-867F-4F8D-B134-0031C20D3FDC",
        "type": "stress_resilience",
        "state": "low",
        "score": 0.34,
        "factors": {
            "sleep_routine": 0.22,
            "sleep_regularity": -0.23,
            "daily_steps": 0.17,
            "total_sleep_time": 0.28,
            "sleep_debt": -0.13,
        },
        "inputData": ["age", "sleep", "steps", "heart_rate"],
    }
    ...
]
    "createdAt": "2023-07-31T12:00:35+12:00",
}
```