Main Application Structure and Description:
├── Main Application (Root)
│   ├── <GlobalProvider>
│   │   Manages global state and context, passing it down to child components.
│
├── src - Source directory for the application's code.
│   ├── components - Reusable UI components.
│   │   ├──preview
│   │   │   ├── LivePreview.tsx - Shows a live preview of the current settings.
│   │   └──subcontrols
│   │       ├──  headerControls
│   │       │   └── MenuText.tsx - This component provides an input field for the user to enter menu text.
│   │       
│   │           
│   ├── config
│   │   ├── controlAccessConfig.ts - Defines control access based on roles.
│   │   ├── featureAccessConfig.ts - Defines feature access based on roles.
│   │   └── subControlAccessconfig.ts - Access control for subcomponents within the main controls (Header, Primary, Secondary),
│   ├── controllers
│   │   ├── ControlController.tsx - Renders controls based on configurations.
│   │   ├── DisplayController.tsx - Manages rendering of features and controls.
│   │   └── FeatureController.tsx - Manages feature tabs and selection.
│   ├── handlers
│   │   ├── controlHandlers.ts - Fetches control configurations.
│   │   └── featureHandlers.ts - Determines accessible features based on role.
│   │   └── subControlHandler.ts -Generates a list of allowed sub-controls features based on role.
│   ├── lib
│   │   └── navigation-bar-generator.tsx - Main component, integrating all parts.
│   ├── providers
│   │   ├── GlobalContext.tsx - Provides global context for state management.
│   │   └── reducer.ts - Contains reducer functions for state updates.
│   ├── types
│   │   └── index.ts - Defines TypeScript types and interfaces for the app.
│   └── utils
│       └── actionTypes.ts - Contains constants for action types in state management.
│
├── tsconfig.json - Configures TypeScript for the project.
├── tsconfig.lib.json - TypeScript configuration for library builds.
├── tsconfig.spec.json - TypeScript configuration for specifications.
└── vite.config.ts - Configuration for the Vite build tool.

File Breakdown and Functionality:
- **GlobalProvider**: The top-level component that provides a global state context to all components within the app. It ensures that state is easily accessible across components.
- **Components**: Organized into subdirectories for different UI parts like previews, and settings. Each component is responsible for specific user interactions and updates the global state accordingly.
- **Configurations**: Holds configuration files defining role-based access for controls, features, and sub-controls, ensuring access control mechanisms based on user roles and permissions.
- **Controllers**: The controllers manage the rendering of UI elements, determining which features, controls, and sub-controls are displayed based on the state.
- **Handlers**: These handle fetching and computing the configuration for controls, features, and sub-controls, determining what the user can access based on their role and permissions.
- **Providers**: Responsible for managing global state through React's context and reducer, enabling seamless state management across the application.
- **Types**: Centralizes all TypeScript types and interfaces used throughout the app, ensuring consistency and type safety.
- **Utils**: Contains constants like action types, used to facilitate state transitions in the reducer.
- **Library Component (navigation-bar-generator.tsx)**: The core component that integrates controls, features, and sub-controls into the navigation bar, ensuring the proper functionality and configuration of the navigation UI.
