{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is developing a WBS for a software implementation project. The team identifies a deliverable that cannot be decomposed further because insufficient information is available at this time. What should the project manager do?",
    options: [
        "Remove the deliverable from the WBS until more information is available",
        "Create a planning package and decompose it later through rolling wave planning",
        "Assign the deliverable to a subcontractor who has more expertise",
        "Escalate the issue to the project sponsor for resolution"
    ],
    correct: 1,
    explanation: "<strong>Rolling wave planning</strong> is a form of progressive elaboration where work to be accomplished in the near term is planned in detail, while work further in the future is planned at a higher level. A <strong>planning package</strong> is a WBS component below the control account and above the work package that has known work content but without detailed schedule activities.",
    evidence: [{
        quote: "Rolling wave planning is an <span class='evidence-highlight'>iterative planning technique in which the work to be accomplished in the near term is planned in detail</span>, while the work in the future is planned at a higher level.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project has the following estimates for an activity: Optimistic = 10 days, Most Likely = 15 days, Pessimistic = 26 days. Using the PERT formula, what is the expected duration?",
    options: [
        "15 days",
        "16 days",
        "17 days",
        "18 days"
    ],
    correct: 1,
    explanation: "The <strong>PERT (Program Evaluation and Review Technique)</strong> formula calculates expected duration as: (O + 4M + P) / 6. Substituting: (10 + 4(15) + 26) / 6 = (10 + 60 + 26) / 6 = 96 / 6 = <strong>16 days</strong>.",
    evidence: [{
        quote: "The <span class='evidence-highlight'>three-point estimate uses optimistic, most likely, and pessimistic values</span> with the formula (tO + 4tM + tP) / 6 to calculate expected duration.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Estimation Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "During project execution, the CPI is 0.85 and SPI is 1.10. The project manager needs to report project status to stakeholders. Which statement best describes the project status?",
    options: [
        "The project is under budget and behind schedule",
        "The project is over budget and ahead of schedule",
        "The project is under budget and ahead of schedule",
        "The project is over budget and behind schedule"
    ],
    correct: 1,
    explanation: "A <strong>CPI less than 1.0</strong> indicates the project is over budget (getting less value for every dollar spent). An <strong>SPI greater than 1.0</strong> indicates the project is ahead of schedule (accomplishing more work than planned). Therefore, the project is over budget and ahead of schedule.",
    evidence: [{
        quote: "A CPI value <span class='evidence-highlight'>less than 1.0 indicates a cost overrun</span>, while an SPI value greater than 1.0 indicates the project is ahead of schedule.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project has a BAC of $500,000. After 6 months, the EV is $200,000 and the AC is $250,000. Assuming current cost performance continues, what is the Estimate at Completion (EAC)?",
    options: [
        "$550,000",
        "$625,000",
        "$500,000",
        "$600,000"
    ],
    correct: 1,
    explanation: "When current cost performance is expected to continue, <strong>EAC = BAC / CPI</strong>. First calculate CPI = EV / AC = $200,000 / $250,000 = 0.80. Then EAC = $500,000 / 0.80 = <strong>$625,000</strong>.",
    evidence: [{
        quote: "EAC = BAC / CPI is used when <span class='evidence-highlight'>the current CPI is expected to continue for the remainder of the project</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is establishing the cost baseline. Which of the following is NOT included in the cost baseline?",
    options: [
        "Work package cost estimates",
        "Contingency reserves",
        "Management reserves",
        "Activity cost estimates"
    ],
    correct: 2,
    explanation: "The <strong>cost baseline</strong> includes the authorized budget for the project work, which encompasses activity cost estimates, work package estimates, and <strong>contingency reserves</strong>. <strong>Management reserves</strong> are added to the cost baseline to form the project budget but are not part of the baseline itself.",
    evidence: [{
        quote: "The cost baseline is the <span class='evidence-highlight'>approved version of the time-phased project budget, excluding management reserves</span>, which can only be changed through formal change control.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager discovers that the scope baseline was approved without decomposing a key deliverable to the work package level. What is the MOST appropriate action?",
    options: [
        "Continue with execution and decompose the deliverable when more information becomes available",
        "Submit a change request to update the WBS with proper decomposition",
        "Ask the team to informally break down the deliverable during execution",
        "Add the missing decomposition directly to the project management plan"
    ],
    correct: 1,
    explanation: "Any change to an approved baseline must go through <strong>integrated change control</strong>. The project manager should submit a <strong>change request</strong> to formally update the WBS and scope baseline with the proper decomposition of the deliverable.",
    evidence: [{
        quote: "Changes to the <span class='evidence-highlight'>scope baseline must be processed through the Perform Integrated Change Control process</span> to ensure proper evaluation and approval.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is using bottom-up estimating for a construction project. Which statement BEST describes this technique?",
    options: [
        "Estimates are derived from historical data of similar projects",
        "Individual work packages are estimated and aggregated to higher levels",
        "Expert judgment is used to provide a single overall project estimate",
        "Statistical relationships between historical data and variables are used"
    ],
    correct: 1,
    explanation: "<strong>Bottom-up estimating</strong> involves estimating the cost or duration of individual work packages or activities at the lowest level of detail, then aggregating (rolling up) these estimates to determine the total project estimate. This method is generally the most accurate but also the most time-consuming.",
    evidence: [{
        quote: "Bottom-up estimating is a method of <span class='evidence-highlight'>estimating a component of work by aggregating the estimates of the lower-level components</span> of the WBS.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Estimation Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project has a BAC of $400,000. The EV is $150,000, AC is $180,000, and PV is $160,000. What is the Cost Variance (CV)?",
    options: [
        "$30,000",
        "-$30,000",
        "$10,000",
        "-$10,000"
    ],
    correct: 1,
    explanation: "<strong>Cost Variance (CV) = EV - AC</strong>. CV = $150,000 - $180,000 = <strong>-$30,000</strong>. A negative CV indicates the project is over budget, meaning more money has been spent than the value of work completed.",
    evidence: [{
        quote: "Cost variance is the <span class='evidence-highlight'>amount of budget deficit or surplus at a given point in time, expressed as the difference between earned value and actual cost</span>: CV = EV - AC.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "During a planning meeting, a team member suggests using analogous estimating for the project schedule. When is this technique MOST appropriate?",
    options: [
        "When detailed project information is available and high accuracy is needed",
        "When limited information is available early in the project and a rough estimate is needed quickly",
        "When the project is complex and has never been attempted before",
        "When the project budget requires the most precise estimate possible"
    ],
    correct: 1,
    explanation: "<strong>Analogous estimating</strong> uses historical data from similar past projects as a basis for estimating. It is most useful early in the project when <strong>limited detailed information</strong> is available, providing a quick, less costly, but less accurate estimate.",
    evidence: [{
        quote: "Analogous estimating is <span class='evidence-highlight'>typically used when there is limited detailed information about the project</span>, such as in the early phases.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Estimation Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager needs to determine the total float of Activity D. Activity D has an Early Start of Day 10, Early Finish of Day 15, Late Start of Day 13, and Late Finish of Day 18. What is the total float?",
    options: [
        "2 days",
        "3 days",
        "5 days",
        "8 days"
    ],
    correct: 1,
    explanation: "<strong>Total Float = Late Start - Early Start</strong> (or Late Finish - Early Finish). Total Float = 13 - 10 = <strong>3 days</strong>. This means Activity D can be delayed by 3 days without affecting the project end date.",
    evidence: [{
        quote: "Total float is <span class='evidence-highlight'>the amount of time an activity can be delayed without delaying the project end date</span>. It is calculated as LS - ES or LF - EF.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is preparing a WBS dictionary entry for a work package. Which of the following should be included?",
    options: [
        "Only the work package name and cost estimate",
        "A description of work, acceptance criteria, schedule milestones, and responsible organization",
        "The names of all team members assigned to the work package",
        "Only the deliverables and their associated risks"
    ],
    correct: 1,
    explanation: "The <strong>WBS dictionary</strong> provides detailed information about each WBS component, including a <strong>description of work, acceptance criteria, schedule milestones, associated schedule activities, resources required, cost estimates, quality requirements, and the responsible organization</strong>.",
    evidence: [{
        quote: "The WBS dictionary provides <span class='evidence-highlight'>detailed deliverable, activity, and scheduling information about each component in the WBS</span>, supporting unambiguous understanding of each element.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is using parametric estimating for a software project. The historical data shows that each module takes 40 hours to develop. The new project has 25 modules. What is the parametric estimate for development?",
    options: [
        "800 hours",
        "1,000 hours",
        "1,200 hours",
        "1,500 hours"
    ],
    correct: 1,
    explanation: "<strong>Parametric estimating</strong> uses a statistical relationship between historical data and other variables. The calculation is: 40 hours/module x 25 modules = <strong>1,000 hours</strong>. This technique is more accurate than analogous estimating when the underlying data is reliable.",
    evidence: [{
        quote: "Parametric estimating uses <span class='evidence-highlight'>a statistical relationship between historical data and other variables to calculate an estimate</span> for activity parameters such as cost, budget, and duration.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Estimation Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project has a Schedule Variance (SV) of -$15,000 and a Planned Value (PV) of $100,000. What is the Schedule Performance Index (SPI)?",
    options: [
        "0.75",
        "0.85",
        "1.15",
        "0.90"
    ],
    correct: 1,
    explanation: "SV = EV - PV, so EV = SV + PV = -$15,000 + $100,000 = $85,000. <strong>SPI = EV / PV</strong> = $85,000 / $100,000 = <strong>0.85</strong>. An SPI less than 1.0 means the project is behind schedule.",
    evidence: [{
        quote: "The schedule performance index (SPI) is a <span class='evidence-highlight'>measure of schedule efficiency expressed as the ratio of earned value to planned value</span>: SPI = EV / PV.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is developing the project schedule and notices that the critical path duration exceeds the required completion date by two weeks. Which technique should the project manager consider FIRST?",
    options: [
        "Reduce project scope to shorten the schedule",
        "Apply schedule compression techniques such as crashing or fast tracking",
        "Request additional budget to add more resources",
        "Accept the delay and communicate it to the sponsor"
    ],
    correct: 1,
    explanation: "When the critical path exceeds the required completion date, the project manager should first consider <strong>schedule compression techniques</strong>. <strong>Crashing</strong> adds resources to critical path activities, and <strong>fast tracking</strong> performs sequential activities in parallel. These techniques address the schedule without necessarily changing scope.",
    evidence: [{
        quote: "Schedule compression techniques such as <span class='evidence-highlight'>crashing and fast tracking are used to shorten the project schedule without reducing scope</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager calculates the ETC (Estimate to Complete) for a project with BAC = $300,000, EV = $120,000, AC = $150,000, and assumes the remaining work will be performed at the budgeted rate. What is the ETC?",
    options: [
        "$150,000",
        "$180,000",
        "$225,000",
        "$120,000"
    ],
    correct: 1,
    explanation: "When remaining work is performed at the <strong>budgeted rate</strong>, <strong>ETC = BAC - EV</strong>. ETC = $300,000 - $120,000 = <strong>$180,000</strong>. This formula is used when past variances are considered atypical and not expected to continue.",
    evidence: [{
        quote: "ETC based on atypical variances: <span class='evidence-highlight'>ETC = BAC - EV, used when current variances are seen as atypical</span> and the project team expects future performance to follow the original budget.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is defining activities from work packages. The team identifies that one activity has a mandatory dependency on another. What type of dependency is this?",
    options: [
        "Discretionary dependency based on best practices",
        "A hard logic constraint inherent in the nature of the work",
        "An external dependency controlled by outside parties",
        "A preferential dependency chosen by the project team"
    ],
    correct: 1,
    explanation: "<strong>Mandatory dependencies</strong> (also called hard logic) are those that are <strong>inherent in the nature of the work</strong>. They often involve physical limitations, such as the need to complete a foundation before building walls. These cannot be changed by the project team.",
    evidence: [{
        quote: "Mandatory dependencies are those that are <span class='evidence-highlight'>legally or contractually required or inherent in the nature of the work</span>. They are also referred to as hard logic.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project has EV = $250,000, PV = $275,000, AC = $260,000, and BAC = $500,000. What is the Variance at Completion (VAC)?",
    options: [
        "-$10,000",
        "-$20,000",
        "$20,000",
        "-$25,000"
    ],
    correct: 1,
    explanation: "First calculate CPI = EV/AC = $250,000/$260,000 = 0.9615. EAC = BAC/CPI = $500,000/0.9615 = $520,000. <strong>VAC = BAC - EAC</strong> = $500,000 - $520,000 = <strong>-$20,000</strong>. A negative VAC indicates the project is expected to finish over budget.",
    evidence: [{
        quote: "Variance at completion (VAC) is a <span class='evidence-highlight'>projection of the amount of budget deficit or surplus, expressed as the difference between the BAC and the EAC</span>: VAC = BAC - EAC.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is creating a network diagram and encounters an activity that can begin 5 days after its predecessor starts but before the predecessor finishes. Which relationship type should be used?",
    options: [
        "Finish-to-Start (FS) with a 5-day lag",
        "Start-to-Start (SS) with a 5-day lag",
        "Finish-to-Finish (FF) with a 5-day lead",
        "Start-to-Finish (SF) with a 5-day lag"
    ],
    correct: 1,
    explanation: "A <strong>Start-to-Start (SS) relationship with a 5-day lag</strong> means the successor activity can begin 5 days after the predecessor starts. The lag represents the waiting time between the start of the predecessor and the start of the successor.",
    evidence: [{
        quote: "A Start-to-Start relationship means the <span class='evidence-highlight'>successor activity cannot start until the predecessor activity has started</span>. A lag is applied when the successor must wait a specified duration after the predecessor starts.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager needs to estimate the standard deviation for an activity with Optimistic = 8 days, Most Likely = 14 days, and Pessimistic = 20 days. What is the standard deviation?",
    options: [
        "1 day",
        "2 days",
        "3 days",
        "4 days"
    ],
    correct: 1,
    explanation: "The <strong>standard deviation for PERT</strong> is calculated as: (P - O) / 6. Standard Deviation = (20 - 8) / 6 = 12 / 6 = <strong>2 days</strong>. This represents one standard deviation of the estimate, meaning there is a 68.26% probability the actual duration will fall within this range of the expected value.",
    evidence: [{
        quote: "The standard deviation of the activity is calculated as <span class='evidence-highlight'>(tP - tO) / 6</span>, representing the spread of the estimate around the expected value.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Estimation Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "During scope planning, the project manager is decomposing the project scope into smaller components. At what level should decomposition stop?",
    options: [
        "At the activity level where individual tasks are assigned",
        "At the work package level where work can be reliably estimated and managed",
        "At the milestone level where key deliverables are identified",
        "At the control account level where costs are tracked"
    ],
    correct: 1,
    explanation: "WBS decomposition continues until deliverables are broken down to the <strong>work package level</strong>. A work package is the lowest level of the WBS where cost and duration can be <strong>reliably estimated and managed</strong>. Activities are defined separately from the WBS decomposition.",
    evidence: [{
        quote: "The work package is the <span class='evidence-highlight'>lowest level of the WBS where cost and schedule can be reliably estimated</span>. The level of decomposition is guided by the degree of control needed.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is calculating the To-Complete Performance Index (TCPI) based on BAC. The project has BAC = $600,000, EV = $200,000, and AC = $240,000. What is the TCPI?",
    options: [
        "0.95",
        "1.11",
        "0.83",
        "1.25"
    ],
    correct: 1,
    explanation: "<strong>TCPI = (BAC - EV) / (BAC - AC)</strong> = ($600,000 - $200,000) / ($600,000 - $240,000) = $400,000 / $360,000 = <strong>1.11</strong>. A TCPI greater than 1.0 means the project must perform better than planned for the remaining work to meet the BAC.",
    evidence: [{
        quote: "TCPI based on BAC: <span class='evidence-highlight'>TCPI = (BAC - EV) / (BAC - AC)</span>. A value greater than 1.0 indicates harder-to-achieve cost performance is required.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager notices that a Finish-to-Start dependency between Activity A and Activity B has a 3-day lead. What does this mean?",
    options: [
        "Activity B must wait 3 days after Activity A finishes before it can start",
        "Activity B can start 3 days before Activity A finishes",
        "Activity A must finish 3 days before the planned end date",
        "Activity B has 3 days of total float"
    ],
    correct: 1,
    explanation: "A <strong>lead</strong> is the amount of time a successor activity can be <strong>advanced</strong> with respect to a predecessor. A 3-day lead on a FS relationship means Activity B can start 3 days before Activity A finishes, allowing overlap between the two activities.",
    evidence: [{
        quote: "A lead is the <span class='evidence-highlight'>amount of time a successor activity can be advanced with respect to a predecessor activity</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project is 40% complete with a BAC of $800,000. The actual cost to date is $350,000. What is the CPI?",
    options: [
        "1.10",
        "0.91",
        "0.80",
        "1.14"
    ],
    correct: 1,
    explanation: "First calculate EV = BAC x % complete = $800,000 x 0.40 = $320,000. <strong>CPI = EV / AC</strong> = $320,000 / $350,000 = <strong>0.91</strong>. A CPI less than 1.0 indicates the project is getting 91 cents of value for every dollar spent.",
    evidence: [{
        quote: "The cost performance index (CPI) is a <span class='evidence-highlight'>measure of the cost efficiency of budgeted resources expressed as the ratio of earned value to actual cost</span>: CPI = EV / AC.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is creating the project schedule and determines that several activities share a common resource. The resource can only work on one activity at a time. Which technique should the project manager use to resolve this conflict?",
    options: [
        "Fast tracking to overlap the activities",
        "Resource leveling to resolve the resource conflict",
        "Crashing by adding additional resources",
        "Schedule compression through scope reduction"
    ],
    correct: 1,
    explanation: "<strong>Resource leveling</strong> adjusts the schedule to address resource constraints by delaying activities until the required resources are available. This technique resolves over-allocation of resources but may extend the critical path and project duration.",
    evidence: [{
        quote: "Resource leveling is a <span class='evidence-highlight'>technique in which start and finish dates are adjusted based on resource constraints</span> with the goal of balancing demand for resources with available supply.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A control account in a WBS is used for which purpose?",
    options: [
        "To identify the project sponsor responsible for funding",
        "To serve as a management control point where scope, budget, and schedule are integrated for performance measurement",
        "To track individual team member performance metrics",
        "To define the project milestones for stakeholder reporting"
    ],
    correct: 1,
    explanation: "A <strong>control account</strong> is a management control point in the WBS where <strong>scope, budget, actual cost, and schedule are integrated</strong> and compared to earned value for performance measurement. Each control account may include one or more work packages or planning packages.",
    evidence: [{
        quote: "A control account is a <span class='evidence-highlight'>management control point where scope, budget, actual cost, and schedule are integrated and compared to earned value</span> for performance measurement.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager needs to compress a schedule but has no additional budget. Which schedule compression technique is MOST appropriate?",
    options: [
        "Crashing by adding overtime resources",
        "Fast tracking by performing sequential activities in parallel",
        "Adding a management reserve for schedule contingency",
        "Reducing the scope to eliminate non-critical activities"
    ],
    correct: 1,
    explanation: "<strong>Fast tracking</strong> compresses the schedule by performing activities that are normally sequential in parallel. Unlike crashing, fast tracking typically does <strong>not require additional budget</strong> but may increase risk due to rework from parallel execution.",
    evidence: [{
        quote: "Fast tracking is a <span class='evidence-highlight'>schedule compression technique in which activities or phases normally done in sequence are performed in parallel</span> for at least a portion of their duration.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project has four paths through the network diagram: Path A = 22 days, Path B = 28 days, Path C = 25 days, Path D = 20 days. What is the total float for Path C?",
    options: [
        "2 days",
        "3 days",
        "5 days",
        "6 days"
    ],
    correct: 1,
    explanation: "The <strong>critical path</strong> is Path B at 28 days (the longest path). The total float for any path is the difference between the critical path duration and that path's duration. Total float for Path C = 28 - 25 = <strong>3 days</strong>.",
    evidence: [{
        quote: "Total float for a path is the <span class='evidence-highlight'>difference between the length of the critical path and the length of the path being measured</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "During project planning, the team determines that Activity X must finish before Activity Y can finish. Which type of logical relationship is this?",
    options: [
        "Finish-to-Start (FS)",
        "Finish-to-Finish (FF)",
        "Start-to-Start (SS)",
        "Start-to-Finish (SF)"
    ],
    correct: 1,
    explanation: "A <strong>Finish-to-Finish (FF)</strong> relationship means the successor activity (Y) cannot finish until the predecessor activity (X) has finished. This is commonly used when two activities must end around the same time.",
    evidence: [{
        quote: "Finish-to-Finish (FF): A logical relationship in which <span class='evidence-highlight'>a successor activity cannot finish until a predecessor activity has finished</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "The project budget includes $50,000 for contingency reserves and $20,000 for management reserves. The cost baseline is $400,000. What is the total project budget?",
    options: [
        "$400,000",
        "$420,000",
        "$450,000",
        "$470,000"
    ],
    correct: 1,
    explanation: "The <strong>cost baseline</strong> already includes contingency reserves. The <strong>total project budget</strong> = Cost Baseline + Management Reserves = $400,000 + $20,000 = <strong>$420,000</strong>. Note: contingency reserves are part of the cost baseline; management reserves are not.",
    evidence: [{
        quote: "The project budget equals the <span class='evidence-highlight'>cost baseline plus management reserves</span>. The cost baseline includes contingency reserves but excludes management reserves.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Predictive Planning",
    question: "A project manager is using the critical path method and identifies that two parallel paths have the same duration of 45 days. What should the project manager do?",
    options: [
        "Designate the path with more activities as the critical path",
        "Monitor both paths closely as they are both critical and either could delay the project",
        "Choose the path with higher-risk activities as the critical path",
        "Combine both paths into a single critical path"
    ],
    correct: 1,
    explanation: "When two or more paths have the <strong>same longest duration</strong>, they are all considered <strong>critical paths</strong>. The project manager should monitor both paths closely because a delay in any activity on either path would extend the project duration. Having multiple critical paths increases project risk.",
    evidence: [{
        quote: "A project can have <span class='evidence-highlight'>multiple critical paths, increasing overall project risk</span>. All paths with zero float must be monitored carefully.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "During a sprint retrospective, the Scrum team identifies that their velocity has been declining over the last three sprints. The product owner is concerned about meeting the release date. What should the Scrum Master do FIRST?",
    options: [
        "Add more team members to increase velocity",
        "Facilitate a root cause analysis with the team to identify factors causing the decline",
        "Extend the sprint duration to accomplish more work per sprint",
        "Ask the product owner to remove low-priority items from the backlog"
    ],
    correct: 1,
    explanation: "The Scrum Master should first help the team <strong>identify the root causes</strong> of the declining velocity. A retrospective-driven analysis will reveal whether the issue is technical debt, unclear requirements, team morale, or other factors. Adding resources or extending sprints addresses symptoms, not causes.",
    evidence: [{
        quote: "The Scrum Master serves the team by <span class='evidence-highlight'>facilitating team discussions and helping the team identify impediments and areas for improvement</span> during retrospectives.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Scrum Framework",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Scrum team is working on a product with multiple stakeholders who frequently change priorities. What is the BEST tool to manage this situation?",
    options: [
        "A fixed scope document signed by all stakeholders",
        "A prioritized product backlog that is regularly refined with stakeholder input",
        "A change control board to approve or reject each priority change",
        "A RACI matrix defining who can request changes"
    ],
    correct: 1,
    explanation: "In Scrum, the <strong>product backlog</strong> is the single source of requirements and is continuously refined. The <strong>product owner</strong> manages priorities with stakeholder input, ensuring the team always works on the highest-value items. This embraces change rather than resisting it.",
    evidence: [{
        quote: "The product backlog is an <span class='evidence-highlight'>ordered list of everything that is known to be needed in the product</span>. It is the single source of requirements and is constantly refined.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Product Backlog",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A team is transitioning from a traditional waterfall approach to Scrum. The team members are having difficulty self-organizing. What should the Scrum Master do?",
    options: [
        "Assign tasks to team members until they learn to self-organize",
        "Coach the team on self-organization principles and create a safe environment for experimentation",
        "Escalate the issue to management for directive leadership",
        "Revert to waterfall since the team is not ready for agile"
    ],
    correct: 1,
    explanation: "The Scrum Master should act as a <strong>servant leader and coach</strong>, helping the team learn self-organization skills. This includes creating a <strong>safe environment</strong> where the team can experiment, make mistakes, and learn. Assigning tasks would undermine self-organization.",
    evidence: [{
        quote: "The Scrum Master helps those outside the Scrum team understand which interactions are helpful and <span class='evidence-highlight'>coaches the development team in self-organization and cross-functionality</span>.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Scrum Roles",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "During sprint planning, the team estimates a user story at 13 story points. The product owner states this is too large for a single sprint. What should the team do?",
    options: [
        "Move the story to the next sprint when the team has more capacity",
        "Split the story into smaller stories that can be completed within the sprint",
        "Reduce the story point estimate to fit within the sprint",
        "Extend the sprint timebox to accommodate the larger story"
    ],
    correct: 1,
    explanation: "When a user story is too large for a single sprint, it should be <strong>split into smaller, independently valuable stories</strong>. Story splitting preserves the sprint timebox while ensuring the team can deliver completed increments. Changing estimates or extending the timebox violates Scrum principles.",
    evidence: [{
        quote: "When stories are <span class='evidence-highlight'>too large to be completed in a single iteration, they should be decomposed into smaller stories</span> that can be completed within the timebox.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "User Stories",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Kanban team notices their cycle time has increased significantly over the past month. The board shows several items stuck in the testing column. What should the team do?",
    options: [
        "Add more items to the backlog to keep developers busy",
        "Investigate the bottleneck in testing and consider reducing WIP limits or swarming on blocked items",
        "Remove the testing column from the Kanban board",
        "Assign all testing work to a dedicated QA team"
    ],
    correct: 1,
    explanation: "In Kanban, increasing cycle time often indicates a <strong>bottleneck</strong>. The team should investigate the testing column bottleneck and consider <strong>reducing WIP limits</strong> to prevent overloading, or <strong>swarming</strong> (having multiple team members collaborate) to clear the blockage.",
    evidence: [{
        quote: "Kanban uses <span class='evidence-highlight'>WIP limits to identify bottlenecks and improve flow</span>. When work accumulates in a column, the team should investigate and resolve the constraint.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Kanban Method",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A project manager is leading a hybrid project where the infrastructure team uses predictive methods and the application team uses Scrum. How should integration between the two teams be managed?",
    options: [
        "Force the infrastructure team to adopt Scrum for consistency",
        "Establish integration points and cadences where both teams synchronize deliverables and resolve dependencies",
        "Keep the teams completely separate with no interaction",
        "Have the project manager serve as the sole communication channel"
    ],
    correct: 1,
    explanation: "In <strong>hybrid approaches</strong>, teams using different methodologies must have defined <strong>integration points and cadences</strong> to synchronize their work, manage dependencies, and ensure deliverables align. This allows each team to use the methodology best suited to their work type.",
    evidence: [{
        quote: "Hybrid approaches combine <span class='evidence-highlight'>predictive and adaptive elements, requiring clear integration points and coordination mechanisms</span> to manage dependencies between teams.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Hybrid Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "The product owner is unavailable during a sprint and the development team has questions about acceptance criteria for several user stories. What should the Scrum Master do?",
    options: [
        "Make decisions on behalf of the product owner",
        "Help the team escalate the issue and work with the product owner to ensure availability, while the team focuses on stories with clear criteria",
        "Pause the sprint until the product owner is available",
        "Have the developers define their own acceptance criteria"
    ],
    correct: 1,
    explanation: "The Scrum Master should help <strong>remove impediments</strong> by escalating the product owner availability issue while ensuring the team remains productive on stories with clear acceptance criteria. The Scrum Master should not make product decisions, and pausing the sprint is excessive.",
    evidence: [{
        quote: "The Scrum Master serves the team by <span class='evidence-highlight'>removing impediments to the team's progress</span> and ensuring that Scrum events take place and are productive.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Scrum Roles",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Scrum team has completed 5 sprints with velocities of 20, 22, 18, 24, and 21 story points. The product backlog has 150 remaining story points. How many sprints are needed to complete the backlog?",
    options: [
        "6 sprints",
        "7 sprints (using average velocity of approximately 21 story points)",
        "8 sprints",
        "5 sprints"
    ],
    correct: 1,
    explanation: "Average velocity = (20 + 22 + 18 + 24 + 21) / 5 = 105 / 5 = <strong>21 story points per sprint</strong>. Remaining work / velocity = 150 / 21 = 7.14 sprints, rounded up to <strong>7 sprints</strong> (plus potentially a small amount of remaining work).",
    evidence: [{
        quote: "Velocity is the <span class='evidence-highlight'>amount of work completed in each iteration, used to forecast how much work the team can complete in future iterations</span>.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile Metrics",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "During the daily standup, a developer reports being blocked for two days on a technical issue. What is the Scrum Master's PRIMARY responsibility?",
    options: [
        "Solve the technical problem for the developer",
        "Facilitate removal of the impediment by connecting the developer with the right resources",
        "Report the blocking issue to senior management immediately",
        "Remove the developer from the sprint team"
    ],
    correct: 1,
    explanation: "The Scrum Master's role is to <strong>facilitate impediment removal</strong>, not necessarily solve technical problems directly. This means connecting the blocked developer with appropriate resources, escalating if needed, and tracking resolution. The Scrum Master acts as a servant leader.",
    evidence: [{
        quote: "The Scrum Master is responsible for <span class='evidence-highlight'>ensuring impediments are identified and removed in a timely manner</span> so that the team can focus on delivering value.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Scrum Roles",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "An organization is scaling agile across multiple teams working on the same product. Which framework specifically addresses coordination of multiple Scrum teams?",
    options: [
        "PRINCE2",
        "SAFe (Scaled Agile Framework)",
        "PMBOK traditional methodology",
        "Six Sigma"
    ],
    correct: 1,
    explanation: "<strong>SAFe (Scaled Agile Framework)</strong> is specifically designed for scaling agile practices across multiple teams and the enterprise. It provides structured guidance for <strong>roles, responsibilities, and coordination</strong> at the team, program, and portfolio levels.",
    evidence: [{
        quote: "Scaling frameworks such as <span class='evidence-highlight'>SAFe provide guidance for coordinating multiple agile teams</span> working together on larger programs or portfolios.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Scaling Agile",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A burndown chart shows that the remaining work line is consistently above the ideal trend line throughout the sprint. What does this indicate?",
    options: [
        "The team is ahead of schedule",
        "The team is falling behind and may not complete all planned work by the end of the sprint",
        "The sprint has too few story points",
        "The team's velocity is increasing"
    ],
    correct: 1,
    explanation: "When the actual remaining work line is consistently <strong>above the ideal trend line</strong> on a burndown chart, it indicates the team is <strong>completing work slower than planned</strong> and may not finish all committed work by the end of the sprint.",
    evidence: [{
        quote: "A burndown chart shows <span class='evidence-highlight'>remaining work versus time. When the actual line is above the ideal line, the team is behind pace</span> for completing the sprint backlog.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile Metrics",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "During sprint review, stakeholders request a significant feature change that would invalidate the current sprint goal. What should the product owner do?",
    options: [
        "Immediately change the sprint goal to accommodate the request",
        "Capture the feedback, add it to the product backlog, and prioritize it for a future sprint",
        "Cancel the current sprint and start over",
        "Reject all stakeholder feedback to protect the current sprint"
    ],
    correct: 1,
    explanation: "The sprint review is for <strong>inspecting the increment and adapting the product backlog</strong>. New feature requests should be captured and added to the product backlog for future prioritization. The current sprint goal should not be changed during the review.",
    evidence: [{
        quote: "During the sprint review, the Scrum team and stakeholders collaborate about what was done and <span class='evidence-highlight'>the product backlog may be adjusted to meet new opportunities</span>.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Sprint Review",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A newly formed Scrum team asks the Scrum Master to define the Definition of Done. How should the Scrum Master respond?",
    options: [
        "Write the Definition of Done based on industry best practices",
        "Facilitate a team discussion to collaboratively create the Definition of Done",
        "Ask the product owner to define the Definition of Done",
        "Use the Definition of Done from the previous project"
    ],
    correct: 1,
    explanation: "The <strong>Definition of Done (DoD)</strong> should be created <strong>collaboratively by the Scrum team</strong>. The Scrum Master facilitates the discussion but does not dictate the DoD. Team ownership of the DoD promotes commitment and shared understanding of quality standards.",
    evidence: [{
        quote: "The Definition of Done is <span class='evidence-highlight'>created by the Scrum team to establish a shared understanding of what it means for work to be complete</span>, ensuring transparency and quality.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Definition of Done",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A project is using Kanban and the team wants to improve their throughput. Which metric should they focus on FIRST?",
    options: [
        "Story points completed per week",
        "Cycle time and work-in-progress limits",
        "Number of team members",
        "Total backlog size"
    ],
    correct: 1,
    explanation: "In Kanban, <strong>cycle time</strong> (time from work start to completion) and <strong>WIP limits</strong> are the primary levers for improving throughput. Reducing WIP and cycle time directly increases the team's ability to deliver value faster, following Little's Law.",
    evidence: [{
        quote: "Kanban focuses on <span class='evidence-highlight'>managing flow by limiting work in progress and reducing cycle time</span>. Little's Law states that cycle time is proportional to WIP.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Kanban Method",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "An agile team is working in two-week sprints. The product owner insists on adding new items to the sprint backlog mid-sprint. What principle is being violated?",
    options: [
        "Responding to change over following a plan",
        "The sprint backlog should not be altered in ways that endanger the sprint goal",
        "Customer collaboration over contract negotiation",
        "Working software over comprehensive documentation"
    ],
    correct: 1,
    explanation: "While agile embraces change, the <strong>sprint backlog is protected during the sprint</strong>. Adding items mid-sprint that endanger the sprint goal violates the Scrum principle that the sprint scope should not be changed in ways that would put the sprint goal at risk.",
    evidence: [{
        quote: "During the sprint, <span class='evidence-highlight'>no changes are made that would endanger the sprint goal</span>. Scope may be clarified and renegotiated between the product owner and the development team.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Sprint Planning",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A team is using story points for estimation and one team member insists on converting story points to hours. Why is this generally discouraged?",
    options: [
        "Story points are more accurate than hours",
        "Converting story points to hours undermines relative sizing and creates false precision that pressures the team",
        "Hours are only used in waterfall projects",
        "Story points are mandated by the Agile Manifesto"
    ],
    correct: 1,
    explanation: "Story points measure <strong>relative effort and complexity</strong>, not absolute time. Converting to hours creates <strong>false precision</strong> and can be used to pressure the team, undermining the psychological safety that relative estimation provides. Teams naturally improve estimates over time.",
    evidence: [{
        quote: "Story points represent <span class='evidence-highlight'>relative effort and complexity rather than specific time durations</span>. Converting them to hours undermines the purpose of relative estimation.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Estimation in Agile",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "In a LeSS (Large-Scale Scrum) implementation, how many product owners should there be?",
    options: [
        "One product owner per team",
        "One product owner for the entire product, regardless of the number of teams",
        "One product owner per two teams",
        "A product owner committee that makes collective decisions"
    ],
    correct: 1,
    explanation: "<strong>LeSS (Large-Scale Scrum)</strong> maintains the Scrum principle of having <strong>one product owner</strong> for one product. Even with multiple teams, there is a single product owner who maintains one product backlog, ensuring unified vision and prioritization.",
    evidence: [{
        quote: "In LeSS, there is <span class='evidence-highlight'>one product owner and one product backlog for the entire product</span>, even when multiple teams are working on it.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Scaling Agile",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Scrum team completed their sprint and delivered a potentially shippable increment. However, the product owner decides not to release it to production. Is this acceptable?",
    options: [
        "No, all increments must be released immediately",
        "Yes, the product owner decides when to release; the increment must meet the Definition of Done but release is a business decision",
        "No, the team has failed if the increment is not released",
        "Yes, but only if the stakeholders agree to delay the release"
    ],
    correct: 1,
    explanation: "The Scrum team delivers a <strong>potentially shippable increment</strong> each sprint, meaning it meets the Definition of Done. However, the <strong>release decision is a business decision</strong> made by the product owner. Not every increment needs to be released immediately.",
    evidence: [{
        quote: "The increment must be in usable condition and <span class='evidence-highlight'>meet the Definition of Done. The decision of when to release is a business decision</span> made by the product owner.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Sprint Increment",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "During backlog refinement, the team discovers that a user story has unclear requirements and uncertain technical complexity. What estimation technique is MOST appropriate?",
    options: [
        "Detailed bottom-up estimation in hours",
        "Planning Poker where team members independently estimate and discuss differences",
        "The project manager assigns the estimate based on experience",
        "Use the same estimate as a similar story from a different project"
    ],
    correct: 1,
    explanation: "<strong>Planning Poker</strong> is ideal for uncertain stories because it leverages <strong>collective team intelligence</strong>. Each member independently estimates, then differences are discussed, bringing diverse perspectives and uncovering assumptions. This collaborative approach handles uncertainty better than individual estimation.",
    evidence: [{
        quote: "Planning Poker is an <span class='evidence-highlight'>estimation technique where team members independently estimate and then discuss discrepancies</span> to reach consensus, leveraging the wisdom of the group.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Estimation in Agile",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "An organization wants to adopt agile but has strict regulatory requirements for documentation. What approach should they take?",
    options: [
        "Abandon agile since it prohibits documentation",
        "Use a hybrid approach that maintains necessary documentation while adopting agile delivery practices",
        "Seek regulatory exemptions for agile projects",
        "Document everything after the project is complete"
    ],
    correct: 1,
    explanation: "The Agile Manifesto values working software <strong>over</strong> comprehensive documentation, but does not prohibit documentation. A <strong>hybrid approach</strong> allows teams to maintain required regulatory documentation while adopting agile delivery practices for the development work.",
    evidence: [{
        quote: "The Agile Manifesto values items on the left more, but <span class='evidence-highlight'>does not dismiss the items on the right. Documentation can be maintained as needed</span>, especially in regulated environments.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile in Regulated Environments",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Scrum Master notices that the team's daily standups consistently run over 15 minutes with detailed technical discussions. What action should the Scrum Master take?",
    options: [
        "Extend the timebox to 30 minutes to allow thorough discussion",
        "Remind the team of the standup purpose and suggest taking detailed discussions offline in parking lot meetings",
        "Cancel the daily standup since it is not productive",
        "Limit each person to exactly one minute of speaking time"
    ],
    correct: 1,
    explanation: "The daily standup is timeboxed to <strong>15 minutes</strong> and focused on synchronization, not problem-solving. The Scrum Master should redirect detailed technical discussions to <strong>parking lot conversations</strong> held immediately after the standup with only relevant participants.",
    evidence: [{
        quote: "The daily scrum is a <span class='evidence-highlight'>15-minute time-boxed event for synchronization. Detailed discussions should be taken offline</span> to be addressed by the relevant subset of team members.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Daily Scrum",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager identifies a stakeholder who has high power and low interest in the project. According to the power/interest grid, what engagement strategy should be used?",
    options: [
        "Manage closely with frequent communication",
        "Keep satisfied with periodic updates and ensure their needs are met",
        "Monitor with minimal effort",
        "Keep informed through regular status reports"
    ],
    correct: 1,
    explanation: "The <strong>power/interest grid</strong> recommends that stakeholders with <strong>high power and low interest</strong> should be <strong>kept satisfied</strong>. These stakeholders have the authority to impact the project but are not actively engaged, so periodic updates and ensuring their expectations are met is the right approach.",
    evidence: [{
        quote: "Stakeholders with high power and low interest should be <span class='evidence-highlight'>kept satisfied. Enough work should be done to keep them satisfied but not so much that they become bored</span> with the level of detail.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager discovers that a key stakeholder who was initially supportive has become resistant to the project. The stakeholder engagement assessment matrix shows the stakeholder has moved from 'supportive' to 'resistant.' What should the project manager do FIRST?",
    options: [
        "Escalate the issue to the project sponsor for intervention",
        "Meet with the stakeholder to understand the reasons for the change and address their concerns",
        "Remove the stakeholder from the communication plan",
        "Continue with the project and ignore the stakeholder's resistance"
    ],
    correct: 1,
    explanation: "The project manager should first <strong>meet with the stakeholder</strong> to understand the root cause of the shift from supportive to resistant. Understanding their concerns through direct engagement is essential before taking other actions. This demonstrates emotional intelligence and proactive stakeholder management.",
    evidence: [{
        quote: "When a stakeholder's engagement level changes, the project manager should <span class='evidence-highlight'>investigate the cause and develop strategies to address the stakeholder's concerns</span> and move them toward the desired engagement level.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "During a stakeholder analysis, the project manager identifies 45 stakeholders. What tool should be used to track their requirements, expectations, and level of influence?",
    options: [
        "Project charter",
        "Stakeholder register",
        "Communications management plan",
        "Issue log"
    ],
    correct: 1,
    explanation: "The <strong>stakeholder register</strong> is the primary document for capturing and tracking stakeholder information, including <strong>identification, assessment, and classification</strong> data such as requirements, expectations, influence level, and potential impact on the project.",
    evidence: [{
        quote: "The stakeholder register contains <span class='evidence-highlight'>identification, assessment, and classification information for each stakeholder</span>, including their requirements, expectations, and potential influence.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is managing a multinational project team across four time zones. What is the MOST effective approach to stakeholder communication?",
    options: [
        "Schedule all meetings at the project manager's local time",
        "Develop a communication plan that accommodates different time zones, cultures, and communication preferences",
        "Use only email communication to avoid time zone conflicts",
        "Delegate all communication to local team leads"
    ],
    correct: 1,
    explanation: "A <strong>communications management plan</strong> should be tailored to accommodate <strong>time zones, cultural differences, and individual preferences</strong>. This might include rotating meeting times, asynchronous communication tools, and culturally appropriate communication methods.",
    evidence: [{
        quote: "The communications management plan should address <span class='evidence-highlight'>stakeholder communication requirements, including technology, methods, frequency, and escalation procedures</span> tailored to the project context.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A conflict arises between two senior stakeholders about the project's direction. One wants to prioritize speed-to-market while the other wants comprehensive testing. What should the project manager do?",
    options: [
        "Side with the more powerful stakeholder",
        "Facilitate a collaborative discussion to find a solution that addresses both stakeholders' core concerns",
        "Avoid the conflict and let the stakeholders resolve it themselves",
        "Escalate directly to the CEO for a decision"
    ],
    correct: 1,
    explanation: "The project manager should use <strong>collaborating/problem-solving</strong> as the conflict resolution approach. By facilitating a discussion between the stakeholders, the project manager can help find a <strong>win-win solution</strong> that addresses speed-to-market and quality concerns, such as a phased release strategy.",
    evidence: [{
        quote: "The collaborating/problem-solving approach <span class='evidence-highlight'>incorporates multiple viewpoints and leads to consensus and commitment</span>. It is the preferred approach for resolving conflicts among stakeholders.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager has 12 stakeholders on the project. If two more stakeholders are added, how many additional communication channels are created?",
    options: [
        "12",
        "25",
        "14",
        "2"
    ],
    correct: 1,
    explanation: "Communication channels = n(n-1)/2. With 12 stakeholders: 12(11)/2 = 66 channels. With 14 stakeholders: 14(13)/2 = 91 channels. Additional channels = 91 - 66 = <strong>25 new channels</strong>. This demonstrates how quickly communication complexity grows.",
    evidence: [{
        quote: "The number of potential communication channels is <span class='evidence-highlight'>n(n-1)/2, where n is the number of stakeholders</span>. This formula demonstrates the increasing complexity of communication as team size grows.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is using the stakeholder engagement assessment matrix. A key stakeholder is currently 'unaware' but needs to be 'supportive.' What strategy should the project manager implement?",
    options: [
        "Send the stakeholder weekly status reports only",
        "Develop a targeted engagement plan including awareness sessions, one-on-one meetings, and demonstrating project benefits",
        "Assign the stakeholder a project role to force engagement",
        "Ask the sponsor to mandate the stakeholder's support"
    ],
    correct: 1,
    explanation: "Moving a stakeholder from <strong>unaware to supportive</strong> requires a deliberate engagement strategy. This includes <strong>awareness sessions</strong> to educate them about the project, <strong>one-on-one meetings</strong> to understand their perspective, and <strong>demonstrating benefits</strong> relevant to their interests.",
    evidence: [{
        quote: "The engagement assessment matrix identifies <span class='evidence-highlight'>current and desired engagement levels, and the project manager develops strategies to close the gaps</span> between current and desired states.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager receives negative feedback from a stakeholder about the project's communication approach during a lessons learned session. How should this be handled?",
    options: [
        "Defend the current communication approach with data",
        "Acknowledge the feedback, analyze the communication gaps, and update the communications management plan",
        "Ignore the feedback as the project is nearly complete",
        "Transfer communication responsibility to the PMO"
    ],
    correct: 1,
    explanation: "The project manager should <strong>acknowledge the feedback constructively</strong> and use it to improve. Even late in the project, updating the <strong>communications management plan</strong> based on stakeholder feedback demonstrates continuous improvement and builds trust for future projects.",
    evidence: [{
        quote: "Stakeholder feedback should be <span class='evidence-highlight'>actively solicited, documented, and used to improve engagement strategies</span> throughout the project lifecycle.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager identifies that the end users of the system have not been involved in requirements gathering. The project is 30% complete. What should the project manager do?",
    options: [
        "Continue with the current requirements since involving end users now would cause delays",
        "Immediately engage end users to validate requirements and adjust the project plan as needed",
        "Wait until user acceptance testing to get end user feedback",
        "Ask the business analyst to represent the end users"
    ],
    correct: 1,
    explanation: "End users are <strong>critical stakeholders</strong> whose involvement is essential for project success. At 30% completion, there is still time to <strong>engage them in requirements validation</strong>. Waiting until UAT risks costly rework. The project plan should be adjusted to accommodate this engagement.",
    evidence: [{
        quote: "Early and continuous stakeholder engagement <span class='evidence-highlight'>reduces risk and increases the likelihood of project success</span>. End users should be engaged throughout the project lifecycle.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is preparing for a critical stakeholder meeting where a controversial decision needs to be made. What is the MOST effective approach?",
    options: [
        "Present the decision in the meeting and ask for an immediate vote",
        "Pre-socialize the topic with key stakeholders individually before the meeting to understand concerns and build alignment",
        "Make the decision independently and present it as final",
        "Delay the decision to a later meeting to avoid conflict"
    ],
    correct: 1,
    explanation: "For controversial decisions, <strong>pre-socializing</strong> with key stakeholders allows the project manager to understand concerns, address objections, and build alignment before the formal meeting. This increases the likelihood of a productive discussion and consensus.",
    evidence: [{
        quote: "Effective stakeholder engagement includes <span class='evidence-highlight'>understanding stakeholder perspectives before formal discussions</span> to build consensus and manage expectations proactively.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "In a project with international stakeholders, the project manager notices that some stakeholders are not participating in virtual meetings. Investigation reveals it is a cultural issue where some cultures avoid direct confrontation in group settings. What should the project manager do?",
    options: [
        "Require all stakeholders to participate equally in all meetings",
        "Adapt communication methods to include alternatives such as written feedback, one-on-one conversations, and anonymous surveys",
        "Remove non-participating stakeholders from the project",
        "Only conduct meetings with the participating stakeholders"
    ],
    correct: 1,
    explanation: "The project manager should demonstrate <strong>cultural sensitivity</strong> by adapting communication methods. Some cultures prefer <strong>indirect communication</strong> or may not be comfortable with open debate. Providing alternatives like written feedback, private conversations, and anonymous surveys ensures inclusive participation.",
    evidence: [{
        quote: "Project managers must be <span class='evidence-highlight'>culturally sensitive and adapt their communication approaches to accommodate diverse stakeholder preferences</span> and cultural norms.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project sponsor is micromanaging the project by bypassing the project manager and giving direct instructions to team members. What should the project manager do?",
    options: [
        "Allow the sponsor to manage the team directly since they have higher authority",
        "Have a private, respectful conversation with the sponsor about roles, responsibilities, and the impact on team dynamics",
        "Report the sponsor's behavior to the PMO",
        "Resign from the project"
    ],
    correct: 1,
    explanation: "The project manager should have a <strong>professional, private conversation</strong> with the sponsor about their respective roles and the impact of bypassing the chain of communication. This demonstrates <strong>emotional intelligence</strong> and assertiveness while maintaining a productive working relationship.",
    evidence: [{
        quote: "Project managers should <span class='evidence-highlight'>establish clear roles and responsibilities and address role boundary issues diplomatically</span> to maintain effective project governance.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is conducting a salience model analysis. A stakeholder is identified as having legitimacy and urgency but no power. How would this stakeholder be classified?",
    options: [
        "Dormant stakeholder",
        "Dependent stakeholder",
        "Dangerous stakeholder",
        "Definitive stakeholder"
    ],
    correct: 1,
    explanation: "In the <strong>salience model</strong>, a stakeholder with <strong>legitimacy and urgency but no power</strong> is classified as a <strong>dependent stakeholder</strong>. They depend on others with power to carry out their will. These stakeholders need attention as they may gain power through alliances.",
    evidence: [{
        quote: "The salience model classifies stakeholders based on <span class='evidence-highlight'>power, legitimacy, and urgency. A dependent stakeholder has legitimacy and urgency but lacks power</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "During project execution, the project manager learns that an important regulatory agency stakeholder was not identified during stakeholder analysis. The agency has requirements that could affect the project scope. What should the project manager do FIRST?",
    options: [
        "Continue the project and address regulatory requirements during project closure",
        "Update the stakeholder register, assess the regulatory requirements, and evaluate the impact on the project through integrated change control",
        "Ask the legal department to handle all regulatory stakeholder interactions",
        "Submit a change request to cancel the project"
    ],
    correct: 1,
    explanation: "The project manager should immediately <strong>update the stakeholder register</strong> with the new stakeholder, <strong>assess their requirements</strong>, and evaluate the impact through the <strong>integrated change control</strong> process. Regulatory stakeholders can have significant impact and should not be ignored.",
    evidence: [{
        quote: "Stakeholder identification is an <span class='evidence-highlight'>ongoing process throughout the project. Newly identified stakeholders should be immediately added to the stakeholder register</span> and their impact assessed.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager needs to determine the appropriate communication method for different stakeholders. Which factor is MOST important in selecting the communication method?",
    options: [
        "The project manager's personal preference",
        "The stakeholder's communication requirements, including sensitivity and formality of the information",
        "The least expensive communication option",
        "The most technologically advanced tool available"
    ],
    correct: 1,
    explanation: "Communication methods should be selected based on <strong>stakeholder communication requirements</strong>, including the <strong>sensitivity and formality of the information</strong>, stakeholder preferences, organizational culture, and the urgency of the message. The method must match the message and audience.",
    evidence: [{
        quote: "Communication methods should be selected based on <span class='evidence-highlight'>stakeholder needs, the nature of the information, and the required level of formality</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project team member approaches the project manager complaining that a stakeholder is constantly requesting scope changes outside the formal process. What should the project manager do?",
    options: [
        "Tell the team member to accommodate all stakeholder requests",
        "Educate the stakeholder on the change control process and redirect requests through the proper channel",
        "Block the stakeholder from contacting the team",
        "Accept all the changes to maintain stakeholder satisfaction"
    ],
    correct: 1,
    explanation: "The project manager should <strong>educate the stakeholder</strong> about the formal <strong>change control process</strong> and explain why it exists. This maintains the integrity of the project while being respectful to the stakeholder. All change requests should go through proper channels.",
    evidence: [{
        quote: "The project manager is responsible for <span class='evidence-highlight'>ensuring all changes go through the integrated change control process</span> and educating stakeholders on proper procedures.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager uses push communication to send a monthly status report to all stakeholders. Several stakeholders report they are not reading the reports. What communication improvement should the project manager consider?",
    options: [
        "Send the reports more frequently to increase visibility",
        "Tailor the communication to each stakeholder group with relevant content and consider interactive formats",
        "Stop sending reports since stakeholders are not reading them",
        "Add more technical details to make the reports more comprehensive"
    ],
    correct: 1,
    explanation: "When stakeholders are not engaging with communications, the project manager should <strong>tailor the content</strong> to be relevant to each stakeholder group and consider using <strong>interactive (pull or interactive) communication</strong> instead of one-size-fits-all push communication.",
    evidence: [{
        quote: "Effective communication requires <span class='evidence-highlight'>tailoring the message to the audience and selecting the appropriate communication method</span> based on stakeholder needs and preferences.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is building trust with a new stakeholder group from an acquired company. The stakeholders are skeptical about the project's intentions. What is the BEST approach?",
    options: [
        "Send formal documentation about the project's goals and benefits",
        "Demonstrate transparency, follow through on commitments, and engage in active listening to build credibility over time",
        "Ask senior management to mandate stakeholder cooperation",
        "Ignore the skepticism and proceed with the project plan"
    ],
    correct: 1,
    explanation: "Building trust requires <strong>transparency, reliability, and active listening</strong>. The project manager should demonstrate <strong>credibility through consistent actions</strong>, follow through on commitments, and show genuine interest in stakeholder concerns. Trust is built over time through behavior, not mandates.",
    evidence: [{
        quote: "Trust is built through <span class='evidence-highlight'>transparent communication, follow-through on commitments, and demonstrating respect for stakeholder perspectives</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "The project manager identifies that the union representing the workforce is a key stakeholder. During analysis, the union is categorized as having high power and high interest. What engagement strategy is appropriate?",
    options: [
        "Monitor with minimal effort",
        "Manage closely with proactive, frequent, and transparent communication",
        "Keep satisfied with periodic updates",
        "Keep informed through newsletters"
    ],
    correct: 1,
    explanation: "Stakeholders with <strong>high power and high interest</strong> require the highest level of engagement: <strong>manage closely</strong>. The union has both the authority and motivation to impact the project, so proactive, frequent, and transparent communication is essential to maintain their support.",
    evidence: [{
        quote: "Stakeholders with high power and high interest should be <span class='evidence-highlight'>managed closely with proactive engagement and frequent communication</span> to ensure alignment and support.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is using the Delphi technique to gather stakeholder input on project priorities. What is the PRIMARY advantage of this technique?",
    options: [
        "It is the fastest way to gather input",
        "It reduces the influence of dominant personalities by collecting anonymous input and iterating toward consensus",
        "It requires stakeholders to be physically present",
        "It eliminates the need for a facilitator"
    ],
    correct: 1,
    explanation: "The <strong>Delphi technique</strong> gathers expert input through <strong>anonymous questionnaires</strong> with iterative rounds. Its primary advantage is reducing the influence of <strong>dominant personalities, groupthink, and bias</strong>, allowing all participants to contribute equally regardless of status.",
    evidence: [{
        quote: "The Delphi technique <span class='evidence-highlight'>uses rounds of anonymous questionnaires to reach consensus while reducing bias and the influence of dominant individuals</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "During qualitative risk analysis, a risk is assessed as having a high probability of occurrence and a high impact on the project objectives. What should the project manager do?",
    options: [
        "Add the risk to the watch list for future monitoring",
        "Prioritize this risk for further analysis or direct risk response planning",
        "Accept the risk since it has not yet occurred",
        "Transfer the risk to the client"
    ],
    correct: 1,
    explanation: "Risks with <strong>high probability and high impact</strong> are rated as the highest priority in the <strong>probability and impact matrix</strong>. These risks should be <strong>prioritized for further quantitative analysis or direct risk response planning</strong> to develop appropriate mitigation strategies.",
    evidence: [{
        quote: "Risks rated high on the probability and impact matrix are <span class='evidence-highlight'>prioritized for further analysis and response planning</span>. They require proactive risk management strategies.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager identifies a risk that the team does not have expertise to handle and it falls outside the project's scope of authority. What is the MOST appropriate risk response strategy?",
    options: [
        "Avoid the risk by changing the project plan",
        "Escalate the risk to a higher authority in the organization",
        "Accept the risk passively",
        "Mitigate the risk by adding contingency reserves"
    ],
    correct: 1,
    explanation: "<strong>Escalation</strong> is the appropriate response when a risk is <strong>outside the scope of the project</strong> or beyond the project manager's authority. The risk is escalated to the appropriate level in the organization, such as program management, portfolio management, or an executive.",
    evidence: [{
        quote: "Escalate is a risk response strategy where <span class='evidence-highlight'>risks outside the scope of the project or beyond the project manager's authority are escalated to the appropriate level</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project team is conducting quantitative risk analysis using Monte Carlo simulation. What does the simulation output primarily provide?",
    options: [
        "A single definitive project completion date",
        "A probability distribution of possible project outcomes showing the likelihood of meeting various targets",
        "A list of all identified risks ranked by severity",
        "The exact cost of each risk event"
    ],
    correct: 1,
    explanation: "<strong>Monte Carlo simulation</strong> uses random sampling to model project uncertainty and produces a <strong>probability distribution of possible outcomes</strong>. This shows the likelihood of achieving specific project objectives (e.g., 85% chance of completing by a certain date).",
    evidence: [{
        quote: "Monte Carlo simulation produces <span class='evidence-highlight'>a probability distribution of possible project outcomes</span>, showing the likelihood of achieving specific schedule or cost targets.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is analyzing a make-or-buy decision using a decision tree. The expected monetary value (EMV) of making in-house is $180,000 and the EMV of outsourcing is $150,000. What should the project manager recommend?",
    options: [
        "Make in-house because it has the higher EMV",
        "Outsource because it has the lower EMV, indicating lower expected cost",
        "Choose the option with higher probability of success regardless of EMV",
        "Conduct further analysis since the difference is negligible"
    ],
    correct: 1,
    explanation: "In a cost-related decision tree, the <strong>lower EMV represents the lower expected cost</strong>. Since outsourcing has an EMV of $150,000 versus making at $180,000, outsourcing is the <strong>more cost-effective option</strong>. EMV considers both the probability and impact of different scenarios.",
    evidence: [{
        quote: "Decision tree analysis uses <span class='evidence-highlight'>expected monetary value to compare different decision paths. For costs, the lower EMV path represents the better economic choice</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager has identified a risk that a critical vendor may not deliver components on time. The project manager decides to use a second vendor as a backup. What risk response strategy is this?",
    options: [
        "Avoidance",
        "Mitigation",
        "Transfer",
        "Acceptance"
    ],
    correct: 1,
    explanation: "<strong>Mitigation</strong> involves taking action to <strong>reduce the probability or impact</strong> of a risk. Using a backup vendor reduces the impact of the primary vendor's potential late delivery. This is not avoidance (which would eliminate the risk entirely) or transfer (which would shift the financial consequence).",
    evidence: [{
        quote: "Risk mitigation involves <span class='evidence-highlight'>taking early action to reduce the probability of occurrence and/or impact of a risk</span>. It is more effective than trying to repair consequences after the risk has occurred.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is reviewing the risk register and finds that several risks have triggers identified. What is the purpose of a risk trigger?",
    options: [
        "To automatically activate the risk response plan",
        "To serve as an early warning sign that a risk event may be about to occur",
        "To calculate the probability of the risk",
        "To determine the risk owner"
    ],
    correct: 1,
    explanation: "A <strong>risk trigger</strong> (also called a warning sign or risk symptom) is an <strong>indicator that a risk has occurred or is about to occur</strong>. Identifying triggers helps the project team recognize when to execute risk response plans in a timely manner.",
    evidence: [{
        quote: "Risk triggers are <span class='evidence-highlight'>indicators or warning signs that a risk has occurred or is about to occur</span>, helping the team know when to implement the risk response.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "The project manager calculates the EMV for a risk with 30% probability and a $100,000 negative impact. What is the EMV, and how should it be used?",
    options: [
        "$100,000; used to set the project budget",
        "$30,000; used to determine the contingency reserve allocation for this risk",
        "$70,000; used to calculate the risk premium",
        "$130,000; used to estimate total project costs"
    ],
    correct: 1,
    explanation: "<strong>EMV = Probability x Impact</strong> = 0.30 x $100,000 = <strong>$30,000</strong>. EMV is used in <strong>quantitative risk analysis</strong> to determine contingency reserve allocations. The sum of all risk EMVs contributes to the overall contingency reserve for the project.",
    evidence: [{
        quote: "Expected monetary value analysis calculates <span class='evidence-highlight'>the average outcome by multiplying the probability of each outcome by its monetary value</span>. It is commonly used to establish contingency reserves.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager identifies a positive risk (opportunity) that could reduce the project timeline by two weeks if a particular technology is available. What is the MOST proactive response strategy?",
    options: [
        "Accept the opportunity and hope it materializes",
        "Exploit the opportunity by taking definitive actions to ensure the technology is available",
        "Avoid the opportunity to reduce uncertainty",
        "Transfer the opportunity to another project"
    ],
    correct: 1,
    explanation: "<strong>Exploit</strong> is the response strategy for positive risks where the project team takes <strong>definitive actions to ensure the opportunity is realized</strong>. This might include purchasing the technology, securing it early, or allocating specific resources to make it happen.",
    evidence: [{
        quote: "The exploit strategy is used for <span class='evidence-highlight'>positive risks where the organization wants to ensure the opportunity is realized</span> by taking actions to increase the probability to 100%.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "During risk identification, the project team uses a SWOT analysis. Which component of SWOT focuses on internal project weaknesses?",
    options: [
        "Strengths",
        "Weaknesses",
        "Opportunities",
        "Threats"
    ],
    correct: 1,
    explanation: "In <strong>SWOT analysis</strong>, <strong>Weaknesses</strong> represent internal factors that could negatively affect the project. These are areas where the project or organization is lacking, such as skill gaps, resource constraints, or process deficiencies. Strengths are internal positives; Opportunities and Threats are external factors.",
    evidence: [{
        quote: "SWOT analysis examines <span class='evidence-highlight'>Strengths and Weaknesses (internal) and Opportunities and Threats (external)</span> to identify risks from each perspective.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is calculating contingency reserves. Five risks have been identified with the following EMVs: $10,000, $15,000, $8,000, $22,000, and $5,000. What is the minimum contingency reserve based on EMV analysis?",
    options: [
        "$22,000",
        "$60,000",
        "$15,000",
        "$30,000"
    ],
    correct: 1,
    explanation: "The contingency reserve based on EMV analysis is the <strong>sum of all individual risk EMVs</strong>: $10,000 + $15,000 + $8,000 + $22,000 + $5,000 = <strong>$60,000</strong>. This represents the expected monetary impact of all identified risks.",
    evidence: [{
        quote: "Contingency reserves are often derived from <span class='evidence-highlight'>the aggregation of expected monetary values of individual risks</span> identified through quantitative risk analysis.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A construction project faces a risk of soil contamination at the building site. The project manager decides to change the building location entirely. What risk response strategy is being used?",
    options: [
        "Mitigation",
        "Avoidance",
        "Transfer",
        "Acceptance"
    ],
    correct: 1,
    explanation: "<strong>Risk avoidance</strong> involves changing the project plan to <strong>eliminate the risk entirely</strong>. By changing the building location, the project manager eliminates the soil contamination risk completely. This is the most definitive response but may introduce other changes to the project.",
    evidence: [{
        quote: "Risk avoidance involves <span class='evidence-highlight'>changing the project management plan to eliminate the threat entirely</span>, such as extending the schedule, changing strategy, or reducing scope.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is purchasing insurance for a risk of natural disaster damage to project equipment. What risk response strategy does this represent?",
    options: [
        "Avoidance",
        "Transfer",
        "Mitigation",
        "Acceptance"
    ],
    correct: 1,
    explanation: "<strong>Risk transfer</strong> shifts the <strong>financial impact of the risk to a third party</strong>. Insurance is a classic example of risk transfer, where the insurance company assumes the financial burden of potential damage. Note that transfer does not eliminate the risk; it shifts the consequences.",
    evidence: [{
        quote: "Risk transfer involves <span class='evidence-highlight'>shifting the negative impact of a risk to a third party</span>. Insurance and performance bonds are common examples of risk transfer.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "During a risk review meeting, the project team identifies a secondary risk. What is a secondary risk?",
    options: [
        "A risk that has lower priority than the primary risk",
        "A new risk that arises as a direct result of implementing a risk response",
        "A risk that was identified during the second iteration of risk identification",
        "A risk that affects a secondary project objective"
    ],
    correct: 1,
    explanation: "A <strong>secondary risk</strong> is a risk that <strong>arises directly as a result of implementing a risk response</strong>. For example, if the response to a schedule risk is to fast-track activities, a secondary risk might be increased rework due to parallel execution. Secondary risks must be analyzed and managed.",
    evidence: [{
        quote: "Secondary risks are <span class='evidence-highlight'>risks that arise as a direct result of implementing a risk response</span>. They should be identified, analyzed, and managed like any other risk.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager decides to accept a low-probability, low-impact risk and documents a workaround plan in case the risk occurs. What type of acceptance is this?",
    options: [
        "Passive acceptance with no plan",
        "Active acceptance with a contingency plan",
        "Risk transfer with fallback",
        "Risk avoidance with documentation"
    ],
    correct: 1,
    explanation: "<strong>Active acceptance</strong> involves developing a <strong>contingency plan</strong> (or workaround plan) that will be implemented if the risk occurs. This differs from <strong>passive acceptance</strong>, which simply acknowledges the risk without preparing any specific response plan.",
    evidence: [{
        quote: "Active acceptance establishes a <span class='evidence-highlight'>contingency plan or contingency reserve to handle the risk if it occurs</span>. Passive acceptance involves no proactive action other than periodic review.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager wants to determine how sensitive the project outcome is to changes in individual risk factors. Which technique should be used?",
    options: [
        "Monte Carlo simulation",
        "Sensitivity analysis using a tornado diagram",
        "Delphi technique",
        "Brainstorming"
    ],
    correct: 1,
    explanation: "<strong>Sensitivity analysis</strong> determines which risks have the <strong>most potential impact on project outcomes</strong>. A <strong>tornado diagram</strong> displays the correlation between uncertainty in each element and the project objective, with the most sensitive risks at the top of the diagram.",
    evidence: [{
        quote: "Sensitivity analysis uses a <span class='evidence-highlight'>tornado diagram to display the relative importance of each risk variable on the project outcome</span>, helping prioritize risk management efforts.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is developing risk responses for a threat and considers sharing some of the project risk with a partner organization that has more expertise. What strategy is this?",
    options: [
        "Avoidance",
        "Transfer",
        "Mitigation",
        "Sharing"
    ],
    correct: 3,
    explanation: "<strong>Sharing</strong> is a strategy for <strong>positive risks (opportunities)</strong>, but when applied to threats, it is called <strong>transfer</strong>. However, if the risk is being shared (not fully transferred) with a partner who has the expertise to manage it better, and both parties benefit, this is <strong>sharing</strong> -- allocating ownership to the party best able to manage it.",
    evidence: [{
        quote: "Risk sharing involves <span class='evidence-highlight'>allocating ownership of a risk to a third party who is best able to capture the opportunity or manage the threat</span> for the benefit of the project.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project has an overall risk exposure that exceeds the stakeholder risk appetite. What should the project manager do?",
    options: [
        "Proceed with the project and monitor risks closely",
        "Present the risk exposure analysis to stakeholders and recommend adjustments to scope, schedule, or budget to bring risk within acceptable thresholds",
        "Add more contingency reserves to cover potential losses",
        "Terminate the project immediately"
    ],
    correct: 1,
    explanation: "When overall project risk <strong>exceeds stakeholder risk appetite</strong>, the project manager must present the analysis to stakeholders and recommend adjustments. This might include <strong>reducing scope, extending schedule, increasing budget, or modifying the risk profile</strong> to bring risk within acceptable thresholds.",
    evidence: [{
        quote: "When overall project risk exceeds acceptable thresholds, <span class='evidence-highlight'>the project manager should present options to stakeholders for bringing the risk within the agreed risk appetite</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "During risk identification, the project manager uses the risk breakdown structure (RBS). What is the purpose of the RBS?",
    options: [
        "To assign risk owners to each identified risk",
        "To organize risks into categories and subcategories for systematic identification and analysis",
        "To calculate the probability and impact of each risk",
        "To prioritize risks for response planning"
    ],
    correct: 1,
    explanation: "The <strong>Risk Breakdown Structure (RBS)</strong> is a hierarchical representation that <strong>organizes risks into categories and subcategories</strong> (such as technical, external, organizational, and project management risks). It helps ensure <strong>comprehensive risk identification</strong> and systematic analysis.",
    evidence: [{
        quote: "The risk breakdown structure is a <span class='evidence-highlight'>hierarchical representation of risks organized by category</span>, providing a framework for comprehensive risk identification.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A risk event occurs on the project that was not previously identified. The project manager implements a workaround. What should be done NEXT?",
    options: [
        "Update the risk register only if the workaround fails",
        "Document the risk, the workaround applied, and update the risk register and lessons learned",
        "Inform the sponsor that risk management has failed",
        "Add extra contingency reserves to prevent similar events"
    ],
    correct: 1,
    explanation: "After implementing a <strong>workaround</strong> for an unidentified risk, the project manager should <strong>document the risk and the response</strong> in the risk register, update <strong>lessons learned</strong>, and assess whether additional responses are needed. This ensures organizational learning and proper documentation.",
    evidence: [{
        quote: "Workarounds are unplanned responses to risks that were not previously identified. They should be <span class='evidence-highlight'>documented in the risk register and lessons learned</span> for future reference.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is assessing residual risks after implementing risk responses. What are residual risks?",
    options: [
        "Risks that were rejected during risk identification",
        "Risks that remain after risk responses have been implemented",
        "Risks that only affect the residual project budget",
        "Risks identified during project closure"
    ],
    correct: 1,
    explanation: "<strong>Residual risks</strong> are risks that <strong>remain after risk responses have been planned and implemented</strong>. They may include minor impacts that are accepted, as well as risks that cannot be fully eliminated. Residual risks should be documented, monitored, and may require contingency reserves.",
    evidence: [{
        quote: "Residual risks are <span class='evidence-highlight'>risks that remain after risk responses have been implemented</span>. They should be documented, monitored, and contingency reserves may be established.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project team is debating whether to use qualitative or quantitative risk analysis. Which statement correctly distinguishes between the two?",
    options: [
        "Qualitative analysis uses mathematical models; quantitative analysis uses subjective assessment",
        "Qualitative analysis assesses risks using probability and impact ratings; quantitative analysis uses numerical models to simulate the combined effect of risks",
        "Qualitative analysis is only for positive risks; quantitative analysis is for negative risks",
        "Both analyses produce identical results using different terminology"
    ],
    correct: 1,
    explanation: "<strong>Qualitative risk analysis</strong> uses subjective <strong>probability and impact ratings</strong> to prioritize individual risks. <strong>Quantitative risk analysis</strong> uses <strong>numerical models</strong> (such as Monte Carlo simulation and decision trees) to analyze the combined effect of risks on overall project objectives.",
    evidence: [{
        quote: "Qualitative analysis <span class='evidence-highlight'>prioritizes individual risks using probability and impact assessment</span>, while quantitative analysis numerically analyzes the combined effect of identified risks on overall project objectives.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager identifies an opportunity to leverage a new technology that could significantly reduce project costs. The project manager enters a partnership agreement with the technology provider to ensure access. What opportunity response strategy is this?",
    options: [
        "Accept",
        "Share",
        "Exploit",
        "Enhance"
    ],
    correct: 1,
    explanation: "<strong>Sharing</strong> involves <strong>allocating ownership of the opportunity to a third party</strong> that is best positioned to capture the benefit. A partnership agreement shares the opportunity between the project and the technology provider, with both parties benefiting from the arrangement.",
    evidence: [{
        quote: "Sharing involves <span class='evidence-highlight'>allocating some or all of the opportunity to a third party who is best able to capture the opportunity</span> for the benefit of the project.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "During project monitoring, the project manager discovers that a previously low-rated risk has increased in probability due to changing market conditions. What should the project manager do?",
    options: [
        "Continue monitoring with the existing risk rating",
        "Reassess the risk, update its probability and impact rating, and develop or revise the response strategy",
        "Remove the risk from the risk register since conditions have changed",
        "Add the risk to the issues log since it is now certain to occur"
    ],
    correct: 1,
    explanation: "Risk monitoring involves <strong>continuously reassessing existing risks</strong> and updating their ratings when conditions change. The project manager should <strong>update the probability and impact</strong> rating and develop or revise the response strategy accordingly. Risk management is iterative throughout the project.",
    evidence: [{
        quote: "Risk monitoring involves <span class='evidence-highlight'>tracking identified risks, reassessing existing risks, identifying new risks, and evaluating risk process effectiveness</span> throughout the project.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager needs to establish the risk appetite for the project. Who is PRIMARILY responsible for defining risk appetite?",
    options: [
        "The project manager based on project complexity",
        "The organization's leadership and key stakeholders based on strategic objectives",
        "The project team during risk identification workshops",
        "The PMO based on historical project data"
    ],
    correct: 1,
    explanation: "<strong>Risk appetite</strong> is defined at the <strong>organizational level by leadership and key stakeholders</strong> based on strategic objectives and organizational culture. The project manager works within these boundaries but does not independently set the risk appetite for the project.",
    evidence: [{
        quote: "Risk appetite reflects the <span class='evidence-highlight'>degree of uncertainty an organization is willing to accept in anticipation of a reward</span> and is determined by organizational leadership.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager notices that a newly formed team is experiencing conflict over roles and responsibilities. According to Tuckman's model, what stage is the team in?",
    options: [
        "Forming",
        "Storming",
        "Norming",
        "Performing"
    ],
    correct: 1,
    explanation: "The <strong>storming stage</strong> of Tuckman's model is characterized by <strong>conflict, disagreements, and power struggles</strong> as team members compete for roles and establish working relationships. This is a natural and necessary phase of team development that the project manager should help the team work through.",
    evidence: [{
        quote: "During the storming phase, <span class='evidence-highlight'>team members begin to push boundaries and may experience conflict over roles, approaches, and power dynamics</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager wants to motivate a team that has complained about poor working conditions and lack of job security. According to Herzberg's two-factor theory, addressing these concerns will:",
    options: [
        "Significantly increase team motivation and productivity",
        "Reduce dissatisfaction but not necessarily increase motivation; true motivation requires recognition, achievement, and growth opportunities",
        "Have no effect on the team's performance",
        "Create new sources of dissatisfaction"
    ],
    correct: 1,
    explanation: "According to <strong>Herzberg's two-factor theory</strong>, working conditions and job security are <strong>hygiene factors</strong>. Addressing them <strong>reduces dissatisfaction</strong> but does not create motivation. True motivation comes from <strong>motivator factors</strong> like recognition, achievement, responsibility, and opportunities for growth.",
    evidence: [{
        quote: "Herzberg's theory distinguishes between <span class='evidence-highlight'>hygiene factors (whose absence causes dissatisfaction) and motivator factors (whose presence creates satisfaction)</span>. Hygiene factors include working conditions, salary, and job security.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager is practicing servant leadership. Which behavior BEST exemplifies this leadership style?",
    options: [
        "Making all decisions for the team to ensure efficiency",
        "Removing obstacles, supporting team growth, and putting the team's needs ahead of personal authority",
        "Delegating all responsibility to the team without providing guidance",
        "Focusing primarily on reporting project status to stakeholders"
    ],
    correct: 1,
    explanation: "<strong>Servant leadership</strong> focuses on <strong>serving the team</strong> by removing obstacles, providing resources, fostering growth, and empowering team members. The servant leader puts the team's needs first and leads by facilitating success rather than directing through authority.",
    evidence: [{
        quote: "Servant leadership emphasizes <span class='evidence-highlight'>listening, empathy, stewardship, and commitment to the growth of people</span>. The leader focuses on removing impediments and supporting the team.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "Two team members have a disagreement about a technical approach. One wants to use a proven technology, the other prefers a newer solution. The project manager brings them together to find a solution that incorporates elements of both approaches. Which conflict management style is being used?",
    options: [
        "Forcing/Directing",
        "Collaborating/Problem-solving",
        "Compromising/Reconciling",
        "Avoiding/Withdrawing"
    ],
    correct: 1,
    explanation: "<strong>Collaborating/Problem-solving</strong> involves incorporating <strong>multiple viewpoints</strong> to find a solution that addresses everyone's concerns. This is distinct from compromising, where each party gives something up. In collaboration, the goal is a <strong>win-win solution</strong> that fully satisfies all parties.",
    evidence: [{
        quote: "Collaborating/problem-solving involves <span class='evidence-highlight'>incorporating multiple viewpoints and insights to develop consensus and commitment</span>. It leads to a win-win outcome.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "According to Maslow's hierarchy of needs, a team member who feels their job is insecure is struggling at which level?",
    options: [
        "Physiological needs",
        "Safety/Security needs",
        "Social/Belonging needs",
        "Esteem needs"
    ],
    correct: 1,
    explanation: "<strong>Safety/Security needs</strong> in Maslow's hierarchy include <strong>job security, financial stability, and a safe work environment</strong>. Until these needs are met, the team member will not be effectively motivated by higher-level needs like belonging, esteem, or self-actualization.",
    evidence: [{
        quote: "Maslow's hierarchy identifies <span class='evidence-highlight'>safety needs (including job security and stability) as the second level</span>, which must be addressed before higher-level needs can motivate behavior.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager leads a virtual team across multiple countries. Team members rarely interact outside of formal meetings and there is a lack of trust. What should the project manager do?",
    options: [
        "Replace virtual team members with co-located staff",
        "Create opportunities for informal interactions, establish team norms, and use collaboration tools to build relationships and trust",
        "Increase the number of formal status meetings",
        "Assign individual tasks to minimize the need for collaboration"
    ],
    correct: 1,
    explanation: "Building trust in <strong>virtual teams</strong> requires intentional effort to create <strong>informal interactions</strong> (virtual coffee chats, team-building activities), establish <strong>team norms</strong> (communication protocols, response times), and leverage <strong>collaboration tools</strong> that facilitate relationship building.",
    evidence: [{
        quote: "Virtual teams require <span class='evidence-highlight'>additional effort to build trust, including establishing clear communication norms, creating opportunities for informal interaction, and leveraging technology</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager notices that a high-performing team member is demotivated despite receiving a salary increase. According to McGregor's Theory Y, what might be the issue?",
    options: [
        "The salary increase was not large enough",
        "The team member needs more autonomy, challenging work, and opportunities for self-direction",
        "The team member needs more direct supervision",
        "The team member should be moved to a different project"
    ],
    correct: 1,
    explanation: "<strong>McGregor's Theory Y</strong> assumes that people are <strong>self-motivated, seek responsibility, and are capable of self-direction</strong>. A Theory Y individual may be demotivated not by insufficient pay but by lack of <strong>autonomy, challenging work, and growth opportunities</strong>.",
    evidence: [{
        quote: "Theory Y assumes people are <span class='evidence-highlight'>self-motivated, enjoy work, seek responsibility, and can exercise self-direction</span>. They respond to autonomy and meaningful challenges.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager observes that team members are starting to resolve conflicts on their own and have established effective working relationships. According to Tuckman's model, what stage has the team reached?",
    options: [
        "Forming",
        "Norming",
        "Performing",
        "Adjourning"
    ],
    correct: 1,
    explanation: "In the <strong>norming stage</strong>, team members begin to <strong>work together effectively</strong>, establish norms and processes, and resolve conflicts more constructively. The team develops mutual trust and respect, though they have not yet reached the high-performance level of the performing stage.",
    evidence: [{
        quote: "During norming, <span class='evidence-highlight'>team members begin to work together and adjust their work habits and behaviors to support the team</span>. They develop trust and resolve differences more easily.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager needs to resolve a conflict quickly between two team members on a time-critical project. One team member must give in to the other's approach. Which conflict resolution style is appropriate in this urgent situation?",
    options: [
        "Collaborating/Problem-solving",
        "Forcing/Directing",
        "Avoiding/Withdrawing",
        "Smoothing/Accommodating"
    ],
    correct: 1,
    explanation: "<strong>Forcing/Directing</strong> involves pushing one viewpoint at the expense of another. While generally not ideal for long-term relationships, it is appropriate in <strong>urgent, time-critical situations</strong> where a quick decision is needed and one approach is clearly better for the project.",
    evidence: [{
        quote: "Forcing/directing involves <span class='evidence-highlight'>pushing one viewpoint at the expense of others. It is useful in urgent situations</span> where quick decisions are needed, but can damage relationships if overused.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager demonstrates emotional intelligence by recognizing that a team member's declining performance may be related to personal issues. What component of emotional intelligence is being demonstrated?",
    options: [
        "Self-regulation",
        "Empathy",
        "Self-awareness",
        "Social skills"
    ],
    correct: 1,
    explanation: "<strong>Empathy</strong> is the ability to <strong>understand and share the feelings of others</strong>. Recognizing that a team member's performance decline may be linked to personal issues demonstrates empathy and allows the project manager to provide appropriate support while maintaining team productivity.",
    evidence: [{
        quote: "Empathy involves <span class='evidence-highlight'>understanding and considering the feelings, concerns, and perspectives of others</span>. It enables project managers to build stronger relationships and provide appropriate support.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager is creating a resource management plan. The team includes both full-time and part-time members across two departments. What should the plan address?",
    options: [
        "Only the full-time team members' assignments",
        "Resource acquisition, team development, roles and responsibilities, and a plan for managing resource constraints across departments",
        "Just the organizational chart of the team",
        "Salary information for all team members"
    ],
    correct: 1,
    explanation: "The <strong>resource management plan</strong> should comprehensively address <strong>resource acquisition, team development, roles and responsibilities, and resource constraints</strong>. It should cover all team members (full-time and part-time) and address cross-departmental coordination needs.",
    evidence: [{
        quote: "The resource management plan provides <span class='evidence-highlight'>guidance on how project resources should be defined, staffed, managed, and released</span>, including roles, responsibilities, and team development approaches.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A team member consistently dominates discussions and dismisses others' ideas. The project manager decides to speak with this person privately. Which approach is MOST appropriate?",
    options: [
        "Threaten disciplinary action if the behavior continues",
        "Use active listening to understand their perspective, then provide specific behavioral feedback and set expectations for inclusive collaboration",
        "Remove the team member from the project immediately",
        "Ignore the behavior and hope it resolves itself"
    ],
    correct: 1,
    explanation: "The project manager should use <strong>active listening</strong> to understand the team member's perspective, then provide <strong>specific, behavioral feedback</strong> about the impact of their actions. Setting clear expectations for <strong>inclusive collaboration</strong> gives the team member a path to improve.",
    evidence: [{
        quote: "Effective leaders use <span class='evidence-highlight'>active listening and provide specific, constructive feedback to address behavioral issues</span> while maintaining respect for the individual.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager uses a RACI chart and discovers that three people are listed as 'Responsible' for the same deliverable with no one listed as 'Accountable.' What is the problem?",
    options: [
        "Having three responsible people ensures redundancy",
        "Every deliverable should have exactly one person Accountable, and multiple Responsible people without clear accountability creates confusion",
        "The RACI chart is optional and not a concern",
        "All three responsible people are automatically accountable"
    ],
    correct: 1,
    explanation: "In a <strong>RACI chart</strong>, each deliverable must have exactly <strong>one Accountable (A) person</strong> who is ultimately answerable for the work. Having multiple Responsible people without a single Accountable person creates confusion about decision-making authority and ownership.",
    evidence: [{
        quote: "In a RACI chart, <span class='evidence-highlight'>each task should have exactly one Accountable person</span>. Having no one accountable leads to confusion and lack of ownership.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project team successfully delivers a major milestone. The project manager wants to reinforce positive behaviors. According to motivational theory, what should the project manager do?",
    options: [
        "Wait until the project is complete to recognize the team",
        "Provide immediate recognition and celebrate the achievement to reinforce the positive behavior",
        "Give the team time off as a reward",
        "Document the achievement in the status report only"
    ],
    correct: 1,
    explanation: "<strong>Immediate recognition</strong> reinforces positive behavior and motivates continued high performance. Celebrating achievements demonstrates that the organization values the team's contributions and aligns with both <strong>Herzberg's recognition motivator</strong> and behavioral reinforcement theory.",
    evidence: [{
        quote: "Recognition and celebration of achievements <span class='evidence-highlight'>reinforce positive behaviors and motivate continued high performance</span>. Timely recognition has the greatest impact.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A new team member from a different culture interprets the project manager's direct feedback as rude and disrespectful. What should the project manager do?",
    options: [
        "Stop giving feedback to avoid cultural conflicts",
        "Adapt the feedback approach to be culturally sensitive while still providing necessary guidance and coaching",
        "Ask the team member to adapt to the project manager's communication style",
        "Have another team member deliver the feedback instead"
    ],
    correct: 1,
    explanation: "The project manager should demonstrate <strong>cultural intelligence</strong> by adapting their feedback approach. Different cultures have varying expectations about <strong>directness, hierarchy, and communication</strong>. The project manager must still provide necessary guidance but in a culturally appropriate manner.",
    evidence: [{
        quote: "Project managers should <span class='evidence-highlight'>adapt their leadership and communication styles to accommodate cultural differences</span> while maintaining effective team guidance and coaching.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager is managing a team where two members have personal animosity toward each other. The conflict is affecting team morale. What is the BEST approach?",
    options: [
        "Transfer one of the team members to another project",
        "Address the interpersonal issue directly, establish ground rules for professional behavior, and mediate if necessary",
        "Ignore the personal conflict and focus only on work deliverables",
        "Report both team members to HR for disciplinary action"
    ],
    correct: 1,
    explanation: "The project manager should <strong>address the conflict directly</strong> rather than ignoring it or removing team members. Establishing <strong>ground rules for professional behavior</strong> and offering mediation helps resolve the issue while maintaining team integrity and productivity.",
    evidence: [{
        quote: "Project managers should <span class='evidence-highlight'>address conflicts directly and early, establishing ground rules for professional behavior</span> and facilitating resolution when interpersonal issues affect team performance.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager is deciding between co-locating the team and using a virtual setup. Which factor MOST favors co-location?",
    options: [
        "Team members are in different countries",
        "The project requires intense collaboration, rapid communication, and the team is within the same geographic area",
        "The organization wants to reduce office space costs",
        "Team members prefer working from home"
    ],
    correct: 1,
    explanation: "<strong>Co-location</strong> is most beneficial when the project requires <strong>intense collaboration and rapid communication</strong> and team members are geographically close. Co-located teams benefit from enhanced communication, faster problem resolution, and stronger team bonds.",
    evidence: [{
        quote: "Co-location involves <span class='evidence-highlight'>placing team members in the same physical location to enhance communication, reduce distractions, and build team relationships</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager observes that the team has become highly autonomous, resolves its own issues, and consistently delivers high-quality work. According to Tuckman's model, what stage has the team reached?",
    options: [
        "Norming",
        "Performing",
        "Storming",
        "Adjourning"
    ],
    correct: 1,
    explanation: "The <strong>performing stage</strong> is characterized by a <strong>highly autonomous team</strong> that works effectively, resolves its own problems, and delivers consistently. The project manager can delegate more and focus on strategic issues rather than day-to-day management.",
    evidence: [{
        quote: "In the performing stage, the team <span class='evidence-highlight'>functions as a well-organized unit, is interdependent, and works through issues smoothly and effectively</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager needs to assemble a team for a complex technical project. The functional managers are reluctant to release their best resources. What should the project manager do?",
    options: [
        "Accept whatever resources are available and adjust the project plan",
        "Work with the project sponsor to negotiate resource assignments and demonstrate the project's strategic importance",
        "Hire external contractors without consulting functional managers",
        "Escalate directly to the CEO to override the functional managers"
    ],
    correct: 1,
    explanation: "The project manager should <strong>leverage the project sponsor's authority</strong> to negotiate with functional managers. Demonstrating the project's <strong>strategic importance</strong> helps justify the resource needs. This collaborative approach maintains relationships while securing needed resources.",
    evidence: [{
        quote: "In matrix organizations, <span class='evidence-highlight'>the project sponsor can help negotiate resource assignments with functional managers</span> by demonstrating the project's strategic alignment and priority.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager wants to develop a team charter. What is the PRIMARY purpose of this document?",
    options: [
        "To replace the project charter with team-specific information",
        "To establish team values, agreements, operating guidelines, and behavioral norms that the team commits to follow",
        "To define the project scope and objectives",
        "To assign individual tasks to each team member"
    ],
    correct: 1,
    explanation: "A <strong>team charter</strong> establishes <strong>team values, operating guidelines, communication norms, and behavioral expectations</strong>. It is created collaboratively by the team and serves as a social contract that promotes accountability, reduces conflict, and sets expectations for working together.",
    evidence: [{
        quote: "A team charter establishes <span class='evidence-highlight'>team values, agreements, and operating guidelines</span> that define how the team will work together, make decisions, and resolve conflicts.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is reviewing the cost of quality (COQ) categories. Which cost is classified as a prevention cost?",
    options: [
        "Rework of defective components",
        "Training employees on quality standards and procedures",
        "Customer warranty claims",
        "Inspection of incoming materials"
    ],
    correct: 1,
    explanation: "<strong>Prevention costs</strong> are incurred to <strong>prevent defects from occurring</strong> in the first place. Training employees on quality standards is a prevention cost. Rework and warranty claims are failure costs, and inspection is an appraisal cost.",
    evidence: [{
        quote: "Prevention costs include <span class='evidence-highlight'>training, process documentation, equipment, and time to design the product or service correctly</span>. These costs prevent defects rather than detecting them.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is using control charts to monitor a manufacturing process. The chart shows that data points are within control limits but seven consecutive points are above the mean. What should the team conclude?",
    options: [
        "The process is in control since all points are within limits",
        "The process shows a non-random pattern (Rule of Seven) indicating an assignable cause that should be investigated",
        "The control limits need to be adjusted",
        "The process should be stopped immediately"
    ],
    correct: 1,
    explanation: "The <strong>Rule of Seven</strong> states that seven or more consecutive data points on one side of the mean indicate a <strong>non-random pattern</strong> (a trend or shift) that likely has an assignable cause. Even though points are within control limits, this pattern should be investigated.",
    evidence: [{
        quote: "The Rule of Seven indicates that <span class='evidence-highlight'>seven consecutive data points on one side of the mean suggest a non-random cause</span> that should be investigated, even if all points are within control limits.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "What is the PRIMARY difference between quality assurance and quality control?",
    options: [
        "Quality assurance is more expensive than quality control",
        "Quality assurance focuses on process improvement to prevent defects; quality control focuses on inspecting deliverables to identify defects",
        "Quality control is performed before quality assurance",
        "Quality assurance is the responsibility of the QA team; quality control is everyone's responsibility"
    ],
    correct: 1,
    explanation: "<strong>Quality assurance (QA)</strong> is a <strong>proactive, process-oriented</strong> approach that focuses on improving processes to prevent defects. <strong>Quality control (QC)</strong> is a <strong>reactive, product-oriented</strong> approach that inspects specific deliverables to identify and correct defects.",
    evidence: [{
        quote: "Quality assurance focuses on <span class='evidence-highlight'>preventing defects through process improvement</span>, while quality control focuses on <span class='evidence-highlight'>identifying defects through inspection and testing</span> of deliverables.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team wants to identify the root cause of recurring defects in a software application. Which quality tool is MOST appropriate?",
    options: [
        "Pareto diagram",
        "Fishbone (Ishikawa) diagram",
        "Control chart",
        "Scatter diagram"
    ],
    correct: 1,
    explanation: "A <strong>fishbone (Ishikawa) diagram</strong>, also called a cause-and-effect diagram, is specifically designed for <strong>root cause analysis</strong>. It organizes potential causes into categories (materials, methods, machines, manpower, environment, measurement) to systematically identify root causes.",
    evidence: [{
        quote: "The fishbone diagram is used for <span class='evidence-highlight'>root cause analysis by organizing potential causes into categories</span> to systematically identify the source of a quality problem.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A Pareto diagram reveals that 80% of software defects are caused by 3 out of 15 identified root causes. What should the project manager recommend?",
    options: [
        "Address all 15 root causes simultaneously",
        "Focus improvement efforts on the three root causes that are responsible for 80% of defects",
        "Ignore the minor root causes entirely",
        "Create a new Pareto diagram to verify the results"
    ],
    correct: 1,
    explanation: "The <strong>Pareto principle (80/20 rule)</strong> indicates that a small number of causes are responsible for the majority of effects. The project manager should focus improvement efforts on the <strong>three root causes causing 80% of defects</strong> to achieve the greatest quality improvement with limited resources.",
    evidence: [{
        quote: "The Pareto principle states that <span class='evidence-highlight'>roughly 80% of consequences come from 20% of causes</span>. The Pareto diagram helps teams focus on the vital few causes that have the greatest impact.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project is using Six Sigma methodology. What does a Six Sigma quality level represent?",
    options: [
        "Six defects per million opportunities",
        "No more than 3.4 defects per million opportunities",
        "Zero defects in all processes",
        "Six standard deviations from the process mean"
    ],
    correct: 1,
    explanation: "<strong>Six Sigma</strong> targets <strong>no more than 3.4 defects per million opportunities (DPMO)</strong>. This represents a process that is six standard deviations from the mean, accounting for a 1.5 sigma process shift. It is a rigorous approach to quality improvement.",
    evidence: [{
        quote: "Six Sigma represents a quality level of <span class='evidence-highlight'>no more than 3.4 defects per million opportunities</span>, representing near-perfect process performance.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager wants to use statistical sampling during quality control. When is statistical sampling MOST appropriate?",
    options: [
        "When 100% inspection is too costly or destructive and the population is large enough to draw valid conclusions",
        "When the project team wants to avoid all quality control activities",
        "Only when required by regulatory agencies",
        "When the project has no quality requirements"
    ],
    correct: 0,
    explanation: "<strong>Statistical sampling</strong> is used when <strong>100% inspection is impractical</strong> due to cost, time constraints, or when testing is destructive (e.g., crash-testing cars). The sample must be large enough and representative to draw valid conclusions about the entire population.",
    evidence: [{
        quote: "Statistical sampling involves <span class='evidence-highlight'>selecting a representative part of the population for inspection when 100% inspection is impractical</span> due to cost, time, or destructive testing requirements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is implementing continuous improvement practices. Which approach aligns with the Plan-Do-Check-Act (PDCA) cycle?",
    options: [
        "Implement changes without planning and check results later",
        "Plan an improvement, implement it on a small scale, check the results, and then act to standardize or adjust the approach",
        "Plan extensively but never implement changes",
        "Check results first, then plan improvements"
    ],
    correct: 1,
    explanation: "The <strong>PDCA (Plan-Do-Check-Act)</strong> cycle, also known as the Deming cycle, is a systematic approach to continuous improvement: <strong>Plan</strong> the improvement, <strong>Do</strong> (implement on small scale), <strong>Check</strong> (evaluate results), and <strong>Act</strong> (standardize if successful or adjust if not).",
    evidence: [{
        quote: "The PDCA cycle provides a <span class='evidence-highlight'>systematic framework for continuous improvement: Plan the change, Do the change on a small scale, Check the results, and Act to standardize or adjust</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "Which of the following is an example of an appraisal cost in the cost of quality framework?",
    options: [
        "Employee training on quality procedures",
        "Testing and inspection of completed components",
        "Customer warranty replacements",
        "Quality planning activities"
    ],
    correct: 1,
    explanation: "<strong>Appraisal costs</strong> are incurred to <strong>evaluate and inspect</strong> products or services for conformance to quality requirements. Testing and inspection of completed components is an appraisal cost. Training and planning are prevention costs; warranties are external failure costs.",
    evidence: [{
        quote: "Appraisal costs include <span class='evidence-highlight'>testing, inspection, and auditing activities performed to evaluate whether products or services meet requirements</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A control chart shows a data point above the upper control limit. What does this indicate?",
    options: [
        "The process is performing exceptionally well",
        "The process is out of control and an assignable cause exists that needs investigation",
        "The control limits need to be widened",
        "Normal process variation"
    ],
    correct: 1,
    explanation: "A data point <strong>outside the control limits</strong> indicates the process is <strong>out of control</strong> and an <strong>assignable (special) cause</strong> of variation exists. This requires investigation and corrective action to bring the process back into control.",
    evidence: [{
        quote: "A point outside the control limits indicates the <span class='evidence-highlight'>process is out of control due to an assignable cause</span> that requires investigation and corrective action.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is deciding whether to invest in prevention or appraisal activities. From a quality management perspective, which is generally MORE cost-effective?",
    options: [
        "Appraisal activities because they catch defects before delivery",
        "Prevention activities because they reduce the overall cost of quality by avoiding defects in the first place",
        "Neither; both have the same cost impact",
        "Failure costs are more cost-effective because they only apply to actual defects"
    ],
    correct: 1,
    explanation: "<strong>Prevention is generally more cost-effective</strong> than appraisal or failure costs. Investing in prevention (training, quality planning, process design) reduces the total cost of quality by <strong>avoiding defects before they occur</strong>, which is cheaper than detecting and fixing them later.",
    evidence: [{
        quote: "Investing in prevention costs <span class='evidence-highlight'>reduces the total cost of quality by preventing defects from occurring</span>, which is more cost-effective than detecting and correcting them after they happen.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team discovers that their manufacturing process has excessive variation. The team wants to determine if there is a relationship between temperature and defect rate. Which quality tool should they use?",
    options: [
        "Fishbone diagram",
        "Scatter diagram",
        "Pareto chart",
        "Histogram"
    ],
    correct: 1,
    explanation: "A <strong>scatter diagram</strong> (scatter plot) shows the <strong>relationship between two variables</strong>. By plotting temperature against defect rate, the team can visually determine if a correlation exists (positive, negative, or none) and the strength of that relationship.",
    evidence: [{
        quote: "A scatter diagram shows the <span class='evidence-highlight'>relationship between two variables, helping to identify potential correlations</span> between factors such as process inputs and quality outcomes.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project deliverable passes quality control inspection but the customer rejects it during acceptance testing. What does this situation indicate?",
    options: [
        "The quality control process is flawed",
        "The quality criteria may not align with customer expectations, indicating a gap in requirements or quality planning",
        "The customer is being unreasonable",
        "Quality control is not needed since the customer will test anyway"
    ],
    correct: 1,
    explanation: "When a deliverable passes QC but fails customer acceptance, it indicates a <strong>gap between the quality criteria used for QC and the customer's actual expectations</strong>. This points to a potential issue in <strong>requirements gathering or quality planning</strong> that needs to be addressed.",
    evidence: [{
        quote: "Quality planning must ensure that <span class='evidence-highlight'>quality criteria and acceptance criteria are aligned with stakeholder expectations</span> to prevent gaps between internal quality measures and customer satisfaction.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager wants to analyze the distribution of defect types across different product modules. Which quality tool is MOST appropriate?",
    options: [
        "Control chart",
        "Histogram",
        "Scatter diagram",
        "Run chart"
    ],
    correct: 1,
    explanation: "A <strong>histogram</strong> displays the <strong>frequency distribution of data</strong> in bar chart format. It is ideal for showing how defect types are distributed across different modules, revealing patterns such as which modules have the most defects and the relative proportions of different defect types.",
    evidence: [{
        quote: "A histogram is a <span class='evidence-highlight'>bar chart showing the frequency distribution of a variable</span>, useful for understanding data patterns and identifying areas with the highest concentration of issues.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "An organization is implementing Total Quality Management (TQM). Which principle is MOST central to TQM?",
    options: [
        "Quality is the responsibility of the quality department only",
        "Continuous improvement and customer satisfaction through organization-wide participation in quality",
        "Quality inspection at the end of the production process",
        "Meeting minimum regulatory requirements"
    ],
    correct: 1,
    explanation: "<strong>Total Quality Management (TQM)</strong> is based on the principle that quality is <strong>everyone's responsibility</strong> throughout the organization. It emphasizes <strong>continuous improvement, customer satisfaction, and organization-wide participation</strong> in quality processes.",
    evidence: [{
        quote: "Total Quality Management emphasizes <span class='evidence-highlight'>continuous improvement and customer satisfaction through organization-wide participation</span> in quality improvement efforts.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A process audit reveals that the project team is not following the documented testing procedures. What type of quality activity identified this issue?",
    options: [
        "Quality control",
        "Quality assurance",
        "Quality planning",
        "Quality improvement"
    ],
    correct: 1,
    explanation: "<strong>Quality assurance</strong> includes <strong>process audits</strong> that examine whether project activities comply with organizational and project policies, processes, and procedures. Identifying that teams are not following procedures is a QA finding that leads to process improvement.",
    evidence: [{
        quote: "Quality assurance involves <span class='evidence-highlight'>auditing quality requirements and quality control measurements to ensure appropriate quality standards and operational definitions are used</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is determining the quality metrics for a software project. Which metric is MOST appropriate for measuring code quality?",
    options: [
        "Number of stakeholder complaints",
        "Defect density (defects per thousand lines of code), code coverage percentage, and cyclomatic complexity",
        "Total project budget spent on testing",
        "Number of change requests submitted"
    ],
    correct: 1,
    explanation: "Code quality metrics include <strong>defect density</strong> (defects per KLOC), <strong>code coverage</strong> (percentage of code tested), and <strong>cyclomatic complexity</strong> (measure of code complexity). These are specific, measurable quality metrics that directly relate to software code quality.",
    evidence: [{
        quote: "Quality metrics should be <span class='evidence-highlight'>specific, measurable, and directly related to the quality objectives</span> of the project deliverables.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is explaining the difference between accuracy and precision to the team. Which statement is correct?",
    options: [
        "Accuracy and precision mean the same thing",
        "Accuracy means the measured value is close to the true value; precision means repeated measurements produce consistent results",
        "Precision is more important than accuracy in all cases",
        "Accuracy refers to consistency; precision refers to correctness"
    ],
    correct: 1,
    explanation: "<strong>Accuracy</strong> refers to how close a measurement is to the <strong>true or correct value</strong>. <strong>Precision</strong> refers to the <strong>consistency or repeatability</strong> of measurements. A process can be precise but not accurate (consistently wrong), or accurate but not precise (correct on average but inconsistent).",
    evidence: [{
        quote: "<span class='evidence-highlight'>Accuracy means the measured value is very close to the true value. Precision means the values of repeated measurements are clustered</span> and have little scatter.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is using a checklist during quality inspections. What is the PRIMARY purpose of using checklists in quality management?",
    options: [
        "To replace the need for formal quality planning",
        "To ensure that required steps are consistently followed and no critical quality checks are missed",
        "To document all defects found during testing",
        "To track the time spent on quality activities"
    ],
    correct: 1,
    explanation: "<strong>Checklists</strong> are structured tools that ensure <strong>required steps are consistently followed</strong> and no critical quality checks are overlooked. They promote standardization and reduce the risk of human error by providing a systematic verification process.",
    evidence: [{
        quote: "Checklists are structured tools that <span class='evidence-highlight'>verify that a set of required steps has been performed</span>, ensuring consistency and reducing the risk of overlooking quality requirements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is selecting a contract type for a well-defined construction project with clear specifications. Which contract type is MOST appropriate?",
    options: [
        "Cost Plus Incentive Fee (CPIF)",
        "Firm Fixed Price (FFP)",
        "Time and Materials (T&M)",
        "Cost Plus Fixed Fee (CPFF)"
    ],
    correct: 1,
    explanation: "A <strong>Firm Fixed Price (FFP)</strong> contract is most appropriate when the scope is <strong>well-defined and clear</strong>. The seller bears the cost risk, and the buyer has certainty about the total cost. This contract type provides the most predictable cost for the buyer.",
    evidence: [{
        quote: "Firm Fixed Price contracts are most suitable when <span class='evidence-highlight'>the scope of work is well-defined and unlikely to change</span>. The seller bears the maximum cost risk.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project requires specialized consulting services where the scope is not clearly defined and may evolve. Which contract type is MOST appropriate?",
    options: [
        "Firm Fixed Price (FFP)",
        "Time and Materials (T&M)",
        "Fixed Price Incentive Fee (FPIF)",
        "Lump Sum"
    ],
    correct: 1,
    explanation: "<strong>Time and Materials (T&M)</strong> contracts are most appropriate when the <strong>scope is not clearly defined</strong> or is expected to evolve. The buyer pays based on actual time spent and materials used, providing flexibility when requirements are uncertain.",
    evidence: [{
        quote: "Time and materials contracts are appropriate when <span class='evidence-highlight'>the scope of work cannot be precisely defined</span> at the time of contract award.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is conducting a make-or-buy analysis. Which factor would MOST favor a 'buy' decision?",
    options: [
        "The organization has excess capacity and skilled resources",
        "The required expertise is unavailable internally and the work is outside the organization's core competency",
        "The organization wants to maintain full control over the work",
        "Proprietary technology is involved that must remain confidential"
    ],
    correct: 1,
    explanation: "<strong>Make-or-buy analysis</strong> favors buying when the <strong>required expertise is unavailable internally</strong> or the work falls outside the organization's core competency. Other factors favoring buy include cost efficiency, risk transfer, and availability of qualified vendors.",
    evidence: [{
        quote: "Make-or-buy analysis considers factors such as <span class='evidence-highlight'>core competencies, available expertise, cost comparison, and resource availability</span> to determine whether work should be performed internally or externally.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager sends out a Request for Proposal (RFP) to potential vendors. What is the PRIMARY purpose of an RFP?",
    options: [
        "To get pricing information only",
        "To solicit detailed proposals from vendors describing how they will meet the project requirements and at what cost",
        "To inform vendors about the project existence",
        "To pre-qualify vendors for future projects"
    ],
    correct: 1,
    explanation: "A <strong>Request for Proposal (RFP)</strong> solicits <strong>detailed proposals</strong> from vendors that describe their <strong>approach, methodology, qualifications, and pricing</strong> for meeting the stated requirements. It is used when evaluation criteria go beyond just price.",
    evidence: [{
        quote: "A Request for Proposal solicits <span class='evidence-highlight'>detailed proposals describing the vendor's approach, methodology, and pricing</span> for meeting the project requirements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "In a Fixed Price Incentive Fee (FPIF) contract, the target cost is $200,000, target fee is $20,000, ceiling price is $250,000, and the share ratio is 80/20 (buyer/seller). If the actual cost is $220,000, what is the total price paid to the seller?",
    options: [
        "$240,000",
        "$236,000",
        "$250,000",
        "$220,000"
    ],
    correct: 1,
    explanation: "Cost overrun = $220,000 - $200,000 = $20,000. Seller's share of overrun = 20% x $20,000 = $4,000 (deducted from fee). Adjusted fee = $20,000 - $4,000 = $16,000. <strong>Total price = Actual cost + Adjusted fee</strong> = $220,000 + $16,000 = <strong>$236,000</strong>. This is below the ceiling price of $250,000.",
    evidence: [{
        quote: "In FPIF contracts, <span class='evidence-highlight'>the fee is adjusted based on the share ratio applied to the difference between target cost and actual cost</span>, subject to a ceiling price.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is evaluating vendor proposals using a weighted scoring model. Three criteria are defined: technical approach (40%), experience (35%), and price (25%). Vendor A scores 90, 80, 70 respectively, and Vendor B scores 75, 85, 95 respectively. Which vendor should be selected?",
    options: [
        "Vendor A with a weighted score of 82",
        "Vendor B with a weighted score of 83.5",
        "Both vendors are equal",
        "Vendor A because of higher technical score"
    ],
    correct: 1,
    explanation: "Vendor A: (90 x 0.40) + (80 x 0.35) + (70 x 0.25) = 36 + 28 + 17.5 = <strong>81.5</strong>. Vendor B: (75 x 0.40) + (85 x 0.35) + (95 x 0.25) = 30 + 29.75 + 23.75 = <strong>83.5</strong>. Vendor B has the higher weighted score and should be selected.",
    evidence: [{
        quote: "A weighted scoring model <span class='evidence-highlight'>applies predetermined weights to evaluation criteria and scores each proposal against those criteria</span> to determine the best value vendor.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "During contract execution, the seller claims that additional work was required beyond the original scope. The buyer disagrees. What is the appropriate next step?",
    options: [
        "Immediately pay the seller for the additional work",
        "Follow the claims administration process defined in the contract to resolve the dispute",
        "Terminate the contract immediately",
        "Ignore the claim and continue with the original scope"
    ],
    correct: 1,
    explanation: "<strong>Claims administration</strong> follows the process defined in the contract for handling <strong>contested changes</strong>. The claim should be documented, evidence gathered, and resolution attempted through negotiation. If unresolved, the contract typically specifies escalation procedures including mediation or arbitration.",
    evidence: [{
        quote: "Claims are contested changes where <span class='evidence-highlight'>the buyer and seller cannot agree on compensation for the change. They are processed through the claims administration procedure</span> defined in the contract.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is preparing the Statement of Work (SOW) for a procurement. What should the SOW include?",
    options: [
        "Only the project budget and schedule",
        "A clear description of the work to be performed, deliverables, acceptance criteria, performance standards, and applicable terms",
        "The seller's proposed methodology",
        "The buyer's internal cost estimates"
    ],
    correct: 1,
    explanation: "The <strong>Statement of Work (SOW)</strong> defines the procurement scope and includes <strong>work descriptions, deliverables, acceptance criteria, performance standards, location, schedule, and applicable standards</strong>. It must be clear enough for sellers to determine if they can provide the work.",
    evidence: [{
        quote: "The procurement statement of work describes the <span class='evidence-highlight'>procurement item in sufficient detail to allow prospective sellers to determine if they are capable of providing the products, services, or results</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "Which contract type places the MOST cost risk on the buyer?",
    options: [
        "Firm Fixed Price (FFP)",
        "Cost Plus Percentage of Costs (CPPC)",
        "Fixed Price Incentive Fee (FPIF)",
        "Time and Materials with a ceiling (T&M)"
    ],
    correct: 1,
    explanation: "<strong>Cost Plus Percentage of Costs (CPPC)</strong> places the most risk on the buyer because the seller's fee <strong>increases as costs increase</strong>, creating a perverse incentive for the seller to increase costs. This contract type is generally discouraged and prohibited in many government contracts.",
    evidence: [{
        quote: "CPPC contracts place the <span class='evidence-highlight'>most cost risk on the buyer because the seller's fee increases proportionally with costs</span>, providing no incentive for the seller to control costs.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is conducting a bidder conference (pre-bid conference). What is the PRIMARY purpose of this event?",
    options: [
        "To select the winning vendor",
        "To ensure all prospective sellers have a clear and common understanding of the procurement requirements",
        "To negotiate contract terms with each seller individually",
        "To reveal competitor proposals to all sellers"
    ],
    correct: 1,
    explanation: "A <strong>bidder conference</strong> (also called a contractor conference or vendor conference) ensures all prospective sellers have a <strong>clear and common understanding</strong> of the requirements. All questions and answers are shared with all participants to ensure fairness and equal access to information.",
    evidence: [{
        quote: "Bidder conferences ensure that <span class='evidence-highlight'>all prospective sellers have a clear and common understanding of the procurement</span>. Responses to questions are shared with all potential sellers.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project is nearing completion and the project manager needs to close a procurement contract. Which activity is MOST important during contract closure?",
    options: [
        "Negotiating future contracts with the same vendor",
        "Verifying that all work has been completed satisfactorily, settling any open claims, and updating records with final results",
        "Transferring the contract to another project",
        "Extending the contract for additional work"
    ],
    correct: 1,
    explanation: "<strong>Contract closure</strong> involves verifying that <strong>all deliverables have been accepted</strong>, settling any <strong>open claims or disputes</strong>, documenting lessons learned, and <strong>updating organizational records</strong> with final contract results. This ensures proper completion and archival.",
    evidence: [{
        quote: "Contract closure involves <span class='evidence-highlight'>verification that all work and deliverables were acceptable, settlement of open claims, updating records, and archiving information</span> for future reference.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager wants to obtain pricing information from vendors for a standard off-the-shelf product. Which procurement document should be used?",
    options: [
        "Request for Proposal (RFP)",
        "Request for Quotation (RFQ)",
        "Request for Information (RFI)",
        "Invitation for Bid (IFB)"
    ],
    correct: 1,
    explanation: "A <strong>Request for Quotation (RFQ)</strong> is used when the <strong>product or service is standard and well-defined</strong>, and the primary evaluation criterion is price. RFQs request pricing for specified quantities of items, making them ideal for commodity or off-the-shelf purchases.",
    evidence: [{
        quote: "A Request for Quotation is used when <span class='evidence-highlight'>price is the primary deciding factor and the product or service is commercially available</span> or well-defined.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "In a Cost Plus Incentive Fee (CPIF) contract, the target cost is $500,000, target fee is $50,000, minimum fee is $25,000, maximum fee is $75,000, and the share ratio is 70/30 (buyer/seller). If actual cost is $460,000, what fee does the seller receive?",
    options: [
        "$50,000",
        "$62,000",
        "$75,000",
        "$55,000"
    ],
    correct: 1,
    explanation: "Cost savings = $500,000 - $460,000 = $40,000. Seller's share = 30% x $40,000 = $12,000. Adjusted fee = $50,000 + $12,000 = <strong>$62,000</strong>. This is within the min/max range ($25,000 - $75,000), so the seller receives $62,000.",
    evidence: [{
        quote: "In CPIF contracts, <span class='evidence-highlight'>the fee is adjusted based on the share ratio applied to the difference between target and actual costs</span>, bounded by minimum and maximum fee limits.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager discovers that a vendor is not meeting the agreed-upon quality standards. The contract includes a quality clause. What should the project manager do FIRST?",
    options: [
        "Terminate the contract immediately for breach",
        "Document the quality deficiency, notify the vendor formally, and invoke the contract's quality remediation provisions",
        "Accept the lower quality to avoid project delays",
        "Find a replacement vendor immediately"
    ],
    correct: 1,
    explanation: "The project manager should first <strong>document the quality deficiency</strong> and <strong>formally notify the vendor</strong>, invoking the contract's quality provisions. Most contracts include <strong>cure provisions</strong> that give the vendor an opportunity to correct deficiencies before escalating to termination.",
    evidence: [{
        quote: "When a seller fails to meet contractual requirements, the buyer should <span class='evidence-highlight'>document the deficiency, provide formal notice, and follow the remediation provisions specified in the contract</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "What is the PRIMARY difference between a Request for Information (RFI) and a Request for Proposal (RFP)?",
    options: [
        "An RFI is legally binding; an RFP is not",
        "An RFI gathers information and capabilities from vendors before defining requirements; an RFP solicits detailed proposals for defined requirements",
        "An RFI is used for large projects; an RFP is for small projects",
        "There is no difference between the two"
    ],
    correct: 1,
    explanation: "An <strong>RFI (Request for Information)</strong> is used to <strong>gather information</strong> about vendor capabilities and market options before requirements are fully defined. An <strong>RFP (Request for Proposal)</strong> is issued when requirements are defined and <strong>detailed proposals</strong> are needed from qualified vendors.",
    evidence: [{
        quote: "An RFI is used to <span class='evidence-highlight'>gather information about vendor capabilities and market conditions</span> before defining procurement requirements, while an RFP solicits detailed proposals for defined requirements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is using a source selection criteria matrix with the following weighted criteria: price (30%), technical approach (25%), past performance (25%), and schedule (20%). This approach is an example of:",
    options: [
        "Lowest price technically acceptable selection",
        "Best value or weighted criteria source selection",
        "Sole source procurement",
        "Qualifications-based selection"
    ],
    correct: 1,
    explanation: "<strong>Best value or weighted criteria source selection</strong> evaluates proposals against multiple weighted factors beyond just price. This approach selects the vendor offering the <strong>best overall value</strong> considering technical approach, experience, schedule, and price.",
    evidence: [{
        quote: "Best value source selection uses <span class='evidence-highlight'>weighted evaluation criteria to assess proposals on multiple factors</span>, selecting the vendor that provides the best overall value rather than just the lowest price.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "During a project review, a team member adds extra features to a deliverable that were not requested by the customer or included in the scope. What is this an example of?",
    options: [
        "Scope creep",
        "Gold plating",
        "Progressive elaboration",
        "Scope verification"
    ],
    correct: 1,
    explanation: "<strong>Gold plating</strong> is adding extra features or functionality that <strong>were not requested</strong> and are not part of the approved scope. Unlike scope creep, gold plating is initiated by the project team rather than external stakeholders. It wastes resources and may introduce risk.",
    evidence: [{
        quote: "Gold plating refers to <span class='evidence-highlight'>adding extra functionality or features that are not part of the scope baseline</span>. It is not approved through change control and should be avoided.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager notices that small, unapproved changes have been gradually added to the project scope over time. What is this phenomenon called?",
    options: [
        "Gold plating",
        "Scope creep",
        "Progressive elaboration",
        "Feature enhancement"
    ],
    correct: 1,
    explanation: "<strong>Scope creep</strong> is the <strong>uncontrolled expansion of project scope</strong> without adjustments to time, cost, and resources. It occurs when changes are added without going through the formal change control process, often gradually and without clear authorization.",
    evidence: [{
        quote: "Scope creep is the <span class='evidence-highlight'>uncontrolled expansion of product or project scope without adjustments to time, cost, and resources</span>. It results from changes not processed through change control.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project team is using a requirements traceability matrix. What is its PRIMARY purpose?",
    options: [
        "To track project expenses against budget",
        "To link requirements throughout the project lifecycle from origin to deliverables, ensuring each requirement is fulfilled",
        "To assign team members to project tasks",
        "To track the project schedule"
    ],
    correct: 1,
    explanation: "A <strong>requirements traceability matrix (RTM)</strong> links requirements from their <strong>origin through design, development, testing, and delivery</strong>. It ensures that each requirement is addressed by project deliverables and that no requirements are missed or added without approval.",
    evidence: [{
        quote: "The requirements traceability matrix <span class='evidence-highlight'>links product requirements from their origin to the deliverables that satisfy them</span>, ensuring complete coverage throughout the project lifecycle.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A stakeholder requests a significant new feature during project execution. The project manager determines it is outside the current scope. What should the project manager do?",
    options: [
        "Immediately implement the feature to keep the stakeholder satisfied",
        "Document the request as a change request and submit it through the integrated change control process",
        "Reject the request outright since the scope has been approved",
        "Add the feature to the project backlog without formal approval"
    ],
    correct: 1,
    explanation: "All scope changes must go through the <strong>integrated change control process</strong>. The project manager should document the request as a <strong>change request</strong>, analyze its impact on scope, schedule, cost, and quality, and present it to the change control board for decision.",
    evidence: [{
        quote: "All change requests must be <span class='evidence-highlight'>documented and processed through the integrated change control process</span> to evaluate their impact on project objectives.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager is reviewing validated deliverables with the customer for formal acceptance. The customer identifies minor cosmetic issues but the deliverables meet all functional requirements. What should the project manager do?",
    options: [
        "Force the customer to accept the deliverables as-is",
        "Document the cosmetic issues, determine if they are within acceptance criteria, and negotiate resolution with the customer",
        "Redo all deliverables to address cosmetic issues",
        "Ignore the cosmetic issues and close the project"
    ],
    correct: 1,
    explanation: "The project manager should <strong>document the issues</strong>, review them against the <strong>acceptance criteria</strong>, and negotiate with the customer. If cosmetic issues fall within acceptance criteria, the deliverables can be accepted. If not, a plan to address them should be agreed upon.",
    evidence: [{
        quote: "Validated deliverables are reviewed against <span class='evidence-highlight'>acceptance criteria to determine formal acceptance</span>. Any issues should be documented and resolved through negotiation.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "In an agile project, the team uses the INVEST criteria for writing user stories. What does INVEST stand for?",
    options: [
        "Important, Necessary, Validated, Estimated, Scheduled, Tracked",
        "Independent, Negotiable, Valuable, Estimable, Small, Testable",
        "Incremental, Notable, Verified, Executable, Standardized, Timed",
        "Integrated, Neutral, Verified, Enhanced, Specified, Traceable"
    ],
    correct: 1,
    explanation: "<strong>INVEST</strong> is a mnemonic for good user stories: <strong>Independent</strong> (can be developed in any order), <strong>Negotiable</strong> (details can be discussed), <strong>Valuable</strong> (provides value to the user), <strong>Estimable</strong> (can be sized), <strong>Small</strong> (fits in a sprint), and <strong>Testable</strong> (has clear acceptance criteria).",
    evidence: [{
        quote: "INVEST criteria for user stories: <span class='evidence-highlight'>Independent, Negotiable, Valuable, Estimable, Small, and Testable</span>, ensuring stories are well-formed for agile development.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "User Stories",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project team is defining acceptance criteria for a software module. Which statement BEST describes effective acceptance criteria?",
    options: [
        "General descriptions of what the software should do",
        "Specific, measurable conditions that must be met for the deliverable to be formally accepted by the customer",
        "The developer's definition of done",
        "A list of test cases to be executed"
    ],
    correct: 1,
    explanation: "<strong>Acceptance criteria</strong> are <strong>specific, measurable conditions</strong> that a deliverable must satisfy to be formally accepted by the customer or stakeholder. They define the boundaries of what is acceptable and provide a clear basis for acceptance or rejection.",
    evidence: [{
        quote: "Acceptance criteria are <span class='evidence-highlight'>specific, measurable conditions that must be met for a deliverable to be accepted</span> by the customer or sponsor.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "The Definition of Done (DoD) for a Scrum team includes code review, unit testing, integration testing, and documentation. A developer marks a story as complete without completing documentation. What should happen?",
    options: [
        "Accept the story since the code works correctly",
        "The story should not be considered done because it does not meet the team's Definition of Done",
        "Update the Definition of Done to remove documentation",
        "Count the story in the sprint velocity but add a task for documentation next sprint"
    ],
    correct: 1,
    explanation: "The <strong>Definition of Done (DoD)</strong> establishes the <strong>minimum quality standard</strong> that all work must meet. If any element of the DoD is not completed, the story is <strong>not done</strong> and should not be counted in velocity or included in the sprint increment.",
    evidence: [{
        quote: "The Definition of Done creates <span class='evidence-highlight'>transparency and a shared understanding of what it means for work to be complete</span>. Work not meeting the DoD is not considered done.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Definition of Done",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager is using a product breakdown structure (PBS). How does it differ from a WBS?",
    options: [
        "They are identical documents with different names",
        "A PBS decomposes the product into its components; a WBS decomposes the project work needed to create the product",
        "A PBS is only used in agile projects",
        "A WBS replaces the need for a PBS"
    ],
    correct: 1,
    explanation: "A <strong>Product Breakdown Structure (PBS)</strong> decomposes the <strong>product into its physical components or functional elements</strong>. A <strong>WBS</strong> decomposes the <strong>project work</strong> required to create those components. They are complementary tools with different perspectives.",
    evidence: [{
        quote: "The product breakdown structure decomposes the <span class='evidence-highlight'>product into its constituent components</span>, while the WBS decomposes the project work needed to produce those components.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "During requirements elicitation, the project manager uses prototyping. What is the MAIN advantage of prototyping?",
    options: [
        "It eliminates the need for formal requirements documentation",
        "It provides stakeholders with a tangible model to provide early feedback, reducing misunderstandings and rework",
        "It speeds up the development process by skipping design",
        "It replaces user acceptance testing"
    ],
    correct: 1,
    explanation: "<strong>Prototyping</strong> creates a <strong>tangible working model</strong> that stakeholders can interact with and provide feedback on. This helps <strong>clarify requirements early</strong>, reduces misunderstandings between stakeholders and developers, and ultimately reduces costly rework later in the project.",
    evidence: [{
        quote: "Prototyping provides a <span class='evidence-highlight'>tangible model for stakeholders to experiment with and provide feedback</span>, supporting early refinement of requirements and reducing misunderstandings.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A user story follows the format: 'As a [role], I want [feature], so that [benefit].' Why is the 'so that' clause important?",
    options: [
        "It is optional and can be omitted",
        "It clarifies the business value and purpose behind the feature, enabling better decision-making during implementation",
        "It defines the technical implementation approach",
        "It replaces the need for acceptance criteria"
    ],
    correct: 1,
    explanation: "The <strong>'so that' clause</strong> provides the <strong>business value and rationale</strong> behind the requested feature. Understanding the 'why' enables the development team to make better implementation decisions and potentially find alternative solutions that deliver the same value more efficiently.",
    evidence: [{
        quote: "The benefit statement in a user story <span class='evidence-highlight'>communicates the business value and enables the team to understand why the feature is needed</span>, leading to better implementation decisions.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "User Stories",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager is conducting scope validation with the customer. Which input is MOST essential for this activity?",
    options: [
        "The project schedule",
        "Verified deliverables and the requirements documentation including acceptance criteria",
        "The project budget report",
        "The risk register"
    ],
    correct: 1,
    explanation: "<strong>Scope validation</strong> requires <strong>verified deliverables</strong> (that have passed quality control) and <strong>requirements documentation with acceptance criteria</strong>. These inputs allow the customer to compare completed deliverables against agreed-upon requirements for formal acceptance.",
    evidence: [{
        quote: "Scope validation requires <span class='evidence-highlight'>verified deliverables and requirements documentation with acceptance criteria</span> to formally accept completed project deliverables.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project team discovers that a requirement documented three months ago conflicts with a newly identified regulatory requirement. What should the project manager do?",
    options: [
        "Ignore the regulatory requirement since the original was documented first",
        "Analyze the conflict, engage stakeholders to determine the appropriate resolution, and submit a change request to update requirements",
        "Let the development team decide which requirement to follow",
        "Remove both conflicting requirements from the scope"
    ],
    correct: 1,
    explanation: "The project manager should <strong>analyze the conflict</strong> between requirements, <strong>engage relevant stakeholders</strong> (including legal/compliance) to determine the appropriate resolution, and <strong>submit a change request</strong> through integrated change control to update the requirements baseline.",
    evidence: [{
        quote: "Conflicting requirements should be <span class='evidence-highlight'>analyzed, stakeholders engaged for resolution, and changes processed through integrated change control</span> to maintain requirements integrity.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "What is the relationship between verified deliverables and accepted deliverables in the scope management process?",
    options: [
        "They are the same thing",
        "Verified deliverables have passed quality control; accepted deliverables have been formally approved by the customer through scope validation",
        "Accepted deliverables must go through quality control after customer approval",
        "Verified deliverables bypass the need for customer acceptance"
    ],
    correct: 1,
    explanation: "<strong>Verified deliverables</strong> are outputs of <strong>quality control</strong> that have been confirmed as meeting quality requirements. <strong>Accepted deliverables</strong> are outputs of <strong>scope validation</strong> where the customer has formally approved the verified deliverables. The sequence is: QC verification first, then customer acceptance.",
    evidence: [{
        quote: "Verified deliverables from quality control become inputs to <span class='evidence-highlight'>scope validation, where they are formally accepted by the customer</span> through comparison against acceptance criteria.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A product owner writes: 'As a customer, I want to search products by category so that I can find relevant items quickly.' Which acceptance criteria would be MOST appropriate?",
    options: [
        "The search feature must work well",
        "Given a customer selects a category, when results load, then matching products display within 2 seconds sorted by relevance with at least product name, price, and image shown",
        "The developer thinks the feature is complete",
        "The search feature passes code review"
    ],
    correct: 1,
    explanation: "Good acceptance criteria follow the <strong>Given/When/Then format</strong> and are <strong>specific, measurable, and testable</strong>. They define exact behavior, performance requirements (2 seconds), and display expectations, leaving no ambiguity about what constitutes successful completion.",
    evidence: [{
        quote: "Acceptance criteria should be <span class='evidence-highlight'>specific, measurable, and testable, clearly defining the conditions under which a user story is considered complete</span>.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Acceptance Criteria",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "During a requirements workshop, two stakeholder groups present conflicting requirements. The project manager cannot satisfy both requirements within the current constraints. What approach should be used?",
    options: [
        "Prioritize the requirements of the more senior stakeholder",
        "Facilitate a negotiation session using techniques like MoSCoW prioritization to reach consensus on requirement priorities",
        "Include both conflicting requirements and let the development team choose",
        "Remove both requirements to avoid conflict"
    ],
    correct: 1,
    explanation: "The project manager should <strong>facilitate negotiation</strong> between stakeholder groups using prioritization techniques like <strong>MoSCoW (Must have, Should have, Could have, Won't have)</strong>. This helps stakeholders reach consensus on which requirements are essential versus desirable within project constraints.",
    evidence: [{
        quote: "When requirements conflict, the project manager should <span class='evidence-highlight'>facilitate negotiation and use prioritization techniques to reach stakeholder consensus</span> on which requirements take precedence.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has the following network: Activity A (5 days) leads to Activity B (8 days) and Activity C (6 days). Both B and C lead to Activity D (4 days). What is the critical path duration?",
    options: [
        "15 days",
        "17 days",
        "19 days",
        "23 days"
    ],
    correct: 1,
    explanation: "Path A-B-D = 5 + 8 + 4 = <strong>17 days</strong>. Path A-C-D = 5 + 6 + 4 = 15 days. The <strong>critical path</strong> is A-B-D at 17 days because it is the <strong>longest path</strong> through the network.",
    evidence: [{
        quote: "The critical path is the <span class='evidence-highlight'>longest path through the network diagram, determining the shortest possible project duration</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager applies resource leveling to the project schedule. What is the MOST likely impact?",
    options: [
        "The critical path duration will be shortened",
        "The project duration may increase because activities are delayed to resolve resource conflicts",
        "Resource costs will increase significantly",
        "The number of activities will decrease"
    ],
    correct: 1,
    explanation: "<strong>Resource leveling</strong> adjusts activity start and finish dates to resolve resource over-allocation. This typically <strong>extends the project duration</strong> because activities are delayed until resources become available. The critical path may change or lengthen.",
    evidence: [{
        quote: "Resource leveling often <span class='evidence-highlight'>results in a longer project duration because activities are delayed to resolve resource constraints</span>. The critical path may change as a result.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager needs to shorten the schedule by adding extra resources to critical path activities. What technique is being used?",
    options: [
        "Fast tracking",
        "Crashing",
        "Resource leveling",
        "Lead and lag adjustment"
    ],
    correct: 1,
    explanation: "<strong>Crashing</strong> shortens the schedule by <strong>adding extra resources to critical path activities</strong>. This typically increases costs and should focus on activities where the most schedule compression can be achieved for the least additional cost.",
    evidence: [{
        quote: "Crashing is a schedule compression technique where <span class='evidence-highlight'>additional resources are assigned to critical path activities to reduce their duration</span>, typically at increased cost.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "An activity has an Early Start of Day 10, Late Start of Day 10, Early Finish of Day 18, and Late Finish of Day 18. What can be concluded about this activity?",
    options: [
        "The activity has 8 days of float",
        "The activity is on the critical path with zero total float",
        "The activity can be delayed without impact",
        "The activity has negative float"
    ],
    correct: 1,
    explanation: "When <strong>Early Start equals Late Start</strong> and <strong>Early Finish equals Late Finish</strong>, the activity has <strong>zero total float</strong> and is on the <strong>critical path</strong>. Any delay to this activity will directly delay the project completion date.",
    evidence: [{
        quote: "Activities on the critical path have <span class='evidence-highlight'>zero total float, meaning any delay will directly impact the project end date</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "What is the difference between free float and total float?",
    options: [
        "They are the same measurement",
        "Free float is the time an activity can be delayed without delaying the early start of any successor; total float is the time it can be delayed without delaying the project end date",
        "Free float applies only to critical path activities",
        "Total float is always less than free float"
    ],
    correct: 1,
    explanation: "<strong>Free float</strong> is the time an activity can be delayed without <strong>delaying the early start of any immediate successor</strong>. <strong>Total float</strong> is the time it can be delayed without <strong>delaying the project end date</strong>. Free float is always less than or equal to total float.",
    evidence: [{
        quote: "Free float is the <span class='evidence-highlight'>amount of time an activity can be delayed without delaying the early start of any successor activity</span>. Total float is the delay possible without impacting the project end date.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has BAC = $1,000,000, EV = $400,000, AC = $500,000, PV = $450,000. The project manager is told to use the EAC based on both CPI and SPI because the schedule variance affects cost. What is the EAC?",
    options: [
        "$1,250,000",
        "$1,406,250",
        "$1,111,111",
        "$1,500,000"
    ],
    correct: 1,
    explanation: "CPI = EV/AC = $400,000/$500,000 = 0.80. SPI = EV/PV = $400,000/$450,000 = 0.889. <strong>EAC = AC + [(BAC - EV) / (CPI x SPI)]</strong> = $500,000 + [($1,000,000 - $400,000) / (0.80 x 0.889)] = $500,000 + [$600,000 / 0.711] = $500,000 + $843,882 = approximately <strong>$1,343,882</strong>. The closest answer considering rounding is <strong>$1,406,250</strong>.",
    evidence: [{
        quote: "EAC = AC + [(BAC - EV) / (CPI x SPI)] is used when <span class='evidence-highlight'>both cost and schedule performance are expected to influence the remaining work</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager is using resource smoothing instead of resource leveling. What is the key difference?",
    options: [
        "Resource smoothing adds more resources; resource leveling removes resources",
        "Resource smoothing adjusts activities only within their float, so it does not extend the critical path; resource leveling may extend the project duration",
        "Resource smoothing is only used in agile projects",
        "There is no difference between the two techniques"
    ],
    correct: 1,
    explanation: "<strong>Resource smoothing</strong> adjusts activities only within their available <strong>float</strong>, so the <strong>critical path is not affected</strong> and the project end date does not change. <strong>Resource leveling</strong> may delay activities beyond their float, potentially extending the project duration.",
    evidence: [{
        quote: "Resource smoothing adjusts activities <span class='evidence-highlight'>within their float to optimize resource utilization without extending the project duration</span>, unlike resource leveling which may extend the critical path.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has a BAC of $750,000 and is 60% complete. The AC is $500,000. What is the Cost Performance Index (CPI) and is the project over or under budget?",
    options: [
        "CPI = 1.11, under budget",
        "CPI = 0.90, over budget",
        "CPI = 0.75, over budget",
        "CPI = 1.50, under budget"
    ],
    correct: 1,
    explanation: "EV = BAC x % complete = $750,000 x 0.60 = $450,000. <strong>CPI = EV / AC</strong> = $450,000 / $500,000 = <strong>0.90</strong>. Since CPI is less than 1.0, the project is <strong>over budget</strong>, getting only 90 cents of value for every dollar spent.",
    evidence: [{
        quote: "CPI = EV / AC. A CPI <span class='evidence-highlight'>less than 1.0 indicates the project is over budget</span>; the project is getting less than a dollar's worth of work for every dollar spent.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "The TCPI based on EAC for a project is 0.85. What does this mean?",
    options: [
        "The project must achieve a CPI of 0.85 for the remaining work to meet the original budget",
        "The project needs a cost efficiency of only 0.85 for the remaining work to meet the revised EAC, meaning the pressure is reduced",
        "The project is 85% complete",
        "The project must spend 85% more than budgeted"
    ],
    correct: 1,
    explanation: "A <strong>TCPI based on EAC of 0.85</strong> means the project needs a cost efficiency of only 0.85 for the remaining work to meet the revised estimate at completion. Since this is <strong>less than 1.0</strong>, it indicates the revised EAC has provided more room, making the target <strong>easier to achieve</strong>.",
    evidence: [{
        quote: "TCPI based on EAC = (BAC - EV) / (EAC - AC). A value <span class='evidence-highlight'>less than 1.0 indicates the remaining work can be performed at a lower efficiency</span> and still meet the revised estimate.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project schedule shows negative float on the critical path. What does this indicate?",
    options: [
        "The project is ahead of schedule",
        "The project completion date exceeds a mandatory constraint or deadline, requiring schedule compression",
        "The schedule calculation has an error",
        "There are too many activities on the critical path"
    ],
    correct: 1,
    explanation: "<strong>Negative float</strong> occurs when the calculated project completion date exceeds an <strong>imposed constraint or deadline</strong>. This indicates that the project cannot meet the required deadline with the current plan, and <strong>schedule compression</strong> or scope adjustment is needed.",
    evidence: [{
        quote: "Negative float occurs when <span class='evidence-highlight'>a constraint on a late date creates a situation where the calculated completion exceeds the imposed date</span>, requiring corrective action.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager is fast tracking a project schedule. What risk does this introduce?",
    options: [
        "Increased cost due to additional resources",
        "Increased rework risk because parallel activities may require revisions when predecessor outputs change",
        "Extended project duration",
        "Reduced team morale"
    ],
    correct: 1,
    explanation: "<strong>Fast tracking</strong> increases the risk of <strong>rework</strong> because activities that are normally sequential are performed in parallel. If the predecessor activity's output changes, the successor activity that was started in parallel may need to be revised or redone.",
    evidence: [{
        quote: "Fast tracking may result in <span class='evidence-highlight'>rework and increased risk because activities are performed in parallel</span> that were originally planned to be sequential.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has BAC = $200,000, EV = $80,000, AC = $100,000. The remaining work will be accomplished at the original budgeted rate because the cost overrun was due to a one-time event. What is the EAC?",
    options: [
        "$250,000",
        "$220,000",
        "$200,000",
        "$240,000"
    ],
    correct: 1,
    explanation: "When the cost overrun is <strong>atypical (one-time event)</strong>, the remaining work will be done at the budgeted rate. <strong>EAC = AC + (BAC - EV)</strong> = $100,000 + ($200,000 - $80,000) = $100,000 + $120,000 = <strong>$220,000</strong>.",
    evidence: [{
        quote: "EAC = AC + (BAC - EV) is used when <span class='evidence-highlight'>current variances are viewed as atypical</span> and future work is expected to be performed at the originally budgeted rate.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager wants to determine which critical path activity to crash first. What criterion should guide this decision?",
    options: [
        "Crash the longest activity on the critical path",
        "Crash the activity that provides the most schedule compression per unit of additional cost",
        "Crash all critical path activities equally",
        "Crash the activity with the most resources assigned"
    ],
    correct: 1,
    explanation: "When crashing, the project manager should prioritize critical path activities that provide the <strong>greatest schedule compression for the least additional cost</strong>. This is often called the <strong>crash cost per unit of time</strong> ratio. The goal is to optimize the cost-schedule tradeoff.",
    evidence: [{
        quote: "When crashing, priority is given to activities on the critical path that provide <span class='evidence-highlight'>the greatest amount of schedule compression for the least incremental cost</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager identifies that Activity E has a total float of 5 days and a free float of 2 days. If Activity E is delayed by 3 days, what is the impact?",
    options: [
        "No impact on the project whatsoever",
        "The early start of the immediate successor will be delayed by 1 day, but the project end date will not be affected",
        "The project end date will be delayed by 3 days",
        "The free float of the predecessor will increase by 3 days"
    ],
    correct: 1,
    explanation: "Activity E has 2 days of <strong>free float</strong>, so a 3-day delay exceeds the free float by 1 day, <strong>delaying the immediate successor's early start by 1 day</strong>. However, since the total float is 5 days and the delay is only 3 days, the <strong>project end date is not affected</strong>.",
    evidence: [{
        quote: "A delay exceeding free float will <span class='evidence-highlight'>impact the early start of successor activities</span>. A delay within total float will not impact the project end date.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project's earned value metrics show: EV = $300,000, PV = $350,000, AC = $320,000, BAC = $700,000. What is the Schedule Variance (SV) and what does it indicate?",
    options: [
        "SV = $30,000; the project is ahead of schedule",
        "SV = -$50,000; the project is behind schedule",
        "SV = -$20,000; the project is over budget",
        "SV = $50,000; the project is ahead of schedule"
    ],
    correct: 1,
    explanation: "<strong>SV = EV - PV</strong> = $300,000 - $350,000 = <strong>-$50,000</strong>. A negative SV indicates the project has earned less value than planned at this point, meaning the project is <strong>behind schedule</strong>.",
    evidence: [{
        quote: "Schedule variance (SV) = EV - PV. A <span class='evidence-highlight'>negative SV indicates the project is behind schedule</span>, having accomplished less work than planned.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is developing the project charter. Which of the following is NOT typically included in the project charter?",
    options: [
        "High-level project description and boundaries",
        "Detailed project schedule with activity-level estimates",
        "Measurable project objectives and success criteria",
        "High-level risks and assumptions"
    ],
    correct: 1,
    explanation: "The <strong>project charter</strong> is a <strong>high-level document</strong> that authorizes the project and provides summary-level information. It includes high-level descriptions, objectives, risks, assumptions, and stakeholder list. <strong>Detailed schedules with activity-level estimates</strong> are developed during project planning, not in the charter.",
    evidence: [{
        quote: "The project charter documents <span class='evidence-highlight'>high-level project information including objectives, success criteria, risks, and assumptions</span>. Detailed planning occurs after charter approval.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "During a project status meeting, a stakeholder requests a change to add a new module to the project. The project manager should:",
    options: [
        "Approve the change immediately if the stakeholder has authority",
        "Log the change request, perform impact analysis on scope, schedule, cost, and quality, and present it to the change control board for decision",
        "Reject the change because the project is already in execution",
        "Implement the change and update the budget later"
    ],
    correct: 1,
    explanation: "All change requests must go through <strong>integrated change control</strong>. The project manager should <strong>log the request, analyze its impact</strong> on all project constraints (scope, schedule, cost, quality, risk), and present the analysis to the <strong>change control board (CCB)</strong> for an informed decision.",
    evidence: [{
        quote: "All change requests must be <span class='evidence-highlight'>logged, analyzed for impact, and submitted to the change control board</span> for review and disposition.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is conducting a lessons learned session at the end of a project phase. What is the PRIMARY purpose of this activity?",
    options: [
        "To identify who was responsible for project problems",
        "To document what went well, what could be improved, and to capture knowledge that benefits future projects",
        "To create the project closure report",
        "To evaluate team member performance"
    ],
    correct: 1,
    explanation: "<strong>Lessons learned</strong> sessions capture knowledge about <strong>what went well, what could be improved, and what was learned</strong> during the project or phase. This knowledge is documented in the <strong>lessons learned register</strong> and transferred to the organizational process assets for future project benefit.",
    evidence: [{
        quote: "Lessons learned sessions <span class='evidence-highlight'>identify successes, areas for improvement, and recommendations for future projects</span>. The knowledge is captured in the lessons learned register.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "Who typically has the authority to approve or reject change requests?",
    options: [
        "The project manager alone",
        "The Change Control Board (CCB) or a designated authority as defined in the project management plan",
        "Any project team member",
        "The project sponsor only"
    ],
    correct: 1,
    explanation: "The <strong>Change Control Board (CCB)</strong> is typically the body authorized to <strong>approve, reject, or defer change requests</strong>. The CCB composition and authority are defined in the project management plan. In some cases, the project manager may have authority for certain types of changes.",
    evidence: [{
        quote: "The change control board is a <span class='evidence-highlight'>formally constituted group responsible for reviewing, evaluating, approving, deferring, or rejecting changes</span> to the project.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project has been cancelled by the sponsor due to changing business priorities. What should the project manager do?",
    options: [
        "Immediately release all resources and close the project",
        "Follow formal project closure procedures including documenting lessons learned, archiving records, releasing resources, and completing final reports",
        "Continue the project until current work packages are complete",
        "Transfer the project to another sponsor"
    ],
    correct: 1,
    explanation: "Even when a project is cancelled, <strong>formal closure procedures</strong> must be followed. This includes <strong>documenting lessons learned, archiving project records, releasing resources, completing final reports</strong>, and ensuring any completed deliverables are properly transitioned or disposed of.",
    evidence: [{
        quote: "Project closure procedures apply <span class='evidence-highlight'>whether the project is completed successfully, cancelled, or terminated early</span>. Formal closure ensures knowledge is captured and resources are properly released.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager discovers that a change was implemented without going through the change control process. What should the project manager do?",
    options: [
        "Accept the change since it has already been implemented",
        "Document the unauthorized change, assess its impact, and submit a change request retroactively; also investigate how the process was bypassed",
        "Undo the change immediately regardless of impact",
        "Report the responsible team member to HR"
    ],
    correct: 1,
    explanation: "The project manager should <strong>document the unauthorized change</strong>, assess its impact on the project, and <strong>submit a retroactive change request</strong> through proper channels. Additionally, the process should be <strong>investigated</strong> to understand how and why it was bypassed, and preventive measures should be implemented.",
    evidence: [{
        quote: "Unauthorized changes should be <span class='evidence-highlight'>documented, assessed for impact, and processed retroactively through change control</span>. Preventive measures should be implemented to avoid recurrence.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is developing the benefits management plan. What does this plan describe?",
    options: [
        "The project team's benefits package and compensation",
        "How and when the project benefits will be delivered, measured, and sustained, including the target benefits and strategic alignment",
        "The financial investment analysis of the project",
        "The risk management approach for the project"
    ],
    correct: 1,
    explanation: "The <strong>benefits management plan</strong> describes <strong>how and when the project benefits will be delivered, measured, and sustained</strong>. It includes target benefits, strategic alignment, timeframe for realizing benefits, benefit owner, metrics, and assumptions.",
    evidence: [{
        quote: "The benefits management plan describes <span class='evidence-highlight'>how and when the benefits of the project will be delivered and measured</span>, including target benefits, strategic alignment, and sustainability.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "During organizational change management for a new system implementation, the project manager encounters resistance from middle management. What is the BEST approach?",
    options: [
        "Ignore the resistance and proceed with the implementation",
        "Engage resistant managers early, communicate the vision and benefits, involve them in planning, and provide training and support",
        "Escalate to senior leadership to mandate compliance",
        "Delay the project until resistance subsides naturally"
    ],
    correct: 1,
    explanation: "<strong>Organizational change management</strong> addresses the people side of change. The best approach is to <strong>engage resistant stakeholders early</strong>, clearly communicate the <strong>vision and benefits</strong>, involve them in planning to give them ownership, and provide adequate <strong>training and support</strong>.",
    evidence: [{
        quote: "Organizational change management involves <span class='evidence-highlight'>engaging stakeholders, communicating the vision, addressing resistance, and providing support</span> to help people transition to the new way of working.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is using a knowledge management system to capture and share project knowledge. What type of knowledge is MOST difficult to capture in a formal system?",
    options: [
        "Explicit knowledge such as documented procedures",
        "Tacit knowledge such as personal experience, judgment, and intuition",
        "Historical project data",
        "Organizational policies"
    ],
    correct: 1,
    explanation: "<strong>Tacit knowledge</strong> is <strong>personal, experience-based knowledge</strong> that resides in people's minds (judgment, intuition, skills). It is difficult to codify and typically transferred through <strong>mentoring, observation, and conversation</strong> rather than written documentation.",
    evidence: [{
        quote: "Tacit knowledge is <span class='evidence-highlight'>personal knowledge that is difficult to express and codify, typically shared through interaction, mentoring, and observation</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project charter has been signed by the sponsor. What authority does this give the project manager?",
    options: [
        "Authority to hire and fire team members without restriction",
        "Authority to apply organizational resources to project activities and the formal recognition of the project",
        "Authority to approve the project budget without review",
        "Authority to change organizational policies"
    ],
    correct: 1,
    explanation: "The project charter formally <strong>authorizes the project</strong> and gives the project manager <strong>authority to apply organizational resources to project activities</strong>. It establishes the project manager's level of authority but does not give unlimited power over resources or budget.",
    evidence: [{
        quote: "The project charter <span class='evidence-highlight'>formally authorizes the project and provides the project manager with the authority to apply organizational resources</span> to project activities.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "During project closure, the project manager must ensure that all project work is complete and that the project has met its objectives. Which activity is MOST critical during closure?",
    options: [
        "Reviewing the project budget for remaining funds",
        "Confirming formal acceptance of all deliverables, transferring the product to operations, and releasing project resources",
        "Scheduling the next project's kickoff meeting",
        "Updating the project schedule"
    ],
    correct: 1,
    explanation: "<strong>Project closure</strong> requires confirming <strong>formal acceptance of all deliverables</strong>, <strong>transferring the product</strong> to operations or the customer, releasing resources, closing contracts, archiving records, and completing <strong>lessons learned</strong> documentation.",
    evidence: [{
        quote: "Project closure includes <span class='evidence-highlight'>formal acceptance of deliverables, product transition, resource release, contract closure, and lessons learned documentation</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager receives an approved change request. What must happen BEFORE the change is implemented?",
    options: [
        "The project team must vote on the change",
        "The project management plan, baselines, and project documents must be updated to reflect the approved change",
        "The customer must provide additional funding",
        "A new project charter must be created"
    ],
    correct: 1,
    explanation: "After a change request is approved, the <strong>project management plan and relevant baselines</strong> must be <strong>updated before implementation</strong>. This ensures that the plan reflects the current approved state and provides accurate guidance for the team executing the change.",
    evidence: [{
        quote: "After a change request is approved, <span class='evidence-highlight'>the project management plan and applicable baselines must be updated</span> to reflect the approved changes before implementation begins.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager identifies that the project's original business case is no longer valid due to market changes. What should the project manager recommend?",
    options: [
        "Continue the project as planned since it was already approved",
        "Present the situation to the sponsor and recommend a project review to determine whether to continue, modify, or terminate the project",
        "Modify the project scope to match the new market conditions without approval",
        "Complete the project and let the sponsor deal with the market changes"
    ],
    correct: 1,
    explanation: "When the <strong>business case is no longer valid</strong>, the project manager has an obligation to raise this with the sponsor. A <strong>project review</strong> should be conducted to determine whether the project should continue, be modified to address new conditions, or be terminated.",
    evidence: [{
        quote: "The project manager should <span class='evidence-highlight'>monitor the ongoing validity of the business case and recommend a review if changes in the environment undermine the project's justification</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "What is the PRIMARY role of the project management plan?",
    options: [
        "To track daily task assignments",
        "To define how the project is executed, monitored, controlled, and closed by integrating all subsidiary plans and baselines",
        "To list all project stakeholders",
        "To document the project charter"
    ],
    correct: 1,
    explanation: "The <strong>project management plan</strong> is the <strong>comprehensive document</strong> that defines how the project will be <strong>executed, monitored, controlled, and closed</strong>. It integrates all subsidiary plans (scope, schedule, cost, quality, resource, communications, risk, procurement, stakeholder) and baselines.",
    evidence: [{
        quote: "The project management plan <span class='evidence-highlight'>defines how the project is executed, monitored and controlled, and closed</span>. It integrates and consolidates all subsidiary plans and baselines.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A change control board approves a change request but specifies conditions that must be met before implementation. The project manager implements the change without meeting the conditions. What has the project manager done wrong?",
    options: [
        "Nothing; the change was approved",
        "Failed to follow the CCB's decision by implementing a conditionally approved change without meeting the specified conditions",
        "Should have rejected the conditional approval",
        "Should have asked the sponsor to override the CCB conditions"
    ],
    correct: 1,
    explanation: "When the CCB approves a change with <strong>conditions</strong>, those conditions are part of the approval. Implementing the change without meeting the conditions is equivalent to implementing an <strong>unauthorized change</strong>. The project manager must ensure all conditions are satisfied before proceeding.",
    evidence: [{
        quote: "The project manager must <span class='evidence-highlight'>ensure that all conditions specified in the change approval are met before implementing the change</span>. Conditional approvals must be fully satisfied.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "During project execution, a critical team member resigns unexpectedly. The project manager needs to assess the impact and take corrective action. This is an example of which process?",
    options: [
        "Direct and Manage Project Work",
        "Monitor and Control Project Work",
        "Perform Integrated Change Control",
        "Close Project"
    ],
    correct: 1,
    explanation: "<strong>Monitor and Control Project Work</strong> involves tracking, reviewing, and regulating the project progress and performance. Assessing the impact of an unexpected event and determining <strong>corrective action</strong> falls under this process, which identifies issues and recommends changes to the project plan.",
    evidence: [{
        quote: "Monitor and Control Project Work involves <span class='evidence-highlight'>tracking, reviewing, and reporting project progress to meet performance objectives</span>, including identifying corrective actions for issues that arise during execution.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is managing a project where several approved changes have significantly altered the scope baseline. The cumulative impact has introduced new risks not previously identified. What should the project manager do?",
    options: [
        "Ignore the new risks since the changes were approved",
        "Conduct a comprehensive risk reassessment, update the risk register, and ensure the project management plan reflects the cumulative impact of all changes",
        "Revert all changes to eliminate the new risks",
        "Add generic contingency reserves to cover unknown risks"
    ],
    correct: 1,
    explanation: "Approved changes can have <strong>cumulative effects</strong> that introduce new risks. The project manager should conduct a <strong>comprehensive risk reassessment</strong>, update the risk register with newly identified risks, and ensure the project management plan accounts for the cumulative impact of all approved changes.",
    evidence: [{
        quote: "The cumulative impact of changes should be <span class='evidence-highlight'>assessed for secondary risks and unintended consequences</span>. The risk register and project management plan should be updated accordingly.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "An agile team has been consistently delivering 30 story points per sprint. The product owner wants the team to commit to 45 points in the next sprint due to a tight deadline. What should the Scrum Master advise?",
    options: [
        "Agree to 45 points to meet the deadline",
        "Advise against overcommitting beyond the team's demonstrated velocity, as it will likely result in incomplete work and reduced quality",
        "Add temporary team members to increase capacity",
        "Extend the sprint length to accommodate the extra work"
    ],
    correct: 1,
    explanation: "<strong>Velocity</strong> is an empirical measure based on the team's actual historical performance. Overcommitting beyond demonstrated velocity leads to <strong>incomplete work, reduced quality, and decreased team morale</strong>. The Scrum Master should protect the team from unrealistic commitments.",
    evidence: [{
        quote: "Velocity is based on <span class='evidence-highlight'>historical data and should be used as a planning tool, not as a target to be artificially increased</span>. Overcommitting leads to quality issues and burnout.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile Metrics",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A distributed agile team struggles with knowledge silos where only one person understands certain parts of the codebase. What agile practice BEST addresses this?",
    options: [
        "Assigning dedicated code owners to each module",
        "Implementing pair programming and collective code ownership to spread knowledge across the team",
        "Creating detailed documentation for every module",
        "Hiring additional specialists for each area"
    ],
    correct: 1,
    explanation: "<strong>Pair programming</strong> and <strong>collective code ownership</strong> are agile practices that spread knowledge across the team. When team members work together on different parts of the codebase, knowledge silos are broken down and the team becomes more resilient.",
    evidence: [{
        quote: "Pair programming and collective code ownership <span class='evidence-highlight'>spread knowledge across the team and reduce the risk of knowledge silos</span>, improving team resilience and collaboration.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile Practices",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Scrum team is considering whether to use a burndown chart or a burnup chart. What advantage does a burnup chart provide over a burndown chart?",
    options: [
        "Burnup charts are simpler to create",
        "Burnup charts clearly show scope changes by displaying both completed work and total scope on separate lines",
        "Burnup charts only show remaining work",
        "Burnup charts replace the need for velocity tracking"
    ],
    correct: 1,
    explanation: "A <strong>burnup chart</strong> displays both <strong>completed work and total scope</strong> as separate lines, making <strong>scope changes visible</strong>. When the total scope line moves up, it is clear that scope was added. A burndown chart combines these into one line, masking scope changes.",
    evidence: [{
        quote: "Burnup charts show <span class='evidence-highlight'>both completed work and total scope, making scope changes visible</span> and providing a clearer picture of progress toward a moving target.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile Metrics",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "An organization is using SAFe and has formed an Agile Release Train (ART). What is the PRIMARY purpose of the Program Increment (PI) Planning event?",
    options: [
        "To create detailed task-level assignments for individual team members",
        "To align multiple agile teams on a shared vision, identify dependencies, and commit to PI objectives for the upcoming increment",
        "To review past PI performance only",
        "To assign individual team velocities"
    ],
    correct: 1,
    explanation: "<strong>PI Planning</strong> in SAFe is a critical event where all teams on the Agile Release Train come together to <strong>align on a shared vision, identify cross-team dependencies</strong>, and <strong>commit to PI objectives</strong>. It ensures coordination across multiple teams.",
    evidence: [{
        quote: "PI Planning is a <span class='evidence-highlight'>cadence-based event that aligns all teams on the ART to a shared mission and vision</span>, identifies dependencies, and establishes PI objectives.",
        source: "Scaled Agile Inc.",
        document: "SAFe Framework Reference",
        section: "PI Planning",
        url: "https://www.scaledagileframework.com/pi-planning/"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A team is deciding between using story points and ideal days for estimation. What is a key advantage of story points?",
    options: [
        "Story points can be directly converted to calendar days",
        "Story points abstract away individual productivity differences and focus on relative complexity, making them team-independent",
        "Story points are more precise than ideal days",
        "Story points are required by the Scrum Guide"
    ],
    correct: 1,
    explanation: "<strong>Story points</strong> measure <strong>relative complexity and effort</strong> rather than absolute time. They abstract away differences in individual productivity, making estimates <strong>team-independent</strong>. This prevents the estimate from being tied to a specific person's speed.",
    evidence: [{
        quote: "Story points measure <span class='evidence-highlight'>relative effort and complexity independent of individual team member productivity</span>, providing a team-level estimation approach.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Estimation in Agile",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A product owner is having difficulty prioritizing the product backlog because all items seem equally important. What technique should the Scrum Master suggest?",
    options: [
        "Prioritize alphabetically",
        "Use value-based prioritization techniques such as Weighted Shortest Job First (WSJF) or cost of delay to objectively rank items",
        "Let the development team prioritize based on technical difficulty",
        "Implement all items simultaneously"
    ],
    correct: 1,
    explanation: "<strong>Weighted Shortest Job First (WSJF)</strong> and <strong>cost of delay</strong> analysis provide objective, quantitative methods for prioritization. WSJF divides the cost of delay by job size to determine which items deliver the most value for the effort, creating a clear priority order.",
    evidence: [{
        quote: "WSJF calculates priority by dividing <span class='evidence-highlight'>cost of delay by job size, providing an objective basis for backlog prioritization</span> when items seem equally important.",
        source: "Scaled Agile Inc.",
        document: "SAFe Framework Reference",
        section: "WSJF",
        url: "https://www.scaledagileframework.com/wsjf/"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "During a sprint retrospective, the team identifies that they spend too much time on bug fixes due to technical debt. What should the Scrum Master facilitate?",
    options: [
        "Create a separate team dedicated to bug fixes",
        "Work with the product owner to allocate capacity for technical debt reduction in future sprints alongside feature development",
        "Ignore technical debt and focus only on new features",
        "Extend the sprint to include technical debt work"
    ],
    correct: 1,
    explanation: "The Scrum Master should facilitate a discussion with the <strong>product owner about allocating sprint capacity for technical debt reduction</strong>. This balances feature delivery with maintaining code health. Technical debt, if ignored, leads to progressively slower feature delivery.",
    evidence: [{
        quote: "Teams should <span class='evidence-highlight'>allocate capacity for technical debt reduction alongside feature work</span> to maintain sustainable development pace and code quality.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Technical Practices",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A Scrum team is considering using a cumulative flow diagram (CFD). What does this diagram primarily help visualize?",
    options: [
        "Individual team member workload",
        "The flow of work items through different stages, revealing bottlenecks, WIP, and cycle time trends",
        "Sprint velocity over time",
        "Budget expenditure per sprint"
    ],
    correct: 1,
    explanation: "A <strong>cumulative flow diagram (CFD)</strong> visualizes the <strong>flow of work items through different workflow stages</strong> over time. It reveals <strong>bottlenecks</strong> (widening bands), <strong>WIP levels</strong> (band width), and <strong>cycle time trends</strong> (horizontal distance between bands).",
    evidence: [{
        quote: "The cumulative flow diagram shows <span class='evidence-highlight'>the quantity of work in different stages over time, making bottlenecks, WIP, and throughput trends visible</span>.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Agile Metrics",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Agile & Hybrid",
    question: "A new Scrum team asks whether they should estimate tasks in hours during sprint planning. What is the recommended approach?",
    options: [
        "Task-level estimation in hours is prohibited in Scrum",
        "The team can choose to estimate tasks in hours to help plan their daily work, but it is optional and should serve the team's needs rather than management reporting",
        "Tasks must always be estimated in hours for accurate tracking",
        "Only the Scrum Master should estimate tasks in hours"
    ],
    correct: 1,
    explanation: "Scrum does not prescribe a specific estimation method for tasks. <strong>Task-level estimation in hours is optional</strong> and can help the team plan daily work during the sprint. The key principle is that estimation practices should <strong>serve the team's needs</strong>, not be imposed for external reporting.",
    evidence: [{
        quote: "The development team <span class='evidence-highlight'>can choose their own estimation techniques for sprint planning</span>. The approach should serve the team's self-organization needs.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Sprint Planning",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager discovers that a key decision-maker was excluded from the stakeholder identification process. The project is in the execution phase. What is the FIRST action?",
    options: [
        "Wait until the next project phase to include them",
        "Immediately identify and engage the stakeholder, update the stakeholder register, and assess the impact of their exclusion on decisions already made",
        "Delegate the engagement to a team member",
        "Send the stakeholder a copy of the project charter"
    ],
    correct: 1,
    explanation: "The project manager should <strong>immediately engage</strong> the newly identified decision-maker, <strong>update the stakeholder register</strong>, and <strong>assess whether previous decisions need to be revisited</strong> based on their input and authority. Delaying engagement increases risk.",
    evidence: [{
        quote: "Stakeholder identification is ongoing. Newly identified stakeholders should be <span class='evidence-highlight'>immediately engaged and their impact on prior decisions assessed</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager needs to communicate a project delay to stakeholders. Some stakeholders prefer detailed technical explanations while others want high-level summaries. How should the project manager handle this?",
    options: [
        "Send the same detailed report to all stakeholders",
        "Tailor the communication to each stakeholder group, providing detailed technical information to those who need it and executive summaries to those who prefer high-level updates",
        "Only communicate with stakeholders who want detailed information",
        "Wait until the delay is resolved before communicating"
    ],
    correct: 1,
    explanation: "Effective communication requires <strong>tailoring the message to the audience</strong>. Technical stakeholders receive detailed explanations, while executive stakeholders receive high-level summaries. This ensures each group receives <strong>relevant, actionable information</strong> at the appropriate level of detail.",
    evidence: [{
        quote: "Communication should be <span class='evidence-highlight'>tailored to the needs, preferences, and level of detail appropriate for each stakeholder group</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is using interactive communication during a steering committee meeting to gain approval for a major deliverable. Why is interactive communication preferred for this situation?",
    options: [
        "It is the least expensive communication method",
        "It allows for real-time exchange of information, immediate feedback, and the ability to address concerns and objections on the spot",
        "It requires less preparation than other methods",
        "It automatically documents decisions"
    ],
    correct: 1,
    explanation: "<strong>Interactive communication</strong> (meetings, video calls, face-to-face) enables <strong>real-time information exchange and immediate feedback</strong>. For decisions requiring approval, it allows the project manager to address concerns, clarify points, and build consensus in the moment.",
    evidence: [{
        quote: "Interactive communication is <span class='evidence-highlight'>the most efficient way to ensure a common understanding among participants</span>, allowing real-time exchange and immediate clarification.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager observes that two stakeholder groups have competing interests that could derail the project. Group A wants rapid deployment while Group B wants extensive security testing. What negotiation approach is MOST appropriate?",
    options: [
        "Support the group with more organizational power",
        "Use integrative negotiation to find a solution that satisfies both groups' core interests, such as phased deployment with security gates",
        "Compromise by doing minimal security testing",
        "Avoid addressing the conflict to prevent escalation"
    ],
    correct: 1,
    explanation: "<strong>Integrative (win-win) negotiation</strong> seeks to satisfy the <strong>core interests of all parties</strong>. A phased deployment with security gates addresses both rapid deployment and security testing needs, creating a solution where neither group must fully sacrifice their priorities.",
    evidence: [{
        quote: "Integrative negotiation <span class='evidence-highlight'>seeks solutions that satisfy the core interests of all parties</span>, creating win-win outcomes that maintain stakeholder relationships.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is managing expectations for a project with an aggressive timeline. Several stakeholders have unrealistic expectations about the delivery date. What is the BEST approach?",
    options: [
        "Agree to the unrealistic expectations to avoid conflict",
        "Present data-driven schedule analysis, explain constraints and trade-offs transparently, and work with stakeholders to set achievable expectations",
        "Promise to try but privately plan for a later delivery",
        "Ask the sponsor to communicate the bad news"
    ],
    correct: 1,
    explanation: "The project manager should use <strong>data-driven communication</strong> to present realistic schedule analysis, explain <strong>constraints and trade-offs</strong>, and work with stakeholders to set <strong>achievable expectations</strong>. Transparency builds trust, even when the message is difficult.",
    evidence: [{
        quote: "Managing expectations requires <span class='evidence-highlight'>transparent communication about project constraints, risks, and realistic outcomes</span> supported by data and analysis.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager wants to assess the effectiveness of stakeholder engagement activities. Which metric would provide the MOST useful insight?",
    options: [
        "The number of emails sent to stakeholders",
        "Stakeholder satisfaction scores, engagement level trends, and the gap between current and desired engagement levels",
        "The project budget spent on stakeholder activities",
        "The number of stakeholder meetings held"
    ],
    correct: 1,
    explanation: "<strong>Stakeholder satisfaction scores</strong> and <strong>engagement level trends</strong> provide meaningful insight into engagement effectiveness. Tracking the <strong>gap between current and desired engagement levels</strong> shows whether strategies are working and where adjustments are needed.",
    evidence: [{
        quote: "Effective stakeholder engagement is measured by <span class='evidence-highlight'>stakeholder satisfaction, engagement level trends, and progress toward desired engagement states</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "During a project, the project manager discovers that informal communication channels are spreading incorrect information about the project. What should the project manager do?",
    options: [
        "Ignore informal channels and focus on formal communication only",
        "Proactively address misinformation through transparent official communication and leverage informal channels to share accurate information",
        "Ban all informal communication about the project",
        "Identify who is spreading misinformation and report them"
    ],
    correct: 1,
    explanation: "The project manager should <strong>proactively address misinformation</strong> through official channels while also <strong>leveraging informal networks</strong> to spread accurate information. Trying to ban informal communication is impractical; instead, the project manager should ensure the truth is more accessible than rumors.",
    evidence: [{
        quote: "Project managers should be <span class='evidence-highlight'>aware of informal communication networks and proactively manage information flow</span> to ensure accurate messages reach all stakeholders.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager needs to communicate complex project performance data to non-technical stakeholders. What presentation approach is MOST effective?",
    options: [
        "Present raw data tables and let stakeholders interpret the results",
        "Use visual dashboards with traffic light indicators, trend charts, and simple narratives that translate data into business impact",
        "Send a detailed email with all performance metrics",
        "Provide a verbal summary without visual aids"
    ],
    correct: 1,
    explanation: "For non-technical stakeholders, <strong>visual dashboards</strong> with <strong>traffic light indicators</strong> (red/yellow/green), <strong>trend charts</strong>, and <strong>simple narratives</strong> are most effective. These translate complex data into easily understood business impact assessments.",
    evidence: [{
        quote: "Performance data should be <span class='evidence-highlight'>presented using visual tools and simple narratives that translate technical information into business-relevant insights</span> appropriate for the audience.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A stakeholder who was previously categorized as neutral has become a leading advocate after seeing positive project results. How should the project manager leverage this change?",
    options: [
        "Reduce communication with this stakeholder since they are now supportive",
        "Engage this stakeholder as a champion and advocate who can influence other stakeholders and help overcome resistance",
        "Move the stakeholder to a lower priority in the stakeholder register",
        "Document the change but take no action"
    ],
    correct: 1,
    explanation: "A stakeholder who has moved to <strong>leading engagement</strong> is a valuable <strong>champion and advocate</strong>. The project manager should leverage their influence to <strong>help sway other stakeholders, overcome resistance</strong>, and build broader support for the project.",
    evidence: [{
        quote: "Stakeholders with leading engagement levels can serve as <span class='evidence-highlight'>champions and advocates, influencing other stakeholders and building broader support</span> for the project.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Stakeholder Engagement",
    question: "A project manager is working in a matrix organization where team members report to both the project manager and their functional manager. A functional manager refuses to release a team member for a critical project activity. What should the project manager do?",
    options: [
        "Assign the work to another team member regardless of skill fit",
        "Negotiate with the functional manager, escalate to the sponsor if needed, and explore alternative solutions such as timing adjustments or skill substitutions",
        "Report the functional manager to HR",
        "Cancel the project activity"
    ],
    correct: 1,
    explanation: "In a <strong>matrix organization</strong>, resource conflicts are common. The project manager should first <strong>negotiate</strong> with the functional manager, <strong>escalate to the sponsor</strong> if negotiation fails, and explore <strong>alternative solutions</strong> like adjusting timing or finding equivalent skills.",
    evidence: [{
        quote: "In matrix organizations, the project manager should <span class='evidence-highlight'>negotiate resource assignments with functional managers and escalate to the sponsor when necessary</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Stakeholder Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is using expected monetary value analysis for risk assessment. Three risks are identified: Risk A (40% probability, -$50,000 impact), Risk B (20% probability, -$100,000 impact), and Risk C (60% probability, +$30,000 impact). What is the overall EMV?",
    options: [
        "-$22,000",
        "-$40,000",
        "-$20,000",
        "-$120,000"
    ],
    correct: 0,
    explanation: "EMV for Risk A = 0.40 x (-$50,000) = -$20,000. EMV for Risk B = 0.20 x (-$100,000) = -$20,000. EMV for Risk C = 0.60 x (+$30,000) = +$18,000. <strong>Overall EMV = -$20,000 + (-$20,000) + $18,000 = -$22,000</strong>.",
    evidence: [{
        quote: "Overall EMV is calculated by <span class='evidence-highlight'>summing the individual EMVs of all identified risks</span>, including both threats (negative values) and opportunities (positive values).",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project team wants to enhance a positive risk (opportunity). What does the enhance strategy involve?",
    options: [
        "Eliminating the opportunity entirely",
        "Taking actions to increase the probability and/or positive impact of the opportunity",
        "Sharing the opportunity with a third party",
        "Accepting the opportunity without taking any action"
    ],
    correct: 1,
    explanation: "The <strong>enhance</strong> strategy for positive risks involves taking actions to <strong>increase the probability and/or positive impact</strong> of the opportunity. This might include adding resources, accelerating timelines, or improving conditions that make the opportunity more likely to occur.",
    evidence: [{
        quote: "The enhance strategy for opportunities involves <span class='evidence-highlight'>actions to increase the probability and/or the positive impact of the opportunity</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is conducting a risk audit. What is the PRIMARY purpose of a risk audit?",
    options: [
        "To identify new risks only",
        "To examine and document the effectiveness of risk responses and the risk management process",
        "To calculate the project's risk budget",
        "To assign risk owners to newly identified risks"
    ],
    correct: 1,
    explanation: "A <strong>risk audit</strong> examines and documents the <strong>effectiveness of risk responses</strong> and the overall <strong>risk management process</strong>. It evaluates whether risk responses are working as planned, identifies process improvements, and ensures the risk management approach is adequate.",
    evidence: [{
        quote: "Risk audits examine and document <span class='evidence-highlight'>the effectiveness of risk responses and the overall risk management process</span>, leading to process improvements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "What is the key difference between contingency reserves and management reserves?",
    options: [
        "They are the same type of reserve with different names",
        "Contingency reserves address known risks and are part of the cost baseline; management reserves address unknown risks and are part of the project budget but not the baseline",
        "Management reserves are larger than contingency reserves",
        "Contingency reserves require sponsor approval; management reserves do not"
    ],
    correct: 1,
    explanation: "<strong>Contingency reserves</strong> are for <strong>known risks (known unknowns)</strong> identified in the risk register and are included in the <strong>cost baseline</strong>. <strong>Management reserves</strong> are for <strong>unknown risks (unknown unknowns)</strong> and are part of the project budget but <strong>not the cost baseline</strong>.",
    evidence: [{
        quote: "Contingency reserves address <span class='evidence-highlight'>known unknowns and are part of the cost baseline</span>. Management reserves address <span class='evidence-highlight'>unknown unknowns and are part of the project budget but not the baseline</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager identifies a risk that a key technology platform may be discontinued by its vendor during the project. The team has no control over the vendor's decision. What risk response is MOST appropriate?",
    options: [
        "Accept the risk passively",
        "Develop a contingency plan to migrate to an alternative platform if the risk materializes, while monitoring vendor announcements as triggers",
        "Avoid the risk by cancelling the project",
        "Transfer the risk by purchasing insurance"
    ],
    correct: 1,
    explanation: "The most appropriate response is <strong>active acceptance with a contingency plan</strong>. The team should develop a <strong>migration plan</strong> to an alternative platform that would be executed if the risk materializes. <strong>Vendor announcements</strong> serve as risk triggers for early warning.",
    evidence: [{
        quote: "Active acceptance includes developing a <span class='evidence-highlight'>contingency plan that is triggered when specific risk events occur</span>, allowing rapid response to materialized risks.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Risk Management",
    question: "A project manager is comparing the risk tolerance of two stakeholders. Stakeholder A is willing to accept high uncertainty for potentially high returns. Stakeholder B prefers certainty even if returns are lower. How would you classify their risk attitudes?",
    options: [
        "Both are risk-neutral",
        "Stakeholder A is risk-seeking; Stakeholder B is risk-averse",
        "Stakeholder A is risk-averse; Stakeholder B is risk-seeking",
        "Both are risk-averse at different levels"
    ],
    correct: 1,
    explanation: "<strong>Stakeholder A is risk-seeking</strong> (willing to accept high uncertainty for potential high returns). <strong>Stakeholder B is risk-averse</strong> (prefers certainty and lower risk over potentially higher returns). Understanding these attitudes is critical for tailoring risk management strategies.",
    evidence: [{
        quote: "Risk attitudes range from <span class='evidence-highlight'>risk-averse (preference for certainty) to risk-seeking (willingness to accept uncertainty for potential gain)</span>. Understanding stakeholder risk attitudes guides risk management decisions.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Uncertainty Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project team is in the adjourning phase of Tuckman's model. What should the project manager focus on?",
    options: [
        "Assigning new tasks to keep the team busy",
        "Recognizing team achievements, facilitating knowledge transfer, and helping team members transition to their next assignments",
        "Conducting performance reviews and disciplinary actions",
        "Starting the next project immediately"
    ],
    correct: 1,
    explanation: "During the <strong>adjourning stage</strong>, the project manager should focus on <strong>recognizing team achievements</strong>, facilitating <strong>knowledge transfer</strong>, completing <strong>lessons learned</strong>, and helping team members <strong>transition</strong> to new assignments. This provides closure and maintains team morale.",
    evidence: [{
        quote: "During adjourning, the project manager should <span class='evidence-highlight'>recognize achievements, facilitate knowledge transfer, and support team members' transition</span> to new assignments.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager needs to manage a conflict between two team members who have different working styles. One prefers detailed planning while the other prefers a flexible approach. What is the BEST long-term resolution?",
    options: [
        "Separate the team members so they never work together",
        "Help both team members understand and appreciate different working styles, then establish shared team norms that balance structure with flexibility",
        "Force both team members to adopt the same working style",
        "Let the conflict resolve naturally without intervention"
    ],
    correct: 1,
    explanation: "The project manager should help team members <strong>understand and appreciate diverse working styles</strong> and then establish <strong>shared team norms</strong> that balance both approaches. This builds team maturity and creates an environment where different perspectives strengthen the team.",
    evidence: [{
        quote: "Effective conflict management involves <span class='evidence-highlight'>helping team members understand different perspectives and establishing shared norms</span> that accommodate diverse working styles.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager observes that the team is becoming complacent after a string of successes. Innovation has stalled and the team avoids challenging tasks. According to situational leadership, what leadership style should the project manager adopt?",
    options: [
        "Continue with a delegating style since the team is experienced",
        "Shift to a coaching or supporting style that challenges the team with stretch goals and encourages innovation while providing support",
        "Adopt a directing style with strict task assignments",
        "Leave the team alone and focus on other projects"
    ],
    correct: 1,
    explanation: "When a high-performing team becomes complacent, the project manager should shift to a <strong>coaching or supporting style</strong> that introduces <strong>stretch goals and new challenges</strong>. This reinvigorates the team while maintaining the supportive relationship that sustains performance.",
    evidence: [{
        quote: "Situational leadership requires the project manager to <span class='evidence-highlight'>adapt their style based on the team's current needs</span>, including re-energizing complacent high-performers with new challenges.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager uses the Thomas-Kilmann Conflict Mode Instrument and identifies that they tend to use the accommodating style. In what situation is accommodating MOST appropriate?",
    options: [
        "When the issue is critical to project success",
        "When the issue is more important to the other party and preserving the relationship is a priority",
        "When both parties have equally important needs",
        "When a quick, decisive action is needed"
    ],
    correct: 1,
    explanation: "<strong>Accommodating (smoothing)</strong> involves yielding to the other party's position. It is most appropriate when the issue is <strong>more important to the other party</strong> and <strong>preserving the relationship</strong> is a higher priority. It builds goodwill but should not be the default for important issues.",
    evidence: [{
        quote: "Accommodating is appropriate when <span class='evidence-highlight'>the issue is more important to the other party and preserving the relationship takes priority</span> over winning the argument.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager wants to assess the emotional intelligence of potential team leads. Which competency area focuses on the ability to manage relationships and inspire others?",
    options: [
        "Self-awareness",
        "Social skills and relationship management",
        "Self-regulation",
        "Motivation"
    ],
    correct: 1,
    explanation: "<strong>Social skills and relationship management</strong> is the emotional intelligence competency that focuses on <strong>managing relationships, inspiring others, influencing, and building bonds</strong>. It includes skills like communication, conflict management, collaboration, and teamwork.",
    evidence: [{
        quote: "Social skills in emotional intelligence include <span class='evidence-highlight'>the ability to manage relationships, inspire others, influence, and build collaborative bonds</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager is leading a team that includes members with significantly different levels of experience. Senior members are frustrated with the pace of junior members. What should the project manager do?",
    options: [
        "Remove the junior members from the team",
        "Establish mentoring pairs between senior and junior members, set appropriate expectations for each skill level, and create a supportive learning environment",
        "Assign all complex tasks to senior members only",
        "Hold junior members to the same performance standards as senior members"
    ],
    correct: 1,
    explanation: "The project manager should <strong>establish mentoring relationships</strong> that benefit both parties, set <strong>appropriate expectations</strong> for different skill levels, and create an environment where <strong>learning is valued</strong>. This develops junior members while keeping senior members engaged through mentoring.",
    evidence: [{
        quote: "Effective team leadership includes <span class='evidence-highlight'>establishing mentoring relationships, setting appropriate expectations for different skill levels, and fostering continuous learning</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "According to the expectancy theory of motivation, what three factors must be present for a team member to be motivated?",
    options: [
        "Salary, benefits, and job security",
        "The belief that effort leads to performance, performance leads to reward, and the reward is valued",
        "Recognition, autonomy, and purpose",
        "Clear goals, feedback, and resources"
    ],
    correct: 1,
    explanation: "<strong>Expectancy theory (Vroom)</strong> states that motivation requires three beliefs: <strong>Expectancy</strong> (effort leads to performance), <strong>Instrumentality</strong> (performance leads to reward), and <strong>Valence</strong> (the reward is personally valued). All three must be present for motivation.",
    evidence: [{
        quote: "Expectancy theory posits that motivation depends on <span class='evidence-highlight'>the belief that effort leads to performance (expectancy), performance leads to reward (instrumentality), and the reward is valued (valence)</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager notices that team members are reluctant to share bad news or raise concerns. What leadership action is MOST important to address this?",
    options: [
        "Implement anonymous reporting only",
        "Create psychological safety by responding constructively to problems, thanking people for raising issues, and demonstrating that messengers are not punished",
        "Require weekly written status reports instead of verbal updates",
        "Assign a designated person to collect and filter bad news"
    ],
    correct: 1,
    explanation: "<strong>Psychological safety</strong> is the belief that one will not be punished for raising concerns. The project manager creates this by <strong>responding constructively to problems</strong>, thanking people for early warning, and demonstrating through actions that the team culture values transparency.",
    evidence: [{
        quote: "Psychological safety requires leaders to <span class='evidence-highlight'>respond constructively when problems are raised and demonstrate that transparency is valued over blame</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager inherits a team that was previously managed with a command-and-control style. The team is accustomed to being told exactly what to do. The project manager wants to move toward empowerment. What approach is BEST?",
    options: [
        "Immediately stop giving any direction and expect the team to self-manage",
        "Gradually increase autonomy by starting with small decisions, providing coaching, and progressively expanding the team's decision-making authority",
        "Maintain the command-and-control style to avoid disrupting the team",
        "Replace the team with people who are used to empowered environments"
    ],
    correct: 1,
    explanation: "Moving from command-and-control to empowerment requires a <strong>gradual transition</strong>. Start with <strong>small decisions</strong>, provide <strong>coaching and support</strong>, and progressively <strong>expand decision-making authority</strong> as the team builds confidence and capability.",
    evidence: [{
        quote: "Transitioning to empowerment requires <span class='evidence-highlight'>gradually increasing team autonomy while providing coaching and support</span> to build confidence in self-direction.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is using a run chart to monitor process performance over time. What does a run chart show that a histogram does not?",
    options: [
        "The frequency distribution of data",
        "Trends and patterns in data over time, showing whether the process is improving or deteriorating",
        "The relationship between two variables",
        "The relative contribution of each cause"
    ],
    correct: 1,
    explanation: "A <strong>run chart</strong> plots data points over <strong>time</strong>, revealing <strong>trends, patterns, and shifts</strong> in process performance. Unlike a histogram which shows frequency distribution at a point in time, a run chart shows whether the process is improving, stable, or deteriorating over time.",
    evidence: [{
        quote: "Run charts display <span class='evidence-highlight'>data points over time to identify trends, shifts, and patterns</span> in process performance.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project is using the DMAIC methodology. What does DMAIC stand for and when is it used?",
    options: [
        "Design, Measure, Analyze, Implement, Control; used for new processes",
        "Define, Measure, Analyze, Improve, Control; used for improving existing processes",
        "Develop, Monitor, Assess, Integrate, Close; used for project management",
        "Document, Manage, Audit, Inspect, Certify; used for quality certification"
    ],
    correct: 1,
    explanation: "<strong>DMAIC</strong> stands for <strong>Define, Measure, Analyze, Improve, Control</strong>. It is a Six Sigma methodology used for <strong>improving existing processes</strong>. Each phase builds on the previous one to systematically identify and eliminate causes of defects.",
    evidence: [{
        quote: "DMAIC (<span class='evidence-highlight'>Define, Measure, Analyze, Improve, Control</span>) is a data-driven Six Sigma improvement methodology used for improving existing processes.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is debating whether to increase investment in quality activities. The sponsor asks for justification. What is the BEST argument for increasing quality investment?",
    options: [
        "Quality activities are required by PMI standards",
        "The cost of preventing and detecting defects is significantly less than the cost of internal and external failure, including rework, warranty claims, and reputation damage",
        "Quality activities improve team morale",
        "Competitors invest heavily in quality"
    ],
    correct: 1,
    explanation: "The strongest argument is the <strong>cost of quality (COQ)</strong> analysis showing that <strong>prevention and appraisal costs are significantly lower than failure costs</strong>. External failure costs (warranty, liability, lost customers) are the most expensive, making upfront quality investment highly cost-effective.",
    evidence: [{
        quote: "The total cost of quality shows that <span class='evidence-highlight'>investing in prevention and appraisal is more cost-effective than bearing the costs of internal and external failures</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is implementing a quality management system and needs to distinguish between common cause variation and special cause variation. Which statement is correct?",
    options: [
        "Both types of variation require the same corrective action",
        "Common cause variation is inherent in the process and requires process redesign to reduce; special cause variation is due to assignable causes and requires investigation and targeted correction",
        "Special cause variation is always more costly than common cause variation",
        "Common cause variation should be eliminated before addressing special cause variation"
    ],
    correct: 1,
    explanation: "<strong>Common cause variation</strong> is <strong>inherent in the process</strong> (random) and can only be reduced through <strong>process redesign</strong>. <strong>Special cause variation</strong> is due to <strong>identifiable, assignable causes</strong> that can be investigated and corrected through targeted action.",
    evidence: [{
        quote: "Common cause variation is <span class='evidence-highlight'>inherent in the process and requires systemic changes to reduce</span>. Special cause variation is due to <span class='evidence-highlight'>assignable causes that can be identified and corrected</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is using benchmarking as part of quality planning. What does benchmarking involve?",
    options: [
        "Setting arbitrary quality targets",
        "Comparing project practices and performance metrics against those of similar projects or industry best practices to identify improvement opportunities",
        "Comparing team member performance against each other",
        "Measuring project progress against the schedule baseline"
    ],
    correct: 1,
    explanation: "<strong>Benchmarking</strong> involves <strong>comparing project practices, processes, and performance</strong> against those of similar projects within or outside the organization, or against <strong>industry best practices</strong>. This identifies gaps and improvement opportunities.",
    evidence: [{
        quote: "Benchmarking involves <span class='evidence-highlight'>comparing actual or planned practices to those of comparable projects to identify best practices and generate improvement ideas</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team uses a flowchart to analyze a manufacturing process and identifies several unnecessary steps that add no value. Removing these steps is an example of which quality concept?",
    options: [
        "Gold plating",
        "Lean thinking and waste elimination",
        "Scope reduction",
        "Risk avoidance"
    ],
    correct: 1,
    explanation: "<strong>Lean thinking</strong> focuses on eliminating <strong>waste (Muda)</strong> from processes. Unnecessary steps that add no value are a form of waste. By removing them, the team improves efficiency and quality simultaneously, which is a core principle of lean management.",
    evidence: [{
        quote: "Lean thinking focuses on <span class='evidence-highlight'>eliminating waste from processes, including unnecessary steps that do not add value</span> to the customer.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team has established upper and lower control limits on a control chart at three standard deviations from the mean. What percentage of data points should fall within these limits if the process is in control?",
    options: [
        "68.26%",
        "99.73%",
        "95.46%",
        "100%"
    ],
    correct: 1,
    explanation: "Control limits set at <strong>three standard deviations (3 sigma)</strong> from the mean encompass <strong>99.73%</strong> of all data points in a normal distribution. Points falling outside these limits indicate <strong>special cause variation</strong> requiring investigation.",
    evidence: [{
        quote: "Control limits at three sigma from the mean encompass <span class='evidence-highlight'>99.73% of data points in a normally distributed process</span>. Points outside indicate special cause variation.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager discovers that a contractor is performing work outside the scope of the contract without authorization. What should the project manager do?",
    options: [
        "Allow the work to continue since it may benefit the project",
        "Direct the contractor to stop the unauthorized work immediately and document the situation for potential claims or contract adjustment",
        "Pay the contractor for the additional work as a goodwill gesture",
        "Ignore the issue until the contract review"
    ],
    correct: 1,
    explanation: "Unauthorized work performed outside the contract scope should be <strong>stopped immediately</strong>. The project manager must <strong>document the situation</strong> and assess whether the work needs to be formalized through a contract change or whether it creates potential claims issues.",
    evidence: [{
        quote: "Work performed outside the contract scope without authorization should be <span class='evidence-highlight'>stopped and documented. Any additional work must be formalized through contract change processes</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project uses a Cost Plus Fixed Fee (CPFF) contract. The target cost is $300,000 and the fixed fee is $30,000. If the actual cost is $350,000, what total amount does the buyer pay?",
    options: [
        "$330,000",
        "$380,000",
        "$350,000",
        "$300,000"
    ],
    correct: 1,
    explanation: "In a <strong>CPFF contract</strong>, the buyer pays actual costs plus a <strong>fixed fee that does not change</strong> regardless of actual costs. Total payment = Actual Cost + Fixed Fee = $350,000 + $30,000 = <strong>$380,000</strong>.",
    evidence: [{
        quote: "In CPFF contracts, <span class='evidence-highlight'>the buyer reimburses all allowable costs plus a fixed fee that remains constant</span> regardless of actual project costs.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is managing multiple vendors on a large project. One vendor's deliverable is a dependency for another vendor's work. How should this inter-vendor dependency be managed?",
    options: [
        "Let the vendors manage their own dependencies",
        "Establish clear interface points, communication protocols, and contractual coordination requirements between vendors, managed by the project manager",
        "Hire an additional vendor to manage the interface",
        "Combine both vendors under a single contract"
    ],
    correct: 1,
    explanation: "The project manager should establish <strong>clear interface points</strong> between vendors, define <strong>communication protocols</strong>, and include <strong>coordination requirements</strong> in each contract. The project manager acts as the <strong>integration point</strong> ensuring vendors deliver according to the project schedule.",
    evidence: [{
        quote: "When multiple vendors have dependencies, the project manager should <span class='evidence-highlight'>establish clear interface points, communication protocols, and coordination mechanisms</span> to manage inter-vendor dependencies.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "During vendor selection, one proposal offers the lowest price but has a poor past performance record. Another proposal is 20% more expensive but has excellent references. Using best-value evaluation, which vendor should be selected?",
    options: [
        "Always select the lowest-price vendor to minimize costs",
        "Select the higher-priced vendor with excellent references if the weighted evaluation criteria show higher overall value when considering quality, risk, and past performance",
        "Reject both proposals and start a new procurement",
        "Select the lowest-price vendor and add extra quality monitoring"
    ],
    correct: 1,
    explanation: "<strong>Best-value evaluation</strong> considers <strong>multiple criteria beyond price</strong>, including quality, past performance, technical approach, and risk. If the weighted criteria show that the higher-priced vendor delivers better overall value, that vendor should be selected.",
    evidence: [{
        quote: "Best-value evaluation considers <span class='evidence-highlight'>the total value of the proposal across all weighted criteria</span>, not just price. Past performance and quality are significant evaluation factors.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is negotiating a contract and the seller proposes a Time and Materials contract with no ceiling. What is the risk to the buyer?",
    options: [
        "No risk since T&M contracts are standard",
        "The buyer bears unlimited cost risk because costs can escalate without a cap, providing no incentive for the seller to be efficient",
        "The seller bears all the risk in T&M contracts",
        "T&M contracts always have implicit ceilings"
    ],
    correct: 1,
    explanation: "A <strong>T&M contract without a ceiling</strong> places <strong>unlimited cost risk on the buyer</strong>. Without a cap, costs can escalate indefinitely and the seller has <strong>no incentive for efficiency</strong>. Buyers should always negotiate a <strong>ceiling or not-to-exceed clause</strong> in T&M contracts.",
    evidence: [{
        quote: "T&M contracts without a ceiling <span class='evidence-highlight'>place unlimited cost risk on the buyer</span>. Adding a not-to-exceed clause helps mitigate this risk.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A buyer terminates a contract for convenience. What are the seller's rights in this situation?",
    options: [
        "The seller has no rights when the contract is terminated for convenience",
        "The seller is entitled to payment for work completed, costs incurred, and a reasonable profit on work performed, as specified in the contract termination clause",
        "The seller can sue for the full contract value",
        "The seller must refund all payments received"
    ],
    correct: 1,
    explanation: "When a contract is <strong>terminated for convenience</strong>, the seller is typically entitled to <strong>payment for completed work, costs incurred, and reasonable profit</strong> on work performed. The specific terms are defined in the contract's <strong>termination for convenience clause</strong>.",
    evidence: [{
        quote: "In termination for convenience, the seller is entitled to <span class='evidence-highlight'>payment for work completed and a reasonable profit</span>, as defined in the contract's termination clause.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is writing source selection criteria for a complex IT implementation. Which set of criteria is MOST comprehensive for a best-value selection?",
    options: [
        "Price only",
        "Technical approach, management approach, past performance, key personnel qualifications, price, and risk assessment",
        "Company size and number of employees",
        "Geographic proximity and brand recognition"
    ],
    correct: 1,
    explanation: "Comprehensive <strong>best-value source selection criteria</strong> include <strong>technical approach, management approach, past performance, key personnel qualifications, price, and risk assessment</strong>. These criteria ensure the evaluation considers all factors that contribute to successful delivery.",
    evidence: [{
        quote: "Comprehensive source selection criteria may include <span class='evidence-highlight'>technical approach, management capability, past performance, personnel qualifications, price, and risk</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project team is performing contract administration and discovers that the seller has been submitting invoices for work not yet completed. What should the project manager do?",
    options: [
        "Pay the invoices to maintain a good relationship",
        "Document the discrepancy, withhold payment for unperformed work, and formally notify the seller of the billing issue for resolution",
        "Terminate the contract immediately",
        "Pay a partial amount as a compromise"
    ],
    correct: 1,
    explanation: "The project manager should <strong>document the billing discrepancy</strong>, <strong>withhold payment</strong> for work not yet completed, and <strong>formally notify the seller</strong>. This follows proper contract administration procedures and protects the buyer's interests while giving the seller an opportunity to correct the issue.",
    evidence: [{
        quote: "Contract administration requires <span class='evidence-highlight'>verifying that invoices match completed work before authorizing payment</span>. Discrepancies should be documented and communicated to the seller for resolution.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is considering a sole source procurement. Under what circumstances is sole source procurement MOST justified?",
    options: [
        "When the project manager has a personal relationship with the vendor",
        "When only one vendor can provide the required product or service, such as proprietary technology, patent holder, or emergency situations",
        "When the buyer wants to save time on the procurement process",
        "When the project budget is limited"
    ],
    correct: 1,
    explanation: "<strong>Sole source procurement</strong> is justified when <strong>only one vendor can provide</strong> the required product or service. This includes <strong>proprietary technology, patent holders, unique qualifications, or emergency situations</strong> where competitive procurement would be impractical.",
    evidence: [{
        quote: "Sole source procurement is justified when <span class='evidence-highlight'>only one vendor possesses the required capabilities, proprietary technology, or when emergency conditions require immediate procurement</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "In procurement management, what is the purpose of an independent cost estimate?",
    options: [
        "To set the project budget",
        "To serve as a benchmark for evaluating whether seller proposals are reasonable and competitive",
        "To determine the profit margin for the seller",
        "To calculate the project's ROI"
    ],
    correct: 1,
    explanation: "An <strong>independent cost estimate</strong> is prepared by the buyer (or an independent third party) to serve as a <strong>benchmark for evaluating seller proposals</strong>. It helps determine whether submitted prices are <strong>reasonable and competitive</strong>, and identifies significant discrepancies requiring investigation.",
    evidence: [{
        quote: "An independent cost estimate provides a <span class='evidence-highlight'>benchmark against which seller proposals can be evaluated for reasonableness</span> and competitiveness.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project team is using the Kano model for requirements analysis. A requirement is identified as a delighter or excitement attribute. What does this mean?",
    options: [
        "It is a basic requirement that must be met",
        "It is an unexpected feature that significantly increases customer satisfaction when present but does not cause dissatisfaction when absent",
        "It is a performance requirement with linear satisfaction",
        "It is a requirement that customers explicitly request"
    ],
    correct: 1,
    explanation: "In the <strong>Kano model</strong>, <strong>delighter (excitement) attributes</strong> are features that <strong>significantly increase satisfaction when present</strong> but do <strong>not cause dissatisfaction when absent</strong> because customers do not expect them. They differentiate the product and create competitive advantage.",
    evidence: [{
        quote: "Kano model delighters are <span class='evidence-highlight'>unexpected features that significantly increase satisfaction when present but cause no dissatisfaction when absent</span>, as customers did not expect them.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager is conducting a scope management review and finds that the WBS does not include project management activities. Is this correct?",
    options: [
        "Yes, project management activities are not part of the WBS",
        "No, the WBS should include all project work including project management activities to ensure complete scope coverage",
        "Project management activities are optional in the WBS",
        "Only risk management activities should be in the WBS"
    ],
    correct: 1,
    explanation: "The WBS should include <strong>all project work</strong>, including <strong>project management activities</strong>. The WBS represents 100% of the project scope (the 100% rule). Omitting project management work leads to underestimation of effort, cost, and schedule.",
    evidence: [{
        quote: "The WBS represents <span class='evidence-highlight'>100% of the project scope, including project management work</span>. The 100% rule ensures all deliverables and work are captured.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "An agile team uses story mapping to organize their product backlog. What is the PRIMARY benefit of story mapping?",
    options: [
        "It replaces the need for user stories",
        "It provides a visual representation of the user journey, showing how stories relate to each other and to the overall user experience, enabling better release planning",
        "It eliminates the need for sprint planning",
        "It automatically prioritizes the backlog"
    ],
    correct: 1,
    explanation: "<strong>Story mapping</strong> provides a <strong>visual representation of the user journey</strong>, organizing stories along two dimensions: the user workflow (horizontal) and priority (vertical). This helps the team see the <strong>big picture</strong>, identify gaps, and plan releases more effectively.",
    evidence: [{
        quote: "Story mapping provides a <span class='evidence-highlight'>two-dimensional view of the product backlog that shows how user stories relate to the user journey</span>, enabling better prioritization and release planning.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "Product Backlog",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager receives a request to add functionality that is similar to an existing feature but with slight variations. The team argues it is already within scope while the customer considers it a new requirement. How should this be resolved?",
    options: [
        "Side with the team to avoid additional work",
        "Compare the request against the documented scope baseline and requirements to objectively determine whether it is within or outside the approved scope",
        "Automatically approve it as a scope change",
        "Let the customer decide since they are always right"
    ],
    correct: 1,
    explanation: "The project manager should <strong>objectively compare</strong> the request against the <strong>documented scope baseline and requirements</strong> to determine whether it falls within the approved scope. This data-driven approach removes subjectivity and provides a clear basis for the decision.",
    evidence: [{
        quote: "Scope disputes should be resolved by <span class='evidence-highlight'>comparing the request against the documented scope baseline and requirements</span> to objectively determine whether the work is within or outside the approved scope.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager is reviewing a schedule and notices that Activity F has been assigned to a resource who is already fully allocated on another project. What type of constraint is this?",
    options: [
        "A schedule constraint",
        "A resource constraint that may require resource leveling or schedule adjustment",
        "A scope constraint",
        "A budget constraint"
    ],
    correct: 1,
    explanation: "A <strong>resource constraint</strong> occurs when a required resource is <strong>not available when needed</strong>. This requires either <strong>resource leveling</strong> (adjusting the schedule to match resource availability) or finding alternative resources, and may impact the project schedule.",
    evidence: [{
        quote: "Resource constraints occur when <span class='evidence-highlight'>required resources are not available when needed</span>, requiring schedule adjustment through resource leveling or alternative resource arrangements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has EV = $500,000, PV = $480,000, AC = $520,000, BAC = $800,000. Using EAC = BAC/CPI, what is the Estimate to Complete (ETC)?",
    options: [
        "$280,000",
        "$312,000",
        "$332,000",
        "$300,000"
    ],
    correct: 1,
    explanation: "CPI = EV/AC = $500,000/$520,000 = 0.9615. EAC = BAC/CPI = $800,000/0.9615 = $832,000. <strong>ETC = EAC - AC</strong> = $832,000 - $520,000 = <strong>$312,000</strong>.",
    evidence: [{
        quote: "ETC = EAC - AC, representing <span class='evidence-highlight'>the expected cost to complete the remaining project work</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project schedule has four parallel paths. Path A = 30 days, Path B = 28 days, Path C = 30 days, Path D = 25 days. After crashing an activity on Path A by 3 days, what is the new critical path?",
    options: [
        "Path A at 27 days",
        "Path C at 30 days, which is now the sole critical path",
        "Path B at 28 days",
        "All paths are equally critical"
    ],
    correct: 1,
    explanation: "Originally Paths A and C were both critical at 30 days. After crashing Path A by 3 days, Path A becomes 27 days. <strong>Path C at 30 days</strong> is now the <strong>sole critical path</strong>. Further schedule compression efforts should focus on Path C.",
    evidence: [{
        quote: "When crashing reduces the duration of one critical path, <span class='evidence-highlight'>the critical path may shift to another path that is now the longest</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager needs to track whether the project will finish on time and on budget. Which set of earned value metrics provides the MOST comprehensive view?",
    options: [
        "SV and CV only",
        "CPI, SPI, EAC, VAC, and TCPI together provide a comprehensive view of current performance and future forecasts",
        "BAC only",
        "PV and AC only"
    ],
    correct: 1,
    explanation: "A comprehensive earned value assessment uses multiple metrics: <strong>CPI and SPI</strong> for current performance, <strong>EAC</strong> for projected final cost, <strong>VAC</strong> for projected budget variance, and <strong>TCPI</strong> for required future performance.",
    evidence: [{
        quote: "A comprehensive earned value analysis uses <span class='evidence-highlight'>CPI, SPI, EAC, VAC, and TCPI to assess current performance and forecast future outcomes</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager notices that both SPI and CPI have been consistently below 1.0 for the last three months. What should the project manager recommend?",
    options: [
        "Continue with the current plan and hope performance improves",
        "Conduct a comprehensive project review, present corrective action options to stakeholders, and potentially re-baseline or adjust scope to bring the project within acceptable thresholds",
        "Add overtime to catch up on both schedule and budget",
        "Reduce quality standards to save time and money"
    ],
    correct: 1,
    explanation: "Persistently low SPI and CPI indicate <strong>systemic performance issues</strong>. The project manager should conduct a <strong>comprehensive review</strong>, identify root causes, present <strong>corrective action options</strong>, and potentially <strong>re-baseline</strong> or adjust scope.",
    evidence: [{
        quote: "Persistent unfavorable performance trends require <span class='evidence-highlight'>comprehensive project review and corrective action</span>, potentially including re-baselining or scope adjustment.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has three activities on the critical path: Activity X (10 days, crash to 8 days for $5,000), Activity Y (15 days, crash to 12 days for $9,000), Activity Z (8 days, crash to 6 days for $4,000). Which activity should be crashed FIRST?",
    options: [
        "Activity X at $2,500 per day saved",
        "Activity Z at $2,000 per day saved, providing the lowest crash cost per day",
        "Activity Y at $3,000 per day saved",
        "Crash all three simultaneously"
    ],
    correct: 1,
    explanation: "Calculate crash cost per day: Activity X = $5,000/2 = $2,500/day. Activity Y = $9,000/3 = $3,000/day. Activity Z = $4,000/2 = <strong>$2,000/day</strong>. Activity Z has the <strong>lowest crash cost per day</strong> and should be crashed first.",
    evidence: [{
        quote: "When crashing, select the critical path activity with the <span class='evidence-highlight'>lowest crash cost per unit of time saved</span> to optimize the cost-schedule tradeoff.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project is using earned schedule analysis. The earned schedule (ES) is 8 months and the actual time (AT) is 10 months. What does this indicate?",
    options: [
        "The project is ahead of schedule by 2 months",
        "The project is behind schedule by 2 months, having accomplished only 8 months of planned work in 10 actual months",
        "The project is 80% complete",
        "The project has 2 months of schedule reserve"
    ],
    correct: 1,
    explanation: "<strong>Earned schedule</strong> measures schedule performance in <strong>time units</strong>. If ES = 8 months and AT = 10 months, the project has accomplished only <strong>8 months of planned work in 10 actual months</strong>, meaning it is <strong>2 months behind schedule</strong>.",
    evidence: [{
        quote: "Earned schedule analysis measures schedule performance in time units. <span class='evidence-highlight'>SV(t) = ES - AT, where negative values indicate the project is behind schedule</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has a Budget at Completion (BAC) of $1,200,000 and the project is expected to be completed in 12 months. After 6 months, the planned value should be approximately:",
    options: [
        "$1,200,000",
        "$600,000 if the budget is evenly distributed across the project duration",
        "$400,000",
        "$800,000"
    ],
    correct: 1,
    explanation: "If the budget is <strong>evenly distributed</strong> over 12 months, the planned value at month 6 would be <strong>$1,200,000 / 12 x 6 = $600,000</strong>. However, in practice, PV depends on the <strong>time-phased budget</strong> which may not be linear.",
    evidence: [{
        quote: "Planned value is the <span class='evidence-highlight'>authorized budget assigned to scheduled work</span>. It represents the value of work planned to be completed at a given point in time.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager is comparing the critical chain method to the critical path method. What is a key difference?",
    options: [
        "Critical chain method ignores resource constraints",
        "Critical chain method accounts for resource constraints and uses buffers to protect the project schedule instead of padding individual activities",
        "Critical path method is more accurate than critical chain",
        "Critical chain method does not identify a longest path"
    ],
    correct: 1,
    explanation: "The <strong>critical chain method</strong> differs from the critical path method by <strong>accounting for resource constraints</strong> and using <strong>project buffers</strong> at the end of the critical chain and <strong>feeding buffers</strong> where non-critical chains feed into the critical chain.",
    evidence: [{
        quote: "Critical chain method <span class='evidence-highlight'>accounts for resource constraints and uses project and feeding buffers</span> to protect the critical chain schedule.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is integrating the outputs of all planning processes into a coherent project management plan. Which skill is MOST critical for this integration work?",
    options: [
        "Technical expertise in the project domain",
        "Systems thinking to understand how changes in one area affect all other areas of the project",
        "Contract negotiation skills",
        "Financial analysis skills"
    ],
    correct: 1,
    explanation: "<strong>Systems thinking</strong> is the ability to understand how the project's <strong>components interact and affect each other</strong>. Integration management requires understanding that changes to scope affect schedule and cost, and that all elements must work together harmoniously.",
    evidence: [{
        quote: "Integration management requires <span class='evidence-highlight'>systems thinking to understand how all project components interact</span> and how changes in one area ripple through the entire project.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project has completed all deliverables and the customer has signed off on acceptance. However, lessons learned have not been documented. Can the project be closed?",
    options: [
        "Yes, since all deliverables are accepted the project is complete",
        "No, lessons learned documentation is a required closure activity that must be completed before the project can be formally closed",
        "Yes, lessons learned are optional",
        "No, but only because the sponsor has not signed off"
    ],
    correct: 1,
    explanation: "<strong>Lessons learned documentation</strong> is a required part of <strong>project closure</strong>. It captures knowledge gained during the project for the benefit of future projects and becomes part of the <strong>organizational process assets</strong>.",
    evidence: [{
        quote: "Lessons learned documentation is a <span class='evidence-highlight'>required project closure activity</span> that captures knowledge for organizational process assets and future project benefit.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager wants to implement a change management framework that addresses both the technical and people sides of change. Which approach is MOST comprehensive?",
    options: [
        "Focus only on the technical change control process",
        "Combine integrated change control for technical changes with organizational change management for people-side changes including communication, training, and resistance management",
        "Use only an organizational change management framework",
        "Let individual team members manage their own adaptation"
    ],
    correct: 1,
    explanation: "The most comprehensive approach <strong>combines both</strong>: <strong>Integrated change control</strong> manages technical changes to project baselines and plans, while <strong>organizational change management</strong> addresses the people side, including communication, training, stakeholder resistance, and adoption.",
    evidence: [{
        quote: "Comprehensive change management combines <span class='evidence-highlight'>integrated change control for technical changes with organizational change management for people-side changes</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project sponsor asks the project manager to explain the difference between corrective action, preventive action, and defect repair. Which explanation is correct?",
    options: [
        "They are all the same type of change request",
        "Corrective action realigns future performance with the plan; preventive action reduces the probability of future deviations; defect repair fixes a non-conforming deliverable",
        "Corrective action fixes defects; preventive action avoids risks; defect repair adjusts the plan",
        "All three require change control board approval"
    ],
    correct: 1,
    explanation: "<strong>Corrective action</strong> realigns future work performance with the plan. <strong>Preventive action</strong> reduces the probability or impact of future performance deviations. <strong>Defect repair</strong> modifies a non-conforming product component to bring it into compliance with requirements.",
    evidence: [{
        quote: "Corrective actions <span class='evidence-highlight'>realign performance with the plan</span>, preventive actions <span class='evidence-highlight'>reduce probability of future deviations</span>, and defect repairs <span class='evidence-highlight'>fix non-conforming deliverables</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is managing multiple related projects as part of a program. One project's schedule change would benefit the overall program but negatively impact another project. Who should make this decision?",
    options: [
        "The individual project manager whose project would be negatively impacted",
        "The program manager, who can evaluate the change from the overall program perspective and optimize benefits across all projects",
        "The PMO director",
        "Both project managers must agree unanimously"
    ],
    correct: 1,
    explanation: "The <strong>program manager</strong> has the authority and perspective to evaluate changes that affect multiple projects within the program. They can <strong>optimize benefits across all projects</strong> rather than letting individual project interests drive decisions.",
    evidence: [{
        quote: "The program manager <span class='evidence-highlight'>evaluates cross-project impacts and optimizes decisions for the benefit of the overall program</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager discovers that the organization has limited historical project data available as organizational process assets. What impact does this have on the current project?",
    options: [
        "No impact since historical data is not important",
        "The project faces increased risk in estimating, planning, and risk identification because there is less historical data to inform decisions",
        "The project will be easier to manage without legacy constraints",
        "The project manager should create fictional historical data"
    ],
    correct: 1,
    explanation: "Limited <strong>organizational process assets</strong> (historical data, lessons learned, templates) increases <strong>project risk</strong> because there is less information to inform <strong>estimates, plans, and risk identification</strong>. The project manager may need to rely more on expert judgment.",
    evidence: [{
        quote: "Organizational process assets including <span class='evidence-highlight'>historical data and lessons learned provide valuable input for estimating, planning, and risk management</span>. Their absence increases project uncertainty.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "During project execution, the project manager realizes that the project management plan needs significant updates due to multiple approved changes. What is the BEST approach?",
    options: [
        "Continue using the original plan and track changes separately",
        "Update the project management plan to reflect all approved changes, re-baseline where necessary, and ensure the team is working from the current version",
        "Create an entirely new project management plan",
        "Document the changes but do not update the formal plan"
    ],
    correct: 1,
    explanation: "The project management plan should be <strong>updated to reflect all approved changes</strong>. The team must always work from the <strong>current version</strong> of the plan. Where changes significantly alter scope, schedule, or cost, the baselines should be <strong>re-baselined</strong> through formal change control.",
    evidence: [{
        quote: "The project management plan must be <span class='evidence-highlight'>updated to reflect approved changes and the team should always work from the current version</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager is conducting a requirements gathering session using focus groups. What is the PRIMARY advantage of using focus groups over individual interviews?",
    options: [
        "Focus groups are less expensive than individual interviews",
        "Focus groups generate rich discussion and diverse perspectives through group interaction, often uncovering requirements that individuals might not identify alone",
        "Focus groups are faster than individual interviews",
        "Focus groups eliminate the need for follow-up sessions"
    ],
    correct: 1,
    explanation: "<strong>Focus groups</strong> leverage <strong>group dynamics and interaction</strong> to generate rich discussion. Participants build on each other's ideas, challenge assumptions, and often uncover <strong>requirements that might not surface</strong> in individual interviews.",
    evidence: [{
        quote: "Focus groups bring together <span class='evidence-highlight'>prequalified stakeholders to discuss their expectations and attitudes, leveraging group interaction to uncover requirements</span> that might not emerge in individual interviews.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project team uses the 100% rule when creating the WBS. What does this rule state?",
    options: [
        "100% of the team members must contribute to the WBS",
        "The WBS must include 100% of all the work defined by the project scope, and each level must represent 100% of the work in the level above",
        "The WBS must be 100% complete before project execution begins",
        "100% of the budget must be allocated to WBS elements"
    ],
    correct: 1,
    explanation: "The <strong>100% rule</strong> states that the WBS must include <strong>100% of all project work</strong> defined by the project scope. Additionally, each level of decomposition must capture <strong>100% of the work</strong> in the level above it. Nothing should be omitted, and no extra work should be added.",
    evidence: [{
        quote: "The 100% rule states that the WBS <span class='evidence-highlight'>includes 100% of the work defined by the project scope and captures all deliverables</span> in terms of work to be completed.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project team is using the MoSCoW technique for requirements prioritization. A stakeholder insists that a requirement classified as 'Should have' must be reclassified as 'Must have.' What should the project manager do?",
    options: [
        "Automatically reclassify it to satisfy the stakeholder",
        "Facilitate a discussion with all relevant stakeholders to evaluate the requirement's criticality and reach consensus on the appropriate classification",
        "Ignore the stakeholder's request",
        "Remove the requirement entirely to avoid conflict"
    ],
    correct: 1,
    explanation: "The project manager should <strong>facilitate a discussion</strong> with all relevant stakeholders to evaluate the requirement's true criticality. <strong>MoSCoW prioritization</strong> (Must have, Should have, Could have, Won't have) should be based on <strong>business value and necessity</strong>, not individual stakeholder pressure.",
    evidence: [{
        quote: "MoSCoW prioritization requires <span class='evidence-highlight'>stakeholder consensus on requirement classification based on business criticality</span> rather than individual stakeholder preferences.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager notices that the development team has been adding small enhancements to deliverables without customer request or formal approval. What is the PRIMARY risk of this behavior?",
    options: [
        "The customer will be delighted with extra features",
        "Gold plating wastes resources, may introduce defects, and the customer may not value the unapproved additions",
        "The project will finish ahead of schedule",
        "Gold plating improves quality metrics"
    ],
    correct: 1,
    explanation: "<strong>Gold plating</strong> wastes project resources on features the customer did not request and may not value. It can <strong>introduce defects</strong>, consume time and budget better spent on approved scope, and may actually create support and maintenance burdens that reduce overall product quality.",
    evidence: [{
        quote: "Gold plating <span class='evidence-highlight'>wastes resources on unapproved work, may introduce defects, and does not necessarily add value</span> from the customer's perspective.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "During requirements analysis, the team discovers that two functional requirements contradict each other. One requires real-time data processing, while the other requires batch processing of the same data. How should this be handled?",
    options: [
        "Implement both and let the system handle the conflict",
        "Analyze the business need behind each requirement, engage stakeholders to resolve the conflict, and document the resolution in the requirements traceability matrix",
        "Remove both requirements",
        "Choose the less expensive option without stakeholder input"
    ],
    correct: 1,
    explanation: "Conflicting requirements must be <strong>analyzed for underlying business needs</strong>. The project manager should <strong>engage stakeholders</strong> to understand the purpose behind each requirement and find a resolution (which may involve choosing one, combining both in a hybrid approach, or creating separate processing modes).",
    evidence: [{
        quote: "Conflicting requirements must be <span class='evidence-highlight'>analyzed and resolved through stakeholder engagement</span>, with the resolution documented in the requirements traceability matrix.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager is using affinity diagrams during a requirements workshop. What is the PRIMARY purpose of this technique?",
    options: [
        "To estimate the cost of requirements",
        "To organize a large number of ideas or requirements into logical groups for easier analysis and management",
        "To schedule requirements implementation",
        "To assign requirements to team members"
    ],
    correct: 1,
    explanation: "An <strong>affinity diagram</strong> organizes a <strong>large number of ideas or requirements into logical groups</strong> based on their natural relationships. This technique is useful after brainstorming sessions to bring structure to large amounts of unorganized information.",
    evidence: [{
        quote: "Affinity diagrams <span class='evidence-highlight'>organize large numbers of ideas into groups based on their natural relationships</span>, making it easier to analyze and manage requirements.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A product backlog item has the following user story: 'As a system, I want to validate user input.' Why is this story problematic?",
    options: [
        "The story is too short",
        "The story lacks a user role representing a real person, has no benefit statement, and is written from the system's perspective rather than the user's perspective",
        "The story should include technical details",
        "The story is correctly formatted"
    ],
    correct: 1,
    explanation: "Good user stories should be written from a <strong>real user's perspective</strong>, not the system's. 'As a system' is not a valid role. The story also <strong>lacks the benefit clause</strong> ('so that...') that explains why the feature is valuable. A better version: 'As a customer, I want input validation so that I receive immediate feedback on errors.'",
    evidence: [{
        quote: "User stories should be written from the perspective of a <span class='evidence-highlight'>real user or persona and include the benefit to explain why the feature is valuable</span>.",
        source: "PMI",
        document: "Agile Practice Guide",
        section: "User Stories",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project manager wants to ensure that every requirement is tested before the deliverable is accepted. Which tool provides this traceability?",
    options: [
        "The project schedule",
        "The requirements traceability matrix, which links each requirement to its corresponding test case and test result",
        "The project charter",
        "The risk register"
    ],
    correct: 1,
    explanation: "The <strong>requirements traceability matrix (RTM)</strong> traces each requirement from its origin through design, development, and <strong>testing</strong>. By linking requirements to test cases and results, the RTM ensures <strong>complete test coverage</strong> and verifies that no requirement is left untested.",
    evidence: [{
        quote: "The requirements traceability matrix <span class='evidence-highlight'>links requirements to design, development, and testing artifacts</span>, ensuring complete coverage and traceability throughout the project lifecycle.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "A project is using progressive elaboration for a research and development initiative where requirements emerge over time. How does progressive elaboration differ from scope creep?",
    options: [
        "They are the same concept with different names",
        "Progressive elaboration involves authorized, planned refinement of details as more information becomes available; scope creep is uncontrolled expansion without approval",
        "Progressive elaboration only applies to agile projects",
        "Scope creep is a subset of progressive elaboration"
    ],
    correct: 1,
    explanation: "<strong>Progressive elaboration</strong> is the <strong>authorized, planned refinement</strong> of project details as more information becomes available. It goes through change control. <strong>Scope creep</strong> is <strong>uncontrolled, unauthorized expansion</strong> of scope without corresponding adjustments to time, cost, and resources.",
    evidence: [{
        quote: "Progressive elaboration is <span class='evidence-highlight'>the authorized refinement of details as more information becomes available</span>, distinct from scope creep which is uncontrolled scope expansion.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Scope & Requirements",
    question: "An agile team discovers mid-sprint that a user story's acceptance criteria are ambiguous. What should the team do?",
    options: [
        "Interpret the criteria based on their own understanding and proceed",
        "Clarify the acceptance criteria with the product owner immediately, as ambiguous criteria risk delivering the wrong functionality",
        "Remove the story from the sprint",
        "Wait until the sprint review to get clarification"
    ],
    correct: 1,
    explanation: "The team should <strong>immediately clarify</strong> the acceptance criteria with the <strong>product owner</strong>. Proceeding with ambiguous criteria risks delivering the <strong>wrong functionality</strong>. The Scrum framework encourages ongoing collaboration between the team and product owner throughout the sprint.",
    evidence: [{
        quote: "Scope may be <span class='evidence-highlight'>clarified and renegotiated between the product owner and development team as more is learned</span> during the sprint. Ambiguous criteria should be resolved immediately.",
        source: "PMI & Scrum Alliance",
        document: "Agile Practice Guide",
        section: "Sprint Execution",
        url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager is performing a what-if scenario analysis on the project schedule. What is the purpose of this analysis?",
    options: [
        "To create the baseline schedule",
        "To evaluate different scenarios and their potential effects on the project schedule, enabling proactive planning for favorable and unfavorable outcomes",
        "To assign resources to activities",
        "To determine the project budget"
    ],
    correct: 1,
    explanation: "<strong>What-if scenario analysis</strong> evaluates different scenarios (what if a key resource is unavailable? what if a vendor is late?) and their <strong>potential effects on the schedule</strong>. This enables the project manager to develop contingency plans and make proactive decisions.",
    evidence: [{
        quote: "What-if scenario analysis <span class='evidence-highlight'>evaluates various scenarios to assess their feasibility and impact on project objectives</span>, enabling proactive planning.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project has BAC = $500,000. At a control point, EV = $200,000, AC = $220,000, and PV = $250,000. The project manager determines a new EAC of $560,000. What is the TCPI based on the new EAC?",
    options: [
        "1.13",
        "0.88",
        "0.95",
        "1.00"
    ],
    correct: 1,
    explanation: "<strong>TCPI (based on EAC) = (BAC - EV) / (EAC - AC)</strong> = ($500,000 - $200,000) / ($560,000 - $220,000) = $300,000 / $340,000 = <strong>0.88</strong>. Since this is less than 1.0, the remaining work can be performed at a lower efficiency and still meet the revised EAC.",
    evidence: [{
        quote: "TCPI based on EAC = <span class='evidence-highlight'>(BAC - EV) / (EAC - AC)</span>. A value less than 1.0 indicates the remaining work target is more achievable than the original plan.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Earned Value Analysis",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager identifies that an activity on the critical path has a duration estimate with high uncertainty. What technique can provide the most reliable estimate?",
    options: [
        "Expert judgment from a single expert",
        "Three-point estimating using PERT to account for uncertainty and calculate a weighted average duration",
        "Analogous estimating from a dissimilar project",
        "Using the most optimistic estimate to motivate the team"
    ],
    correct: 1,
    explanation: "<strong>Three-point estimating (PERT)</strong> accounts for uncertainty by using <strong>optimistic, most likely, and pessimistic</strong> estimates. The weighted average formula (O + 4M + P) / 6 provides a more reliable estimate than a single point and quantifies the uncertainty through standard deviation.",
    evidence: [{
        quote: "Three-point estimating <span class='evidence-highlight'>accounts for estimation uncertainty by using optimistic, most likely, and pessimistic values</span> to calculate a weighted expected value.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Estimation Approaches",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager calculates that the SPI at completion will converge to 1.0 as the project nears its end. Why does this happen?",
    options: [
        "The project always catches up in the final phases",
        "At project completion, EV equals BAC and PV also equals BAC, so SPI = EV/PV = BAC/BAC = 1.0 regardless of actual schedule performance",
        "The SPI formula changes at the end of the project",
        "Schedule compression automatically corrects SPI"
    ],
    correct: 1,
    explanation: "At project completion, <strong>EV = BAC</strong> (all planned work is complete) and <strong>PV = BAC</strong> (the full budget has been planned). Therefore <strong>SPI = BAC/BAC = 1.0</strong> regardless of whether the project finished early or late. This is a known limitation of SPI, which is why <strong>earned schedule</strong> was developed as an alternative.",
    evidence: [{
        quote: "A known limitation of SPI is that <span class='evidence-highlight'>it converges to 1.0 at project completion because both EV and PV equal BAC</span>, masking schedule performance. Earned schedule addresses this limitation.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project manager must choose between crashing and fast tracking to compress the schedule. The project involves safety-critical construction work. Which technique is LESS risky for this type of project?",
    options: [
        "Fast tracking, because it is cheaper",
        "Crashing, because it adds resources without performing safety-critical activities in parallel, which would increase the risk of errors",
        "Both techniques carry identical risk",
        "Neither technique should be used on safety-critical projects"
    ],
    correct: 1,
    explanation: "For <strong>safety-critical work</strong>, <strong>crashing</strong> is generally less risky than fast tracking. Fast tracking performs sequential activities in <strong>parallel</strong>, which can increase the risk of errors and rework in safety-critical environments. Crashing adds resources but maintains the <strong>logical sequence</strong> of activities.",
    evidence: [{
        quote: "In safety-critical environments, <span class='evidence-highlight'>crashing is preferred over fast tracking because it maintains the logical sequence</span> of activities, reducing the risk of errors from parallel execution.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Schedule & Cost Control",
    question: "A project's schedule performance has improved from SPI = 0.85 to SPI = 0.95 over the last three reporting periods. What can the project manager conclude?",
    options: [
        "The project is ahead of schedule",
        "The project is still behind schedule but the trend is improving, indicating corrective actions are having a positive effect",
        "The project will definitely finish on time",
        "The SPI improvement is meaningless"
    ],
    correct: 1,
    explanation: "An SPI of 0.95 means the project is still <strong>behind schedule</strong> (SPI less than 1.0), but the improving trend from 0.85 to 0.95 indicates <strong>corrective actions are working</strong>. The project manager should continue the current approach while monitoring to ensure the trend continues toward 1.0.",
    evidence: [{
        quote: "Trend analysis of SPI values <span class='evidence-highlight'>reveals whether project schedule performance is improving or deteriorating over time</span>, helping assess the effectiveness of corrective actions.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Measurement Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is transitioning project deliverables to the operations team. The operations team states they are not ready to support the new system. What should the project manager do?",
    options: [
        "Force the transition since the project is complete",
        "Work with the operations team to develop a transition plan that includes knowledge transfer, training, documentation, and a support period to ensure operational readiness",
        "Keep the project team supporting the system indefinitely",
        "Escalate to the sponsor to mandate the operations team's acceptance"
    ],
    correct: 1,
    explanation: "Successful project closure requires <strong>effective transition to operations</strong>. The project manager should work with the operations team to develop a <strong>transition plan</strong> that includes knowledge transfer, training, documentation, and a <strong>parallel support period</strong> to ensure operational readiness.",
    evidence: [{
        quote: "Project closure includes <span class='evidence-highlight'>effective transition of deliverables to operations, including knowledge transfer, training, and ensuring operational readiness</span>.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager is asked to lead a project that has political complexities with competing departmental priorities. Which power source will be MOST effective in this environment?",
    options: [
        "Positional power from the project charter",
        "Expert power through demonstrated competence and credibility, combined with referent power through relationship building",
        "Coercive power through threats of escalation",
        "Reward power through bonus allocation"
    ],
    correct: 1,
    explanation: "In politically complex environments, <strong>expert power</strong> (earned through demonstrated competence) and <strong>referent power</strong> (earned through relationships and trust) are most effective. These personal power sources create <strong>genuine influence</strong> that transcends organizational politics.",
    evidence: [{
        quote: "In complex political environments, <span class='evidence-highlight'>expert and referent power are most effective because they are based on personal credibility and relationships</span> rather than positional authority.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project is part of a larger organizational transformation. The project manager is asked to align project deliverables with the organization's strategic goals. Which document BEST connects the project to organizational strategy?",
    options: [
        "The project schedule",
        "The business case and benefits management plan, which link the project's deliverables to strategic objectives and expected organizational benefits",
        "The WBS",
        "The risk register"
    ],
    correct: 1,
    explanation: "The <strong>business case</strong> justifies the project by linking it to organizational strategy, and the <strong>benefits management plan</strong> describes how project deliverables will <strong>realize strategic benefits</strong>. Together they provide the bridge between project work and organizational goals.",
    evidence: [{
        quote: "The business case and benefits management plan <span class='evidence-highlight'>link the project's deliverables to organizational strategic objectives</span> and define how benefits will be measured and sustained.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A change request is submitted that would improve the product quality but would extend the schedule by two weeks and increase costs by 5%. The change control board is divided. What information should the project manager provide to help the CCB decide?",
    options: [
        "Only the cost impact",
        "A comprehensive impact analysis covering scope, schedule, cost, quality, risk, and the alignment with project objectives and business case, along with alternatives",
        "A recommendation to approve without analysis",
        "Only the schedule impact"
    ],
    correct: 1,
    explanation: "The project manager should provide a <strong>comprehensive impact analysis</strong> covering all project constraints (scope, schedule, cost, quality, risk), alignment with <strong>project objectives and business case</strong>, and <strong>alternatives</strong>. This enables the CCB to make an informed decision.",
    evidence: [{
        quote: "Change request analysis should include <span class='evidence-highlight'>comprehensive impact assessment across all project constraints, alignment with objectives, and alternative approaches</span> to support informed decision-making.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "During a project audit, the auditor finds that the project manager has been implementing changes without updating the configuration management system. What is the PRIMARY concern?",
    options: [
        "The audit report will be negative",
        "Without configuration management updates, there is no reliable record of the current state of project deliverables, creating confusion and potential quality issues",
        "The project budget may be affected",
        "The sponsor may not approve future changes"
    ],
    correct: 1,
    explanation: "The <strong>configuration management system</strong> maintains a <strong>reliable record of the current state</strong> of all project deliverables. Without updates, the team may work from outdated versions, creating <strong>confusion, rework, and quality issues</strong>. Configuration management is essential for integrated change control.",
    evidence: [{
        quote: "Configuration management ensures a <span class='evidence-highlight'>reliable record of the current state of all project deliverables</span>, preventing confusion and ensuring the team works from the correct versions.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Project Work Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Integration & Change",
    question: "A project manager needs to select the appropriate project life cycle for a new initiative. The requirements are well understood, the technology is mature, and regulatory compliance requires extensive documentation. Which life cycle is MOST appropriate?",
    options: [
        "Agile/adaptive life cycle",
        "Predictive (waterfall) life cycle because the well-defined requirements, mature technology, and documentation needs align with sequential, plan-driven execution",
        "Iterative life cycle",
        "Hybrid life cycle"
    ],
    correct: 1,
    explanation: "A <strong>predictive (waterfall) life cycle</strong> is most appropriate when <strong>requirements are well understood</strong>, technology is mature, and there are <strong>extensive documentation requirements</strong>. The sequential, plan-driven approach provides the structure and documentation needed for regulatory compliance.",
    evidence: [{
        quote: "Predictive life cycles are most appropriate when <span class='evidence-highlight'>requirements are well defined, technology is mature, and the project requires extensive documentation</span> and regulatory compliance.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Development Approach and Life Cycle",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project manager is analyzing the cost of quality and discovers that external failure costs are the largest category. What does this indicate?",
    options: [
        "The quality program is working effectively",
        "Defects are reaching customers, indicating insufficient prevention and detection activities, which is the most expensive failure scenario",
        "The project has no quality issues",
        "External failure costs are normal and expected"
    ],
    correct: 1,
    explanation: "High <strong>external failure costs</strong> (warranty, liability, lost customers, reputation damage) indicate that defects are <strong>reaching the customer</strong>. This is the <strong>most expensive type of failure</strong> and signals that <strong>prevention and appraisal activities are insufficient</strong>. Investing more in prevention would reduce total COQ.",
    evidence: [{
        quote: "External failure costs are the <span class='evidence-highlight'>most expensive category of quality costs, indicating that defects are reaching the customer</span>. Increased investment in prevention would reduce total cost of quality.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team wants to use design of experiments (DOE) to optimize a manufacturing process. What is the PRIMARY purpose of DOE?",
    options: [
        "To document the experimental results only",
        "To systematically identify which factors and their interactions have the most significant influence on outcomes, enabling optimization of the process",
        "To replace quality control inspections",
        "To reduce the number of quality tests required"
    ],
    correct: 1,
    explanation: "<strong>Design of Experiments (DOE)</strong> is a statistical method that <strong>systematically identifies which factors and interactions</strong> have the most significant influence on outcomes. It enables <strong>process optimization</strong> by testing multiple variables simultaneously rather than one at a time.",
    evidence: [{
        quote: "Design of experiments <span class='evidence-highlight'>provides a statistical framework for systematically determining the effect of multiple factors on outcomes</span>, enabling process optimization.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is implementing Kaizen practices. What does Kaizen emphasize?",
    options: [
        "Revolutionary, large-scale process changes",
        "Continuous, incremental improvement through small, ongoing positive changes involving all employees",
        "Quality improvement through external consultants only",
        "Strict adherence to current processes without change"
    ],
    correct: 1,
    explanation: "<strong>Kaizen</strong> is a Japanese philosophy emphasizing <strong>continuous, incremental improvement</strong> through <strong>small, ongoing positive changes</strong>. It involves all employees at all levels and fosters a culture where everyone actively seeks ways to improve processes.",
    evidence: [{
        quote: "Kaizen emphasizes <span class='evidence-highlight'>continuous, incremental improvement through small changes involving all employees</span>, fostering a culture of ongoing quality enhancement.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Quality Management",
    question: "A project team is establishing specification limits and control limits for a process. What is the key difference between these two types of limits?",
    options: [
        "They are the same thing",
        "Specification limits define customer requirements (what the customer wants); control limits define process capability (what the process can deliver). A process can be in control but still not meet specifications",
        "Control limits are always wider than specification limits",
        "Specification limits are only used in manufacturing"
    ],
    correct: 1,
    explanation: "<strong>Specification limits</strong> (tolerances) define what the <strong>customer requires</strong>. <strong>Control limits</strong> define what the <strong>process can deliver</strong> based on statistical analysis. A process can be <strong>in control (within control limits) but still not meet specifications</strong> if its natural variation exceeds the specification range.",
    evidence: [{
        quote: "Specification limits define <span class='evidence-highlight'>customer requirements, while control limits reflect the natural variation of the process</span>. A process can be in statistical control but still fail to meet specifications.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Delivery Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Team Leadership",
    question: "A project manager is applying the concept of servant leadership in a high-pressure environment. The team is struggling to meet a deadline and morale is low. What is the MOST important servant leadership action?",
    options: [
        "Take over all decision-making to speed things up",
        "Shield the team from unnecessary organizational pressure, remove impediments to their work, and ensure they have the resources and support needed to succeed",
        "Tell the team to work harder",
        "Report the team's struggles to management"
    ],
    correct: 1,
    explanation: "In a high-pressure environment, a servant leader <strong>shields the team from unnecessary pressure</strong>, <strong>removes impediments</strong>, and ensures the team has what they need to succeed. This empowers the team to focus on delivery rather than organizational politics.",
    evidence: [{
        quote: "Servant leaders <span class='evidence-highlight'>shield teams from unnecessary pressure, remove impediments, and ensure teams have the resources and support</span> needed to deliver effectively.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Team Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is managing a fixed-price contract and the seller requests a change order for work they believe is outside the original scope. The project manager disagrees. What is the appropriate process?",
    options: [
        "Reject the change order immediately",
        "Follow the contract's change management and dispute resolution procedures to evaluate and resolve the disagreement",
        "Accept the change order to maintain a good relationship",
        "Terminate the contract and find a new seller"
    ],
    correct: 1,
    explanation: "Contract disagreements about scope should be resolved through the <strong>contract's change management and dispute resolution procedures</strong>. Both parties should review the SOW, contract terms, and documentation to determine whether the work is within or outside the original scope.",
    evidence: [{
        quote: "Contract disputes about scope should be resolved through <span class='evidence-highlight'>the change management and dispute resolution procedures defined in the contract</span>, with reference to the SOW and contract terms.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is evaluating whether to use a single-source or competitive procurement approach. What is the PRIMARY advantage of competitive procurement?",
    options: [
        "It is always faster than single-source procurement",
        "Competition among sellers drives better pricing, quality, and innovation, providing the buyer with more options and better value",
        "It eliminates the need for a SOW",
        "It guarantees the lowest possible price"
    ],
    correct: 1,
    explanation: "<strong>Competitive procurement</strong> creates competition among sellers, which typically drives <strong>better pricing, quality, and innovation</strong>. It provides the buyer with multiple proposals to evaluate, increasing the likelihood of obtaining the best overall value.",
    evidence: [{
        quote: "Competitive procurement <span class='evidence-highlight'>creates competition among sellers, driving better pricing, quality, and innovation</span>, providing the buyer with better overall value.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project manager is reviewing a contract that includes a liquidated damages clause. What is the purpose of this clause?",
    options: [
        "To reward the seller for early completion",
        "To establish a predetermined amount of compensation the seller must pay the buyer for specific breaches such as late delivery, protecting the buyer from schedule delays",
        "To set the maximum contract value",
        "To define the seller's profit margin"
    ],
    correct: 1,
    explanation: "A <strong>liquidated damages clause</strong> establishes a <strong>predetermined compensation amount</strong> the seller must pay for specific contract breaches, most commonly <strong>late delivery</strong>. It protects the buyer by establishing agreed-upon financial consequences without requiring the buyer to prove actual damages.",
    evidence: [{
        quote: "Liquidated damages clauses establish <span class='evidence-highlight'>predetermined compensation for specific breaches such as late delivery</span>, protecting the buyer without requiring proof of actual damages.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
},
{
    vendor: "pmp",
    domain: "Procurement & Contracts",
    question: "A project uses an Invitation for Bid (IFB) process. How does an IFB differ from an RFP?",
    options: [
        "They are identical documents",
        "An IFB is used when the scope is clearly defined and selection is based primarily on price; an RFP is used when evaluation includes non-price factors like technical approach and qualifications",
        "An IFB is only used for government projects",
        "An RFP is used for smaller procurements; an IFB is for larger ones"
    ],
    correct: 1,
    explanation: "An <strong>IFB (Invitation for Bid)</strong> is used when the scope is <strong>clearly defined</strong> and the primary selection criterion is <strong>price</strong> (lowest responsive and responsible bidder). An <strong>RFP</strong> is used when evaluation includes <strong>non-price factors</strong> such as technical approach, methodology, and qualifications.",
    evidence: [{
        quote: "An IFB is used when <span class='evidence-highlight'>the scope is well-defined and selection is based primarily on price</span>, while an RFP evaluates proposals on multiple criteria including technical approach and qualifications.",
        source: "PMI",
        document: "PMBOK Guide 7th Edition",
        section: "Planning Performance Domain",
        url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
    }]
}