# 2. Toolchain Focus Decision

Date: 2025-12-06
Status: Proposed

## Context
The technical book on Physical AI and Humanoid Robotics requires a clear decision on the primary simulation and robotics toolchain to be used for examples and labs. The options considered are ROS 2 with Gazebo, ROS 2 with Isaac Sim, or a hybrid approach. This decision impacts the learning curve for students, the realism of simulations, and the hardware requirements for engaging with the content.

## Decision
The book will utilize a Hybrid toolchain focus, incorporating both ROS 2 + Gazebo and ROS 2 + Isaac Sim. This decision aligns with business requirements to provide broad exposure while catering to different student capabilities and hardware access.

## Consequences
- **Positive**: Provides students with experience in both a more accessible simulator (Gazebo) and a high-fidelity, GPU-accelerated simulator (Isaac Sim). Offers a comprehensive view of the simulation landscape in robotics.
- **Negative**: May increase the complexity of setup and troubleshooting for students, as they will need to work with two different simulation environments. Requires careful documentation to guide students through the setup and usage of both toolchains.

## Alternatives
- **ROS 2 + Gazebo only**:
    - **Pros**: Easier entry point, lower hardware requirements, widely used in academia.
    - **Cons**: Less realistic physics and rendering compared to Isaac Sim, may not expose students to cutting-edge simulation.
- **ROS 2 + Isaac Sim only**:
    - **Pros**: High-fidelity simulation, realistic rendering, strong integration with NVIDIA hardware and AI tools.
    - **Cons**: Higher GPU hardware requirements, potentially steeper learning curve for beginners.

## References
- `specs/humanoid-robotics/plan.md`