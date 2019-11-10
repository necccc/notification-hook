# notification-hook

React hooks to help you display notifications for you users in your React app. Encapsulates logic of showing and hiding notification components of any Design System or component framework.

## Example

This library helps you create developer experience like this:

```jsx
import React, { useState, useEffect } from 'react'
import { useNotification } from 'notification-hook'

export default MyComponent () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch(API_URL)
      .then(res => setData(res))
      // this will pop you error notification component, 
      // no need to import anything else here
      .catch(err => showError(err.message)) 

  })
  
  //...
  
}

```

## Installation & usage

First, install it for your app

```bash
$ npm i notification-hook
```

In your topmost application component (like _app.js for Nextjs) use the Context Provider of the library.
That Provider accepts a single component, that will be the Presentational Component used to display your alerts, notifications, whatever. These are usually come with every kind of Design System, or Component Framework.

```jsx
import React from 'react'
import { NotificationProvider } from 'notification-hook'
import NotificationComponent from '../components/Notification'

export default MyApp () => (
<>
  <Head>
    <title>My App title</title>
  </Head>
  <NotificationProvider component={ NotificationComponent }>
  
    { /* your application setup */ }
    
  </NotificationProvider>
</>
)
```

That's it, you're ready to show notifications for your user!

In the example above, `NotificationComponent` is a component setup of any Design System or Component Framework. 
They can be, for example:

- [SnackBars from Material UI](https://material-ui.com/components/snackbars/)
- [Notifications in IBM's Carbon Design](http://react.carbondesignsystem.com/?path=/story/notifications--toast)
- [Notification Bars in Mozilla's Protocol](https://protocol.mozilla.org/patterns/molecules/notification-bar.html)
- [Notifications in Salesforce's Lightning](https://www.lightningdesignsystem.com/components/notifications/)
- [MessageBar in Microsoft's UI Fabric](https://developer.microsoft.com/en-us/fabric#/controls/web/messagebar)

## License

MIT
