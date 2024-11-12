# Minimum reproducible example for expo-calendar useCalendarPermissions() bug report


## Steps I followed

1. Initialize a new Expo app

   ```bash
   npx create-expo-app@latest testcalperms
   ```

2. Run reset-project script

   ```bash
   npm run reset-project
   ```

3. Install expo-calendar

   ```bash
   npx expo install expo-calendar
   ```

4. Configure app.json

   ```json
   {
   "expo": {
    "plugins": [
      [
         "expo-calendar",
        {
          "calendarPermission": "The app needs to access your calendar."
        }
      ]
    ]
   }
   }
   ```

5. Run the app

   ```bash
   npx expo start
   ```





   
