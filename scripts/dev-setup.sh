#!/bin/bash
echo "Setting up development environment..."
npm install
echo "Installing iOS dependencies..."
cd ios && pod install && cd ..
echo "Starting Metro bundler..."
npx react-native start --reset-cache