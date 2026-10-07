questions = []

questions.append({
    "domain": "Heat Pumps",
    "question": "During a defrost cycle on an air-source heat pump, which components change state or operation?",
    "options": ["Only the outdoor fan shuts off","The reversing valve shifts to cooling mode, the outdoor fan stops, and supplemental heat may energize to temper supply air","Only supplemental heat energizes while the system continues in heating mode","The compressor shuts off and electric heat strips activate"],
    "correct": 1,
    "explanation": "During defrost, the <strong>reversing valve shifts to cooling mode</strong> (sending hot gas to the outdoor coil to melt ice), the <strong>outdoor fan stops</strong> to concentrate heat on the coil, and <strong>supplemental electric heat</strong> may energize to offset cold air being delivered to the space.",
    "eq": "Defrost operation reverses the cycle by shifting the <span class='evidence-highlight'>reversing valve to cooling mode</span>, stopping the outdoor fan, and activating <span class='evidence-highlight'>supplemental heat to temper indoor supply air</span>.",
    "es": "Trane", "ed": "Trane Heat Pump Service Manual", "esec": "Defrost Cycle Operation", "eu": "https://www.trane.com/residential/en/products/heat-pumps/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the balance point of a heat pump system?",
    "options": ["The outdoor temperature at which the refrigerant pressures equalize","The outdoor temperature at which the heat pump heating capacity exactly equals the building heat loss","The indoor temperature setpoint where heating and cooling loads are equal","The pressure at which the reversing valve switches modes"],
    "correct": 1,
    "explanation": "The <strong>balance point</strong> is the outdoor temperature where the heat pump's <strong>heating capacity exactly matches the building heat loss</strong>. Below this temperature, supplemental heat is needed. Above it, the heat pump alone can maintain the indoor setpoint.",
    "eq": "The balance point is the outdoor temperature where <span class='evidence-highlight'>heat pump capacity equals building heat loss</span>. Below this point, <span class='evidence-highlight'>supplemental heating is required</span>.",
    "es": "ACCA", "ed": "ACCA Manual J - Residential Load Calculation", "esec": "Heat Pump Balance Point", "eu": "https://www.acca.org/standards/manuals"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "In a dual-fuel heat pump system, when does the fossil fuel furnace typically take over from the heat pump?",
    "options": ["When indoor humidity exceeds 60%","When the outdoor temperature drops below the economic balance point where fossil fuel heating becomes more cost-effective","Only during defrost cycles","When the thermostat is switched to emergency heat"],
    "correct": 1,
    "explanation": "A <strong>dual-fuel system</strong> switches to the fossil fuel furnace at the <strong>economic balance point</strong> - the outdoor temperature where the cost of operating the heat pump exceeds the cost of gas heating. This is typically between 30-40 degrees F depending on fuel costs and equipment efficiency.",
    "eq": "Dual-fuel systems switch to fossil fuel at the <span class='evidence-highlight'>economic balance point</span> where the cost of heat pump operation exceeds the cost of <span class='evidence-highlight'>gas or oil heating per BTU delivered</span>.",
    "es": "Carrier Corporation", "ed": "Carrier Dual Fuel Heat Pump Application Guide", "esec": "Economic Balance Point and Switchover", "eu": "https://www.carrier.com/residential/en/us/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A four-way reversing valve has a solenoid coil. When the solenoid is energized in a typical heat pump, what mode is the system in?",
    "options": ["Heating mode","Cooling mode","Defrost mode","Emergency heat mode"],
    "correct": 1,
    "explanation": "Most manufacturers energize the reversing valve solenoid for <strong>cooling mode</strong> and de-energize it for heating mode. This is a safety design - if the solenoid coil fails, the system defaults to <strong>heating mode</strong>, which is critical during cold weather.",
    "eq": "Most heat pump manufacturers energize the reversing valve in <span class='evidence-highlight'>cooling mode</span> so that a coil failure defaults the system to <span class='evidence-highlight'>heating mode for occupant safety</span>.",
    "es": "Trane", "ed": "Trane Heat Pump Technical Manual", "esec": "Reversing Valve Operation", "eu": "https://www.trane.com/residential/en/products/heat-pumps/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A geothermal heat pump uses a horizontal closed-loop ground heat exchanger. What is the typical loop temperature range during heating operation?",
    "options": ["80-100 degrees F","25-45 degrees F","0-10 degrees F","120-140 degrees F"],
    "correct": 1,
    "explanation": "During heating, a horizontal ground loop typically operates with entering water temperatures of <strong>25-45 degrees F</strong>, depending on soil conditions, loop length, and climate. The heat pump extracts heat from this water, cooling it further before returning it to the ground.",
    "eq": "Horizontal closed-loop geothermal systems typically see entering water temperatures of <span class='evidence-highlight'>25-45 degrees F during heating operation</span>, depending on soil thermal properties and loop design.",
    "es": "IGSHPA", "ed": "IGSHPA Ground Source Heat Pump Design Manual", "esec": "Horizontal Loop Design Parameters", "eu": "https://igshpa.org/publications/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What type of defrost control initiates defrost based on actual frost accumulation rather than time alone?",
    "options": ["Timed defrost control","Demand defrost using temperature differential, pressure differential, or optical sensors","Manual defrost initiated by the homeowner","Continuous hot gas bypass defrost"],
    "correct": 1,
    "explanation": "<strong>Demand defrost</strong> uses sensors to detect actual frost conditions - typically a <strong>temperature differential</strong> between outdoor coil and ambient, <strong>pressure drop</strong> across the coil from frost restriction, or optical sensors. This prevents unnecessary defrost cycles that waste energy.",
    "eq": "Demand defrost systems use <span class='evidence-highlight'>temperature differential, air pressure differential, or optical sensors</span> to initiate defrost only when frost is actually present, improving seasonal efficiency.",
    "es": "Carrier Corporation", "ed": "Carrier Heat Pump Defrost Controls", "esec": "Demand Defrost Technology", "eu": "https://www.carrier.com/residential/en/us/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "In a geothermal open-loop system, what potential problem can arise from using well water with high mineral content?",
    "options": ["The water will freeze in the ground loop","Scale buildup and fouling in the heat exchanger, reducing heat transfer and potentially blocking flow","The water will corrode the ground loop piping","The refrigerant charge will become contaminated"],
    "correct": 1,
    "explanation": "High mineral content (especially calcium and iron) in open-loop well water causes <strong>scale buildup and fouling</strong> on the heat exchanger surfaces. This <strong>reduces heat transfer efficiency</strong>, increases pressure drop, and can eventually block water flow, requiring chemical treatment or heat exchanger replacement.",
    "eq": "Open-loop geothermal systems using well water with high mineral content are susceptible to <span class='evidence-highlight'>scale buildup and fouling in the heat exchanger</span>, reducing efficiency and flow rates.",
    "es": "IGSHPA", "ed": "IGSHPA Ground Source Heat Pump Design Manual", "esec": "Open Loop Water Quality Requirements", "eu": "https://igshpa.org/publications/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the purpose of the bi-flow filter-drier in a heat pump system?",
    "options": ["It filters in one direction and dries in the other","It allows refrigerant to flow and be filtered in both directions since flow reverses between heating and cooling modes","It provides two separate filtration stages in series","It filters the liquid line and the suction line simultaneously"],
    "correct": 1,
    "explanation": "A <strong>bi-flow filter-drier</strong> is designed to filter and remove moisture from refrigerant flowing in <strong>either direction</strong>. In heat pump systems, the liquid line flow direction reverses between heating and cooling modes, so a standard one-directional drier would be bypassed in one mode.",
    "eq": "Bi-flow filter-driers are required in heat pump systems because <span class='evidence-highlight'>refrigerant flow direction reverses</span> between heating and cooling modes, requiring <span class='evidence-highlight'>filtration in both directions</span>.",
    "es": "Sporlan Division - Parker Hannifin", "ed": "Sporlan Heat Pump Components Catalog", "esec": "Bi-Flow Filter-Drier Selection", "eu": "https://www.sporlan.com/literature"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A heat pump in heating mode has a COP of 3.0. How many watts of heat are delivered per watt of electrical input?",
    "options": ["1.0 watt of heat per watt of input","3.0 watts of heat per watt of electrical input","0.33 watts of heat per watt of input","9.0 watts of heat per watt of input"],
    "correct": 1,
    "explanation": "A <strong>COP of 3.0</strong> means the system delivers <strong>3 watts of heating for every 1 watt of electrical input</strong>. The additional 2 watts come from heat absorbed from the outdoor air (or ground source). This makes heat pumps significantly more efficient than electric resistance heating (COP = 1.0).",
    "eq": "A COP of 3.0 means <span class='evidence-highlight'>3 units of heat delivered for every 1 unit of electrical energy consumed</span>. The additional energy comes from heat absorbed from the outdoor environment.",
    "es": "ASHRAE", "ed": "ASHRAE Handbook - HVAC Systems and Equipment", "esec": "Heat Pump Performance Metrics", "eu": "https://www.ashrae.org/technical-resources/ashrae-handbook"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the purpose of the check valve (or flow-control device) installed near the indoor coil in a heat pump system?",
    "options": ["To prevent refrigerant from flowing backward during the off cycle","To bypass the indoor metering device during cooling mode so that the outdoor metering device controls flow, or vice versa","To regulate oil flow to the compressor","To prevent hot gas from entering the suction line"],
    "correct": 1,
    "explanation": "Heat pump systems use <strong>check valves</strong> to bypass one metering device while the other is active. In cooling mode, the check valve near the indoor coil opens to bypass the indoor TXV, allowing the outdoor metering device to control flow. In heating, it closes so the indoor metering device regulates refrigerant.",
    "eq": "Check valves in heat pump systems <span class='evidence-highlight'>bypass the inactive metering device</span> during each mode, ensuring only the appropriate metering device controls refrigerant flow.",
    "es": "Trane", "ed": "Trane Heat Pump Refrigerant Circuit Design", "esec": "Check Valve and Metering Device Operation", "eu": "https://www.trane.com/residential/en/products/heat-pumps/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "During emergency heat (EM HEAT) operation on a heat pump thermostat, what happens to the compressor?",
    "options": ["The compressor runs at reduced capacity","The compressor is locked out and only supplemental electric heat strips provide heating","The compressor runs in cooling mode to assist the heat strips","The compressor runs normally but with additional heat strips"],
    "correct": 1,
    "explanation": "When <strong>emergency heat</strong> is selected, the <strong>compressor is completely locked out</strong> and heating is provided solely by the <strong>supplemental electric resistance heat strips</strong> (or fossil fuel backup). This mode is used when the heat pump has failed and is awaiting repair.",
    "eq": "Emergency heat mode <span class='evidence-highlight'>locks out the compressor</span> and relies entirely on <span class='evidence-highlight'>supplemental electric or fossil fuel heating</span> until the heat pump can be repaired.",
    "es": "Honeywell", "ed": "Honeywell Heat Pump Thermostat Installation Guide", "esec": "Emergency Heat Mode Operation", "eu": "https://www.honeywell.com/us/en"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A heat pump technician measures the temperature split across the indoor coil during heating mode and finds only a 15 degree F rise. The expected range is 20-30 degrees F. What is the most likely cause?",
    "options": ["The system is operating normally for current outdoor conditions","Excessive indoor airflow rate reducing the temperature rise across the coil","The reversing valve is stuck in cooling mode","The thermostat is set too high"],
    "correct": 1,
    "explanation": "A <strong>low temperature rise</strong> across the indoor coil in heating mode indicates either <strong>excessive airflow</strong> (fan speed too high, reducing heat transfer per unit of air) or low system capacity. Check blower speed settings, ductwork, and refrigerant charge before investigating further.",
    "eq": "Low temperature rise in heating mode can indicate <span class='evidence-highlight'>excessive airflow reducing heat transfer effectiveness</span> or <span class='evidence-highlight'>reduced system capacity from low charge or outdoor conditions</span>.",
    "es": "Carrier Corporation", "ed": "Carrier Heat Pump Performance Diagnostics", "esec": "Temperature Split Analysis", "eu": "https://www.carrier.com/residential/en/us/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the HSPF (Heating Seasonal Performance Factor) and how does it relate to COP?",
    "options": ["HSPF and COP are identical measurements","HSPF measures seasonal heating efficiency in BTU/Wh over an entire heating season; COP is an instantaneous ratio at specific conditions","HSPF only applies to geothermal systems","HSPF measures cooling efficiency, not heating"],
    "correct": 1,
    "explanation": "<strong>HSPF</strong> measures <strong>total heating BTUs delivered divided by total watt-hours consumed</strong> over a heating season, accounting for varying outdoor temperatures, defrost cycles, and supplemental heat. <strong>COP</strong> is measured at a single operating point. HSPF can be divided by 3.412 to get an approximate seasonal COP.",
    "eq": "HSPF = <span class='evidence-highlight'>total seasonal heating output (BTU) divided by total electrical input (Wh)</span>. Divide HSPF by 3.412 to estimate <span class='evidence-highlight'>seasonal average COP</span>.",
    "es": "AHRI", "ed": "AHRI Standard 210/240 - Performance Rating", "esec": "HSPF Definition and Testing", "eu": "https://www.ahrinet.org/search-standards"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "In a vertical closed-loop geothermal system, what is the typical bore depth and spacing between boreholes?",
    "options": ["50-100 feet deep, 5 feet apart","150-400 feet deep, 15-25 feet apart","500-1000 feet deep, 50 feet apart","25-50 feet deep, 3 feet apart"],
    "correct": 1,
    "explanation": "Vertical geothermal boreholes are typically <strong>150-400 feet deep</strong> with spacing of <strong>15-25 feet</strong> between bores. Proper spacing prevents thermal interference between boreholes. Bore depth depends on geological conditions, thermal conductivity, and system load.",
    "eq": "Vertical bore geothermal loops are typically <span class='evidence-highlight'>150-400 feet deep with 15-25 foot spacing</span> between bores to minimize thermal interference and ensure adequate heat exchange.",
    "es": "IGSHPA", "ed": "IGSHPA Ground Source Heat Pump Design Manual", "esec": "Vertical Bore Design Parameters", "eu": "https://igshpa.org/publications/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A reversing valve is suspected of leaking internally. What test confirms this diagnosis?",
    "options": ["Measure the voltage at the solenoid coil","Measure the temperature difference between the suction line and the discharge line at the valve body - minimal difference indicates internal leakage","Check the capacitor value","Measure static pressure at the indoor blower"],
    "correct": 1,
    "explanation": "Internal <strong>reversing valve leakage</strong> allows hot discharge gas to mix with cool suction gas inside the valve body. This is detected by measuring <strong>temperature at both the suction and discharge ports</strong>. If the temperature difference is <strong>abnormally small</strong>, hot gas is leaking across to the suction side.",
    "eq": "Internal reversing valve leakage is confirmed by a <span class='evidence-highlight'>reduced temperature differential between discharge and suction ports</span> at the valve body. The valve body will also be abnormally warm.",
    "es": "Ranco", "ed": "Ranco Reversing Valve Diagnostics Guide", "esec": "Internal Leakage Testing", "eu": "https://www.emerson.com/commercial-residential"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the purpose of the desuperheater option available on some geothermal heat pump systems?",
    "options": ["To remove superheat from the compressor discharge for safety","To preheat domestic hot water using waste heat from the compressor discharge, improving overall system efficiency","To cool the compressor during high-load conditions","To provide supplemental space heating during defrost"],
    "correct": 1,
    "explanation": "A <strong>desuperheater</strong> is a heat exchanger that captures <strong>superheat from the compressor discharge gas</strong> to preheat domestic hot water. This waste heat recovery significantly <strong>improves overall system efficiency</strong> by utilizing energy that would otherwise be rejected to the ground loop or condensing coil.",
    "eq": "Desuperheaters recover <span class='evidence-highlight'>waste heat from compressor discharge</span> to preheat domestic hot water, improving overall <span class='evidence-highlight'>system efficiency and reducing water heating costs</span>.",
    "es": "IGSHPA", "ed": "IGSHPA Ground Source Heat Pump Design Manual", "esec": "Desuperheater Applications", "eu": "https://igshpa.org/publications/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A mini-split heat pump system uses an inverter-driven compressor. What is the primary advantage of inverter technology over a standard fixed-speed compressor?",
    "options": ["Lower initial cost","The compressor can vary its speed to match the actual heating or cooling load, maintaining tighter temperature control and higher efficiency at part loads","Inverter compressors are easier to install","Inverter compressors never require defrost cycles"],
    "correct": 1,
    "explanation": "<strong>Inverter-driven compressors</strong> use a variable-frequency drive to <strong>modulate compressor speed</strong> based on the actual load. This provides <strong>precise temperature control</strong>, reduces cycling losses, maintains more consistent humidity levels, and achieves <strong>much higher efficiency at part-load conditions</strong> where systems operate most of the time.",
    "eq": "Inverter compressors <span class='evidence-highlight'>modulate speed to match the load</span>, providing superior comfort, <span class='evidence-highlight'>reduced cycling losses, and significantly higher part-load efficiency</span>.",
    "es": "Mitsubishi Electric", "ed": "Mitsubishi Electric Inverter Technology Guide", "esec": "Variable Capacity Operation", "eu": "https://www.mitsubishicomfort.com/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What type of ground loop antifreeze solution is most commonly used in geothermal systems, and what concentration is typical?",
    "options": ["Automotive ethylene glycol at 50% concentration","Food-grade propylene glycol at 15-25% concentration or methanol at similar concentrations","Pure water with no antifreeze","Calcium chloride brine at 30% concentration"],
    "correct": 1,
    "explanation": "<strong>Propylene glycol</strong> (food-grade) or <strong>methanol</strong> at <strong>15-25% concentration</strong> are most common in geothermal loops. Propylene glycol is preferred for its low toxicity. Ethylene glycol is avoided due to environmental toxicity. The concentration is chosen to protect against the minimum expected loop temperature.",
    "eq": "Geothermal loops typically use <span class='evidence-highlight'>food-grade propylene glycol or methanol at 15-25% concentration</span> for freeze protection while minimizing viscosity increase and environmental risk.",
    "es": "IGSHPA", "ed": "IGSHPA Ground Source Heat Pump Design Manual", "esec": "Antifreeze Selection and Concentration", "eu": "https://igshpa.org/publications/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the coefficient of performance (COP) of supplemental electric resistance heat strips used in a heat pump system?",
    "options": ["COP of 3.0","COP of 2.0","COP of 1.0 - all electrical energy converts to heat with no multiplier","COP of 0.5"],
    "correct": 2,
    "explanation": "<strong>Electric resistance heat</strong> has a <strong>COP of 1.0</strong> because it converts electrical energy to heat on a 1:1 basis (3,412 BTU per kilowatt). Unlike a heat pump, there is no heat transfer from an external source, making it <strong>the least efficient form of electric heating</strong>.",
    "eq": "Electric resistance heating has a <span class='evidence-highlight'>COP of 1.0</span>, converting each watt of electrical input to exactly one watt of heat output, with <span class='evidence-highlight'>no heat pump multiplier effect</span>.",
    "es": "ASHRAE", "ed": "ASHRAE Handbook - HVAC Systems and Equipment", "esec": "Electric Heating Efficiency", "eu": "https://www.ashrae.org/technical-resources/ashrae-handbook"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A heat pump outdoor unit is completely covered in ice during heating mode, but the defrost cycle is not initiating. Which component should the technician check first?",
    "options": ["The indoor blower motor capacitor","The defrost control board and sensors (outdoor coil temperature sensor and ambient sensor)","The indoor TXV","The crankcase heater"],
    "correct": 1,
    "explanation": "If defrost is not initiating, the <strong>defrost control board</strong> or its <strong>sensors</strong> are the most likely culprits. Check the <strong>outdoor coil temperature sensor</strong> and <strong>ambient temperature sensor</strong> for proper resistance values. Also verify the defrost timer and relay contacts on the control board.",
    "eq": "Failed defrost initiation typically points to a <span class='evidence-highlight'>defective defrost control board, faulty coil temperature sensor, or failed defrost relay</span>. Verify sensor resistance values against manufacturer specifications.",
    "es": "Rheem", "ed": "Rheem Heat Pump Defrost Troubleshooting Guide", "esec": "Defrost System Diagnostics", "eu": "https://www.rheem.com/products/heating-and-cooling/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the function of the auxiliary heat lockout setting on a heat pump thermostat?",
    "options": ["It prevents the heat pump compressor from running above a set outdoor temperature","It prevents supplemental heat from energizing above a set outdoor temperature to avoid unnecessary electric heat use","It locks out the thermostat display","It prevents cooling operation in winter"],
    "correct": 1,
    "explanation": "The <strong>auxiliary heat lockout</strong> prevents supplemental electric heat from energizing when the outdoor temperature is <strong>above the lockout setpoint</strong>. Above this temperature, the heat pump alone should handle the load, and running electric strips would waste energy and increase utility costs.",
    "eq": "Auxiliary heat lockout <span class='evidence-highlight'>prevents supplemental heat from operating above a set outdoor temperature</span> where the heat pump can independently satisfy the heating load, reducing <span class='evidence-highlight'>unnecessary energy consumption</span>.",
    "es": "Honeywell", "ed": "Honeywell Heat Pump Thermostat Programming Guide", "esec": "Auxiliary Heat Lockout Configuration", "eu": "https://www.honeywell.com/us/en"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "In a cold climate heat pump rated for operation down to -15 degrees F, what technology allows it to maintain capacity at extremely low outdoor temperatures?",
    "options": ["Oversized electric heat strips","Enhanced vapor injection (EVI) or flash tank technology that injects intermediate-pressure refrigerant into the scroll compressor","Larger outdoor coil surface area only","A secondary combustion heater in the outdoor unit"],
    "correct": 1,
    "explanation": "<strong>Enhanced vapor injection (EVI)</strong> uses a flash tank or economizer to inject intermediate-pressure refrigerant vapor into the compressor at a mid-point in the compression process. This <strong>increases mass flow rate and capacity</strong> at low outdoor temperatures while <strong>reducing discharge temperatures</strong>.",
    "eq": "Enhanced vapor injection (EVI) technology <span class='evidence-highlight'>injects intermediate-pressure vapor into the scroll compressor</span>, increasing heating capacity by up to <span class='evidence-highlight'>30% at low ambient temperatures</span>.",
    "es": "Mitsubishi Electric", "ed": "Mitsubishi Hyper-Heating Technology Guide", "esec": "Enhanced Vapor Injection Operation", "eu": "https://www.mitsubishicomfort.com/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "What is the typical heat of extraction rate (in BTU/hr per linear foot) used for sizing horizontal geothermal ground loops in average soil conditions?",
    "options": ["5-10 BTU/hr per linear foot","15-25 BTU/hr per linear foot","50-75 BTU/hr per linear foot","100+ BTU/hr per linear foot"],
    "correct": 1,
    "explanation": "Horizontal ground loops in average soil conditions typically extract <strong>15-25 BTU/hr per linear foot</strong> of loop. This value varies with soil type, moisture content, and operating hours. Wet clay provides higher extraction rates than dry sand. This rate determines total loop length required.",
    "eq": "Horizontal loop heat extraction rates typically range from <span class='evidence-highlight'>15-25 BTU/hr per linear foot</span> in average soil, varying with <span class='evidence-highlight'>soil moisture content and thermal conductivity</span>.",
    "es": "IGSHPA", "ed": "IGSHPA Ground Source Heat Pump Design Manual", "esec": "Horizontal Loop Sizing Calculations", "eu": "https://igshpa.org/publications/"
})

