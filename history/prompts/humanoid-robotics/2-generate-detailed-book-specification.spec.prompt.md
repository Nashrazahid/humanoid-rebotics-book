---
id: 2
title: Generate Detailed Book Specification for Humanoid Robotics
stage: spec
date: 2025-12-06
surface: agent
model: gemini 2.5flash
feature: humanoid-robotics-book
branch: master
user: Ms Computer
command: '''/sp.specify

Goal: Expand the 4-module book into detailed specifications for every chapter.

Instructions:
- Use the /sp.constitution as the governing document.
- For each module, write a complete specification.
- For each chapter, include:
  • Purpose of the chapter
  • Learning outcomes
  • Key concepts to teach
  • Required diagrams or visuals
  • Examples, case studies, or demonstrations
  • Dependencies or prerequisites
  • How it connects to the next chapter

Standards:
- No implementation code at this stage
- Maintain clarity for AI/CS learners
- Maintain embodied-AI perspective (AI → sensors → actuators → physical world)
- Keep academic tone (Flesch grade 8–10)
- Avoid unnecessary technical depth; this is a content blueprint

Output structure:
Module → Chapters → Detailed Specs
Format each chapter like this:

Module X: <Module Name>
  Chapter Y: <Chapter Title>
    - Purpose:
    - Learning Outcomes:
    - Key Concepts:
    - Required Visuals:
    - Examples / Demos:
    - Dependencies:
    - Forward Link:

Success criteria:
- Full blueprint for entire book
- Logical flow across modules
- Ready for next-phase writing (chapter drafting)'''
labels: [spec,book-content]
links:
  spec: specs/humanoid-robotics/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/humanoid-robotics/spec.md
tests:

---

## Prompt

/sp.specify

Goal: Expand the 4-module book into detailed specifications for every chapter.

Instructions:
- Use the /sp.constitution as the governing document.
- For each module, write a complete specification.
- For each chapter, include:
  • Purpose of the chapter
  • Learning outcomes
  • Key concepts to teach
  • Required diagrams or visuals
  • Examples, case studies, or demonstrations
  • Dependencies or prerequisites
  • How it connects to the next chapter

Standards:
- No implementation code at this stage
- Maintain clarity for AI/CS learners
- Maintain embodied-AI perspective (AI → sensors → actuators → physical world)
- Keep academic tone (Flesch grade 8–10)
- Avoid unnecessary technical depth; this is a content blueprint

Output structure:
Module → Chapters → Detailed Specs
Format each chapter like this:

Module X: <Module Name>
  Chapter Y: <Chapter Title>
    - Purpose:
    - Learning Outcomes:
    - Key Concepts:
    - Required Visuals:
    - Examples / Demos:
    - Dependencies:
    - Forward Link:

Success criteria:
- Full blueprint for entire book
- Logical flow across modules
- Ready for next-phase writing (chapter drafting)

## Response snapshot

Generated a detailed book specification for the Humanoid Robotics book, outlining 4 modules and 12 chapters with purpose, learning outcomes, key concepts, required visuals, examples/demos, dependencies, and forward links for each chapter.

## Outcome

- ✅ Impact: Detailed book specification generated
- 🧪 Tests: N/A
- 📁 Files: specs/humanoid-robotics/spec.md created
- 🔁 Next prompts: /sp.plan
- 🧠 Reflection: Successfully created a detailed book specification with chapters, learning outcomes, key concepts, etc., aligning with the user's instructions and the project constitution.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
