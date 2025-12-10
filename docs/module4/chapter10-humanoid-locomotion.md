---
title: Humanoid Locomotion (Walking, Running, Balancing)
sidebar_position: 1
---

# Humanoid Locomotion (Walking, Running, Balancing)

## Learning Outcomes

After completing this chapter, you will be able to:
- Understand the biomechanics of human walking and its application to robots
- Implement ZMP-based walking controllers for humanoid robots
- Analyze different walking gaits and their stability characteristics
- Design controllers for complex locomotion tasks

## Introduction

Humanoid locomotion represents one of the most challenging problems in robotics, requiring the coordination of multiple subsystems to achieve stable, efficient, and versatile movement. Unlike wheeled or tracked robots, humanoid robots must manage their center of mass while maintaining balance during dynamic movement. This chapter explores the principles of humanoid locomotion, from the biomechanics of human walking to advanced control strategies that enable robots to walk, run, and balance in complex environments.

## Key Concepts

### Biomechanics of Human Walking

Human walking is a complex, dynamic process that involves the coordinated action of multiple body segments and the interaction between the body and the environment.

#### Gait Cycle Phases
- **Stance Phase** (60% of cycle): Foot in contact with ground
  - **Heel Strike**: Initial contact with ground
  - **Foot Flat**: Full foot contact
  - **Midstance**: Single-leg support
  - **Heel Off**: Beginning of push-off
  - **Toe Off**: Final contact before swing phase

- **Swing Phase** (40% of cycle): Foot not in contact with ground
  - **Acceleration**: Hip flexion drives leg forward
  - **Midswing**: Leg passes beneath body
  - **Deceleration**: Preparation for next heel strike

#### Walking Parameters
- **Step Length**: Distance between consecutive foot placements
- **Stride Length**: Distance between consecutive placements of the same foot
- **Step Width**: Lateral distance between feet
- **Cadence**: Steps per minute
- **Walking Speed**: Distance traveled per unit time

### Balance Control Models

#### Inverted Pendulum Model
The simplest model of bipedal balance, treating the body as a point mass on a massless rod.

**Linear Inverted Pendulum Model (LIPM)**:
- Assumptions: Constant height, point mass CoM
- Equation: CoM = CoM_ref + ZMP_ref * h/g
- Advantages: Simple, analytically tractable
- Limitations: Ignores angular momentum, assumes constant height

#### Capture Point Model
A model that identifies where to place the foot to stop the robot's motion.

**Capture Point Definition**:
- For a given CoM state, the capture point is where the foot must be placed to stop motion
- Capture Point = CoM + CoM_dot * sqrt(h/g)
- If ZMP can be moved to capture point, the robot can be stopped

### Zero Moment Point (ZMP) Control

ZMP is a critical concept in humanoid balance, representing the point where the net moment of contact forces is zero.

#### ZMP Calculation
ZMP_x = (Σ(F_iz * x_i) - Σ(M_ix)) / Σ(F_iz)
ZMP_y = (Σ(F_iz * y_i) - Σ(M_iy)) / Σ(F_iz)

Where F_iz are vertical forces and M_ix, M_iy are moments.

#### ZMP-Based Walking Control
- **Stability Criterion**: ZMP must remain within support polygon
- **Trajectory Generation**: Plan ZMP trajectory to achieve desired walking
- **Control Implementation**: Generate joint torques to achieve ZMP reference

### Walking Pattern Generation

#### Footstep Planning
- **Stability**: Ensure ZMP remains in support polygon
- **Obstacle Avoidance**: Navigate around environmental obstacles
- **Step Constraints**: Respect robot kinematic limits
- **Optimization**: Minimize energy, time, or other costs

#### Trajectory Planning
- **CoM Trajectory**: Plan center of mass movement over time
- **Foot Trajectory**: Plan swing foot movement for safe placement
- **Pelvis Trajectory**: Plan upper body motion for stability
- **Timing**: Coordinate all trajectories temporally

### Advanced Locomotion

#### Dynamic Walking
- **Limit Cycles**: Periodic gaits that are stable over cycles
- **Passive Dynamics**: Exploiting mechanical energy for efficient walking
- **Underactuation**: Systems with fewer actuators than degrees of freedom

#### Running and Jumping
- **Flight Phases**: Periods of no ground contact
- **High-Speed Control**: Managing high velocities and impacts
- **Energy Management**: Storing and releasing energy efficiently

## Visuals and Diagrams

```
Walking Gait Cycle:
Stance Phase (60%): [Heel Strike] → [Foot Flat] → [Midstance] → [Heel Off] → [Toe Off]
Swing Phase (40%):  [Acceleration] → [Midswing] → [Deceleration]
```

```
Inverted Pendulum Model:
  CoM
    |
    | h (height)
    |
Ground: [Support Polygon] ---- ZMP Point
```

```
ZMP/CoM Relationship:
Time →
CoM Position: [____/‾‾‾\_‾‾‾\_‾‾‾\_]
ZMP Position: [___|___|___|___|___]
```

## Examples and Demos

### Example 1: ZMP-Based Walking
Implementation approach:
1. **Desired Walking**: Specify step length, width, and period
2. **ZMP Trajectory**: Generate reference ZMP pattern
3. **CoM Trajectory**: Compute CoM movement to achieve ZMP
4. **Control**: Generate joint torques to follow trajectories

### Example 2: Atlas Dynamic Locomotion
Boston Dynamics Atlas demonstrates:
- **Dynamic Movements**: Running, jumping, backflips
- **Balance Recovery**: Perturbation response
- **Terrain Adaptation**: Walking on rough terrain
- **Energy Efficiency**: Dynamic energy management

### Example 3: Uneven Terrain Discussion
Challenges for humanoid walking:
- **Terrain Mapping**: Sensing and understanding terrain geometry
- **Footstep Planning**: Selecting safe footholds
- **Adaptive Control**: Adjusting gait parameters in real-time
- **Stability Maintenance**: Ensuring balance on irregular surfaces

## Theoretical Foundations

### Biomechanics
The study of biological systems that provides inspiration and evaluation criteria for robotic locomotion systems.

### Dynamics and Control
Mathematical frameworks for understanding and controlling the motion of multi-body systems.

### Optimization Theory
Mathematical methods for generating optimal walking patterns that balance competing objectives.

## Validation and Testing

### Concept Check: ZMP Stability
For stable walking, the ZMP must be:
1. Above the center of mass
2. Within the support polygon
3. At the geometric center of the robot
4. At the ankle joint

Answer: 2. Within the support polygon

## References

[1] Kajita, S., Kanehiro, F., Kaneko, K., Fujiwara, K., Harada, K., Yokoi, K., & Hirukawa, H. (2003). Biped walking pattern generation by using preview control of zero-moment point. Proceedings 2003 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2003).

[2] Pratt, J., Carff, J., Drakunov, S., & Goswami, A. (2006). Capture point: A step toward humanoid push recovery. 2006 6th IEEE-RAS International Conference on Humanoid Robots, 200-207.

[3] Hof, H. K., Gielen, M. G., Van Hees, A. L., & Duysens, J. (2010). Control of lateral balance in running: Neural strategies? A review. Sports Medicine, 40(5), 389-402.

[4] Wight, D. L., Kubica, E. G., & Wang, D. W. (2008). Introduction of the controlled symplectic integrator for numerical simulation of multibody mechanical systems. Multibody System Dynamics, 20(3), 269-303.