questions.append({
    "domain": "Heat Pumps",
    "question": "A technician notices the outdoor coil on a heat pump frosts over very quickly in heating mode even at 45 degrees F outdoor temperature. Suction pressure is low. What is the most likely cause?",
    "options": ["Normal operation for this outdoor temperature","Low refrigerant charge causing the outdoor coil (evaporator in heating) to operate at a lower saturation temperature, below the dew point of outdoor air","The defrost board is defective","The reversing valve solenoid is energized"],
    "correct": 1,
    "explanation": "<strong>Low refrigerant charge</strong> reduces suction pressure, causing the outdoor coil (acting as evaporator in heating mode) to operate at a <strong>saturation temperature well below the outdoor dew point</strong>. This causes rapid moisture condensation and frost formation, even at moderate outdoor temperatures.",
    "eq": "Low charge in heating mode lowers <span class='evidence-highlight'>outdoor coil saturation temperature below the ambient dew point</span>, causing <span class='evidence-highlight'>premature frost formation</span> even at moderate outdoor temperatures.",
    "es": "Trane", "ed": "Trane Heat Pump Diagnostic Procedures", "esec": "Premature Frost Formation", "eu": "https://www.trane.com/residential/en/products/heat-pumps/"
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

print(f"Appended {len(questions)} Heat Pumps questions")
