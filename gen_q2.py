import sys
sys.path.insert(0, "C:/Users/cyber.admin/certifications")

questions = []

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Under EPA Section 608, what is the maximum allowable annual leak rate for commercial refrigeration equipment containing 50 or more pounds of refrigerant before the owner must repair the leak?",
    "options": ["10%","20%","30%","35%"],
    "correct": 1,
    "explanation": "EPA Section 608 sets the <strong>leak rate trigger</strong> for commercial refrigeration at <strong>20%</strong> annually. If a system containing 50+ pounds of refrigerant exceeds this rate, the owner must repair the leak within 30 days of discovery or develop a retrofit/retirement plan.",
    "eq": "Commercial refrigeration equipment with a charge of 50 or more pounds must have leaks repaired when the <span class='evidence-highlight'>annual leak rate exceeds 20 percent</span>.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Section 608 Leak Repair Requirements", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "According to EPA regulations, what is the required recovery efficiency for a system-dependent recovery device used on equipment with less than 200 pounds of R-22?",
    "options": ["80% of the charge","90% of the charge","0 psig","90% when the compressor is operative, 80% when inoperative"],
    "correct": 3,
    "explanation": "For <strong>system-dependent recovery</strong> on equipment with less than 200 lbs of charge, recovery efficiency must be <strong>90% when the system compressor is operative</strong> and <strong>80% when the compressor is not operative</strong>.",
    "eq": "System-dependent recovery devices must achieve <span class='evidence-highlight'>90% recovery with an operative compressor and 80% with an inoperative compressor</span> for systems under 200 pounds.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Recovery Requirements", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "A technician is decommissioning a window air conditioner containing 3 pounds of R-410A. What type of EPA 608 certification is required?",
    "options": ["Type I only","Type II only","Type III only","Universal certification"],
    "correct": 0,
    "explanation": "<strong>Type I certification</strong> covers small appliances containing <strong>5 pounds or less</strong> of refrigerant. A 3-pound window AC unit qualifies as a small appliance, requiring only Type I certification for service and disposal.",
    "eq": "Type I certification is required for servicing <span class='evidence-highlight'>small appliances containing 5 pounds or less of refrigerant</span>, including window AC units, PTACs under 5 lbs, and household refrigerators.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Technician Certification Types", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Under the AIM Act, what is the phasedown schedule for HFC production and consumption in the United States by 2036?",
    "options": ["50% reduction from baseline","70% reduction from baseline","85% reduction from baseline","100% elimination"],
    "correct": 2,
    "explanation": "The <strong>AIM Act (American Innovation and Manufacturing Act)</strong> mandates an <strong>85% phasedown</strong> of HFC production and consumption by 2036, using a baseline of historical HFC consumption levels. This aligns with the Kigali Amendment to the Montreal Protocol.",
    "eq": "The AIM Act requires a phasedown of HFC production and consumption to <span class='evidence-highlight'>85 percent below baseline levels by 2036</span>, following a stepped reduction schedule.",
    "es": "EPA", "ed": "AIM Act - American Innovation and Manufacturing Act of 2020", "esec": "HFC Phasedown Schedule", "eu": "https://www.epa.gov/climate-hfcs-reduction"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "When recovering refrigerant from a system with a known leak before repair, to what level must a self-contained recovery machine evacuate an appliance normally containing 200+ pounds of R-22?",
    "options": ["0 psig","4 inches Hg vacuum","10 inches Hg vacuum","15 inches Hg vacuum"],
    "correct": 2,
    "explanation": "For appliances containing <strong>200+ pounds of high-pressure refrigerant</strong> (like R-22), self-contained recovery equipment must achieve <strong>10 inches Hg vacuum</strong> before the appliance can be opened for repair. Different levels apply for different charge sizes.",
    "eq": "Self-contained recovery equipment must evacuate appliances with <span class='evidence-highlight'>200 or more pounds of high-pressure refrigerant to 10 inches Hg vacuum</span> before opening for service.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Required Evacuation Levels", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "How long must records of refrigerant purchases, additions, and disposals be maintained for equipment containing 50 or more pounds of refrigerant?",
    "options": ["1 year","3 years","5 years","Indefinitely"],
    "correct": 1,
    "explanation": "EPA Section 608 requires that <strong>servicing records</strong> for equipment containing 50+ pounds of refrigerant be retained for a minimum of <strong>3 years</strong>. Records must include the date, type and quantity of refrigerant added, and the identity of the technician.",
    "eq": "Records of refrigerant servicing must be maintained for <span class='evidence-highlight'>at least 3 years</span> for equipment containing 50 or more pounds of refrigerant.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Recordkeeping Requirements", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "A technician recovers R-410A from a residential split system. The recovered refrigerant is contaminated. What options does the technician have?",
    "options": ["Return it to the same system it was recovered from, have it reclaimed by an EPA-certified reclaimer, or destroy it","Vent it since R-410A is not ozone-depleting","Sell it to another technician as-is","Mix it with virgin refrigerant to dilute contaminants"],
    "correct": 0,
    "explanation": "Contaminated recovered refrigerant may be <strong>returned to the same system</strong>, sent to an <strong>EPA-certified reclaimer</strong> for processing to ARI-700 standards, or <strong>properly destroyed</strong>. It cannot be vented (even HFCs), sold as-is, or mixed with virgin refrigerant.",
    "eq": "Recovered refrigerant that cannot be returned to the same equipment must be <span class='evidence-highlight'>sent to an EPA-certified reclaimer</span> or properly destroyed. Venting is prohibited for all refrigerants.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Refrigerant Sales and Disposition", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What is the maximum penalty per day per violation for knowingly venting refrigerant in violation of Section 608?",
    "options": ["Up to $10,000","Up to $37,500","Up to $44,539 per day per violation under current adjusted penalties","Up to $100,000"],
    "correct": 2,
    "explanation": "EPA penalties for Section 608 violations have been adjusted for inflation. As of current regulations, the maximum civil penalty is <strong>up to $44,539 per day per violation</strong>. Criminal penalties can include fines and imprisonment.",
    "eq": "Violations of Section 608 refrigerant management regulations can result in fines of <span class='evidence-highlight'>up to $44,539 per day per violation</span> under current inflation-adjusted penalty schedules.",
    "es": "EPA", "ed": "Clean Air Act Section 113 - Penalties", "esec": "Civil and Criminal Penalties", "eu": "https://www.epa.gov/enforcement/clean-air-act-civil-penalty-policy"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Which refrigerant safety group is classified as B1 under ASHRAE Standard 34, and what does that classification mean for EPA handling requirements?",
    "options": ["R-410A - higher toxicity, no flame propagation","R-717 (ammonia) - higher toxicity, no flame propagation","R-134a - lower toxicity, lower flammability","R-290 (propane) - lower toxicity, higher flammability"],
    "correct": 1,
    "explanation": "<strong>R-717 (ammonia)</strong> is classified as <strong>B1</strong>: higher toxicity (B) with no flame propagation (1). Despite being natural, ammonia requires special handling due to its toxicity. EPA regulations apply to its recovery and proper management.",
    "eq": "Ammonia (R-717) carries a <span class='evidence-highlight'>B1 safety classification indicating higher toxicity with no flame propagation</span>. Special ventilation and safety requirements apply.",
    "es": "ASHRAE", "ed": "ASHRAE Standard 34", "esec": "Refrigerant Safety Classifications", "eu": "https://www.ashrae.org/technical-resources/standards-and-guidelines"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Under Section 608, when is it permissible to vent a refrigerant?",
    "options": ["Never - all refrigerants must be recovered","When the refrigerant is an HFC and the system contains less than 5 pounds","Only nitrogen, carbon dioxide, and other non-regulated substances used for leak testing may be released","When the leak rate is below 10% annually"],
    "correct": 2,
    "explanation": "EPA prohibits venting of all regulated refrigerants (CFCs, HCFCs, HFCs, and substitutes). However, <strong>non-regulated substances</strong> such as <strong>nitrogen, carbon dioxide, and dry air</strong> used for holding charges or leak testing may be released to the atmosphere.",
    "eq": "It is not a violation to release <span class='evidence-highlight'>nitrogen, carbon dioxide, or dry air</span> used as holding charges or for leak detection, as these are not regulated refrigerants.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Venting Prohibition Exceptions", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "A technician is disposing of a household refrigerator. The unit contains R-134a. What must occur before the appliance can be sent to a scrapyard?",
    "options": ["Nothing special - household refrigerators are exempt","The refrigerant must be recovered by a certified technician before disposal","Only the compressor oil needs to be drained","The unit must sit unplugged for 24 hours to equalize pressure"],
    "correct": 1,
    "explanation": "Before disposal, all refrigerant must be <strong>recovered by a certified technician</strong> using approved recovery equipment. The technician must sign a statement verifying recovery. Scrapyards and recyclers that accept appliances must ensure refrigerant recovery compliance.",
    "eq": "Before disposal of any appliance, <span class='evidence-highlight'>refrigerant must be recovered by a certified technician</span> using equipment certified under Section 608.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Appliance Disposal Requirements", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What is the maximum allowable annual leak rate for comfort cooling equipment (such as chillers) containing 50+ pounds of refrigerant?",
    "options": ["10%","20%","30%","35%"],
    "correct": 2,
    "explanation": "For <strong>comfort cooling</strong> and all other equipment not classified as commercial or industrial process refrigeration, the EPA leak rate trigger is <strong>30%</strong> annually. Once exceeded, the owner must repair leaks within 30 days.",
    "eq": "Comfort cooling equipment containing 50 or more pounds of refrigerant must have leaks repaired when the <span class='evidence-highlight'>annual leak rate exceeds 30 percent</span>.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Leak Rate Thresholds by Equipment Type", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Under the updated Section 608 regulations (2016 extension to HFCs), which of the following statements is TRUE about substitute refrigerants?",
    "options": ["HFCs are exempt from all recovery requirements","HFCs must be recovered, recycled, or reclaimed just like CFCs and HCFCs","Only HFCs with GWP above 2500 require recovery","HFC recovery is voluntary under the updated rules"],
    "correct": 1,
    "explanation": "The 2016 EPA rule extended Section 608 requirements to <strong>substitute refrigerants including HFCs</strong>. All recovery, recycling, reclamation, leak repair, and recordkeeping requirements that applied to CFCs and HCFCs now also apply to HFCs and other substitutes.",
    "eq": "The 2016 rule extended refrigerant management requirements to <span class='evidence-highlight'>HFCs and other substitute refrigerants</span>, requiring the same recovery, leak repair, and recordkeeping as ozone-depleting substances.",
    "es": "EPA", "ed": "Protection of Stratospheric Ozone: Update to the Refrigerant Management Requirements", "esec": "Extension to Substitute Refrigerants", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "A Type II certified technician is asked to service a low-pressure chiller containing R-123. The system is at 10 inches Hg vacuum during normal operation. What is the required evacuation level before opening?",
    "options": ["0 psig","25 inches Hg vacuum","25 mm Hg absolute","15 inches Hg vacuum"],
    "correct": 2,
    "explanation": "For <strong>low-pressure appliances</strong> (like R-123 chillers), the required evacuation level is <strong>25 mm Hg absolute</strong> (approximately 29 inches Hg vacuum). Since these systems operate below atmospheric pressure, special procedures prevent air infiltration.",
    "eq": "Low-pressure equipment must be evacuated to <span class='evidence-highlight'>25 mm Hg absolute</span> before opening, except when using approved alternative procedures.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Low-Pressure Appliance Requirements", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "According to EPA regulations, who is permitted to purchase regulated refrigerants?",
    "options": ["Any person 18 years or older with a valid ID","Only EPA 608 certified technicians or businesses that employ certified technicians","Any licensed contractor regardless of certification","Only wholesalers with an EPA registration number"],
    "correct": 1,
    "explanation": "Since November 2018, the EPA requires that <strong>only Section 608 certified technicians</strong> (or entities employing them) may purchase regulated refrigerants, including HFCs. This sales restriction applies to containers of any size.",
    "eq": "Refrigerant sales are restricted to <span class='evidence-highlight'>EPA Section 608 certified technicians</span> or to employers of certified technicians who can provide proof of certification.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Refrigerant Sales Restrictions", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What is the GWP (Global Warming Potential) of R-410A, and how does this factor into current regulatory decisions?",
    "options": ["GWP of 675 - below the proposed threshold","GWP of 2088 - targeted for phasedown under the AIM Act and SNAP rules","GWP of 1430 - same as R-134a","GWP of 4 - considered a low-GWP alternative"],
    "correct": 1,
    "explanation": "R-410A has a <strong>GWP of 2088</strong>, making it a high-GWP HFC targeted for phasedown. The AIM Act and EPA SNAP (Significant New Alternatives Policy) program are driving transitions to lower-GWP alternatives like R-454B (GWP 466) and R-32 (GWP 675).",
    "eq": "R-410A with a <span class='evidence-highlight'>GWP of 2088</span> is being phased down under the AIM Act, with industry transitioning to lower-GWP alternatives.",
    "es": "EPA", "ed": "EPA SNAP Program - Acceptable Substitutes", "esec": "Residential and Commercial AC Substitutes", "eu": "https://www.epa.gov/snap"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Recovery equipment manufactured after November 15, 1993, must be tested and certified by whom?",
    "options": ["The EPA directly","An EPA-approved equipment testing organization such as UL or ARI/AHRI","The state environmental agency","The equipment manufacturer through self-certification"],
    "correct": 1,
    "explanation": "Recovery and recycling equipment must be tested and certified by an <strong>EPA-approved equipment testing organization</strong> (such as UL or AHRI) to verify it meets the required evacuation levels. Equipment must display a certification label.",
    "eq": "Recovery and recycling equipment must be <span class='evidence-highlight'>tested by an EPA-approved equipment testing organization</span> and certified to meet the required recovery efficiency and evacuation levels.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Equipment Certification Requirements", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "If a technician discovers a leak in a commercial refrigeration system containing 75 pounds of R-404A and the calculated leak rate is 25%, what action is required?",
    "options": ["No action required since the leak rate is below 30%","Repair the leak within 30 days since the rate exceeds the 20% threshold for commercial refrigeration","Report the leak to the EPA within 24 hours","Replace the entire system within 90 days"],
    "correct": 1,
    "explanation": "Commercial refrigeration has a <strong>20% annual leak rate trigger</strong>. At 25%, the owner must <strong>repair the leak within 30 days</strong> of discovery. If repair is not feasible, a retrofit or retirement plan must be developed within 30 days and implemented within 120 days.",
    "eq": "When the annual leak rate exceeds <span class='evidence-highlight'>20% for commercial refrigeration</span>, the owner must repair the leak within 30 days or develop a <span class='evidence-highlight'>retrofit or retirement plan</span>.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Leak Repair Timelines", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What does it mean for recovered refrigerant to be 'reclaimed' versus 'recycled'?",
    "options": ["They are the same process with different names","Recycling cleans refrigerant on-site for reuse in the same system; reclamation reprocesses it at a certified facility to meet ARI/AHRI 700 purity standards","Reclamation is for CFCs only; recycling is for HFCs only","Recycling requires sending the refrigerant to a certified facility"],
    "correct": 1,
    "explanation": "<strong>Recycling</strong> involves basic on-site cleaning (oil separation, moisture removal) for reuse in the same or similar equipment. <strong>Reclamation</strong> is performed at an <strong>EPA-certified facility</strong> and restores refrigerant to <strong>AHRI Standard 700 purity specifications</strong> for resale.",
    "eq": "Reclamation reprocesses refrigerant to <span class='evidence-highlight'>AHRI Standard 700 specifications</span> at a certified facility, while recycling performs <span class='evidence-highlight'>basic on-site cleaning for reuse in the same owner's equipment</span>.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Definitions - Reclaim vs Recycle", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "A self-contained recovery machine used on equipment with less than 200 pounds of high-pressure refrigerant must achieve what evacuation level?",
    "options": ["0 psig","4 inches Hg vacuum","10 inches Hg vacuum","25 inches Hg vacuum"],
    "correct": 0,
    "explanation": "Self-contained recovery equipment used on high-pressure appliances with <strong>less than 200 pounds</strong> of refrigerant must achieve <strong>0 psig</strong> (atmospheric pressure). For systems with 200+ pounds, the requirement increases to 10 inches Hg vacuum.",
    "eq": "Self-contained recovery devices must evacuate high-pressure appliances with <span class='evidence-highlight'>less than 200 pounds to 0 psig</span>; appliances with 200+ pounds require 10 inches Hg vacuum.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Required Evacuation Levels Table", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Under EPA Section 608, what constitutes a 'de minimis' release of refrigerant that is not considered a violation?",
    "options": ["Any release under 1 pound","Releases during normal equipment operation, maintenance, repair, or disposal where recovery is properly performed","Any release that occurs outdoors","Releases from equipment containing less than 5 pounds"],
    "correct": 1,
    "explanation": "<strong>De minimis releases</strong> are small, unavoidable amounts of refrigerant released during <strong>legitimate service operations</strong> (connecting/disconnecting hoses, purging lines) when proper recovery procedures are followed. Intentional venting to avoid recovery is not de minimis.",
    "eq": "De minimis releases are <span class='evidence-highlight'>small unavoidable releases during proper service procedures</span> and are not considered violations of the venting prohibition.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "De Minimis Release Definition", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What is required before opening a system for major repair if evacuation to the required level is not achievable due to leaks?",
    "options": ["The technician may open the system at whatever pressure is reached","The technician must isolate the leaking component with valves, evacuate the non-leaking portion to required levels, and then may proceed","The technician must wait 24 hours and try again","The system must be entirely replaced without opening"],
    "correct": 1,
    "explanation": "If the <strong>required evacuation level cannot be achieved</strong> due to leaks, the technician should <strong>isolate the leaking component</strong> using service valves and evacuate the <strong>non-leaking portion</strong> to the required level. The isolated leaking section can then be opened at the lowest achievable pressure.",
    "eq": "When required evacuation levels cannot be reached due to leaks, <span class='evidence-highlight'>isolate the leaking component and evacuate the remainder</span> of the system to the required level.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Evacuation Exceptions for Leaking Equipment", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "Under the SNAP program, which refrigerant has been listed as unacceptable for new residential and light commercial air conditioning and heat pump systems?",
    "options": ["R-32","R-410A","R-22 in new equipment manufactured after 2010","All of the above"],
    "correct": 2,
    "explanation": "Under the <strong>SNAP program</strong>, R-22 was listed as unacceptable for <strong>new equipment</strong> as part of the HCFC phaseout. Production of R-22 for new systems ended January 1, 2010, and all production/import ended January 1, 2020. R-410A and R-32 remain acceptable for now.",
    "eq": "R-22 production for new equipment ended <span class='evidence-highlight'>January 1, 2010</span>, and all R-22 production and import ceased <span class='evidence-highlight'>January 1, 2020</span> under the HCFC phaseout schedule.",
    "es": "EPA", "ed": "EPA SNAP Program Rules", "esec": "HCFC Phaseout Schedule", "eu": "https://www.epa.gov/snap"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What verification is required after a leak repair is completed on a system containing 50+ pounds of refrigerant?",
    "options": ["No verification is needed if the technician is confident in the repair","A follow-up verification test must confirm the leak rate is below the applicable trigger rate within 30 days of the repair","The system must be monitored for 1 year before returning to service","An EPA inspector must verify the repair on-site"],
    "correct": 1,
    "explanation": "After completing a leak repair, the owner must perform a <strong>follow-up verification test</strong> within <strong>30 days</strong> to confirm the leak has been successfully repaired and the system leak rate is below the applicable trigger rate. This can use automated leak detection or manual methods.",
    "eq": "A follow-up verification test must be performed <span class='evidence-highlight'>within 30 days of the repair</span> to confirm the system leak rate has been reduced below the applicable threshold.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Leak Repair Verification", "eu": "https://www.epa.gov/section608"
})

