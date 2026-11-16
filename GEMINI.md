# ANTIGRAVITY PROJECT RULES & CODING STANDARDS (PROJECT: KCPM / WEBSITEMUABANXEDAP)

## 1. Windows Batch Script Robustness
- **Encoding & Line Endings:** All `.bat` and `.cmd` files MUST use pure ASCII encoding (ANSI/OEM code page compatible) with CRLF (`\r\n`) line endings. Never use Vietnamese accents or unescaped Unicode characters in `.bat` files.
- **Working Directory Anchoring:** Always begin Windows batch files with `cd /d "%~dp0"` to ensure the current working directory is anchored to the script location, allowing single-click execution from any path or Windows Explorer.

## 2. Testing Documentation & Taxonomy
- **Industry Standards over Textbook Chapters:** Do NOT label test suites, batch titles, or reports with textbook chapter numbers (e.g., "Chương 4", "Chương 7"). Always categorize test cases directly by their industry-standard testing techniques:
  - Boundary Value Analysis (BVA)
  - Equivalence Partitioning (EP)
  - Decision Table Testing (DT)
  - State Transition Testing (ST)
  - Control Flow Graph Basis Path Testing (White-box CFG)
  - End-to-End User Flow (E2E)
  - Security Testing (SQLi, Auth Guard)
  - Performance & Load Testing (SLA Benchmark)
- **Personal Information Segregation:** Keep student personal identification (MSSV, student name) strictly within submission archive naming metadata; do not hardcode personal identifiers inside test runners, assertions, or production code.

## 3. Self-Contained Test Packaging
- When delivering "các script liên quan", package a self-contained archive where runners reside at the root of the archive alongside required configurations (`package.json`, `codecept.conf.js`, `.postman_collection.json`, `.postman_environment.json`) and tests under `tests/`.

## 4. Module Consistency in Node.js
- In projects without `"type": "module"` in `package.json`, maintain strict CommonJS syntax (`require` and `module.exports`) across all configuration and helper files (e.g., `steps_file.js`, `codecept.conf.js`) to eliminate Node.js typeless warnings.

## 5. Postman Automation & Repeatability
- Test collections containing user creation or state-dependent orders must use dynamic timestamps (e.g. `tester_` + Date.now()) synchronized across both `pm.environment` and `pm.collectionVariables` to guarantee 100% idempotent and repeatable test executions.
