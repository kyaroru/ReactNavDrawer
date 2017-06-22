# ReactNavDrawer

A simple example of using DrawerNavigator in React Navigation

It consists of a fake login page (without drawer) and also other pages that can be seen only after login (with drawer)

Navigation Structure
```
-StackNavigator
   -LoginScreen
   -DrawerNavigator
      -HomeScreen
      -UserScreen
```

**To run the app**
```
git clone https://github.com/kyaroru/ReactNavDrawer
cd ReactNavDrawer
npm i
react-native run-ios
react-native run-android
```