questions.append({
    "domain": "EPA 608 Regulations",
    "question": "What type of EPA 608 certification is required to service a supermarket rack refrigeration system containing 500 pounds of R-404A?",
    "options": ["Type I","Type II","Type III","Type II or Universal"],
    "correct": 3,
    "explanation": "A supermarket rack system is classified as <strong>high-pressure equipment</strong>. Type II certification covers high-pressure equipment, and <strong>Universal certification</strong> also includes Type II privileges. Either Type II or Universal certification would be acceptable.",
    "eq": "Type II certification is required for servicing <span class='evidence-highlight'>high-pressure refrigeration equipment</span> such as residential AC systems, commercial refrigeration, and supermarket systems. Universal certification includes all types.",
    "es": "EPA", "ed": "40 CFR Part 82, Subpart F", "esec": "Certification Type Requirements", "eu": "https://www.epa.gov/section608"
})

# Format and append
def fmt(q):
    lines = []
    lines.append('{')
    lines.append('    vendor: "hvac",')
    lines.append(f'    domain: "{q["domain"]}",')
    lines.append(f'    question: "{q["question"]}",')
    lines.append('    options: [')
    for i, opt in enumerate(q["options"]):
        comma = "," if i < 3 else ""
        lines.append(f'        "{opt}"{comma}')
    lines.append('    ],')
    lines.append(f'    correct: {q["correct"]},')
    lines.append(f'    explanation: "{q["explanation"]}",')
    lines.append('    evidence: [{')
    lines.append(f'        quote: "{q["eq"]}",')
    lines.append(f'        source: "{q["es"]}",')
    lines.append(f'        document: "{q["ed"]}",')
    lines.append(f'        section: "{q["esec"]}",')
    lines.append(f'        url: "{q["eu"]}"')
    lines.append('    }]')
    lines.append('}')
    return '\n'.join(lines)

output = ',\n'.join(fmt(q) for q in questions)
with open("C:/Users/cyber.admin/certifications/hvac_questions_extra.js", "a") as f:
    f.write(",\n" + output)

print(f"Appended {len(questions)} EPA 608 questions")
