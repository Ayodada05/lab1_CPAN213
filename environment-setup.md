# Environment Setup Documentation

## System Specifications
- Device: MacBook (Apple Silicon)  
- OS: macOS Sequoia 15.6.1  
- RAM: 16 GB  
- Storage: 512 GB SSD  

---

## Software Version Installed
- Node.js: 24.7.0  
- React Native: 2.0.1  
- Android Studio: 2025.1.3 6 
- VS Code: 1.103.2  
- JDK: Version 17 (installed via Homebrew)  

---

## Setup Steps	
- 1. Installed Node.js and npm
	• Downloaded Node.js from nodejs.org.
	• Installed the LTS version (v18.x or v20.x was recommended).
- 2. Verified installation with:
    • node --version
    • npm --version
- 3. Initialize React Native CLI
	• Installed using npm:
      npx @react-native-community/cli init EnvironmentTest
- 4. Set up Android Development Environment
	•	Installed Android Studio from developer.android.com/studio.
	•	Used the setup wizard and then opened SDK Manager to install:
	    Android SDK Platform 31 (Android 12)
	    Android SDK Platform 33 (Android 13)
	    Android SDK Build-Tools 33.0.0
        Android Emulator
        Android SDK Platform-Tools
- 5.  Configured environment variables in ~/.zshrc:
        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/platform-tools
- 6. Create Android Virtual Device (AVD)
        Opened Virtual Device Manager in Android Studio.
	    Created a device (Pixel 4 or similar).
        Selected a system image (API 31 or 33).
	    Finished setup and started the emulator.
- 7. Install VS Code (I already had vscode)
	•	Downloaded from code.visualstudio.com.
	•	Installed useful extensions like React Native Tools, ES7+ snippets, and GitLens.
- 8. Create  Native React Project
        cd EnvironmentTest
        npx react-native run-android 

## Deviations from Lab Instructions
    •	Had to use the command "npx @react-native-community/cli@latest init " instead of "npx react-native init EnvironmentTest" to test project
	•	Installed JDK 17 with Homebrew after removing conflicting versions.
	
## Time Taken
Installed Node.js and npm                               ~15 minutes
Verified installation (node & npm versions)             ~5 minutes
Initialized React Native project (CLI)                  ~15 minutes
Installed Android Studio & SDK tools                    ~1 hour
Configured environment variables                        ~20 minutes
Created Android Virtual Device (AVD)                    ~25 minutes
Installed / checked VS Code & extensions                ~10 minutes
Ran project on emulator (run-android)                   ~20 minutes
Total                                                   ~2 hours 50 minutes
