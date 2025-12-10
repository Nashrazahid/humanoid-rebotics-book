# Humanoid Robotics: A Comprehensive Guide

This repository contains a complete Docusaurus-based documentation site for a technical book on humanoid robotics, covering physical AI, design, control systems, and real-world applications.

## Table of Contents

The book is organized into four modules:

1. **Module 1: Physical AI Foundations** - Covers the fundamentals of physical AI, embodiment, perception-action cycles, and AI models in physical systems
2. **Module 2: Humanoid Design and Kinematics** - Focuses on mechanical design, kinematics, and dynamics
3. **Module 3: Control Systems and Sensors** - Explores control architectures, sensor systems, and advanced actuation
4. **Module 4: Locomotion and Real-World Applications** - Addresses locomotion, human-robot interaction, and ethical considerations

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens the documentation site in your browser. Most changes are reflected live without requiring a page refresh.

## Build

```bash
npm run build
```

This command generates static content in the `build` directory, which can be served using any static hosting service.

## Deployment

To deploy to GitHub Pages:

1. Update the `url` and `baseUrl` fields in `docusaurus.config.js` with your GitHub Pages URL
2. Run the deployment command:

```bash
npm run deploy
```

This command builds the site and pushes it to the `gh-pages` branch for GitHub Pages hosting.

## Contributing

Feel free to contribute to this book by:
- Reporting issues with content or technical problems
- Submitting pull requests for corrections or improvements
- Adding new examples or case studies
- Improving existing explanations or diagrams

## License

This project is licensed under the Creative Commons Attribution 4.0 International License - see the LICENSE file for details.

## Acknowledgments

This book was created using the Docusaurus documentation framework and follows best practices for technical documentation.