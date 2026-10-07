{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A technician observes that the suction pressure on a R-410A system is 118 psig and the suction line temperature is 48°F. The evaporator saturation temperature at this pressure is 40°F. What is the superheat?",
    options: [
        "8°F",
        "40°F",
        "118°F",
        "78°F"
    ],
    correct: 0,
    explanation: "Superheat is calculated by subtracting the <strong>evaporator saturation temperature</strong> from the <strong>actual suction line temperature</strong>. In this case, 48°F - 40°F = 8°F. Superheat indicates that all liquid refrigerant has been vaporized and the vapor has been heated an additional 8 degrees beyond its boiling point.",
    evidence: [{
        quote: "Superheat is the difference between the <span class='evidence-highlight'>measured suction line temperature</span> and the <span class='evidence-highlight'>saturation temperature corresponding to the suction pressure</span>.",
        source: "ACCA",
        document: "ACCA Manual J - Residential Load Calculation",
        section: "Refrigerant Charging Procedures",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "In a standard vapor-compression refrigeration cycle, what is the primary purpose of the metering device?",
    options: [
        "To compress the refrigerant vapor into a high-pressure gas",
        "To reduce the pressure and temperature of the liquid refrigerant before it enters the evaporator",
        "To reject heat from the refrigerant to the outdoor air",
        "To separate liquid refrigerant from vapor in the suction line"
    ],
    correct: 1,
    explanation: "The <strong>metering device</strong> (such as a TXV or fixed orifice) creates a <strong>pressure drop</strong> that reduces both the pressure and temperature of the liquid refrigerant. This low-pressure, low-temperature refrigerant then enters the evaporator where it can absorb heat from the conditioned space.",
    evidence: [{
        quote: "The metering device regulates refrigerant flow and creates the <span class='evidence-highlight'>necessary pressure drop between the high-pressure and low-pressure sides</span> of the system.",
        source: "RSES",
        document: "RSES Refrigeration Fundamentals",
        section: "Components of the Refrigeration Cycle",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A technician measures 15°F subcooling on a system with a condenser saturation temperature of 105°F. What is the liquid line temperature?",
    options: [
        "120°F",
        "105°F",
        "90°F",
        "15°F"
    ],
    correct: 2,
    explanation: "<strong>Subcooling</strong> is calculated by subtracting the <strong>actual liquid line temperature</strong> from the <strong>condenser saturation temperature</strong>. If subcooling is 15°F and the saturation temperature is 105°F, then the liquid line temperature is 105°F - 15°F = 90°F. Subcooling confirms that the refrigerant is fully condensed and further cooled below its condensing point.",
    evidence: [{
        quote: "Subcooling equals the <span class='evidence-highlight'>condensing temperature minus the liquid line temperature</span>. Proper subcooling ensures solid liquid reaches the metering device.",
        source: "Carrier Corporation",
        document: "Carrier System Design Manual",
        section: "Refrigerant Charge Verification",
        url: "https://www.carrier.com/commercial/en/us/technical-resources/"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "Which refrigerant is classified as an azeotropic blend and does not experience temperature glide during phase changes?",
    options: [
        "R-407C",
        "R-410A",
        "R-404A",
        "R-22"
    ],
    correct: 1,
    explanation: "<strong>R-410A</strong> is a <strong>near-azeotropic</strong> refrigerant blend (50% R-32 and 50% R-125) that behaves essentially as a single-component refrigerant with negligible temperature glide. R-407C and R-404A are zeotropic blends that exhibit noticeable temperature glide. R-22 is a single-component refrigerant, not a blend.",
    evidence: [{
        quote: "R-410A exhibits <span class='evidence-highlight'>negligible temperature glide</span> (less than 0.3°F) and can be charged as either liquid or vapor in the field.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Refrigerant Properties",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A compressor with a crankcase heater that is de-energized during the off cycle is most likely to experience which problem upon startup?",
    options: [
        "Overcharged condenser flooding",
        "Liquid slugging due to refrigerant migration to the compressor",
        "High discharge temperature from excessive superheat",
        "Oil breakdown from sustained high temperatures"
    ],
    correct: 1,
    explanation: "The <strong>crankcase heater</strong> prevents <strong>refrigerant migration</strong> to the compressor crankcase during the off cycle. Without it, liquid refrigerant migrates to the coldest point (the compressor), mixes with the oil, and upon startup causes <strong>liquid slugging</strong> that can damage valves and bearings.",
    evidence: [{
        quote: "Crankcase heaters maintain oil temperature above the <span class='evidence-highlight'>refrigerant condensing temperature to prevent migration</span> and subsequent liquid slugging on startup.",
        source: "Copeland Compressors",
        document: "Copeland Application Engineering Bulletin AE-1175",
        section: "Compressor Protection Devices",
        url: "https://www.emerson.com/en-us/commercial-residential-solutions"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under EPA Section 608 regulations, what is the maximum allowable annual leak rate for commercial refrigeration equipment containing 50 or more pounds of refrigerant before the owner must repair the leak?",
    options: [
        "10%",
        "20%",
        "30%",
        "35%"
    ],
    correct: 1,
    explanation: "Under the <strong>EPA Section 608</strong> regulations, <strong>commercial refrigeration equipment</strong> has a maximum allowable annual leak rate of <strong>20%</strong>. If the leak rate exceeds this threshold, the owner/operator must repair the leak within 30 days of discovery. Industrial process refrigeration has a 30% threshold, and comfort cooling has a 10% threshold under the updated AIM Act provisions.",
    evidence: [{
        quote: "Owners or operators of commercial refrigeration equipment must repair leaks when the <span class='evidence-highlight'>annual leak rate exceeds 20 percent</span> of the total charge.",
        source: "U.S. Environmental Protection Agency",
        document: "40 CFR Part 82, Subpart F",
        section: "Section 82.157 - Leak Repair Requirements",
        url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A technician is decommissioning a system containing R-22. The system has a functioning compressor. To what level must the refrigerant be recovered before the system can be opened for service?",
    options: [
        "0 psig",
        "4 inches of Hg vacuum",
        "10 inches of Hg vacuum",
        "15 inches of Hg vacuum"
    ],
    correct: 0,
    explanation: "For systems with <strong>operating compressors</strong> containing <strong>more than 200 pounds</strong> of refrigerant, recovery to 0 psig is required. For systems with less than 200 pounds and a functioning compressor, the requirement is also <strong>0 psig</strong>. The deeper vacuum levels (10 or 15 inches Hg) apply when the compressor is <strong>not functioning</strong>.",
    evidence: [{
        quote: "Equipment with a <span class='evidence-highlight'>functioning compressor must be recovered to 0 psig</span> before opening for service, maintenance, or disposal.",
        source: "U.S. Environmental Protection Agency",
        document: "EPA 608 Certification Study Guide",
        section: "Recovery Requirements",
        url: "https://www.epa.gov/section608/section-608-technician-certification"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Which EPA 608 certification type is required for a technician who services both a walk-in freezer and a rooftop air conditioning unit?",
    options: [
        "Type I only",
        "Type II only",
        "Type III only",
        "Universal"
    ],
    correct: 3,
    explanation: "A walk-in freezer is <strong>high-pressure refrigeration</strong> (Type II), while a rooftop air conditioning unit is also <strong>high-pressure equipment</strong> (Type II). However, a technician servicing both commercial refrigeration and comfort cooling regularly should hold a <strong>Universal certification</strong>, which covers Type I (small appliances), Type II (high-pressure), and Type III (low-pressure) equipment.",
    evidence: [{
        quote: "Technicians who work on <span class='evidence-highlight'>both high-pressure and low-pressure equipment</span>, or who need the broadest credential, should obtain Universal certification.",
        source: "U.S. Environmental Protection Agency",
        document: "EPA Section 608 Technician Certification Overview",
        section: "Certification Types",
        url: "https://www.epa.gov/section608/section-608-technician-certification"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "According to EPA regulations, what is the maximum fine per day per violation for knowingly venting refrigerant?",
    options: [
        "Up to $10,000 per day",
        "Up to $27,500 per day",
        "Up to $44,539 per day",
        "Up to $100,000 per day"
    ],
    correct: 2,
    explanation: "The <strong>Clean Air Act</strong> provides for fines of up to <strong>$44,539 per day per violation</strong> (adjusted for inflation) for knowingly venting ODS or substitute refrigerants. This applies to any person who knowingly releases or disposes of refrigerants in a manner that permits them to enter the atmosphere.",
    evidence: [{
        quote: "Violations of the <span class='evidence-highlight'>refrigerant venting prohibition</span> can result in fines of up to $44,539 per day per violation under the Clean Air Act enforcement provisions.",
        source: "U.S. Environmental Protection Agency",
        document: "Clean Air Act Section 113 Enforcement",
        section: "Civil and Criminal Penalties",
        url: "https://www.epa.gov/enforcement/clean-air-act-caa-and-federal-facilities"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A technician needs to dispose of a small window air conditioner containing 3 pounds of R-410A. Under EPA Section 608, which statement is correct?",
    options: [
        "Small appliances are exempt from recovery requirements",
        "The refrigerant must be recovered to 90% of the charge or to 4 inches of Hg vacuum",
        "The unit can be scrapped after verifying the charge has already leaked out naturally",
        "Only certified reclaimers may handle disposal of small appliances"
    ],
    correct: 1,
    explanation: "Small appliances (those manufactured with <strong>less than 5 pounds</strong> of refrigerant) must be recovered to either <strong>90% of the charge</strong> or to a <strong>4-inch Hg vacuum</strong> before disposal. There is no exemption for small appliances, and assuming a natural leak does not satisfy the requirement.",
    evidence: [{
        quote: "Technicians must recover refrigerant from small appliances to <span class='evidence-highlight'>90 percent of the charge or 4 inches of mercury vacuum</span> before the appliance may be disposed of.",
        source: "U.S. Environmental Protection Agency",
        document: "40 CFR Part 82, Subpart F",
        section: "Section 82.156 - Required Practices",
        url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician measures 240V across L1 and L2 of a single-phase compressor, but the compressor hums and does not start. The start capacitor tests at 0 microfarads. What is the most likely cause?",
    options: [
        "The run capacitor has failed open",
        "The start capacitor has failed and cannot provide the phase shift needed to start the motor",
        "The contactor coil is energized but contacts are welded open",
        "The compressor internal overload has tripped"
    ],
    correct: 1,
    explanation: "A <strong>start capacitor reading 0 microfarads</strong> indicates it has <strong>failed open</strong> and cannot provide the necessary <strong>phase shift</strong> to the start winding. The compressor motor receives power (it hums) but cannot develop enough starting torque without the phase-shifted current through the start winding. The motor will draw locked rotor amps and eventually trip on overload.",
    evidence: [{
        quote: "A failed start capacitor prevents the <span class='evidence-highlight'>phase displacement needed to produce starting torque</span> in a single-phase motor, resulting in a humming sound and no rotation.",
        source: "RSES",
        document: "RSES Electrical Fundamentals for HVACR",
        section: "Capacitor-Start Motors",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A 3-phase compressor motor is wired in a delta configuration. What is the relationship between line voltage and phase voltage?",
    options: [
        "Line voltage equals phase voltage multiplied by 1.732",
        "Line voltage equals phase voltage",
        "Line voltage equals phase voltage divided by 1.732",
        "Line voltage equals phase voltage multiplied by 3"
    ],
    correct: 1,
    explanation: "In a <strong>delta configuration</strong>, each winding is connected directly across two line conductors. Therefore, the <strong>line voltage equals the phase voltage</strong>. This is different from a wye configuration, where line voltage equals phase voltage multiplied by the square root of 3 (1.732).",
    evidence: [{
        quote: "In a delta-connected motor, <span class='evidence-highlight'>the voltage across each winding (phase voltage) is equal to the line-to-line voltage</span>.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code Handbook",
        section: "Article 430 - Motors, Motor Circuits, and Controllers",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician finds that a 24V control transformer secondary reads 28.5V with no thermostat call. When the contactor energizes, the voltage drops to 18V. What is the most likely problem?",
    options: [
        "The transformer is oversized for the application",
        "The transformer VA rating is too low for the connected control circuit load",
        "The thermostat anticipator is set incorrectly",
        "The contactor coil is the wrong voltage rating"
    ],
    correct: 1,
    explanation: "A voltage that reads slightly high at no load (28.5V) but drops significantly under load (18V) indicates the <strong>transformer VA rating is insufficient</strong> for the control circuit load. The transformer cannot maintain voltage under the current draw of the contactor coil and other control devices. The solution is to install a transformer with a <strong>higher VA rating</strong>.",
    evidence: [{
        quote: "If the transformer secondary voltage <span class='evidence-highlight'>drops more than 10% under load</span>, the transformer is undersized and must be replaced with a unit of adequate VA capacity.",
        source: "Honeywell",
        document: "Honeywell Transformer Application Guide",
        section: "Transformer Sizing and Troubleshooting",
        url: "https://customer.honeywell.com/resources/techlit"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "When measuring the resistance of a single-phase compressor motor with terminals labeled C, S, and R, which relationship between resistance readings confirms the windings are correct?",
    options: [
        "C-to-S plus C-to-R equals S-to-R",
        "C-to-S minus C-to-R equals S-to-R",
        "C-to-S equals C-to-R equals S-to-R",
        "S-to-R equals C-to-S multiplied by C-to-R"
    ],
    correct: 0,
    explanation: "In a single-phase compressor, measuring from <strong>S to R</strong> reads through both windings in series (start + run), so it should equal the sum of the individual readings. <strong>C-to-S</strong> (start winding) plus <strong>C-to-R</strong> (run winding) should equal <strong>S-to-R</strong>. The highest resistance reading is always S-to-R, and the common terminal has the lowest resistance to each winding.",
    evidence: [{
        quote: "The resistance measured between Start and Run terminals should equal the <span class='evidence-highlight'>sum of Common-to-Start and Common-to-Run</span> resistances, confirming correct terminal identification.",
        source: "Copeland Compressors",
        document: "Copeland Compressor Motor Diagnostics Guide",
        section: "Ohm Testing Procedures",
        url: "https://www.emerson.com/en-us/commercial-residential-solutions"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A residential condensing unit nameplate shows MCA of 26A and MOP of 40A. Which combination of wire size and breaker is correct per NEC requirements?",
    options: [
        "10 AWG wire with a 30A breaker",
        "10 AWG wire with a 40A breaker",
        "12 AWG wire with a 25A breaker",
        "8 AWG wire with a 50A breaker"
    ],
    correct: 1,
    explanation: "The <strong>Minimum Circuit Ampacity (MCA)</strong> determines the minimum wire size, and the <strong>Maximum Overcurrent Protection (MOP)</strong> determines the maximum breaker size. 10 AWG copper is rated for 30A, which exceeds the 26A MCA. A <strong>40A breaker</strong> matches the MOP exactly. The breaker must not exceed the MOP, and the wire must be rated for at least the MCA.",
    evidence: [{
        quote: "Conductors must be sized for at least the <span class='evidence-highlight'>Minimum Circuit Ampacity (MCA)</span>, and the overcurrent protection device must not exceed the <span class='evidence-highlight'>Maximum Overcurrent Protection (MOP)</span> on the nameplate.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code",
        section: "Article 440 - Air-Conditioning and Refrigerating Equipment",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A heat pump system in heating mode shows frost accumulation on the outdoor coil. The defrost control initiates a defrost cycle. What sequence of events occurs during a typical demand defrost cycle?",
    options: [
        "The reversing valve shifts to cooling, the outdoor fan stops, and auxiliary heat energizes",
        "The outdoor fan speeds up to blow frost off the coil while the compressor cycles off",
        "The indoor blower stops, the compressor shuts down, and electric heaters defrost the outdoor coil",
        "The reversing valve remains in heating mode while a hot gas bypass valve sends discharge gas to the outdoor coil"
    ],
    correct: 0,
    explanation: "During a standard <strong>demand defrost cycle</strong>, the system temporarily shifts the <strong>reversing valve to cooling mode</strong>, sending hot discharge gas to the outdoor coil (now acting as a condenser) to melt frost. The <strong>outdoor fan is de-energized</strong> to prevent cold air from reducing defrost efficiency, and <strong>auxiliary/emergency heat</strong> energizes to temper the indoor air supply.",
    evidence: [{
        quote: "During defrost, the reversing valve switches to cooling, the <span class='evidence-highlight'>outdoor fan is de-energized</span>, and supplemental heat activates to <span class='evidence-highlight'>prevent cold air delivery to the occupied space</span>.",
        source: "Trane",
        document: "Trane Heat Pump Service Manual",
        section: "Defrost Operation",
        url: "https://www.trane.com/commercial/north-america/us/en/products-systems/service-parts-support.html"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "At what outdoor temperature does a typical air-source heat pump reach its thermal balance point?",
    options: [
        "The temperature at which the heat pump COP drops below 1.0",
        "The temperature at which the heat pump capacity equals the building heat loss",
        "The temperature at which the defrost cycle runs continuously",
        "The temperature at which the compressor discharge temperature exceeds its maximum rating"
    ],
    correct: 1,
    explanation: "The <strong>thermal balance point</strong> is the outdoor temperature at which the heat pump's <strong>heating capacity exactly equals the building's heat loss</strong>. Below this temperature, supplemental heat (typically electric strip heaters or a fossil fuel furnace) must provide the additional capacity needed to maintain indoor comfort.",
    evidence: [{
        quote: "The balance point occurs where the <span class='evidence-highlight'>heat pump heating capacity curve intersects the building heat loss line</span>. Below this point, supplemental heating is required.",
        source: "ACCA",
        document: "ACCA Manual J - Residential Load Calculation",
        section: "Heat Pump Balance Point Analysis",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A customer complains that their heat pump blows lukewarm air in heating mode. The supply air temperature is 95°F. Is this a valid complaint?",
    options: [
        "Yes, because the supply air should be at least 120°F in heating mode",
        "No, because heat pumps typically deliver supply air between 90°F and 100°F in heating mode, which is normal",
        "Yes, because the indoor coil is likely frozen and needs defrosting",
        "No, because the thermostat is set too high and should be lowered"
    ],
    correct: 1,
    explanation: "Heat pumps typically deliver <strong>supply air between 90°F and 100°F</strong>, which is lower than gas furnaces (120-140°F). While this may feel lukewarm compared to a furnace, it is <strong>normal operation</strong> for a heat pump. Educating the customer about the difference in supply air temperatures between heat pumps and furnaces is important for managing expectations.",
    evidence: [{
        quote: "Air-source heat pumps typically produce <span class='evidence-highlight'>supply air temperatures of 90°F to 100°F</span>, which is lower than combustion furnaces but maintains comfort through continuous operation and higher airflow.",
        source: "Carrier Corporation",
        document: "Carrier Heat Pump Product Data",
        section: "Performance Characteristics",
        url: "https://www.carrier.com/residential/en/us/products/heat-pumps/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "In a heat pump system, what determines whether the reversing valve is energized in heating or cooling mode?",
    options: [
        "All manufacturers energize the reversing valve in cooling mode (B-terminal convention)",
        "All manufacturers energize the reversing valve in heating mode (O-terminal convention)",
        "Some manufacturers energize in heating (B terminal) and others in cooling (O terminal)",
        "The reversing valve is always energized regardless of mode"
    ],
    correct: 2,
    explanation: "The reversing valve convention varies by manufacturer. Most manufacturers (like Carrier, Trane, Lennox) use the <strong>O terminal</strong>, which energizes the reversing valve in <strong>cooling mode</strong>. However, some manufacturers (notably Rheem/Ruud) use the <strong>B terminal</strong>, which energizes the valve in <strong>heating mode</strong>. The thermostat must be configured to match the equipment.",
    evidence: [{
        quote: "The O terminal energizes the reversing valve in cooling mode, while the <span class='evidence-highlight'>B terminal energizes the reversing valve in heating mode</span>. The correct terminal must match the equipment manufacturer's design.",
        source: "Honeywell",
        document: "Honeywell Thermostat Installation Guide",
        section: "Heat Pump Wiring Configuration",
        url: "https://customer.honeywell.com/resources/techlit"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A geothermal heat pump loop field is being designed for a 4-ton residential system. Which loop configuration typically requires the least amount of land area?",
    options: [
        "Horizontal slinky loop",
        "Horizontal straight loop",
        "Vertical bore loop",
        "Open-loop pond system"
    ],
    correct: 2,
    explanation: "A <strong>vertical bore loop</strong> configuration requires the <strong>least land area</strong> because the boreholes are drilled straight down, typically 150-300 feet deep, and only need a few square feet of surface area per bore. Horizontal loops require extensive trenching across a large yard area, and slinky loops, while more compact than straight horizontal, still need more land than vertical bores.",
    evidence: [{
        quote: "Vertical loop systems are ideal for sites with <span class='evidence-highlight'>limited land area</span> because the boreholes occupy minimal surface space while providing adequate heat exchange capacity at depth.",
        source: "IGSHPA",
        document: "IGSHPA Design and Installation Standards for Closed-Loop Geothermal Heat Pump Systems",
        section: "Loop Field Design",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Air Distribution",
    question: "According to ACCA Manual D, what is the maximum recommended supply duct velocity for residential trunk ducts to minimize noise?",
    options: [
        "500 FPM",
        "700 FPM",
        "900 FPM",
        "1200 FPM"
    ],
    correct: 2,
    explanation: "ACCA Manual D recommends a maximum supply trunk duct velocity of <strong>900 FPM</strong> for residential systems. Branch runouts should be limited to approximately <strong>600 FPM</strong>. Exceeding these velocities generates noise from air turbulence and increases static pressure, reducing system efficiency and comfort.",
    evidence: [{
        quote: "Residential supply trunk ducts should be designed for a maximum velocity of <span class='evidence-highlight'>900 feet per minute</span> to maintain acceptable noise levels.",
        source: "ACCA",
        document: "ACCA Manual D - Residential Duct Systems",
        section: "Duct Sizing Criteria",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Air Distribution",
    question: "A technician measures the total external static pressure on a 3-ton residential system and reads 0.82 inches WC. The equipment is rated for a maximum of 0.50 inches WC. What is the most likely consequence?",
    options: [
        "The system will consume less energy due to reduced airflow",
        "Reduced airflow causing lower evaporator temperatures, potential coil icing, and reduced efficiency",
        "Increased airflow leading to higher supply air temperature and comfort complaints",
        "No significant impact because the blower will automatically compensate"
    ],
    correct: 1,
    explanation: "When <strong>total external static pressure exceeds the equipment rating</strong>, the blower cannot deliver design airflow. <strong>Reduced airflow</strong> causes the evaporator temperature to drop below design conditions, potentially leading to <strong>coil icing</strong>, reduced latent capacity, higher humidity levels, and significantly reduced system efficiency. The high static pressure is typically caused by undersized ductwork, excessive fittings, or dirty filters.",
    evidence: [{
        quote: "Excessive static pressure reduces airflow below design requirements, causing the <span class='evidence-highlight'>evaporator coil temperature to drop and potentially freeze</span>, degrading both capacity and efficiency.",
        source: "ACCA",
        document: "ACCA Manual D - Residential Duct Systems",
        section: "Static Pressure and Airflow Diagnostics",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Air Distribution",
    question: "A technician is sizing a return air grille for a 2-ton system delivering 800 CFM. Using the recommended face velocity of 400 FPM for quiet operation, what is the minimum required free area of the return grille?",
    options: [
        "1 square foot",
        "2 square feet",
        "3 square feet",
        "4 square feet"
    ],
    correct: 1,
    explanation: "Free area is calculated by dividing <strong>airflow (CFM) by face velocity (FPM)</strong>. 800 CFM / 400 FPM = <strong>2 square feet</strong> of free area. Note that the free area of a grille is significantly less than its nominal face area because of the grille bars and frame. A grille with 75% free area ratio would need a nominal size of approximately 2.67 square feet.",
    evidence: [{
        quote: "Return grille free area = CFM / face velocity. For quiet residential operation, <span class='evidence-highlight'>maintain face velocities at or below 400 FPM</span> for return air grilles.",
        source: "ACCA",
        document: "ACCA Manual D - Residential Duct Systems",
        section: "Grille and Register Sizing",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Air Distribution",
    question: "What is the primary purpose of a balancing damper installed in a branch duct run?",
    options: [
        "To filter particles from the airstream before they reach the register",
        "To adjust airflow to individual rooms so that each space receives its design CFM",
        "To prevent backdraft when the system is not operating",
        "To reduce duct noise by creating laminar flow"
    ],
    correct: 1,
    explanation: "<strong>Balancing dampers</strong> are installed in branch ducts to allow a technician to <strong>adjust airflow to individual zones or rooms</strong> so that each space receives its design CFM as determined by the load calculation. Without dampers, rooms closest to the air handler tend to be over-conditioned while remote rooms receive insufficient airflow.",
    evidence: [{
        quote: "Balancing dampers must be installed in branch ducts to allow <span class='evidence-highlight'>adjustment of airflow to each outlet</span> to match the room-by-room design airflow values.",
        source: "SMACNA",
        document: "SMACNA HVAC Duct Construction Standards",
        section: "Damper Installation and Air Balancing",
        url: "https://www.smacna.org/technical/standards"
    }]
},
{
    vendor: "hvac",
    domain: "Air Distribution",
    question: "In a zoned forced-air system with a bypass damper, what happens when only one of three zones is calling for conditioning?",
    options: [
        "The system reduces blower speed to match the single-zone demand",
        "Excess air is directed through the bypass duct back to the return plenum to relieve static pressure",
        "The system cycles the compressor on and off rapidly to match the reduced load",
        "The unused zone dampers open partially to prevent system damage"
    ],
    correct: 1,
    explanation: "When fewer zones are calling, the zone dampers for non-calling zones close, increasing static pressure. The <strong>bypass damper</strong> opens to redirect <strong>excess air back to the return plenum</strong>, preventing excessive static pressure buildup that could damage ductwork or reduce equipment life. Modern systems may also use <strong>variable-speed blowers</strong> to reduce airflow instead of or in addition to bypass dampers.",
    evidence: [{
        quote: "The bypass damper relieves excess static pressure by <span class='evidence-highlight'>diverting surplus air from the supply plenum back to the return</span> when zone dampers partially close the duct system.",
        source: "Honeywell",
        document: "Honeywell TrueZONE Zoning System Design Guide",
        section: "Bypass Damper Operation",
        url: "https://customer.honeywell.com/resources/techlit"
    }]
},
{
    vendor: "hvac",
    domain: "Troubleshooting",
    question: "A technician arrives at a residential cooling call. The condensing unit runs but the indoor blower does not. The thermostat is calling for cooling. The technician measures 24V at the G terminal on the air handler control board but the blower does not start. What should the technician check next?",
    options: [
        "The condensing unit contactor",
        "The blower capacitor and blower motor windings",
        "The thermostat wiring between R and Y terminals",
        "The high-pressure safety switch"
    ],
    correct: 1,
    explanation: "Since <strong>24V is present at the G terminal</strong> on the control board, the thermostat and wiring are functioning correctly. The board is receiving the blower call signal. The problem is downstream: either the <strong>blower capacitor has failed</strong> (preventing the motor from starting), the <strong>blower motor windings are open</strong>, or the blower relay on the board has failed. Checking the capacitor and motor windings is the logical next step.",
    evidence: [{
        quote: "When the control board receives 24V on the G terminal but the blower fails to operate, <span class='evidence-highlight'>check the blower motor capacitor, motor windings, and the blower relay on the control board</span>.",
        source: "Carrier Corporation",
        document: "Carrier Troubleshooting Guide - Residential Air Handlers",
        section: "Blower Motor Diagnostics",
        url: "https://www.carrier.com/residential/en/us/products/fan-coils/"
    }]
},
{
    vendor: "hvac",
    domain: "Troubleshooting",
    question: "A packaged rooftop unit trips on high-pressure safety. The technician resets the switch and the unit runs for 10 minutes before tripping again. Ambient temperature is 95°F. Condenser coil appears clean. What should the technician investigate?",
    options: [
        "Low refrigerant charge causing the low-pressure switch to trip",
        "A non-condensable gas (air) in the system or a restricted condenser fan motor",
        "A frozen evaporator coil restricting airflow",
        "A faulty thermostat calling for continuous cooling"
    ],
    correct: 1,
    explanation: "When high-pressure safety trips repeatedly with a clean condenser coil and moderate ambient temperature, the technician should suspect <strong>non-condensable gases (air or nitrogen)</strong> in the system that elevate head pressure, or a <strong>condenser fan motor issue</strong> (failed capacitor, failing motor, wrong rotation) reducing airflow across the condenser. Other possibilities include an overcharge or a restriction in the liquid line.",
    evidence: [{
        quote: "Non-condensable gases trapped in the system <span class='evidence-highlight'>elevate head pressure above normal levels</span> and can cause repeated high-pressure safety trips even with adequate condenser airflow.",
        source: "Trane",
        document: "Trane Packaged Rooftop Unit Service Manual",
        section: "High-Pressure Troubleshooting",
        url: "https://www.trane.com/commercial/north-america/us/en/products-systems/service-parts-support.html"
    }]
},
{
    vendor: "hvac",
    domain: "Troubleshooting",
    question: "A split system shows the following readings: suction pressure is low, superheat is high, subcooling is low, and the compressor amp draw is below nameplate. What is the most likely diagnosis?",
    options: [
        "System is overcharged with refrigerant",
        "System is undercharged with refrigerant",
        "The compressor has a leaking valve",
        "The condenser fan motor has failed"
    ],
    correct: 1,
    explanation: "The combination of <strong>low suction pressure, high superheat, low subcooling, and low amp draw</strong> is the classic signature of an <strong>undercharged system</strong>. There is not enough refrigerant in the system: low charge means less liquid in the condenser (low subcooling), the evaporator starves for refrigerant (high superheat), suction pressure drops, and the compressor draws fewer amps because it is pumping less refrigerant mass.",
    evidence: [{
        quote: "An undercharged system presents with <span class='evidence-highlight'>low suction pressure, high superheat, low subcooling, and reduced compressor amperage</span> as the defining diagnostic pattern.",
        source: "RSES",
        document: "RSES Troubleshooting and System Diagnostics",
        section: "Refrigerant Charge Diagnostics Table",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Troubleshooting",
    question: "A technician finds that a furnace cycles on the limit switch after approximately 3 minutes of operation. The filter is new and all supply registers are open. What should the technician check next?",
    options: [
        "The gas valve for overfiring",
        "The blower wheel for excessive dirt buildup or incorrect rotation",
        "The thermostat heat anticipator setting",
        "The outdoor condensing unit refrigerant charge"
    ],
    correct: 1,
    explanation: "Cycling on the <strong>high limit switch</strong> with a clean filter and open registers indicates <strong>insufficient airflow</strong> across the heat exchanger. A <strong>dirty blower wheel</strong> significantly reduces airflow even with a clean filter. Incorrect blower rotation (wired backwards on a 3-phase or multi-tap motor wired to wrong speed tap) also causes this issue. The technician should inspect and clean the blower wheel and verify rotation direction.",
    evidence: [{
        quote: "A dirty blower wheel can reduce airflow by 50% or more, causing the <span class='evidence-highlight'>heat exchanger to overheat and trip the high-limit safety switch</span>, even with a clean filter in place.",
        source: "Lennox",
        document: "Lennox Furnace Service and Troubleshooting Manual",
        section: "Limit Switch Diagnostics",
        url: "https://www.lennox.com/resources/service-experts"
    }]
},
{
    vendor: "hvac",
    domain: "Troubleshooting",
    question: "An R-410A system has the following readings: high suction pressure, low superheat, high subcooling, and high compressor amp draw. What condition does this indicate?",
    options: [
        "Undercharge of refrigerant",
        "Overcharge of refrigerant",
        "Restricted metering device",
        "Leaking compressor valves"
    ],
    correct: 1,
    explanation: "The combination of <strong>high suction pressure, low superheat, high subcooling, and high amp draw</strong> is the classic pattern of a <strong>system overcharge</strong>. Excess refrigerant floods the evaporator (low superheat, high suction pressure), backs up liquid in the condenser (high subcooling), and increases the workload on the compressor (high amps). This condition reduces efficiency and can cause liquid slugging.",
    evidence: [{
        quote: "An overcharged system exhibits <span class='evidence-highlight'>high suction pressure, low superheat, high subcooling, and elevated compressor amperage</span>, indicating excess refrigerant in the circuit.",
        source: "Carrier Corporation",
        document: "Carrier Refrigerant Charging Procedures",
        section: "Overcharge Diagnosis",
        url: "https://www.carrier.com/commercial/en/us/technical-resources/"
    }]
},
{
    vendor: "hvac",
    domain: "Safety Codes",
    question: "According to NFPA 54 (National Fuel Gas Code), what is the minimum clearance required between a single-wall vent connector and combustible material?",
    options: [
        "1 inch",
        "3 inches",
        "6 inches",
        "12 inches"
    ],
    correct: 2,
    explanation: "NFPA 54 requires a minimum clearance of <strong>6 inches</strong> between a <strong>single-wall vent connector</strong> and any combustible material. Type B double-wall vent pipe requires only 1 inch of clearance from combustibles. These clearances are critical fire safety requirements and must not be reduced without approved heat shields.",
    evidence: [{
        quote: "Single-wall metal vent connectors shall have a minimum clearance of <span class='evidence-highlight'>6 inches from combustible materials</span> in accordance with the listing and manufacturer's instructions.",
        source: "NFPA",
        document: "NFPA 54 - National Fuel Gas Code",
        section: "Section 12.6 - Vent Connectors for Category I Equipment",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-54"
    }]
},
{
    vendor: "hvac",
    domain: "Safety Codes",
    question: "A technician is installing a new 80% AFUE furnace. The mechanical code requires combustion air for the appliance. If the furnace is in a confined space, what are the two openings required for combustion air from outdoors?",
    options: [
        "One opening within 6 inches of the ceiling and one within 6 inches of the floor",
        "One opening within 12 inches of the ceiling and one within 12 inches of the floor",
        "Two openings at the same height, one on each side of the equipment",
        "One opening at any height is sufficient if it is large enough"
    ],
    correct: 1,
    explanation: "When providing combustion air from outdoors to a <strong>confined space</strong>, the code requires <strong>two openings</strong>: one within <strong>12 inches of the top</strong> of the enclosure and one within <strong>12 inches of the bottom</strong>. The upper opening allows heated air to escape while the lower opening draws in fresh combustion air, creating natural air circulation.",
    evidence: [{
        quote: "Two permanent openings shall be provided, one commencing within <span class='evidence-highlight'>12 inches of the top and one within 12 inches of the bottom</span> of the enclosure, communicating directly with the outdoors.",
        source: "International Code Council",
        document: "International Fuel Gas Code (IFGC)",
        section: "Section 304 - Combustion Air",
        url: "https://www.iccsafe.org/products-and-services/codes-standards/ifgc/"
    }]
},
{
    vendor: "hvac",
    domain: "Safety Codes",
    question: "What is the maximum concentration of carbon monoxide (CO) allowed in the flue gases of a properly operating natural gas furnace?",
    options: [
        "0 ppm (no CO should be present)",
        "9 ppm air-free",
        "100 ppm air-free",
        "400 ppm air-free"
    ],
    correct: 2,
    explanation: "A properly operating natural gas furnace should produce <strong>less than 100 ppm of CO on an air-free basis</strong> in the flue gases. While some CO is normal in combustion, readings above 100 ppm air-free indicate incomplete combustion due to issues like a cracked heat exchanger, improper gas pressure, or insufficient combustion air. Readings above 400 ppm are considered dangerous and require immediate shutdown.",
    evidence: [{
        quote: "Carbon monoxide levels in excess of <span class='evidence-highlight'>100 ppm air-free in the flue gases</span> indicate a combustion problem requiring investigation. Levels above 400 ppm air-free require immediate equipment shutdown.",
        source: "ACCA",
        document: "ACCA Carbon Monoxide Safety and Testing Procedures",
        section: "CO Testing Thresholds",
        url: "https://www.acca.org/standards/quality-installation"
    }]
},
{
    vendor: "hvac",
    domain: "Safety Codes",
    question: "According to the IMC (International Mechanical Code), what is the minimum height that a condensing unit must be elevated above grade when installed on the ground?",
    options: [
        "No minimum height requirement exists",
        "3 inches above grade",
        "6 inches above grade",
        "12 inches above grade"
    ],
    correct: 1,
    explanation: "The IMC requires that outdoor condensing units be elevated a minimum of <strong>3 inches above grade</strong> (finished ground level). This prevents debris, snow, and standing water from entering the unit and obstructing airflow. In areas with significant snowfall, manufacturers often recommend higher elevation. Local codes may be more restrictive.",
    evidence: [{
        quote: "Outdoor mechanical equipment shall be installed on a level surface a <span class='evidence-highlight'>minimum of 3 inches above the adjoining finished grade</span> to protect against moisture and debris.",
        source: "International Code Council",
        document: "International Mechanical Code (IMC)",
        section: "Section 304 - Installation",
        url: "https://www.iccsafe.org/products-and-services/codes-standards/imc/"
    }]
},
{
    vendor: "hvac",
    domain: "Safety Codes",
    question: "A technician discovers a cracked heat exchanger during a routine maintenance inspection. What is the correct course of action?",
    options: [
        "Seal the crack with high-temperature epoxy and continue operating the furnace",
        "Tag the equipment as unsafe, shut down the furnace, and notify the customer of the carbon monoxide hazard",
        "Increase the combustion air supply to dilute any CO produced by the crack",
        "Adjust the gas pressure to reduce the flame size and monitor CO levels"
    ],
    correct: 1,
    explanation: "A <strong>cracked heat exchanger</strong> is a serious safety hazard that can allow <strong>combustion gases, including carbon monoxide, to enter the living space</strong>. The technician must immediately <strong>shut down the furnace</strong>, tag it as unsafe, and inform the customer. The heat exchanger or furnace must be replaced. Attempting to repair a cracked heat exchanger with epoxy or other sealants is not an acceptable repair per code.",
    evidence: [{
        quote: "A cracked or failed heat exchanger must result in <span class='evidence-highlight'>immediate shutdown of the equipment</span>. The appliance shall not be operated until the heat exchanger is replaced or the unit is condemned.",
        source: "AHRI",
        document: "AHRI Guideline N - Heat Exchanger Inspection",
        section: "Condemnable Conditions",
        url: "https://www.ahrinet.org/standards"
    }]
},
{
    vendor: "hvac",
    domain: "Load Calculations",
    question: "When performing a Manual J residential cooling load calculation, which of the following is NOT a factor that contributes to the sensible cooling load?",
    options: [
        "Solar heat gain through windows",
        "Conduction through walls and roof",
        "Moisture infiltration through building envelope",
        "Internal heat gains from occupants and appliances"
    ],
    correct: 2,
    explanation: "<strong>Moisture infiltration</strong> contributes to the <strong>latent</strong> cooling load, not the sensible cooling load. Sensible heat gains include solar radiation through glass, conduction through the building envelope, and internal heat from people and equipment. The total cooling load is the sum of both sensible and latent loads, and proper separation is critical for equipment selection.",
    evidence: [{
        quote: "Sensible cooling loads include solar, conduction, and internal gains. <span class='evidence-highlight'>Moisture (latent) loads from infiltration and ventilation</span> are calculated separately and added to determine total cooling load.",
        source: "ACCA",
        document: "ACCA Manual J - Residential Load Calculation, 8th Edition",
        section: "Load Component Breakdown",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Load Calculations",
    question: "A Manual J calculation results in a total cooling load of 30,000 BTU/h for a home. The nearest available equipment sizes are 24,000 BTU/h (2-ton) and 36,000 BTU/h (3-ton). According to ACCA guidelines, which unit should be selected?",
    options: [
        "The 3-ton unit because it exceeds the load and provides a safety margin",
        "The 2.5-ton unit should be special ordered to exactly match the load",
        "The 3-ton unit but only if it does not exceed 115% of the total load",
        "Either unit is acceptable as long as the ductwork is properly sized"
    ],
    correct: 2,
    explanation: "ACCA guidelines recommend selecting equipment that does <strong>not exceed 115% of the calculated total load</strong>. 115% of 30,000 BTU/h = 34,500 BTU/h. The 36,000 BTU/h unit at 120% exceeds this threshold. However, if 36,000 is the next available size and falls within the manufacturer's acceptable range, the selection may be permitted with documentation. The goal is to avoid significant oversizing, which causes short cycling and poor humidity control.",
    evidence: [{
        quote: "Equipment capacity shall not exceed <span class='evidence-highlight'>115 percent of the total calculated cooling load</span> per ACCA Manual S equipment selection procedures.",
        source: "ACCA",
        document: "ACCA Manual S - Residential Equipment Selection",
        section: "Equipment Sizing Limits",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Load Calculations",
    question: "In a Manual J calculation, what outdoor design temperature condition is used for cooling load calculations?",
    options: [
        "The highest temperature ever recorded at the location",
        "The average summer temperature for the location",
        "The 1% design dry-bulb temperature for the location from ASHRAE weather data",
        "The 99% design dry-bulb temperature for the location"
    ],
    correct: 2,
    explanation: "Manual J uses the <strong>1% design dry-bulb temperature</strong> from ASHRAE weather data for cooling calculations. This means the outdoor temperature is expected to be at or above this value only <strong>1% of the total hours</strong> during the cooling season. Using extreme record temperatures would result in oversized equipment. The 99% value is used for heating design conditions.",
    evidence: [{
        quote: "Cooling design conditions shall be based on the <span class='evidence-highlight'>1% dry-bulb/mean coincident wet-bulb values</span> from ASHRAE climatic data tables for the project location.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Chapter 14 - Climatic Design Information",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Load Calculations",
    question: "Which factor has the GREATEST impact on residential cooling load in most climates?",
    options: [
        "Lighting and appliance internal gains",
        "Occupant heat gains",
        "Solar heat gain through windows and glass doors",
        "Conduction through below-grade basement walls"
    ],
    correct: 2,
    explanation: "<strong>Solar heat gain through windows and glass doors</strong> is typically the single largest component of residential cooling load in most climates. Factors affecting solar gain include window area, orientation (west-facing windows have highest afternoon gain), glass type (SHGC rating), and shading. This is why window selection and shading strategies are critical design considerations.",
    evidence: [{
        quote: "<span class='evidence-highlight'>Solar heat gain through fenestration (windows and doors)</span> is typically the dominant component of residential cooling loads, often accounting for 25-35% of the total sensible cooling load.",
        source: "ACCA",
        document: "ACCA Manual J - Residential Load Calculation, 8th Edition",
        section: "Solar Load Estimation",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Load Calculations",
    question: "A building has a wall with an R-value of 19. What is the U-factor of this wall assembly?",
    options: [
        "0.053",
        "0.19",
        "1.9",
        "19"
    ],
    correct: 0,
    explanation: "The <strong>U-factor</strong> is the <strong>reciprocal of the R-value</strong>: U = 1/R. Therefore, 1/19 = <strong>0.053</strong>. The U-factor represents the rate of heat transfer through a material per unit area per degree of temperature difference. A lower U-factor (higher R-value) indicates better insulating performance. U-factors are used in load calculations to determine conduction heat gains and losses.",
    evidence: [{
        quote: "The overall heat transfer coefficient (U-factor) is the <span class='evidence-highlight'>reciprocal of the total thermal resistance (R-value)</span> of the assembly: U = 1/R.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Chapter 27 - Heat, Air, and Moisture Control in Building Assemblies",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Controls & Thermostats",
    question: "A programmable thermostat is configured with a 2°F deadband. The cooling setpoint is 74°F. At what temperature will the system turn on, and at what temperature will it turn off?",
    options: [
        "Turns on at 76°F, turns off at 74°F",
        "Turns on at 75°F, turns off at 73°F",
        "Turns on at 74°F, turns off at 72°F",
        "Turns on at 76°F, turns off at 72°F"
    ],
    correct: 0,
    explanation: "With a <strong>2°F deadband</strong> (also called differential) and a cooling setpoint of 74°F, the system will <strong>turn on when the temperature rises to 76°F</strong> (setpoint + deadband) and <strong>turn off when it reaches 74°F</strong> (the setpoint). The deadband prevents short cycling by requiring the temperature to rise above the setpoint before restarting the system.",
    evidence: [{
        quote: "The deadband (differential) setting determines how far the <span class='evidence-highlight'>space temperature must deviate from the setpoint before the system activates</span>, preventing rapid on-off cycling.",
        source: "Honeywell",
        document: "Honeywell Thermostat Engineering Guide",
        section: "Deadband and Differential Settings",
        url: "https://customer.honeywell.com/resources/techlit"
    }]
},
{
    vendor: "hvac",
    domain: "Controls & Thermostats",
    question: "A building automation system uses a PID controller for discharge air temperature control. The system is experiencing temperature oscillations around the setpoint. Which PID parameter should be adjusted first to reduce oscillations?",
    options: [
        "Increase the proportional gain (P)",
        "Decrease the proportional gain (P)",
        "Increase the derivative time (D)",
        "Decrease the integral time (I)"
    ],
    correct: 1,
    explanation: "Temperature <strong>oscillations</strong> around the setpoint typically indicate that the <strong>proportional gain is too high</strong>, causing the controller to overreact to deviations. <strong>Decreasing the proportional gain</strong> reduces the magnitude of the correction applied, which dampens oscillations. Increasing the gain would worsen oscillations, and adjusting integral or derivative before proportional is not the recommended tuning approach.",
    evidence: [{
        quote: "If the controlled variable <span class='evidence-highlight'>oscillates around the setpoint, reduce the proportional gain</span> as the first tuning adjustment. Excessive gain causes overcorrection and instability.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - HVAC Applications",
        section: "Chapter 47 - Automatic Control",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Controls & Thermostats",
    question: "A technician is wiring a conventional thermostat to a gas furnace with central air conditioning. Which terminal designation is used for the cooling contactor circuit?",
    options: [
        "W terminal",
        "G terminal",
        "Y terminal",
        "C terminal"
    ],
    correct: 2,
    explanation: "The <strong>Y terminal</strong> is the industry-standard designation for the <strong>cooling contactor circuit</strong>. When the thermostat calls for cooling, it closes the circuit between R (power) and Y, energizing the compressor contactor. W controls heating, G controls the indoor blower fan, and C is the 24V common (return) wire.",
    evidence: [{
        quote: "Standard thermostat terminal designations: R = power, W = heat, <span class='evidence-highlight'>Y = compressor/cooling</span>, G = fan, C = common, O/B = reversing valve.",
        source: "Honeywell",
        document: "Honeywell Thermostat Installation and Wiring Guide",
        section: "Terminal Designations",
        url: "https://customer.honeywell.com/resources/techlit"
    }]
},
{
    vendor: "hvac",
    domain: "Controls & Thermostats",
    question: "An economizer controller on a rooftop unit is set to enable free cooling when outdoor conditions are favorable. Using a single dry-bulb changeover strategy, at what temperature setting should the economizer be disabled?",
    options: [
        "When the outdoor dry-bulb temperature exceeds the return air temperature",
        "When the outdoor dry-bulb temperature drops below 32°F",
        "When the outdoor dry-bulb temperature exceeds a fixed high-limit setpoint, typically around 65-75°F depending on climate",
        "When the outdoor relative humidity exceeds 50%"
    ],
    correct: 2,
    explanation: "A <strong>single dry-bulb changeover</strong> economizer strategy disables the economizer when the outdoor dry-bulb temperature exceeds a <strong>fixed high-limit setpoint</strong>, typically set between 65°F and 75°F depending on climate zone. This is the simplest economizer control method. More sophisticated strategies include differential dry-bulb (comparing outdoor to return) and differential enthalpy control.",
    evidence: [{
        quote: "The fixed dry-bulb high-limit shutoff disables economizer operation when outdoor temperature exceeds a <span class='evidence-highlight'>predetermined setpoint, typically 65°F to 75°F</span> based on ASHRAE climate zone.",
        source: "ASHRAE",
        document: "ASHRAE Standard 90.1 - Energy Standard for Buildings",
        section: "Section 6.5.1 - Economizer Requirements",
        url: "https://www.ashrae.org/technical-resources/ashrae-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Controls & Thermostats",
    question: "What is the purpose of an outdoor air temperature sensor (OAT) connected to a modern multi-stage heat pump thermostat?",
    options: [
        "To display outdoor temperature on the thermostat screen only",
        "To enable intelligent staging of auxiliary heat and optimize defrost cycles based on outdoor conditions",
        "To disable the system entirely when outdoor temperatures are extreme",
        "To activate an alarm if outdoor temperatures fall below freezing"
    ],
    correct: 1,
    explanation: "The <strong>outdoor air temperature sensor</strong> provides data that enables the thermostat to make <strong>intelligent decisions about auxiliary heat staging and defrost timing</strong>. At milder outdoor temperatures, the thermostat delays auxiliary heat engagement to maximize heat pump efficiency. At lower temperatures, it engages auxiliary heat sooner. It also helps optimize defrost cycles by adjusting frequency based on conditions likely to cause frost formation.",
    evidence: [{
        quote: "The outdoor temperature sensor allows the thermostat to <span class='evidence-highlight'>optimize auxiliary heat lockout, compressor staging, and defrost cycle frequency</span> based on actual outdoor conditions.",
        source: "Emerson White-Rodgers",
        document: "Emerson Sensi Smart Thermostat Installation Guide",
        section: "Outdoor Sensor Configuration",
        url: "https://sensi.emerson.com/en-us/support"
    }]
},
{
    vendor: "hvac",
    domain: "Commercial HVAC",
    question: "A chilled water system uses a variable primary flow configuration. What device is critical to ensure minimum flow through the chiller when the building load decreases significantly?",
    options: [
        "A three-way bypass valve at each air handler",
        "A minimum flow bypass valve or decoupler line at the chiller plant",
        "A constant-speed primary pump on each chiller",
        "A differential pressure sensor at the end of each riser"
    ],
    correct: 1,
    explanation: "In a <strong>variable primary flow</strong> system, as building loads decrease, the two-way valves at the air handlers close, reducing flow through the system. A <strong>minimum flow bypass valve</strong> (or decoupler line) is critical to ensure the chiller always receives at least its <strong>minimum required evaporator flow rate</strong>. Without this, low flow can cause the evaporator to freeze or trip the chiller on low-flow protection.",
    evidence: [{
        quote: "Variable primary flow systems require a <span class='evidence-highlight'>minimum flow bypass valve or decoupler to maintain minimum evaporator flow</span> and prevent chiller trips during low-load conditions.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - HVAC Systems and Equipment",
        section: "Chilled Water System Design",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Commercial HVAC",
    question: "In a VAV (Variable Air Volume) system, what is the purpose of a DDC-controlled reheat coil at each VAV box?",
    options: [
        "To provide additional cooling when the zone load exceeds design conditions",
        "To temper the cool supply air to prevent overcooling when the zone load decreases and the VAV damper reaches its minimum position",
        "To dehumidify the air at each individual zone",
        "To preheat outdoor air before it enters the zone"
    ],
    correct: 1,
    explanation: "In a <strong>VAV reheat system</strong>, as the zone cooling load decreases, the VAV damper modulates toward its <strong>minimum airflow position</strong> (set for ventilation requirements). If the minimum air volume still provides more cooling than needed, the <strong>reheat coil activates</strong> to warm the supply air, preventing overcooling of the space. This is an energy penalty but ensures comfort and meets minimum ventilation requirements.",
    evidence: [{
        quote: "The reheat coil activates when the VAV damper reaches <span class='evidence-highlight'>minimum position and the zone temperature continues to drop</span> below setpoint, preventing overcooling while maintaining minimum ventilation airflow.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - HVAC Systems and Equipment",
        section: "Variable Air Volume Systems",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Commercial HVAC",
    question: "A cooling tower serving a water-cooled chiller system has a design entering water temperature of 95°F and a leaving water temperature of 85°F. The outdoor wet-bulb temperature is 78°F. What is the cooling tower approach temperature?",
    options: [
        "10°F",
        "7°F",
        "17°F",
        "3°F"
    ],
    correct: 1,
    explanation: "<strong>Approach temperature</strong> is the difference between the <strong>leaving (cold) water temperature</strong> and the <strong>outdoor wet-bulb temperature</strong>. In this case, 85°F - 78°F = <strong>7°F approach</strong>. The range is the difference between entering and leaving water (95 - 85 = 10°F). Approach is a measure of cooling tower efficiency; lower approach indicates better performance but requires a larger, more expensive tower.",
    evidence: [{
        quote: "Cooling tower approach is defined as the difference between the <span class='evidence-highlight'>cold water temperature leaving the tower and the ambient wet-bulb temperature</span>. Typical design approach is 5-10°F.",
        source: "Cooling Technology Institute",
        document: "CTI Cooling Tower Performance Evaluation",
        section: "Performance Metrics",
        url: "https://www.cti.org/standards"
    }]
},
{
    vendor: "hvac",
    domain: "Commercial HVAC",
    question: "ASHRAE Standard 62.1 requires a minimum outdoor air ventilation rate for occupied commercial spaces. For a typical office space, what is the approximate minimum outdoor air requirement?",
    options: [
        "5 CFM per person plus 0.06 CFM per square foot of floor area",
        "15 CFM per person only",
        "20 CFM per person only",
        "0.15 CFM per square foot of floor area only"
    ],
    correct: 0,
    explanation: "ASHRAE Standard 62.1 uses the <strong>Ventilation Rate Procedure</strong>, which calculates outdoor air requirements as the sum of two components: a <strong>per-person rate</strong> (breathing zone people component, typically 5 CFM/person for offices) and a <strong>per-area rate</strong> (0.06 CFM/sq ft for offices). This two-part calculation accounts for both occupant-generated and building-generated contaminants.",
    evidence: [{
        quote: "The Ventilation Rate Procedure calculates breathing zone outdoor airflow as <span class='evidence-highlight'>Rp times the zone population plus Ra times the zone floor area</span>, where office Rp = 5 CFM/person and Ra = 0.06 CFM/ft2.",
        source: "ASHRAE",
        document: "ASHRAE Standard 62.1 - Ventilation for Acceptable Indoor Air Quality",
        section: "Table 6-1 - Minimum Ventilation Rates",
        url: "https://www.ashrae.org/technical-resources/ashrae-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Commercial HVAC",
    question: "What is the primary advantage of a VRF (Variable Refrigerant Flow) system over a conventional chilled water system for a mid-rise office building?",
    options: [
        "VRF systems can provide higher cooling capacities than chilled water systems",
        "VRF systems eliminate the need for any refrigerant piping",
        "VRF systems offer simultaneous heating and cooling with heat recovery between zones, and require no mechanical room for central plant equipment",
        "VRF systems have lower first costs than all other HVAC system types"
    ],
    correct: 2,
    explanation: "<strong>VRF systems with heat recovery</strong> can simultaneously provide heating to some zones and cooling to others by transferring rejected heat from cooling zones to heating zones. They also eliminate the need for a <strong>central mechanical room</strong>, boiler, cooling tower, and chilled/hot water piping. This makes them ideal for mid-rise buildings with diverse load profiles and limited mechanical room space.",
    evidence: [{
        quote: "VRF heat recovery systems provide <span class='evidence-highlight'>simultaneous heating and cooling by redistributing energy between zones</span>, achieving high efficiency and eliminating central plant requirements.",
        source: "ASHRAE",
        document: "ASHRAE Journal - VRF System Design Considerations",
        section: "System Comparison and Benefits",
        url: "https://www.ashrae.org/technical-resources/ashrae-journal"
    }]
}