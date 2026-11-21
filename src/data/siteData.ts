export const COMPANY = {
  fullName: 'FURIOUS INDUSTRIAL SOLUTION',
  titleName: 'Furious Industrial Solution',
  shortName: 'FIS',
  owner: 'Ajit Patil',
  phoneDisplay: '+91 98322227557',
  phoneHref: 'tel:+9198322227557',
  whatsappNumber: '9198322227557',
  defaultWhatsAppMessage:
    'Hello, I would like to discuss a condition monitoring / machinery reliability service requirement.',
  positioning: 'Condition Monitoring & Reliability Experts',
  tagline: 'Detect Early. Correct Precisely. Run Reliably.',
  logoUrl: '/assets/aistudio/Furious_Industrial_Solutions_Brochure_-_Page_1_80144863.png',
  heroImageUrl: '/src/assets/images/hero_rotating_machinery_1795286897759.jpg',
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || COMPANY.defaultWhatsAppMessage;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const SERVICE_FORM_OPTIONS = [
  'Vibration Analysis',
  'Laser Shaft Alignment',
  'Dynamic Balancing',
  'Oil Analysis',
  'RCFA',
  'Machine Overhauling',
  'Other',
] as const;

export type ServiceSlug =
  | 'vibration-analysis'
  | 'laser-shaft-alignment'
  | 'dynamic-balancing'
  | 'oil-analysis'
  | 'rcfa'
  | 'machine-overhauling';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: ServiceSlug;
  index: string;
  route: `/services/${ServiceSlug}`;
  formValue: (typeof SERVICE_FORM_OPTIONS)[number];
  name: string;
  shortName: string;
  cardDescription: string;
  heroSummary: string;
  overview: string[];
  scopeNote?: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
  problemsAddressed: string[];
  technicalScope: string[];
  typicalApplications: string[];
  methodology: MethodologyStep[];
  benefits: string[];
  faqs: ServiceFAQ[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'vibration-analysis',
    index: '01',
    route: '/services/vibration-analysis',
    formValue: 'Vibration Analysis',
    name: 'Vibration Analysis Services',
    shortName: 'Vibration Analysis',
    cardDescription:
      'Overall vibration measurement, FFT spectrum analysis, time waveform evaluation, and fault diagnosis for industrial rotating equipment.',
    heroSummary:
      'Field vibration measurement, spectral diagnostics, and condition assessment to detect developing rotating machinery faults early and support informed maintenance decisions.',
    overview: [
      'Furious Industrial Solution provides industrial vibration measurement, analysis, and machinery diagnostics for critical and general-purpose rotating equipment. Rather than simply logging overall amplitude readings, our engineering evaluation studies frequency content, time waveforms, and operating conditions to identify developing mechanical and electrical abnormalities.',
      'Structured vibration analysis helps plant maintenance teams detect faults while corrective intervention can still be planned during scheduled windows—reducing the risk of sudden breakdowns, secondary component damage, and unplanned production stops.',
    ],
    ctaLabel: 'Request Vibration Analysis',
    imageUrl: '/src/assets/images/service_vibration_analysis_1795286894157.jpg',
    imageAlt:
      'Piezoelectric vibration accelerometer mounted on an electric motor bearing housing connected to a handheld FFT vibration analyzer',
    problemsAddressed: [
      'Rotor unbalance',
      'Shaft and coupling misalignment',
      'Mechanical and structural looseness',
      'Rolling-element bearing defects',
      'Gear mesh and tooth defects',
      'Structural or rotor resonance',
      'Belt drive and pulley problems',
      'Pump cavitation and flow turbulence',
      'Structural vibration transmission',
      'Electrical-related vibration in motors',
      'Lubrication-related friction and wear indicators',
    ],
    technicalScope: [
      'Overall vibration measurement (velocity, acceleration, and bearing-condition parameters)',
      'FFT spectrum analysis across relevant machine operating frequency bands',
      'Time waveform analysis for impacting, rub, and modulation evaluation',
      'Rolling-element bearing condition assessment',
      'Multi-point trend analysis across scheduled condition-monitoring intervals',
      'Fault diagnosis correlated with machine speed, load, and mechanical configuration',
      'Comprehensive machine condition assessment by severity priority',
      'Detailed technical report with actionable corrective recommendations',
    ],
    typicalApplications: [
      'Electric Motors',
      'Centrifugal & Process Pumps',
      'Industrial Fans',
      'Blowers',
      'Gearboxes',
      'Compressors',
      'Cooling Towers',
      'Agitators',
      'Reactors',
      'Centrifuges',
      'Conveyors',
      'Crushers',
      'Other Rotating Equipment',
    ],
    methodology: [
      {
        step: '01',
        title: 'Machine & Operating Review',
        description:
          'Verify machine configuration, running RPM, load condition, bearing/drive geometry, and recent maintenance history.',
      },
      {
        step: '02',
        title: 'Multi-Axis Data Acquisition',
        description:
          'Collect repeatable horizontal, vertical, and axial vibration measurements at bearing housings using appropriate sensor mounting.',
      },
      {
        step: '03',
        title: 'FFT & Waveform Analysis',
        description:
          'Evaluate synchronous harmonics, sub-synchronous components, bearing defect frequencies, sidebands, and time-domain impact patterns.',
      },
      {
        step: '04',
        title: 'Fault Diagnosis & Severity Assessment',
        description:
          'Identify probable fault sources and prioritize equipment condition to help maintenance teams plan timely intervention.',
      },
      {
        step: '05',
        title: 'Technical Reporting & Follow-Up',
        description:
          'Deliver clear observations, fault indications, and practical corrective actions, with optional post-maintenance verification.',
      },
    ],
    benefits: [
      'Early detection of developing mechanical, bearing, and gear abnormalities',
      'Better maintenance planning during scheduled shutdown windows',
      'Targeted corrective action instead of trial-and-error part replacement',
      'Reduced risk of unexpected breakdown and secondary component damage',
      'Baseline and post-maintenance data to verify repair effectiveness',
    ],
    faqs: [
      {
        question: 'Does vibration analysis require stopping the machine?',
        answer:
          'No. Vibration measurements are collected while the equipment operates under normal production load and speed, avoiding unnecessary disruption to plant operations.',
      },
      {
        question: 'Can vibration analysis distinguish between unbalance, misalignment, and bearing defects?',
        answer:
          'Yes. By examining FFT spectra, harmonic patterns, phase or directional behavior, and time waveforms, our diagnostics help differentiate unbalance, misalignment, looseness, gear mesh issues, and bearing defect stages.',
      },
      {
        question: 'What is included in the technical report?',
        answer:
          'Each report summarizes equipment condition status, key measured observations, probable fault indications, and practical maintenance recommendations prioritized for plant engineering action.',
      },
    ],
    seo: {
      title: 'Vibration Analysis Services | Furious Industrial Solution (FIS)',
      description:
        'Industrial vibration measurement, FFT spectrum analysis, time waveform diagnostics, and bearing condition assessment for rotating machinery.',
      keywords:
        'Vibration Analysis Services, Industrial Vibration Analysis, FFT Spectrum Analysis, Bearing Condition Assessment, Rotating Machinery Condition Monitoring',
    },
  },
  {
    slug: 'laser-shaft-alignment',
    index: '02',
    route: '/services/laser-shaft-alignment',
    formValue: 'Laser Shaft Alignment',
    name: 'Laser Shaft Alignment Services',
    shortName: 'Laser Shaft Alignment',
    cardDescription:
      'Precision horizontal and vertical shaft alignment with soft-foot verification, angular and offset correction, and final documentation.',
    heroSummary:
      'Precision laser shaft alignment for coupled rotating machinery to reduce dynamic bearing loads, minimize seal wear, and improve mechanical reliability.',
    overview: [
      'Shaft misalignment is among the most frequent contributors to elevated vibration, premature bearing fatigue, mechanical seal leakage, and coupling wear in coupled rotating trains. Conventional straightedge or rough dial methods often leave residual offset or angular errors that accelerate wear during continuous operation.',
      'Furious Industrial Solution performs precision Laser Shaft Alignment across horizontal and vertical planes, incorporating soft-foot inspection and controlled shimming adjustments so coupled shafts operate within engineering tolerances.',
    ],
    ctaLabel: 'Request Alignment Service',
    imageUrl: '/src/assets/images/service_laser_alignment_1795286895829.jpg',
    imageAlt:
      'Dual optical laser shaft alignment sensors clamped across an industrial motor-pump shaft coupling with stainless steel alignment shims',
    problemsAddressed: [
      'Elevated axial and radial vibration at 1× and 2× running speed',
      'Repeated mechanical seal leakage and shortened seal life',
      'Premature rolling-element bearing fatigue and overheating',
      'Accelerated flexible coupling insert or grid wear',
      'Machinery frame distortion due to unaddressed soft foot',
      'Excessive power draw caused by mechanical binding across couplings',
    ],
    technicalScope: [
      'Pre-alignment inspection of baseplate, hold-down bolts, and coupling condition',
      'Soft-foot verification and mechanical correction prior to alignment',
      'Horizontal shaft alignment measurement and correction',
      'Vertical shaft alignment measurement and calibrated shimming',
      'Parallel offset correction across coupled shaft centerlines',
      'Angular misalignment correction in vertical and horizontal planes',
      'Final as-left laser alignment documentation report',
    ],
    typicalApplications: [
      'Motor–Pump Assemblies',
      'Motor–Fan Drives',
      'Motor–Blower Trains',
      'Motor–Gearbox Drives',
      'Compressor Trains',
      'Agitator & Process Drives',
      'Other Coupled Rotating Equipment',
    ],
    methodology: [
      {
        step: '01',
        title: 'Pre-Alignment & Baseplate Check',
        description:
          'Inspect foundation bolts, coupling clearances, pipe strain indicators, and mounting surface cleanliness.',
      },
      {
        step: '02',
        title: 'Soft-Foot Verification',
        description:
          'Measure and correct foot distortion so tightening hold-down bolts does not twist the machine casing or shift shaft centerlines.',
      },
      {
        step: '03',
        title: 'As-Found Laser Measurement',
        description:
          'Mount laser transmitter and detector units across the coupling to record initial vertical and horizontal offset and angular values.',
      },
      {
        step: '04',
        title: 'Precision Correction',
        description:
          'Perform calibrated vertical shimming and controlled horizontal repositioning to bring offset and angularity within acceptable tolerances.',
      },
      {
        step: '05',
        title: 'Final Verification & Report',
        description:
          'Re-measure after final bolt torqueing and issue a structured as-found / as-left alignment report.',
      },
    ],
    benefits: [
      'Improved rolling-element bearing service life',
      'Extended flexible coupling and drive element life',
      'Reduced stress on mechanical seals and packing',
      'Improved operating energy efficiency by reducing mechanical friction losses',
      'Higher overall machine reliability and smoother operation',
    ],
    faqs: [
      {
        question: 'Why is soft-foot verification necessary before shaft alignment?',
        answer:
          'If a machine foot does not sit flat on its baseplate, tightening the anchor bolt distorts the frame and bearing housings. Checking and correcting soft foot first ensures accurate, repeatable alignment results.',
      },
      {
        question: 'Can flexible couplings compensate for shaft misalignment?',
        answer:
          'Flexible couplings tolerate minor installation variations, but running continuously near coupling limits still transmits high reaction forces into bearings and mechanical seals. Precision alignment lowers those internal loads.',
      },
      {
        question: 'Do we receive documentation after laser shaft alignment?',
        answer:
          'Yes. FIS provides a final alignment report recording as-found and as-left horizontal and vertical offset and angularity readings for plant maintenance records.',
      },
    ],
    seo: {
      title: 'Laser Shaft Alignment Services | Furious Industrial Solution (FIS)',
      description:
        'Precision horizontal and vertical laser shaft alignment, soft-foot verification, and offset/angular correction for industrial rotating equipment.',
      keywords:
        'Laser Shaft Alignment Services, Precision Shaft Alignment, Motor Pump Alignment, Soft Foot Check, Machinery Reliability Services',
    },
  },
  {
    slug: 'dynamic-balancing',
    index: '03',
    route: '/services/dynamic-balancing',
    formValue: 'Dynamic Balancing',
    name: 'In-Situ Dynamic Balancing',
    shortName: 'In-Situ Dynamic Balancing',
    cardDescription:
      'On-site single-plane and two-plane dynamic balancing of fans, blowers, impellers, and rotors without unnecessary dismantling.',
    heroSummary:
      'Precision on-site dynamic balancing for industrial fans, blowers, and rotating assemblies to reduce 1× vibration and lower dynamic bearing loads without unnecessary rotor removal.',
    overview: [
      'Mass unbalance in industrial fans, blowers, impellers, and rotating assemblies generates centrifugal forces proportional to the square of rotational speed. Left uncorrected, unbalance leads to elevated 1× vibration, structural fatigue, and accelerated bearing wear.',
      'Furious Industrial Solution performs In-Situ Dynamic Balancing directly at the plant site under actual operating support conditions—avoiding the crane work, disassembly time, and transport delays of off-site shop balancing wherever technically feasible.',
    ],
    ctaLabel: 'Request Balancing Support',
    imageUrl: '/src/assets/images/service_dynamic_balancing_1795286925379.jpg',
    imageAlt:
      'Optical laser tachometer on a tripod and vibration accelerometer mounted on an industrial centrifugal blower for in-situ dynamic balancing',
    problemsAddressed: [
      'High dominant 1× synchronous vibration amplitude',
      'Material build-up, erosion, or uneven wear on fan and blower impellers',
      'Elevated dynamic loads on pillow-block and housing bearings',
      'Structural vibration transmitted to ducting, frames, and platforms',
      'Post-repair or post-cleaning rotor vibration',
    ],
    technicalScope: [
      'Pre-balancing vibration diagnostic verification to confirm unbalance as the primary cause',
      'Inspection for looseness, resonance, or mechanical defects prior to weight correction',
      'Single-plane and two-plane in-situ dynamic balancing depending on rotor geometry',
      'Phase and amplitude measurement using optical tachometer and calibrated vibration sensors',
      'Trial weight calculation and controlled correction mass attachment',
      'Post-balancing verification measurements and residual vibration documentation',
    ],
    typicalApplications: [
      'Industrial Centrifugal & Axial Fans',
      'ID / FD / PA Blowers',
      'Process Impellers',
      'Industrial Rotors',
      'Pulley & Sheave Systems',
      'Cooling Tower Fans',
      'Other Rotating Assemblies',
    ],
    methodology: [
      {
        step: '01',
        title: 'Diagnostic Pre-Check',
        description:
          'Confirm that dominant 1× unbalance is the true vibration source—not looseness, shaft bend, misalignment, or resonance.',
      },
      {
        step: '02',
        title: 'Initial Vector Measurement',
        description:
          'Record baseline 1× vibration amplitude and phase angle at operating speed using a tachometer reference.',
      },
      {
        step: '03',
        title: 'Trial Weight Run',
        description:
          'Install a calculated trial weight at a known angular position and measure the rotor influence response.',
      },
      {
        step: '04',
        title: 'Correction Mass Placement',
        description:
          'Compute exact correction weight magnitude and angular location, then securely attach permanent balance weights.',
      },
      {
        step: '05',
        title: 'Trim & Final Verification',
        description:
          'Perform trim adjustment if required and document final reduced vibration levels under normal running speed.',
      },
    ],
    benefits: [
      'Significant reduction in dominant 1× vibration levels',
      'Lower centrifugal load on bearings and housings',
      'Improved service life of rotating components and structures',
      'Reduced structural vibration transmitted to connected foundations and ducts',
      'Reduced downtime compared with dismantling and off-site rotor transport',
    ],
    faqs: [
      {
        question: 'When is in-situ dynamic balancing feasible?',
        answer:
          'In-situ balancing is feasible whenever the rotor is safely accessible for trial and permanent weight placement, runs steadily at operating speed, and does not suffer from severe mechanical looseness, structural cracks, or shaft distortion.',
      },
      {
        question: 'Do you check if vibration is actually caused by unbalance first?',
        answer:
          'Yes. Before attempting balancing, FIS checks vibration spectra and mechanical condition to ensure the issue is genuinely unbalance rather than misalignment, bearing failure, or looseness.',
      },
      {
        question: 'Should fan blades be cleaned before balancing?',
        answer:
          'Yes. Removing loose process build-up or scale prior to balancing prevents deposits from shedding later and throwing the rotor back out of balance.',
      },
    ],
    seo: {
      title: 'In-Situ Dynamic Balancing Services | Furious Industrial Solution (FIS)',
      description:
        'On-site dynamic balancing services for industrial fans, blowers, impellers, cooling tower fans, and rotors to reduce 1x vibration and downtime.',
      keywords:
        'Dynamic Balancing Services, In-Situ Dynamic Balancing, Industrial Fan Balancing, Blower Rotor Balancing, Vibration Reduction',
    },
  },
  {
    slug: 'oil-analysis',
    index: '04',
    route: '/services/oil-analysis',
    formValue: 'Oil Analysis',
    name: 'Oil Analysis Services',
    shortName: 'Oil Analysis',
    cardDescription:
      'Lubricant condition assessment, contamination screening, wear-particle indicators, and corrective lubrication recommendations.',
    heroSummary:
      'Complementary predictive maintenance oil condition monitoring to assess lubricant health, detect contamination, and identify early wear indicators inside gearboxes, hydraulic systems, and compressors.',
    overview: [
      'Lubricating oil carries critical evidence of both fluid health and internal machine wear. Combined with vibration analysis, oil condition monitoring provides a broader view of asset condition—often flagging lubricant degradation, moisture ingress, or abnormal wear before physical damage escalates.',
      'Furious Industrial Solution supports industrial plants with structured Oil Analysis evaluation covering lubricant condition, viscosity behavior, contamination indicators, and practical corrective action recommendations.',
    ],
    ctaLabel: 'Request Oil Analysis',
    imageUrl: '/src/assets/images/service_oil_analysis_1795286895012.jpg',
    imageAlt:
      'Industrial gear oil sampling valve and oil analysis sample bottles beside a heavy-duty helical gearbox on a steel inspection table',
    problemsAddressed: [
      'Lubricant viscosity shear, thickening, or oxidation degradation',
      'Solid particle contamination from breathers, seals, or environment',
      'Moisture and water contamination indicators where applicable',
      'Abnormal metallic wear-particle generation in gears and bearings',
      'Premature oil change intervals or extended running on degraded oil',
      'Cross-contamination or improper lubricant grade verification',
    ],
    technicalScope: [
      'Lubricant condition assessment against operating requirements',
      'Particulate and external contamination detection',
      'Wear-particle indicators for internal bearing and gear health',
      'Oil degradation and oxidation assessment',
      'Viscosity condition evaluation',
      'Moisture and water contamination indicators where applicable',
      'Clear recommendation for filtration, oil replenishment, oil change, or mechanical inspection',
    ],
    typicalApplications: [
      'Industrial Gearboxes',
      'Hydraulic Systems',
      'Compressors',
      'Turbines',
      'Oil-Lubricated Bearings',
      'Circulating & Industrial Lubrication Systems',
    ],
    methodology: [
      {
        step: '01',
        title: 'Lubrication System Assessment',
        description:
          'Review asset criticality, lubricant grade, sump volume, operating temperature, and representative sampling points.',
      },
      {
        step: '02',
        title: 'Representative Sample Collection',
        description:
          'Ensure clean, consistent oil sampling practices so test results reflect true active system condition.',
      },
      {
        step: '03',
        title: 'Condition & Wear Evaluation',
        description:
          'Assess lubricant degradation, viscosity condition, contamination levels, moisture indicators, and wear debris trends.',
      },
      {
        step: '04',
        title: 'Integrated Reliability Interpretation',
        description:
          'Correlate oil findings with vibration data and operating history where available to separate contamination from active wear.',
      },
      {
        step: '05',
        title: 'Actionable Recommendations',
        description:
          'Provide clear recommendations for filtration, breather/seal attention, oil replacement, or targeted mechanical inspection.',
      },
    ],
    benefits: [
      'Early visibility into lubricant breakdown and ingress before severe wear develops',
      'Supports condition-based oil change decisions rather than purely calendar-based replacement',
      'Complements vibration diagnostics for gearboxes, compressors, and oil-lubricated bearings',
      'Helps identify seal, breather, and contamination control gaps',
      'Supports improved component longevity and cleaner lubrication systems',
    ],
    faqs: [
      {
        question: 'How does oil analysis complement vibration analysis?',
        answer:
          'Oil analysis detects fluid degradation, moisture, and microscopic wear debris—often early in the wear cycle—while vibration analysis detects dynamic mechanical faults such as misalignment, unbalance, gear mesh anomalies, and bearing spalling. Together they provide stronger diagnostic confidence.',
      },
      {
        question: 'Which machines benefit most from oil analysis?',
        answer:
          'Critical industrial gearboxes, hydraulic power packs, compressors, turbines, and large oil-lubricated bearings benefit substantially from periodic oil condition monitoring.',
      },
      {
        question: 'What corrective actions follow an abnormal oil result?',
        answer:
          'Depending on the finding, recommendations may include offline kidney-loop filtration, breather or seal inspection, verifying oil grade, scheduling an oil change, or performing vibration and mechanical inspection.',
      },
    ],
    seo: {
      title: 'Oil Analysis Services | Furious Industrial Solution (FIS)',
      description:
        'Predictive oil condition monitoring for industrial gearboxes, hydraulic systems, compressors, turbines, and oil-lubricated bearings.',
      keywords:
        'Oil Analysis Services, Lubricant Condition Monitoring, Predictive Maintenance Services, Gearbox Oil Analysis, Contamination Detection',
    },
  },
  {
    slug: 'rcfa',
    index: '05',
    route: '/services/rcfa',
    formValue: 'RCFA',
    name: 'Root Cause Failure Analysis (RCFA)',
    shortName: 'Root Cause Failure Analysis (RCFA)',
    cardDescription:
      'Structured engineering investigation of recurring or critical machinery failures combining condition data, failure evidence, and inspection.',
    heroSummary:
      'Systematic Root Cause Failure Analysis (RCFA) to investigate recurring or critical rotating machinery failures and recommend practical engineering actions that prevent repeat breakdowns.',
    overview: [
      'Replacing failed bearings, seals, or couplings without understanding why they failed leads to recurring maintenance expense and repeated plant interruptions. Furious Industrial Solution investigates recurring or critical machinery failures by combining operating history, maintenance records, vibration data, physical mechanical inspection, and engineering analysis.',
      'Our RCFA approach focuses on physical evidence and real plant operating conditions—tracing symptoms back to installation, lubrication, alignment, load, process, or structural contributors so corrective actions address the underlying cause.',
    ],
    ctaLabel: 'Discuss a Recurring Failure',
    imageUrl: '/src/assets/images/service_rcfa_inspection_1795286967360.jpg',
    imageAlt:
      'Dismantled industrial spherical roller bearing, helical gear shaft, vernier calipers, and failure inspection documentation on a workshop bench',
    problemsAddressed: [
      'Repeated rolling-element or sleeve bearing failures',
      'Recurring flexible coupling wear or breakage',
      'Shaft fatigue cracks and shaft failures',
      'Persistent excessive vibration after standard repairs',
      'Gearbox tooth wear, pitting, or housing failures',
      'Frequent mechanical seal failures',
      'Industrial fan and blower structural or rotor failures',
      'Chronic centrifugal pump reliability problems',
      'Structural and foundation vibration problems',
    ],
    technicalScope: [
      'Structured failure timeline and operating history review',
      'Collection and review of vibration, alignment, oil, and maintenance records',
      'Physical inspection of failed bearings, shafts, seals, gears, and couplings',
      'Dimensional, clearance, fit, and installation practice verification',
      'Root cause evaluation separating primary causes from secondary failure damage',
      'Actionable engineering recommendations for corrective maintenance and reliability improvement',
    ],
    typicalApplications: [
      'Bad-Actor Pumps & Compressors',
      'Critical Process Fans & Blowers',
      'High-Load Industrial Gearboxes',
      'Motors with Recurring Bearing Failures',
      'Agitators, Reactors & Centrifuges',
      'Crushers, Conveyors & Heavy Rotating Assets',
    ],
    methodology: [
      {
        step: '01',
        title: 'Problem Definition',
        description:
          'Define the exact failure event, asset criticality, operating context, and history of repeat occurrences.',
      },
      {
        step: '02',
        title: 'Data Collection',
        description:
          'Gather operating parameters, vibration trends, oil reports, alignment sheets, and maintenance intervention records.',
      },
      {
        step: '03',
        title: 'Failure Evidence',
        description:
          'Inspect failed components, wear zones, fracture patterns, lubrication residue, and mating clearances.',
      },
      {
        step: '04',
        title: 'Root Cause Investigation',
        description:
          'Correlate mechanical evidence with operating and installation factors to isolate the probable root causes.',
      },
      {
        step: '05',
        title: 'Corrective Action',
        description:
          'Recommend targeted mechanical, alignment, balancing, lubrication, or operational corrections.',
      },
      {
        step: '06',
        title: 'Reliability Improvement',
        description:
          'Establish verification measurements and monitoring checks to confirm sustained improvement in machine behavior.',
      },
    ],
    benefits: [
      'Breaks the cycle of repeated component replacement on bad-actor machines',
      'Evidence-based engineering clarity for maintenance and plant management teams',
      'Identifies hidden installation, process, lubrication, or structural contributors',
      'Supports better spare-parts reliability and lower repeat maintenance disruption',
      'Connects failure findings directly to practical field verification',
    ],
    faqs: [
      {
        question: 'Should we preserve failed components before an RCFA review?',
        answer:
          'Yes. Retaining failed bearings, seals, broken coupling elements, and oil samples without cleaning away wear evidence greatly assists accurate failure investigation.',
      },
      {
        question: 'When should a plant initiate Root Cause Failure Analysis?',
        answer:
          'RCFA is especially valuable when a critical asset suffers an unexpected breakdown or when a machine experiences recurring bearing, seal, coupling, or vibration issues within short operating intervals.',
      },
      {
        question: 'Does FIS only produce a report, or can you support the corrective maintenance too?',
        answer:
          'FIS can support follow-up alignment, in-situ balancing, overhauling checks, and post-maintenance vibration verification so corrective recommendations are carried through and verified.',
      },
    ],
    seo: {
      title: 'Root Cause Failure Analysis (RCFA) Services | Furious Industrial Solution (FIS)',
      description:
        'Engineering Root Cause Failure Analysis (RCFA) for recurring bearing, gearbox, shaft, seal, pump, and fan failures in industrial plants.',
      keywords:
        'Root Cause Failure Analysis, RCFA Services, Repeated Bearing Failure Investigation, Machinery Reliability Services, Industrial Failure Analysis',
    },
  },
  {
    slug: 'machine-overhauling',
    index: '06',
    route: '/services/machine-overhauling',
    formValue: 'Machine Overhauling',
    name: 'Machine Overhauling & Reliability Maintenance',
    shortName: 'Machine Overhauling',
    cardDescription:
      'Reliability-focused machinery overhauling integrating dismantling, mechanical inspection, precision reassembly, alignment, and verification.',
    heroSummary:
      'Machinery overhauling services executed with condition-monitoring and precision maintenance principles—supporting mechanical inspection, controlled reassembly, and post-maintenance verification.',
    overview: [
      'Conventional overhauling often stops at component replacement without verifying bearing fits, shaft runout, internal clearances, precision alignment, or post-run vibration behavior. Furious Industrial Solution positions Machine Overhauling & Reliability Maintenance around disciplined mechanical inspection and condition-based verification.',
      'By integrating dismantling inspection, precision alignment, dynamic balancing support where required, and post-maintenance vibration checks, FIS helps plants return overhauled equipment to service with greater reliability confidence.',
    ],
    scopeNote:
      'Important Scope Note: Not every listed activity is performed on every machine. Final overhauling scope depends on machinery type, observed mechanical condition, site constraints, and customer requirement.',
    ctaLabel: 'Plan Machine Overhauling',
    imageUrl: '/src/assets/images/hero_rotating_machinery_1795286897759.jpg',
    imageAlt:
      'Industrial rotating motor-pump train undergoing precision condition monitoring and reliability maintenance verification',
    problemsAddressed: [
      'Deteriorated mechanical condition identified during vibration or oil monitoring',
      'Worn bearings, damaged shaft journals, or degraded coupling components',
      'Improper internal clearances and mechanical fits causing repeat failures',
      'Unverified reassembly quality following breakdown repairs',
      'Equipment requiring planned reliability restoration during plant shutdowns',
    ],
    technicalScope: [
      'Controlled machine dismantling and component tagging',
      'Visual and dimensional mechanical inspection of rotating and stationary parts',
      'Bearing inspection and controlled replacement where required',
      'Shaft journal and runout inspection',
      'Coupling inspection and drive-element verification',
      'Internal and mounting clearances verification',
      'Lubrication pathway, seal, and oil/grease checks',
      'Targeted mechanical correction based on inspection findings',
      'Precision laser shaft alignment upon reinstallation',
      'In-situ dynamic balancing where applicable to the rotor assembly',
      'Controlled reassembly and trial run monitoring',
      'Post-maintenance vibration verification to confirm improved machine behavior',
    ],
    typicalApplications: [
      'Process & Utility Pumps',
      'Industrial Fans & Blowers',
      'Gearboxes & Reducers',
      'Agitators & Mixers',
      'Electric Motor Mechanical Overhaul Support',
      'Conveyor Drives & Heavy Rotating Assemblies',
    ],
    methodology: [
      {
        step: '01',
        title: 'Pre-Overhaul Condition Review',
        description:
          'Review baseline vibration data, operating symptoms, and customer scope requirements prior to shutdown.',
      },
      {
        step: '02',
        title: 'Dismantling & Mechanical Inspection',
        description:
          'Dismantle systematically and inspect bearings, shaft journals, housings, couplings, and lubrication elements.',
      },
      {
        step: '03',
        title: 'Clearance & Fit Correction',
        description:
          'Verify fits, clearances, and mounting surfaces and carry out agreed mechanical corrections or replacements.',
      },
      {
        step: '04',
        title: 'Precision Reassembly & Alignment',
        description:
          'Reassemble carefully and perform laser shaft alignment and balancing support as required by the equipment scope.',
      },
      {
        step: '05',
        title: 'Trial Run & Vibration Verification',
        description:
          'Conduct controlled trial operation and record post-maintenance vibration measurements to verify machine behavior.',
      },
    ],
    benefits: [
      'Single reliability-focused team bridging diagnostics and corrective overhauling',
      'Structured mechanical checks instead of rushed part-swapping',
      'Scope tailored cleanly to specific machine type and plant shutdown window',
      'Precision alignment and balancing integrated into recommissioning where needed',
      'Post-maintenance vibration data to confirm whether corrective work improved machine condition',
    ],
    faqs: [
      {
        question: 'Is every listed overhauling activity applied to every machine?',
        answer:
          'No. The exact scope is defined according to the machinery type, failure or inspection findings, shutdown schedule, and customer requirement.',
      },
      {
        question: 'How does reliability-focused overhauling differ from standard repair?',
        answer:
          'In addition to mechanical dismantling and part replacement, FIS emphasizes inspection of fits, clearances, lubrication condition, precision alignment, and post-maintenance vibration verification so underlying fault drivers are addressed.',
      },
      {
        question: 'Can FIS perform post-overhaul vibration verification even on equipment overhauled by plant teams?',
        answer:
          'Yes. Post-maintenance vibration verification and laser shaft alignment can be requested independently after internal maintenance or OEM repairs.',
      },
    ],
    seo: {
      title: 'Machine Overhauling Services | Furious Industrial Solution (FIS)',
      description:
        'Reliability-focused machine overhauling services including dismantling inspection, bearing replacement, clearance verification, alignment, and post-maintenance vibration verification.',
      keywords:
        'Machine Overhauling Services, Reliability Maintenance, Rotating Equipment Overhauling, Post-Maintenance Vibration Verification',
    },
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export interface WorkflowStage {
  step: string;
  title: string;
  shortTag: string;
  description: string;
}

export const RELIABILITY_WORKFLOW: WorkflowStage[] = [
  {
    step: '01',
    title: 'Measure',
    shortTag: 'Detect',
    description: 'Collect reliable machine-condition data across operating bearings, drives, and lubrication systems.',
  },
  {
    step: '02',
    title: 'Analyze',
    shortTag: 'Evaluate',
    description: 'Study vibration spectra, time waveforms, lubricant indicators, operating conditions, and machine behavior.',
  },
  {
    step: '03',
    title: 'Diagnose',
    shortTag: 'Isolate',
    description: 'Identify the probable mechanical, structural, lubrication, or electrical source of abnormality.',
  },
  {
    step: '04',
    title: 'Correct',
    shortTag: 'Execute',
    description: 'Support appropriate precision corrective maintenance including alignment, balancing, and overhauling.',
  },
  {
    step: '05',
    title: 'Verify',
    shortTag: 'Confirm',
    description: 'Perform post-maintenance measurements to verify whether corrective action improved machine behavior.',
  },
];

export type MachineIconKey =
  | 'motor'
  | 'pump'
  | 'fan'
  | 'blower'
  | 'gearbox'
  | 'compressor'
  | 'cooling-tower'
  | 'agitator'
  | 'reactor'
  | 'centrifuge'
  | 'conveyor'
  | 'crusher'
  | 'vibrating-screen'
  | 'vacuum-pump'
  | 'other-rotating';

export interface MachineAsset {
  id: MachineIconKey;
  name: string;
  category: string;
  typicalFocus: string;
  recommendedServices: string[];
}

export const MACHINERY_ASSETS: MachineAsset[] = [
  {
    id: 'motor',
    name: 'Motor',
    category: 'Prime Movers',
    typicalFocus: 'Bearing condition, electrical-related vibration, soft foot, and shaft alignment to driven equipment.',
    recommendedServices: ['Vibration Analysis', 'Laser Shaft Alignment'],
  },
  {
    id: 'pump',
    name: 'Pump',
    category: 'Fluid Handling',
    typicalFocus: 'Cavitation, impeller unbalance, mechanical seal distress, misalignment, and bearing wear.',
    recommendedServices: ['Vibration Analysis', 'Laser Shaft Alignment', 'Machine Overhauling'],
  },
  {
    id: 'fan',
    name: 'Fan',
    category: 'Air & Gas Movement',
    typicalFocus: 'Dominant 1× rotor unbalance, material build-up, belt drive issues, and pillow-block bearing condition.',
    recommendedServices: ['In-Situ Dynamic Balancing', 'Vibration Analysis'],
  },
  {
    id: 'blower',
    name: 'Blower',
    category: 'Air & Gas Movement',
    typicalFocus: 'Impeller unbalance, high-speed bearing condition, coupling alignment, and aerodynamic vibration.',
    recommendedServices: ['In-Situ Dynamic Balancing', 'Laser Shaft Alignment'],
  },
  {
    id: 'gearbox',
    name: 'Gearbox',
    category: 'Power Transmission',
    typicalFocus: 'Gear mesh frequency sidebands, tooth wear, bearing defects, and gear oil contamination or degradation.',
    recommendedServices: ['Vibration Analysis', 'Oil Analysis', 'RCFA'],
  },
  {
    id: 'compressor',
    name: 'Compressor',
    category: 'Process Compression',
    typicalFocus: 'Train shaft alignment, bearing stability, lubricant health, and structural piping vibration.',
    recommendedServices: ['Vibration Analysis', 'Laser Shaft Alignment', 'Oil Analysis'],
  },
  {
    id: 'cooling-tower',
    name: 'Cooling Tower',
    category: 'Plant Utilities',
    typicalFocus: 'Long drive-shaft alignment, gearbox health, fan blade unbalance, and structural resonance.',
    recommendedServices: ['Vibration Analysis', 'In-Situ Dynamic Balancing', 'Oil Analysis'],
  },
  {
    id: 'agitator',
    name: 'Agitator',
    category: 'Process Mixing',
    typicalFocus: 'Gearbox and upper bearing wear, long-shaft bending/looseness, and seal reliability.',
    recommendedServices: ['Vibration Analysis', 'RCFA', 'Machine Overhauling'],
  },
  {
    id: 'reactor',
    name: 'Reactor',
    category: 'Process Vessels',
    typicalFocus: 'Drive train vibration, agitator shaft stability, mechanical seal distress, and gear reducer monitoring.',
    recommendedServices: ['Vibration Analysis', 'Oil Analysis', 'RCFA'],
  },
  {
    id: 'centrifuge',
    name: 'Centrifuge',
    category: 'Separation Equipment',
    typicalFocus: 'High-speed bowl unbalance, isolator/structural vibration, and critical bearing condition assessment.',
    recommendedServices: ['Vibration Analysis', 'In-Situ Dynamic Balancing', 'RCFA'],
  },
  {
    id: 'conveyor',
    name: 'Conveyor',
    category: 'Material Handling',
    typicalFocus: 'Drive motor-gearbox alignment, pulley bearings, coupling wear, and structural looseness.',
    recommendedServices: ['Vibration Analysis', 'Laser Shaft Alignment', 'Oil Analysis'],
  },
  {
    id: 'crusher',
    name: 'Crusher',
    category: 'Heavy Size Reduction',
    typicalFocus: 'Heavy impact bearing wear, belt/sheave alignment, rotor balance, and foundation looseness.',
    recommendedServices: ['Vibration Analysis', 'Oil Analysis', 'RCFA'],
  },
  {
    id: 'vibrating-screen',
    name: 'Vibrating Screen',
    category: 'Material Screening',
    typicalFocus: 'Exciter bearing condition, structural frame fatigue, drive-side alignment, and lubrication integrity.',
    recommendedServices: ['Vibration Analysis', 'Oil Analysis', 'Machine Overhauling'],
  },
  {
    id: 'vacuum-pump',
    name: 'Vacuum Pump',
    category: 'Process Utilities',
    typicalFocus: 'Coupling misalignment, bearing fatigue, seal reliability, and process-induced vibration.',
    recommendedServices: ['Vibration Analysis', 'Laser Shaft Alignment', 'Machine Overhauling'],
  },
  {
    id: 'other-rotating',
    name: 'Other Rotating Machinery',
    category: 'Custom Plant Assets',
    typicalFocus: 'Tailored vibration diagnostics, precision alignment, balancing, oil monitoring, and failure investigation.',
    recommendedServices: ['Vibration Analysis', 'RCFA', 'Machine Overhauling'],
  },
];

export interface CommonProblem {
  title: string;
  symptom: string;
  diagnosticPath: string;
  serviceRoute: `/services/${ServiceSlug}`;
  serviceFormValue: (typeof SERVICE_FORM_OPTIONS)[number];
}

export const COMMON_PROBLEMS: CommonProblem[] = [
  {
    title: 'High Vibration',
    symptom: 'Elevated overall velocity or audible roughness developing during normal plant operation.',
    diagnosticPath: 'FFT spectrum & waveform diagnostics to isolate the true source.',
    serviceRoute: '/services/vibration-analysis',
    serviceFormValue: 'Vibration Analysis',
  },
  {
    title: 'Repeated Bearing Failure',
    symptom: 'Bearings failing ahead of expected service intervals despite replacement.',
    diagnosticPath: 'RCFA combined with alignment, lubrication, and fit verification.',
    serviceRoute: '/services/rcfa',
    serviceFormValue: 'RCFA',
  },
  {
    title: 'Machine Misalignment',
    symptom: 'Coupling wear, high axial vibration, mechanical seal leaks, or elevated bearing temperatures.',
    diagnosticPath: 'Soft-foot check and precision horizontal/vertical laser shaft alignment.',
    serviceRoute: '/services/laser-shaft-alignment',
    serviceFormValue: 'Laser Shaft Alignment',
  },
  {
    title: 'Rotor Unbalance',
    symptom: 'Strong 1× radial vibration on fans, blowers, impellers, or cooling tower drives.',
    diagnosticPath: 'On-site single or two-plane in-situ dynamic balancing.',
    serviceRoute: '/services/dynamic-balancing',
    serviceFormValue: 'Dynamic Balancing',
  },
  {
    title: 'Abnormal Bearing Condition',
    symptom: 'High-frequency impacting, noise, or rising temperature in motor, pump, or fan bearings.',
    diagnosticPath: 'Bearing condition assessment and planned intervention prior to seizure.',
    serviceRoute: '/services/vibration-analysis',
    serviceFormValue: 'Vibration Analysis',
  },
  {
    title: 'Recurring Equipment Failure',
    symptom: 'Bad-actor machines experiencing chronic downtime across repeated repair cycles.',
    diagnosticPath: 'Structured Root Cause Failure Analysis and corrective verification.',
    serviceRoute: '/services/rcfa',
    serviceFormValue: 'RCFA',
  },
  {
    title: 'Gearbox Abnormality',
    symptom: 'Unusual gear noise, rising sump temperatures, or wear indicators in gear oil.',
    diagnosticPath: 'Combined vibration spectrum analysis and oil condition monitoring.',
    serviceRoute: '/services/oil-analysis',
    serviceFormValue: 'Oil Analysis',
  },
  {
    title: 'Machine Reliability Problems',
    symptom: 'Equipment running unreliably after repair or showing inconsistent mechanical performance.',
    diagnosticPath: 'Reliability-focused overhauling and post-maintenance vibration verification.',
    serviceRoute: '/services/machine-overhauling',
    serviceFormValue: 'Machine Overhauling',
  },
];

export interface IndustrySector {
  name: string;
  featuredOnHome: boolean;
  typicalEquipment: string;
  reliabilityFocus: string;
}

export const INDUSTRIES: IndustrySector[] = [
  {
    name: 'Chemical',
    featuredOnHome: true,
    typicalEquipment: 'Process pumps, reactors, agitators, centrifuges, blowers',
    reliabilityFocus: 'Seal reliability, corrosion-area rotating assets, and early bearing fault detection.',
  },
  {
    name: 'Power',
    featuredOnHome: true,
    typicalEquipment: 'ID/FD/PA fans, boiler feed pumps, cooling towers, compressors',
    reliabilityFocus: 'Continuous-duty fan balancing, train alignment, and critical vibration diagnostics.',
  },
  {
    name: 'Steel',
    featuredOnHome: true,
    typicalEquipment: 'Heavy gearboxes, blowers, mill drives, conveyors, pumps',
    reliabilityFocus: 'High-load gearbox monitoring, oil condition checks, and recurring failure analysis.',
  },
  {
    name: 'Cement',
    featuredOnHome: true,
    typicalEquipment: 'Kiln fans, baghouse blowers, crushers, vibrating screens, gearboxes',
    reliabilityFocus: 'In-situ fan balancing under abrasive wear and heavy bearing diagnostics.',
  },
  {
    name: 'Pharmaceutical',
    featuredOnHome: true,
    typicalEquipment: 'Centrifuges, vacuum pumps, reactors, utility chillers, HVAC blowers',
    reliabilityFocus: 'Clean utility reliability, vibration reduction, and planned maintenance windows.',
  },
  {
    name: 'Automotive',
    featuredOnHome: true,
    typicalEquipment: 'Compressors, hydraulic power packs, exhaust fans, process pumps',
    reliabilityFocus: 'Utility uptime, hydraulic oil condition monitoring, and precision shaft alignment.',
  },
  {
    name: 'Paper',
    featuredOnHome: true,
    typicalEquipment: 'Vacuum pumps, stock pumps, drying fans, gearboxes, agitators',
    reliabilityFocus: 'Continuous line rotating equipment condition monitoring and bearing assessment.',
  },
  {
    name: 'Sugar',
    featuredOnHome: true,
    typicalEquipment: 'Centrifugals, boiler fans, heavy gearboxes, cane conveyors, pumps',
    reliabilityFocus: 'Pre-season readiness, in-situ balancing, and reliability-focused overhauling.',
  },
  {
    name: 'Manufacturing',
    featuredOnHome: true,
    typicalEquipment: 'Air compressors, coolant pumps, ventilation fans, conveyor drives',
    reliabilityFocus: 'Reducing unplanned stops through condition-based predictive maintenance.',
  },
  {
    name: 'Water Treatment',
    featuredOnHome: true,
    typicalEquipment: 'High-head pumps, aeration blowers, agitators, vacuum pumps',
    reliabilityFocus: 'Motor-pump alignment, cavitation diagnosis, and bearing life extension.',
  },
  {
    name: 'Process Industry',
    featuredOnHome: true,
    typicalEquipment: 'Rotating trains, mixers, heat-transfer pumps, process blowers',
    reliabilityFocus: 'Integrated vibration, oil, alignment, and RCFA reliability support.',
  },
  {
    name: 'Heavy Engineering',
    featuredOnHome: true,
    typicalEquipment: 'Heavy gear reducers, hydraulic units, compressors, overhead blowers',
    reliabilityFocus: 'Mechanical fault investigation, alignment, and verified machine overhauling.',
  },
  {
    name: 'Petrochemical',
    featuredOnHome: false,
    typicalEquipment: 'Process compressors, high-pressure pumps, cooling tower fans, blowers',
    reliabilityFocus: 'Critical train vibration diagnostics, shaft alignment, and lube-oil assessment.',
  },
  {
    name: 'Oil & Gas',
    featuredOnHome: false,
    typicalEquipment: 'Transfer pumps, gas blowers, compressors, gear units',
    reliabilityFocus: 'Condition-based diagnostics and structured root cause failure analysis.',
  },
  {
    name: 'Food Processing',
    featuredOnHome: false,
    typicalEquipment: 'Process pumps, homogenizer drives, centrifuges, refrigeration compressors',
    reliabilityFocus: 'Scheduled condition monitoring and reliable mechanical maintenance.',
  },
  {
    name: 'Mining',
    featuredOnHome: false,
    typicalEquipment: 'Crushers, vibrating screens, slurry pumps, heavy conveyors, fans',
    reliabilityFocus: 'Severe-duty bearing monitoring, gearbox oil analysis, and failure prevention.',
  },
];

export interface Differentiator {
  index: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_FIS: Differentiator[] = [
  {
    index: '01',
    title: 'Condition-Based Approach',
    description:
      'Maintenance decisions supported by objective machine-condition evidence rather than guesswork or purely reactive repairs.',
  },
  {
    index: '02',
    title: 'Practical Diagnostics',
    description:
      'Focus on identifying probable root causes and mechanical fault mechanisms—not only reporting raw vibration numbers.',
  },
  {
    index: '03',
    title: 'Precision Maintenance',
    description:
      'Laser shaft alignment and in-situ dynamic balancing services directly support accurate corrective field execution.',
  },
  {
    index: '04',
    title: 'Customer-Friendly Reports',
    description:
      'Clear machine observations, fault indications, and actionable recommendations written for plant maintenance teams.',
  },
  {
    index: '05',
    title: 'Multi-Technology Reliability Support',
    description:
      'Vibration analysis, oil analysis, alignment, balancing, RCFA, and machine overhauling coordinated under one reliability approach.',
  },
  {
    index: '06',
    title: 'Post-Maintenance Verification',
    description:
      'Condition measurements are used after corrective work to verify whether maintenance actually improved machine behavior.',
  },
];

export const TARGET_STAKEHOLDERS = [
  'Plant Heads',
  'Maintenance Managers',
  'Reliability Managers',
  'Mechanical Maintenance Engineers',
  'Condition Monitoring Engineers',
  'Utility Managers',
  'Production Managers',
  'OEMs',
  'Project Engineers',
  'Procurement Teams',
] as const;

export const HOMEPAGE_HIGHLIGHT_SLUGS: ServiceSlug[] = [
  'vibration-analysis',
  'laser-shaft-alignment',
  'dynamic-balancing',
  'rcfa',
];
