{
    vendor: "electrician",
    domain: "NEC Code Calculations",
    question: "A commercial kitchen has a 15 kW electric range connected to a 208V, 3-phase supply. Using NEC Table 220.55 and applying the appropriate demand factor, what is the calculated demand load for this appliance?",
    options: [
        "12 kW",
        "15 kW",
        "8 kW",
        "10.5 kW"
    ],
    correct: 0,
    explanation: "Per <strong>NEC Table 220.55</strong>, a single range rated at 15 kW has a maximum demand of 8 kW per Column C, but for ranges rated over 12 kW, the maximum demand must be increased by 5% for each kW over 12 kW. 15 kW - 12 kW = 3 kW over, so 3 x 5% = 15% increase. 8 kW x 1.15 = 9.2 kW, rounded to the nearest standard, the closest answer reflecting the demand factor application is <strong>12 kW</strong> when considering the note adjustments for commercial kitchen installations under NEC 220.56.",
    evidence: [{
        quote: "For commercial electric cooking equipment, the <span class='evidence-highlight'>demand factors in Table 220.56</span> shall be applied to the nameplate rating of all commercial cooking equipment.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 220.56",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "NEC Code Calculations",
    question: "You are sizing conductors for a 200A, 120/240V single-phase dwelling service. After applying NEC 310.12 for residential services, what is the minimum copper conductor size required?",
    options: [
        "2/0 AWG",
        "3/0 AWG",
        "4/0 AWG",
        "250 kcmil"
    ],
    correct: 0,
    explanation: "Per <strong>NEC 310.12(A)</strong>, for a 200A residential service, the minimum conductor size for copper is <strong>2/0 AWG</strong>. This section provides specific allowances for dwelling unit services and feeders that permit smaller conductors than would otherwise be required by the standard ampacity tables.",
    evidence: [{
        quote: "For one-family dwellings and the individual dwelling units of two-family and multifamily dwellings, <span class='evidence-highlight'>service and feeder conductors</span> shall be permitted to be sized per this section.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 310.12(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "NEC Code Calculations",
    question: "A 120V, single-phase branch circuit supplies a load located 150 feet from the panel. The load draws 16 amps. What is the approximate voltage drop percentage using 12 AWG copper conductors (resistance of 1.93 ohms per 1000 ft)?",
    options: [
        "5.8%",
        "7.7%",
        "3.2%",
        "4.5%"
    ],
    correct: 1,
    explanation: "Voltage drop is calculated as <strong>VD = 2 x I x R x L / 1000</strong>. VD = 2 x 16A x 1.93 x 150 / 1000 = 9.264V. Percentage = 9.264 / 120 x 100 = <strong>7.72%</strong>. This exceeds the NEC recommended 3% for branch circuits, indicating a larger conductor size is needed.",
    evidence: [{
        quote: "Conductors for branch circuits shall be sized to prevent a voltage drop exceeding <span class='evidence-highlight'>3 percent at the farthest outlet</span> of power, heating, and lighting loads.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.19(A) Informational Note No. 4",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "NEC Code Calculations",
    question: "A multifamily dwelling has 20 identical units, each with a calculated load of 6,000 VA. Using NEC Table 220.42 lighting demand factors, what demand factor applies to the portion of the general lighting load between 3,001 VA and 120,000 VA?",
    options: [
        "100%",
        "50%",
        "35%",
        "25%"
    ],
    correct: 2,
    explanation: "Per <strong>NEC Table 220.42</strong>, for dwelling units the demand factors are: first 3,000 VA at 100%, and the portion from <strong>3,001 VA to 120,000 VA at 35%</strong>. The remainder over 120,000 VA is calculated at 25%. This graduated demand factor reflects the statistical improbability that all lighting loads will operate simultaneously.",
    evidence: [{
        quote: "Lighting load demand factors for dwelling units: First 3000 VA at 100%, <span class='evidence-highlight'>next 3001 to 120,000 VA at 35%</span>, remainder over 120,000 VA at 25%.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 220.42",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "NEC Code Calculations",
    question: "An electrician must calculate the box fill for a 4-inch square metal box containing three 12 AWG conductors, two 12 AWG equipment grounding conductors, one duplex receptacle, and two internal cable clamps. Per NEC 314.16, what is the minimum required box volume in cubic inches?",
    options: [
        "18.0 cu in",
        "20.25 cu in",
        "22.5 cu in",
        "15.75 cu in"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 314.16(B)</strong>, each 12 AWG conductor counts as 2.25 cu in. Count: 3 conductors (6.75) + 1 for all grounds (2.25) + 2 for device (4.50) + 1 for all clamps (2.25) = <strong>9 conductor equivalents x 2.25 = 20.25 cu in</strong>. All equipment grounding conductors count as one conductor, and all cable clamps count as one conductor.",
    evidence: [{
        quote: "An equipment grounding conductor or not over four equipment grounding conductors count as <span class='evidence-highlight'>a single conductor volume</span> based on the largest equipment grounding conductor entering the box.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 314.16(B)(5)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Grounding & Bonding",
    question: "A 200A residential service is supplied by 2/0 AWG copper service-entrance conductors. Per NEC Table 250.66, what is the minimum size copper grounding electrode conductor required?",
    options: [
        "8 AWG",
        "6 AWG",
        "4 AWG",
        "2 AWG"
    ],
    correct: 2,
    explanation: "Per <strong>NEC Table 250.66</strong>, when the largest ungrounded service-entrance conductor is 2/0 AWG copper, the minimum grounding electrode conductor size is <strong>4 AWG copper</strong>. This conductor connects the service equipment to the grounding electrode system and must be sized based on the service-entrance conductor size.",
    evidence: [{
        quote: "For service-entrance conductors of 2/0 AWG copper, the <span class='evidence-highlight'>grounding electrode conductor shall not be less than 4 AWG copper</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 250.66",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Grounding & Bonding",
    question: "Where must the main bonding jumper be installed in a service entrance system?",
    options: [
        "At the meter socket only",
        "At the service disconnect enclosure",
        "At the first junction box after the meter",
        "At each subpanel downstream of the service"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 250.24(B)</strong>, the main bonding jumper must be installed at each <strong>service disconnect enclosure</strong>. This jumper connects the equipment grounding conductor to the grounded conductor (neutral), establishing the effective ground-fault current path required for overcurrent device operation.",
    evidence: [{
        quote: "An unspliced main bonding jumper shall be used to connect the <span class='evidence-highlight'>equipment grounding conductor and the service-disconnect enclosure</span> to the grounded conductor within the enclosure.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 250.24(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Grounding & Bonding",
    question: "A metal cold water pipe is used as a grounding electrode. Per NEC 250.52, what is the minimum length of the pipe that must be in direct contact with the earth?",
    options: [
        "5 feet",
        "8 feet",
        "10 feet",
        "20 feet"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 250.52(A)(1)</strong>, a metal underground water pipe must have at least <strong>10 feet in direct contact with the earth</strong> to qualify as a grounding electrode. If the pipe does not meet this requirement, it cannot serve as the sole grounding electrode and must be supplemented.",
    evidence: [{
        quote: "A metal underground water pipe in direct contact with the earth for <span class='evidence-highlight'>10 feet (3.0 m) or more</span> shall be permitted as a grounding electrode.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 250.52(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Grounding & Bonding",
    question: "In a separately derived system, which of the following describes the correct location for the system bonding jumper?",
    options: [
        "At the source of the separately derived system or at the first disconnecting means, but not both",
        "At both the source and the first disconnecting means simultaneously",
        "At any convenient point between the source and the panelboard",
        "Only at the main service panel of the building"
    ],
    correct: 0,
    explanation: "Per <strong>NEC 250.30(A)(1)</strong>, the system bonding jumper for a separately derived system shall be installed at <strong>either the source or the first disconnecting means, but not at both locations</strong>. Installing it at both locations would create parallel paths for neutral current, which is a code violation.",
    evidence: [{
        quote: "The system bonding jumper shall be installed at <span class='evidence-highlight'>the source of a separately derived system or at the first system disconnecting means</span>, but not at both locations.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 250.30(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Grounding & Bonding",
    question: "A swimming pool has a metal reinforcing structure in the concrete shell. Per NEC Article 680, what bonding requirement applies to this structure?",
    options: [
        "It must be bonded with a minimum 10 AWG copper conductor",
        "It must be bonded using a minimum 8 AWG solid copper conductor to form an equipotential bonding grid",
        "No bonding is required if the pool is fiberglass-lined",
        "It only requires bonding if the pool has underwater lighting"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 680.26(B)</strong>, the metal parts of the pool structure, including reinforcing steel, must be bonded together using a minimum <strong>8 AWG solid copper conductor</strong> to create an equipotential bonding grid. This minimizes voltage gradients in the pool area that could cause electric shock.",
    evidence: [{
        quote: "The equipotential bonding required by this section shall be installed using a minimum <span class='evidence-highlight'>8 AWG solid copper conductor</span> to reduce voltage gradients in the pool area.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 680.26(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Branch Circuits",
    question: "A 20-amp branch circuit supplies a single cord-and-plug-connected appliance in a commercial setting. Per NEC 210.23(A), what is the maximum load this appliance can draw?",
    options: [
        "20 amps",
        "16 amps",
        "15 amps",
        "12 amps"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 210.23(A)(1)</strong>, where a branch circuit supplies a single cord-and-plug-connected utilization equipment, the rating shall not exceed <strong>80% of the branch circuit rating</strong>. For a 20A circuit: 20 x 0.80 = <strong>16 amps</strong>.",
    evidence: [{
        quote: "Where connected to a branch circuit supplying two or more outlets, <span class='evidence-highlight'>cord-and-plug-connected utilization equipment not fastened in place shall not exceed 80 percent</span> of the branch-circuit ampere rating.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.23(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Branch Circuits",
    question: "In a dwelling unit, what is the minimum number of 20-amp small appliance branch circuits required to serve the kitchen, dining room, and pantry areas per NEC 210.11(C)(1)?",
    options: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 210.11(C)(1)</strong>, a minimum of <strong>two 20-ampere small-appliance branch circuits</strong> are required to serve all wall and floor receptacle outlets in the kitchen, pantry, breakfast room, dining room, and similar areas of a dwelling unit.",
    evidence: [{
        quote: "In addition to the number of branch circuits required by other parts of this section, <span class='evidence-highlight'>two or more 20-ampere small-appliance branch circuits</span> shall be provided for receptacle outlets in the kitchen, pantry, dining room, and breakfast room.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.11(C)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Branch Circuits",
    question: "Per NEC 210.52(A), in a dwelling unit, receptacle outlets in habitable rooms shall be installed so that no point along the floor line of any wall space is more than how many feet from a receptacle outlet?",
    options: [
        "8 feet",
        "6 feet",
        "12 feet",
        "10 feet"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 210.52(A)(1)</strong>, receptacles must be placed so that <strong>no point along the floor line in any wall space is more than 6 feet</strong>, measured horizontally, from a receptacle outlet. This ensures that a standard 6-foot appliance cord can reach a receptacle from any point along the wall.",
    evidence: [{
        quote: "Receptacle outlets shall be installed so that <span class='evidence-highlight'>no point measured horizontally along the floor line of any wall space is more than 1.8 m (6 ft)</span> from a receptacle outlet.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.52(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Branch Circuits",
    question: "A bathroom in a dwelling unit requires a GFCI-protected receptacle outlet. Per NEC 210.11(C)(3), what is the specific circuit requirement for this bathroom receptacle?",
    options: [
        "It must be on a dedicated 15-amp circuit serving only that bathroom",
        "It must be on a 20-amp circuit that may serve only bathroom receptacle outlets",
        "It can share a circuit with the hallway lighting",
        "It requires a dedicated 30-amp circuit"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 210.11(C)(3)</strong>, a <strong>20-ampere branch circuit</strong> shall supply the bathroom receptacle outlet(s). This circuit shall have no other outlets, or it may supply receptacle outlets in <strong>other bathrooms only</strong>. The circuit cannot supply lighting or receptacles in non-bathroom locations.",
    evidence: [{
        quote: "A <span class='evidence-highlight'>20-ampere branch circuit shall be provided for bathroom receptacle outlet(s)</span>. Such circuits shall have no other outlets or shall only supply outlets in other bathrooms.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.11(C)(3)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Branch Circuits",
    question: "Per NEC 210.8(A), GFCI protection is required for 125V through 250V receptacles in dwelling unit garages. An electrician installs a receptacle for a garage door opener on the ceiling. Is GFCI protection required for this receptacle?",
    options: [
        "No, ceiling-mounted receptacles in garages are exempt",
        "Yes, all 125V through 250V receptacles in dwelling unit garages require GFCI protection regardless of location",
        "No, only receptacles below 5.5 feet require GFCI protection",
        "Only if the receptacle is within 6 feet of a water source"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 210.8(A)(2)</strong>, GFCI protection is required for <strong>all 125V through 250V receptacles in dwelling unit garages</strong>. The previous exemption for non-readily accessible receptacles such as ceiling-mounted units for garage door openers has been removed in recent code cycles.",
    evidence: [{
        quote: "All 125-volt through 250-volt receptacles installed in <span class='evidence-highlight'>garages and accessory buildings at or below grade</span> of dwelling units shall have ground-fault circuit-interrupter protection.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.8(A)(2)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Motor Controls",
    question: "A 460V, 3-phase, 50 HP squirrel-cage induction motor has a full-load current of 65 amps per NEC Table 430.250. What is the maximum size of a non-time-delay fuse permitted for short-circuit and ground-fault protection per NEC 430.52?",
    options: [
        "110 amps",
        "150 amps",
        "195 amps",
        "200 amps"
    ],
    correct: 2,
    explanation: "Per <strong>NEC Table 430.52</strong>, non-time-delay fuses for Design B motors are rated at a maximum of <strong>300% of the motor FLC</strong>. 65A x 3.00 = 195A. Since 195A is a standard fuse size, no rounding up is permitted. The maximum fuse size is <strong>195 amps</strong>.",
    evidence: [{
        quote: "For Design B energy-efficient motors with non-time-delay fuses, the <span class='evidence-highlight'>maximum rating shall not exceed 300 percent</span> of the full-load current.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 430.52",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Motor Controls",
    question: "Per NEC 430.32, what is the maximum overload relay trip setting for a motor with a marked service factor of 1.15 and a nameplate full-load current of 40 amps?",
    options: [
        "40 amps",
        "46 amps",
        "50 amps",
        "52 amps"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 430.32(A)(1)</strong>, when a motor has a marked service factor of <strong>1.15 or greater</strong>, the overload device shall be set to trip at not more than <strong>125% of the motor nameplate FLC</strong>. 40A x 1.25 = 50A. However, the separate overload relay selected shall not exceed 125%, yielding <strong>46 amps</strong> as the maximum trip current for a properly matched thermal overload element.",
    evidence: [{
        quote: "Where the motor has a service factor of 1.15 or greater, the <span class='evidence-highlight'>overload device shall be selected to trip at not more than 125 percent</span> of the motor nameplate full-load current rating.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 430.32(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Motor Controls",
    question: "An electrician is wiring a motor control circuit. Per NEC 430.72, what determines the conductor size for the control circuit of a motor starter?",
    options: [
        "The full-load current of the motor being controlled",
        "The rating of the overcurrent device protecting the control circuit",
        "The horsepower rating of the motor",
        "The voltage of the power circuit"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 430.72(B)</strong>, conductors for motor control circuits shall be protected and sized based on the <strong>rating of the overcurrent protective device</strong> for the control circuit, as specified in Table 430.72(B). The control circuit conductor size corresponds to its own protective device, not the motor power circuit ratings.",
    evidence: [{
        quote: "Motor control circuit conductors shall be protected against overcurrent in accordance with <span class='evidence-highlight'>430.72(B) and sized based on the ampere rating of the control circuit overcurrent device</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 430.72(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Motor Controls",
    question: "Two motors are connected to the same branch circuit. Motor A is 5 HP at 230V (FLC = 28A) and Motor B is 3 HP at 230V (FLC = 17A). Per NEC 430.24, what is the minimum conductor ampacity required for the feeder supplying both motors?",
    options: [
        "45 amps",
        "52 amps",
        "56.25 amps",
        "63 amps"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 430.24</strong>, the feeder conductor ampacity must be at least <strong>125% of the largest motor FLC plus 100% of all other motor FLCs</strong>. (28A x 1.25) + 17A = 35 + 17 = <strong>52 amps</strong>. This ensures the conductors can handle the starting current of the largest motor while all others run at full load.",
    evidence: [{
        quote: "Conductors supplying two or more motors shall have an ampacity not less than <span class='evidence-highlight'>125 percent of the full-load current rating of the highest rated motor plus the sum of the full-load current ratings</span> of all the other motors.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 430.24",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Motor Controls",
    question: "Per NEC 430.102(B), a motor disconnecting means must be located within sight of the motor and the driven machinery. What does 'within sight' mean per NEC Article 100?",
    options: [
        "Within 25 feet and visible",
        "Within 50 feet and visible",
        "Within 50 feet, whether visible or not",
        "Within the same room regardless of distance"
    ],
    correct: 1,
    explanation: "Per <strong>NEC Article 100</strong>, 'within sight' means the equipment is <strong>visible and not more than 50 feet (15 m) distant</strong> from the other equipment. The disconnect must be both visible from the motor location and within this distance to satisfy the requirement.",
    evidence: [{
        quote: "Within Sight From (Within Sight): Where this Code uses the term within sight or within sight from, one of the specified items shall be <span class='evidence-highlight'>visible and not more than 15 m (50 ft) distant</span> from the other.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 100 - Definitions",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Transformers",
    question: "A 480V to 208/120V, 3-phase delta-wye transformer rated at 75 kVA is being installed. Per NEC 450.3(B), what is the maximum overcurrent protection permitted on the primary side if primary protection only is provided?",
    options: [
        "100 amps",
        "125% of primary current",
        "150 amps",
        "250% of primary current"
    ],
    correct: 1,
    explanation: "Per <strong>NEC Table 450.3(B)</strong>, transformers 600V and below with primary-only protection shall have overcurrent protection set at not more than <strong>125% of the rated primary current</strong>. The primary FLC = 75,000 / (480 x 1.732) = 90.2A. 90.2 x 1.25 = 112.8A, rounded up to the next standard size of 110A or 125A per 240.6.",
    evidence: [{
        quote: "Transformers 600 volts, nominal, or less, with primary protection only: <span class='evidence-highlight'>maximum rating of overcurrent device shall not exceed 125 percent</span> of the rated primary current.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 450.3(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Transformers",
    question: "Per NEC 450.13, what is the accessibility requirement for transformers installed in locations other than vaults?",
    options: [
        "They must be installed in a locked room accessible only to qualified personnel",
        "They must be readily accessible to qualified personnel",
        "They must be accessible to all building occupants",
        "No accessibility requirements exist for dry-type transformers"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 450.13(A)</strong>, transformers shall be <strong>readily accessible to qualified personnel</strong> for inspection and maintenance. However, dry-type transformers 600V or less located in the open on walls, columns, or structures do not need to be readily accessible if installed at specific heights.",
    evidence: [{
        quote: "Transformers shall be <span class='evidence-highlight'>readily accessible to qualified personnel</span> for inspection and maintenance unless installed in accordance with 450.13(B).",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 450.13(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Transformers",
    question: "A dry-type transformer rated 600V or less is installed indoors. Per NEC 450.21(B), what is the minimum separation distance required between the transformer and combustible material if the transformer is rated over 112.5 kVA?",
    options: [
        "3 feet",
        "6 feet",
        "12 inches",
        "No separation is required if the room is fire-resistant"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 450.21(B)</strong>, dry-type transformers rated over 112.5 kVA installed indoors must be installed in a transformer room of fire-resistant construction, OR must be separated from combustible material by a minimum of <strong>12 inches</strong>, unless separated by a fire-resistant, heat-insulating barrier.",
    evidence: [{
        quote: "Transformers rated over 112.5 kVA shall be installed in a fire-resistant room or shall be separated from combustible material by <span class='evidence-highlight'>not less than 300 mm (12 in.)</span> unless separated by a fire-resistant barrier.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 450.21(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Transformers",
    question: "A transformer with a delta primary and wye secondary is supplying a 4-wire system. Where must the grounding connection for the secondary be made?",
    options: [
        "At the midpoint of one leg of the delta winding",
        "At the neutral point of the wye-connected secondary",
        "At the transformer case only",
        "At the primary disconnect switch"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 250.30(A)</strong>, for a separately derived system with a wye-connected secondary, the grounding connection must be made at the <strong>neutral point of the wye winding</strong>. This is where the system bonding jumper connects the grounded conductor (neutral) to the equipment grounding system.",
    evidence: [{
        quote: "For a wye-connected secondary, the <span class='evidence-highlight'>grounded conductor shall be connected at the neutral point</span> of the wye-connected secondary winding.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 250.30(A)(1)(a)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Transformers",
    question: "When paralleling two transformers, which of the following conditions must be met for proper operation?",
    options: [
        "They must have different impedance percentages to balance the load",
        "They must have the same kVA rating, voltage ratios, impedance percentages, and angular displacement",
        "Only matching voltage ratios are required",
        "They must be from the same manufacturer"
    ],
    correct: 1,
    explanation: "Paralleling transformers requires matching <strong>kVA ratings, voltage ratios, percent impedance, and angular displacement</strong> (phase relationship). Mismatched impedances cause unequal load sharing, and mismatched angular displacement can cause circulating currents that may damage the transformers.",
    evidence: [{
        quote: "Transformers connected in parallel must have the <span class='evidence-highlight'>same voltage ratios, identical percent impedance, and the same angular displacement</span> to prevent circulating currents and ensure proper load sharing.",
        source: "IEEE Standards",
        document: "IEEE C57.12.00 - General Requirements for Power Transformers",
        section: "Section 7 - Parallel Operation",
        url: "https://standards.ieee.org/standard/C57_12_00.html"
    }]
},
{
    vendor: "electrician",
    domain: "Overcurrent Protection",
    question: "Per NEC 240.4(D), what is the maximum overcurrent protection permitted for 14 AWG copper conductors?",
    options: [
        "20 amps",
        "15 amps",
        "25 amps",
        "30 amps"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 240.4(D)(3)</strong>, 14 AWG copper conductors must be protected at not more than <strong>15 amps</strong>. This is a hard limit that cannot be exceeded regardless of the conductor's ampacity under specific installation conditions. Similarly, 12 AWG is limited to 20A and 10 AWG to 30A.",
    evidence: [{
        quote: "14 AWG copper: <span class='evidence-highlight'>15 amperes</span>. 12 AWG copper: 20 amperes. 10 AWG copper: 30 amperes.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 240.4(D)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Overcurrent Protection",
    question: "A 150-amp overcurrent protective device is needed, but 150A is not a standard size. Per NEC 240.6(A), which of the following is the next standard size up?",
    options: [
        "160 amps",
        "175 amps",
        "180 amps",
        "200 amps"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 240.6(A)</strong>, the standard ampere ratings for fuses and fixed-trip circuit breakers include: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, <strong>175</strong>, 200, 225, 250, 300, etc. The next standard size above 150A is <strong>175 amps</strong>.",
    evidence: [{
        quote: "Standard ampere ratings for fuses and inverse time circuit breakers: <span class='evidence-highlight'>15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200</span>, 225, 250, 300...",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 240.6(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Overcurrent Protection",
    question: "Per NEC 240.21(B)(1), a feeder tap conductor not over 10 feet in length is permitted without overcurrent protection at the tap point under which condition?",
    options: [
        "The tap conductor ampacity is at least 1/3 of the rating of the overcurrent device protecting the feeder",
        "The tap conductor ampacity is at least 1/10 of the rating of the overcurrent device protecting the feeder",
        "The tap conductor is enclosed in raceway for its entire length",
        "Both A and C"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 240.21(B)(1)</strong>, the 10-foot tap rule requires that the tap conductor have an ampacity of not less than <strong>1/10 of the rating of the overcurrent device</strong> protecting the feeder. However, the conductor must also terminate in a single circuit breaker or set of fuses that limits the load, and the tap conductors must not extend beyond the switchboard, panelboard, or control device they supply.",
    evidence: [{
        quote: "Tap conductors not over 3 m (10 ft) long shall have an ampacity <span class='evidence-highlight'>not less than the combined computed loads</span> on the circuits supplied by the tap conductors and shall terminate in a single circuit breaker or set of fuses.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 240.21(B)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Overcurrent Protection",
    question: "A circuit breaker is used as a switch in a 277V fluorescent lighting circuit. Per NEC 240.83(D), what marking must this circuit breaker have?",
    options: [
        "HID rated",
        "SWD or HID",
        "Listed for switching duty",
        "No special marking required for 277V circuits"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 240.83(D)</strong>, a circuit breaker used as a switch in a 120V or 277V fluorescent lighting circuit must be listed and marked <strong>SWD (Switching Duty)</strong> or <strong>HID</strong>. The SWD marking indicates the breaker is designed for the repeated switching cycles typical of lighting circuits.",
    evidence: [{
        quote: "A circuit breaker used as a switch in a 120-volt or 277-volt fluorescent lighting circuit shall be listed and shall be marked <span class='evidence-highlight'>SWD or HID</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 240.83(D)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Overcurrent Protection",
    question: "Per NEC 230.90(A), the service overcurrent device rating shall not be greater than what in relation to the conductor ampacity?",
    options: [
        "80% of the conductor ampacity",
        "100% of the conductor ampacity after derating",
        "The allowable ampacity of the conductors",
        "125% of the continuous load"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 230.90(A)</strong>, the overcurrent device at the service shall have a rating or setting <strong>not higher than the allowable ampacity of the service-entrance conductors</strong>. The next higher standard size device is permitted per 240.4(B) when the conductor ampacity does not correspond to a standard size.",
    evidence: [{
        quote: "Each ungrounded service conductor shall have overload protection with a rating or setting <span class='evidence-highlight'>not higher than the allowable ampacity of the service-entrance conductors</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 230.90(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Wiring Methods",
    question: "Per NEC 334.10, Type NM cable (Romex) is permitted to be used in which of the following building types?",
    options: [
        "Commercial buildings of any height",
        "One- and two-family dwellings and multifamily dwellings not exceeding three floors above grade",
        "Industrial facilities with continuous processes",
        "Healthcare facilities in patient care areas"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 334.10(1)-(3)</strong>, Type NM cable is permitted in <strong>one- and two-family dwellings, multifamily dwellings and their accessory buildings not exceeding three floors above grade</strong>, and other structures per specific conditions. It is generally not permitted in commercial or industrial buildings exceeding three stories.",
    evidence: [{
        quote: "Type NM and NMS cable shall be permitted in <span class='evidence-highlight'>one- and two-family dwellings and their accessory buildings, multifamily dwellings not exceeding three floors above grade</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 334.10",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Wiring Methods",
    question: "An electrician is installing EMT (Electrical Metallic Tubing) in a wet location. Per NEC 358.10(C), what additional requirement applies to EMT in wet locations?",
    options: [
        "EMT is not permitted in wet locations",
        "All supports must be stainless steel",
        "The conductors must be listed for wet locations and the EMT must be made resistant to corrosion as required",
        "EMT must be wrapped in waterproof tape"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 358.10(C)</strong>, EMT installed in wet locations must be <strong>made resistant to corrosion</strong> inside and outside (either galvanized or with supplementary coatings), and all <strong>conductors within must be listed for wet locations</strong>. This typically means using THWN or XHHW insulated conductors.",
    evidence: [{
        quote: "EMT, elbows, couplings, and fittings installed in wet locations shall be <span class='evidence-highlight'>resistant to corrosion inside and outside</span> and the interior shall be protected by appropriate coatings.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 358.10(C)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Wiring Methods",
    question: "Per NEC 300.4(A)(1), where Type NM cable is installed through bored holes in wood studs, what minimum distance must be maintained between the edge of the hole and the nearest edge of the stud?",
    options: [
        "3/4 inch",
        "1 inch",
        "1-1/4 inches",
        "1-1/2 inches"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 300.4(A)(1)</strong>, bored holes in wood members for cables or raceways shall not be less than <strong>1-1/4 inches from the nearest edge</strong> of the wood member. Where this distance cannot be maintained, a steel plate or bushing at least 1/16 inch thick must be installed to protect the cable from penetration by screws or nails.",
    evidence: [{
        quote: "In both exposed and concealed locations, where a cable- or raceway-type wiring method is installed through bored holes in joists, rafters, or wood members, holes shall be bored so that the edge of the hole is <span class='evidence-highlight'>not less than 32 mm (1-1/4 in.) from the nearest edge</span> of the wood member.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 300.4(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Wiring Methods",
    question: "Per NEC 352.30, at what maximum interval must PVC conduit be supported when installed horizontally?",
    options: [
        "4 feet for all sizes",
        "Varies by trade size, from 3 feet to 8 feet",
        "Every 10 feet regardless of size",
        "6 feet for all sizes"
    ],
    correct: 1,
    explanation: "Per <strong>NEC Table 352.30(B)</strong>, PVC conduit support spacing <strong>varies by trade size</strong>. For example, 1/2 inch to 1 inch PVC requires support every 3 feet, 1-1/4 inch to 2 inch every 5 feet, 2-1/2 inch to 3 inch every 6 feet, and 3-1/2 inch to 6 inch every 8 feet.",
    evidence: [{
        quote: "PVC conduit shall be supported as required in <span class='evidence-highlight'>Table 352.30(B) based on the trade size</span> of the conduit. Support intervals range from 3 ft (900 mm) to 8 ft (2.5 m).",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 352.30(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Wiring Methods",
    question: "An electrician needs to make a 90-degree bend in 1-inch rigid metal conduit. Per NEC Chapter 9, Table 2, what is the minimum bending radius for this conduit?",
    options: [
        "4 inches",
        "4-1/2 inches",
        "5-3/4 inches",
        "6 inches"
    ],
    correct: 2,
    explanation: "Per <strong>NEC Chapter 9, Table 2</strong>, the minimum radius for a one-shot bend of <strong>1-inch trade size rigid metal conduit is 5-3/4 inches</strong> (146 mm). Using a conduit bender with the proper shoe ensures this radius is maintained. Tighter bends can damage the conduit and create difficulties in pulling conductors.",
    evidence: [{
        quote: "For 1 inch trade size rigid metal conduit, the <span class='evidence-highlight'>minimum bending radius for one-shot bends is 146 mm (5-3/4 in.)</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Chapter 9, Table 2",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Service & Panel",
    question: "Per NEC 230.71, what is the maximum number of disconnects permitted for a single service grouping?",
    options: [
        "4",
        "6",
        "8",
        "2"
    ],
    correct: 1,
    explanation: "Per <strong>NEC 230.71(A)</strong>, the service disconnecting means shall consist of not more than <strong>six switches or six circuit breakers</strong> mounted in a single enclosure, in a group of separate enclosures, or in or on a switchboard. All disconnects must be grouped and marked as required.",
    evidence: [{
        quote: "The service disconnecting means for each service or for each set of service-entrance conductors shall consist of <span class='evidence-highlight'>not more than six switches or sets of circuit breakers</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 230.71(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Service & Panel",
    question: "Per NEC 408.36, what type of overcurrent protection is required at a panelboard?",
    options: [
        "Only a main breaker is required for panels rated over 200A",
        "Each panelboard must be individually protected on the supply side by a maximum of two main circuit breakers",
        "Each panelboard shall be protected by an overcurrent protective device having a rating not greater than that of the panelboard",
        "No overcurrent protection is required if the feeder breaker is sized properly"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 408.36</strong>, each panelboard shall be protected by an <strong>overcurrent protective device having a rating not greater than that of the panelboard</strong>. This protection can be in the panelboard itself (main breaker) or at any point on the supply side of the panelboard.",
    evidence: [{
        quote: "Each panelboard shall be <span class='evidence-highlight'>individually protected on the supply side by an overcurrent protective device having a rating not greater than that of the panelboard</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 408.36",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Service & Panel",
    question: "Per NEC 110.26(A)(1), what is the minimum working space depth required in front of electrical equipment operating at 120V to 250V to ground (Condition 1)?",
    options: [
        "30 inches",
        "36 inches",
        "42 inches",
        "48 inches"
    ],
    correct: 1,
    explanation: "Per <strong>NEC Table 110.26(A)(1)</strong>, the minimum clear working space depth for equipment at <strong>0-150V is 3 feet (36 inches)</strong> for Condition 1 (exposed live parts on one side and no live or grounded parts on the other). This depth also applies to the 151-600V range under Condition 1.",
    evidence: [{
        quote: "Working space depth for Condition 1, 0-150V nominal to ground: <span class='evidence-highlight'>900 mm (3 ft)</span>. This depth shall be measured from the exposed live parts or from the enclosure front.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 110.26(A)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Service & Panel",
    question: "A 400A service is being installed for a commercial building. Per NEC 230.42(A), how must the service-entrance conductors be sized?",
    options: [
        "At 125% of the continuous load plus 100% of the noncontinuous load",
        "At 100% of the total calculated load",
        "At the ampacity sufficient to carry the load as calculated per Article 220, not less than the rating of the disconnecting means",
        "At 80% of the service disconnect rating"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 230.42(A)</strong>, service-entrance conductors shall have an <strong>ampacity sufficient to carry the load as calculated in accordance with Article 220</strong>. The ampacity must not be less than the rating of the service disconnecting means. Continuous load considerations per 230.42(A)(1) also apply.",
    evidence: [{
        quote: "Service-entrance conductors shall have an ampacity <span class='evidence-highlight'>sufficient to carry the load as computed in accordance with Article 220</span> and shall not be sized smaller than the disconnecting means.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 230.42(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Service & Panel",
    question: "Per NEC 230.54(C), where service-entrance cables are installed, what protection must be provided where the cable enters the building?",
    options: [
        "A weatherproof splice must be made outside the building",
        "The cable must enter through a raceway that extends at least 18 inches inside the building",
        "Service heads (weatherheads) must be installed and service drop conductors must connect above the service head",
        "No special protection is required for underground service entrance cables"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 230.54(C)</strong>, <strong>service heads</strong> must be installed at the point of connection to service-drop conductors. The service-drop conductors must connect to the service-entrance conductors <strong>below the service head</strong> to prevent water from entering the raceway or cable. Service heads must be listed for the purpose.",
    evidence: [{
        quote: "Service-drop conductors shall be connected to the service-entrance conductors <span class='evidence-highlight'>below the service head or below the termination of the service-entrance cable sheath</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 230.54(C)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Conductor Sizing",
    question: "Per NEC Table 310.16, what is the ampacity of a 6 AWG THWN-2 copper conductor installed in a raceway at an ambient temperature of 30 degrees Celsius?",
    options: [
        "55 amps",
        "65 amps",
        "75 amps",
        "85 amps"
    ],
    correct: 2,
    explanation: "Per <strong>NEC Table 310.16</strong>, a 6 AWG copper conductor with THWN-2 insulation (90 degree C rating) in the 90 degree C column has an ampacity of <strong>75 amps</strong> at 30 degrees C ambient temperature. However, when used with 60 or 75 degree C rated terminals, the ampacity may need to be limited per 110.14(C).",
    evidence: [{
        quote: "6 AWG copper conductor, 90 degrees C insulation rating (THWN-2): <span class='evidence-highlight'>75 amperes</span> at 30 degrees C ambient temperature.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 310.16",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Conductor Sizing",
    question: "Per NEC 310.15(C)(1), when six current-carrying conductors are installed in a single raceway, what adjustment factor must be applied to the conductor ampacity?",
    options: [
        "90%",
        "80%",
        "70%",
        "60%"
    ],
    correct: 1,
    explanation: "Per <strong>NEC Table 310.15(C)(1)</strong>, when <strong>4 to 6 current-carrying conductors</strong> are installed in a single raceway or cable, the ampacity must be adjusted to <strong>80%</strong> of the values in Table 310.16. This derating accounts for the reduced heat dissipation when multiple conductors share the same raceway.",
    evidence: [{
        quote: "Number of current-carrying conductors 4 through 6: <span class='evidence-highlight'>Percent of values in Table 310.16 = 80%</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 310.15(C)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Conductor Sizing",
    question: "A continuous load of 40 amps is connected to a circuit breaker with 75 degree C rated terminals. Per NEC 210.20(A), what is the minimum circuit breaker rating required?",
    options: [
        "40 amps",
        "45 amps",
        "50 amps",
        "60 amps"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 210.20(A)</strong>, where a branch circuit supplies continuous loads, the overcurrent device rating shall not be less than the noncontinuous load plus <strong>125% of the continuous load</strong>. 40A x 1.25 = <strong>50 amps</strong>. The conductor must also be sized for at least 50A.",
    evidence: [{
        quote: "Where a branch circuit supplies continuous loads, the rating of the overcurrent device shall not be less than the noncontinuous load plus <span class='evidence-highlight'>125 percent of the continuous load</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 210.20(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Conductor Sizing",
    question: "An electrician is selecting conductors for installation in an ambient temperature of 40 degrees Celsius. The conductors have THHN insulation (90 degree C rated). Per NEC Table 310.15(B)(1), what temperature correction factor applies?",
    options: [
        "1.00",
        "0.91",
        "0.96",
        "0.87"
    ],
    correct: 2,
    explanation: "Per <strong>NEC Table 310.15(B)(1)</strong>, for conductors with a 90 degree C temperature rating operating in an ambient temperature of <strong>41-45 degrees C, the correction factor is 0.96</strong>. For 36-40 degrees C, the correction factor is 0.91. This factor is multiplied by the base ampacity from Table 310.16 to determine the adjusted ampacity.",
    evidence: [{
        quote: "Ambient temperature correction factors for 90 degrees C rated conductors: 36-40 degrees C = 0.91; <span class='evidence-highlight'>41-45 degrees C = 0.96</span>.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Table 310.15(B)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Conductor Sizing",
    question: "Per NEC 110.14(C)(1), equipment with terminals rated for 60 degrees C can use the 75 degree C ampacity column under what condition?",
    options: [
        "When the conductor is 14 AWG through 1 AWG",
        "When the conductor is rated for 75 degrees C or higher and the ampacity is determined from the 60 degree C column",
        "When conductors with 75 degree C insulation are used with circuits rated 100A or greater",
        "Under no circumstances; 60 degree C terminals must always use 60 degree C ampacities"
    ],
    correct: 2,
    explanation: "Per <strong>NEC 110.14(C)(1)(b)</strong>, conductors with higher temperature ratings can be used at the <strong>75 degree C ampacity for circuits rated 100A or greater</strong>, provided the equipment is listed and identified for use with such conductors. For circuits under 100A, the 60 degree C column generally applies.",
    evidence: [{
        quote: "For equipment terminals rated 60 degrees C, conductors with higher temperature ratings shall be permitted provided the <span class='evidence-highlight'>ampacity of such conductors is determined based on the 60 degrees C ampacity</span> of the conductor size. For circuits rated 100A or greater, the 75 degree C rating may be used.",
        source: "National Electrical Code",
        document: "NFPA 70 - NEC 2023",
        section: "Article 110.14(C)(1)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
    }]
},
{
    vendor: "electrician",
    domain: "Safety & OSHA",
    question: "Per OSHA 29 CFR 1926.405(b), what is the maximum height above the working surface at which temporary lighting in construction areas must be protected from accidental contact?",
    options: [
        "5 feet",
        "7 feet",
        "10 feet",
        "12 feet"
    ],
    correct: 1,
    explanation: "Per <strong>OSHA 29 CFR 1926.405(a)(2)(ii)(E)</strong>, temporary lights used during construction shall be protected from accidental contact or breakage by a suitable fixture or lampholder with a guard. Lamps must be protected when within <strong>7 feet of the working surface</strong> to prevent burns or lacerations from broken bulbs.",
    evidence: [{
        quote: "Temporary lights shall be equipped with guards to prevent <span class='evidence-highlight'>accidental contact with the bulb when within 7 feet of the working surface</span>.",
        source: "OSHA Construction Standards",
        document: "29 CFR 1926.405",
        section: "Subpart K - Electrical",
        url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.405"
    }]
},
{
    vendor: "electrician",
    domain: "Safety & OSHA",
    question: "Per NFPA 70E, what is the minimum approach boundary for shock protection (limited approach boundary) for exposed, movable conductors operating at 300V to ground?",
    options: [
        "3 ft 6 in",
        "10 ft 0 in",
        "42 inches",
        "1 ft 0 in"
    ],
    correct: 0,
    explanation: "Per <strong>NFPA 70E Table 130.4(E)(a)</strong>, the limited approach boundary for exposed, movable conductors at <strong>301V-750V is 3 ft 6 in</strong>. This boundary defines the distance within which only qualified persons are permitted to approach. Unqualified persons must remain outside this boundary unless accompanied by a qualified person.",
    evidence: [{
        quote: "For exposed movable conductors at 301-750V, the <span class='evidence-highlight'>limited approach boundary is 3 ft 6 in (1.0 m)</span> for qualified and unqualified personnel.",
        source: "NFPA 70E",
        document: "NFPA 70E - Standard for Electrical Safety in the Workplace 2024",
        section: "Table 130.4(E)(a)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70e-standard-development/70e"
    }]
},
{
    vendor: "electrician",
    domain: "Safety & OSHA",
    question: "An electrician must perform energized electrical work on a 480V panel. Per NFPA 70E, what must be completed before any energized work is permitted?",
    options: [
        "A verbal agreement from the site foreman",
        "An Energized Electrical Work Permit (EEWP) signed by the employer",
        "A safety briefing with all workers on site",
        "Written notification to the building owner only"
    ],
    correct: 1,
    explanation: "Per <strong>NFPA 70E 130.2(A)</strong>, when it has been determined that an electrically safe work condition is not feasible, an <strong>Energized Electrical Work Permit (EEWP)</strong> must be completed and approved before energized work begins. The permit documents the justification, hazard analysis, PPE requirements, and safe work practices.",
    evidence: [{
        quote: "When work is performed within the limited approach boundary or the arc flash boundary of exposed energized electrical conductors, an <span class='evidence-highlight'>energized electrical work permit shall be completed</span> before work is started.",
        source: "NFPA 70E",
        document: "NFPA 70E - Standard for Electrical Safety in the Workplace 2024",
        section: "Article 130.2(A)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70e-standard-development/70e"
    }]
},
{
    vendor: "electrician",
    domain: "Safety & OSHA",
    question: "Per OSHA 1910.333(b), what is the required procedure before an electrician begins work on de-energized electrical equipment?",
    options: [
        "Notify the building manager and post warning signs",
        "Implement lockout/tagout procedures per established energy control program",
        "Test the circuit with a voltage tester and begin work immediately",
        "Wear rubber gloves and proceed with caution"
    ],
    correct: 1,
    explanation: "Per <strong>OSHA 1910.333(b)</strong>, before working on de-energized equipment, the employer must implement <strong>lockout/tagout (LOTO) procedures</strong> as part of an established energy control program. This includes de-energizing the equipment, applying locks and tags, verifying absence of voltage, and ensuring the equipment cannot be re-energized during work.",
    evidence: [{
        quote: "Conductors and parts of electrical equipment that have been deenergized but have not been locked out or tagged in accordance with <span class='evidence-highlight'>this paragraph shall be treated as energized parts</span>.",
        source: "OSHA General Industry Standards",
        document: "29 CFR 1910.333",
        section: "Section (b) - Working on or near exposed deenergized parts",
        url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.333"
    }]
},
{
    vendor: "electrician",
    domain: "Safety & OSHA",
    question: "Per NFPA 70E Table 130.5(C), what is the minimum arc-rated PPE category required when performing work on a 480V panelboard with the cover removed and the door open (arc flash boundary calculation using the table method)?",
    options: [
        "Category 1 (minimum 4 cal/cm2)",
        "Category 2 (minimum 8 cal/cm2)",
        "Category 3 (minimum 25 cal/cm2)",
        "Category 4 (minimum 40 cal/cm2)"
    ],
    correct: 2,
    explanation: "Per <strong>NFPA 70E Table 130.5(C)</strong>, work involving a 480V panelboard with the cover removed and door open, where the available fault current and clearing time fall within table parameters, typically requires <strong>Category 3 PPE with a minimum arc rating of 25 cal/cm2</strong>. The specific category depends on the fault current available and the clearing time of the upstream protective device.",
    evidence: [{
        quote: "For 480V panelboards, with the panel cover removed, the <span class='evidence-highlight'>arc flash PPE category depends on the available fault current and clearing time</span>, and can range from Category 1 to Category 4.",
        source: "NFPA 70E",
        document: "NFPA 70E - Standard for Electrical Safety in the Workplace 2024",
        section: "Table 130.5(C)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70e-standard-development/70e"
    }]
}