{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A security analyst notices that an employee's workstation is sending DNS queries to an external server at regular 60-second intervals, even when the user is not actively browsing. The queries contain encoded strings in the subdomain field. What type of attack is most likely occurring?",
    options: [
        "DNS poisoning",
        "DNS tunneling for data exfiltration",
        "DNS amplification attack",
        "Domain hijacking"
    ],
    correct: 1,
    explanation: "<strong>DNS tunneling</strong> encodes data within DNS queries, typically using the subdomain field, to exfiltrate information or establish covert command-and-control channels. The regular interval and encoded strings are classic indicators of <strong>beaconing behavior</strong> associated with DNS tunneling.",
    evidence: [{
        quote: "Adversaries may use <span class='evidence-highlight'>DNS tunneling to encode data within DNS queries</span> to bypass network security controls and exfiltrate data.",
        source: "MITRE ATT&CK",
        document: "MITRE ATT&CK Framework",
        section: "T1071.004 - Application Layer Protocol: DNS",
        url: "https://attack.mitre.org/techniques/T1071/004/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker sends a crafted HTTP request containing ' OR '1'='1' -- in the login form's username field. What type of attack is being attempted?",
    options: [
        "Cross-site scripting (XSS)",
        "SQL injection",
        "Cross-site request forgery (CSRF)",
        "LDAP injection"
    ],
    correct: 1,
    explanation: "<strong>SQL injection (SQLi)</strong> manipulates backend SQL queries by injecting malicious SQL statements through user input fields. The payload <strong>' OR '1'='1' --</strong> attempts to bypass authentication by making the WHERE clause always evaluate to true.",
    evidence: [{
        quote: "SQL injection attacks involve <span class='evidence-highlight'>inserting malicious SQL statements into entry fields</span> for execution by the backend database.",
        source: "OWASP",
        document: "OWASP Top 10 2021",
        section: "A03:2021 - Injection",
        url: "https://owasp.org/Top10/A03_2021-Injection/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A user reports receiving an email that appears to be from the company's CEO, requesting an urgent wire transfer to a new vendor account. The email address domain is one character different from the company's actual domain. What is this attack called?",
    options: [
        "Whaling",
        "Spear phishing",
        "Business email compromise (BEC)",
        "Vishing"
    ],
    correct: 2,
    explanation: "<strong>Business Email Compromise (BEC)</strong> involves attackers impersonating executives or trusted parties using lookalike domains to trick employees into making fraudulent financial transactions. While this is also a form of spear phishing, the use of a <strong>typosquatted domain</strong> and financial fraud focus makes BEC the most specific answer.",
    evidence: [{
        quote: "BEC scams use <span class='evidence-highlight'>spoofed or compromised email accounts to impersonate executives</span> and request fraudulent wire transfers.",
        source: "FBI IC3",
        document: "Internet Crime Report",
        section: "Business Email Compromise",
        url: "https://www.ic3.gov/Media/Y2023/PSA230609"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A hospital's network is hit by malware that encrypts all patient records and displays a message demanding 5 Bitcoin for the decryption key. The malware spread through an SMB vulnerability. What TWO classifications best describe this threat?",
    options: [
        "Ransomware and worm",
        "Trojan and adware",
        "Rootkit and spyware",
        "Logic bomb and fileless malware"
    ],
    correct: 0,
    explanation: "The malware is <strong>ransomware</strong> because it encrypts files and demands payment, and it behaves as a <strong>worm</strong> because it self-propagates across the network using the SMB vulnerability without user interaction, similar to <strong>WannaCry</strong>.",
    evidence: [{
        quote: "Ransomware that <span class='evidence-highlight'>self-propagates using network vulnerabilities</span> combines the characteristics of both ransomware and worm malware types.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.2 - Types of Attacks",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker places a rogue wireless access point with the same SSID as the corporate network in the parking lot. When employees connect, the attacker captures their credentials. What is this attack called?",
    options: [
        "Bluesnarfing",
        "Evil twin attack",
        "Wardriving",
        "Deauthentication attack"
    ],
    correct: 1,
    explanation: "An <strong>evil twin attack</strong> involves setting up a rogue access point that mimics a legitimate network's SSID. Unsuspecting users connect to the malicious AP, allowing the attacker to perform <strong>man-in-the-middle attacks</strong> and capture credentials.",
    evidence: [{
        quote: "An evil twin is a <span class='evidence-highlight'>fraudulent Wi-Fi access point that appears legitimate</span> but is set up to eavesdrop on wireless communications.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.4 - Network Attacks",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A web application reflects user input directly in the HTML response without sanitization. An attacker crafts a URL containing <script>document.cookie</script> and sends it to a victim. What type of XSS attack is this?",
    options: [
        "Stored XSS",
        "DOM-based XSS",
        "Reflected XSS",
        "Persistent XSS"
    ],
    correct: 2,
    explanation: "<strong>Reflected XSS</strong> occurs when malicious input is immediately returned by the web application in the response without proper sanitization. The payload is not stored on the server but is <strong>reflected back</strong> to the user via a crafted URL.",
    evidence: [{
        quote: "Reflected XSS occurs when <span class='evidence-highlight'>user-supplied data is immediately returned in the response</span> without being stored or validated.",
        source: "OWASP",
        document: "OWASP Testing Guide v4",
        section: "Testing for Reflected Cross Site Scripting",
        url: "https://owasp.org/www-project-web-security-testing-guide/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A company discovers that a recent software update from a trusted vendor contained a backdoor. The vendor's build server had been compromised months earlier. What type of attack vector does this represent?",
    options: [
        "Watering hole attack",
        "Island hopping",
        "Supply chain attack",
        "Privilege escalation"
    ],
    correct: 2,
    explanation: "A <strong>supply chain attack</strong> targets the less-secure elements in a supply chain, such as a vendor's build infrastructure. The <strong>SolarWinds attack</strong> is a prominent example where attackers compromised the software build process to distribute malicious updates.",
    evidence: [{
        quote: "Supply chain attacks target <span class='evidence-highlight'>third-party vendors and suppliers</span> to compromise the integrity of products before they reach the end consumer.",
        source: "NIST",
        document: "NIST SP 800-161r1",
        section: "Cybersecurity Supply Chain Risk Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker sends thousands of SYN packets to a web server but never completes the three-way handshake. The server's connection table fills up, and legitimate users cannot connect. What type of attack is this?",
    options: [
        "SYN flood attack",
        "Smurf attack",
        "Ping of Death",
        "Teardrop attack"
    ],
    correct: 0,
    explanation: "A <strong>SYN flood</strong> is a type of DoS attack that exploits the TCP three-way handshake by sending numerous SYN requests without completing the connection. This exhausts the server's <strong>half-open connection table</strong> and prevents legitimate connections.",
    evidence: [{
        quote: "A SYN flood attack sends <span class='evidence-highlight'>a succession of SYN requests to a target</span>, consuming resources and making the system unresponsive to legitimate traffic.",
        source: "NIST",
        document: "NIST SP 800-94",
        section: "Network-Based Attack Techniques",
        url: "https://csrc.nist.gov/publications/detail/sp/800-94/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A penetration tester discovers that an IoT thermostat in a corporate office is using default credentials and communicating over unencrypted HTTP. Which vulnerability category is the PRIMARY concern?",
    options: [
        "Cryptographic failure",
        "Insecure default configuration",
        "Race condition",
        "Buffer overflow"
    ],
    correct: 1,
    explanation: "<strong>Insecure default configurations</strong> including default credentials are a primary vulnerability in IoT devices. Many IoT devices ship with well-known default usernames and passwords that are never changed, making them easy targets for attackers.",
    evidence: [{
        quote: "IoT devices frequently have <span class='evidence-highlight'>weak default credentials and lack basic security configurations</span>, making them vulnerable to unauthorized access.",
        source: "OWASP",
        document: "OWASP IoT Top 10",
        section: "I1 - Weak, Guessable, or Hardcoded Passwords",
        url: "https://owasp.org/www-project-internet-of-things/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An organization's threat intelligence team receives an indicator of compromise (IoC) consisting of a SHA-256 hash associated with a known APT group's malware. What should the team do FIRST with this information?",
    options: [
        "Block the hash at the endpoint protection platform",
        "Search historical logs for the hash across all systems",
        "Publish the hash on social media to warn others",
        "Ignore it since it is a known threat"
    ],
    correct: 1,
    explanation: "The first step should be to <strong>search historical logs</strong> to determine if the organization has already been compromised. Blocking the hash is important but <strong>detection and scoping</strong> should come before prevention to understand the extent of any potential breach.",
    evidence: [{
        quote: "When receiving threat intelligence, organizations should first <span class='evidence-highlight'>search for indicators of compromise within their environment</span> to determine if they have been affected.",
        source: "NIST",
        document: "NIST SP 800-150",
        section: "Guide to Cyber Threat Information Sharing",
        url: "https://csrc.nist.gov/publications/detail/sp/800-150/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A malware analyst discovers that a sample creates a hidden process that intercepts all keyboard input and periodically sends the captured data to a remote server. What type of malware is this?",
    options: [
        "Ransomware",
        "Keylogger",
        "Rootkit",
        "Adware"
    ],
    correct: 1,
    explanation: "A <strong>keylogger</strong> is a type of spyware that records keystrokes and transmits them to an attacker. This allows the attacker to capture sensitive information including <strong>passwords, credit card numbers, and personal communications</strong>.",
    evidence: [{
        quote: "Keyloggers <span class='evidence-highlight'>capture and record user keystrokes</span>, which can include credentials and other sensitive data.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.2 - Malware Types",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker intercepts communication between a client and a banking website by presenting a fraudulent certificate. The client's browser does not show a warning because the attacker compromised a trusted CA. What attack is this?",
    options: [
        "SSL stripping",
        "Man-in-the-middle with certificate forgery",
        "Session hijacking",
        "Replay attack"
    ],
    correct: 1,
    explanation: "A <strong>man-in-the-middle (MitM) attack with certificate forgery</strong> occurs when an attacker uses a compromised or rogue Certificate Authority to issue fraudulent certificates. Since the CA is trusted by the browser, <strong>no warnings are displayed</strong> to the victim.",
    evidence: [{
        quote: "If an attacker compromises a CA, they can issue <span class='evidence-highlight'>fraudulent certificates that appear valid</span> to clients, enabling undetectable MitM attacks.",
        source: "NIST",
        document: "NIST SP 800-52 Rev 2",
        section: "TLS Server Certificate Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An organization notices that several user accounts are being locked out simultaneously every morning at 3 AM. Investigation reveals login attempts using a list of common passwords against all known usernames. What type of attack is this?",
    options: [
        "Brute force attack",
        "Password spraying",
        "Credential stuffing",
        "Dictionary attack"
    ],
    correct: 1,
    explanation: "<strong>Password spraying</strong> attempts a small number of commonly used passwords against many accounts simultaneously. Unlike brute force, it tries few passwords per account to avoid lockouts, though in this case the sheer volume triggered lockouts.",
    evidence: [{
        quote: "Password spraying uses <span class='evidence-highlight'>a small number of common passwords against many accounts</span> to avoid individual account lockout thresholds.",
        source: "MITRE ATT&CK",
        document: "MITRE ATT&CK Framework",
        section: "T1110.003 - Brute Force: Password Spraying",
        url: "https://attack.mitre.org/techniques/T1110/003/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A security researcher finds that a popular JavaScript library used by thousands of websites has been modified to include cryptocurrency mining code. The library maintainer's npm account was compromised. What type of threat does this represent?",
    options: [
        "Cryptojacking via supply chain compromise",
        "Ransomware deployment",
        "Watering hole attack",
        "Drive-by download"
    ],
    correct: 0,
    explanation: "This is <strong>cryptojacking via supply chain compromise</strong>. The attacker compromised a trusted upstream dependency to inject cryptocurrency mining code, which is then unknowingly distributed to all downstream consumers of the library.",
    evidence: [{
        quote: "Cryptojacking through <span class='evidence-highlight'>compromised third-party libraries</span> represents a supply chain attack that leverages trust in upstream dependencies.",
        source: "NIST",
        document: "NIST SP 800-161r1",
        section: "Supply Chain Attack Vectors",
        url: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An employee receives a phone call from someone claiming to be from IT support, asking for their password to fix a server issue. The caller uses urgent language and mentions the employee's manager by name. What social engineering technique is being used?",
    options: [
        "Tailgating",
        "Pretexting",
        "Baiting",
        "Shoulder surfing"
    ],
    correct: 1,
    explanation: "<strong>Pretexting</strong> involves creating a fabricated scenario (pretext) to engage a victim and extract information. The attacker impersonates IT staff and uses social details like the manager's name to build credibility and create urgency.",
    evidence: [{
        quote: "Pretexting is a social engineering technique where the attacker <span class='evidence-highlight'>creates a fabricated scenario to steal personal information</span> or gain access.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.1 - Social Engineering Techniques",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A web application stores session tokens in the URL query string. An attacker obtains a valid session token from a shared link posted on social media. What vulnerability enables this attack?",
    options: [
        "Insecure direct object reference",
        "Session fixation",
        "Broken access control through URL-based session management",
        "Server-side request forgery"
    ],
    correct: 2,
    explanation: "<strong>Broken access control through URL-based session management</strong> occurs when session tokens are placed in URLs instead of secure cookies. These tokens can be leaked through browser history, referrer headers, shared links, and server logs.",
    evidence: [{
        quote: "Session identifiers should not be <span class='evidence-highlight'>exposed in the URL</span> as they can be leaked through browser history, logs, and referrer headers.",
        source: "OWASP",
        document: "OWASP Session Management Cheat Sheet",
        section: "Session ID Properties",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker gains access to a corporate network and remains undetected for 8 months, slowly exfiltrating intellectual property. The attacker uses legitimate admin tools and living-off-the-land techniques. What type of threat actor does this describe?",
    options: [
        "Script kiddie",
        "Hacktivist",
        "Advanced persistent threat (APT)",
        "Insider threat"
    ],
    correct: 2,
    explanation: "<strong>Advanced Persistent Threats (APTs)</strong> are characterized by prolonged, targeted attacks using sophisticated techniques. They often use <strong>living-off-the-land binaries (LOLBins)</strong> and legitimate tools to evade detection while maintaining long-term access.",
    evidence: [{
        quote: "APTs are characterized by <span class='evidence-highlight'>long dwell times, sophisticated techniques, and specific targeting</span> of high-value organizations for espionage or data theft.",
        source: "NIST",
        document: "NIST SP 800-39",
        section: "Threat Sources",
        url: "https://csrc.nist.gov/publications/detail/sp/800-39/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A website allows users to upload profile pictures. An attacker uploads a PHP file renamed with a .jpg extension that contains web shell code. The server executes the PHP despite the extension. What vulnerability class does this exploit?",
    options: [
        "Directory traversal",
        "Unrestricted file upload",
        "XML external entity (XXE) injection",
        "Server-side template injection"
    ],
    correct: 1,
    explanation: "<strong>Unrestricted file upload</strong> vulnerabilities occur when applications fail to properly validate file types, content, and extensions. Attackers can upload malicious scripts that the server may execute, resulting in <strong>remote code execution (RCE)</strong>.",
    evidence: [{
        quote: "Unrestricted file upload allows attackers to <span class='evidence-highlight'>upload malicious files that can be executed on the server</span>, leading to complete system compromise.",
        source: "OWASP",
        document: "OWASP Top 10 2021",
        section: "A04:2021 - Insecure Design",
        url: "https://owasp.org/Top10/A04_2021-Insecure_Design/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A security team discovers that attackers are using a compromised IoT camera's firmware update mechanism to deploy a botnet agent. The camera lacks code signing for firmware updates. What is the PRIMARY mitigation?",
    options: [
        "Implement network segmentation for IoT devices",
        "Enable firmware code signing and verification",
        "Change the default password on the camera",
        "Install antivirus software on the camera"
    ],
    correct: 1,
    explanation: "<strong>Firmware code signing and verification</strong> ensures that only authenticated, unmodified firmware can be installed on the device. This directly prevents attackers from pushing malicious firmware updates to IoT devices.",
    evidence: [{
        quote: "Code signing for firmware updates ensures that <span class='evidence-highlight'>only authorized and verified firmware can be installed</span>, preventing malicious firmware injection.",
        source: "NIST",
        document: "NIST SP 800-183",
        section: "IoT Security Recommendations",
        url: "https://csrc.nist.gov/publications/detail/sp/800-183/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker targets a company by compromising the website of a niche industry conference that employees frequently visit. Malware is placed on the conference site to infect visitors. What type of attack is this?",
    options: [
        "Phishing",
        "Watering hole attack",
        "Drive-by download",
        "Typosquatting"
    ],
    correct: 1,
    explanation: "A <strong>watering hole attack</strong> targets a specific group by compromising websites that group members are known to visit. The term comes from predators waiting at a watering hole for prey, analogous to attackers <strong>lying in wait on trusted sites</strong>.",
    evidence: [{
        quote: "Watering hole attacks compromise <span class='evidence-highlight'>websites frequently visited by targeted groups</span> to deliver malware to specific organizations or industries.",
        source: "MITRE ATT&CK",
        document: "MITRE ATT&CK Framework",
        section: "T1189 - Drive-by Compromise",
        url: "https://attack.mitre.org/techniques/T1189/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A security analyst discovers PowerShell scripts running in memory that download additional payloads but leave no files on disk. What type of malware technique is being used?",
    options: [
        "Polymorphic malware",
        "Fileless malware",
        "Macro virus",
        "Boot sector virus"
    ],
    correct: 1,
    explanation: "<strong>Fileless malware</strong> operates entirely in memory and uses legitimate system tools like PowerShell to execute malicious actions. Since it leaves no files on disk, it is extremely difficult to detect with <strong>traditional signature-based antivirus</strong>.",
    evidence: [{
        quote: "Fileless malware <span class='evidence-highlight'>resides solely in memory and leverages legitimate system tools</span>, making it difficult to detect with traditional file-based security solutions.",
        source: "MITRE ATT&CK",
        document: "MITRE ATT&CK Framework",
        section: "T1059.001 - PowerShell",
        url: "https://attack.mitre.org/techniques/T1059/001/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An application is vulnerable to an attack where the attacker injects a forged HTTP request from a trusted user's browser to a different web application where the user is authenticated. What is this attack?",
    options: [
        "Cross-site scripting (XSS)",
        "SQL injection",
        "Cross-site request forgery (CSRF)",
        "HTTP response splitting"
    ],
    correct: 2,
    explanation: "<strong>Cross-Site Request Forgery (CSRF)</strong> tricks a user's browser into sending unauthorized requests to a web application where the user is already authenticated. The attack exploits the <strong>trust that the site has in the user's browser</strong>.",
    evidence: [{
        quote: "CSRF attacks <span class='evidence-highlight'>force authenticated users to submit requests</span> they did not intend to make, exploiting the trust a site has in the user's browser.",
        source: "OWASP",
        document: "OWASP Top 10 2021",
        section: "Cross-Site Request Forgery Prevention",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker modifies the ARP table on a switch to associate their MAC address with the IP address of the default gateway. All traffic intended for the gateway now flows through the attacker's machine. What is this attack?",
    options: [
        "MAC flooding",
        "ARP poisoning",
        "VLAN hopping",
        "IP spoofing"
    ],
    correct: 1,
    explanation: "<strong>ARP poisoning (ARP spoofing)</strong> involves sending falsified ARP messages to link the attacker's MAC address with a legitimate IP address. This allows the attacker to <strong>intercept, modify, or stop data in transit</strong> as a man-in-the-middle.",
    evidence: [{
        quote: "ARP spoofing sends <span class='evidence-highlight'>falsified ARP messages to associate the attacker's MAC address</span> with the IP of a legitimate network device.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.4 - Network Attacks",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "During a penetration test, the tester finds that an API endpoint returns detailed error messages including stack traces, database schema information, and internal IP addresses. What vulnerability does this represent?",
    options: [
        "Broken authentication",
        "Improper error handling / information disclosure",
        "Insecure deserialization",
        "Insufficient logging"
    ],
    correct: 1,
    explanation: "<strong>Improper error handling</strong> leads to information disclosure when verbose error messages expose internal system details. Stack traces, database schemas, and internal IPs provide attackers with valuable <strong>reconnaissance information</strong> for further attacks.",
    evidence: [{
        quote: "Verbose error messages can <span class='evidence-highlight'>reveal internal implementation details</span> that attackers can use to refine their attacks.",
        source: "OWASP",
        document: "OWASP Top 10 2021",
        section: "A05:2021 - Security Misconfiguration",
        url: "https://owasp.org/Top10/A05_2021-Security_Misconfiguration/"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A malware sample is observed changing its binary signature each time it replicates, while maintaining the same functionality. What type of malware is this?",
    options: [
        "Metamorphic malware",
        "Polymorphic malware",
        "Armored virus",
        "Stealth virus"
    ],
    correct: 1,
    explanation: "<strong>Polymorphic malware</strong> changes its code signature with each replication using mutation engines while preserving its core functionality. This technique evades <strong>signature-based detection</strong> by ensuring no two copies are identical.",
    evidence: [{
        quote: "Polymorphic malware <span class='evidence-highlight'>changes its signature each time it replicates</span> while maintaining the same malicious functionality.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.2 - Malware Types",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker compromises an HVAC vendor's VPN credentials to gain access to a retail company's payment processing network. This is an example of which attack vector?",
    options: [
        "Direct access attack",
        "Third-party/vendor attack vector",
        "Wireless attack vector",
        "Physical attack vector"
    ],
    correct: 1,
    explanation: "This is a <strong>third-party/vendor attack vector</strong>, similar to the Target breach where attackers used compromised HVAC vendor credentials. Organizations must assess and monitor <strong>vendor access</strong> as part of their security program.",
    evidence: [{
        quote: "Third-party vendor access represents a significant <span class='evidence-highlight'>attack vector when vendor credentials are compromised</span> and used to access customer networks.",
        source: "NIST",
        document: "NIST SP 800-161r1",
        section: "Third-Party Risk Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A race condition vulnerability exists in a banking application where two simultaneous withdrawal requests can both succeed even when the account has insufficient funds for both. What is this type of vulnerability called?",
    options: [
        "Buffer overflow",
        "Time-of-check to time-of-use (TOCTOU)",
        "Integer overflow",
        "Use-after-free"
    ],
    correct: 1,
    explanation: "<strong>Time-of-Check to Time-of-Use (TOCTOU)</strong> is a race condition where the state can change between the time a condition is checked and the time the result is used. Both transactions check the balance before either deducts, allowing both to proceed.",
    evidence: [{
        quote: "TOCTOU vulnerabilities occur when <span class='evidence-highlight'>the state of a resource changes between the check and the use</span>, leading to inconsistent operations.",
        source: "NIST",
        document: "NIST NVD CWE Database",
        section: "CWE-367: Time-of-check Time-of-use Race Condition",
        url: "https://cwe.mitre.org/data/definitions/367.html"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker uses Shodan to find internet-facing SCADA systems controlling water treatment facilities. Several are accessible with default credentials. What category of threat does this scenario represent?",
    options: [
        "Cloud security threat",
        "ICS/SCADA vulnerability exploitation",
        "Mobile device threat",
        "Social media threat"
    ],
    correct: 1,
    explanation: "<strong>ICS/SCADA vulnerability exploitation</strong> targets industrial control systems. Internet-exposed SCADA systems with default credentials represent a critical threat to <strong>operational technology (OT) environments</strong> and critical infrastructure.",
    evidence: [{
        quote: "Internet-facing ICS/SCADA systems with <span class='evidence-highlight'>default credentials present critical vulnerabilities</span> to national infrastructure and public safety.",
        source: "CISA",
        document: "CISA ICS-CERT Advisories",
        section: "ICS Security Best Practices",
        url: "https://www.cisa.gov/topics/industrial-control-systems"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "A disgruntled employee schedules a script to delete critical database tables 30 days after their employment termination date. What type of malware has the employee planted?",
    options: [
        "Trojan horse",
        "Logic bomb",
        "Time bomb",
        "Worm"
    ],
    correct: 1,
    explanation: "A <strong>logic bomb</strong> is malicious code that activates when specific conditions are met, such as a date or event. When triggered by a time condition, it may also be called a time bomb, but <strong>logic bomb</strong> is the broader and more accepted term for the SY0-701 exam.",
    evidence: [{
        quote: "A logic bomb is <span class='evidence-highlight'>code that executes when predetermined conditions are met</span>, often used by malicious insiders to cause damage after their departure.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.2 - Malware Types",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Threats & Vulnerabilities",
    question: "An attacker sends a specially crafted input to a C program that writes beyond the allocated memory buffer, overwriting the return address on the stack to redirect execution to malicious shellcode. What vulnerability is being exploited?",
    options: [
        "SQL injection",
        "Buffer overflow",
        "Format string vulnerability",
        "Heap spray"
    ],
    correct: 1,
    explanation: "A <strong>buffer overflow</strong> occurs when data written to a buffer exceeds its allocated size, overwriting adjacent memory. Stack-based buffer overflows can overwrite the <strong>return address to redirect execution flow</strong> to attacker-controlled code.",
    evidence: [{
        quote: "Buffer overflow vulnerabilities allow attackers to <span class='evidence-highlight'>overwrite memory beyond allocated boundaries</span>, potentially gaining control of program execution.",
        source: "NIST",
        document: "NIST NVD CWE Database",
        section: "CWE-120: Buffer Copy without Checking Size of Input",
        url: "https://cwe.mitre.org/data/definitions/120.html"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A security architect is designing a network for a financial institution. They want to ensure that the web servers accessible from the internet are separated from the internal database servers. What network architecture concept should they implement?",
    options: [
        "Software-defined networking",
        "Demilitarized zone (DMZ)",
        "Virtual private cloud",
        "Content delivery network"
    ],
    correct: 1,
    explanation: "A <strong>Demilitarized Zone (DMZ)</strong> is a network segment that sits between the external internet and the internal network. Public-facing servers like web servers are placed in the DMZ, while sensitive systems like databases remain on the <strong>internal network</strong>.",
    evidence: [{
        quote: "A DMZ provides a <span class='evidence-highlight'>buffer zone between untrusted external networks and trusted internal networks</span>, hosting public-facing services.",
        source: "NIST",
        document: "NIST SP 800-41 Rev 1",
        section: "Firewall Architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An organization is adopting a security model where no user or device is automatically trusted, regardless of whether they are inside or outside the corporate network. Every access request must be verified. What security model is this?",
    options: [
        "Defense in depth",
        "Zero trust architecture",
        "Bell-LaPadula model",
        "Biba integrity model"
    ],
    correct: 1,
    explanation: "<strong>Zero trust architecture</strong> operates on the principle of 'never trust, always verify.' Every access request is fully authenticated, authorized, and encrypted before granting access, regardless of the <strong>network location</strong> of the requester.",
    evidence: [{
        quote: "Zero trust assumes <span class='evidence-highlight'>no implicit trust is granted to assets or user accounts</span> based solely on their physical or network location.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Zero Trust Architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A company runs its email server on-premises but uses a cloud provider's virtual machines for its web application. The company manages the OS, middleware, and application, while the cloud provider manages the hardware and virtualization layer. What cloud service model is this?",
    options: [
        "Software as a Service (SaaS)",
        "Platform as a Service (PaaS)",
        "Infrastructure as a Service (IaaS)",
        "Function as a Service (FaaS)"
    ],
    correct: 2,
    explanation: "In <strong>Infrastructure as a Service (IaaS)</strong>, the cloud provider manages the physical hardware and virtualization, while the customer is responsible for the OS, middleware, runtime, data, and applications. Examples include <strong>AWS EC2 and Azure VMs</strong>.",
    evidence: [{
        quote: "IaaS provides <span class='evidence-highlight'>virtualized computing resources over the internet</span> where the customer manages operating systems, storage, and deployed applications.",
        source: "NIST",
        document: "NIST SP 800-145",
        section: "Cloud Service Models",
        url: "https://csrc.nist.gov/publications/detail/sp/800-145/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A security team implements multiple layers of security controls: firewalls at the perimeter, IDS/IPS on internal segments, endpoint protection on workstations, and data encryption at rest. What security principle does this represent?",
    options: [
        "Least privilege",
        "Separation of duties",
        "Defense in depth",
        "Single point of failure elimination"
    ],
    correct: 2,
    explanation: "<strong>Defense in depth</strong> uses multiple layers of security controls so that if one layer is breached, additional layers continue to provide protection. This <strong>layered approach</strong> ensures no single control failure results in complete compromise.",
    evidence: [{
        quote: "Defense in depth employs <span class='evidence-highlight'>multiple layers of security controls</span> to provide redundancy in the event that one control fails.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "Security Control Baselines",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A development team deploys their application as a set of loosely coupled, independently deployable services, each running in its own container. What architectural pattern are they using?",
    options: [
        "Monolithic architecture",
        "Microservices architecture",
        "Service-oriented architecture (SOA)",
        "Event-driven architecture"
    ],
    correct: 1,
    explanation: "<strong>Microservices architecture</strong> decomposes applications into small, independent services that can be developed, deployed, and scaled individually. Each service runs in its own <strong>container</strong> and communicates via APIs.",
    evidence: [{
        quote: "Microservices decompose applications into <span class='evidence-highlight'>small, loosely coupled services that can be independently deployed</span> and scaled.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "Application Container Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A company wants to use a cloud service where the provider manages the entire application stack, and users simply access the software through a web browser. The company has no responsibility for infrastructure, platforms, or application maintenance. What model is this?",
    options: [
        "IaaS",
        "PaaS",
        "SaaS",
        "DaaS"
    ],
    correct: 2,
    explanation: "<strong>Software as a Service (SaaS)</strong> provides complete applications delivered over the internet. The provider manages everything from infrastructure to application updates. Examples include <strong>Microsoft 365, Salesforce, and Google Workspace</strong>.",
    evidence: [{
        quote: "SaaS provides <span class='evidence-highlight'>complete applications accessible through a web browser</span> where the provider manages all underlying infrastructure and software.",
        source: "NIST",
        document: "NIST SP 800-145",
        section: "Cloud Service Models",
        url: "https://csrc.nist.gov/publications/detail/sp/800-145/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An architect is designing an embedded system for a medical device. The system must only run signed firmware and prevent unauthorized code execution. What security mechanism should be implemented?",
    options: [
        "Full disk encryption",
        "Secure boot with hardware root of trust",
        "Network access control",
        "Web application firewall"
    ],
    correct: 1,
    explanation: "<strong>Secure boot with a hardware root of trust</strong> ensures that only cryptographically signed and verified firmware can execute on the device. The hardware root of trust, such as a <strong>TPM or secure element</strong>, anchors the chain of trust.",
    evidence: [{
        quote: "Secure boot ensures that <span class='evidence-highlight'>only authenticated and authorized firmware is loaded</span> during the boot process, using a hardware root of trust.",
        source: "NIST",
        document: "NIST SP 800-193",
        section: "Platform Firmware Resiliency",
        url: "https://csrc.nist.gov/publications/detail/sp/800-193/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An organization needs to segment its network so that the HR department cannot directly communicate with the R&D lab, even though they share the same physical switch infrastructure. What technology should be implemented?",
    options: [
        "VPN tunneling",
        "Virtual LANs (VLANs)",
        "Port mirroring",
        "Link aggregation"
    ],
    correct: 1,
    explanation: "<strong>Virtual LANs (VLANs)</strong> create logically separate broadcast domains on the same physical switch infrastructure. Traffic between VLANs requires a Layer 3 device with access control rules, enabling <strong>network segmentation</strong> without additional hardware.",
    evidence: [{
        quote: "VLANs enable <span class='evidence-highlight'>logical segmentation of networks on shared physical infrastructure</span>, controlling traffic flow between segments.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.3 - Network Architecture Concepts",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A developer writes a function that runs in the cloud only when triggered by an HTTP request, with no persistent server. The cloud provider manages all infrastructure, scaling, and patching. What computing model is this?",
    options: [
        "Virtual machine deployment",
        "Container orchestration",
        "Serverless computing / Function as a Service",
        "Bare metal deployment"
    ],
    correct: 2,
    explanation: "<strong>Serverless computing (FaaS)</strong> allows developers to deploy individual functions that execute in response to events. The cloud provider manages all infrastructure, <strong>automatically scaling</strong> and charging only for actual execution time.",
    evidence: [{
        quote: "Serverless computing allows developers to <span class='evidence-highlight'>build and run applications without managing servers</span>, with automatic scaling and pay-per-execution billing.",
        source: "NIST",
        document: "NIST SP 800-145",
        section: "Cloud Deployment Models",
        url: "https://csrc.nist.gov/publications/detail/sp/800-145/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A security architect must design a system where even if an attacker compromises the web application layer, they cannot directly access the database. The web application communicates with the database through an intermediary service that validates and sanitizes all queries. What pattern is this?",
    options: [
        "Direct database access",
        "API gateway with input validation",
        "Database connection pooling",
        "Read replica architecture"
    ],
    correct: 1,
    explanation: "An <strong>API gateway with input validation</strong> acts as an intermediary between the application and database, enforcing query validation and sanitization. This provides an additional <strong>security layer</strong> preventing direct database exploitation.",
    evidence: [{
        quote: "API gateways provide <span class='evidence-highlight'>centralized enforcement of security policies</span> including input validation, authentication, and rate limiting.",
        source: "NIST",
        document: "NIST SP 800-204",
        section: "Security Strategies for Microservices",
        url: "https://csrc.nist.gov/publications/detail/sp/800-204/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An organization deploys an application using containers. A security review finds that all containers run as root and share the host's kernel namespace. What is the PRIMARY security concern?",
    options: [
        "Containers will use too much storage",
        "Container escape could compromise the host system",
        "Containers cannot be load balanced",
        "Containers are not compatible with microservices"
    ],
    correct: 1,
    explanation: "Running containers as root with shared kernel namespaces creates the risk of <strong>container escape</strong>, where an attacker breaks out of the container isolation and gains access to the host system with <strong>root privileges</strong>.",
    evidence: [{
        quote: "Containers running as root with shared namespaces increase the risk of <span class='evidence-highlight'>container escape attacks that compromise the host</span>.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "Container Security Risks",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A company is selecting between deploying infrastructure in a public cloud, private cloud, or a combination. They decide to keep sensitive financial data in their private data center while using public cloud for their marketing website. What deployment model is this?",
    options: [
        "Public cloud",
        "Private cloud",
        "Hybrid cloud",
        "Community cloud"
    ],
    correct: 2,
    explanation: "A <strong>hybrid cloud</strong> deployment combines private and public cloud infrastructure. Organizations can keep sensitive data in the private cloud while leveraging the public cloud's scalability for <strong>less sensitive workloads</strong>.",
    evidence: [{
        quote: "Hybrid cloud is a composition of <span class='evidence-highlight'>two or more distinct cloud infrastructures</span> (private, community, or public) that remain unique entities but are bound together.",
        source: "NIST",
        document: "NIST SP 800-145",
        section: "Cloud Deployment Models",
        url: "https://csrc.nist.gov/publications/detail/sp/800-145/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "When designing a high-availability web application, the architect places two firewalls in an active-passive configuration. If the primary firewall fails, the secondary immediately takes over. What is this design concept called?",
    options: [
        "Load balancing",
        "Failover/redundancy",
        "Elasticity",
        "Horizontal scaling"
    ],
    correct: 1,
    explanation: "<strong>Failover/redundancy</strong> ensures continuity of service by automatically switching to a standby system when the primary fails. Active-passive configurations maintain a <strong>hot standby</strong> ready to assume operations immediately.",
    evidence: [{
        quote: "Active-passive failover configurations provide <span class='evidence-highlight'>automatic transition to standby systems</span> when the primary system becomes unavailable.",
        source: "NIST",
        document: "NIST SP 800-34 Rev 1",
        section: "Contingency Planning",
        url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A security team is evaluating the use of hardware security modules (HSMs) for storing cryptographic keys used in financial transactions. What is the PRIMARY benefit of using an HSM over software-based key storage?",
    options: [
        "HSMs are less expensive than software solutions",
        "HSMs provide tamper-resistant hardware protection for keys",
        "HSMs can store unlimited numbers of keys",
        "HSMs do not require any management"
    ],
    correct: 1,
    explanation: "<strong>Hardware Security Modules (HSMs)</strong> provide tamper-resistant physical hardware designed specifically for cryptographic key protection. They ensure keys are generated, stored, and used within <strong>secure, hardened hardware boundaries</strong>.",
    evidence: [{
        quote: "HSMs provide <span class='evidence-highlight'>tamper-resistant hardware for cryptographic key management</span>, ensuring keys cannot be extracted or compromised.",
        source: "NIST",
        document: "NIST SP 800-57 Part 1 Rev 5",
        section: "Key Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An application architect is designing a system where the physical location of data processing and storage matters due to regulatory requirements. The system must ensure that European customer data is processed only within the EU. What concept must the architect address?",
    options: [
        "Data masking",
        "Data sovereignty",
        "Data deduplication",
        "Data compression"
    ],
    correct: 1,
    explanation: "<strong>Data sovereignty</strong> refers to the concept that data is subject to the laws of the country where it is stored or processed. Regulations like <strong>GDPR</strong> require that certain data remain within specific geographic boundaries.",
    evidence: [{
        quote: "Data sovereignty requires that <span class='evidence-highlight'>data is subject to the laws and governance structures</span> of the nation where it is collected or processed.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Computing Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An architect designs a system where each component operates with only the minimum permissions needed to perform its function. Database service accounts can only execute specific stored procedures, and application accounts can only read from designated tables. What principle is being applied?",
    options: [
        "Separation of duties",
        "Least privilege",
        "Need to know",
        "Mandatory access control"
    ],
    correct: 1,
    explanation: "The <strong>principle of least privilege</strong> ensures that every user, process, and system component operates with only the minimum permissions necessary to perform its function. This limits the <strong>blast radius</strong> of any potential compromise.",
    evidence: [{
        quote: "The principle of least privilege requires that <span class='evidence-highlight'>each subject be granted the most restrictive set of privileges needed</span> for the performance of authorized tasks.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "AC-6 Least Privilege",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A company uses infrastructure as code (IaC) to define their cloud environment. When a server is compromised, instead of patching it, they destroy the instance and deploy a fresh one from the template. What design concept is this?",
    options: [
        "Mutable infrastructure",
        "Immutable infrastructure",
        "Self-healing architecture",
        "Blue-green deployment"
    ],
    correct: 1,
    explanation: "<strong>Immutable infrastructure</strong> treats servers as disposable. Rather than updating or patching existing instances, compromised or outdated instances are destroyed and replaced with fresh deployments from <strong>known-good templates</strong>.",
    evidence: [{
        quote: "Immutable infrastructure ensures that <span class='evidence-highlight'>servers are never modified after deployment</span>; instead, new instances are deployed from versioned templates.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "Container and Cloud Architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An architect is designing a system that processes credit card transactions. According to PCI DSS, which approach BEST reduces the scope of compliance requirements?",
    options: [
        "Encrypting all data at rest across the entire network",
        "Network segmentation to isolate the cardholder data environment",
        "Deploying intrusion detection on all network segments",
        "Implementing multi-factor authentication for all users"
    ],
    correct: 1,
    explanation: "<strong>Network segmentation</strong> to isolate the cardholder data environment (CDE) reduces PCI DSS scope by limiting the systems that handle payment data. Only segmented systems require full <strong>PCI DSS compliance controls</strong>.",
    evidence: [{
        quote: "Network segmentation can <span class='evidence-highlight'>reduce the scope of the PCI DSS assessment</span> by isolating the cardholder data environment from the rest of the network.",
        source: "PCI Security Standards Council",
        document: "PCI DSS v4.0",
        section: "Network Segmentation",
        url: "https://www.pcisecuritystandards.org/"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "A security architect is evaluating whether to use an on-premises SIEM or a cloud-based SIEM solution. The organization has a small security team and limited infrastructure management capacity. Which factor MOST favors the cloud-based solution?",
    options: [
        "Cloud solutions always provide better security",
        "Reduced operational overhead with provider-managed infrastructure",
        "Cloud solutions are always less expensive",
        "On-premises solutions cannot scale"
    ],
    correct: 1,
    explanation: "A cloud-based SIEM provides <strong>reduced operational overhead</strong> since the provider manages hardware, updates, scaling, and availability. This is ideal for small teams with <strong>limited infrastructure management capacity</strong>.",
    evidence: [{
        quote: "Cloud-based security solutions reduce <span class='evidence-highlight'>operational burden on small teams</span> by offloading infrastructure management to the provider.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Computing Benefits and Risks",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "During a security review, an architect discovers that a single server handles authentication, application logic, and database management. If this server is compromised, all functions are affected. What design flaw does this represent?",
    options: [
        "Insufficient logging",
        "Single point of failure with no separation of services",
        "Over-provisioning",
        "Excessive redundancy"
    ],
    correct: 1,
    explanation: "Having all services on one server creates a <strong>single point of failure</strong> with no <strong>separation of services</strong>. Compromising this one server gives an attacker access to authentication, application data, and the database simultaneously.",
    evidence: [{
        quote: "Combining multiple functions on a single server creates a <span class='evidence-highlight'>single point of failure that increases the impact</span> of any successful attack.",
        source: "NIST",
        document: "NIST SP 800-123",
        section: "Server Security Guidelines",
        url: "https://csrc.nist.gov/publications/detail/sp/800-123/final"
    }]
},
{
    vendor: "security",
    domain: "Architecture & Design",
    question: "An organization is transitioning from a traditional perimeter-based network to a software-defined perimeter where access decisions are made based on user identity, device health, and context rather than network location. This approach is BEST described as?",
    options: [
        "Network address translation",
        "Software-defined networking (SDN)",
        "Zero trust network access (ZTNA)",
        "Virtual private networking"
    ],
    correct: 2,
    explanation: "<strong>Zero Trust Network Access (ZTNA)</strong> replaces traditional perimeter-based security with identity-centric access decisions. Access is granted based on <strong>user identity, device posture, and contextual factors</strong> rather than network location.",
    evidence: [{
        quote: "ZTNA creates an <span class='evidence-highlight'>identity and context-based logical access boundary</span> around applications, replacing traditional network-level access controls.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Zero Trust Architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A network administrator needs to allow external users to access a web server on port 443 while blocking all other inbound traffic. Which device should be configured to accomplish this?",
    options: [
        "Load balancer",
        "Firewall with an explicit allow rule for port 443 inbound",
        "Proxy server",
        "Network switch"
    ],
    correct: 1,
    explanation: "A <strong>firewall</strong> should be configured with an explicit allow rule for inbound TCP port 443 (HTTPS) and a default deny rule for all other inbound traffic. This follows the principle of <strong>implicit deny</strong>.",
    evidence: [{
        quote: "Firewalls should be configured with an <span class='evidence-highlight'>implicit deny policy, allowing only specifically authorized traffic</span> through explicit rules.",
        source: "NIST",
        document: "NIST SP 800-41 Rev 1",
        section: "Firewall Policy",
        url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A security engineer is comparing an IDS and IPS for deployment. The organization requires a solution that can automatically block detected attacks in real-time without manual intervention. Which solution should be deployed?",
    options: [
        "Network-based IDS (NIDS)",
        "Host-based IDS (HIDS)",
        "Intrusion Prevention System (IPS)",
        "Security Information and Event Management (SIEM)"
    ],
    correct: 2,
    explanation: "An <strong>Intrusion Prevention System (IPS)</strong> is deployed inline and can automatically block malicious traffic in real-time. Unlike an IDS, which only detects and alerts, an IPS takes <strong>active preventive action</strong> against detected threats.",
    evidence: [{
        quote: "An IPS is deployed inline and can <span class='evidence-highlight'>automatically take action to block or prevent detected attacks</span> without requiring manual intervention.",
        source: "NIST",
        document: "NIST SP 800-94",
        section: "Intrusion Detection and Prevention Systems",
        url: "https://csrc.nist.gov/publications/detail/sp/800-94/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A remote employee needs secure access to the corporate network from home. The connection must encrypt all traffic between the employee's device and the corporate network. Which technology should be implemented?",
    options: [
        "Remote Desktop Protocol (RDP)",
        "Virtual Private Network (VPN) using IPSec",
        "Telnet with SSH tunneling",
        "FTP over TLS"
    ],
    correct: 1,
    explanation: "A <strong>VPN using IPSec</strong> creates an encrypted tunnel between the remote device and the corporate network. IPSec operates at the network layer and can encrypt <strong>all traffic</strong> between endpoints, providing full network-level security.",
    evidence: [{
        quote: "IPSec VPNs provide <span class='evidence-highlight'>encrypted tunnels that protect all network traffic</span> between remote users and the corporate network.",
        source: "NIST",
        document: "NIST SP 800-77 Rev 1",
        section: "Guide to IPsec VPNs",
        url: "https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "An organization wants to ensure that only devices meeting specific security requirements (updated antivirus, current patches, enabled firewall) can connect to the corporate network. What technology should be implemented?",
    options: [
        "Network Access Control (NAC)",
        "Web application firewall (WAF)",
        "Content delivery network (CDN)",
        "Domain Name System Security Extensions (DNSSEC)"
    ],
    correct: 0,
    explanation: "<strong>Network Access Control (NAC)</strong> evaluates device health and compliance before granting network access. Devices that fail health checks are quarantined or given limited access until they meet the organization's <strong>security posture requirements</strong>.",
    evidence: [{
        quote: "NAC solutions <span class='evidence-highlight'>enforce security policy compliance on devices</span> before allowing them to access the network, quarantining non-compliant devices.",
        source: "NIST",
        document: "NIST SP 800-46 Rev 2",
        section: "Network Access Control",
        url: "https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A wireless network administrator is upgrading the corporate Wi-Fi security. The new standard must support Simultaneous Authentication of Equals (SAE) to prevent offline dictionary attacks. Which wireless security protocol should be implemented?",
    options: [
        "WEP",
        "WPA2-PSK",
        "WPA3-Personal",
        "WPA-Enterprise"
    ],
    correct: 2,
    explanation: "<strong>WPA3-Personal</strong> replaces the Pre-Shared Key (PSK) exchange with <strong>Simultaneous Authentication of Equals (SAE)</strong>, which provides protection against offline dictionary attacks and enables forward secrecy.",
    evidence: [{
        quote: "WPA3 uses <span class='evidence-highlight'>Simultaneous Authentication of Equals (SAE)</span> to replace PSK, providing stronger protection against offline dictionary attacks.",
        source: "Wi-Fi Alliance",
        document: "WPA3 Specification",
        section: "WPA3-Personal",
        url: "https://www.wi-fi.org/discover-wi-fi/security"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A company needs to distribute incoming web traffic across multiple backend servers to ensure high availability and performance. The solution should also perform SSL/TLS termination. What device should be deployed?",
    options: [
        "Reverse proxy with load balancing",
        "Forward proxy",
        "Network switch with port mirroring",
        "DNS round-robin only"
    ],
    correct: 0,
    explanation: "A <strong>reverse proxy with load balancing</strong> distributes client requests across multiple backend servers while performing SSL/TLS termination. This offloads encryption processing from backend servers and provides <strong>high availability</strong>.",
    evidence: [{
        quote: "Reverse proxies provide <span class='evidence-highlight'>load balancing and SSL/TLS termination</span>, distributing traffic across multiple servers while handling encryption.",
        source: "NIST",
        document: "NIST SP 800-44",
        section: "Web Server Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-44/version-2/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A security team needs to deploy a solution that inspects all outbound web traffic, enforces URL filtering policies, and prevents data loss through web channels. What should they implement?",
    options: [
        "Network-based IDS",
        "Secure web gateway (SWG) / proxy server",
        "DNS sinkhole",
        "Honeypot"
    ],
    correct: 1,
    explanation: "A <strong>Secure Web Gateway (SWG) or proxy server</strong> inspects outbound web traffic, enforces URL filtering and content policies, and can perform <strong>data loss prevention (DLP)</strong> by analyzing content leaving the network.",
    evidence: [{
        quote: "Secure web gateways provide <span class='evidence-highlight'>URL filtering, malware inspection, and data loss prevention</span> for outbound web traffic.",
        source: "NIST",
        document: "NIST SP 800-41 Rev 1",
        section: "Proxy and Content Filtering",
        url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "An organization is deploying a SIEM solution. During the planning phase, the team must determine which log sources to collect. Which of the following is the MOST critical log source to integrate first?",
    options: [
        "Printer access logs",
        "Authentication and access control system logs",
        "Badge reader entry logs",
        "Application performance metrics"
    ],
    correct: 1,
    explanation: "<strong>Authentication and access control logs</strong> are the most critical for SIEM integration because they provide visibility into who is accessing systems, failed login attempts, privilege escalations, and <strong>unauthorized access attempts</strong>.",
    evidence: [{
        quote: "Authentication logs are <span class='evidence-highlight'>essential data sources for security monitoring</span> as they reveal unauthorized access attempts and credential abuse.",
        source: "NIST",
        document: "NIST SP 800-92",
        section: "Guide to Computer Security Log Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-92/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A network engineer is configuring a VPN for remote workers. The solution must work through NAT devices and firewalls without requiring additional firewall rules. Which VPN protocol is BEST suited for this scenario?",
    options: [
        "IPSec in tunnel mode without NAT-T",
        "SSL/TLS VPN on port 443",
        "GRE tunneling",
        "L2TP without IPSec"
    ],
    correct: 1,
    explanation: "An <strong>SSL/TLS VPN on port 443</strong> uses the standard HTTPS port, which is almost always allowed through firewalls and NAT devices. This eliminates the need for special firewall rules and provides <strong>seamless remote access</strong>.",
    evidence: [{
        quote: "SSL/TLS VPNs use <span class='evidence-highlight'>standard HTTPS port 443</span>, making them highly compatible with existing firewall rules and NAT configurations.",
        source: "NIST",
        document: "NIST SP 800-113",
        section: "Guide to SSL VPNs",
        url: "https://csrc.nist.gov/publications/detail/sp/800-113/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "An enterprise wireless network requires authentication using digital certificates for both the server and client devices. Users should authenticate with their Active Directory credentials through a RADIUS server. Which EAP method should be used?",
    options: [
        "EAP-MD5",
        "EAP-TLS",
        "PEAP (Protected EAP)",
        "LEAP"
    ],
    correct: 2,
    explanation: "<strong>PEAP (Protected EAP)</strong> creates an encrypted TLS tunnel using the server certificate and then authenticates users with their AD credentials (via MS-CHAPv2) through a RADIUS server. EAP-TLS requires client certificates, while PEAP uses <strong>server certificates with password authentication</strong>.",
    evidence: [{
        quote: "PEAP provides <span class='evidence-highlight'>server-side certificate authentication with an encrypted tunnel</span> for user credential-based authentication via RADIUS.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.4 - Wireless Security",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A security administrator needs to implement endpoint protection that uses behavioral analysis and machine learning to detect threats rather than relying solely on signature-based detection. What type of solution should be deployed?",
    options: [
        "Traditional antivirus (AV)",
        "Endpoint Detection and Response (EDR)",
        "Host-based firewall",
        "Data loss prevention (DLP) agent"
    ],
    correct: 1,
    explanation: "<strong>Endpoint Detection and Response (EDR)</strong> goes beyond traditional antivirus by using behavioral analysis, machine learning, and continuous monitoring to detect advanced threats. EDR provides <strong>threat detection, investigation, and response</strong> capabilities.",
    evidence: [{
        quote: "EDR solutions use <span class='evidence-highlight'>behavioral analysis and machine learning</span> to detect threats that evade traditional signature-based antivirus.",
        source: "NIST",
        document: "NIST SP 800-83 Rev 1",
        section: "Malware Incident Prevention",
        url: "https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A company needs to ensure that emails sent between its offices are encrypted in transit and that the recipient can verify the sender's identity. Which protocol combination should be implemented on the mail servers?",
    options: [
        "SMTP with STARTTLS and DKIM",
        "POP3 without encryption",
        "IMAP with no authentication",
        "FTP for email transfer"
    ],
    correct: 0,
    explanation: "<strong>SMTP with STARTTLS</strong> encrypts email in transit, while <strong>DKIM (DomainKeys Identified Mail)</strong> uses digital signatures to verify sender identity and message integrity. Together they provide <strong>confidentiality and authentication</strong>.",
    evidence: [{
        quote: "STARTTLS provides <span class='evidence-highlight'>opportunistic encryption for SMTP</span>, while DKIM provides sender authentication through digital signatures.",
        source: "IETF",
        document: "RFC 6376",
        section: "DomainKeys Identified Mail Signatures",
        url: "https://datatracker.ietf.org/doc/html/rfc6376"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A security architect is implementing a web application firewall (WAF) to protect against OWASP Top 10 attacks. Where should the WAF be positioned in the network architecture?",
    options: [
        "Between the internet and the web servers, inline with traffic",
        "Behind the database servers",
        "On each endpoint workstation",
        "At the ISP's network boundary"
    ],
    correct: 0,
    explanation: "A <strong>WAF should be positioned inline between the internet and web servers</strong> to inspect and filter HTTP/HTTPS traffic before it reaches the application. This allows it to block SQL injection, XSS, and other <strong>application-layer attacks</strong>.",
    evidence: [{
        quote: "WAFs are deployed <span class='evidence-highlight'>in front of web applications to inspect HTTP traffic</span> and protect against application-layer attacks.",
        source: "NIST",
        document: "NIST SP 800-44",
        section: "Web Application Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-44/version-2/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "An organization is implementing 802.1X port-based network access control. Which three components are required for this implementation?",
    options: [
        "Supplicant, authenticator, authentication server",
        "Client, firewall, DNS server",
        "Router, switch, access point",
        "Certificate authority, OCSP responder, CRL"
    ],
    correct: 0,
    explanation: "<strong>802.1X</strong> requires three components: the <strong>supplicant</strong> (client requesting access), the <strong>authenticator</strong> (switch or AP enforcing access), and the <strong>authentication server</strong> (typically RADIUS) that verifies credentials.",
    evidence: [{
        quote: "802.1X requires a <span class='evidence-highlight'>supplicant, authenticator, and authentication server</span> to provide port-based network access control.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.4 - Network Access Control",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A company deploys a next-generation firewall (NGFW). Which capability distinguishes an NGFW from a traditional stateful firewall?",
    options: [
        "Packet filtering based on source/destination IP",
        "Application-layer inspection and user identity awareness",
        "Basic NAT functionality",
        "VLAN tagging support"
    ],
    correct: 1,
    explanation: "<strong>Next-Generation Firewalls (NGFWs)</strong> add application-layer inspection, user identity awareness, integrated IPS, and threat intelligence feeds on top of traditional stateful inspection capabilities.",
    evidence: [{
        quote: "NGFWs combine traditional firewall capabilities with <span class='evidence-highlight'>application awareness, user identity integration, and inline IPS</span>.",
        source: "NIST",
        document: "NIST SP 800-41 Rev 1",
        section: "Next-Generation Firewalls",
        url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A security team needs to collect and centralize logs from firewalls, servers, endpoints, and cloud services for correlation and alerting. They also need automated incident response playbooks. What solution provides ALL of these capabilities?",
    options: [
        "SIEM with SOAR integration",
        "Network TAP",
        "Vulnerability scanner",
        "Packet capture tool"
    ],
    correct: 0,
    explanation: "A <strong>SIEM with SOAR (Security Orchestration, Automation, and Response) integration</strong> provides centralized log collection, correlation, alerting, AND automated incident response playbooks for <strong>streamlined security operations</strong>.",
    evidence: [{
        quote: "SIEM with SOAR integration provides <span class='evidence-highlight'>centralized log management, correlation, and automated response playbooks</span> for comprehensive security operations.",
        source: "NIST",
        document: "NIST SP 800-92",
        section: "Security Log Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-92/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A network administrator is configuring DNS security for the organization. They want to prevent DNS spoofing attacks by ensuring DNS responses are authenticated and have not been tampered with. What should be implemented?",
    options: [
        "DNS over HTTPS (DoH)",
        "DNSSEC",
        "DNS load balancing",
        "Split-horizon DNS"
    ],
    correct: 1,
    explanation: "<strong>DNSSEC (Domain Name System Security Extensions)</strong> adds cryptographic signatures to DNS records, allowing resolvers to verify that responses are authentic and unmodified. This prevents <strong>DNS spoofing and cache poisoning</strong> attacks.",
    evidence: [{
        quote: "DNSSEC provides <span class='evidence-highlight'>authentication and integrity verification for DNS responses</span> through cryptographic signatures.",
        source: "IETF",
        document: "RFC 4033",
        section: "DNS Security Introduction and Requirements",
        url: "https://datatracker.ietf.org/doc/html/rfc4033"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "An organization is implementing a split-tunnel VPN configuration for remote workers. What is the PRIMARY security risk of this approach compared to full-tunnel VPN?",
    options: [
        "Higher bandwidth consumption on the VPN",
        "Internet traffic bypasses corporate security controls",
        "Users cannot access local network resources",
        "VPN encryption is weaker with split tunneling"
    ],
    correct: 1,
    explanation: "With <strong>split-tunnel VPN</strong>, only corporate-destined traffic goes through the VPN tunnel while internet traffic goes directly to the internet. This means internet traffic <strong>bypasses corporate security controls</strong> like proxies, firewalls, and DLP.",
    evidence: [{
        quote: "Split tunneling allows <span class='evidence-highlight'>internet-bound traffic to bypass the organization's security controls</span>, potentially exposing the endpoint to threats.",
        source: "NIST",
        document: "NIST SP 800-46 Rev 2",
        section: "Remote Access Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "A security engineer configures port security on a network switch to allow only one MAC address per port. When a second MAC address is detected, the port should shut down. What is this feature called?",
    options: [
        "DHCP snooping",
        "Port security with violation mode shutdown",
        "Dynamic ARP inspection",
        "Storm control"
    ],
    correct: 1,
    explanation: "<strong>Port security with violation mode shutdown</strong> limits the number of MAC addresses on a port and disables the port when the limit is exceeded. This prevents <strong>MAC flooding attacks and unauthorized device connections</strong>.",
    evidence: [{
        quote: "Port security <span class='evidence-highlight'>restricts the number of valid MAC addresses on a port</span> and can shut down the port when violations are detected.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.3 - Network Security Implementation",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Implementation",
    question: "An organization wants to implement email security controls that specify which mail servers are authorized to send email on behalf of their domain, preventing email spoofing. Which DNS record should be configured?",
    options: [
        "MX record",
        "SPF (Sender Policy Framework) record",
        "CNAME record",
        "PTR record"
    ],
    correct: 1,
    explanation: "<strong>SPF (Sender Policy Framework)</strong> is a DNS TXT record that specifies which mail servers are authorized to send email on behalf of a domain. Receiving servers check SPF records to detect and prevent <strong>email spoofing</strong>.",
    evidence: [{
        quote: "SPF records specify <span class='evidence-highlight'>authorized mail servers for a domain</span>, allowing receiving servers to detect forged sender addresses.",
        source: "IETF",
        document: "RFC 7208",
        section: "Sender Policy Framework",
        url: "https://datatracker.ietf.org/doc/html/rfc7208"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A company wants to implement an authentication system where users must provide something they know (password) AND something they have (smartphone app-generated code) to log in. What is this called?",
    options: [
        "Single-factor authentication",
        "Multi-factor authentication (MFA)",
        "Single sign-on (SSO)",
        "Role-based access control"
    ],
    correct: 1,
    explanation: "<strong>Multi-factor authentication (MFA)</strong> requires two or more different authentication factors: something you know (password), something you have (token/phone), or something you are (biometric). Using a password plus a smartphone code combines <strong>two different factors</strong>.",
    evidence: [{
        quote: "MFA requires <span class='evidence-highlight'>two or more authentication factors from different categories</span>: something you know, have, or are.",
        source: "NIST",
        document: "NIST SP 800-63B",
        section: "Authentication and Lifecycle Management",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An organization uses a system where users log in once and gain access to multiple applications without re-entering credentials. The system uses security tokens passed between applications. What is this?",
    options: [
        "Multi-factor authentication",
        "Single sign-on (SSO)",
        "Federated identity management",
        "Privileged access management"
    ],
    correct: 1,
    explanation: "<strong>Single Sign-On (SSO)</strong> allows users to authenticate once and access multiple systems without re-entering credentials. SSO uses security tokens or assertions to <strong>propagate authentication state</strong> across applications.",
    evidence: [{
        quote: "SSO enables users to <span class='evidence-highlight'>authenticate once and access multiple applications</span> using a single set of credentials.",
        source: "NIST",
        document: "NIST SP 800-63C",
        section: "Federation and Assertions",
        url: "https://pages.nist.gov/800-63-3/sp800-63c.html"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A web application uses a protocol that allows users to log in using their Google account. The application receives an authorization code, exchanges it for an access token, and uses the token to access the user's profile information. What protocol is being used?",
    options: [
        "LDAP",
        "Kerberos",
        "OAuth 2.0 with OpenID Connect",
        "RADIUS"
    ],
    correct: 2,
    explanation: "<strong>OAuth 2.0 with OpenID Connect (OIDC)</strong> is the protocol used when applications allow users to sign in with third-party providers like Google. OAuth 2.0 handles authorization while OIDC adds an <strong>identity/authentication layer</strong>.",
    evidence: [{
        quote: "OAuth 2.0 provides <span class='evidence-highlight'>delegated authorization</span>, while OpenID Connect adds an identity layer for authentication on top of OAuth 2.0.",
        source: "IETF",
        document: "RFC 6749",
        section: "The OAuth 2.0 Authorization Framework",
        url: "https://datatracker.ietf.org/doc/html/rfc6749"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An enterprise uses a centralized directory service that stores user accounts, group memberships, and organizational units in a hierarchical tree structure. Authentication queries use port 389. What protocol is this?",
    options: [
        "RADIUS",
        "TACACS+",
        "LDAP",
        "SAML"
    ],
    correct: 2,
    explanation: "<strong>LDAP (Lightweight Directory Access Protocol)</strong> provides access to centralized directory services using a hierarchical structure. It operates on port 389 (or 636 for LDAPS with encryption) and is commonly used with <strong>Microsoft Active Directory</strong>.",
    evidence: [{
        quote: "LDAP provides <span class='evidence-highlight'>access to distributed directory information services</span> using a hierarchical tree structure on port 389.",
        source: "IETF",
        document: "RFC 4511",
        section: "Lightweight Directory Access Protocol",
        url: "https://datatracker.ietf.org/doc/html/rfc4511"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A Windows Active Directory environment uses a protocol where users receive a ticket-granting ticket (TGT) after initial authentication, which is then used to obtain service tickets for accessing resources without re-entering passwords. What protocol is this?",
    options: [
        "NTLM",
        "Kerberos",
        "OAuth",
        "SAML"
    ],
    correct: 1,
    explanation: "<strong>Kerberos</strong> is a ticket-based authentication protocol used in Active Directory. After initial authentication with the KDC, users receive a <strong>Ticket-Granting Ticket (TGT)</strong>, which is used to obtain service tickets for resource access.",
    evidence: [{
        quote: "Kerberos uses a <span class='evidence-highlight'>ticket-granting ticket (TGT) issued by the Key Distribution Center</span> to provide single sign-on authentication across network services.",
        source: "IETF",
        document: "RFC 4120",
        section: "The Kerberos Network Authentication Service",
        url: "https://datatracker.ietf.org/doc/html/rfc4120"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A network administrator needs to implement centralized authentication for network devices (routers, switches, firewalls). The solution must support command authorization and accounting in addition to authentication. Which protocol is BEST suited?",
    options: [
        "RADIUS",
        "TACACS+",
        "LDAP",
        "SAML"
    ],
    correct: 1,
    explanation: "<strong>TACACS+</strong> is preferred for network device administration because it separates authentication, authorization, and accounting (AAA) functions. It also encrypts the <strong>entire payload</strong>, unlike RADIUS which only encrypts the password.",
    evidence: [{
        quote: "TACACS+ provides <span class='evidence-highlight'>separate authentication, authorization, and accounting</span> with full payload encryption, making it ideal for network device management.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "4.1 - AAA Protocols",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An organization implements a policy where the DBA cannot approve their own database changes, and the change must be reviewed and approved by a separate administrator. What security principle is being enforced?",
    options: [
        "Least privilege",
        "Separation of duties",
        "Need to know",
        "Mandatory vacation"
    ],
    correct: 1,
    explanation: "<strong>Separation of duties</strong> ensures that no single individual has complete control over a critical process. Requiring a separate administrator to approve changes prevents <strong>fraud and errors</strong> by distributing responsibilities.",
    evidence: [{
        quote: "Separation of duties ensures <span class='evidence-highlight'>no single individual controls all aspects of a critical function</span>, reducing the risk of fraud or error.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "AC-5 Separation of Duties",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A healthcare organization allows doctors from partner hospitals to access patient records using their home institution's credentials. The trust relationship is established through certificate exchange between the organizations. What is this called?",
    options: [
        "Local authentication",
        "Identity federation",
        "Anonymous access",
        "Service account access"
    ],
    correct: 1,
    explanation: "<strong>Identity federation</strong> allows users from one organization to access resources in another organization using their home credentials. Federation uses trust relationships and standards like <strong>SAML or OIDC</strong> to share identity information.",
    evidence: [{
        quote: "Identity federation enables <span class='evidence-highlight'>cross-organizational authentication</span> through trust relationships, allowing users to access partner resources with their home credentials.",
        source: "NIST",
        document: "NIST SP 800-63C",
        section: "Federation and Assertions",
        url: "https://pages.nist.gov/800-63-3/sp800-63c.html"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An organization implements a system where access to resources is determined by the user's job function. When an employee moves to a different department, their access is automatically updated based on their new role. What access control model is this?",
    options: [
        "Discretionary Access Control (DAC)",
        "Mandatory Access Control (MAC)",
        "Role-Based Access Control (RBAC)",
        "Attribute-Based Access Control (ABAC)"
    ],
    correct: 2,
    explanation: "<strong>Role-Based Access Control (RBAC)</strong> assigns permissions based on organizational roles rather than individual identities. When users change roles, their permissions are automatically updated to match their <strong>new job function</strong>.",
    evidence: [{
        quote: "RBAC assigns permissions based on <span class='evidence-highlight'>organizational roles</span>, simplifying access management when users change positions.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "AC-3 Access Enforcement",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A security team implements a policy that requires all privileged accounts (domain admins, root accounts) to be checked out from a secure vault, with sessions recorded and time-limited. What technology supports this?",
    options: [
        "Single sign-on (SSO)",
        "Privileged Access Management (PAM)",
        "Certificate-based authentication",
        "Network Access Control (NAC)"
    ],
    correct: 1,
    explanation: "<strong>Privileged Access Management (PAM)</strong> provides secure vaulting of privileged credentials, session recording, just-in-time access, and time-limited checkout. This reduces the risk of <strong>privileged account compromise</strong>.",
    evidence: [{
        quote: "PAM solutions provide <span class='evidence-highlight'>secure credential vaulting, session recording, and just-in-time access</span> for privileged accounts.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "AC-6 Least Privilege",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A company's conditional access policy denies login attempts from outside the country, from unmanaged devices, or during non-business hours, even when valid credentials are provided. What security concept does this implement?",
    options: [
        "Multi-factor authentication",
        "Conditional/context-aware access",
        "Role-based access control",
        "Discretionary access control"
    ],
    correct: 1,
    explanation: "<strong>Conditional/context-aware access</strong> evaluates contextual factors such as location, device compliance, time of day, and risk level before granting access. Even valid credentials are <strong>denied if conditions are not met</strong>.",
    evidence: [{
        quote: "Conditional access policies evaluate <span class='evidence-highlight'>contextual signals like location, device state, and risk level</span> before granting access to resources.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Zero Trust Access Policies",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A high-security facility uses a biometric system for access control. During testing, authorized users are frequently denied access. What biometric metric describes this problem?",
    options: [
        "False Acceptance Rate (FAR)",
        "False Rejection Rate (FRR)",
        "Crossover Error Rate (CER)",
        "Throughput rate"
    ],
    correct: 1,
    explanation: "<strong>False Rejection Rate (FRR)</strong>, also called Type I error, measures how often authorized users are incorrectly denied access. A high FRR indicates the system is <strong>too sensitive</strong> and needs its threshold adjusted.",
    evidence: [{
        quote: "The False Rejection Rate measures how often <span class='evidence-highlight'>authorized users are incorrectly denied access</span>, indicating the system sensitivity is set too high.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "4.2 - Biometric Authentication",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An organization uses SAML for SSO across its web applications. In the SAML authentication flow, which entity issues the SAML assertion after verifying the user's credentials?",
    options: [
        "Service Provider (SP)",
        "Identity Provider (IdP)",
        "Relying Party",
        "Resource Server"
    ],
    correct: 1,
    explanation: "In SAML, the <strong>Identity Provider (IdP)</strong> authenticates the user and issues a SAML assertion (security token) that is sent to the Service Provider. The SP trusts the IdP's assertion and <strong>grants access accordingly</strong>.",
    evidence: [{
        quote: "The Identity Provider <span class='evidence-highlight'>authenticates the user and issues SAML assertions</span> that are consumed by Service Providers to grant access.",
        source: "OASIS",
        document: "SAML 2.0 Specification",
        section: "SAML Authentication Flow",
        url: "https://docs.oasis-open.org/security/saml/v2.0/"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A company issues smart cards containing X.509 certificates to all employees for login authentication. The certificate contains the user's public key and is signed by the company's CA. What type of authentication is this?",
    options: [
        "Token-based authentication",
        "Certificate-based authentication",
        "Knowledge-based authentication",
        "Behavioral authentication"
    ],
    correct: 1,
    explanation: "<strong>Certificate-based authentication</strong> uses X.509 digital certificates stored on smart cards or devices to verify identity. The certificate binds the user's identity to a <strong>public key signed by a trusted Certificate Authority</strong>.",
    evidence: [{
        quote: "Certificate-based authentication uses <span class='evidence-highlight'>X.509 certificates to bind a user's identity to a public key</span>, providing strong authentication.",
        source: "NIST",
        document: "NIST SP 800-63B",
        section: "Certificate-Based Authentication",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A RADIUS server is used for wireless network authentication. What port does RADIUS use for authentication by default?",
    options: [
        "TCP 49",
        "UDP 1812",
        "TCP 636",
        "UDP 161"
    ],
    correct: 1,
    explanation: "<strong>RADIUS</strong> uses <strong>UDP port 1812</strong> for authentication and UDP port 1813 for accounting by default. The older non-standard ports 1645/1646 are sometimes still encountered in legacy configurations.",
    evidence: [{
        quote: "RADIUS uses <span class='evidence-highlight'>UDP port 1812 for authentication</span> and UDP port 1813 for accounting.",
        source: "IETF",
        document: "RFC 2865",
        section: "Remote Authentication Dial In User Service",
        url: "https://datatracker.ietf.org/doc/html/rfc2865"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An access control system grants or denies access based on attributes of the user (department, clearance), the resource (classification level), and the environment (time, location). What model is this?",
    options: [
        "Role-Based Access Control (RBAC)",
        "Mandatory Access Control (MAC)",
        "Attribute-Based Access Control (ABAC)",
        "Discretionary Access Control (DAC)"
    ],
    correct: 2,
    explanation: "<strong>Attribute-Based Access Control (ABAC)</strong> makes access decisions based on attributes of the subject, object, and environment. This provides <strong>fine-grained, dynamic access control</strong> beyond what RBAC can offer.",
    evidence: [{
        quote: "ABAC evaluates <span class='evidence-highlight'>attributes of the subject, resource, and environment</span> to make dynamic access control decisions.",
        source: "NIST",
        document: "NIST SP 800-162",
        section: "Guide to Attribute Based Access Control",
        url: "https://csrc.nist.gov/publications/detail/sp/800-162/final"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An employee leaves the company on Friday, but their Active Directory account remains active over the weekend. On Saturday, unauthorized access to corporate resources is detected from the former employee's credentials. What process failed?",
    options: [
        "Account provisioning",
        "Account deprovisioning/offboarding",
        "Password rotation",
        "Access review"
    ],
    correct: 1,
    explanation: "<strong>Account deprovisioning/offboarding</strong> is the process of disabling or removing user accounts and access when an employee departs. Failure to promptly disable accounts creates a window for <strong>unauthorized access</strong>.",
    evidence: [{
        quote: "Account deprovisioning must occur <span class='evidence-highlight'>immediately upon employee departure</span> to prevent unauthorized access with orphaned credentials.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "PS-4 Personnel Termination",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A user's passwordless authentication system uses facial recognition on their laptop, combined with a FIDO2 hardware key for high-security applications. The facial recognition is which type of authentication factor?",
    options: [
        "Something you know",
        "Something you have",
        "Something you are",
        "Somewhere you are"
    ],
    correct: 2,
    explanation: "Facial recognition is a <strong>biometric authentication factor</strong>, classified as 'something you are.' Biometrics measure unique physical characteristics including <strong>fingerprints, facial features, iris patterns, and voice</strong>.",
    evidence: [{
        quote: "Biometric authentication factors represent <span class='evidence-highlight'>something you are</span>, using unique physical or behavioral characteristics for identity verification.",
        source: "NIST",
        document: "NIST SP 800-63B",
        section: "Authenticator Types",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "An organization implements a policy where users must re-authenticate when accessing financial systems, even if they are already authenticated to other corporate systems through SSO. What is this called?",
    options: [
        "Session timeout",
        "Step-up authentication",
        "Token refresh",
        "Account lockout"
    ],
    correct: 1,
    explanation: "<strong>Step-up authentication</strong> requires additional authentication when accessing high-security resources, even if the user is already authenticated. This provides <strong>risk-appropriate security</strong> for sensitive systems.",
    evidence: [{
        quote: "Step-up authentication requires <span class='evidence-highlight'>additional verification for high-risk transactions or resources</span>, adding security beyond the initial authentication.",
        source: "NIST",
        document: "NIST SP 800-63B",
        section: "Authentication Assurance Levels",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
    }]
},
{
    vendor: "security",
    domain: "Identity & Access Management",
    question: "A security architect evaluates biometric systems and needs one with the lowest Crossover Error Rate (CER). Why is a low CER important?",
    options: [
        "It means the system processes users faster",
        "It indicates the optimal balance between false acceptance and false rejection",
        "It means the system uses less storage",
        "It indicates the system supports more users"
    ],
    correct: 1,
    explanation: "The <strong>Crossover Error Rate (CER)</strong>, also called the Equal Error Rate (EER), is the point where FAR and FRR are equal. A lower CER indicates a <strong>more accurate biometric system</strong> with better overall performance.",
    evidence: [{
        quote: "The Crossover Error Rate represents <span class='evidence-highlight'>the point where FAR equals FRR</span>; a lower CER indicates a more accurate biometric system.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "4.2 - Biometric Systems",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "An organization is conducting a risk assessment and needs to determine the expected monetary loss from a single occurrence of a specific threat. They estimate the asset value at $500,000 and the exposure factor at 40%. What is the Single Loss Expectancy (SLE)?",
    options: [
        "$50,000",
        "$100,000",
        "$200,000",
        "$500,000"
    ],
    correct: 2,
    explanation: "<strong>Single Loss Expectancy (SLE)</strong> is calculated as Asset Value (AV) multiplied by Exposure Factor (EF). $500,000 x 0.40 = <strong>$200,000</strong>. This represents the expected monetary loss each time the threat occurs.",
    evidence: [{
        quote: "SLE is calculated as <span class='evidence-highlight'>Asset Value multiplied by Exposure Factor</span> (SLE = AV x EF).",
        source: "NIST",
        document: "NIST SP 800-30 Rev 1",
        section: "Quantitative Risk Analysis",
        url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A company's Business Impact Analysis (BIA) determines that the email system has a Maximum Tolerable Downtime (MTD) of 4 hours and a Recovery Time Objective (RTO) of 2 hours. What does the RTO represent?",
    options: [
        "The maximum time the system can be down before critical impact",
        "The target time to restore the system to operational status",
        "The maximum acceptable data loss measured in time",
        "The time needed to switch to the backup system"
    ],
    correct: 1,
    explanation: "The <strong>Recovery Time Objective (RTO)</strong> is the target time within which a system must be restored to operational status after a disruption. The RTO must be less than the <strong>Maximum Tolerable Downtime (MTD)</strong> to ensure business continuity.",
    evidence: [{
        quote: "RTO defines the <span class='evidence-highlight'>maximum acceptable time to restore a system</span> after a disruption, and must be shorter than the MTD.",
        source: "NIST",
        document: "NIST SP 800-34 Rev 1",
        section: "Business Impact Analysis",
        url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "During an incident response, the team has contained a malware outbreak. What should be the NEXT phase according to the NIST incident response lifecycle?",
    options: [
        "Preparation",
        "Detection and analysis",
        "Eradication and recovery",
        "Lessons learned"
    ],
    correct: 2,
    explanation: "The NIST incident response lifecycle follows: Preparation, Detection & Analysis, Containment, <strong>Eradication & Recovery</strong>, and Post-Incident Activity (Lessons Learned). After containment, the team must eradicate the threat and <strong>restore systems</strong>.",
    evidence: [{
        quote: "After containment, the <span class='evidence-highlight'>eradication and recovery phase</span> involves removing the threat and restoring affected systems to normal operation.",
        source: "NIST",
        document: "NIST SP 800-61 Rev 2",
        section: "Incident Response Lifecycle",
        url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A forensic investigator arrives at a scene where a potentially compromised server is still running. What should be the FIRST action to preserve volatile evidence?",
    options: [
        "Power off the server immediately",
        "Capture a memory dump (RAM image)",
        "Remove the hard drives",
        "Reboot into safe mode"
    ],
    correct: 1,
    explanation: "The first action should be to <strong>capture a memory dump</strong> because RAM contains volatile evidence (running processes, network connections, encryption keys, malware in memory) that is <strong>lost when the system is powered off</strong>.",
    evidence: [{
        quote: "Volatile data such as <span class='evidence-highlight'>running processes and memory contents must be captured first</span> as they are lost when the system is shut down.",
        source: "NIST",
        document: "NIST SP 800-86",
        section: "Guide to Integrating Forensic Techniques",
        url: "https://csrc.nist.gov/publications/detail/sp/800-86/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "An organization classifies its data into four levels: Public, Internal, Confidential, and Restricted. Customer financial data is classified as Restricted. What is the PRIMARY purpose of data classification?",
    options: [
        "To reduce storage costs",
        "To apply appropriate security controls based on data sensitivity",
        "To organize data alphabetically",
        "To comply with naming conventions"
    ],
    correct: 1,
    explanation: "<strong>Data classification</strong> categorizes data based on sensitivity and business impact to ensure appropriate security controls are applied. Higher classifications like Restricted require <strong>stronger protection measures</strong> including encryption and access restrictions.",
    evidence: [{
        quote: "Data classification ensures <span class='evidence-highlight'>appropriate security controls are applied based on data sensitivity</span> and the potential impact of unauthorized disclosure.",
        source: "NIST",
        document: "NIST SP 800-60 Vol 1 Rev 1",
        section: "Guide to Mapping Information Types",
        url: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A European company processes personal data of EU residents. Under GDPR, a data subject requests that all their personal data be deleted. Assuming no legal basis for retention, the company must comply within what timeframe?",
    options: [
        "72 hours",
        "30 days",
        "90 days",
        "One year"
    ],
    correct: 1,
    explanation: "Under <strong>GDPR Article 17 (Right to Erasure)</strong>, organizations must respond to data deletion requests without undue delay, and generally within <strong>30 days (one month)</strong>. Extensions may apply for complex requests.",
    evidence: [{
        quote: "Under GDPR, data controllers must respond to data subject requests <span class='evidence-highlight'>within one month</span> of receipt, with possible extension for complex requests.",
        source: "European Commission",
        document: "General Data Protection Regulation",
        section: "Article 17 - Right to Erasure",
        url: "https://gdpr-info.eu/art-17-gdpr/"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A hospital experiences a data breach affecting 10,000 patient records. Under HIPAA, who must be notified and within what timeframe?",
    options: [
        "Only affected patients, within 30 days",
        "HHS, affected individuals, and media, within 60 days",
        "Only HHS, within 90 days",
        "State attorney general only, within 24 hours"
    ],
    correct: 1,
    explanation: "Under <strong>HIPAA Breach Notification Rule</strong>, breaches affecting 500+ individuals require notification to the <strong>HHS Secretary, affected individuals, and prominent media outlets</strong> within 60 days of discovery.",
    evidence: [{
        quote: "HIPAA requires notification to <span class='evidence-highlight'>HHS, affected individuals, and media</span> for breaches affecting 500 or more individuals within 60 days.",
        source: "HHS",
        document: "HIPAA Breach Notification Rule",
        section: "45 CFR 164.408",
        url: "https://www.hhs.gov/hipaa/for-professionals/breach-notification/"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A risk assessment identifies a threat with a high likelihood and high impact. The organization decides to purchase cyber insurance to cover potential financial losses. What risk response strategy is this?",
    options: [
        "Risk avoidance",
        "Risk mitigation",
        "Risk transference",
        "Risk acceptance"
    ],
    correct: 2,
    explanation: "<strong>Risk transference</strong> shifts the financial burden of a risk to a third party, typically through insurance or contractual agreements. Cyber insurance transfers the <strong>financial impact</strong> of security incidents to the insurance provider.",
    evidence: [{
        quote: "Risk transference involves <span class='evidence-highlight'>shifting the risk to a third party</span> through insurance, contracts, or outsourcing.",
        source: "NIST",
        document: "NIST SP 800-30 Rev 1",
        section: "Risk Response",
        url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "During a forensic investigation, an analyst creates a bit-for-bit copy of a suspect's hard drive and generates a hash value of both the original and the copy. Why is the hash comparison critical?",
    options: [
        "To compress the evidence for storage",
        "To prove the integrity of the forensic copy matches the original",
        "To encrypt the evidence",
        "To index the files for quick searching"
    ],
    correct: 1,
    explanation: "Hash comparison establishes <strong>evidence integrity</strong> by proving the forensic copy is an exact duplicate of the original. If the hashes match, it demonstrates the evidence has not been altered, maintaining the <strong>chain of custody</strong>.",
    evidence: [{
        quote: "Hash values are used to <span class='evidence-highlight'>verify the integrity of forensic copies</span> by confirming they are exact duplicates of the original evidence.",
        source: "NIST",
        document: "NIST SP 800-86",
        section: "Evidence Integrity",
        url: "https://csrc.nist.gov/publications/detail/sp/800-86/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "An organization's disaster recovery plan specifies that the backup data center should be operational within 4 hours of a disaster declaration. The backup site has pre-configured hardware but requires data restoration from backups. What type of site is this?",
    options: [
        "Hot site",
        "Warm site",
        "Cold site",
        "Mobile site"
    ],
    correct: 1,
    explanation: "A <strong>warm site</strong> has pre-configured hardware and network connectivity but requires data restoration from backups before becoming operational. It offers a balance between the cost of a hot site and the <strong>recovery time of a cold site</strong>.",
    evidence: [{
        quote: "A warm site has <span class='evidence-highlight'>pre-installed hardware and connectivity but requires data restoration</span>, offering a balance between cost and recovery time.",
        source: "NIST",
        document: "NIST SP 800-34 Rev 1",
        section: "Alternate Site Types",
        url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A company's RPO (Recovery Point Objective) for their transaction database is 15 minutes. What does this mean for their backup strategy?",
    options: [
        "The database must be recovered within 15 minutes",
        "The maximum acceptable data loss is 15 minutes of transactions",
        "Backups must be stored for at least 15 minutes",
        "The database can be offline for 15 minutes"
    ],
    correct: 1,
    explanation: "The <strong>Recovery Point Objective (RPO)</strong> defines the maximum acceptable amount of data loss measured in time. An RPO of 15 minutes means backups must occur at least every 15 minutes to limit <strong>potential data loss</strong>.",
    evidence: [{
        quote: "RPO defines the <span class='evidence-highlight'>maximum acceptable period of data loss</span>, determining the minimum frequency of data backups.",
        source: "NIST",
        document: "NIST SP 800-34 Rev 1",
        section: "Recovery Objectives",
        url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "After a security incident involving unauthorized access to a database, the incident response team conducts a review meeting with all stakeholders to identify what went well and what needs improvement. What phase of incident response is this?",
    options: [
        "Containment",
        "Eradication",
        "Recovery",
        "Lessons learned / post-incident activity"
    ],
    correct: 3,
    explanation: "The <strong>lessons learned / post-incident activity</strong> phase reviews the incident response process to identify improvements. This includes documenting the timeline, evaluating effectiveness, and updating <strong>procedures and controls</strong>.",
    evidence: [{
        quote: "Post-incident activity includes <span class='evidence-highlight'>lessons learned meetings to improve future incident response</span> and update security controls.",
        source: "NIST",
        document: "NIST SP 800-61 Rev 2",
        section: "Post-Incident Activity",
        url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A company performs a quantitative risk analysis. The AV is $1,000,000, the EF is 25%, and the ARO is 0.5. What is the Annualized Loss Expectancy (ALE)?",
    options: [
        "$250,000",
        "$125,000",
        "$500,000",
        "$62,500"
    ],
    correct: 1,
    explanation: "ALE = SLE x ARO. First, SLE = AV x EF = $1,000,000 x 0.25 = $250,000. Then ALE = $250,000 x 0.5 = <strong>$125,000</strong>. This represents the expected annual cost of the risk.",
    evidence: [{
        quote: "ALE is calculated as <span class='evidence-highlight'>SLE multiplied by ARO</span> (ALE = SLE x ARO), representing the expected annual cost of a risk.",
        source: "NIST",
        document: "NIST SP 800-30 Rev 1",
        section: "Quantitative Risk Analysis",
        url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A forensic investigator must maintain proper evidence handling procedures throughout an investigation. What document tracks every person who handles the evidence, from collection to court presentation?",
    options: [
        "Incident report",
        "Chain of custody",
        "Audit trail",
        "Evidence log"
    ],
    correct: 1,
    explanation: "The <strong>chain of custody</strong> is a chronological document that tracks every person who handles evidence, when it was transferred, and the purpose. It ensures evidence <strong>integrity and admissibility</strong> in legal proceedings.",
    evidence: [{
        quote: "Chain of custody documentation tracks <span class='evidence-highlight'>every transfer of evidence between parties</span>, ensuring its integrity and admissibility in court.",
        source: "NIST",
        document: "NIST SP 800-86",
        section: "Evidence Handling",
        url: "https://csrc.nist.gov/publications/detail/sp/800-86/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "CCPA gives California residents several rights regarding their personal information. Which of the following is a RIGHT granted under CCPA?",
    options: [
        "Right to demand competitors delete their data",
        "Right to know what personal information is collected and opt out of its sale",
        "Right to access any company's trade secrets",
        "Right to modify other people's data"
    ],
    correct: 1,
    explanation: "The <strong>California Consumer Privacy Act (CCPA)</strong> grants consumers the right to know what personal information businesses collect, the right to delete it, and the <strong>right to opt out of the sale</strong> of their personal information.",
    evidence: [{
        quote: "CCPA provides consumers the <span class='evidence-highlight'>right to know, delete, and opt out of the sale</span> of their personal information.",
        source: "State of California",
        document: "California Consumer Privacy Act",
        section: "Consumer Rights",
        url: "https://oag.ca.gov/privacy/ccpa"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "An organization identifies a risk but determines that the cost of mitigating it exceeds the potential loss. Management formally documents the risk and decides to take no additional action. What risk response is this?",
    options: [
        "Risk avoidance",
        "Risk transference",
        "Risk acceptance",
        "Risk mitigation"
    ],
    correct: 2,
    explanation: "<strong>Risk acceptance</strong> is a deliberate decision to acknowledge a risk and take no additional action, typically when mitigation costs exceed the expected loss. This must be <strong>formally documented by management</strong>.",
    evidence: [{
        quote: "Risk acceptance involves <span class='evidence-highlight'>acknowledging and formally documenting a decision to accept the risk</span> without additional mitigation measures.",
        source: "NIST",
        document: "NIST SP 800-39",
        section: "Risk Response",
        url: "https://csrc.nist.gov/publications/detail/sp/800-39/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A business continuity plan identifies that the order processing system is a critical function. The plan specifies that manual order processing procedures should be activated if the system is down for more than 2 hours. What BCP element does this represent?",
    options: [
        "Recovery strategy",
        "Alternate business practice / workaround procedure",
        "Communication plan",
        "Succession plan"
    ],
    correct: 1,
    explanation: "An <strong>alternate business practice</strong> (manual workaround) is a BCP element that defines how critical business functions continue when primary systems are unavailable. This ensures <strong>continuity of operations</strong> during disruptions.",
    evidence: [{
        quote: "Business continuity plans should include <span class='evidence-highlight'>alternate business practices and manual procedures</span> to maintain critical functions during system outages.",
        source: "NIST",
        document: "NIST SP 800-34 Rev 1",
        section: "Business Continuity Planning",
        url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "During incident response, the team discovers that the attacker used a zero-day exploit. The team captures network packets, memory dumps, and disk images. What type of analysis involves examining these artifacts to understand the attack?",
    options: [
        "Vulnerability assessment",
        "Digital forensics",
        "Penetration testing",
        "Risk assessment"
    ],
    correct: 1,
    explanation: "<strong>Digital forensics</strong> involves the systematic examination of digital evidence (network captures, memory dumps, disk images) to reconstruct events, identify attack methods, and support <strong>incident response and legal proceedings</strong>.",
    evidence: [{
        quote: "Digital forensics involves <span class='evidence-highlight'>collecting, preserving, and analyzing digital evidence</span> to understand security incidents and support legal actions.",
        source: "NIST",
        document: "NIST SP 800-86",
        section: "Digital Forensics Process",
        url: "https://csrc.nist.gov/publications/detail/sp/800-86/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "A risk assessment uses a qualitative approach with a risk matrix. A threat is rated as 'High Likelihood' and 'High Impact.' In a 5x5 risk matrix, this would typically fall into which risk level?",
    options: [
        "Low",
        "Medium",
        "High",
        "Critical"
    ],
    correct: 3,
    explanation: "In a qualitative <strong>5x5 risk matrix</strong>, a threat rated as both High Likelihood and High Impact would fall into the <strong>Critical</strong> risk level, requiring immediate attention and prioritized mitigation.",
    evidence: [{
        quote: "Qualitative risk assessment uses <span class='evidence-highlight'>risk matrices to categorize risks</span> based on the combination of likelihood and impact ratings.",
        source: "NIST",
        document: "NIST SP 800-30 Rev 1",
        section: "Risk Assessment Methodology",
        url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Risk Management",
    question: "An organization must comply with a regulation that requires personal data to be stored within the borders of the country where it was collected. What concept does this requirement enforce?",
    options: [
        "Data masking",
        "Data sovereignty",
        "Data tokenization",
        "Data aggregation"
    ],
    correct: 1,
    explanation: "<strong>Data sovereignty</strong> requires that data is stored and processed within the geographic boundaries where it was collected, subject to local laws. Many countries enforce data sovereignty through <strong>data localization requirements</strong>.",
    evidence: [{
        quote: "Data sovereignty mandates that <span class='evidence-highlight'>data is subject to the laws of the country</span> where it is stored, often requiring local storage.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Data Governance",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A security engineer needs to encrypt large volumes of data quickly. The same key will be used for both encryption and decryption. What type of encryption should be used?",
    options: [
        "Asymmetric encryption (RSA)",
        "Symmetric encryption (AES)",
        "Hashing (SHA-256)",
        "Digital signatures"
    ],
    correct: 1,
    explanation: "<strong>Symmetric encryption (AES)</strong> uses the same key for encryption and decryption. It is significantly faster than asymmetric encryption, making it ideal for <strong>encrypting large volumes of data</strong>.",
    evidence: [{
        quote: "Symmetric encryption uses <span class='evidence-highlight'>the same key for encryption and decryption</span> and is much faster than asymmetric encryption for bulk data.",
        source: "NIST",
        document: "NIST SP 800-175B Rev 1",
        section: "Symmetric Key Algorithms",
        url: "https://csrc.nist.gov/publications/detail/sp/800-175b/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A developer needs to store user passwords securely in a database. The solution should produce a fixed-length output that cannot be reversed to obtain the original password. What cryptographic function should be used?",
    options: [
        "AES encryption",
        "RSA encryption",
        "Cryptographic hashing with salt (bcrypt/Argon2)",
        "Base64 encoding"
    ],
    correct: 2,
    explanation: "<strong>Cryptographic hashing with salt</strong> using algorithms like bcrypt or Argon2 produces an irreversible, fixed-length output. Adding a unique salt to each password prevents <strong>rainbow table attacks</strong> and ensures identical passwords produce different hashes.",
    evidence: [{
        quote: "Passwords should be stored using <span class='evidence-highlight'>salted cryptographic hashing functions</span> like bcrypt or Argon2, which are designed to be computationally expensive.",
        source: "OWASP",
        document: "OWASP Password Storage Cheat Sheet",
        section: "Hashing Algorithms",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "In a PKI environment, a web server presents an SSL/TLS certificate to a browser. The browser checks if the certificate is signed by a trusted Certificate Authority. What ensures the browser can verify the certificate's authenticity?",
    options: [
        "The web server's private key",
        "The CA's public key stored in the browser's trust store",
        "The user's personal certificate",
        "The DNS record for the domain"
    ],
    correct: 1,
    explanation: "Browsers contain a <strong>trust store</strong> with root CA certificates (containing public keys). When a server presents a certificate, the browser uses the <strong>CA's public key</strong> to verify the digital signature on the certificate.",
    evidence: [{
        quote: "Browsers verify certificates using <span class='evidence-highlight'>trusted CA public keys in their certificate store</span> to validate the digital signature chain.",
        source: "NIST",
        document: "NIST SP 800-52 Rev 2",
        section: "Certificate Validation",
        url: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A company wants to ensure that a document has not been tampered with and was truly sent by the claimed sender. What cryptographic mechanism provides both integrity and non-repudiation?",
    options: [
        "Symmetric encryption",
        "Digital signature",
        "Message authentication code (MAC)",
        "Steganography"
    ],
    correct: 1,
    explanation: "A <strong>digital signature</strong> is created by hashing the message and encrypting the hash with the sender's private key. This provides integrity (tamper detection), authentication (sender verification), and <strong>non-repudiation</strong> (sender cannot deny sending).",
    evidence: [{
        quote: "Digital signatures provide <span class='evidence-highlight'>integrity, authentication, and non-repudiation</span> by using the sender's private key to sign a message hash.",
        source: "NIST",
        document: "NIST SP 800-57 Part 1 Rev 5",
        section: "Digital Signatures",
        url: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "During a TLS 1.3 handshake, the client and server need to establish a shared secret over an insecure channel without ever transmitting the secret itself. What key exchange algorithm is commonly used?",
    options: [
        "RSA key transport",
        "Elliptic Curve Diffie-Hellman Ephemeral (ECDHE)",
        "DES key exchange",
        "MD5 key derivation"
    ],
    correct: 1,
    explanation: "<strong>Elliptic Curve Diffie-Hellman Ephemeral (ECDHE)</strong> allows two parties to establish a shared secret over an insecure channel. TLS 1.3 mandates ephemeral key exchange to provide <strong>perfect forward secrecy (PFS)</strong>.",
    evidence: [{
        quote: "TLS 1.3 requires <span class='evidence-highlight'>ephemeral key exchange like ECDHE</span> to provide perfect forward secrecy for all connections.",
        source: "IETF",
        document: "RFC 8446",
        section: "TLS 1.3 Key Exchange",
        url: "https://datatracker.ietf.org/doc/html/rfc8446"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A security team discovers that a legacy application uses MD5 to hash passwords. Why is this a security concern?",
    options: [
        "MD5 produces hashes that are too long to store",
        "MD5 is vulnerable to collision attacks and is computationally fast to brute force",
        "MD5 requires too much processing power",
        "MD5 can only hash small files"
    ],
    correct: 1,
    explanation: "<strong>MD5</strong> is considered cryptographically broken because it is vulnerable to collision attacks (two different inputs producing the same hash) and is computationally fast, making it easy to <strong>brute force</strong> with modern hardware.",
    evidence: [{
        quote: "MD5 is <span class='evidence-highlight'>cryptographically broken due to known collision vulnerabilities</span> and should not be used for security-sensitive applications.",
        source: "NIST",
        document: "NIST SP 800-131A Rev 2",
        section: "Hash Function Transitions",
        url: "https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "An organization needs to revoke a compromised SSL/TLS certificate before its expiration date. What mechanism allows clients to check if a certificate has been revoked in real-time?",
    options: [
        "Certificate Signing Request (CSR)",
        "Online Certificate Status Protocol (OCSP)",
        "Certificate Transparency (CT) logs",
        "Key escrow"
    ],
    correct: 1,
    explanation: "<strong>OCSP (Online Certificate Status Protocol)</strong> allows clients to query a CA's OCSP responder in real-time to check if a specific certificate has been revoked. It provides a <strong>faster alternative to CRL downloads</strong>.",
    evidence: [{
        quote: "OCSP provides <span class='evidence-highlight'>real-time certificate revocation status checking</span> by querying the CA's OCSP responder.",
        source: "IETF",
        document: "RFC 6960",
        section: "Online Certificate Status Protocol",
        url: "https://datatracker.ietf.org/doc/html/rfc6960"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A company implements full disk encryption on all laptops using AES-256 in XTS mode. If a laptop is stolen, what security guarantee does this provide?",
    options: [
        "The thief cannot power on the laptop",
        "The data at rest is protected from unauthorized access",
        "The laptop can be remotely tracked",
        "The data is automatically deleted"
    ],
    correct: 1,
    explanation: "<strong>Full disk encryption (FDE)</strong> protects data at rest by encrypting the entire disk. If a laptop is stolen, the data is unreadable without the encryption key, protecting <strong>confidentiality of stored data</strong>.",
    evidence: [{
        quote: "Full disk encryption protects <span class='evidence-highlight'>data at rest from unauthorized access</span> if the physical device is lost or stolen.",
        source: "NIST",
        document: "NIST SP 800-111",
        section: "Guide to Storage Encryption",
        url: "https://csrc.nist.gov/publications/detail/sp/800-111/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "Two parties need to communicate securely. Party A encrypts the message with Party B's public key. Only Party B can decrypt it. What property of asymmetric encryption makes this possible?",
    options: [
        "Both keys are identical",
        "The private key can only decrypt what the corresponding public key encrypted",
        "Asymmetric encryption uses shared secrets",
        "The public key is kept secret"
    ],
    correct: 1,
    explanation: "In <strong>asymmetric encryption</strong>, a message encrypted with the public key can only be decrypted by the corresponding private key, and vice versa. This mathematical relationship enables <strong>secure communication without sharing secret keys</strong>.",
    evidence: [{
        quote: "Asymmetric encryption uses <span class='evidence-highlight'>mathematically related key pairs</span> where data encrypted with one key can only be decrypted with the other.",
        source: "NIST",
        document: "NIST SP 800-175B Rev 1",
        section: "Asymmetric Key Cryptography",
        url: "https://csrc.nist.gov/publications/detail/sp/800-175b/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "NIST has standardized post-quantum cryptographic algorithms to prepare for the threat of quantum computers. What is the PRIMARY concern that quantum computing poses to current cryptography?",
    options: [
        "Quantum computers will be too slow for encryption",
        "Shor's algorithm can break RSA and ECC by factoring large numbers efficiently",
        "Quantum computers cannot perform mathematical operations",
        "Symmetric encryption becomes completely useless"
    ],
    correct: 1,
    explanation: "<strong>Shor's algorithm</strong> running on a sufficiently powerful quantum computer can efficiently factor large numbers and solve discrete logarithm problems, breaking <strong>RSA, ECC, and Diffie-Hellman</strong>. This is why post-quantum cryptography is being standardized.",
    evidence: [{
        quote: "Quantum computers threaten current public-key cryptography because <span class='evidence-highlight'>Shor's algorithm can break RSA and ECC</span> by efficiently solving integer factorization and discrete logarithm problems.",
        source: "NIST",
        document: "NIST Post-Quantum Cryptography Standardization",
        section: "Post-Quantum Cryptography",
        url: "https://csrc.nist.gov/projects/post-quantum-cryptography"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A blockchain network uses cryptographic hashing to link blocks together. Each block contains the hash of the previous block. What property does this chain of hashes provide?",
    options: [
        "Confidentiality of all transactions",
        "Immutability and tamper evidence",
        "Anonymous transactions",
        "Faster processing speed"
    ],
    correct: 1,
    explanation: "The chain of cryptographic hashes provides <strong>immutability and tamper evidence</strong>. If any block is modified, its hash changes, breaking the chain from that point forward and making <strong>unauthorized modifications detectable</strong>.",
    evidence: [{
        quote: "Blockchain's chain of hashes provides <span class='evidence-highlight'>immutability and tamper evidence</span>, as modifying any block invalidates all subsequent block hashes.",
        source: "NIST",
        document: "NIST IR 8202",
        section: "Blockchain Technology Overview",
        url: "https://csrc.nist.gov/publications/detail/nistir/8202/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "An organization implements certificate pinning in their mobile application. What does certificate pinning accomplish?",
    options: [
        "Automatically renews expired certificates",
        "Associates a specific certificate or public key with a host, preventing MitM with rogue certificates",
        "Increases encryption key length",
        "Distributes certificates to all users"
    ],
    correct: 1,
    explanation: "<strong>Certificate pinning</strong> hardcodes the expected certificate or public key hash in the application. This prevents MitM attacks even if an attacker has a <strong>valid certificate from a compromised CA</strong>, because only the pinned certificate is accepted.",
    evidence: [{
        quote: "Certificate pinning <span class='evidence-highlight'>associates a host with its expected certificate or public key</span>, preventing man-in-the-middle attacks using fraudulent certificates.",
        source: "OWASP",
        document: "OWASP Certificate Pinning Cheat Sheet",
        section: "Certificate and Public Key Pinning",
        url: "https://owasp.org/www-community/controls/Certificate_and_Public_Key_Pinning"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "An application uses AES-256-GCM for encrypting data. What advantage does GCM mode provide over CBC mode?",
    options: [
        "GCM uses a shorter key length",
        "GCM provides both encryption and built-in authentication (AEAD)",
        "GCM is simpler to implement",
        "GCM works without an initialization vector"
    ],
    correct: 1,
    explanation: "<strong>AES-GCM (Galois/Counter Mode)</strong> is an Authenticated Encryption with Associated Data (AEAD) mode that provides both confidentiality and integrity in a single operation. Unlike CBC, it includes <strong>built-in authentication</strong> without needing a separate HMAC.",
    evidence: [{
        quote: "GCM provides <span class='evidence-highlight'>authenticated encryption with associated data (AEAD)</span>, combining confidentiality and integrity in one operation.",
        source: "NIST",
        document: "NIST SP 800-38D",
        section: "Galois/Counter Mode",
        url: "https://csrc.nist.gov/publications/detail/sp/800-38d/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "During TLS 1.3, what is the significance of using ephemeral keys in the key exchange?",
    options: [
        "Ephemeral keys are permanently stored for future use",
        "Ephemeral keys provide perfect forward secrecy (PFS)",
        "Ephemeral keys eliminate the need for certificates",
        "Ephemeral keys are shared between all sessions"
    ],
    correct: 1,
    explanation: "<strong>Ephemeral keys</strong> are generated for each session and discarded afterward. This provides <strong>Perfect Forward Secrecy (PFS)</strong>, ensuring that compromise of long-term keys cannot decrypt past sessions.",
    evidence: [{
        quote: "Ephemeral key exchange provides <span class='evidence-highlight'>perfect forward secrecy</span>, ensuring past sessions cannot be decrypted even if long-term keys are compromised.",
        source: "IETF",
        document: "RFC 8446",
        section: "TLS 1.3 Forward Secrecy",
        url: "https://datatracker.ietf.org/doc/html/rfc8446"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A developer uses SHA-256 to generate a message digest of a 10 GB file. What will be the length of the resulting hash output?",
    options: [
        "128 bits",
        "160 bits",
        "256 bits",
        "512 bits"
    ],
    correct: 2,
    explanation: "<strong>SHA-256</strong> always produces a <strong>256-bit (32-byte)</strong> hash output regardless of input size. This fixed-length output is a fundamental property of cryptographic hash functions.",
    evidence: [{
        quote: "SHA-256 produces a <span class='evidence-highlight'>fixed 256-bit message digest</span> regardless of the input message length.",
        source: "NIST",
        document: "FIPS 180-4",
        section: "Secure Hash Standard",
        url: "https://csrc.nist.gov/publications/detail/fips/180/4/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "An organization wants to encrypt data before sending it to a cloud provider so that the cloud provider cannot read the data. What concept does this implement?",
    options: [
        "Client-side encryption (bring your own key)",
        "Server-side encryption",
        "Tokenization",
        "Data masking"
    ],
    correct: 0,
    explanation: "<strong>Client-side encryption (BYOK - Bring Your Own Key)</strong> encrypts data before it leaves the client's environment. The cloud provider only stores ciphertext and never has access to the <strong>encryption keys or plaintext data</strong>.",
    evidence: [{
        quote: "Client-side encryption ensures <span class='evidence-highlight'>data is encrypted before being sent to the cloud</span>, preventing the cloud provider from accessing plaintext data.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Data Protection",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "A PKI administrator needs to issue a wildcard SSL certificate. What does a wildcard certificate with the common name *.example.com protect?",
    options: [
        "Only www.example.com",
        "All subdomains one level deep (e.g., mail.example.com, app.example.com)",
        "All subdomains at any depth (e.g., a.b.example.com)",
        "Only example.com without any subdomain"
    ],
    correct: 1,
    explanation: "A <strong>wildcard certificate</strong> with *.example.com covers all single-level subdomains such as www.example.com, mail.example.com, and app.example.com. It does <strong>not cover multi-level subdomains</strong> like a.b.example.com.",
    evidence: [{
        quote: "Wildcard certificates cover <span class='evidence-highlight'>all subdomains at one level below the wildcard</span>, but not multi-level subdomains.",
        source: "IETF",
        document: "RFC 6125",
        section: "Wildcard Certificates",
        url: "https://datatracker.ietf.org/doc/html/rfc6125"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "What is the key difference between encryption and hashing?",
    options: [
        "Encryption is faster than hashing",
        "Encryption is reversible with a key; hashing is a one-way function",
        "Hashing produces longer outputs than encryption",
        "Hashing requires a key while encryption does not"
    ],
    correct: 1,
    explanation: "<strong>Encryption is reversible</strong> - data can be decrypted back to plaintext using the appropriate key. <strong>Hashing is a one-way function</strong> that produces a fixed-length digest that cannot be reversed to obtain the original data.",
    evidence: [{
        quote: "Encryption is a <span class='evidence-highlight'>reversible process using keys</span>, while hashing is a one-way function that cannot be reversed to recover the original input.",
        source: "NIST",
        document: "NIST SP 800-175B Rev 1",
        section: "Cryptographic Functions",
        url: "https://csrc.nist.gov/publications/detail/sp/800-175b/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Cryptography",
    question: "An organization implements key escrow for its encryption system. What is the PRIMARY purpose of key escrow?",
    options: [
        "To speed up encryption processing",
        "To allow authorized third parties to recover encrypted data if keys are lost",
        "To eliminate the need for key rotation",
        "To make encryption algorithms stronger"
    ],
    correct: 1,
    explanation: "<strong>Key escrow</strong> stores copies of encryption keys with a trusted third party. This ensures that encrypted data can be recovered if the original key holder is unavailable, loses their key, or in <strong>lawful access scenarios</strong>.",
    evidence: [{
        quote: "Key escrow provides <span class='evidence-highlight'>recovery capability by storing encryption keys with a trusted third party</span> for authorized access when original keys are unavailable.",
        source: "NIST",
        document: "NIST SP 800-57 Part 1 Rev 5",
        section: "Key Recovery",
        url: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A security analyst is reviewing firewall logs and sees traffic on TCP port 3389 from an external IP address. What protocol uses this port, and should this traffic be allowed from the internet?",
    options: [
        "SSH - should be allowed",
        "RDP - should generally be blocked from external sources",
        "HTTPS - should be allowed",
        "DNS - should be allowed"
    ],
    correct: 1,
    explanation: "<strong>TCP port 3389 is used by Remote Desktop Protocol (RDP)</strong>. RDP should generally be blocked from external sources as it is a common target for brute force attacks and exploitation. Remote access should use <strong>VPN or ZTNA</strong> instead.",
    evidence: [{
        quote: "RDP on port 3389 is a <span class='evidence-highlight'>common attack vector when exposed to the internet</span> and should be restricted to VPN or other secure access methods.",
        source: "CISA",
        document: "CISA Alert TA18-074A",
        section: "RDP Security",
        url: "https://www.cisa.gov/news-events/cybersecurity-advisories"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A network administrator captures packets and observes that VLAN tags are being double-encapsulated in 802.1Q frames, allowing traffic to hop from one VLAN to another. What attack is occurring?",
    options: [
        "ARP spoofing",
        "VLAN hopping via double tagging",
        "MAC flooding",
        "DHCP starvation"
    ],
    correct: 1,
    explanation: "<strong>VLAN hopping via double tagging</strong> exploits the 802.1Q protocol by wrapping frames with two VLAN tags. The switch strips the outer tag and forwards the frame to the inner VLAN, allowing the attacker to <strong>bypass VLAN segmentation</strong>.",
    evidence: [{
        quote: "Double tagging VLAN hopping <span class='evidence-highlight'>exploits 802.1Q tag processing</span> to send frames to VLANs the attacker should not have access to.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.4 - Network Attacks",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A company wants to divide its 10.0.0.0/8 network into smaller segments to limit broadcast domains and improve security. The network team creates multiple /24 subnets. What network security concept is being applied?",
    options: [
        "Port mirroring",
        "Network subnetting for segmentation",
        "Link aggregation",
        "Quality of service (QoS)"
    ],
    correct: 1,
    explanation: "<strong>Network subnetting</strong> divides large networks into smaller segments, limiting broadcast domains and enabling security controls between segments. This is a fundamental <strong>network segmentation</strong> technique that improves both performance and security.",
    evidence: [{
        quote: "Subnetting provides <span class='evidence-highlight'>network segmentation by dividing networks into smaller broadcast domains</span>, enabling granular security controls.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.3 - Network Segmentation",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A security analyst notices that an attacker is using Bluetooth to discover and connect to nearby devices without authorization, accessing contacts and messages. What type of Bluetooth attack is this?",
    options: [
        "Bluejacking",
        "Bluesnarfing",
        "Bluebugging",
        "Bluetooth jamming"
    ],
    correct: 1,
    explanation: "<strong>Bluesnarfing</strong> is unauthorized access to information on a Bluetooth-enabled device. The attacker exploits Bluetooth vulnerabilities to access data such as <strong>contacts, messages, calendar entries, and other stored information</strong>.",
    evidence: [{
        quote: "Bluesnarfing involves <span class='evidence-highlight'>unauthorized access to data on Bluetooth-enabled devices</span> by exploiting Bluetooth protocol vulnerabilities.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.4 - Wireless and Bluetooth Attacks",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A network monitoring tool shows that DNS responses for a company's website are being returned with incorrect IP addresses, redirecting users to a malicious site. The company's DNS records on the authoritative server are correct. What attack is occurring?",
    options: [
        "DNS cache poisoning",
        "DNS amplification",
        "DNS zone transfer",
        "Domain registration hijacking"
    ],
    correct: 0,
    explanation: "<strong>DNS cache poisoning</strong> involves inserting fraudulent DNS records into a resolver's cache, causing it to return incorrect IP addresses. Users are redirected to malicious sites even though the <strong>authoritative DNS records are correct</strong>.",
    evidence: [{
        quote: "DNS cache poisoning <span class='evidence-highlight'>corrupts the resolver's cache with false records</span>, redirecting users to attacker-controlled servers.",
        source: "IETF",
        document: "RFC 5452",
        section: "DNS Cache Poisoning Mitigation",
        url: "https://datatracker.ietf.org/doc/html/rfc5452"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "An organization implements Software-Defined Networking (SDN). What is a key security benefit of SDN compared to traditional networking?",
    options: [
        "SDN eliminates the need for encryption",
        "Centralized network visibility and programmable security policies",
        "SDN networks cannot be attacked",
        "SDN replaces the need for firewalls"
    ],
    correct: 1,
    explanation: "<strong>SDN</strong> separates the control plane from the data plane, providing centralized network visibility and the ability to programmatically deploy and enforce <strong>security policies across the entire network</strong> from a single controller.",
    evidence: [{
        quote: "SDN provides <span class='evidence-highlight'>centralized visibility and programmable security policy enforcement</span> through separation of the control and data planes.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Software-Defined Networking",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A security analyst is using Wireshark to capture packets and sees a TCP three-way handshake (SYN, SYN-ACK, ACK) followed by an HTTP GET request in cleartext. On which well-known port is this HTTP traffic most likely occurring?",
    options: [
        "Port 443",
        "Port 80",
        "Port 22",
        "Port 53"
    ],
    correct: 1,
    explanation: "<strong>HTTP traffic uses port 80</strong> by default and transmits data in cleartext. The analyst should verify whether this traffic should be redirected to <strong>HTTPS (port 443)</strong> for encryption.",
    evidence: [{
        quote: "HTTP uses <span class='evidence-highlight'>TCP port 80 for unencrypted web traffic</span>, while HTTPS uses TCP port 443 for encrypted communications.",
        source: "IETF",
        document: "RFC 2616",
        section: "HTTP/1.1",
        url: "https://datatracker.ietf.org/doc/html/rfc2616"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A company implements DNSSEC on their domain. Which cryptographic operation does DNSSEC perform?",
    options: [
        "Encrypts all DNS queries and responses",
        "Digitally signs DNS records to verify authenticity and integrity",
        "Hides DNS records from unauthorized users",
        "Compresses DNS traffic for faster resolution"
    ],
    correct: 1,
    explanation: "<strong>DNSSEC</strong> digitally signs DNS records so resolvers can verify their <strong>authenticity and integrity</strong>. DNSSEC does NOT encrypt DNS traffic; it only provides authentication through cryptographic signatures.",
    evidence: [{
        quote: "DNSSEC provides <span class='evidence-highlight'>authentication and integrity for DNS through digital signatures</span>, but does not provide confidentiality.",
        source: "IETF",
        document: "RFC 4033",
        section: "DNS Security Introduction",
        url: "https://datatracker.ietf.org/doc/html/rfc4033"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A network administrator configures a switch to send copies of all traffic on port 1 to port 24, where a network monitoring tool is connected. What switch feature is being used?",
    options: [
        "Port security",
        "Port mirroring / SPAN",
        "Port trunking",
        "Port forwarding"
    ],
    correct: 1,
    explanation: "<strong>Port mirroring (SPAN - Switched Port Analyzer)</strong> copies traffic from one or more source ports to a destination port where monitoring tools can analyze the traffic. This enables <strong>passive network monitoring</strong> without disrupting traffic flow.",
    evidence: [{
        quote: "Port mirroring/SPAN <span class='evidence-highlight'>copies traffic from source ports to a monitoring port</span> for analysis by IDS or other security tools.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.3 - Network Monitoring",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "An attacker sends a large volume of DNS queries with a spoofed source IP (the victim's IP) to open DNS resolvers. The DNS responses overwhelm the victim. What type of attack is this?",
    options: [
        "DNS tunneling",
        "DNS amplification/reflection attack",
        "DNS cache poisoning",
        "DNS zone transfer"
    ],
    correct: 1,
    explanation: "A <strong>DNS amplification/reflection attack</strong> exploits open DNS resolvers by sending queries with a spoofed source IP. The resolvers send large responses to the victim's IP, creating a <strong>volumetric DDoS attack</strong> that overwhelms the target.",
    evidence: [{
        quote: "DNS amplification attacks use <span class='evidence-highlight'>open resolvers and spoofed source addresses</span> to generate large volumes of traffic directed at the victim.",
        source: "CISA",
        document: "CISA Alert TA13-088A",
        section: "DNS Amplification Attacks",
        url: "https://www.cisa.gov/news-events/cybersecurity-advisories"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A security team implements network segmentation using micro-segmentation. How does micro-segmentation differ from traditional VLAN-based segmentation?",
    options: [
        "Micro-segmentation uses larger network segments",
        "Micro-segmentation applies granular security policies at the workload or application level",
        "Micro-segmentation does not use any firewall rules",
        "Micro-segmentation only works with physical networks"
    ],
    correct: 1,
    explanation: "<strong>Micro-segmentation</strong> applies security policies at the individual workload or application level, rather than at the network segment level. This provides <strong>granular east-west traffic control</strong> within data centers and cloud environments.",
    evidence: [{
        quote: "Micro-segmentation provides <span class='evidence-highlight'>granular security policies at the workload level</span>, controlling lateral movement within network segments.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Micro-segmentation",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "An attacker performs a deauthentication attack on a wireless network. What is the attacker's MOST likely goal?",
    options: [
        "Permanently destroy the access point",
        "Force clients to disconnect so they reconnect, enabling a credential capture or evil twin attack",
        "Increase the network bandwidth",
        "Upgrade the wireless protocol"
    ],
    correct: 1,
    explanation: "A <strong>deauthentication attack</strong> sends forged deauth frames to disconnect clients. The attacker's goal is typically to capture the WPA handshake when clients reconnect, or to force clients to connect to an <strong>evil twin access point</strong>.",
    evidence: [{
        quote: "Deauthentication attacks <span class='evidence-highlight'>force wireless clients to disconnect and reconnect</span>, enabling handshake capture or evil twin attacks.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "1.4 - Wireless Attacks",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "Which protocol provides secure remote command-line access to network devices and encrypts all traffic including credentials?",
    options: [
        "Telnet (port 23)",
        "SSH (port 22)",
        "FTP (port 21)",
        "SNMP v1 (port 161)"
    ],
    correct: 1,
    explanation: "<strong>SSH (Secure Shell) on port 22</strong> provides encrypted remote command-line access. Unlike Telnet, which transmits everything in cleartext, SSH encrypts <strong>all traffic including authentication credentials</strong>.",
    evidence: [{
        quote: "SSH provides <span class='evidence-highlight'>encrypted remote access on port 22</span>, replacing insecure protocols like Telnet that transmit data in cleartext.",
        source: "IETF",
        document: "RFC 4253",
        section: "SSH Transport Layer Protocol",
        url: "https://datatracker.ietf.org/doc/html/rfc4253"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A security engineer is reviewing network traffic and sees SNMP v2c community strings being transmitted in cleartext. What should they recommend to remediate this security concern?",
    options: [
        "Upgrade to SNMP v3 which supports authentication and encryption",
        "Disable SNMP entirely",
        "Use longer community strings",
        "Move SNMP to a non-standard port"
    ],
    correct: 0,
    explanation: "<strong>SNMP v3</strong> adds authentication (using HMAC) and encryption (using AES/DES) that SNMP v1 and v2c lack. SNMP v1/v2c community strings are essentially <strong>passwords transmitted in cleartext</strong>.",
    evidence: [{
        quote: "SNMP v3 provides <span class='evidence-highlight'>authentication and encryption capabilities</span> not available in SNMP v1/v2c, which transmit community strings in cleartext.",
        source: "IETF",
        document: "RFC 3414",
        section: "User-based Security Model for SNMPv3",
        url: "https://datatracker.ietf.org/doc/html/rfc3414"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A company needs to securely transfer files between servers. Which protocol should they use instead of FTP?",
    options: [
        "TFTP",
        "SFTP (SSH File Transfer Protocol)",
        "HTTP",
        "Telnet"
    ],
    correct: 1,
    explanation: "<strong>SFTP (SSH File Transfer Protocol)</strong> provides encrypted file transfer over SSH. Unlike FTP, which transmits credentials and data in cleartext, SFTP encrypts <strong>all traffic including authentication and file contents</strong>.",
    evidence: [{
        quote: "SFTP provides <span class='evidence-highlight'>encrypted file transfer over SSH</span>, replacing insecure FTP which transmits data and credentials in cleartext.",
        source: "IETF",
        document: "RFC 4251",
        section: "SSH Protocol Architecture",
        url: "https://datatracker.ietf.org/doc/html/rfc4251"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A network uses 802.1Q trunk ports to carry traffic for multiple VLANs between switches. What security best practice should be applied to trunk ports?",
    options: [
        "Allow all VLANs on every trunk port",
        "Restrict trunk ports to only carry necessary VLANs and change the native VLAN",
        "Disable trunking on all ports",
        "Use the default VLAN 1 as the native VLAN"
    ],
    correct: 1,
    explanation: "Trunk ports should be configured to <strong>carry only necessary VLANs</strong> (pruning) and the native VLAN should be changed from the default VLAN 1 to a dedicated unused VLAN. This mitigates <strong>VLAN hopping attacks</strong>.",
    evidence: [{
        quote: "Trunk port security includes <span class='evidence-highlight'>pruning unnecessary VLANs and changing the native VLAN</span> from the default to prevent VLAN hopping attacks.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.3 - Switch Security",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "A security analyst discovers that an internal host is communicating with a known command-and-control server on port 8443. The traffic is encrypted and blends in with normal HTTPS traffic. What network security tool would BEST help identify this traffic?",
    options: [
        "Standard packet filter firewall",
        "Network behavior analysis / encrypted traffic analysis tool",
        "Basic port scanner",
        "DNS lookup tool"
    ],
    correct: 1,
    explanation: "<strong>Network behavior analysis / encrypted traffic analysis</strong> tools can detect suspicious patterns in encrypted traffic without decrypting it, using techniques like JA3 fingerprinting, flow analysis, and <strong>behavioral anomaly detection</strong>.",
    evidence: [{
        quote: "Encrypted traffic analysis uses <span class='evidence-highlight'>behavioral patterns and metadata analysis</span> to detect malicious communications without decrypting traffic.",
        source: "NIST",
        document: "NIST SP 800-94",
        section: "Network Monitoring",
        url: "https://csrc.nist.gov/publications/detail/sp/800-94/final"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "What is the primary difference between a network-based intrusion detection system (NIDS) placed on a TAP versus one placed on a SPAN port?",
    options: [
        "TAP provides a passive copy of traffic without affecting the network; SPAN port may drop packets under load",
        "SPAN port is always more reliable than a TAP",
        "TAP only works with wireless networks",
        "There is no difference between them"
    ],
    correct: 0,
    explanation: "A <strong>network TAP (Test Access Point)</strong> provides a passive, full-fidelity copy of traffic without impacting the network. A SPAN port may <strong>drop packets under heavy load</strong> and consumes switch resources.",
    evidence: [{
        quote: "Network TAPs provide <span class='evidence-highlight'>passive, full-fidelity traffic copies</span> without impacting network performance, unlike SPAN ports which may drop packets under load.",
        source: "CompTIA",
        document: "CompTIA Security+ SY0-701 Exam Objectives",
        section: "3.3 - Network Monitoring",
        url: "https://www.comptia.org/certifications/security"
    }]
},
{
    vendor: "security",
    domain: "Network Security",
    question: "An organization needs to ensure that IoT devices on the network are isolated from the corporate LAN and cannot communicate with sensitive servers. What is the BEST approach?",
    options: [
        "Install antivirus on all IoT devices",
        "Place IoT devices on a separate VLAN with restricted access controls",
        "Give IoT devices static IP addresses",
        "Enable WEP encryption for IoT devices"
    ],
    correct: 1,
    explanation: "Placing IoT devices on a <strong>separate VLAN with restricted ACLs</strong> isolates them from the corporate network. This limits the blast radius if an IoT device is compromised and prevents <strong>lateral movement to sensitive systems</strong>.",
    evidence: [{
        quote: "IoT devices should be <span class='evidence-highlight'>segmented on dedicated VLANs</span> with restricted access to prevent compromise from spreading to the corporate network.",
        source: "NIST",
        document: "NIST SP 800-183",
        section: "IoT Network Segmentation",
        url: "https://csrc.nist.gov/publications/detail/sp/800-183/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A SOC analyst receives an alert that a workstation is generating an unusual volume of outbound connections to IP addresses in a country where the company has no business operations. What should be the analyst's FIRST step?",
    options: [
        "Immediately wipe and reimage the workstation",
        "Investigate and validate the alert by analyzing related logs and context",
        "Ignore the alert as a false positive",
        "Shut down the entire network"
    ],
    correct: 1,
    explanation: "The analyst should first <strong>investigate and validate</strong> the alert by examining related logs (proxy, DNS, EDR, authentication) and context before taking action. This prevents <strong>overreacting to false positives</strong> while ensuring real threats are properly assessed.",
    evidence: [{
        quote: "Alert triage involves <span class='evidence-highlight'>validating and contextualizing alerts</span> before taking containment or remediation actions.",
        source: "NIST",
        document: "NIST SP 800-61 Rev 2",
        section: "Detection and Analysis",
        url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A security team uses automated playbooks that trigger when specific SIEM alerts fire. The playbooks automatically isolate affected hosts, block malicious IPs, and create incident tickets. What technology enables this automation?",
    options: [
        "Vulnerability scanner",
        "Security Orchestration, Automation, and Response (SOAR)",
        "Penetration testing tool",
        "Configuration management database"
    ],
    correct: 1,
    explanation: "<strong>SOAR (Security Orchestration, Automation, and Response)</strong> platforms automate incident response workflows through playbooks. They integrate with SIEM, EDR, firewalls, and ticketing systems to <strong>accelerate response times</strong>.",
    evidence: [{
        quote: "SOAR platforms <span class='evidence-highlight'>automate security operations through playbooks</span> that orchestrate actions across multiple security tools.",
        source: "NIST",
        document: "NIST SP 800-61 Rev 2",
        section: "Automated Incident Response",
        url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A penetration tester has been given the IP address ranges of the target network but no other information. They must discover services, vulnerabilities, and attempt exploitation. What type of penetration test is this?",
    options: [
        "White box / full knowledge test",
        "Black box / zero knowledge test",
        "Gray box / partial knowledge test",
        "Red team assessment"
    ],
    correct: 2,
    explanation: "A <strong>gray box / partial knowledge test</strong> provides the tester with limited information such as IP ranges or network diagrams. Black box provides no information, while white box provides <strong>full access to source code and documentation</strong>.",
    evidence: [{
        quote: "Gray box testing provides <span class='evidence-highlight'>limited information such as IP ranges</span>, simulating an attacker with some insider knowledge.",
        source: "NIST",
        document: "NIST SP 800-115",
        section: "Penetration Testing",
        url: "https://csrc.nist.gov/publications/detail/sp/800-115/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A vulnerability scanner reports a critical vulnerability (CVSS 9.8) in a production web server. The security team verifies the finding and determines a patch is available. What is the NEXT step before applying the patch?",
    options: [
        "Apply the patch immediately to production",
        "Test the patch in a staging environment and follow change management procedures",
        "Ignore the vulnerability until the next maintenance window",
        "Uninstall the affected software"
    ],
    correct: 1,
    explanation: "Before applying patches to production, they should be <strong>tested in a staging environment</strong> and processed through change management. This prevents unintended outages while ensuring the vulnerability is addressed in a <strong>controlled manner</strong>.",
    evidence: [{
        quote: "Patches should be <span class='evidence-highlight'>tested in a non-production environment</span> and follow change management procedures before deployment to production systems.",
        source: "NIST",
        document: "NIST SP 800-40 Rev 4",
        section: "Patch Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A SIEM correlation rule fires when it detects a user account that has successful logins from two different countries within a 30-minute window. What type of detection is this rule implementing?",
    options: [
        "Signature-based detection",
        "Impossible travel / geographic anomaly detection",
        "Heuristic detection",
        "Protocol analysis"
    ],
    correct: 1,
    explanation: "<strong>Impossible travel detection</strong> identifies when a user authenticates from geographically distant locations within a timeframe that makes physical travel impossible. This indicates <strong>credential compromise</strong> or account sharing.",
    evidence: [{
        quote: "Impossible travel detection identifies <span class='evidence-highlight'>geographically impossible login patterns</span> indicating potential credential compromise.",
        source: "NIST",
        document: "NIST SP 800-92",
        section: "Log Correlation Rules",
        url: "https://csrc.nist.gov/publications/detail/sp/800-92/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A threat hunter proactively searches for signs of compromise that have not triggered any alerts. They use known TTPs from the MITRE ATT&CK framework to guide their investigation. What differentiates threat hunting from standard SOC monitoring?",
    options: [
        "Threat hunting only uses automated tools",
        "Threat hunting is proactive and hypothesis-driven, not reactive to alerts",
        "Threat hunting replaces the need for SIEM",
        "Threat hunting only looks at network traffic"
    ],
    correct: 1,
    explanation: "<strong>Threat hunting</strong> is a proactive, hypothesis-driven approach where analysts actively search for signs of compromise without waiting for alerts. It assumes the <strong>environment may already be compromised</strong> and seeks to find what automated tools miss.",
    evidence: [{
        quote: "Threat hunting is a <span class='evidence-highlight'>proactive search for threats that evade existing security controls</span>, using hypotheses based on threat intelligence and TTPs.",
        source: "MITRE",
        document: "MITRE ATT&CK Framework",
        section: "Threat Hunting Methodology",
        url: "https://attack.mitre.org/"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "An organization's change management process requires that all changes to production systems be documented, reviewed, and approved before implementation. A system administrator bypasses this process to apply an urgent fix. What security risk does this create?",
    options: [
        "No risk since the fix was needed",
        "Unvetted changes may introduce vulnerabilities or break systems without accountability",
        "The change will automatically revert",
        "Other administrators will be notified automatically"
    ],
    correct: 1,
    explanation: "Bypassing <strong>change management</strong> creates risk because unvetted changes may introduce vulnerabilities, break dependencies, or lack documentation. Proper change management ensures changes are <strong>reviewed, tested, and reversible</strong>.",
    evidence: [{
        quote: "Change management processes ensure <span class='evidence-highlight'>changes are documented, reviewed, and approved</span> to prevent unauthorized modifications that could introduce vulnerabilities.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "CM-3 Configuration Change Control",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A vulnerability scan reveals that 200 systems are missing a critical Windows security patch released three weeks ago. What does this indicate about the organization's security posture?",
    options: [
        "The organization has effective patch management",
        "The patch management process has gaps in coverage or timeliness",
        "The vulnerability scanner is producing false positives",
        "Windows patches are optional"
    ],
    correct: 1,
    explanation: "Having 200 unpatched systems three weeks after a critical patch release indicates <strong>gaps in patch management</strong>. Effective patch management should deploy critical patches within the organization's defined SLA, typically <strong>within 14 days for critical vulnerabilities</strong>.",
    evidence: [{
        quote: "Effective patch management requires <span class='evidence-highlight'>timely deployment of critical security patches</span> within defined service level agreements.",
        source: "NIST",
        document: "NIST SP 800-40 Rev 4",
        section: "Patch Management Lifecycle",
        url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A security analyst is reviewing SIEM logs and creates a correlation rule that triggers when five or more failed login attempts are followed by a successful login within 10 minutes from the same source IP. What attack pattern does this rule detect?",
    options: [
        "Denial of service",
        "Successful brute force authentication attack",
        "Port scanning",
        "DNS tunneling"
    ],
    correct: 1,
    explanation: "This correlation rule detects a <strong>successful brute force attack</strong> pattern - multiple failed attempts followed by a success suggests the attacker eventually found valid credentials. This requires <strong>immediate investigation</strong>.",
    evidence: [{
        quote: "SIEM correlation rules that detect <span class='evidence-highlight'>multiple failed logins followed by success</span> can identify brute force attacks that have successfully compromised credentials.",
        source: "NIST",
        document: "NIST SP 800-92",
        section: "Log Analysis and Correlation",
        url: "https://csrc.nist.gov/publications/detail/sp/800-92/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "During a penetration test, the tester identifies that an external web application has a critical SQL injection vulnerability. According to penetration testing methodology, what should the tester do FIRST?",
    options: [
        "Immediately exploit the vulnerability to gain database access",
        "Document the finding and assess the risk before attempting exploitation",
        "Report it to the media",
        "Patch the vulnerability themselves"
    ],
    correct: 1,
    explanation: "According to penetration testing methodology, the tester should <strong>document the finding and assess the risk</strong> before attempting exploitation. The scope and rules of engagement determine whether exploitation is authorized and to what extent.",
    evidence: [{
        quote: "Penetration testers must <span class='evidence-highlight'>document findings and follow the rules of engagement</span> before attempting exploitation of discovered vulnerabilities.",
        source: "NIST",
        document: "NIST SP 800-115",
        section: "Penetration Testing Methodology",
        url: "https://csrc.nist.gov/publications/detail/sp/800-115/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A security team configures their vulnerability scanner to perform credentialed scans on Windows servers. What advantage do credentialed scans provide over uncredentialed scans?",
    options: [
        "Credentialed scans are faster",
        "Credentialed scans can assess internal configurations, installed software, and missing patches",
        "Credentialed scans only check open ports",
        "Credentialed scans do not require network access"
    ],
    correct: 1,
    explanation: "<strong>Credentialed scans</strong> log into the target systems and can assess internal configurations, installed software versions, missing patches, and local vulnerabilities that are <strong>invisible to uncredentialed network scans</strong>.",
    evidence: [{
        quote: "Credentialed scans provide <span class='evidence-highlight'>deeper visibility into system configurations and patch levels</span> compared to uncredentialed scans.",
        source: "NIST",
        document: "NIST SP 800-115",
        section: "Vulnerability Scanning",
        url: "https://csrc.nist.gov/publications/detail/sp/800-115/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A log entry shows: 'sshd[12345]: Failed password for root from 203.0.113.50 port 49152.' This entry repeats 500 times in 5 minutes. What does this indicate?",
    options: [
        "Normal SSH login activity",
        "Brute force SSH attack targeting the root account",
        "Successful SSH connection",
        "SSH service crash"
    ],
    correct: 1,
    explanation: "500 failed password attempts for root in 5 minutes is a clear indicator of a <strong>brute force SSH attack</strong>. The external IP is systematically trying passwords against the root account, which should be mitigated with <strong>fail2ban, key-based auth, and disabling root SSH login</strong>.",
    evidence: [{
        quote: "Repeated failed authentication attempts from the same source indicate <span class='evidence-highlight'>brute force attack activity</span> requiring immediate response.",
        source: "NIST",
        document: "NIST SP 800-92",
        section: "Log Analysis",
        url: "https://csrc.nist.gov/publications/detail/sp/800-92/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "An organization uses a CVSS score of 7.0 or higher as the threshold for emergency patching. A new vulnerability is published with a CVSS score of 9.1. What CVSS severity rating does this represent?",
    options: [
        "Medium",
        "High",
        "Critical",
        "Low"
    ],
    correct: 2,
    explanation: "CVSS scores of <strong>9.0-10.0 are rated Critical</strong>. The CVSS severity ratings are: None (0.0), Low (0.1-3.9), Medium (4.0-6.9), High (7.0-8.9), and Critical (9.0-10.0). A 9.1 requires <strong>immediate attention</strong>.",
    evidence: [{
        quote: "CVSS scores of <span class='evidence-highlight'>9.0 to 10.0 are rated Critical</span>, indicating vulnerabilities requiring immediate remediation.",
        source: "FIRST",
        document: "Common Vulnerability Scoring System v3.1",
        section: "Qualitative Severity Rating Scale",
        url: "https://www.first.org/cvss/specification-document"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A security team conducts a tabletop exercise simulating a ransomware attack. What is the PRIMARY purpose of a tabletop exercise?",
    options: [
        "To test backup restoration speeds",
        "To walk through incident response procedures and identify gaps in a discussion-based format",
        "To deploy ransomware on the network",
        "To test firewall rules"
    ],
    correct: 1,
    explanation: "A <strong>tabletop exercise</strong> is a discussion-based walkthrough of incident response procedures. Participants talk through scenarios to identify gaps in plans, unclear roles, and missing procedures <strong>without actually executing technical actions</strong>.",
    evidence: [{
        quote: "Tabletop exercises provide a <span class='evidence-highlight'>discussion-based review of incident response plans</span> to identify gaps and improve preparedness.",
        source: "NIST",
        document: "NIST SP 800-84",
        section: "Guide to Test, Training, and Exercise Programs",
        url: "https://csrc.nist.gov/publications/detail/sp/800-84/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "During a security assessment, the team discovers that the organization has no formal process for evaluating and deploying security patches. Patches are applied ad hoc when administrators have time. What should be implemented?",
    options: [
        "A formal patch management policy with defined timelines and responsibilities",
        "Automatic updates on all systems without testing",
        "Ignoring patches to maintain system stability",
        "Only patching when vulnerabilities are actively exploited"
    ],
    correct: 0,
    explanation: "A <strong>formal patch management policy</strong> should define patch classification, testing procedures, deployment timelines, responsibilities, and rollback plans. This ensures patches are applied <strong>consistently and in a timely manner</strong>.",
    evidence: [{
        quote: "Organizations should establish a <span class='evidence-highlight'>formal patch management policy with defined timelines</span> and procedures for testing and deploying patches.",
        source: "NIST",
        document: "NIST SP 800-40 Rev 4",
        section: "Creating a Patch Management Program",
        url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A security operations center uses the following detection methods: signature-based, anomaly-based, and behavioral analysis. Which method is BEST at detecting zero-day attacks?",
    options: [
        "Signature-based detection",
        "Anomaly-based / behavioral analysis",
        "Pattern matching",
        "Checksum validation"
    ],
    correct: 1,
    explanation: "<strong>Anomaly-based / behavioral analysis</strong> can detect zero-day attacks by identifying deviations from normal patterns, even without prior signatures. Signature-based detection requires <strong>known threat signatures</strong> and cannot detect novel attacks.",
    evidence: [{
        quote: "Anomaly-based detection can identify <span class='evidence-highlight'>previously unknown threats by detecting deviations from baseline behavior</span>, unlike signature-based methods.",
        source: "NIST",
        document: "NIST SP 800-94",
        section: "Detection Methodologies",
        url: "https://csrc.nist.gov/publications/detail/sp/800-94/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "An organization maintains a Configuration Management Database (CMDB) that tracks all IT assets, their configurations, and relationships. What is the security benefit of maintaining an accurate CMDB?",
    options: [
        "It eliminates all vulnerabilities",
        "It provides asset visibility for vulnerability management and incident response",
        "It automatically patches all systems",
        "It replaces the need for a SIEM"
    ],
    correct: 1,
    explanation: "An accurate <strong>CMDB</strong> provides comprehensive asset visibility, enabling effective vulnerability management, incident response, and compliance. You cannot protect assets you do not know about, making <strong>asset inventory</strong> foundational to security.",
    evidence: [{
        quote: "Maintaining an accurate asset inventory provides <span class='evidence-highlight'>visibility for vulnerability management and incident response</span>, forming the foundation of a security program.",
        source: "CIS",
        document: "CIS Controls v8",
        section: "Control 1 - Inventory and Control of Enterprise Assets",
        url: "https://www.cisecurity.org/controls"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A penetration tester completes their assessment and prepares a report. What should the report prioritize?",
    options: [
        "Only listing the tools used",
        "Findings ranked by risk with remediation recommendations and evidence",
        "Personal opinions about the IT team",
        "A list of all IP addresses scanned"
    ],
    correct: 1,
    explanation: "A penetration test report should prioritize <strong>findings ranked by risk level</strong> with clear evidence (screenshots, command output), business impact assessment, and actionable <strong>remediation recommendations</strong>.",
    evidence: [{
        quote: "Penetration test reports should present <span class='evidence-highlight'>findings ranked by risk with evidence and remediation recommendations</span> to enable prioritized remediation.",
        source: "NIST",
        document: "NIST SP 800-115",
        section: "Reporting",
        url: "https://csrc.nist.gov/publications/detail/sp/800-115/final"
    }]
},
{
    vendor: "security",
    domain: "Security Operations",
    question: "A SOC analyst needs to determine if a suspicious file is malware. They upload the file's hash to VirusTotal and find that 45 out of 70 antivirus engines flag it as malicious. What type of threat intelligence source is VirusTotal?",
    options: [
        "Internal threat intelligence",
        "Open-source intelligence (OSINT) / community threat intelligence",
        "Classified intelligence",
        "Proprietary vendor intelligence"
    ],
    correct: 1,
    explanation: "<strong>VirusTotal is an OSINT / community threat intelligence platform</strong> that aggregates analysis from multiple antivirus engines. It allows security professionals to check files, URLs, and hashes against a <strong>community-sourced database</strong>.",
    evidence: [{
        quote: "Community threat intelligence platforms like VirusTotal provide <span class='evidence-highlight'>aggregated malware analysis from multiple sources</span> as an open-source intelligence resource.",
        source: "NIST",
        document: "NIST SP 800-150",
        section: "Threat Intelligence Sharing",
        url: "https://csrc.nist.gov/publications/detail/sp/800-150/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization is selecting a security framework to guide its cybersecurity program. The framework should provide a common language for managing cybersecurity risk and be applicable to organizations of all sizes. Which framework BEST meets this requirement?",
    options: [
        "PCI DSS",
        "NIST Cybersecurity Framework (CSF)",
        "SOX",
        "FERPA"
    ],
    correct: 1,
    explanation: "The <strong>NIST Cybersecurity Framework (CSF)</strong> provides a flexible, risk-based approach to managing cybersecurity risk. Its five functions (Identify, Protect, Detect, Respond, Recover) provide a <strong>common language</strong> applicable to all organizations.",
    evidence: [{
        quote: "The NIST CSF provides <span class='evidence-highlight'>a common language for managing cybersecurity risk</span> applicable to organizations of all sizes and sectors.",
        source: "NIST",
        document: "NIST Cybersecurity Framework 2.0",
        section: "Framework Core",
        url: "https://www.nist.gov/cyberframework"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization wants to achieve ISO 27001 certification. What is the PRIMARY requirement for this certification?",
    options: [
        "Deploying specific security products",
        "Implementing and maintaining an Information Security Management System (ISMS)",
        "Passing a penetration test",
        "Having zero security incidents"
    ],
    correct: 1,
    explanation: "<strong>ISO 27001</strong> requires implementing and maintaining an <strong>Information Security Management System (ISMS)</strong> - a systematic approach to managing sensitive information including people, processes, and technology through risk management.",
    evidence: [{
        quote: "ISO 27001 requires organizations to <span class='evidence-highlight'>establish, implement, maintain, and continually improve an ISMS</span> through a risk-based approach.",
        source: "ISO",
        document: "ISO/IEC 27001:2022",
        section: "Information Security Management Systems",
        url: "https://www.iso.org/standard/27001"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "A company creates a document that defines acceptable use of company IT resources, including email, internet, and social media. Employees must sign it upon hiring. What type of security document is this?",
    options: [
        "Standard",
        "Guideline",
        "Acceptable Use Policy (AUP)",
        "Procedure"
    ],
    correct: 2,
    explanation: "An <strong>Acceptable Use Policy (AUP)</strong> defines the rules and guidelines for using organizational IT resources. It sets expectations for appropriate behavior and the consequences of <strong>policy violations</strong>.",
    evidence: [{
        quote: "An AUP defines <span class='evidence-highlight'>acceptable and unacceptable use of organizational IT resources</span>, setting behavioral expectations for employees.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "PL-4 Rules of Behavior",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization conducts annual security awareness training for all employees. The training covers phishing recognition, password hygiene, and social engineering. What is the PRIMARY goal of this training?",
    options: [
        "To satisfy auditor requirements only",
        "To reduce human-related security risks by changing employee behavior",
        "To replace technical security controls",
        "To test employee technical skills"
    ],
    correct: 1,
    explanation: "<strong>Security awareness training</strong> aims to reduce human-related security risks by educating employees about threats and changing their behavior. Humans are often the <strong>weakest link</strong> in the security chain.",
    evidence: [{
        quote: "Security awareness training aims to <span class='evidence-highlight'>reduce human-related security risks</span> by educating personnel about threats and appropriate responses.",
        source: "NIST",
        document: "NIST SP 800-50",
        section: "Building an IT Security Awareness and Training Program",
        url: "https://csrc.nist.gov/publications/detail/sp/800-50/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An external auditor is reviewing an organization's security controls against CIS Benchmarks. They find that several servers do not meet the recommended hardening standards. What type of audit finding is this?",
    options: [
        "Observation",
        "Non-conformity / deficiency",
        "Commendation",
        "Best practice"
    ],
    correct: 1,
    explanation: "Servers not meeting CIS Benchmark hardening standards represent a <strong>non-conformity or deficiency</strong> finding. The auditor will document this finding and the organization must create a <strong>remediation plan</strong> to address the gaps.",
    evidence: [{
        quote: "Audit findings of non-conformity indicate <span class='evidence-highlight'>gaps between actual controls and required standards</span> that require remediation.",
        source: "CIS",
        document: "CIS Controls v8",
        section: "Security Benchmarks",
        url: "https://www.cisecurity.org/cis-benchmarks"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "A multinational company stores customer data in data centers across multiple countries. Some countries require that citizen data remain within national borders. What governance concept must the company address?",
    options: [
        "Data retention",
        "Data sovereignty and localization requirements",
        "Data archiving",
        "Data compression"
    ],
    correct: 1,
    explanation: "<strong>Data sovereignty and localization requirements</strong> mandate that data is stored and processed within the geographic boundaries of the country where it was collected. Organizations must ensure their <strong>data architecture complies with local laws</strong>.",
    evidence: [{
        quote: "Data sovereignty requirements mandate that <span class='evidence-highlight'>data is stored and processed within national borders</span> in compliance with local laws and regulations.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Data Governance",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization engages a third-party vendor to process customer data. Before signing the contract, the security team performs a vendor risk assessment. What should this assessment evaluate?",
    options: [
        "Only the vendor's financial stability",
        "The vendor's security controls, compliance certifications, and data handling practices",
        "Only the vendor's physical location",
        "The vendor's marketing materials"
    ],
    correct: 1,
    explanation: "A <strong>vendor risk assessment</strong> should evaluate the vendor's security controls, compliance certifications (SOC 2, ISO 27001), data handling practices, incident response capabilities, and <strong>contractual security obligations</strong>.",
    evidence: [{
        quote: "Third-party risk assessments should evaluate <span class='evidence-highlight'>vendor security controls, compliance, and data handling practices</span> before engaging in data processing relationships.",
        source: "NIST",
        document: "NIST SP 800-161r1",
        section: "Supply Chain Risk Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "What is the difference between a security policy, a standard, and a procedure?",
    options: [
        "They are all the same thing",
        "A policy defines what; a standard defines how much; a procedure defines how step-by-step",
        "A procedure is higher level than a policy",
        "Standards are optional while policies are mandatory"
    ],
    correct: 1,
    explanation: "A <strong>policy</strong> is a high-level statement of intent (what). A <strong>standard</strong> defines mandatory requirements and specifications (how much). A <strong>procedure</strong> provides detailed step-by-step instructions for implementation (how).",
    evidence: [{
        quote: "Security documentation hierarchy: <span class='evidence-highlight'>policies define intent, standards define requirements, and procedures define step-by-step implementation</span>.",
        source: "NIST",
        document: "NIST SP 800-12 Rev 1",
        section: "Security Policy Hierarchy",
        url: "https://csrc.nist.gov/publications/detail/sp/800-12/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization's security policy requires that all employees complete phishing simulation training quarterly. 30% of employees fail the latest simulation. What should the security team do?",
    options: [
        "Terminate the employees who failed",
        "Provide additional targeted training and conduct more frequent simulations for those who failed",
        "Eliminate the phishing simulation program",
        "Ignore the results"
    ],
    correct: 1,
    explanation: "Employees who fail phishing simulations should receive <strong>additional targeted training</strong> and more frequent testing. The goal is to <strong>improve awareness and behavior</strong>, not to punish employees.",
    evidence: [{
        quote: "Employees who fail phishing simulations should receive <span class='evidence-highlight'>additional targeted training and increased simulation frequency</span> to improve their threat recognition.",
        source: "NIST",
        document: "NIST SP 800-50",
        section: "Awareness Training Programs",
        url: "https://csrc.nist.gov/publications/detail/sp/800-50/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "A financial services company must comply with SOX (Sarbanes-Oxley Act). What is the PRIMARY security focus of SOX compliance?",
    options: [
        "Protecting credit card data",
        "Ensuring the integrity of financial reporting and internal controls",
        "Protecting health information",
        "Securing email communications"
    ],
    correct: 1,
    explanation: "<strong>SOX (Sarbanes-Oxley Act)</strong> focuses on the integrity of financial reporting by requiring internal controls and audit trails. IT security controls that protect financial data and reporting systems are essential for <strong>SOX compliance</strong>.",
    evidence: [{
        quote: "SOX requires <span class='evidence-highlight'>internal controls over financial reporting</span> to ensure accuracy and integrity of financial statements.",
        source: "SEC",
        document: "Sarbanes-Oxley Act of 2002",
        section: "Section 404 - Internal Controls",
        url: "https://www.sec.gov/about/laws/soa2002.pdf"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization implements the CIS Controls as their security baseline. The CIS Controls are organized into Implementation Groups (IGs). What does Implementation Group 1 (IG1) represent?",
    options: [
        "The most advanced controls for large enterprises",
        "Essential cyber hygiene controls applicable to all organizations",
        "Controls only for government agencies",
        "Optional controls for small businesses"
    ],
    correct: 1,
    explanation: "CIS Controls <strong>Implementation Group 1 (IG1)</strong> represents essential cyber hygiene - the foundational set of controls that every organization, regardless of size, should implement. They address the <strong>most common attack vectors</strong>.",
    evidence: [{
        quote: "CIS IG1 represents <span class='evidence-highlight'>essential cyber hygiene</span> that all organizations should implement as a minimum security baseline.",
        source: "CIS",
        document: "CIS Controls v8",
        section: "Implementation Groups",
        url: "https://www.cisecurity.org/controls"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization's data retention policy specifies that financial records must be retained for 7 years and then securely destroyed. What happens if the organization destroys records before the retention period expires?",
    options: [
        "Nothing, early destruction is acceptable",
        "Potential regulatory violations, legal liability, and compliance failures",
        "The records automatically regenerate",
        "An audit is automatically triggered"
    ],
    correct: 1,
    explanation: "Premature destruction of records can result in <strong>regulatory violations, legal liability, and compliance failures</strong>. Data retention policies must align with legal, regulatory, and business requirements to ensure <strong>defensible disposition</strong>.",
    evidence: [{
        quote: "Premature destruction of records subject to retention requirements can result in <span class='evidence-highlight'>regulatory violations and legal liability</span>.",
        source: "NIST",
        document: "NIST SP 800-88 Rev 1",
        section: "Media Sanitization",
        url: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "A security team must ensure that their organization complies with PCI DSS for handling credit card data. Which of the following is a PCI DSS requirement?",
    options: [
        "Encrypting all employee emails",
        "Maintaining a firewall configuration to protect cardholder data",
        "Requiring biometric authentication for all users",
        "Conducting penetration tests monthly"
    ],
    correct: 1,
    explanation: "<strong>PCI DSS Requirement 1</strong> mandates installing and maintaining network security controls (firewalls) to protect cardholder data. This includes defining rules to restrict traffic to the <strong>cardholder data environment</strong>.",
    evidence: [{
        quote: "PCI DSS Requirement 1 requires <span class='evidence-highlight'>network security controls to protect cardholder data</span> environments.",
        source: "PCI Security Standards Council",
        document: "PCI DSS v4.0",
        section: "Requirement 1",
        url: "https://www.pcisecuritystandards.org/"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization is required to appoint a Data Protection Officer (DPO) under GDPR. In which scenario is a DPO mandatory?",
    options: [
        "For any company with more than 10 employees",
        "When the organization's core activities involve large-scale processing of personal data",
        "Only for technology companies",
        "Only when data breaches have occurred"
    ],
    correct: 1,
    explanation: "GDPR requires a <strong>DPO</strong> when an organization's core activities involve regular and systematic monitoring of data subjects on a large scale, or <strong>large-scale processing of special categories of data</strong> (e.g., health data).",
    evidence: [{
        quote: "A DPO is required when the organization's core activities involve <span class='evidence-highlight'>large-scale processing of personal data</span> or systematic monitoring of data subjects.",
        source: "European Commission",
        document: "General Data Protection Regulation",
        section: "Article 37 - Designation of the DPO",
        url: "https://gdpr-info.eu/art-37-gdpr/"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "During a compliance audit, the auditor asks to see evidence that the organization regularly reviews user access rights to ensure they are appropriate. What process is the auditor verifying?",
    options: [
        "Vulnerability scanning",
        "User access review / recertification",
        "Penetration testing",
        "Configuration management"
    ],
    correct: 1,
    explanation: "<strong>User access reviews (recertification)</strong> are periodic reviews of user access rights to ensure they remain appropriate for current job functions. This helps identify and remove <strong>excessive or orphaned privileges</strong>.",
    evidence: [{
        quote: "Regular user access reviews ensure <span class='evidence-highlight'>access rights remain appropriate for current job functions</span> and identify excessive privileges.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "AC-2 Account Management",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization conducts an internal audit of its security controls and finds that several controls documented in policies are not actually implemented. What should the organization do?",
    options: [
        "Delete the policies to match reality",
        "Create a remediation plan to implement the missing controls and update risk assessments",
        "Ignore the findings since it was an internal audit",
        "Blame the IT team"
    ],
    correct: 1,
    explanation: "The organization should create a <strong>remediation plan</strong> with timelines and responsible parties to implement the missing controls. Risk assessments should be updated to reflect the <strong>current actual security posture</strong> until remediation is complete.",
    evidence: [{
        quote: "Gaps between documented policies and implemented controls require <span class='evidence-highlight'>remediation plans with defined timelines</span> and updated risk assessments.",
        source: "NIST",
        document: "NIST SP 800-53A Rev 5",
        section: "Assessing Security Controls",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization enters into a contract with a cloud provider. The contract includes a clause requiring the provider to notify the organization within 72 hours of discovering a data breach. What type of contractual provision is this?",
    options: [
        "Service Level Agreement (SLA)",
        "Data breach notification clause",
        "Non-disclosure agreement (NDA)",
        "Warranty provision"
    ],
    correct: 1,
    explanation: "A <strong>data breach notification clause</strong> contractually obligates the cloud provider to notify the organization of security incidents within a specified timeframe. This aligns with regulations like <strong>GDPR's 72-hour notification requirement</strong>.",
    evidence: [{
        quote: "Data breach notification clauses require providers to <span class='evidence-highlight'>notify customers of security incidents within contractually defined timeframes</span>.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Service Agreements",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "A security framework consists of five core functions: Identify, Protect, Detect, Respond, and Recover. Which framework uses this structure?",
    options: [
        "ISO 27001",
        "NIST Cybersecurity Framework (CSF)",
        "CIS Controls",
        "COBIT"
    ],
    correct: 1,
    explanation: "The <strong>NIST Cybersecurity Framework (CSF)</strong> is organized around five core functions: Identify, Protect, Detect, Respond, and Recover. CSF 2.0 adds a sixth function: <strong>Govern</strong>.",
    evidence: [{
        quote: "The NIST CSF organizes cybersecurity activities into <span class='evidence-highlight'>five core functions: Identify, Protect, Detect, Respond, and Recover</span>.",
        source: "NIST",
        document: "NIST Cybersecurity Framework 2.0",
        section: "Core Functions",
        url: "https://www.nist.gov/cyberframework"
    }]
},
{
    vendor: "security",
    domain: "Governance & Compliance",
    question: "An organization wants to demonstrate to customers that its security controls have been independently verified. They engage an accounting firm to perform a SOC 2 Type II audit. What does SOC 2 Type II evaluate?",
    options: [
        "Financial statement accuracy",
        "Design and operating effectiveness of security controls over a period of time",
        "Only the design of security controls at a point in time",
        "Employee satisfaction with security"
    ],
    correct: 1,
    explanation: "A <strong>SOC 2 Type II</strong> audit evaluates both the design AND operating effectiveness of an organization's security controls <strong>over a period of time</strong> (typically 6-12 months). Type I only evaluates design at a point in time.",
    evidence: [{
        quote: "SOC 2 Type II reports evaluate the <span class='evidence-highlight'>design and operating effectiveness of controls over a period of time</span>, providing assurance to customers.",
        source: "AICPA",
        document: "SOC 2 Reporting Framework",
        section: "Type II Reports",
        url: "https://www.aicpa.org/topic/audit-assurance/audit-and-assurance-greater-than-soc-2"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization deploys a solution that sits between users and cloud services, enforcing security policies for cloud access, detecting shadow IT, and providing data loss prevention. What is this solution called?",
    options: [
        "Web application firewall (WAF)",
        "Cloud Access Security Broker (CASB)",
        "Content delivery network (CDN)",
        "Load balancer"
    ],
    correct: 1,
    explanation: "A <strong>Cloud Access Security Broker (CASB)</strong> sits between users and cloud services to enforce security policies, provide visibility into cloud usage, detect shadow IT, and apply <strong>DLP controls for cloud applications</strong>.",
    evidence: [{
        quote: "CASBs provide <span class='evidence-highlight'>visibility, compliance, data security, and threat protection</span> for cloud services by sitting between users and cloud providers.",
        source: "NIST",
        document: "NIST SP 800-210",
        section: "Cloud Access Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-210/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "In a public cloud IaaS deployment, the customer is responsible for patching the operating systems of their virtual machines. The cloud provider is responsible for the physical hardware and hypervisor. What model defines these responsibilities?",
    options: [
        "Bell-LaPadula model",
        "Shared responsibility model",
        "Clark-Wilson model",
        "Biba model"
    ],
    correct: 1,
    explanation: "The <strong>shared responsibility model</strong> defines the security responsibilities split between the cloud provider and the customer. In IaaS, the provider manages physical infrastructure while the customer manages <strong>OS, applications, and data</strong>.",
    evidence: [{
        quote: "The shared responsibility model defines how <span class='evidence-highlight'>security responsibilities are divided between the cloud provider and customer</span> based on the service model.",
        source: "NIST",
        document: "NIST SP 800-145",
        section: "Cloud Computing Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-145/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A security researcher discovers a vulnerability that allows a process running in one virtual machine to access memory of another VM on the same hypervisor. What is this attack called?",
    options: [
        "Container breakout",
        "VM escape",
        "Privilege escalation",
        "Buffer overflow"
    ],
    correct: 1,
    explanation: "A <strong>VM escape</strong> occurs when an attacker breaks out of the virtual machine's isolation and interacts with the hypervisor or other VMs. This is one of the most serious <strong>virtualization security threats</strong>.",
    evidence: [{
        quote: "VM escape occurs when an attacker <span class='evidence-highlight'>breaks out of the guest VM isolation</span> to access the hypervisor or other virtual machines.",
        source: "NIST",
        document: "NIST SP 800-125",
        section: "VM Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-125/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization consolidates its security services into a single cloud-delivered platform that combines SD-WAN, CASB, ZTNA, FWaaS, and SWG. What is this converged security architecture called?",
    options: [
        "SIEM",
        "Secure Access Service Edge (SASE)",
        "SOC as a Service",
        "Managed Detection and Response (MDR)"
    ],
    correct: 1,
    explanation: "<strong>SASE (Secure Access Service Edge)</strong> converges network and security services into a single cloud-delivered platform. It combines SD-WAN with security functions like CASB, ZTNA, FWaaS, and SWG for <strong>unified, cloud-native security</strong>.",
    evidence: [{
        quote: "SASE converges <span class='evidence-highlight'>network and security services into a cloud-delivered architecture</span> combining SD-WAN, CASB, ZTNA, and SWG.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "SASE Architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A DevOps team builds container images from a base image stored in a public registry. A security scan reveals that the base image contains known vulnerabilities. What is the BEST remediation?",
    options: [
        "Ignore the vulnerabilities since they are in the base image",
        "Use a hardened, scanned base image from a trusted private registry",
        "Add more layers to the container to hide the vulnerabilities",
        "Run the container with root privileges to override the vulnerabilities"
    ],
    correct: 1,
    explanation: "Organizations should use <strong>hardened, vulnerability-scanned base images from trusted private registries</strong>. This ensures a known-good foundation for containers and prevents <strong>inherited vulnerabilities</strong> from public images.",
    evidence: [{
        quote: "Container base images should be <span class='evidence-highlight'>sourced from trusted registries and regularly scanned</span> for vulnerabilities before deployment.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "Container Image Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A serverless function processes user uploads. An attacker discovers that by uploading a specially crafted file, they can cause the function to execute arbitrary commands. What security concern specific to serverless computing is this?",
    options: [
        "Hypervisor vulnerability",
        "Injection vulnerability in serverless function code",
        "Physical server compromise",
        "BIOS rootkit"
    ],
    correct: 1,
    explanation: "<strong>Injection vulnerabilities in serverless functions</strong> occur when user input is not properly validated. Since serverless functions are event-driven and process external inputs, they are susceptible to <strong>command injection, SQL injection, and similar attacks</strong>.",
    evidence: [{
        quote: "Serverless functions are susceptible to <span class='evidence-highlight'>injection attacks when processing untrusted input</span> without proper validation and sanitization.",
        source: "OWASP",
        document: "OWASP Serverless Top 10",
        section: "Injection Flaws",
        url: "https://owasp.org/www-project-serverless-top-10/"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization migrates to a cloud provider and wants to ensure that their data can be forensically analyzed in the event of a security incident. What cloud-specific challenge must they address?",
    options: [
        "Cloud providers never retain any logs",
        "Volatile cloud resources, shared infrastructure, and jurisdictional issues complicate forensics",
        "Cloud forensics is identical to on-premises forensics",
        "Cloud providers always perform forensics automatically"
    ],
    correct: 1,
    explanation: "<strong>Cloud forensics</strong> faces unique challenges: ephemeral resources can be destroyed quickly, shared infrastructure limits access, and data may span <strong>multiple jurisdictions</strong>. Organizations must plan for cloud-specific evidence collection.",
    evidence: [{
        quote: "Cloud forensics faces challenges including <span class='evidence-highlight'>ephemeral resources, shared infrastructure, and multi-jurisdictional data</span> that complicate evidence collection.",
        source: "NIST",
        document: "NIST SP 800-201",
        section: "Cloud Forensics Challenges",
        url: "https://csrc.nist.gov/publications/detail/sp/800-201/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A cloud security team discovers that an S3 bucket containing customer data has been configured as publicly accessible. What type of cloud security issue is this?",
    options: [
        "DDoS attack",
        "Cloud storage misconfiguration",
        "API rate limiting issue",
        "Load balancer failure"
    ],
    correct: 1,
    explanation: "<strong>Cloud storage misconfiguration</strong> is one of the most common causes of cloud data breaches. Publicly accessible storage buckets expose sensitive data to anyone on the internet, often due to <strong>improper access control settings</strong>.",
    evidence: [{
        quote: "Misconfigured cloud storage is a <span class='evidence-highlight'>leading cause of cloud data breaches</span>, often resulting from overly permissive access controls.",
        source: "CIS",
        document: "CIS Cloud Benchmarks",
        section: "Storage Security",
        url: "https://www.cisecurity.org/cis-benchmarks"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization deploys a Secure Web Gateway (SWG) as part of their cloud security architecture. What is the PRIMARY function of an SWG?",
    options: [
        "Physical server load balancing",
        "Inspecting and filtering web traffic to enforce security policies and block threats",
        "Managing DNS records",
        "Configuring VPN tunnels"
    ],
    correct: 1,
    explanation: "A <strong>Secure Web Gateway (SWG)</strong> inspects all web traffic (HTTP/HTTPS) to enforce security policies, block malicious websites, prevent malware downloads, and enforce <strong>acceptable use policies for web access</strong>.",
    evidence: [{
        quote: "SWGs <span class='evidence-highlight'>inspect and filter web traffic to enforce security policies</span>, block malware, and prevent access to malicious or unauthorized websites.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Secure Web Gateways",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A security architect implements ZTNA (Zero Trust Network Access) to replace the traditional VPN for remote access. What is a key advantage of ZTNA over traditional VPN?",
    options: [
        "ZTNA provides full network access once authenticated",
        "ZTNA provides application-specific access based on identity and context, not broad network access",
        "ZTNA does not require authentication",
        "ZTNA is always faster than VPN"
    ],
    correct: 1,
    explanation: "<strong>ZTNA</strong> provides access to specific applications rather than the entire network. Access decisions are based on user identity, device posture, and context, reducing the <strong>attack surface compared to VPN's broad network access</strong>.",
    evidence: [{
        quote: "ZTNA provides <span class='evidence-highlight'>application-specific access based on identity and context</span>, reducing the attack surface compared to traditional VPN network-level access.",
        source: "NIST",
        document: "NIST SP 800-207",
        section: "Zero Trust Network Access",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A company uses Kubernetes to orchestrate containers. A security review finds that pods are running with default service accounts that have excessive permissions. What should be done to remediate this?",
    options: [
        "Delete all service accounts",
        "Implement least-privilege service accounts with RBAC policies for each pod",
        "Run all pods as root to simplify permissions",
        "Disable Kubernetes RBAC"
    ],
    correct: 1,
    explanation: "Each pod should use a <strong>dedicated service account with least-privilege RBAC policies</strong>. The default service account often has more permissions than needed, increasing the <strong>blast radius of a container compromise</strong>.",
    evidence: [{
        quote: "Kubernetes pods should use <span class='evidence-highlight'>least-privilege service accounts with RBAC</span> rather than default accounts with excessive permissions.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "Container Orchestration Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization uses infrastructure as code (IaC) templates to deploy cloud resources. A security scan of the templates reveals hardcoded API keys and database passwords. What security practice should be implemented?",
    options: [
        "Store credentials in plain text files instead",
        "Use a secrets management solution (e.g., HashiCorp Vault, AWS Secrets Manager)",
        "Share credentials via email",
        "Embed credentials in source code comments"
    ],
    correct: 1,
    explanation: "Hardcoded credentials in IaC templates should be replaced with references to a <strong>secrets management solution</strong>. Tools like HashiCorp Vault or AWS Secrets Manager provide <strong>secure storage, rotation, and access control</strong> for sensitive credentials.",
    evidence: [{
        quote: "Secrets management solutions provide <span class='evidence-highlight'>secure storage and access control for credentials</span>, eliminating hardcoded secrets in code and templates.",
        source: "NIST",
        document: "NIST SP 800-53 Rev 5",
        section: "SC-28 Protection of Information at Rest",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "In a multi-tenant cloud environment, what control prevents one tenant from accessing another tenant's data?",
    options: [
        "Physical separation of servers",
        "Logical isolation through hypervisor enforcement and access controls",
        "Using different internet service providers",
        "Running different operating systems"
    ],
    correct: 1,
    explanation: "<strong>Logical isolation</strong> through hypervisor enforcement, network segmentation, and access controls ensures that tenants in a multi-tenant environment cannot access each other's data. This is fundamental to <strong>cloud security architecture</strong>.",
    evidence: [{
        quote: "Multi-tenant isolation is achieved through <span class='evidence-highlight'>logical controls including hypervisor enforcement and access controls</span> that prevent cross-tenant data access.",
        source: "NIST",
        document: "NIST SP 800-125",
        section: "Multi-Tenant Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-125/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A company's cloud security posture management (CSPM) tool detects that several cloud resources have overly permissive IAM policies granting full administrator access. What is the recommended remediation?",
    options: [
        "Grant everyone administrator access for consistency",
        "Apply the principle of least privilege by scoping IAM policies to required permissions only",
        "Disable IAM entirely",
        "Ignore the findings as the cloud provider handles security"
    ],
    correct: 1,
    explanation: "Overly permissive IAM policies should be remediated by applying <strong>least privilege</strong>. IAM policies should be scoped to grant only the specific permissions needed for each role or service, reducing the <strong>risk of privilege abuse</strong>.",
    evidence: [{
        quote: "Cloud IAM policies should enforce <span class='evidence-highlight'>least privilege by granting only required permissions</span>, minimizing the risk of unauthorized actions.",
        source: "CIS",
        document: "CIS Cloud Benchmarks",
        section: "IAM Configuration",
        url: "https://www.cisecurity.org/cis-benchmarks"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization needs to scan their cloud environment for compliance with CIS benchmarks across multiple cloud providers (AWS, Azure, GCP). What type of tool is designed for this purpose?",
    options: [
        "Endpoint Detection and Response (EDR)",
        "Cloud Security Posture Management (CSPM)",
        "Physical access control system",
        "Password manager"
    ],
    correct: 1,
    explanation: "<strong>Cloud Security Posture Management (CSPM)</strong> tools continuously monitor cloud environments for compliance with security best practices and benchmarks like CIS. They detect misconfigurations across <strong>multi-cloud environments</strong>.",
    evidence: [{
        quote: "CSPM tools <span class='evidence-highlight'>continuously monitor cloud configurations for compliance</span> with security benchmarks and best practices across cloud providers.",
        source: "NIST",
        document: "NIST SP 800-210",
        section: "Cloud Security Assessment",
        url: "https://csrc.nist.gov/publications/detail/sp/800-210/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A development team uses a CI/CD pipeline that automatically builds, tests, and deploys containerized applications. A security tool scans container images in the pipeline and blocks deployment if critical vulnerabilities are found. What DevSecOps practice is this?",
    options: [
        "Post-deployment monitoring",
        "Shift-left security with automated vulnerability scanning in the CI/CD pipeline",
        "Manual code review",
        "Annual security assessment"
    ],
    correct: 1,
    explanation: "<strong>Shift-left security</strong> integrates security testing early in the development pipeline (CI/CD). Automated vulnerability scanning of container images before deployment prevents <strong>vulnerable containers from reaching production</strong>.",
    evidence: [{
        quote: "Shift-left security integrates <span class='evidence-highlight'>automated security testing into CI/CD pipelines</span>, catching vulnerabilities before deployment to production.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "DevSecOps Practices",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization's cloud provider experiences a major outage in one region. The organization's application remains available because it automatically fails over to another region. What cloud architecture concept enables this?",
    options: [
        "Vertical scaling",
        "Multi-region / geographic redundancy",
        "Single-region deployment",
        "Cold site backup"
    ],
    correct: 1,
    explanation: "<strong>Multi-region / geographic redundancy</strong> deploys applications across multiple cloud regions. If one region experiences an outage, traffic automatically fails over to another region, ensuring <strong>high availability and disaster recovery</strong>.",
    evidence: [{
        quote: "Multi-region deployments provide <span class='evidence-highlight'>geographic redundancy and automatic failover</span> to ensure high availability during regional outages.",
        source: "NIST",
        document: "NIST SP 800-34 Rev 1",
        section: "Cloud Disaster Recovery",
        url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "A security team implements cloud workload protection that monitors running containers for anomalous behavior, such as unexpected processes, network connections, or file system changes. What type of security tool is this?",
    options: [
        "Vulnerability scanner",
        "Cloud Workload Protection Platform (CWPP)",
        "DNS filter",
        "Password manager"
    ],
    correct: 1,
    explanation: "A <strong>Cloud Workload Protection Platform (CWPP)</strong> provides runtime security for cloud workloads including VMs, containers, and serverless functions. It monitors for <strong>anomalous behavior and threats during execution</strong>.",
    evidence: [{
        quote: "CWPP provides <span class='evidence-highlight'>runtime protection for cloud workloads</span>, monitoring containers and VMs for anomalous behavior and security threats.",
        source: "NIST",
        document: "NIST SP 800-190",
        section: "Cloud Workload Security",
        url: "https://csrc.nist.gov/publications/detail/sp/800-190/final"
    }]
},
{
    vendor: "security",
    domain: "Cloud & Virtualization Security",
    question: "An organization stores sensitive data in a cloud database. They implement column-level encryption so that even cloud provider administrators cannot read the data. What security principle does this support?",
    options: [
        "Availability",
        "Confidentiality through encryption with customer-managed keys",
        "Integrity checking",
        "Non-repudiation"
    ],
    correct: 1,
    explanation: "<strong>Confidentiality through encryption with customer-managed keys</strong> ensures that only the data owner can decrypt sensitive data. Even cloud provider administrators with infrastructure access <strong>cannot read encrypted data without the customer's keys</strong>.",
    evidence: [{
        quote: "Customer-managed encryption keys ensure <span class='evidence-highlight'>data confidentiality even from cloud provider personnel</span> by keeping decryption capabilities solely with the data owner.",
        source: "NIST",
        document: "NIST SP 800-144",
        section: "Cloud Data Encryption",
        url: "https://csrc.nist.gov/publications/detail/sp/800-144/final"
    }]
}