# Chapter 1: Bullshit Jobs in the Age of Automation

*David Graeber meets your boss's calendar*

## The Spreadsheet That Changed Everything

Mike was a Senior Product Marketing Manager at a mid-sized SaaS company. His job involved creating PowerPoint decks about customer personas, attending alignment meetings about go-to-market strategies, and maintaining spreadsheets that tracked KPIs for campaigns that had already ended.

Then ChatGPT learned to make PowerPoints.

Not just the slides—entire market research reports, competitor analyses, customer journey maps, and messaging frameworks. What used to take Mike's team of four people two weeks now took one person thirty minutes and a well-crafted prompt.

Mike's still employed. His team isn't.

Now Mike spends his days prompting AI to create the same deliverables he used to create manually, attending meetings about "AI integration strategy," and updating his LinkedIn profile with buzzwords like "AI-augmented marketing professional."

The cruel irony? Mike's job was always bullshit. AI just made it obvious.

## What Graeber Saw Coming

David Graeber died in 2020, before AI could automate his email responses. But his analysis of "bullshit jobs" predicted exactly what we're seeing now: an economy full of roles that exist primarily to justify their own existence, suddenly exposed when machines can do the same pointless work faster and cheaper.⁵

Graeber identified five types of bullshit jobs:⁶

1. **Flunkies** - exist to make someone else look important
2. **Goons** - exist to harm or deceive others
3. **Duct-tapers** - exist to fix problems that shouldn't exist
4. **Box-tickers** - exist to create the appearance of compliance
5. **Taskmasters** - exist to create work for others

In 2020, these jobs seemed secure because they required human judgment, creativity, and social skills. In 2025, AI can handle most of that too.

Let's see how each category is getting automated:

### Flunkies: The Executive Assistant Apocalypse

**Maria's Story**: Maria had been an executive assistant at a Fortune 500 company for 15 years. At 48, she managed calendars for three VPs, coordinated international travel, and took detailed meeting notes. She thought her job was secure because it required "human touch" and relationship management.

Then her company implemented AI scheduling tools and automated expense reporting. Within six months, Maria's role was "restructured" to support eight executives instead of three, with AI handling most of the routine work. Her salary stayed the same, but her stress levels tripled.

**What they used to do:**
- Schedule meetings
- Take notes in meetings
- Write follow-up emails
- Coordinate travel
- Manage calendars
- Create expense reports

**What AI does now:**
```python
# Calendar management with Claude
prompt = """
Based on these email threads, schedule a follow-up meeting 
with stakeholders. Find optimal times across 3 time zones.
Draft calendar invites with agenda items from the discussion.
Include dial-in details and pre-meeting prep tasks.
"""

# Travel coordination with ChatGPT
prompt = """
Plan a 3-day business trip to Austin for Q2 planning meeting.
Budget: $2000. Preferences: downtown hotel, direct flights,
rental car not needed. Create itinerary with backup options.
"""
```

**The reality:** Executive assistants are being replaced by AI scheduling tools, automated expense software, and executives who finally learned to use their own calendars.

**Who's left:** A few high-level EAs who do actual strategic work. Everyone else is now "office operations specialists" making $15/hour instead of $45/hour.

### Goons: Sales Development Representatives

**Jamal's Reality Check**: Jamal, a 24-year-old recent college graduate, took an SDR role at a fintech startup thinking it was his entry point into sales. Fresh out of Howard University with a business degree, he was eager to prove himself in tech.

Six months in, his manager introduced "AI-powered outreach tools" that could personalize cold emails at scale. What used to take Jamal's team of five people a full day now took one person an hour. Four of his teammates were laid off. Jamal kept his job but now competes with AI-generated content for prospect attention.

"I spend more time training the AI than actually selling," Jamal says. "And I know it's getting better at my job every week."

**What they used to do:**
- Send cold emails
- Make cold calls
- Qualify leads
- Update CRM systems
- Follow up with prospects
- Schedule demos

