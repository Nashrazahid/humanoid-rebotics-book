---
title: Forward and Inverse Kinematics
sidebar_position: 2
---

# Forward and Inverse Kinematics

## Learning Outcomes

After completing this chapter, you will be able to:
- Define forward and inverse kinematics problems
- Apply the Denavit-Hartenberg (DH) convention for kinematic modeling
- Solve forward kinematics using transformation matrices
- Understand the challenges and approaches for inverse kinematics
- Implement kinematic solutions for humanoid robots

## Introduction

Kinematics is the study of motion without considering the forces that cause it. In robotics, kinematics deals with the relationship between joint positions and the position and orientation of the robot's end-effector. Forward kinematics calculates the end-effector pose from known joint angles, while inverse kinematics determines the required joint angles to achieve a desired end-effector pose. For humanoid robots with redundant manipulator structures, these problems become particularly complex and require sophisticated mathematical approaches.

## Key Concepts

### Forward Kinematics

Forward kinematics determines the position and orientation of the end-effector given the joint angles. This is generally a well-posed problem with a unique solution.

#### Mathematical Representation
- **Transformation Matrices**: 4x4 matrices that represent position and orientation
- **Homogeneous Coordinates**: 4x1 vectors that represent points in 3D space
- **Chain Multiplication**: Sequential multiplication of transformations from base to end-effector

#### Denavit-Hartenberg (DH) Convention
A systematic method for assigning coordinate frames to robot joints:
1. **Z-axis**: Along the joint axis of motion
2. **X-axis**: Along the common normal between consecutive z-axes
3. **Y-axis**: Completes the right-handed coordinate system

#### DH Parameters
- **a (link length)**: Distance along x-axis from one z-axis to the next
- **α (link twist)**: Angle about x-axis from one z-axis to the next
- **d (link offset)**: Distance along z-axis from one x-axis to the next
- **θ (joint angle)**: Angle about z-axis from one x-axis to the next

### Inverse Kinematics

Inverse kinematics determines the joint angles required to achieve a desired end-effector position and orientation. This is often an ill-posed problem with multiple or no solutions.

#### Challenges
- **Multiple Solutions**: Redundant robots have infinite solutions
- **No Solution**: Desired pose may be outside the workspace
- **Singularities**: Loss of degrees of freedom at certain configurations
- **Computational Complexity**: Analytical solutions often intractable for complex robots

#### Approaches
- **Analytical Methods**: Closed-form solutions for simple kinematic chains
- **Numerical Methods**: Iterative approaches like Jacobian-based methods
- **Geometric Methods**: Trigonometric solutions for specific configurations
- **Optimization-Based**: Formulating as optimization problem with constraints

### Workspace Analysis

The workspace is the set of all possible end-effector positions and orientations.

#### Types of Workspace
- **Dexterous Workspace**: All positions with all orientations
- **Reachable Workspace**: All positions with at least one orientation
- **Orientation Workspace**: All orientations at a given position

## Visuals and Diagrams

```
DH Convention Example:
z1    z2
 |     |
 |     |     x2
 *-----O-----*----->
 |     |     |
x1    x1    x2
```

```
Forward Kinematics:
[q1, q2, ..., qn] → [T] → [x, y, z, α, β, γ]
Joint Angles    Transformation   End-Effector Pose
```

```
Inverse Kinematics:
[x, y, z, α, β, γ] → [q1, q2, ..., qn]
Desired Pose       Joint Angles
```

## Examples and Demos

### Example 1: Forward Kinematics Calculation
For a simple 2-link planar manipulator:
- Link lengths: a1, a2
- Joint angles: θ1, θ2
- End-effector position:
  - x = a1*cos(θ1) + a2*cos(θ1+θ2)
  - y = a1*sin(θ1) + a2*sin(θ1+θ2)

### Example 2: Inverse Kinematics Challenges
In a 7-DOF humanoid arm:
- **Redundancy**: Multiple joint configurations achieve same end-effector pose
- **Optimization**: Additional criteria needed (e.g., joint limit avoidance)
- **Singularities**: Configurations where manipulability is reduced

### Example 3: Pseudocode for Jacobian-based IK
```
function jacobian_inverse_kinematics(target_pose, current_joints):
    for i in range(max_iterations):
        current_pose = forward_kinematics(current_joints)
        error = pose_difference(target_pose, current_pose)

        if norm(error) < tolerance:
            return current_joints

        jacobian = compute_jacobian(current_joints)
        joint_delta = jacobian_pseudo_inverse * error
        current_joints += joint_delta

    return current_joints  // May not reach target
```

## Theoretical Foundations

### Linear Algebra
Essential for representing transformations and solving systems of equations in kinematic calculations.

### Screw Theory
Advanced mathematical framework for representing rigid body motions and their composition.

### Differential Kinematics
Relationship between joint velocities and end-effector velocities through the Jacobian matrix.

## Validation and Testing

### Concept Check: Kinematics Solutions
Which statement about inverse kinematics is true?
1. It always has a unique solution
2. It is generally easier than forward kinematics
3. It can have multiple solutions or no solution
4. It is always well-posed

Answer: 3. It can have multiple solutions or no solution

## References

[1] Craig, J. J. (2005). Introduction to robotics: mechanics and control. Pearson Education.

[2] Spong, M. W., Hutchinson, S., & Vidyasagar, M. (2020). Robot modeling and control. John Wiley & Sons.

[3] Siciliano, B., & Khatib, O. (Eds.). (2016). Springer handbook of robotics. Springer.

[4] Murray, R. M., Li, Z., Sastry, S. S., & Sastry, S. S. (1994). A mathematical introduction to robotic manipulation. CRC press.