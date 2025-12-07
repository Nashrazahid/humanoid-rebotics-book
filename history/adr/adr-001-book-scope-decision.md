# 1. Book Scope Decision

Date: 2025-12-06
Status: Proposed

## Context
The project aims to create a technical book on Physical AI and Humanoid Robotics using Docusaurus. A key decision point is the scope of the book regarding practical implementation: whether to focus solely on simulation or to also include physical hardware deployment. This decision impacts the depth of content, the complexity of examples, and the resources required by the student audience.

## Decision
The book will cover both simulation and optional physical hardware deployment. This approach aims to provide comprehensive coverage while acknowledging the potential burden of physical hardware on students.

## Consequences
- **Positive**: Increased completeness and real-world relevance of the book. Students gain exposure to both simulated and physical robotics.
- **Negative**: Potentially increases the complexity for students who do not have access to physical hardware. Requires careful structuring of content to clearly differentiate optional physical deployment sections.

## Alternatives
- **Focus on simulation-only**:
    - **Pros**: Simpler for students, lower hardware barrier, easier reproducibility.
    - **Cons**: Less complete, less real-world applicability for advanced learners.

## References
- `specs/humanoid-robotics/plan.md`