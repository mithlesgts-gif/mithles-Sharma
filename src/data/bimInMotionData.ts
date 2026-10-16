import { QaQcStage, ConstructionPhase } from '../types';

export interface BimProcessGalleryItem {
  id: string;
  category: string;
  title: string;
  technicalDescription: string;
  discipline: 'Architecture' | 'Structure' | 'MEP' | 'Coordination' | 'Fabrication' | 'Reality Capture';
  stage: string;
  features: string[];
  imageUrl: string;
}

export const bimProcessGalleryItems: BimProcessGalleryItem[] = [
  {
    id: 'process-arch',
    category: 'Model Development',
    discipline: 'Architecture',
    stage: 'LOD 350',
    title: 'Architectural Parametric Modeling',
    technicalDescription: 'Comprehensive envelope, double-skin facade assemblies, curtain wall grids, interior core partition systems, and room schedule parameter assignments.',
    features: ['Glazing & Mullion Spacing', 'Fire-Rated Partition Verification', 'Ceiling Grid & Height Datum', 'Space Programming Metadata'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-struct',
    category: 'Model Development',
    discipline: 'Structure',
    stage: 'LOD 400',
    title: 'Structural Steel & Concrete Detailing',
    technicalDescription: 'Accurate reinforced concrete geometry, deep foundation piles, post-tensioned slabs, structural steel trusses, and fabrication connection nodes.',
    features: ['Grade 500 Rebar Bend Schedules', 'Moment & Shear Connections', 'Cast-in Anchor Bolt Patterns', 'Penetration Stress Zones'],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-mep',
    category: 'Model Development',
    discipline: 'MEP',
    stage: 'LOD 350/400',
    title: 'MEP Systems Engineering & Routing',
    technicalDescription: 'Gravity drainage gradients, supply/return duct routing, fire sprinkler grids, and multi-tier electrical cable tray containment in tight ceiling plenums.',
    features: ['Slope Gradient Consistency', 'SMACNA Duct Pressure Standards', 'Equipment Service Access Volumes', 'Pipe Insulation Thickness'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-federation',
    category: 'Coordination',
    discipline: 'Coordination',
    stage: 'LOD 350',
    title: 'Federated BIM Multi-Trade Coordination',
    technicalDescription: 'Assembling distinct architectural, structural, and MEP disciplinary models into a synchronized common coordinate coordinate system (UCS).',
    features: ['Shared Project Base Point', 'Discipline Matrix Alignment', 'Model Level & Grid Verification', 'Dynamic Section Cut Auditing'],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-clash',
    category: 'Quality Assurance',
    discipline: 'Coordination',
    stage: 'Resolution',
    title: 'Navisworks Clash Detection & Resolution',
    technicalDescription: 'Algorithmic collision detection pinpointing physical hard intersections and soft buffer tolerances between MEP runs and structural members.',
    features: ['Automated False-Positive Filtering', 'BCF Real-time Issue Exchange', 'Sleeve Reroute Calculations', 'Discipline Accountability Matrix'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-qaqc',
    category: 'Quality Assurance',
    discipline: 'Coordination',
    stage: 'Audit & Compliance',
    title: 'Model QA/QC & Information Validation',
    technicalDescription: 'Systematic model auditing verifying element classification, naming conventions, level associations, and COBie data completeness.',
    features: ['Model Health Scoring', 'Unbound Room Identification', 'IFC Property Set Validation', 'Geometric Redundancy Purging'],
    imageUrl: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-docs',
    category: 'Documentation',
    discipline: 'Fabrication',
    stage: 'LOD 400',
    title: 'Construction Documentation & Shop Drawings',
    technicalDescription: 'Extraction of dimensionally verified 2D shop drawings, spool isometric sheets, and penetration layout drawings directly from coordinated 3D models.',
    features: ['Combined Services Drawings (CSD)', 'Builders Work in Connection (BWIC)', 'Cut-Length Spool Schedules', 'Setting-Out Coordinates'],
    imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'process-reality',
    category: 'Reality Capture',
    discipline: 'Reality Capture',
    stage: 'LOD 500',
    title: 'Scan-to-BIM & As-Built Digital Twin',
    technicalDescription: 'Transforming billion-point LiDAR laser scans and terrestrial photogrammetry into intelligent parametric models with surface deviation heatmaps.',
    features: ['LOA 30–40 Positional Accuracy', 'Point Cloud Overlay Heatmaps', 'Structural Plumbness Verification', 'Facility Management Metadata'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  }
];

export const qaqcWorkflowStages: QaQcStage[] = [
  {
    id: 1,
    name: 'Model Received',
    shortDesc: 'Ingestion of native trade models and validation of file structures, links, and CAD imports.',
    statusType: 'Normal',
    statusLabel: 'Stage 01 Initiated',
    icon: 'FolderDown',
    fullAuditCriteria: [
      'File format verification (.RVT, .IFC, .NWC) and software version compatibility',
      'Purging unlinked CAD imports, non-standard line styles, and orphaned views',
      'Verification of central model detachment and worksharing permissions',
      'Audit of file sizes to maintain workspace performance thresholds'
    ]
  },
  {
    id: 2,
    name: 'Model Audit',
    shortDesc: 'Verification of project origin, shared coordinates, grid alignments, and vertical story levels.',
    statusType: 'Audit',
    statusLabel: 'Coordinate Audit Active',
    icon: 'Crosshair',
    fullAuditCriteria: [
      'Project Base Point and Survey Point benchmark coordinate alignment',
      'True North vs. Project North rotation validation across all disciplines',
      'Grid line naming, pinning, and 3D level extent consistency',
      'Units check: metric millimetre vs. imperial decimal foot consistency'
    ]
  },
  {
    id: 3,
    name: 'Standards & Information Checks',
    shortDesc: 'Parameter validation, element classification, naming conventions, and Level of Information Need.',
    statusType: 'Audit',
    statusLabel: 'Information Validation',
    icon: 'FileCheck',
    fullAuditCriteria: [
      'OmniClass, UniFormat, and MasterFormat classification code completeness',
      'Family and type naming conventions according to the project BIM Execution Plan',
      'Spatial boundaries: room and space tag containment and volume calculations',
      'Validation of non-graphical asset parameters (COBie compliance parameters)'
    ]
  },
  {
    id: 4,
    name: 'Clash Detection',
    shortDesc: 'Automated multi-trade spatial intersection and clearance tolerance testing in Navisworks.',
    statusType: 'Issue',
    statusLabel: 'Potential Clashes Flagged',
    icon: 'AlertOctagon',
    fullAuditCriteria: [
      'Structure vs. MEP hard intersection audit (concrete beams vs. duct runs)',
      'MEP trade-to-trade clash testing (gravity drainage vs. chilled water pipes)',
      'Clearance envelopes: maintenance buffer around AHU filters, valves, and electrical panels',
      'Elimination of false positives (insulation overlaps, touching coplanar faces)'
    ]
  },
  {
    id: 5,
    name: 'Issue Assignment',
    shortDesc: 'Categorization by trade priority, creation of BCF viewpoints, and assignment to discipline leads.',
    statusType: 'Issue',
    statusLabel: 'Action Items Assigned',
    icon: 'UserCheck',
    fullAuditCriteria: [
      'Clash severity scoring: Critical (Structural), Moderate (MEP), Low (Finishes)',
      'BCF issue package generation with 3D viewpoint coordinates and camera angles',
      'Clear assignment of responsibility (Architectural, Structural, MEP contractor)',
      'Deadline setting aligned with milestone model freezing schedules'
    ]
  },
  {
    id: 6,
    name: 'Resolution & Rechecking',
    shortDesc: 'Implementation of engineered reroutes, sleeve penetrations, and automated delta regression testing.',
    statusType: 'Resolved',
    statusLabel: 'Engineered Solutions Applied',
    icon: 'RefreshCw',
    fullAuditCriteria: [
      'Review of proposed duct/pipe reroutes against hydraulic and pressure drop criteria',
      'Structural review of required slab and beam sleeve penetrations',
      'Automated batch clash re-run in Navisworks to verify issue resolution',
      'Regression checking to guarantee that modifications have not triggered secondary clashes'
    ]
  },
  {
    id: 7,
    name: 'Final Approval',
    shortDesc: 'Sign-off of coordinated federated model, issuance of clash-free certificate, and release for fabrication.',
    statusType: 'Approved',
    statusLabel: 'Model Approved & Released',
    icon: 'ShieldCheck',
    fullAuditCriteria: [
      'Zero unresolved critical hard clashes in the federated model',
      'Sign-off by Lead BIM Coordinator, Structural Engineer, and MEP Consultant',
      'Export of final coordinated NWD cache and OpenBIM IFC deliverables',
      'Release of validated model for 2D shop drawing sheet generation and 4D sequencing'
    ]
  }
];

export interface ConstructionVideoSim {
  id: string;
  title: string;
  duration: string;
  discipline: string;
  description: string;
  videoType: '4D Sequencing' | '5D Cost' | 'Site Logistics' | 'Erection Sequencing';
  fiveDLinkage: string;
  posterUrl: string;
  badgeColor: string;
}

export const constructionSimVideos: ConstructionVideoSim[] = [
  {
    id: 'sim-1',
    title: 'Excavation & Deep Piling Substructure',
    duration: '0:14',
    discipline: 'Civil & Geotechnical',
    videoType: '4D Sequencing',
    fiveDLinkage: 'Earthwork volume (34,500 m³) & secant pile quantity linked to unit procurement cost schedule.',
    description: 'Sequenced excavation pit shoring, secant piling rig positioning, and deep raft foundation concrete pouring.',
    posterUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=700&q=80',
    badgeColor: 'border-blue-500/40 text-blue-400'
  },
  {
    id: 'sim-2',
    title: 'Structural Core & Superstructure Floor Rise',
    duration: '0:18',
    discipline: 'Structural Frame',
    videoType: '4D Sequencing',
    fiveDLinkage: 'Reinforced concrete pouring cycle (7 days/floor) with concrete cubic meters and rebar tonnage tracking.',
    description: 'Slipform core climbing followed by post-tensioned floor slab pours and perimeter steel column erection.',
    posterUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80',
    badgeColor: 'border-blue-500/40 text-blue-400'
  },
  {
    id: 'sim-3',
    title: 'Tower Crane Logistics & Heavy Steel Erection',
    duration: '0:12',
    discipline: 'Site Logistics',
    videoType: 'Site Logistics',
    fiveDLinkage: 'Dual tower crane duty cycle simulation, hook time allocation, and temporary works equipment rental cost.',
    description: 'Dual tower crane radius coverage, swing clear paths, laydown zone staging, and structural roof truss hoisting.',
    posterUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
    badgeColor: 'border-amber-500/40 text-amber-400'
  },
  {
    id: 'sim-4',
    title: 'Curtain Wall Facade & Building Envelope',
    duration: '0:15',
    discipline: 'Architectural Envelope',
    videoType: '4D Sequencing',
    fiveDLinkage: 'Unitized glazing panel deliveries (1,850 panels) sequenced to eliminate on-site storage damage risks.',
    description: 'Unitized curtain wall panel lifting via mini-crawler crane, floor bracket anchoring, and weather envelope sealing.',
    posterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
    badgeColor: 'border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'sim-5',
    title: 'Multi-Service MEP Riser & Ceiling Installation',
    duration: '0:16',
    discipline: 'MEP Services',
    videoType: '4D Sequencing',
    fiveDLinkage: 'Fabricated multi-service racks (MSR) with linear meter counts and labor hour reduction metrics.',
    description: 'Prefabricated multi-service rack hoisting, vertical pipe riser stacking, and central plant room pump alignment.',
    posterUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
    badgeColor: 'border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'sim-6',
    title: 'Interior Architectural Fit-Out & Turnkey Handover',
    duration: '0:12',
    discipline: 'Interior & FM',
    videoType: '5D Cost',
    fiveDLinkage: 'Drywall, acoustic ceiling, and lighting fixture counts with progressive billing milestone verification.',
    description: 'Drywall partition staging, ceiling tile placement, lighting fixture connection, and testing & commissioning.',
    posterUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    badgeColor: 'border-purple-500/40 text-purple-400'
  }
];

export const constructionPhases: ConstructionPhase[] = [
  {
    id: 1,
    name: 'Excavation & Site Preparation',
    durationWeeks: 'Weeks 01–08',
    discipline: 'Earthwork & Shoring',
    description: 'Topsoil stripping, retention wall secant piling, bulk earthwork excavation to -9.0m datum, and dewatering setup.',
    keyActivities: ['Bulk earthworks (42,000 m³)', 'Secant pile wall installation', 'Ground tiebacks and struts', 'Survey control datum alignment'],
    progressPercent: 14,
    elementTypesVisible: {
      ground: true,
      excavation: true,
      foundation: false,
      superstructure: false,
      envelope: false,
      mepPipes: false,
      interior: false,
      cranes: false
    }
  },
  {
    id: 2,
    name: 'Substructure & Foundations',
    durationWeeks: 'Weeks 09–18',
    discipline: 'Deep Foundation',
    description: 'Bored concrete piling, pile cap construction, ground moisture barriers, and reinforced concrete raft foundation casting.',
    keyActivities: ['120 bored piles with sonic logging', '2,400 m³ raft foundation mass pour', 'Basement perimeter retaining walls', 'Sub-slab MEP drainage sleeves'],
    progressPercent: 28,
    elementTypesVisible: {
      ground: true,
      excavation: true,
      foundation: true,
      superstructure: false,
      envelope: false,
      mepPipes: false,
      interior: false,
      cranes: true
    }
  },
  {
    id: 3,
    name: 'Superstructure Framework',
    durationWeeks: 'Weeks 19–42',
    discipline: 'Concrete & Steel Framing',
    description: 'Slipform central core rise, reinforced concrete columns, post-tensioned floor slabs, and structural steel roof crown erection.',
    keyActivities: ['Vertical core climbing system', '7-day slab cycle per floor', 'Tower crane logistics orchestration', 'Structural rebar placement verification'],
    progressPercent: 52,
    elementTypesVisible: {
      ground: true,
      excavation: false,
      foundation: true,
      superstructure: true,
      envelope: false,
      mepPipes: false,
      interior: false,
      cranes: true
    }
  },
  {
    id: 4,
    name: 'Building Envelope & Glazing',
    durationWeeks: 'Weeks 38–58',
    discipline: 'Facade Engineering',
    description: 'Installation of high-performance unitized curtain wall glazing, spandrel panels, louvers, and roof waterproofing membranes.',
    keyActivities: ['Unitized facade bracket setting', 'Curtain wall installation (floors 01–15)', 'Waterproofing & weather envelope lock', 'Acoustic seal testing'],
    progressPercent: 68,
    elementTypesVisible: {
      ground: true,
      excavation: false,
      foundation: true,
      superstructure: true,
      envelope: true,
      mepPipes: false,
      interior: false,
      cranes: false
    }
  },
  {
    id: 5,
    name: 'MEP Installation & Coordination',
    durationWeeks: 'Weeks 46–68',
    discipline: 'Mechanical, Electrical & Plumbing',
    description: 'High-density MEP rough-in: primary AHU equipment, chilled water risers, fire sprinkler distribution, and main electrical switchboards.',
    keyActivities: ['Plant room equipment rigging', 'Prefabricated multi-service ceiling racks', 'Fire pump & sprinkler manifold testing', 'Cable tray & electrical bus duct runs'],
    progressPercent: 82,
    elementTypesVisible: {
      ground: true,
      excavation: false,
      foundation: true,
      superstructure: true,
      envelope: true,
      mepPipes: true,
      interior: false,
      cranes: false
    }
  },
  {
    id: 6,
    name: 'Interior Fit-Out & Finishes',
    durationWeeks: 'Weeks 56–78',
    discipline: 'Architectural Interiors',
    description: 'Drywall partitioning, acoustic ceiling tile installation, flooring finishes, architectural joinery, and building automation sensor connections.',
    keyActivities: ['Drywall stud framing and boarding', 'Raised access floor installation', 'Door and architectural ironmongery', 'Terminal MEP fixture installation'],
    progressPercent: 94,
    elementTypesVisible: {
      ground: true,
      excavation: false,
      foundation: true,
      superstructure: true,
      envelope: true,
      mepPipes: true,
      interior: true,
      cranes: false
    }
  },
  {
    id: 7,
    name: 'Testing, Commissioning & Handover',
    durationWeeks: 'Weeks 79–86',
    discipline: 'Quality & Digital Twin Handover',
    description: 'TAB air & water balancing, fire life-safety integration testing, As-Built BIM model reconciliation, and COBie asset data delivery.',
    keyActivities: ['Air & water system balancing (TAB)', 'Integrated fire life-safety smoke test', 'LOD 500 As-Built model verification', 'COBie asset parameter export to CAFM'],
    progressPercent: 100,
    elementTypesVisible: {
      ground: true,
      excavation: false,
      foundation: true,
      superstructure: true,
      envelope: true,
      mepPipes: true,
      interior: true,
      cranes: false
    }
  }
];
