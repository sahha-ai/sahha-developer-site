---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sahha - Get Started

This page will help you get started with Sahha. You'll be up and running in a jiffy!

---

## Step 1) Register Your Account

Tap "Get Started with Sahha" to quickly sign up for an account that your organization can use to access Sahha services.

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

:::note Configure
<Tabs groupId="os">
  <TabItem value="ios-swiftui" label="iOS (SwiftUI)">

```swift title=App.swift
import SwiftUI
import Sahha

@main
struct MyApp: App {
  
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
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>
:::

---

## Step 2) Access Your API Keys

:::info You will need to access your API Keys in order to start connecting to the Sahha API.

You can find your Client ID and Client Secret inside the Dashboard by going to `API Credentials` from the sidebar menu.
:::

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