**What AI does now:**
```python
# Personalized cold outreach at scale
prompt = """
Write a cold email to {{ prospect_name }} at {{ company_name }}.
They recently posted about {{ recent_linkedin_activity }}.
Our product helps {{ company_type }} companies reduce 
{{ pain_point }} by {{ value_proposition }}.
Tone: casual but professional, reference their recent wins.
"""

# Lead qualification scoring
prompt = """
Based on this website and LinkedIn data, score this lead:
- Company size: {{ employee_count }}
- Industry: {{ industry }}
- Recent funding: {{ funding_info }}
- Tech stack: {{ technologies }}
Rate qualification 1-10 and explain reasoning.
"""
```

**The reality:** Sales development is becoming "AI prompt optimization." One person with good prompts can do the work of an entire SDR team.

**Who's left:** Senior account executives who close deals in person. Junior SDRs are being replaced by "AI-augmented" teams of 2-3 people doing the work of 20.

### Duct-Tapers: The DevOps Middle Management

**What they used to do:**
- Coordinate between teams
- Translate business requirements into technical specs
- Manage project timelines
- Run standups and retrospectives
- Track sprint progress
- Write status reports

**What AI does now:**
```python
# Project status automation
prompt = """
Generate weekly project status report:
- Parse Jira tickets closed this week
- Identify blockers and dependencies
- Calculate velocity trends
- Draft action items for next sprint
- Format for stakeholder consumption
"""

# Requirements translation
prompt = """
Convert this business requirement into technical specifications:
{{ business_requirement }}
Include API endpoints, database schema changes,
testing requirements, and deployment considerations.
"""
```

**The reality:** Most project management is becoming automated workflow management. AI can track progress, identify blockers, and generate reports without human intervention.

**Who's left:** Technical project managers who write code. Everyone else is now "Agile coaches" making consulting rates instead of salaries.

### Box-Tickers: Compliance and Documentation

**Dr. Jennifer Chen's Dilemma**: Dr. Chen spent her days as a quality assurance coordinator at a mid-sized hospital, ensuring compliance with healthcare regulations. With a master's in healthcare administration and 12 years of experience, she thought her deep knowledge of HIPAA, Joint Commission standards, and state regulations made her indispensable.

Then the hospital implemented AI-powered documentation systems that could automatically generate compliance reports, track audit trails, and flag potential violations in real-time. Dr. Chen's careful, detail-oriented work was suddenly replaceable by software that never got tired or made transcription errors.

"I used to catch things that could cost the hospital millions in fines," she says. "Now the AI catches more violations than I ever could, and it works 24/7."

**What they used to do:**
- Write documentation
- Create compliance reports
- Maintain process documentation
- Generate audit trails
- Fill out regulatory forms
- Update policy documents

**What AI does now:**
```python
# Documentation generation
prompt = """
Generate API documentation from this codebase:
{{ code_repository }}
Include endpoint descriptions, parameter requirements,
response formats, error codes, and usage examples.
Follow OpenAPI 3.0 specification.
"""

# Compliance reporting
prompt = """
Create GDPR compliance report based on these data flows:
{{ data_processing_activities }}
Include legal basis, retention periods, third-party sharing,
and data subject rights procedures.
"""
```

**The reality:** AI can generate most documentation faster and more accurately than humans. It never gets bored, never procrastinates, and always follows templates.

**Who's left:** Senior compliance officers who interpret regulations. Technical writers are becoming "AI documentation specialists."

### Taskmasters: Middle Managers Everywhere

**What they used to do:**
- Assign tasks to team members
- Track individual productivity
- Run one-on-one meetings
- Create team OKRs
- Manage performance reviews
- Coordinate cross-team dependencies

