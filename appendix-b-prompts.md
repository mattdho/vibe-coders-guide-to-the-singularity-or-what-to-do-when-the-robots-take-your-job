# Appendix B: Claude/GPT Prompt Library for Coders

*Proven prompts for common development tasks*

## Code Generation & Development

### Full Application Scaffolding
```
Create a [framework] application for [specific use case]. 

Requirements:
- [List specific features needed]
- [Authentication/data requirements]
- [Performance or scale considerations]

Please provide:
1. Project structure and file organization
2. Key component/module implementations
3. Database schema (if applicable)
4. Basic styling and responsive design
5. Documentation for setup and deployment

Make the code production-ready with proper error handling, security considerations, and best practices.
```

**Example:**
```
Create a Next.js application for a freelance project management tool.

Requirements:
- User authentication with email/password
- Project creation and task management
- Client communication and file sharing
- Time tracking and invoicing
- Responsive design for mobile use

Please provide:
1. Project structure and file organization
2. Key component implementations
3. Database schema using Prisma/PostgreSQL
4. Basic styling with Tailwind CSS
5. Documentation for setup and deployment

Make the code production-ready with proper error handling, security considerations, and best practices.
```

### API Development
```
Design and implement a RESTful API for [specific domain/use case].

Requirements:
- [List entities and relationships]
- [Authentication/authorization needs]
- [Performance requirements]
- [External integrations]

Please include:
1. API endpoint design with HTTP methods
2. Data models and validation schemas
3. Authentication middleware
4. Error handling and logging
5. API documentation
6. Testing examples

Use [preferred framework/language] and follow industry best practices.
```

### Database Design
```
Design a database schema for [application description].

Entities and relationships:
- [List main entities]
- [Describe relationships between entities]
- [Any specific constraints or requirements]

Please provide:
1. Complete database schema with tables, columns, and types
2. Primary and foreign key relationships
3. Indexes for performance optimization
4. Migration scripts
5. Sample queries for common operations

Consider scalability, normalization, and performance optimization.
```

## Code Review & Optimization

### Code Review Assistant
```
Please review this [language] code for:
1. Bugs and potential issues
2. Performance optimization opportunities
3. Code style and best practices
4. Security vulnerabilities
5. Maintainability improvements

Code:
[paste your code here]

For each issue found, please:
- Explain the problem
- Suggest specific improvements
- Provide the corrected code snippet
- Rate the severity (Critical/High/Medium/Low)
```

### Performance Optimization
```
Analyze this [language/framework] code for performance issues and suggest optimizations:

Code:
[paste code here]

Please identify:
1. Performance bottlenecks
2. Memory usage issues
3. Database query optimization opportunities
4. Caching strategies
5. Algorithm improvements

For each optimization, provide:
- Current performance impact
- Improved code implementation
- Expected performance gains
- Trade-offs to consider
```

### Refactoring Assistant
```
Help me refactor this [language] code to improve:
- Readability and maintainability
- Code organization and structure
- Adherence to design patterns
- Test coverage

Current code:
[paste code here]

Please provide:
1. Refactored code with explanations
2. Design patterns applied
3. Unit test examples
4. Documentation improvements
5. Migration strategy for existing code
```

## Documentation & Communication

### Technical Documentation
```
Generate comprehensive documentation for this [code/project/API]:

[Paste code or describe project]

Please include:
1. Overview and purpose
2. Installation and setup instructions
3. Usage examples with code snippets
4. API reference (if applicable)
5. Configuration options
6. Troubleshooting guide
7. Contributing guidelines

Write for an audience of [beginner/intermediate/advanced] developers.
```

### README Generator
```
Create a professional README.md for my [type] project:

Project details:
- Name: [project name]
- Description: [brief description]
- Tech stack: [technologies used]
- Key features: [list main features]
- Target audience: [who uses this]

Please include:
1. Project badges and status
2. Installation instructions
3. Usage examples
4. API documentation (if applicable)
5. Contributing guidelines
6. License information
7. Screenshots or demo links (placeholders)

Make it comprehensive but easy to scan and follow.
```

### Code Comments & Explanations
```
Add comprehensive comments to this [language] code explaining:
- What each function/method does
- Complex logic and algorithms
- Parameter descriptions and types
- Return values and error conditions
- Usage examples where helpful

Code:
[paste code here]

Use clear, concise language that helps other developers understand the code quickly.
```

## Problem Solving & Debugging

### Debug Assistant
```
I'm experiencing this error in my [language/framework] application:

Error: [paste error message]

Context:
- What I was trying to do: [describe the action]
- Code that triggered the error: [paste relevant code]
- Environment: [OS, language version, framework version]
- Steps to reproduce: [list steps]

Please help me:
1. Understand what's causing the error
2. Provide step-by-step debugging approach
3. Suggest multiple potential solutions
4. Recommend prevention strategies
5. Identify any related issues to watch for
```

### Algorithm Design
```
Design an algorithm to solve this problem:

Problem: [describe the specific problem]
Constraints: [list any constraints or requirements]
Input format: [describe input format]
Output format: [describe expected output]
Performance requirements: [time/space complexity if relevant]

Please provide:
1. Problem analysis and approach
2. Step-by-step algorithm description
3. Implementation in [preferred language]
4. Time and space complexity analysis
5. Test cases with expected outputs
6. Alternative approaches and trade-offs
```

