# Service Booking Mobile App

A React Native mobile application that allows users to browse service providers and book appointments.

---

## Tech Stack

- React Native (Expo)
- TypeScript
- NativeWind (TailwindCSS)
- Zustand (State Management)
- React Navigation
- AsyncStorage (Local Persistence)
- React Hook Form + Zod (Validation)

---

## Features

- User login with validation
- Browse service providers
- View provider details
- Book services
- Store bookings locally
- Delete bookings
- Pull to refresh
- Search services

---

## Architecture

The project follows a scalable modular architecture.

```
src/
├── app          # Screens grouped by feature (auth, services, bookings)
├── components   # Reusable UI components
├── navigation   # Navigation configuration
├── services     # API calls and external services
├── store        # Zustand state management
├── utils        # Helper functions and storage
├── types        # TypeScript interfaces
└── constants    # App constants
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npx expo start
   ```

## Assumptions

- Authentication is mocked for demonstration purposes.
- Service categories are randomly assigned to users fetched from JSONPlaceholder.
- Booking data is stored locally on the device using AsyncStorage.
