questions = []
questions.append({
    "domain": "Heat Pumps",
    "question": "When a heat pump operates in heating mode during mild weather (50 degrees F outdoor), the head pressure is lower than typical cooling mode operation. How does this affect the TXV operation at the indoor coil?",
    "options": ["The TXV operates normally since it self-adjusts","The lower head pressure reduces liquid pressure at the TXV inlet, potentially causing the valve to underfeed and starve the indoor coil","The TXV fully opens and floods the indoor coil","The TXV shuts completely to prevent compressor damage"],
    "correct": 1,
    "explanation": "During mild-weather heating, <strong>lower condensing (head) pressure</strong> means lower pressure at the <strong>TXV inlet</strong>. With less pressure differential across the valve, the TXV may <strong>underfeed the indoor coil</strong>, leading to high superheat and reduced capacity. Some systems use a head pressure control to maintain minimum condensing pressure.",
    "eq": "Low condensing pressure in heating mode reduces <span class='evidence-highlight'>pressure differential across the indoor TXV</span>, potentially causing underfeeding and <span class='evidence-highlight'>reduced heating capacity at mild outdoor temperatures</span>.",
    "es": "Sporlan Division - Parker Hannifin", "ed": "Sporlan TXV Application in Heat Pump Systems", "esec": "Low Head Pressure Operation", "eu": "https://www.sporlan.com/literature"
})

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
print(f"Appended {len(questions)} additional Heat Pump question(s)")
