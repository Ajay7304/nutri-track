# NutriTrack App Implementation

## Introduction
NutriTrack is a React Native application designed to help users track their nutritional intake and manage their diet. The app includes features for user registration, profile management, and daily calorie counting. Below is a detailed description of the implementation process and the functionalities of the app.

## Navigation Setup
The navigation among the various screens of the app is handled using React Navigation's Stack Navigator. This ensures smooth transitions and an intuitive user experience as users move between different parts of the app.

## Welcome Page
The welcome page is the entry point of the app, featuring buttons for login and registration. Users can choose to log in if they have an existing account or register to create a new one.

## User Registration and Login
- *Async Storage:* User data is stored using Async Storage during registration. This allows the app to retrieve user information during login and display it in the profile section.
- *Error Handling:* On the registration screen, password validation is implemented. If the passwords entered do not match, an alert is shown, preventing the user from proceeding.

## Details Screen
The details screen collects personal information such as age, gender, and other relevant data from the user. This screen is designed using Card components. All the data entered here is stored in Async Storage and used later in the profile page.

## Profile Page
The profile page displays the user's details entered during registration. This page is designed using Card components and Expo icons to enhance the visual presentation. It fetches and shows data from Async Storage, ensuring that the profile information is always up to date.

## Home Screen
The home screen is the main part of the app, designed using multiple Card components, Google images, and Expo icons. Key functionalities include:
- *Date Picker:* A date-picker module is used to allow users to select dates and weekdays.
- *Calorie Counter:* The app includes a calorie counter that updates whenever the user logs a diet entry. The total calorie count is displayed at the top of the screen.

## Summary
NutriTrack combines React Native components and libraries such as Async Storage, Card components, Expo icons, and a date-picker module to provide a seamless user experience. From registration and profile management to daily calorie tracking, the app ensures users can easily manage their nutritional intake and achieve their dietary goals.
