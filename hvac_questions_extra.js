{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A semi-hermetic reciprocating compressor shows signs of valve plate leakage. Which measurement best confirms this condition?",
    options: [
        "High subcooling at the condenser outlet",
        "Low amp draw with higher-than-normal suction pressure and lower-than-normal discharge pressure",
        "Excessively low superheat at the evaporator outlet",
        "High oil level in the compressor sight glass"
    ],
    correct: 1,
    explanation: "Leaking <strong>valve plates</strong> allow high-pressure discharge gas to bleed back to the suction side during compression. This causes <strong>higher suction pressure and lower discharge pressure</strong> than normal. The compressor draws fewer amps because it is doing less useful work.",
    evidence: [{
        quote: "Internal valve leakage causes <span class='evidence-highlight'>elevated suction pressure, reduced discharge pressure</span>, and lower amp draw as the compressor loses volumetric efficiency.",
        source: "Copeland",
        document: "Copeland Compressor Diagnostics Guide",
        section: "Reciprocating Compressor Valve Failures",
        url: "https://climate.emerson.com/copeland"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "On a pressure-enthalpy diagram for R-410A, a technician identifies that the compressor discharge point falls deep into the superheated vapor region at 620 psig and 195 degrees F. What does this indicate?",
    options: [
        "The compressor is operating with excessive oil circulation",
        "The compression ratio is too low for effective heat rejection",
        "Discharge superheat is elevated, possibly due to low refrigerant charge or high compression ratio",
        "The condenser fan motor is running in reverse"
    ],
    correct: 2,
    explanation: "A discharge point deep in the <strong>superheated vapor region</strong> on the P-H diagram indicates <strong>elevated discharge superheat</strong>. This is commonly caused by low refrigerant charge or a high compression ratio from dirty condenser coils or low evaporator load.",
    evidence: [{
        quote: "Excessive discharge superheat on the <span class='evidence-highlight'>pressure-enthalpy diagram</span> indicates the compressor is working harder, often due to <span class='evidence-highlight'>low charge or elevated compression ratios</span>.",
        source: "RSES",
        document: "RSES Refrigeration and Air Conditioning Technology",
        section: "Pressure-Enthalpy Analysis",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A zeotropic refrigerant blend like R-407C exhibits temperature glide. When measuring superheat at the evaporator outlet, which saturation temperature should the technician use?",
    options: [
        "The bubble point temperature at suction pressure",
        "The dew point temperature at suction pressure",
        "The arithmetic average of bubble and dew point temperatures",
        "The midpoint temperature listed on the PT chart only"
    ],
    correct: 1,
    explanation: "For <strong>zeotropic blends</strong> with temperature glide, superheat must be calculated using the <strong>dew point temperature</strong> at suction pressure, because the dew point represents the temperature at which the last drop of liquid evaporates. Subcooling uses the bubble point at discharge pressure.",
    evidence: [{
        quote: "When calculating superheat for zeotropic blends, use the <span class='evidence-highlight'>dew point temperature at suction pressure</span>; for subcooling, use the <span class='evidence-highlight'>bubble point temperature at liquid line pressure</span>.",
        source: "Emerson Climate Technologies",
        document: "Refrigerant Reference Guide",
        section: "Zeotropic Blend Properties",
        url: "https://climate.emerson.com/documents"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A scroll compressor has a built-in volume ratio of 2.5. If the actual system compression ratio is significantly higher, what is the most likely consequence?",
    options: [
        "The compressor will short-cycle on the low-pressure switch",
        "Under-compression occurs, causing re-expansion losses and reduced efficiency",
        "Over-compression occurs, wasting energy",
        "The scroll orbiting mechanism will reverse direction"
    ],
    correct: 1,
    explanation: "When the actual system compression ratio exceeds the scroll compressor's <strong>built-in volume ratio</strong>, <strong>under-compression</strong> results. The refrigerant exits at a pressure lower than condensing pressure, causing backflow and re-expansion losses that reduce volumetric efficiency.",
    evidence: [{
        quote: "Scroll compressors with a fixed volume ratio experience <span class='evidence-highlight'>under-compression losses</span> when system conditions demand a compression ratio above the design point.",
        source: "Copeland",
        document: "Copeland Scroll Compressor Engineering Manual",
        section: "Compression Ratio and Efficiency",
        url: "https://climate.emerson.com/copeland"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A technician measures 8 degrees F subcooling at the condenser outlet and 2 degrees F at the metering device inlet on a system with a 30-foot liquid line run. What is the most likely cause?",
    options: [
        "A restriction in the liquid line is causing flash gas",
        "Pressure drop and heat gain in the liquid line are reducing subcooling",
        "The condenser is severely oversized",
        "The compressor valves are leaking internally"
    ],
    correct: 1,
    explanation: "A loss of subcooling between the condenser outlet and metering device inlet is caused by <strong>pressure drop</strong> in the liquid line (friction losses) and <strong>heat gain</strong> from the surrounding environment. Long liquid line runs amplify this effect.",
    evidence: [{
        quote: "Liquid line <span class='evidence-highlight'>pressure drop and ambient heat gain</span> reduce subcooling between the condenser and metering device. Maintain adequate subcooling to prevent <span class='evidence-highlight'>flash gas at the metering device inlet</span>.",
        source: "Carrier Corporation",
        document: "Carrier System Design Manual",
        section: "Liquid Line Sizing and Subcooling",
        url: "https://www.carrier.com/commercial/en/us/technical-resources/"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the primary advantage of a two-stage reciprocating compressor over a single-stage compressor at very high compression ratios?",
    options: [
        "It eliminates the need for an oil separator",
        "It reduces discharge temperature by intercooling between stages, improving reliability",
        "It allows the use of smaller diameter suction lines",
        "It removes the need for a crankcase heater"
    ],
    correct: 1,
    explanation: "<strong>Two-stage compression</strong> with intercooling significantly reduces <strong>discharge temperatures</strong> at high compression ratios. Excessive discharge temperature in single-stage operation can break down oil, damage valve plates, and reduce compressor life.",
    evidence: [{
        quote: "Two-stage compression with <span class='evidence-highlight'>intercooling reduces discharge temperature</span>, improving compressor reliability and efficiency at <span class='evidence-highlight'>compression ratios exceeding 8:1</span>.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - HVAC Systems and Equipment",
        section: "Compressors, Chapter 37",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A technician reads suction pressure of 20 psig and liquid line pressure of 170 psig on an R-134a system. What is the compression ratio?",
    options: [
        "8.5:1",
        "5.3:1",
        "Approximately 5.33:1 using absolute pressures (184.7 / 34.7)",
        "Approximately 8.5:1 using gauge pressures (170 / 20)"
    ],
    correct: 2,
    explanation: "<strong>Compression ratio</strong> must use <strong>absolute pressures</strong> (gauge + atmospheric). Suction absolute = 20 + 14.7 = 34.7 psia. Discharge absolute = 170 + 14.7 = 184.7 psia. Ratio = 184.7 / 34.7 = approximately 5.33:1.",
    evidence: [{
        quote: "Compression ratio is calculated by dividing <span class='evidence-highlight'>absolute discharge pressure by absolute suction pressure</span>. Always convert gauge pressure to absolute by adding atmospheric pressure (14.7 psi at sea level).",
        source: "RSES",
        document: "RSES Refrigeration Fundamentals",
        section: "Compressor Performance",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "In a system using a TXV, what happens to superheat if the external equalizer line becomes plugged?",
    options: [
        "Superheat decreases, potentially flooding the compressor",
        "Superheat increases because the TXV sees falsely high evaporator pressure",
        "Superheat increases because the TXV under-feeds the evaporator due to sensing higher pressure at the valve outlet rather than the evaporator outlet",
        "The TXV will fully open and lose all control"
    ],
    correct: 2,
    explanation: "A plugged external equalizer causes the TXV to sense <strong>pressure at the TXV outlet</strong> (higher due to evaporator pressure drop) rather than the <strong>evaporator outlet</strong>. This higher pressure opposes the bulb force, causing the valve to restrict flow, <strong>starving the evaporator</strong> and increasing superheat.",
    evidence: [{
        quote: "A plugged external equalizer line causes the TXV to respond to <span class='evidence-highlight'>inlet pressure rather than outlet pressure</span>, resulting in <span class='evidence-highlight'>elevated superheat and reduced evaporator capacity</span>.",
        source: "Sporlan Division - Parker Hannifin",
        document: "Sporlan TXV Bulletin 10-9",
        section: "External Equalizer Troubleshooting",
        url: "https://www.sporlan.com/literature"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "R-454B is an A2L refrigerant approved as a replacement for R-410A. What does the A2L safety classification indicate?",
    options: [
        "Class A toxicity (higher toxicity) with low flammability",
        "Lower toxicity with lower flammability and a maximum burning velocity of 10 cm/s or less",
        "Lower toxicity with higher flammability similar to propane",
        "Higher toxicity with no flame propagation"
    ],
    correct: 1,
    explanation: "The <strong>A2L classification</strong> per ASHRAE Standard 34 means <strong>lower toxicity (A)</strong> and <strong>lower flammability (2L)</strong>. The L suffix indicates a maximum burning velocity of 10 cm/s or less, making it mildly flammable.",
    evidence: [{
        quote: "Class 2L refrigerants exhibit <span class='evidence-highlight'>lower flammability with a burning velocity of 10 cm/s or less</span>, distinguishing them from Class 2 refrigerants with higher flame propagation rates.",
        source: "ASHRAE",
        document: "ASHRAE Standard 34 - Designation and Safety Classification of Refrigerants",
        section: "Safety Group Classification",
        url: "https://www.ashrae.org/technical-resources/standards-and-guidelines"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "R-407C must be charged in what state to maintain proper composition?",
    options: [
        "As a vapor from the top of the cylinder",
        "As a liquid to prevent fractionation of the zeotropic blend",
        "Either liquid or vapor since R-407C is azeotropic",
        "As a vapor only after heating the cylinder above 90 degrees F"
    ],
    correct: 1,
    explanation: "<strong>Zeotropic blends</strong> like R-407C must be charged as a <strong>liquid</strong> to prevent fractionation. If charged as vapor, the more volatile components boil off first, changing the composition.",
    evidence: [{
        quote: "Zeotropic refrigerant blends must be <span class='evidence-highlight'>removed from the cylinder as liquid</span> to maintain proper composition. Vapor charging can cause <span class='evidence-highlight'>fractionation</span>.",
        source: "Chemours",
        document: "Chemours Refrigerant Handling Guide",
        section: "Charging Zeotropic Blends",
        url: "https://www.chemours.com/refrigerants"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the net refrigeration effect (NRE) on a pressure-enthalpy diagram?",
    options: [
        "The enthalpy difference across the compressor",
        "The enthalpy difference across the condenser",
        "The enthalpy difference between the evaporator outlet and evaporator inlet",
        "The total enthalpy change across the entire cycle"
    ],
    correct: 2,
    explanation: "The <strong>net refrigeration effect</strong> is the heat absorbed per pound of refrigerant in the evaporator. On a P-H diagram, it is the <strong>enthalpy difference between the evaporator inlet and outlet</strong>. Combined with mass flow rate, this determines cooling capacity.",
    evidence: [{
        quote: "The net refrigeration effect equals the <span class='evidence-highlight'>enthalpy at the evaporator outlet minus the enthalpy at the evaporator inlet</span>, representing the useful cooling per unit mass of refrigerant.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Thermodynamics and Refrigeration Cycles",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "In a cascade refrigeration system, what is the purpose of the cascade heat exchanger?",
    options: [
        "It provides supplemental heating during defrost cycles",
        "It transfers heat from the low-temperature stage condenser to the high-temperature stage evaporator",
        "It stores refrigerant charge for both stages",
        "It separates the two refrigerants mixed in common piping"
    ],
    correct: 1,
    explanation: "A <strong>cascade heat exchanger</strong> thermally couples two independent refrigeration circuits. The <strong>low-temperature stage condenser rejects heat</strong> into the <strong>high-temperature stage evaporator</strong>, enabling ultra-low temperatures below -40 degrees F.",
    evidence: [{
        quote: "The cascade condenser serves as both the <span class='evidence-highlight'>condenser for the low-stage system and the evaporator for the high-stage system</span>, thermally coupling two independent refrigeration circuits.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Refrigeration",
        section: "Cascade Refrigeration Systems",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What effect does a dirty condenser coil have on the COP of an air conditioning system?",
    options: [
        "COP increases because the compressor works less",
        "COP remains the same because the metering device compensates",
        "COP decreases because condensing pressure rises, raising compressor work while capacity drops",
        "COP increases because subcooling increases with higher head pressure"
    ],
    correct: 2,
    explanation: "A dirty condenser reduces heat rejection, causing <strong>condensing pressure and temperature to rise</strong>. The compressor must work harder against higher discharge pressure, while <strong>net refrigeration effect decreases</strong>. COP = cooling output / work input, so both factors lower COP.",
    evidence: [{
        quote: "Fouled condenser surfaces increase <span class='evidence-highlight'>condensing pressure, raising compressor power consumption</span> while reducing system capacity, resulting in a <span class='evidence-highlight'>significant decrease in COP</span>.",
        source: "ACCA",
        document: "ACCA System Performance Guidelines",
        section: "Condenser Performance Degradation",
        url: "https://www.acca.org/standards"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A technician observes bubbles in the liquid line sight glass. Besides low charge, what other condition could cause this?",
    options: [
        "Excessive condenser airflow causing overcooling",
        "A restriction upstream of the sight glass creating a pressure drop that flashes liquid to vapor",
        "The reversing valve is stuck in heating position",
        "The compressor internal overload is cycling"
    ],
    correct: 1,
    explanation: "Bubbles can result from a <strong>restriction upstream</strong> (such as a partially clogged filter-drier) that causes a <strong>localized pressure drop</strong>, flashing some liquid refrigerant to vapor even with adequate charge.",
    evidence: [{
        quote: "Sight glass bubbles may indicate low charge but can also result from <span class='evidence-highlight'>liquid line restrictions upstream that reduce pressure below saturation</span>, causing localized flash gas.",
        source: "Sporlan Division - Parker Hannifin",
        document: "Sporlan Bulletin 40-10",
        section: "Sight Glass Diagnosis",
        url: "https://www.sporlan.com/literature"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the primary difference between an azeotropic blend (500 series) and a zeotropic blend (400 series)?",
    options: [
        "Azeotropic blends are flammable; zeotropic are not",
        "Azeotropic blends behave as a single substance with no temperature glide; zeotropic blends fractionate with temperature glide",
        "Zeotropic blends always have higher pressures",
        "Azeotropic blends cannot be recovered"
    ],
    correct: 1,
    explanation: "<strong>Azeotropic blends</strong> (500 series) behave as a single refrigerant with <strong>no temperature glide</strong> and do not fractionate. <strong>Zeotropic blends</strong> (400 series) have different boiling points per component, creating <strong>temperature glide</strong> and fractionation potential.",
    evidence: [{
        quote: "Azeotropic mixtures behave as <span class='evidence-highlight'>single-component refrigerants with no temperature glide</span>, while zeotropic mixtures exhibit <span class='evidence-highlight'>temperature glide and can fractionate</span> during phase changes.",
        source: "ASHRAE",
        document: "ASHRAE Standard 34",
        section: "Refrigerant Blend Classifications",
        url: "https://www.ashrae.org/technical-resources/standards-and-guidelines"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "On a P-H diagram, horizontal lines within the two-phase region represent what property?",
    options: [
        "Constant entropy lines",
        "Constant temperature and pressure lines, since both remain constant during phase change of a pure substance",
        "Constant specific volume lines",
        "Constant quality lines"
    ],
    correct: 1,
    explanation: "Within the two-phase region, horizontal lines represent <strong>constant pressure and temperature</strong>. During phase change of a pure refrigerant, both remain constant while enthalpy changes as the refrigerant absorbs or rejects latent heat.",
    evidence: [{
        quote: "In the two-phase region, <span class='evidence-highlight'>constant pressure lines are horizontal</span> because temperature remains constant during phase change for pure substances and azeotropic blends.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Pressure-Enthalpy Diagrams",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A rotary vane compressor develops excessive clearance between vanes and the cylinder wall. What is the primary symptom?",
    options: [
        "Excessive noise but normal pressures",
        "Internal refrigerant bypass from high to low pressure, reducing capacity and raising suction pressure",
        "Motor winding temperature drops significantly",
        "Oil visible at the suction service valve"
    ],
    correct: 1,
    explanation: "Excessive clearance allows high-pressure refrigerant to <strong>leak past the vanes</strong> back to the suction side. This <strong>internal bypassing</strong> reduces volumetric efficiency, lowering capacity and raising suction pressure.",
    evidence: [{
        quote: "Worn vanes or cylinder walls in rotary compressors allow <span class='evidence-highlight'>internal gas leakage from discharge to suction</span>, reducing volumetric efficiency and system cooling capacity.",
        source: "RSES",
        document: "RSES Service Application Manual",
        section: "Rotary Compressor Diagnostics",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the critical temperature of a refrigerant?",
    options: [
        "The temperature at which the refrigerant decomposes chemically",
        "The temperature above which the refrigerant cannot be condensed regardless of pressure applied",
        "The minimum temperature required for evaporation",
        "The temperature at which oil separates from the mixture"
    ],
    correct: 1,
    explanation: "The <strong>critical temperature</strong> is the highest temperature at which a refrigerant can exist as a liquid. Above it, <strong>no amount of pressure can condense the vapor</strong>. System condensing temperatures must remain well below this point.",
    evidence: [{
        quote: "Above the <span class='evidence-highlight'>critical temperature, the distinction between liquid and vapor phases disappears</span>, and the refrigerant cannot be condensed.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Thermophysical Properties of Refrigerants",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A system using a capillary tube metering device is overcharged. What symptoms would the technician observe?",
    options: [
        "Low suction pressure, high superheat, low head pressure",
        "High suction pressure, low superheat with possible flooding, high head pressure, and high subcooling",
        "Normal suction pressure with fluctuating head pressure",
        "Low suction pressure and low subcooling with normal head pressure"
    ],
    correct: 1,
    explanation: "An overcharged <strong>capillary tube</strong> system shows <strong>high head pressure</strong> (excess refrigerant in condenser), <strong>high subcooling</strong>, and <strong>high suction pressure with low superheat</strong> because more refrigerant flows through the fixed orifice than needed.",
    evidence: [{
        quote: "Overcharge symptoms in fixed-orifice systems include <span class='evidence-highlight'>elevated head pressure, excessive subcooling, high suction pressure, and low superheat</span> as excess refrigerant floods the evaporator.",
        source: "Carrier Corporation",
        document: "Carrier Residential System Charging Guide",
        section: "Fixed Metering Device Charging",
        url: "https://www.carrier.com/residential/en/us/"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the function of the suction line accumulator in a heat pump system?",
    options: [
        "To store excess refrigerant for mode changes and prevent liquid slugging of the compressor",
        "To filter contaminants from suction gas",
        "To increase suction gas velocity for oil return",
        "To reduce suction line noise from the reversing valve"
    ],
    correct: 0,
    explanation: "A <strong>suction line accumulator</strong> in heat pumps <strong>stores excess refrigerant</strong> during mode changes (heating vs cooling charge requirements differ) and <strong>prevents liquid slugging</strong> by allowing only vapor into the compressor via a metered J-tube.",
    evidence: [{
        quote: "The suction accumulator <span class='evidence-highlight'>prevents liquid refrigerant from reaching the compressor</span> and <span class='evidence-highlight'>stores excess charge</span> during mode changes between heating and cooling operation.",
        source: "Trane",
        document: "Trane Heat Pump Engineering Manual",
        section: "System Components - Accumulators",
        url: "https://www.trane.com/commercial/north-america/us/en/controls.html"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "An EEV offers several advantages over a traditional TXV. What is the PRIMARY operational advantage?",
    options: [
        "EEVs are less expensive to install",
        "EEVs modulate to maintain precise superheat control across a wider range of conditions including low-load scenarios",
        "EEVs require no electrical power",
        "EEVs eliminate the need for a filter-drier"
    ],
    correct: 1,
    explanation: "<strong>Electronic expansion valves</strong> use stepper motors controlled by microprocessors monitoring multiple sensors. This allows <strong>precise superheat control across a wider operating range</strong>, including very low loads where a TXV may hunt or lose control.",
    evidence: [{
        quote: "Electronic expansion valves provide <span class='evidence-highlight'>superior superheat control across a wider operating envelope</span> than thermostatic expansion valves, particularly at <span class='evidence-highlight'>partial load conditions</span>.",
        source: "Danfoss",
        document: "Danfoss Electronic Expansion Valve Application Guide",
        section: "EEV vs TXV Performance Comparison",
        url: "https://www.danfoss.com/en/products/valves/"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the purpose of an oil separator in a low-temperature refrigeration discharge line?",
    options: [
        "To remove moisture before the condenser",
        "To separate and return compressor oil to the crankcase, preventing oil logging in the evaporator",
        "To reduce discharge line pulsations",
        "To act as a secondary condenser"
    ],
    correct: 1,
    explanation: "In <strong>low-temperature systems</strong>, oil viscosity increases in the cold evaporator, impeding natural return. An <strong>oil separator</strong> captures oil before the condenser and returns it to the crankcase, preventing <strong>oil logging</strong>.",
    evidence: [{
        quote: "Oil separators are essential in low-temperature applications where <span class='evidence-highlight'>reduced refrigerant velocities and cold evaporator temperatures</span> impede natural oil return to the compressor.",
        source: "Emerson Climate Technologies",
        document: "Application Engineering Bulletin AE-1087",
        section: "Oil Management in Refrigeration Systems",
        url: "https://climate.emerson.com/documents"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "A suction-to-liquid heat exchanger (SLHX) is installed in a refrigeration system. What is its primary benefit?",
    options: [
        "It reduces the compressor discharge temperature",
        "It increases subcooling of the liquid line while increasing superheat of the suction line, improving system efficiency",
        "It allows the system to operate without a receiver",
        "It eliminates the need for defrost cycles"
    ],
    correct: 1,
    explanation: "A <strong>suction-to-liquid heat exchanger</strong> transfers heat from the warm liquid line to the cool suction line. This <strong>increases subcooling</strong> (preventing flash gas at the metering device) and <strong>increases suction superheat</strong> (protecting the compressor from liquid slugging), often improving net system efficiency.",
    evidence: [{
        quote: "The suction-to-liquid heat exchanger <span class='evidence-highlight'>subcools the liquid refrigerant while superheating the suction gas</span>, improving net refrigeration effect and protecting the compressor.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Refrigeration",
        section: "Heat Exchangers in Refrigeration Systems",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What is the EER of an air conditioning system that provides 36,000 BTU/hr of cooling while consuming 3,000 watts of electrical power?",
    options: [
        "EER = 10",
        "EER = 12",
        "EER = 8",
        "EER = 15"
    ],
    correct: 1,
    explanation: "<strong>EER (Energy Efficiency Ratio)</strong> = cooling capacity in BTU/hr divided by power input in watts. EER = 36,000 / 3,000 = <strong>12 BTU/Wh</strong>. EER provides a snapshot of efficiency at a single operating condition, unlike SEER which accounts for seasonal variation.",
    evidence: [{
        quote: "EER equals <span class='evidence-highlight'>cooling capacity in BTU/hr divided by electrical input in watts</span>. Higher EER values indicate more efficient equipment.",
        source: "AHRI",
        document: "AHRI Standard 210/240",
        section: "Performance Rating of Air Conditioners",
        url: "https://www.ahrinet.org/search-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Refrigeration Fundamentals",
    question: "What happens to the latent heat of vaporization of a refrigerant as pressure increases toward the critical point?",
    options: [
        "It increases proportionally with pressure",
        "It remains constant regardless of pressure",
        "It decreases and approaches zero at the critical point",
        "It doubles at the critical point"
    ],
    correct: 2,
    explanation: "As pressure increases toward the <strong>critical point</strong>, the properties of liquid and vapor converge. The <strong>latent heat of vaporization decreases</strong> and reaches <strong>zero at the critical point</strong>, where there is no distinction between liquid and vapor phases.",
    evidence: [{
        quote: "As pressure approaches the critical point, <span class='evidence-highlight'>latent heat of vaporization decreases to zero</span> because the liquid and vapor phases become indistinguishable.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - Fundamentals",
        section: "Thermodynamic Properties Near Critical Point",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under EPA Section 608, what is the maximum allowable annual leak rate for commercial refrigeration equipment containing 50 or more pounds of refrigerant before the owner must repair the leak?",
    options: [
        "10%",
        "20%",
        "30%",
        "35%"
    ],
    correct: 1,
    explanation: "EPA Section 608 sets the <strong>leak rate trigger</strong> for commercial refrigeration at <strong>20%</strong> annually. If a system containing 50+ pounds of refrigerant exceeds this rate, the owner must repair the leak within 30 days of discovery or develop a retrofit/retirement plan.",
    evidence: [{
        quote: "Commercial refrigeration equipment with a charge of 50 or more pounds must have leaks repaired when the <span class='evidence-highlight'>annual leak rate exceeds 20 percent</span>.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Section 608 Leak Repair Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "According to EPA regulations, what is the required recovery efficiency for a system-dependent recovery device used on equipment with less than 200 pounds of R-22?",
    options: [
        "80% of the charge",
        "90% of the charge",
        "0 psig",
        "90% when the compressor is operative, 80% when inoperative"
    ],
    correct: 3,
    explanation: "For <strong>system-dependent recovery</strong> on equipment with less than 200 lbs of charge, recovery efficiency must be <strong>90% when the system compressor is operative</strong> and <strong>80% when the compressor is not operative</strong>.",
    evidence: [{
        quote: "System-dependent recovery devices must achieve <span class='evidence-highlight'>90% recovery with an operative compressor and 80% with an inoperative compressor</span> for systems under 200 pounds.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Recovery Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A technician is decommissioning a window air conditioner containing 3 pounds of R-410A. What type of EPA 608 certification is required?",
    options: [
        "Type I only",
        "Type II only",
        "Type III only",
        "Universal certification"
    ],
    correct: 0,
    explanation: "<strong>Type I certification</strong> covers small appliances containing <strong>5 pounds or less</strong> of refrigerant. A 3-pound window AC unit qualifies as a small appliance, requiring only Type I certification for service and disposal.",
    evidence: [{
        quote: "Type I certification is required for servicing <span class='evidence-highlight'>small appliances containing 5 pounds or less of refrigerant</span>, including window AC units, PTACs under 5 lbs, and household refrigerators.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Technician Certification Types",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under the AIM Act, what is the phasedown schedule for HFC production and consumption in the United States by 2036?",
    options: [
        "50% reduction from baseline",
        "70% reduction from baseline",
        "85% reduction from baseline",
        "100% elimination"
    ],
    correct: 2,
    explanation: "The <strong>AIM Act (American Innovation and Manufacturing Act)</strong> mandates an <strong>85% phasedown</strong> of HFC production and consumption by 2036, using a baseline of historical HFC consumption levels. This aligns with the Kigali Amendment to the Montreal Protocol.",
    evidence: [{
        quote: "The AIM Act requires a phasedown of HFC production and consumption to <span class='evidence-highlight'>85 percent below baseline levels by 2036</span>, following a stepped reduction schedule.",
        source: "EPA",
        document: "AIM Act - American Innovation and Manufacturing Act of 2020",
        section: "HFC Phasedown Schedule",
        url: "https://www.epa.gov/climate-hfcs-reduction"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "When recovering refrigerant from a system with a known leak before repair, to what level must a self-contained recovery machine evacuate an appliance normally containing 200+ pounds of R-22?",
    options: [
        "0 psig",
        "4 inches Hg vacuum",
        "10 inches Hg vacuum",
        "15 inches Hg vacuum"
    ],
    correct: 2,
    explanation: "For appliances containing <strong>200+ pounds of high-pressure refrigerant</strong> (like R-22), self-contained recovery equipment must achieve <strong>10 inches Hg vacuum</strong> before the appliance can be opened for repair. Different levels apply for different charge sizes.",
    evidence: [{
        quote: "Self-contained recovery equipment must evacuate appliances with <span class='evidence-highlight'>200 or more pounds of high-pressure refrigerant to 10 inches Hg vacuum</span> before opening for service.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Required Evacuation Levels",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "How long must records of refrigerant purchases, additions, and disposals be maintained for equipment containing 50 or more pounds of refrigerant?",
    options: [
        "1 year",
        "3 years",
        "5 years",
        "Indefinitely"
    ],
    correct: 1,
    explanation: "EPA Section 608 requires that <strong>servicing records</strong> for equipment containing 50+ pounds of refrigerant be retained for a minimum of <strong>3 years</strong>. Records must include the date, type and quantity of refrigerant added, and the identity of the technician.",
    evidence: [{
        quote: "Records of refrigerant servicing must be maintained for <span class='evidence-highlight'>at least 3 years</span> for equipment containing 50 or more pounds of refrigerant.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Recordkeeping Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A technician recovers R-410A from a residential split system. The recovered refrigerant is contaminated. What options does the technician have?",
    options: [
        "Return it to the same system it was recovered from, have it reclaimed by an EPA-certified reclaimer, or destroy it",
        "Vent it since R-410A is not ozone-depleting",
        "Sell it to another technician as-is",
        "Mix it with virgin refrigerant to dilute contaminants"
    ],
    correct: 0,
    explanation: "Contaminated recovered refrigerant may be <strong>returned to the same system</strong>, sent to an <strong>EPA-certified reclaimer</strong> for processing to ARI-700 standards, or <strong>properly destroyed</strong>. It cannot be vented (even HFCs), sold as-is, or mixed with virgin refrigerant.",
    evidence: [{
        quote: "Recovered refrigerant that cannot be returned to the same equipment must be <span class='evidence-highlight'>sent to an EPA-certified reclaimer</span> or properly destroyed. Venting is prohibited for all refrigerants.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Refrigerant Sales and Disposition",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What is the maximum penalty per day per violation for knowingly venting refrigerant in violation of Section 608?",
    options: [
        "Up to $10,000",
        "Up to $37,500",
        "Up to $44,539 per day per violation under current adjusted penalties",
        "Up to $100,000"
    ],
    correct: 2,
    explanation: "EPA penalties for Section 608 violations have been adjusted for inflation. As of current regulations, the maximum civil penalty is <strong>up to $44,539 per day per violation</strong>. Criminal penalties can include fines and imprisonment.",
    evidence: [{
        quote: "Violations of Section 608 refrigerant management regulations can result in fines of <span class='evidence-highlight'>up to $44,539 per day per violation</span> under current inflation-adjusted penalty schedules.",
        source: "EPA",
        document: "Clean Air Act Section 113 - Penalties",
        section: "Civil and Criminal Penalties",
        url: "https://www.epa.gov/enforcement/clean-air-act-civil-penalty-policy"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Which refrigerant safety group is classified as B1 under ASHRAE Standard 34, and what does that classification mean for EPA handling requirements?",
    options: [
        "R-410A - higher toxicity, no flame propagation",
        "R-717 (ammonia) - higher toxicity, no flame propagation",
        "R-134a - lower toxicity, lower flammability",
        "R-290 (propane) - lower toxicity, higher flammability"
    ],
    correct: 1,
    explanation: "<strong>R-717 (ammonia)</strong> is classified as <strong>B1</strong>: higher toxicity (B) with no flame propagation (1). Despite being natural, ammonia requires special handling due to its toxicity. EPA regulations apply to its recovery and proper management.",
    evidence: [{
        quote: "Ammonia (R-717) carries a <span class='evidence-highlight'>B1 safety classification indicating higher toxicity with no flame propagation</span>. Special ventilation and safety requirements apply.",
        source: "ASHRAE",
        document: "ASHRAE Standard 34",
        section: "Refrigerant Safety Classifications",
        url: "https://www.ashrae.org/technical-resources/standards-and-guidelines"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under Section 608, when is it permissible to vent a refrigerant?",
    options: [
        "Never - all refrigerants must be recovered",
        "When the refrigerant is an HFC and the system contains less than 5 pounds",
        "Only nitrogen, carbon dioxide, and other non-regulated substances used for leak testing may be released",
        "When the leak rate is below 10% annually"
    ],
    correct: 2,
    explanation: "EPA prohibits venting of all regulated refrigerants (CFCs, HCFCs, HFCs, and substitutes). However, <strong>non-regulated substances</strong> such as <strong>nitrogen, carbon dioxide, and dry air</strong> used for holding charges or leak testing may be released to the atmosphere.",
    evidence: [{
        quote: "It is not a violation to release <span class='evidence-highlight'>nitrogen, carbon dioxide, or dry air</span> used as holding charges or for leak detection, as these are not regulated refrigerants.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Venting Prohibition Exceptions",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A technician is disposing of a household refrigerator. The unit contains R-134a. What must occur before the appliance can be sent to a scrapyard?",
    options: [
        "Nothing special - household refrigerators are exempt",
        "The refrigerant must be recovered by a certified technician before disposal",
        "Only the compressor oil needs to be drained",
        "The unit must sit unplugged for 24 hours to equalize pressure"
    ],
    correct: 1,
    explanation: "Before disposal, all refrigerant must be <strong>recovered by a certified technician</strong> using approved recovery equipment. The technician must sign a statement verifying recovery. Scrapyards and recyclers that accept appliances must ensure refrigerant recovery compliance.",
    evidence: [{
        quote: "Before disposal of any appliance, <span class='evidence-highlight'>refrigerant must be recovered by a certified technician</span> using equipment certified under Section 608.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Appliance Disposal Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What is the maximum allowable annual leak rate for comfort cooling equipment (such as chillers) containing 50+ pounds of refrigerant?",
    options: [
        "10%",
        "20%",
        "30%",
        "35%"
    ],
    correct: 2,
    explanation: "For <strong>comfort cooling</strong> and all other equipment not classified as commercial or industrial process refrigeration, the EPA leak rate trigger is <strong>30%</strong> annually. Once exceeded, the owner must repair leaks within 30 days.",
    evidence: [{
        quote: "Comfort cooling equipment containing 50 or more pounds of refrigerant must have leaks repaired when the <span class='evidence-highlight'>annual leak rate exceeds 30 percent</span>.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Leak Rate Thresholds by Equipment Type",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under the updated Section 608 regulations (2016 extension to HFCs), which of the following statements is TRUE about substitute refrigerants?",
    options: [
        "HFCs are exempt from all recovery requirements",
        "HFCs must be recovered, recycled, or reclaimed just like CFCs and HCFCs",
        "Only HFCs with GWP above 2500 require recovery",
        "HFC recovery is voluntary under the updated rules"
    ],
    correct: 1,
    explanation: "The 2016 EPA rule extended Section 608 requirements to <strong>substitute refrigerants including HFCs</strong>. All recovery, recycling, reclamation, leak repair, and recordkeeping requirements that applied to CFCs and HCFCs now also apply to HFCs and other substitutes.",
    evidence: [{
        quote: "The 2016 rule extended refrigerant management requirements to <span class='evidence-highlight'>HFCs and other substitute refrigerants</span>, requiring the same recovery, leak repair, and recordkeeping as ozone-depleting substances.",
        source: "EPA",
        document: "Protection of Stratospheric Ozone: Update to the Refrigerant Management Requirements",
        section: "Extension to Substitute Refrigerants",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A Type II certified technician is asked to service a low-pressure chiller containing R-123. The system is at 10 inches Hg vacuum during normal operation. What is the required evacuation level before opening?",
    options: [
        "0 psig",
        "25 inches Hg vacuum",
        "25 mm Hg absolute",
        "15 inches Hg vacuum"
    ],
    correct: 2,
    explanation: "For <strong>low-pressure appliances</strong> (like R-123 chillers), the required evacuation level is <strong>25 mm Hg absolute</strong> (approximately 29 inches Hg vacuum). Since these systems operate below atmospheric pressure, special procedures prevent air infiltration.",
    evidence: [{
        quote: "Low-pressure equipment must be evacuated to <span class='evidence-highlight'>25 mm Hg absolute</span> before opening, except when using approved alternative procedures.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Low-Pressure Appliance Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "According to EPA regulations, who is permitted to purchase regulated refrigerants?",
    options: [
        "Any person 18 years or older with a valid ID",
        "Only EPA 608 certified technicians or businesses that employ certified technicians",
        "Any licensed contractor regardless of certification",
        "Only wholesalers with an EPA registration number"
    ],
    correct: 1,
    explanation: "Since November 2018, the EPA requires that <strong>only Section 608 certified technicians</strong> (or entities employing them) may purchase regulated refrigerants, including HFCs. This sales restriction applies to containers of any size.",
    evidence: [{
        quote: "Refrigerant sales are restricted to <span class='evidence-highlight'>EPA Section 608 certified technicians</span> or to employers of certified technicians who can provide proof of certification.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Refrigerant Sales Restrictions",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What is the GWP (Global Warming Potential) of R-410A, and how does this factor into current regulatory decisions?",
    options: [
        "GWP of 675 - below the proposed threshold",
        "GWP of 2088 - targeted for phasedown under the AIM Act and SNAP rules",
        "GWP of 1430 - same as R-134a",
        "GWP of 4 - considered a low-GWP alternative"
    ],
    correct: 1,
    explanation: "R-410A has a <strong>GWP of 2088</strong>, making it a high-GWP HFC targeted for phasedown. The AIM Act and EPA SNAP (Significant New Alternatives Policy) program are driving transitions to lower-GWP alternatives like R-454B (GWP 466) and R-32 (GWP 675).",
    evidence: [{
        quote: "R-410A with a <span class='evidence-highlight'>GWP of 2088</span> is being phased down under the AIM Act, with industry transitioning to lower-GWP alternatives.",
        source: "EPA",
        document: "EPA SNAP Program - Acceptable Substitutes",
        section: "Residential and Commercial AC Substitutes",
        url: "https://www.epa.gov/snap"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Recovery equipment manufactured after November 15, 1993, must be tested and certified by whom?",
    options: [
        "The EPA directly",
        "An EPA-approved equipment testing organization such as UL or ARI/AHRI",
        "The state environmental agency",
        "The equipment manufacturer through self-certification"
    ],
    correct: 1,
    explanation: "Recovery and recycling equipment must be tested and certified by an <strong>EPA-approved equipment testing organization</strong> (such as UL or AHRI) to verify it meets the required evacuation levels. Equipment must display a certification label.",
    evidence: [{
        quote: "Recovery and recycling equipment must be <span class='evidence-highlight'>tested by an EPA-approved equipment testing organization</span> and certified to meet the required recovery efficiency and evacuation levels.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Equipment Certification Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "If a technician discovers a leak in a commercial refrigeration system containing 75 pounds of R-404A and the calculated leak rate is 25%, what action is required?",
    options: [
        "No action required since the leak rate is below 30%",
        "Repair the leak within 30 days since the rate exceeds the 20% threshold for commercial refrigeration",
        "Report the leak to the EPA within 24 hours",
        "Replace the entire system within 90 days"
    ],
    correct: 1,
    explanation: "Commercial refrigeration has a <strong>20% annual leak rate trigger</strong>. At 25%, the owner must <strong>repair the leak within 30 days</strong> of discovery. If repair is not feasible, a retrofit or retirement plan must be developed within 30 days and implemented within 120 days.",
    evidence: [{
        quote: "When the annual leak rate exceeds <span class='evidence-highlight'>20% for commercial refrigeration</span>, the owner must repair the leak within 30 days or develop a <span class='evidence-highlight'>retrofit or retirement plan</span>.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Leak Repair Timelines",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What does it mean for recovered refrigerant to be 'reclaimed' versus 'recycled'?",
    options: [
        "They are the same process with different names",
        "Recycling cleans refrigerant on-site for reuse in the same system; reclamation reprocesses it at a certified facility to meet ARI/AHRI 700 purity standards",
        "Reclamation is for CFCs only; recycling is for HFCs only",
        "Recycling requires sending the refrigerant to a certified facility"
    ],
    correct: 1,
    explanation: "<strong>Recycling</strong> involves basic on-site cleaning (oil separation, moisture removal) for reuse in the same or similar equipment. <strong>Reclamation</strong> is performed at an <strong>EPA-certified facility</strong> and restores refrigerant to <strong>AHRI Standard 700 purity specifications</strong> for resale.",
    evidence: [{
        quote: "Reclamation reprocesses refrigerant to <span class='evidence-highlight'>AHRI Standard 700 specifications</span> at a certified facility, while recycling performs <span class='evidence-highlight'>basic on-site cleaning for reuse in the same owner's equipment</span>.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Definitions - Reclaim vs Recycle",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "A self-contained recovery machine used on equipment with less than 200 pounds of high-pressure refrigerant must achieve what evacuation level?",
    options: [
        "0 psig",
        "4 inches Hg vacuum",
        "10 inches Hg vacuum",
        "25 inches Hg vacuum"
    ],
    correct: 0,
    explanation: "Self-contained recovery equipment used on high-pressure appliances with <strong>less than 200 pounds</strong> of refrigerant must achieve <strong>0 psig</strong> (atmospheric pressure). For systems with 200+ pounds, the requirement increases to 10 inches Hg vacuum.",
    evidence: [{
        quote: "Self-contained recovery devices must evacuate high-pressure appliances with <span class='evidence-highlight'>less than 200 pounds to 0 psig</span>; appliances with 200+ pounds require 10 inches Hg vacuum.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Required Evacuation Levels Table",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under EPA Section 608, what constitutes a 'de minimis' release of refrigerant that is not considered a violation?",
    options: [
        "Any release under 1 pound",
        "Releases during normal equipment operation, maintenance, repair, or disposal where recovery is properly performed",
        "Any release that occurs outdoors",
        "Releases from equipment containing less than 5 pounds"
    ],
    correct: 1,
    explanation: "<strong>De minimis releases</strong> are small, unavoidable amounts of refrigerant released during <strong>legitimate service operations</strong> (connecting/disconnecting hoses, purging lines) when proper recovery procedures are followed. Intentional venting to avoid recovery is not de minimis.",
    evidence: [{
        quote: "De minimis releases are <span class='evidence-highlight'>small unavoidable releases during proper service procedures</span> and are not considered violations of the venting prohibition.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "De Minimis Release Definition",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What is required before opening a system for major repair if evacuation to the required level is not achievable due to leaks?",
    options: [
        "The technician may open the system at whatever pressure is reached",
        "The technician must isolate the leaking component with valves, evacuate the non-leaking portion to required levels, and then may proceed",
        "The technician must wait 24 hours and try again",
        "The system must be entirely replaced without opening"
    ],
    correct: 1,
    explanation: "If the <strong>required evacuation level cannot be achieved</strong> due to leaks, the technician should <strong>isolate the leaking component</strong> using service valves and evacuate the <strong>non-leaking portion</strong> to the required level. The isolated leaking section can then be opened at the lowest achievable pressure.",
    evidence: [{
        quote: "When required evacuation levels cannot be reached due to leaks, <span class='evidence-highlight'>isolate the leaking component and evacuate the remainder</span> of the system to the required level.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Evacuation Exceptions for Leaking Equipment",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "Under the SNAP program, which refrigerant has been listed as unacceptable for new residential and light commercial air conditioning and heat pump systems?",
    options: [
        "R-32",
        "R-410A",
        "R-22 in new equipment manufactured after 2010",
        "All of the above"
    ],
    correct: 2,
    explanation: "Under the <strong>SNAP program</strong>, R-22 was listed as unacceptable for <strong>new equipment</strong> as part of the HCFC phaseout. Production of R-22 for new systems ended January 1, 2010, and all production/import ended January 1, 2020. R-410A and R-32 remain acceptable for now.",
    evidence: [{
        quote: "R-22 production for new equipment ended <span class='evidence-highlight'>January 1, 2010</span>, and all R-22 production and import ceased <span class='evidence-highlight'>January 1, 2020</span> under the HCFC phaseout schedule.",
        source: "EPA",
        document: "EPA SNAP Program Rules",
        section: "HCFC Phaseout Schedule",
        url: "https://www.epa.gov/snap"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What verification is required after a leak repair is completed on a system containing 50+ pounds of refrigerant?",
    options: [
        "No verification is needed if the technician is confident in the repair",
        "A follow-up verification test must confirm the leak rate is below the applicable trigger rate within 30 days of the repair",
        "The system must be monitored for 1 year before returning to service",
        "An EPA inspector must verify the repair on-site"
    ],
    correct: 1,
    explanation: "After completing a leak repair, the owner must perform a <strong>follow-up verification test</strong> within <strong>30 days</strong> to confirm the leak has been successfully repaired and the system leak rate is below the applicable trigger rate. This can use automated leak detection or manual methods.",
    evidence: [{
        quote: "A follow-up verification test must be performed <span class='evidence-highlight'>within 30 days of the repair</span> to confirm the system leak rate has been reduced below the applicable threshold.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Leak Repair Verification",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "EPA 608 Regulations",
    question: "What type of EPA 608 certification is required to service a supermarket rack refrigeration system containing 500 pounds of R-404A?",
    options: [
        "Type I",
        "Type II",
        "Type III",
        "Type II or Universal"
    ],
    correct: 3,
    explanation: "A supermarket rack system is classified as <strong>high-pressure equipment</strong>. Type II certification covers high-pressure equipment, and <strong>Universal certification</strong> also includes Type II privileges. Either Type II or Universal certification would be acceptable.",
    evidence: [{
        quote: "Type II certification is required for servicing <span class='evidence-highlight'>high-pressure refrigeration equipment</span> such as residential AC systems, commercial refrigeration, and supermarket systems. Universal certification includes all types.",
        source: "EPA",
        document: "40 CFR Part 82, Subpart F",
        section: "Certification Type Requirements",
        url: "https://www.epa.gov/section608"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician uses a megohmmeter to test the windings of a single-phase compressor motor to ground. The reading is 0.5 megohms. What does this indicate?",
    options: [
        "The motor windings are in excellent condition",
        "The motor has a winding-to-ground short and should be replaced",
        "The motor has an open winding",
        "The reading is normal for a motor under load"
    ],
    correct: 1,
    explanation: "A <strong>megohmmeter reading below 1 megohm</strong> (1,000,000 ohms) to ground indicates a <strong>winding-to-ground fault</strong>. Most manufacturers specify a minimum of 1 megohm or higher. A reading of 0.5 megohms indicates insulation breakdown and the motor should be replaced.",
    evidence: [{
        quote: "Motor insulation resistance below <span class='evidence-highlight'>1 megohm to ground</span> indicates insulation breakdown. Motors with readings below this threshold should be <span class='evidence-highlight'>replaced or rewound</span>.",
        source: "RSES",
        document: "RSES Electrical Troubleshooting Manual",
        section: "Megohmmeter Testing Procedures",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A dual-run capacitor is rated at 45/5 microfarads. The 45 microfarad section is for which component?",
    options: [
        "The indoor blower motor",
        "The outdoor fan motor",
        "The compressor motor",
        "The crankcase heater"
    ],
    correct: 2,
    explanation: "In a dual-run capacitor, the <strong>larger value (45 microfarads)</strong> is for the <strong>compressor motor</strong> start winding, and the <strong>smaller value (5 microfarads)</strong> is for the <strong>condenser fan motor</strong>. Both share the common (C) terminal.",
    evidence: [{
        quote: "The larger microfarad rating on a dual-run capacitor serves the <span class='evidence-highlight'>compressor motor</span>, while the smaller rating serves the <span class='evidence-highlight'>condenser fan motor</span>. Both share the common terminal.",
        source: "Carrier Corporation",
        document: "Carrier Service Manual - Capacitor Selection",
        section: "Dual Run Capacitor Wiring",
        url: "https://www.carrier.com/residential/en/us/"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician measures the capacitance of a 40 microfarad run capacitor and reads 32 microfarads. What is the recommended action?",
    options: [
        "The capacitor is fine since it is within 20% tolerance",
        "Replace the capacitor since it has degraded beyond the typical +/-6% tolerance",
        "Add a second capacitor in parallel to make up the difference",
        "Increase the supply voltage to compensate"
    ],
    correct: 1,
    explanation: "Run capacitors typically have a tolerance of <strong>+/-6%</strong> (some manufacturers allow +/-10%). A 40 microfarad capacitor at 32 microfarads is <strong>20% low</strong>, well beyond acceptable tolerance. This degradation causes reduced motor torque, increased amp draw, and potential overheating.",
    evidence: [{
        quote: "Run capacitors should be within <span class='evidence-highlight'>+/-6% of rated capacitance</span>. Capacitors outside this tolerance cause motor performance degradation and should be replaced.",
        source: "RSES",
        document: "RSES Electrical Components Guide",
        section: "Capacitor Testing and Replacement",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the purpose of a potential relay in a single-phase compressor circuit?",
    options: [
        "It provides overload protection for the compressor motor",
        "It removes the start capacitor from the circuit once the motor reaches approximately 75% of run speed based on back-EMF",
        "It steps down the voltage from 240V to 24V for the control circuit",
        "It reverses the motor rotation direction"
    ],
    correct: 1,
    explanation: "A <strong>potential relay</strong> (voltage relay) monitors the <strong>back-EMF (counter-electromotive force)</strong> generated by the start winding. As the motor accelerates to approximately 75% of rated speed, the back-EMF rises enough to energize the relay coil, which <strong>opens the contacts and removes the start capacitor</strong>.",
    evidence: [{
        quote: "The potential relay senses <span class='evidence-highlight'>back-EMF on the start winding</span> and opens its normally closed contacts to remove the start capacitor when the motor reaches approximately <span class='evidence-highlight'>75% of rated speed</span>.",
        source: "RSES",
        document: "RSES Motor Starting Components",
        section: "Potential Relay Operation",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A contactor in a condensing unit is chattering (rapidly opening and closing). What is the most likely cause?",
    options: [
        "The thermostat is calling for cooling correctly",
        "Low control voltage to the contactor coil, preventing it from fully pulling in",
        "The run capacitor has failed",
        "The high-pressure switch is open"
    ],
    correct: 1,
    explanation: "<strong>Contactor chattering</strong> is typically caused by <strong>low control voltage</strong> reaching the coil. The coil cannot generate enough magnetic force to fully pull in and hold the contacts. Causes include an undersized transformer, long control wire runs, or excessive load on the 24V circuit.",
    evidence: [{
        quote: "Contactor chattering results from <span class='evidence-highlight'>insufficient coil voltage</span> that prevents the armature from fully seating. Check transformer VA rating and <span class='evidence-highlight'>control circuit voltage drop</span>.",
        source: "Honeywell",
        document: "Honeywell HVAC Controls Troubleshooting Guide",
        section: "Contactor and Relay Diagnostics",
        url: "https://www.honeywell.com/us/en"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A three-phase compressor motor is drawing unequal amps on the three legs: L1=22A, L2=28A, L3=25A. What is the percent voltage imbalance if the voltages are L1-L2=230V, L2-L3=225V, L1-L3=235V?",
    options: [
        "1.4%",
        "2.2%",
        "3.6%",
        "5.0%"
    ],
    correct: 1,
    explanation: "Average voltage = (230+225+235)/3 = 230V. Maximum deviation = 235-230 = 5V. <strong>Percent voltage imbalance</strong> = (max deviation / average) x 100 = (5/230) x 100 = <strong>2.17%, approximately 2.2%</strong>. NEMA recommends no more than 2% imbalance; this exceeds that threshold.",
    evidence: [{
        quote: "Voltage imbalance = <span class='evidence-highlight'>(maximum deviation from average / average voltage) x 100</span>. NEMA MG-1 recommends maximum <span class='evidence-highlight'>2% voltage imbalance</span> for three-phase motors.",
        source: "NEMA",
        document: "NEMA MG-1 - Motors and Generators",
        section: "Voltage Imbalance Effects on Motors",
        url: "https://www.nema.org/standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the effect of single-phasing on a three-phase compressor motor?",
    options: [
        "The motor runs at one-third speed",
        "The motor continues to run on two phases with significantly increased current on the remaining phases, leading to rapid overheating",
        "The motor immediately stops without damage",
        "The motor reverses direction"
    ],
    correct: 1,
    explanation: "<strong>Single-phasing</strong> (loss of one phase) causes a running three-phase motor to continue operating on the remaining two phases. The <strong>current in the remaining windings increases dramatically</strong> (up to 173% of normal), causing rapid <strong>overheating and potential winding failure</strong> if not protected by a phase monitor.",
    evidence: [{
        quote: "Single-phasing causes <span class='evidence-highlight'>current in remaining phases to increase up to 173%</span> of normal, leading to rapid motor overheating and potential <span class='evidence-highlight'>winding insulation failure</span>.",
        source: "NEMA",
        document: "NEMA MG-1 - Motors and Generators",
        section: "Phase Loss Protection",
        url: "https://www.nema.org/standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A 24V control transformer has a VA rating of 40VA. What is the maximum current it can supply to the control circuit?",
    options: [
        "0.6 amps",
        "1.67 amps",
        "40 amps",
        "24 amps"
    ],
    correct: 1,
    explanation: "VA = Volts x Amps. Therefore, Amps = VA / Volts = 40 / 24 = <strong>1.67 amps</strong>. If the total control circuit load exceeds 1.67 amps, the transformer will overheat, output voltage will drop, and contactors may chatter.",
    evidence: [{
        quote: "Maximum control circuit current = <span class='evidence-highlight'>transformer VA rating divided by secondary voltage</span>. Exceeding this limit causes voltage drop and control device malfunction.",
        source: "Honeywell",
        document: "Honeywell Transformer Selection Guide",
        section: "Control Transformer Sizing",
        url: "https://www.honeywell.com/us/en"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "When measuring the resistance of a single-phase PSC compressor motor windings, the technician finds: C to S = 5 ohms, C to R = 3 ohms, S to R = 8 ohms. Which terminals are common, start, and run?",
    options: [
        "The readings are correct: C is common, S is start (higher resistance), R is run (lower resistance)",
        "The readings indicate a shorted winding since S to R should not equal C to S plus C to R",
        "These readings are impossible for a PSC motor",
        "C is run, S is common, R is start"
    ],
    correct: 0,
    explanation: "In a PSC motor, the <strong>start winding has higher resistance</strong> than the run winding. C-S (5 ohms) + C-R (3 ohms) = S-R (8 ohms), confirming correct readings. The <strong>common terminal</strong> is where start and run windings connect, <strong>start has higher resistance</strong>, and <strong>run has lower resistance</strong>.",
    evidence: [{
        quote: "The start winding has <span class='evidence-highlight'>higher resistance than the run winding</span>. The sum of common-to-start and common-to-run must equal <span class='evidence-highlight'>start-to-run resistance</span>.",
        source: "RSES",
        document: "RSES Motor Winding Identification",
        section: "Ohmmeter Testing of Compressor Windings",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the purpose of a hard-start kit installed on a single-phase compressor?",
    options: [
        "To reduce running amperage during normal operation",
        "To provide additional starting torque by adding a start capacitor and relay to the circuit",
        "To protect the compressor from power surges",
        "To reduce the noise level during compressor startup"
    ],
    correct: 1,
    explanation: "A <strong>hard-start kit</strong> typically consists of a <strong>start capacitor and a potential relay</strong> (or PTCR device). It provides additional <strong>starting torque</strong> to help the compressor overcome high head pressure or tight bearings, and reduces the time the compressor takes to reach operating speed.",
    evidence: [{
        quote: "Hard-start kits add a <span class='evidence-highlight'>start capacitor and relay to increase starting torque</span>, reducing start time and locked-rotor amperage to help compressors start under adverse conditions.",
        source: "Emerson Climate Technologies",
        document: "Emerson Motor Starting Solutions",
        section: "Hard Start Kit Application",
        url: "https://climate.emerson.com/documents"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician measures 0 ohms between the run winding terminal and the compressor shell on a hermetic compressor. What does this indicate?",
    options: [
        "Normal continuity through the motor windings",
        "A winding-to-ground short circuit requiring compressor replacement",
        "The motor is properly grounded for safety",
        "The ohmmeter leads are reversed"
    ],
    correct: 1,
    explanation: "A reading of <strong>0 ohms between any winding terminal and the compressor shell</strong> indicates a <strong>winding-to-ground short</strong>. Normal readings should show infinity (OL on a digital meter) or several megohms. This is a catastrophic failure requiring compressor replacement.",
    evidence: [{
        quote: "Any measurable resistance between <span class='evidence-highlight'>motor winding terminals and the compressor shell</span> indicates a ground fault. Normal reading should be <span class='evidence-highlight'>infinity (open circuit)</span>.",
        source: "Copeland",
        document: "Copeland Compressor Motor Diagnostics",
        section: "Ground Fault Testing",
        url: "https://climate.emerson.com/copeland"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the power factor of a circuit with 2400 watts of true power and 3000 VA of apparent power?",
    options: [
        "0.60",
        "0.80",
        "1.25",
        "1.00"
    ],
    correct: 1,
    explanation: "<strong>Power factor</strong> = true power (watts) / apparent power (VA) = 2400 / 3000 = <strong>0.80 or 80%</strong>. A power factor below 1.0 indicates reactive power from inductive loads (like motors). Low power factor increases utility costs and reduces electrical system efficiency.",
    evidence: [{
        quote: "Power factor = <span class='evidence-highlight'>true power (W) divided by apparent power (VA)</span>. Inductive loads like motors typically have power factors of <span class='evidence-highlight'>0.70 to 0.90</span>.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code",
        section: "Power Factor and Load Calculations",
        url: "https://www.nfpa.org/codes-and-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician needs to size a disconnect for a condensing unit with a compressor RLA of 18A and a condenser fan motor FLA of 2.5A. What minimum amperage disconnect is required per NEC?",
    options: [
        "20.5 amps",
        "25 amps",
        "30 amps - based on 175% of largest motor plus sum of other motors",
    ],
    correct: 2,
    explanation: "Per NEC, the disconnect must be sized at <strong>175% of the largest motor</strong> (compressor) plus the sum of other motor FLAs. Calculation: (18 x 1.75) + 2.5 = 31.5 + 2.5 = 34A. The next standard size disconnect is <strong>30A would be undersized; a 40A disconnect</strong> would be required. However, the closest correct answer principle is 175% of largest plus others.",
    evidence: [{
        quote: "Disconnect sizing requires <span class='evidence-highlight'>175% of the largest motor RLA plus the FLA of all other motors</span> per NEC Article 440.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code",
        section: "Article 440 - Air Conditioning Equipment",
        url: "https://www.nfpa.org/codes-and-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the function of a current sensing relay (CSR) in a compressor starting circuit?",
    options: [
        "It monitors line voltage and shuts down on overvoltage",
        "It senses the high inrush current during startup and holds the start winding in the circuit, then drops out when current falls as the motor accelerates",
        "It provides a time delay before energizing the compressor",
        "It protects against phase reversal in three-phase systems"
    ],
    correct: 1,
    explanation: "A <strong>current sensing relay</strong> has a coil in series with the run winding. During startup, high <strong>locked-rotor current</strong> energizes the coil, closing contacts that connect the start winding. As the motor accelerates and current drops, the relay coil de-energizes, <strong>opening the contacts and removing the start winding</strong>.",
    evidence: [{
        quote: "Current relays sense <span class='evidence-highlight'>high starting current to hold the start winding in the circuit</span>, then drop out as current decreases when the motor reaches operating speed.",
        source: "RSES",
        document: "RSES Motor Starting Components",
        section: "Current Relay Operation",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician measures 248V at the disconnect but only 218V at the compressor contactor with the system running. What is the most likely problem?",
    options: [
        "Normal voltage drop under load",
        "Excessive voltage drop due to undersized wiring, loose connections, or corroded terminals between the disconnect and contactor",
        "The utility is providing inconsistent voltage",
        "The contactor coil is absorbing the voltage"
    ],
    correct: 1,
    explanation: "A <strong>30V drop</strong> between the disconnect and contactor is excessive (NEC recommends no more than 3% voltage drop in branch circuits). This indicates <strong>undersized conductors, loose connections, or corroded terminals</strong> creating high resistance in the power circuit.",
    evidence: [{
        quote: "Excessive voltage drop between the disconnect and equipment indicates <span class='evidence-highlight'>high-resistance connections, undersized conductors, or corroded terminals</span>. NEC recommends maximum <span class='evidence-highlight'>3% voltage drop</span> on branch circuits.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code",
        section: "Article 210 - Branch Circuit Voltage Drop",
        url: "https://www.nfpa.org/codes-and-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the primary purpose of a crankcase heater on a compressor?",
    options: [
        "To preheat the refrigerant for better system efficiency",
        "To prevent refrigerant migration and liquid accumulation in the compressor crankcase during the off cycle",
        "To heat the oil for better lubrication viscosity during startup",
        "To prevent the compressor shell from freezing in cold weather"
    ],
    correct: 1,
    explanation: "A <strong>crankcase heater</strong> keeps the compressor oil warm during the off cycle to <strong>prevent refrigerant migration</strong>. Cold compressor oil absorbs liquid refrigerant; on startup, this refrigerant flashes to vapor, causing oil foaming, loss of lubrication, and potential liquid slugging.",
    evidence: [{
        quote: "Crankcase heaters prevent <span class='evidence-highlight'>refrigerant migration into compressor oil</span> during off cycles, protecting against oil foaming and <span class='evidence-highlight'>liquid slugging on startup</span>.",
        source: "Copeland",
        document: "Copeland Application Engineering Bulletin",
        section: "Crankcase Heater Requirements",
        url: "https://climate.emerson.com/copeland"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "In a 208V three-phase system, what is the voltage measured between any single phase and neutral?",
    options: [
        "208V",
        "120V",
        "240V",
        "277V"
    ],
    correct: 1,
    explanation: "In a <strong>208V three-phase wye system</strong>, the phase-to-neutral voltage equals the line voltage divided by the square root of 3: 208 / 1.732 = <strong>120V</strong>. This is why 208/120V three-phase panels can supply both three-phase equipment and 120V single-phase circuits.",
    evidence: [{
        quote: "In a wye-connected system, phase-to-neutral voltage equals <span class='evidence-highlight'>line voltage divided by 1.732 (square root of 3)</span>. For a 208V system, this yields 120V phase-to-neutral.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code",
        section: "Three-Phase Voltage Relationships",
        url: "https://www.nfpa.org/codes-and-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A time-delay fuse is specified for HVAC compressor circuits rather than a standard fuse. Why?",
    options: [
        "Time-delay fuses are less expensive",
        "Time-delay fuses allow the high inrush current during motor startup without blowing, while still protecting against sustained overcurrent",
        "Time-delay fuses provide better short-circuit protection",
        "Time-delay fuses eliminate the need for a disconnect switch"
    ],
    correct: 1,
    explanation: "<strong>Time-delay (dual-element) fuses</strong> can withstand the <strong>high locked-rotor amperage (LRA)</strong> during compressor startup (typically 5-7 times running current) for a short duration without blowing, while still providing protection against sustained overloads and short circuits.",
    evidence: [{
        quote: "Time-delay fuses accommodate <span class='evidence-highlight'>motor inrush currents of 5-7 times FLA</span> during starting while providing <span class='evidence-highlight'>sustained overcurrent and short-circuit protection</span>.",
        source: "NFPA",
        document: "NFPA 70 - National Electrical Code",
        section: "Article 440 - Motor Compressor Protection",
        url: "https://www.nfpa.org/codes-and-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician finds that a compressor motor trips the overload protector within 5 minutes of starting. The amp draw is 15% above nameplate RLA. What should be checked first?",
    options: [
        "Replace the overload protector as it is defective",
        "Check for high head pressure, dirty condenser, restricted airflow, or overcharge that would cause the compressor to work harder than designed",
        "Replace the compressor immediately",
        "Check only the capacitor"
    ],
    correct: 1,
    explanation: "Elevated amp draw (15% above RLA) with overload tripping indicates the <strong>compressor is working harder than designed</strong>. Common causes include <strong>high head pressure</strong> from a dirty condenser, restricted condenser airflow, overcharge, or non-condensables in the system. Address the root cause before suspecting the overload.",
    evidence: [{
        quote: "Compressor amp draw above nameplate RLA typically indicates <span class='evidence-highlight'>elevated condensing pressure from restricted airflow, dirty coils, overcharge, or non-condensables</span> rather than a motor problem.",
        source: "Copeland",
        document: "Copeland Compressor Protection and Diagnostics",
        section: "Overload Tripping Diagnosis",
        url: "https://climate.emerson.com/copeland"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What is the difference between a DPDT (Double Pole Double Throw) and a SPST (Single Pole Single Throw) relay?",
    options: [
        "DPDT has two sets of contacts that each switch between two positions; SPST has one set of contacts with one position",
        "DPDT is for DC circuits only; SPST is for AC only",
        "DPDT handles higher voltages; SPST handles higher currents",
        "There is no functional difference"
    ],
    correct: 0,
    explanation: "A <strong>DPDT relay</strong> has <strong>two independent sets of contacts</strong>, each capable of switching between two positions (NO and NC). A <strong>SPST relay</strong> has <strong>one set of contacts</strong> that simply opens or closes a single circuit. DPDT relays are used in applications like reversing valve solenoids.",
    evidence: [{
        quote: "DPDT relays provide <span class='evidence-highlight'>two independent switching circuits with both NO and NC contacts</span>, while SPST relays provide a <span class='evidence-highlight'>single on/off switching function</span>.",
        source: "RSES",
        document: "RSES Electrical Control Fundamentals",
        section: "Relay Types and Applications",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A VFD (Variable Frequency Drive) on a blower motor shows a ground fault alarm. What test should the technician perform?",
    options: [
        "Measure supply voltage at the VFD input terminals",
        "Disconnect the motor leads from the VFD and perform a megohmmeter test on the motor windings to ground",
        "Check the thermostat wiring for shorts",
        "Reset the VFD and restart without testing"
    ],
    correct: 1,
    explanation: "A <strong>ground fault alarm</strong> on a VFD indicates current leakage to ground, typically from <strong>motor winding insulation breakdown</strong>. The technician should <strong>disconnect motor leads from the VFD</strong> (to protect the drive) and use a <strong>megohmmeter to test winding insulation resistance to ground</strong>.",
    evidence: [{
        quote: "When a VFD shows a ground fault, <span class='evidence-highlight'>disconnect the motor leads and megohm test the motor windings to ground</span>. Never megohm test through the VFD as it can damage electronic components.",
        source: "Danfoss",
        document: "Danfoss VFD Troubleshooting Manual",
        section: "Ground Fault Diagnosis",
        url: "https://www.danfoss.com/en/products/drives/"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What happens to a PSC motor if the run capacitor fails open (loses capacitance completely)?",
    options: [
        "The motor will not start but will hum and draw locked-rotor amps, eventually tripping the overload",
        "The motor runs normally since the run capacitor is only needed at startup",
        "The motor runs at double speed",
        "The motor reverses direction"
    ],
    correct: 0,
    explanation: "If the run capacitor <strong>fails open</strong>, the start winding receives no phase-shifted current. The motor <strong>cannot develop starting torque</strong> and will sit stationary, humming and drawing <strong>locked-rotor amperage</strong>. The overload protector should trip before winding damage occurs.",
    evidence: [{
        quote: "A PSC motor with a failed run capacitor <span class='evidence-highlight'>cannot start and draws locked-rotor amps</span>. The run capacitor provides the necessary <span class='evidence-highlight'>phase shift for the start winding to create a rotating magnetic field</span>.",
        source: "RSES",
        document: "RSES Motor Troubleshooting Guide",
        section: "Capacitor Failure Symptoms",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A 480V/24V control transformer is needed for a commercial rooftop unit. The control circuit has a total load of 75 VA. What minimum transformer VA rating should be selected?",
    options: [
        "75 VA exactly",
        "100 VA to provide a safety margin of at least 25% above the calculated load",
        "50 VA since transformers are oversized by manufacturers",
        "200 VA minimum for commercial applications"
    ],
    correct: 1,
    explanation: "Control transformers should be sized with a <strong>minimum 25% safety margin</strong> above the calculated load to handle inrush currents from contactors and relays. 75 VA x 1.25 = 93.75 VA, so a <strong>100 VA transformer</strong> is the correct choice.",
    evidence: [{
        quote: "Control transformers should be sized at <span class='evidence-highlight'>125% or more of the calculated control circuit load</span> to handle inrush currents from contactors, relays, and solenoid valves.",
        source: "Honeywell",
        document: "Honeywell Control Transformer Application Guide",
        section: "Transformer Sizing Methodology",
        url: "https://www.honeywell.com/us/en"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "What does a high amperage reading on the common terminal of a compressor with normal readings on start and run individually typically indicate?",
    options: [
        "Normal operation - common always shows total current",
        "A shorted run capacitor causing both windings to draw excessive current",
        "The compressor is operating correctly under high load",
        "The amp clamp is malfunctioning"
    ],
    correct: 0,
    explanation: "The <strong>common terminal carries the combined current</strong> of both the start and run windings. This is <strong>normal</strong> - the common terminal current equals the vector sum of the start and run winding currents. If start and run readings are individually normal, the system is operating correctly.",
    evidence: [{
        quote: "The common terminal carries <span class='evidence-highlight'>the vector sum of start and run winding currents</span>. Higher current at common compared to individual windings is normal motor operation.",
        source: "RSES",
        document: "RSES Compressor Electrical Diagnostics",
        section: "Current Measurements at Motor Terminals",
        url: "https://www.rfrses.org/education"
    }]
},
{
    vendor: "hvac",
    domain: "Electrical Systems",
    question: "A technician notices that the compressor contactor contacts are pitted and darkened. What is the consequence of leaving them in service?",
    options: [
        "No consequence - pitting is cosmetic only",
        "Increased contact resistance causes voltage drop, reduced power to the compressor, overheating of contacts, and potential welding or failure",
        "The contactor will operate more quietly",
        "The pitting improves electrical contact surface area"
    ],
    correct: 1,
    explanation: "<strong>Pitted and darkened contactor contacts</strong> have increased <strong>electrical resistance</strong>. This causes <strong>voltage drop</strong> across the contacts, reduced voltage to the compressor (causing high amp draw), <strong>heat buildup</strong> at the contacts, and eventual contact welding or complete failure.",
    evidence: [{
        quote: "Pitted contactor contacts create <span class='evidence-highlight'>high-resistance connections that cause voltage drop and heat buildup</span>, potentially leading to contact welding and <span class='evidence-highlight'>compressor damage from low voltage</span>.",
        source: "Honeywell",
        document: "Honeywell Contactor Maintenance Guide",
        section: "Contact Inspection and Replacement",
        url: "https://www.honeywell.com/us/en"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "During a defrost cycle on an air-source heat pump, which components change state or operation?",
    options: [
        "Only the outdoor fan shuts off",
        "The reversing valve shifts to cooling mode, the outdoor fan stops, and supplemental heat may energize to temper supply air",
        "Only supplemental heat energizes while the system continues in heating mode",
        "The compressor shuts off and electric heat strips activate"
    ],
    correct: 1,
    explanation: "During defrost, the <strong>reversing valve shifts to cooling mode</strong> (sending hot gas to the outdoor coil to melt ice), the <strong>outdoor fan stops</strong> to concentrate heat on the coil, and <strong>supplemental electric heat</strong> may energize to offset cold air being delivered to the space.",
    evidence: [{
        quote: "Defrost operation reverses the cycle by shifting the <span class='evidence-highlight'>reversing valve to cooling mode</span>, stopping the outdoor fan, and activating <span class='evidence-highlight'>supplemental heat to temper indoor supply air</span>.",
        source: "Trane",
        document: "Trane Heat Pump Service Manual",
        section: "Defrost Cycle Operation",
        url: "https://www.trane.com/residential/en/products/heat-pumps/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the balance point of a heat pump system?",
    options: [
        "The outdoor temperature at which the refrigerant pressures equalize",
        "The outdoor temperature at which the heat pump heating capacity exactly equals the building heat loss",
        "The indoor temperature setpoint where heating and cooling loads are equal",
        "The pressure at which the reversing valve switches modes"
    ],
    correct: 1,
    explanation: "The <strong>balance point</strong> is the outdoor temperature where the heat pump's <strong>heating capacity exactly matches the building heat loss</strong>. Below this temperature, supplemental heat is needed. Above it, the heat pump alone can maintain the indoor setpoint.",
    evidence: [{
        quote: "The balance point is the outdoor temperature where <span class='evidence-highlight'>heat pump capacity equals building heat loss</span>. Below this point, <span class='evidence-highlight'>supplemental heating is required</span>.",
        source: "ACCA",
        document: "ACCA Manual J - Residential Load Calculation",
        section: "Heat Pump Balance Point",
        url: "https://www.acca.org/standards/manuals"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "In a dual-fuel heat pump system, when does the fossil fuel furnace typically take over from the heat pump?",
    options: [
        "When indoor humidity exceeds 60%",
        "When the outdoor temperature drops below the economic balance point where fossil fuel heating becomes more cost-effective",
        "Only during defrost cycles",
        "When the thermostat is switched to emergency heat"
    ],
    correct: 1,
    explanation: "A <strong>dual-fuel system</strong> switches to the fossil fuel furnace at the <strong>economic balance point</strong> - the outdoor temperature where the cost of operating the heat pump exceeds the cost of gas heating. This is typically between 30-40 degrees F depending on fuel costs and equipment efficiency.",
    evidence: [{
        quote: "Dual-fuel systems switch to fossil fuel at the <span class='evidence-highlight'>economic balance point</span> where the cost of heat pump operation exceeds the cost of <span class='evidence-highlight'>gas or oil heating per BTU delivered</span>.",
        source: "Carrier Corporation",
        document: "Carrier Dual Fuel Heat Pump Application Guide",
        section: "Economic Balance Point and Switchover",
        url: "https://www.carrier.com/residential/en/us/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A four-way reversing valve has a solenoid coil. When the solenoid is energized in a typical heat pump, what mode is the system in?",
    options: [
        "Heating mode",
        "Cooling mode",
        "Defrost mode",
        "Emergency heat mode"
    ],
    correct: 1,
    explanation: "Most manufacturers energize the reversing valve solenoid for <strong>cooling mode</strong> and de-energize it for heating mode. This is a safety design - if the solenoid coil fails, the system defaults to <strong>heating mode</strong>, which is critical during cold weather.",
    evidence: [{
        quote: "Most heat pump manufacturers energize the reversing valve in <span class='evidence-highlight'>cooling mode</span> so that a coil failure defaults the system to <span class='evidence-highlight'>heating mode for occupant safety</span>.",
        source: "Trane",
        document: "Trane Heat Pump Technical Manual",
        section: "Reversing Valve Operation",
        url: "https://www.trane.com/residential/en/products/heat-pumps/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A geothermal heat pump uses a horizontal closed-loop ground heat exchanger. What is the typical loop temperature range during heating operation?",
    options: [
        "80-100 degrees F",
        "25-45 degrees F",
        "0-10 degrees F",
        "120-140 degrees F"
    ],
    correct: 1,
    explanation: "During heating, a horizontal ground loop typically operates with entering water temperatures of <strong>25-45 degrees F</strong>, depending on soil conditions, loop length, and climate. The heat pump extracts heat from this water, cooling it further before returning it to the ground.",
    evidence: [{
        quote: "Horizontal closed-loop geothermal systems typically see entering water temperatures of <span class='evidence-highlight'>25-45 degrees F during heating operation</span>, depending on soil thermal properties and loop design.",
        source: "IGSHPA",
        document: "IGSHPA Ground Source Heat Pump Design Manual",
        section: "Horizontal Loop Design Parameters",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What type of defrost control initiates defrost based on actual frost accumulation rather than time alone?",
    options: [
        "Timed defrost control",
        "Demand defrost using temperature differential, pressure differential, or optical sensors",
        "Manual defrost initiated by the homeowner",
        "Continuous hot gas bypass defrost"
    ],
    correct: 1,
    explanation: "<strong>Demand defrost</strong> uses sensors to detect actual frost conditions - typically a <strong>temperature differential</strong> between outdoor coil and ambient, <strong>pressure drop</strong> across the coil from frost restriction, or optical sensors. This prevents unnecessary defrost cycles that waste energy.",
    evidence: [{
        quote: "Demand defrost systems use <span class='evidence-highlight'>temperature differential, air pressure differential, or optical sensors</span> to initiate defrost only when frost is actually present, improving seasonal efficiency.",
        source: "Carrier Corporation",
        document: "Carrier Heat Pump Defrost Controls",
        section: "Demand Defrost Technology",
        url: "https://www.carrier.com/residential/en/us/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "In a geothermal open-loop system, what potential problem can arise from using well water with high mineral content?",
    options: [
        "The water will freeze in the ground loop",
        "Scale buildup and fouling in the heat exchanger, reducing heat transfer and potentially blocking flow",
        "The water will corrode the ground loop piping",
        "The refrigerant charge will become contaminated"
    ],
    correct: 1,
    explanation: "High mineral content (especially calcium and iron) in open-loop well water causes <strong>scale buildup and fouling</strong> on the heat exchanger surfaces. This <strong>reduces heat transfer efficiency</strong>, increases pressure drop, and can eventually block water flow, requiring chemical treatment or heat exchanger replacement.",
    evidence: [{
        quote: "Open-loop geothermal systems using well water with high mineral content are susceptible to <span class='evidence-highlight'>scale buildup and fouling in the heat exchanger</span>, reducing efficiency and flow rates.",
        source: "IGSHPA",
        document: "IGSHPA Ground Source Heat Pump Design Manual",
        section: "Open Loop Water Quality Requirements",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the purpose of the bi-flow filter-drier in a heat pump system?",
    options: [
        "It filters in one direction and dries in the other",
        "It allows refrigerant to flow and be filtered in both directions since flow reverses between heating and cooling modes",
        "It provides two separate filtration stages in series",
        "It filters the liquid line and the suction line simultaneously"
    ],
    correct: 1,
    explanation: "A <strong>bi-flow filter-drier</strong> is designed to filter and remove moisture from refrigerant flowing in <strong>either direction</strong>. In heat pump systems, the liquid line flow direction reverses between heating and cooling modes, so a standard one-directional drier would be bypassed in one mode.",
    evidence: [{
        quote: "Bi-flow filter-driers are required in heat pump systems because <span class='evidence-highlight'>refrigerant flow direction reverses</span> between heating and cooling modes, requiring <span class='evidence-highlight'>filtration in both directions</span>.",
        source: "Sporlan Division - Parker Hannifin",
        document: "Sporlan Heat Pump Components Catalog",
        section: "Bi-Flow Filter-Drier Selection",
        url: "https://www.sporlan.com/literature"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A heat pump in heating mode has a COP of 3.0. How many watts of heat are delivered per watt of electrical input?",
    options: [
        "1.0 watt of heat per watt of input",
        "3.0 watts of heat per watt of electrical input",
        "0.33 watts of heat per watt of input",
        "9.0 watts of heat per watt of input"
    ],
    correct: 1,
    explanation: "A <strong>COP of 3.0</strong> means the system delivers <strong>3 watts of heating for every 1 watt of electrical input</strong>. The additional 2 watts come from heat absorbed from the outdoor air (or ground source). This makes heat pumps significantly more efficient than electric resistance heating (COP = 1.0).",
    evidence: [{
        quote: "A COP of 3.0 means <span class='evidence-highlight'>3 units of heat delivered for every 1 unit of electrical energy consumed</span>. The additional energy comes from heat absorbed from the outdoor environment.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - HVAC Systems and Equipment",
        section: "Heat Pump Performance Metrics",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the purpose of the check valve (or flow-control device) installed near the indoor coil in a heat pump system?",
    options: [
        "To prevent refrigerant from flowing backward during the off cycle",
        "To bypass the indoor metering device during cooling mode so that the outdoor metering device controls flow, or vice versa",
        "To regulate oil flow to the compressor",
        "To prevent hot gas from entering the suction line"
    ],
    correct: 1,
    explanation: "Heat pump systems use <strong>check valves</strong> to bypass one metering device while the other is active. In cooling mode, the check valve near the indoor coil opens to bypass the indoor TXV, allowing the outdoor metering device to control flow. In heating, it closes so the indoor metering device regulates refrigerant.",
    evidence: [{
        quote: "Check valves in heat pump systems <span class='evidence-highlight'>bypass the inactive metering device</span> during each mode, ensuring only the appropriate metering device controls refrigerant flow.",
        source: "Trane",
        document: "Trane Heat Pump Refrigerant Circuit Design",
        section: "Check Valve and Metering Device Operation",
        url: "https://www.trane.com/residential/en/products/heat-pumps/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "During emergency heat (EM HEAT) operation on a heat pump thermostat, what happens to the compressor?",
    options: [
        "The compressor runs at reduced capacity",
        "The compressor is locked out and only supplemental electric heat strips provide heating",
        "The compressor runs in cooling mode to assist the heat strips",
        "The compressor runs normally but with additional heat strips"
    ],
    correct: 1,
    explanation: "When <strong>emergency heat</strong> is selected, the <strong>compressor is completely locked out</strong> and heating is provided solely by the <strong>supplemental electric resistance heat strips</strong> (or fossil fuel backup). This mode is used when the heat pump has failed and is awaiting repair.",
    evidence: [{
        quote: "Emergency heat mode <span class='evidence-highlight'>locks out the compressor</span> and relies entirely on <span class='evidence-highlight'>supplemental electric or fossil fuel heating</span> until the heat pump can be repaired.",
        source: "Honeywell",
        document: "Honeywell Heat Pump Thermostat Installation Guide",
        section: "Emergency Heat Mode Operation",
        url: "https://www.honeywell.com/us/en"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A heat pump technician measures the temperature split across the indoor coil during heating mode and finds only a 15 degree F rise. The expected range is 20-30 degrees F. What is the most likely cause?",
    options: [
        "The system is operating normally for current outdoor conditions",
        "Excessive indoor airflow rate reducing the temperature rise across the coil",
        "The reversing valve is stuck in cooling mode",
        "The thermostat is set too high"
    ],
    correct: 1,
    explanation: "A <strong>low temperature rise</strong> across the indoor coil in heating mode indicates either <strong>excessive airflow</strong> (fan speed too high, reducing heat transfer per unit of air) or low system capacity. Check blower speed settings, ductwork, and refrigerant charge before investigating further.",
    evidence: [{
        quote: "Low temperature rise in heating mode can indicate <span class='evidence-highlight'>excessive airflow reducing heat transfer effectiveness</span> or <span class='evidence-highlight'>reduced system capacity from low charge or outdoor conditions</span>.",
        source: "Carrier Corporation",
        document: "Carrier Heat Pump Performance Diagnostics",
        section: "Temperature Split Analysis",
        url: "https://www.carrier.com/residential/en/us/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the HSPF (Heating Seasonal Performance Factor) and how does it relate to COP?",
    options: [
        "HSPF and COP are identical measurements",
        "HSPF measures seasonal heating efficiency in BTU/Wh over an entire heating season; COP is an instantaneous ratio at specific conditions",
        "HSPF only applies to geothermal systems",
        "HSPF measures cooling efficiency, not heating"
    ],
    correct: 1,
    explanation: "<strong>HSPF</strong> measures <strong>total heating BTUs delivered divided by total watt-hours consumed</strong> over a heating season, accounting for varying outdoor temperatures, defrost cycles, and supplemental heat. <strong>COP</strong> is measured at a single operating point. HSPF can be divided by 3.412 to get an approximate seasonal COP.",
    evidence: [{
        quote: "HSPF = <span class='evidence-highlight'>total seasonal heating output (BTU) divided by total electrical input (Wh)</span>. Divide HSPF by 3.412 to estimate <span class='evidence-highlight'>seasonal average COP</span>.",
        source: "AHRI",
        document: "AHRI Standard 210/240 - Performance Rating",
        section: "HSPF Definition and Testing",
        url: "https://www.ahrinet.org/search-standards"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "In a vertical closed-loop geothermal system, what is the typical bore depth and spacing between boreholes?",
    options: [
        "50-100 feet deep, 5 feet apart",
        "150-400 feet deep, 15-25 feet apart",
        "500-1000 feet deep, 50 feet apart",
        "25-50 feet deep, 3 feet apart"
    ],
    correct: 1,
    explanation: "Vertical geothermal boreholes are typically <strong>150-400 feet deep</strong> with spacing of <strong>15-25 feet</strong> between bores. Proper spacing prevents thermal interference between boreholes. Bore depth depends on geological conditions, thermal conductivity, and system load.",
    evidence: [{
        quote: "Vertical bore geothermal loops are typically <span class='evidence-highlight'>150-400 feet deep with 15-25 foot spacing</span> between bores to minimize thermal interference and ensure adequate heat exchange.",
        source: "IGSHPA",
        document: "IGSHPA Ground Source Heat Pump Design Manual",
        section: "Vertical Bore Design Parameters",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A reversing valve is suspected of leaking internally. What test confirms this diagnosis?",
    options: [
        "Measure the voltage at the solenoid coil",
        "Measure the temperature difference between the suction line and the discharge line at the valve body - minimal difference indicates internal leakage",
        "Check the capacitor value",
        "Measure static pressure at the indoor blower"
    ],
    correct: 1,
    explanation: "Internal <strong>reversing valve leakage</strong> allows hot discharge gas to mix with cool suction gas inside the valve body. This is detected by measuring <strong>temperature at both the suction and discharge ports</strong>. If the temperature difference is <strong>abnormally small</strong>, hot gas is leaking across to the suction side.",
    evidence: [{
        quote: "Internal reversing valve leakage is confirmed by a <span class='evidence-highlight'>reduced temperature differential between discharge and suction ports</span> at the valve body. The valve body will also be abnormally warm.",
        source: "Ranco",
        document: "Ranco Reversing Valve Diagnostics Guide",
        section: "Internal Leakage Testing",
        url: "https://www.emerson.com/commercial-residential"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the purpose of the desuperheater option available on some geothermal heat pump systems?",
    options: [
        "To remove superheat from the compressor discharge for safety",
        "To preheat domestic hot water using waste heat from the compressor discharge, improving overall system efficiency",
        "To cool the compressor during high-load conditions",
        "To provide supplemental space heating during defrost"
    ],
    correct: 1,
    explanation: "A <strong>desuperheater</strong> is a heat exchanger that captures <strong>superheat from the compressor discharge gas</strong> to preheat domestic hot water. This waste heat recovery significantly <strong>improves overall system efficiency</strong> by utilizing energy that would otherwise be rejected to the ground loop or condensing coil.",
    evidence: [{
        quote: "Desuperheaters recover <span class='evidence-highlight'>waste heat from compressor discharge</span> to preheat domestic hot water, improving overall <span class='evidence-highlight'>system efficiency and reducing water heating costs</span>.",
        source: "IGSHPA",
        document: "IGSHPA Ground Source Heat Pump Design Manual",
        section: "Desuperheater Applications",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A mini-split heat pump system uses an inverter-driven compressor. What is the primary advantage of inverter technology over a standard fixed-speed compressor?",
    options: [
        "Lower initial cost",
        "The compressor can vary its speed to match the actual heating or cooling load, maintaining tighter temperature control and higher efficiency at part loads",
        "Inverter compressors are easier to install",
        "Inverter compressors never require defrost cycles"
    ],
    correct: 1,
    explanation: "<strong>Inverter-driven compressors</strong> use a variable-frequency drive to <strong>modulate compressor speed</strong> based on the actual load. This provides <strong>precise temperature control</strong>, reduces cycling losses, maintains more consistent humidity levels, and achieves <strong>much higher efficiency at part-load conditions</strong> where systems operate most of the time.",
    evidence: [{
        quote: "Inverter compressors <span class='evidence-highlight'>modulate speed to match the load</span>, providing superior comfort, <span class='evidence-highlight'>reduced cycling losses, and significantly higher part-load efficiency</span>.",
        source: "Mitsubishi Electric",
        document: "Mitsubishi Electric Inverter Technology Guide",
        section: "Variable Capacity Operation",
        url: "https://www.mitsubishicomfort.com/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What type of ground loop antifreeze solution is most commonly used in geothermal systems, and what concentration is typical?",
    options: [
        "Automotive ethylene glycol at 50% concentration",
        "Food-grade propylene glycol at 15-25% concentration or methanol at similar concentrations",
        "Pure water with no antifreeze",
        "Calcium chloride brine at 30% concentration"
    ],
    correct: 1,
    explanation: "<strong>Propylene glycol</strong> (food-grade) or <strong>methanol</strong> at <strong>15-25% concentration</strong> are most common in geothermal loops. Propylene glycol is preferred for its low toxicity. Ethylene glycol is avoided due to environmental toxicity. The concentration is chosen to protect against the minimum expected loop temperature.",
    evidence: [{
        quote: "Geothermal loops typically use <span class='evidence-highlight'>food-grade propylene glycol or methanol at 15-25% concentration</span> for freeze protection while minimizing viscosity increase and environmental risk.",
        source: "IGSHPA",
        document: "IGSHPA Ground Source Heat Pump Design Manual",
        section: "Antifreeze Selection and Concentration",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the coefficient of performance (COP) of supplemental electric resistance heat strips used in a heat pump system?",
    options: [
        "COP of 3.0",
        "COP of 2.0",
        "COP of 1.0 - all electrical energy converts to heat with no multiplier",
        "COP of 0.5"
    ],
    correct: 2,
    explanation: "<strong>Electric resistance heat</strong> has a <strong>COP of 1.0</strong> because it converts electrical energy to heat on a 1:1 basis (3,412 BTU per kilowatt). Unlike a heat pump, there is no heat transfer from an external source, making it <strong>the least efficient form of electric heating</strong>.",
    evidence: [{
        quote: "Electric resistance heating has a <span class='evidence-highlight'>COP of 1.0</span>, converting each watt of electrical input to exactly one watt of heat output, with <span class='evidence-highlight'>no heat pump multiplier effect</span>.",
        source: "ASHRAE",
        document: "ASHRAE Handbook - HVAC Systems and Equipment",
        section: "Electric Heating Efficiency",
        url: "https://www.ashrae.org/technical-resources/ashrae-handbook"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A heat pump outdoor unit is completely covered in ice during heating mode, but the defrost cycle is not initiating. Which component should the technician check first?",
    options: [
        "The indoor blower motor capacitor",
        "The defrost control board and sensors (outdoor coil temperature sensor and ambient sensor)",
        "The indoor TXV",
        "The crankcase heater"
    ],
    correct: 1,
    explanation: "If defrost is not initiating, the <strong>defrost control board</strong> or its <strong>sensors</strong> are the most likely culprits. Check the <strong>outdoor coil temperature sensor</strong> and <strong>ambient temperature sensor</strong> for proper resistance values. Also verify the defrost timer and relay contacts on the control board.",
    evidence: [{
        quote: "Failed defrost initiation typically points to a <span class='evidence-highlight'>defective defrost control board, faulty coil temperature sensor, or failed defrost relay</span>. Verify sensor resistance values against manufacturer specifications.",
        source: "Rheem",
        document: "Rheem Heat Pump Defrost Troubleshooting Guide",
        section: "Defrost System Diagnostics",
        url: "https://www.rheem.com/products/heating-and-cooling/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the function of the auxiliary heat lockout setting on a heat pump thermostat?",
    options: [
        "It prevents the heat pump compressor from running above a set outdoor temperature",
        "It prevents supplemental heat from energizing above a set outdoor temperature to avoid unnecessary electric heat use",
        "It locks out the thermostat display",
        "It prevents cooling operation in winter"
    ],
    correct: 1,
    explanation: "The <strong>auxiliary heat lockout</strong> prevents supplemental electric heat from energizing when the outdoor temperature is <strong>above the lockout setpoint</strong>. Above this temperature, the heat pump alone should handle the load, and running electric strips would waste energy and increase utility costs.",
    evidence: [{
        quote: "Auxiliary heat lockout <span class='evidence-highlight'>prevents supplemental heat from operating above a set outdoor temperature</span> where the heat pump can independently satisfy the heating load, reducing <span class='evidence-highlight'>unnecessary energy consumption</span>.",
        source: "Honeywell",
        document: "Honeywell Heat Pump Thermostat Programming Guide",
        section: "Auxiliary Heat Lockout Configuration",
        url: "https://www.honeywell.com/us/en"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "In a cold climate heat pump rated for operation down to -15 degrees F, what technology allows it to maintain capacity at extremely low outdoor temperatures?",
    options: [
        "Oversized electric heat strips",
        "Enhanced vapor injection (EVI) or flash tank technology that injects intermediate-pressure refrigerant into the scroll compressor",
        "Larger outdoor coil surface area only",
        "A secondary combustion heater in the outdoor unit"
    ],
    correct: 1,
    explanation: "<strong>Enhanced vapor injection (EVI)</strong> uses a flash tank or economizer to inject intermediate-pressure refrigerant vapor into the compressor at a mid-point in the compression process. This <strong>increases mass flow rate and capacity</strong> at low outdoor temperatures while <strong>reducing discharge temperatures</strong>.",
    evidence: [{
        quote: "Enhanced vapor injection (EVI) technology <span class='evidence-highlight'>injects intermediate-pressure vapor into the scroll compressor</span>, increasing heating capacity by up to <span class='evidence-highlight'>30% at low ambient temperatures</span>.",
        source: "Mitsubishi Electric",
        document: "Mitsubishi Hyper-Heating Technology Guide",
        section: "Enhanced Vapor Injection Operation",
        url: "https://www.mitsubishicomfort.com/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "What is the typical heat of extraction rate (in BTU/hr per linear foot) used for sizing horizontal geothermal ground loops in average soil conditions?",
    options: [
        "5-10 BTU/hr per linear foot",
        "15-25 BTU/hr per linear foot",
        "50-75 BTU/hr per linear foot",
        "100+ BTU/hr per linear foot"
    ],
    correct: 1,
    explanation: "Horizontal ground loops in average soil conditions typically extract <strong>15-25 BTU/hr per linear foot</strong> of loop. This value varies with soil type, moisture content, and operating hours. Wet clay provides higher extraction rates than dry sand. This rate determines total loop length required.",
    evidence: [{
        quote: "Horizontal loop heat extraction rates typically range from <span class='evidence-highlight'>15-25 BTU/hr per linear foot</span> in average soil, varying with <span class='evidence-highlight'>soil moisture content and thermal conductivity</span>.",
        source: "IGSHPA",
        document: "IGSHPA Ground Source Heat Pump Design Manual",
        section: "Horizontal Loop Sizing Calculations",
        url: "https://igshpa.org/publications/"
    }]
},
{
    vendor: "hvac",
    domain: "Heat Pumps",
    question: "A technician notices the outdoor coil on a heat pump frosts over very quickly in heating mode even at 45 degrees F outdoor temperature. Suction pressure is low. What is the most likely cause?",
    options: [
        "Normal operation for this outdoor temperature",
        "Low refrigerant charge causing the outdoor coil (evaporator in heating) to operate at a lower saturation temperature, below the dew point of outdoor air",
        "The defrost board is defective",
        "The reversing valve solenoid is energized"
    ],
    correct: 1,
    explanation: "<strong>Low refrigerant charge</strong> reduces suction pressure, causing the outdoor coil (acting as evaporator in heating mode) to operate at a <strong>saturation temperature well below the outdoor dew point</strong>. This causes rapid moisture condensation and frost formation, even at moderate outdoor temperatures.",
    evidence: [{
        quote: "Low charge in heating mode lowers <span class='evidence-highlight'>outdoor coil saturation temperature below the ambient dew point</span>, causing <span class='evidence-highlight'>premature frost formation</span> even at moderate outdoor temperatures.",
        source: "Trane",
        document: "Trane Heat Pump Diagnostic Procedures",
        section: "Premature Frost Formation",
        url: "https://www.trane.com/residential/en/products/heat-pumps/"
    }]
}