### Testing Strategies
```
Create a comprehensive testing strategy for this [language/framework] code:

Code to test:
[paste code here]

Please provide:
1. Unit tests covering all functions/methods
2. Integration tests for component interactions
3. Edge cases and error condition tests
4. Performance/load testing approach
5. Test data setup and teardown
6. Mocking strategies for external dependencies

Use [testing framework] and include setup instructions.
```

## Learning & Skill Development

### Concept Explanation
```
Explain [technical concept] to a [beginner/intermediate/advanced] [language/framework] developer.

Please include:
1. Clear definition and purpose
2. Real-world use cases and examples
3. Code examples in [language]
4. Common pitfalls and how to avoid them
5. Best practices and recommendations
6. Related concepts to explore next

Use practical examples that relate to everyday development tasks.
```

### Code Comparison
```
Compare these different approaches to [specific task/problem] in [language/framework]:

Approach 1:
[paste code/description]

Approach 2:
[paste code/description]

[Add more approaches if needed]

Please analyze:
1. Pros and cons of each approach
2. Performance implications
3. Maintainability considerations
4. Appropriate use cases for each
5. Which approach you'd recommend and why
6. Any hybrid approaches that combine the best of both
```

### Technology Decision
```
Help me choose between [Technology A] and [Technology B] for [specific use case].

Project requirements:
- [List key requirements]
- [Performance needs]
- [Team skill level]
- [Timeline constraints]
- [Budget considerations]

Please compare:
1. Learning curve and development speed
2. Performance characteristics
3. Community support and ecosystem
4. Long-term maintenance considerations
5. Cost implications
6. Integration with existing tools

Provide a recommendation with reasoning.
```

## Business & Client Communication

### Technical Requirements Gathering
```
Help me create technical requirements from this client description:

Client request: [paste client's description of what they want]

Please help me:
1. Identify technical requirements and specifications
2. List assumptions that need clarification
3. Suggest additional questions to ask the client
4. Estimate complexity and development time
5. Identify potential technical challenges
6. Recommend technology stack options
7. Create a project timeline outline

Format as a professional requirements document.
```

### Proposal Writing
```
Create a technical proposal for this project:

Project: [describe project]
Client: [describe client and their needs]
Timeline: [desired timeline]
Budget range: [if known]

Please include:
1. Executive summary
2. Technical approach and architecture
3. Development timeline with milestones
4. Team structure and responsibilities
5. Technology stack justification
6. Risk assessment and mitigation
7. Ongoing maintenance considerations
8. Pricing structure recommendation

Make it client-friendly while maintaining technical accuracy.
```

### Status Updates
```
Generate a client-friendly status update for this development project:

Project: [project name]
This week's work: [list completed tasks]
Next week's plan: [list upcoming tasks]
Challenges: [any issues encountered]
Timeline: [on track/delayed/ahead]

Please create:
1. Executive summary
2. Detailed progress report
3. Visual representation of completion (if possible)
4. Next steps and upcoming milestones
5. Any decisions needed from client
6. Screenshots or demo links (if applicable)

Keep it professional but accessible to non-technical stakeholders.
```

## Automation & Productivity

### Script Generation
```
Create a [language] script to automate this task:

Task description: [describe what needs to be automated]
Input: [describe input format/source]
Output: [describe desired output]
Environment: [OS, available tools, constraints]
Frequency: [how often this runs]

Please provide:
1. Complete script with error handling
2. Configuration options
3. Logging and monitoring
4. Installation/setup instructions
5. Scheduling setup (cron job, etc.)
6. Documentation for customization

Make it robust and production-ready.
```

### Workflow Optimization
```
Analyze my current development workflow and suggest improvements:

Current workflow:
[describe your current process step by step]

Tools I'm using:
[list current tools]

Pain points:
[describe what's frustrating or time-consuming]

Please suggest:
1. Workflow optimizations
2. Tool recommendations
3. Automation opportunities
4. Time-saving techniques
5. Quality improvement measures
6. Implementation steps

Focus on practical improvements with immediate benefits.
```

## Prompt Engineering Tips

### Making Prompts More Effective

1. **Be Specific**: Include exact technologies, versions, and requirements
2. **Provide Context**: Explain the broader goal, not just the immediate task
3. **Request Format**: Specify how you want the response structured
4. **Include Constraints**: Mention limitations, deadlines, or requirements
5. **Ask for Alternatives**: Request multiple approaches when appropriate
6. **Request Explanations**: Ask for reasoning behind recommendations

### Iterative Prompting
```
[Initial request]

Follow-up prompts based on response:
- "Can you explain the [specific part] in more detail?"
- "What would be an alternative approach that [specific criteria]?"
- "How would this change if [different constraint]?"
- "Can you optimize this for [specific requirement]?"
- "What are the potential downsides of this approach?"
```

### Custom Prompt Templates

**For Regular Tasks**: Create standardized templates for common requests
**For Learning**: Include skill level and learning objectives
**For Code Review**: Specify review criteria and priorities
**For Documentation**: Define audience and detail level needed

Remember: AI assistants work best when given clear, specific instructions with relevant context. Don't hesitate to iterate and refine your prompts based on the responses you receive. 