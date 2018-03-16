# Stethoscope Testing instructions

- [unit tests](#unit-tests)
- [functional tests](#functional-tests)
- [authflow tests](#authflow-tests)

## Unit Tests
Available unit tests can be run using:

```bash
yarn test
```

## Functional Tests

These tests should cover the following features:
- Installers
- Window management
- Tray applications
- Local scanning
- "Remote" scanning
- Notifications
- CORS controls

1. Download the current version of the application from [S3](https://s3-us-west-2.amazonaws.com/nflx-stethoscope-public-securityprod-us-west-2/Stethoscope-0.2.12.dmg) and run the installer
2. Launch the application [click here to launch](stethoscope://main)
3. If all default policy items are passing, disable the Firewall, wait ~5 seconds and click the "rescan" button
4. Verify that the app is now showing the firewall is disabled
5. To verify notifications, open terminal and execute the following curl request:

```bash
curl -H "Origin: stethoscope://main" --verbose 'http://127.0.0.1:37370/scan?query=query%20ValidateDevice(%24policy%3A%20DevicePolicy!)%20%7B%0A%20%20%20%20%20%20policy%20%7B%0A%20%20%20%20%20%20%20%20validate(policy%3A%20%24policy)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20device%20%7B%0A%20%20%20%20%20%20%20%20deviceId%0A%20%20%20%20%20%20%20%20deviceName%0A%20%20%20%20%20%20%20%20platform%0A%20%20%20%20%20%20%20%20platformName%0A%20%20%20%20%20%20%20%20osVersion%0A%20%20%20%20%20%20%20%20firmwareVersion%0A%20%20%20%20%20%20%20%20hardwareModel%0A%20%20%20%20%20%20%20%20hardwareSerial%0A%20%20%20%20%20%20%20%20stethoscopeVersion%0A%20%20%20%20%20%20%20%20osqueryVersion%0A%20%20%20%20%20%20%20%20ipAddresses%20%7B%0A%20%20%20%20%20%20%20%20%20%20interface%0A%20%20%20%20%20%20%20%20%20%20address%0A%20%20%20%20%20%20%20%20%20%20mask%0A%20%20%20%20%20%20%20%20%20%20broadcast%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20macAddresses%20%7B%0A%20%20%20%20%20%20%20%20%20%20interface%0A%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20mac%0A%20%20%20%20%20%20%20%20%20%20lastChange%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20security%20%7B%0A%20%20%20%20%20%20%20%20%20%20firewall%0A%20%20%20%20%20%20%20%20%20%20automaticUpdates%0A%20%20%20%20%20%20%20%20%20%20diskEncryption%0A%20%20%20%20%20%20%20%20%20%20screenLock%0A%20%20%20%20%20%20%20%20%20%20remoteLogin%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D&variables=%7B%22policy%22%3A%7B%22osVersion%22%3A%7B%22darwin%22%3A%22%3E%3D10.3.0%22%2C%22win32%22%3A%22%3E%3D10.0.1%22%2C%22linux%22%3A%22%3E%3D4.3.3%22%7D%2C%22firewall%22%3A%22ALWAYS%22%2C%22diskEncryption%22%3A%22ALWAYS%22%2C%22automaticUpdates%22%3A%22ALWAYS%22%2C%22screenLock%22%3A%22IF_SUPPORTED%22%2C%22remoteLogin%22%3A%22NEVER%22%7D%7D&sessionId=fa8b411b-e241-5b83-e1c2-a18aa58143b4'
```

6. Click the notification that pops up, verifying that the main application window is brought into focus
7. Run the curl request again to verify that only one notification is issued
8. Turn the Firewall back on
9. Run the curl request again, verifying that the Tray icon is no longer red and the application no longer is reporting the issue
10. Close the main window (mac only) by clicking the red orb, click the Tray icon and verify the application window is restored and focused
11. Minimize the main window (mac only) by click the yellow orb, click the Tray icon and verify the application is maximized and focused

## Authflow Tests

### Case 1: Device is in compliance

// TODO - add local test server to support test

### Case 2: Device is out of compliance

// TODO - add local test server to support test