**What AI does now:**
```python
# Task optimization and assignment
prompt = """
Based on team capacity and skill sets:
{{ team_member_profiles }}
Assign these incoming tasks optimally:
{{ task_queue }}
Consider current workload, skill requirements,
development goals, and deadline priorities.
"""

# Performance review generation
prompt = """
Generate performance review for {{ employee_name }}:
- Completed projects: {{ project_list }}
- Peer feedback: {{ feedback_data }}
- Goal achievement: {{ okr_progress }}
Create 360-degree review with development recommendations.
"""
```

**The reality:** Most middle management tasks can be automated or eliminated. AI can track productivity, assign work, and even generate performance feedback.

**Who's left:** People managers who actually develop talent and technical managers who ship code. Everyone else is being "reorganized" out of existence.

## The Automation Hierarchy

Not all bullshit jobs are equally vulnerable. Here's the pecking order:

### First to Go (Already Happening)
- Data entry specialists
- Basic content writers
- Junior analysts
- Customer service reps
- Most recruiters
- Social media coordinators

### Next Wave (2025-2026)
- Marketing coordinators
- Project coordinators
- Most QA testers
- Technical support
- Most sales development reps
- Junior designers

### Still Here For Now (2027-2028)
- Account managers who actually manage accounts
- Senior developers who architect systems
- Sales engineers who demo complex products
- Product managers who make hard decisions
- Engineering managers who grow teams

### Last to Go (Maybe Never)
- C-suite executives (they make the automation decisions)
- Senior sales professionals with deep relationships
- Technical specialists with rare expertise
- People who fix what the AI breaks

## The Bullshit Job Survival Calculator

Want to know how long your job will last? Ask yourself these questions:

1. **Could a smart intern do 80% of your job with good instructions?**
   - Yes: 6-12 months
   - No: 1-3 years

2. **Do you spend more time in meetings about work than doing work?**
   - Yes: 12-18 months
   - No: 2-5 years

3. **Would the company function the same if your role didn't exist?**
   - Yes: You're already dead, you just don't know it
   - No: You might survive the next round

4. **Is your primary skill "coordinating between teams"?**
   - Yes: AI can do that
   - No: You have a chance

5. **Do you create deliverables that other people use to create deliverables?**
   - Yes: That's two automation targets for the price of one
   - No: You might be creating actual value

## The New Bullshit: AI-Adjacent Roles

Here's the dark twist: as traditional bullshit jobs get automated, companies are creating new bullshit jobs around AI. It's the same pyramid scheme with different terminology.

- **AI Prompt Engineers**: Writers who think they're programmers (see Chapter 2 for why this won't last)
- **AI Training Specialists**: People who label data for machines that will soon label their own data
- **AI Ethics Officers**: Box-tickers creating compliance theater for algorithmic bias
- **AI Integration Managers**: Project managers with new titles doing the same coordination work
- **AI Productivity Coaches**: Consultants selling expensive workshops on ChatGPT basics

These roles feel important because they're new and AI-adjacent. But they're following the same pattern as every other interface job: temporary market inefficiency that gets automated away once the tools improve.

GPT-5 will write better prompts than most prompt engineers. Computer vision will eliminate most data labeling work. Ethics compliance will become automated safeguards built into AI development workflows.

The cruel irony? These new bullshit jobs often pay less and have worse benefits than the jobs they replaced, while requiring workers to participate in automating themselves out of existence.

## Why This Matters for Your Strategy

Understanding which jobs are bullshit isn't just intellectual exercise—it's survival intelligence. If your job primarily exists to:

- Make other people feel important
- Create the appearance of work
- Fix problems created by organizational dysfunction
- Generate reports nobody reads
- Coordinate work that could be done directly

...then you're in the automation danger zone.

But here's the strategic insight Graeber would have appreciated: **Most jobs have bullshit components and value-creation components.** The key is identifying which parts of your work actually matter and doubling down on those.

## The Tactical Response

If you're in a bullshit job (or a job with significant bullshit components), here's your action plan:

### 1. Audit Your Actual Value Creation
Make a list of everything you do in a typical week. For each item, ask:
- Does this directly serve customers?
- Does this directly create revenue?
- Does this directly solve technical problems?
- Would the business break if this didn't happen?

Anything that gets four "no" answers is bullshit work that can be automated.

### 2. Automate Your Own Bullshit
Before they automate you, automate the parts of your job that don't require human judgment (we'll cover specific automation tactics in Chapter 5):

```python
# Example: Automate weekly status reports
import jira_api, slack_api, openai

def generate_status_report():
    tickets = jira_api.get_completed_tickets(last_week=True)
    blockers = jira_api.get_blocked_tickets()
    
    prompt = f"""
    Generate professional status report:
    Completed: {tickets}
    Blocked: {blockers}
    Include metrics, risks, and next week priorities.
    """
    
    report = openai.completion(prompt)
    slack_api.post_to_channel(report, "#weekly-updates")
```

### 3. Document Your Non-Bullshit Value
Create evidence of the work you do that actually matters:
- Customer problems you solved
- Revenue you generated or saved
- Systems you built or improved
- People you developed or mentored

### 4. Transition to Value Work
Use the time you saved automating bullshit to do work that's harder to automate:
- Direct customer interaction
- Complex problem-solving
- Creative strategy development
- Building tools and systems
- Teaching and mentoring others

## The Deeper Question

Here's what Graeber understood that most career advice misses: the problem isn't just that AI can do bullshit work. The problem is that our economy created so much bullshit work in the first place.

Why did companies hire armies of coordinators, analysts, and managers to do work that added no real value? Why did we organize work around meetings, reports, and processes instead of actual outcomes?

The answer is uncomfortable: because bullshit jobs serve a political function. They give people the illusion of productivity while extracting value for shareholders. They create hierarchies that justify executive compensation. They make work feel important even when it isn't.

AI isn't just automating jobs—it's exposing the absurdity of how we organized work under late-stage capitalism.

## What Comes Next

The automation of bullshit jobs creates an opportunity. For the first time in decades, we might be forced to organize work around actual value creation instead of busy work.

This could go two ways:

**Scenario 1: More Bullshit**
Companies create new layers of AI-adjacent bureaucracy. We get AI compliance officers, prompt optimization specialists, and machine learning coordinators. The bullshit just gets more technological.

**Scenario 2: Less Bullshit**
Companies realize they can run lean teams focused on customer value. Work becomes more meaningful, but fewer people have traditional jobs. This requires new economic models (which we'll discuss in Part III).

The choice isn't inevitable. It depends on how workers respond to automation and whether we can imagine better ways to organize labor.

## Your Immediate Action Items

1. **Do the bullshit audit**: List everything you do. Identify what's automatable.

2. **Start automating**: Use AI tools to handle your most repetitive tasks. Free up time for valuable work.

3. **Document your value**: Create a portfolio of work that actually matters. Make it visible to people who make decisions.

4. **Develop non-bullshit skills**: Focus on work that requires human judgment, creativity, or relationship-building.

5. **Build alternatives**: Start a side project, freelance client, or network that doesn't depend on your current employer.

Don't wait for your company to figure out which jobs are valuable. By then, the valuable jobs will be taken and the bullshit jobs will be automated.

The goal isn't to eliminate all bullshit from your work—that's impossible in most organizations. The goal is to ensure that when the automation wave hits your company, you're doing work that's too valuable to eliminate.

---

## Notes

⁵ Graeber, David. *Bullshit Jobs: A Theory*. New York: Simon & Schuster, 2018, pp. 1-15. Graeber's central thesis was that a significant portion of jobs in modern economies serve no productive purpose but exist to maintain the appearance of full employment and social hierarchy.

⁶ Ibid., pp. 27-42. Graeber's five-category taxonomy of bullshit jobs was based on hundreds of testimonials from workers describing their meaningless roles across various industries and organizational levels.

---

*Next up: Why prompting AI isn't a career, it's a tactic—and what happens when everyone knows how to do it.*

→ **Next: Chapter 2 - Prompt or Be Prompted** 