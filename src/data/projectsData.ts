import { ProjectCaseStudy } from '../types';

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 'proj-commercial-architecture',
    title: 'Commercial High-Rise Architectural & Envelope Modeling',
    category: 'Architecture',
    clientSector: 'Commercial High-Rise Typology',
    location: 'Metropolitan District',
    lod: 'LOD 350 / 400',
    area: '85,000 m² (42 Levels)',
    software: ['Autodesk Revit', 'Rhino Inside Revit', 'Navisworks Manage', 'Enscape'],
    summary: 'Comprehensive architectural BIM modeling of multi-story commercial high-rise buildings featuring parametric double-skin curtain walls, complex atriums, and coordinated architectural core layouts.',
    challenge: 'Curtain wall systems involving complex geometric glass panels with shifting solar orientation fins, creating tight interfaces with perimeter structural columns and floor slab edge drops.',
    solution: 'Engineered parametric Revit families driven by computational geometry workflows. Established precise grid coordinates and floor slab edge setback parameters, coordinating closely with facade engineering packages to eliminate assembly discrepancies.',
    results: [
      'Model delivered with zero uncoordinated perimeter slab clashes',
      'Extracted 100% synchronized exterior facade drawings and panel schedules',
      'Accelerated design revision coordination cycles',
      'Provided verified model geometry for aerodynamic and thermal performance analysis'
    ],
    deliverables: [
      'LOD 350 Architectural Revit Model with parameter-rich family library',
      'High-Resolution Facade General Arrangement Sheets, Transom & Mullion Details',
      'Door, Window, and Glazing Schedule Exports (Excel/PDF)',
      'Navisworks Federated Coordination Cache (.NWC)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    isSampleDemonstration: true
  },
  {
    id: 'proj-infrastructure-structure',
    title: 'Multi-Modal Infrastructure Structural & Rebar Detailing',
    category: 'Structure',
    clientSector: 'Infrastructure & Transportation Typology',
    location: 'Regional Interchange',
    lod: 'LOD 400 Fabrication',
    area: '140,000 m²',
    software: ['Autodesk Revit Structure', 'Tekla Structures', 'Navisworks Manage'],
    summary: 'Structural BIM modeling and rebar detailing for large-span transport terminals encompassing deep foundations, complex post-tensioned transfer girders, and structural steel space trusses.',
    challenge: 'High rebar congestion at main post-tensioned transfer girder nodes interfacing with critical drainage sleeves and passenger subway concourse box culverts.',
    solution: 'Modeled full 3D rebar cages at LOD 400 for high-density structural nodes, identifying physical rebar-to-sleeve interferences in the digital model prior to steel fabrication and concrete placement.',
    results: [
      'Eliminated on-site rebar cutting and sleeve relocation delays',
      'Automated Bar Bending Schedule (BBS) minimized steel wastage',
      'Delivered CNC-ready fabrication files for structural steel packages',
      'Maintained strict structural authority compliance'
    ],
    deliverables: [
      'LOD 400 Tekla and Revit Structural Models',
      'Structural Steel Connection & Fabrication Shop Drawing Packages',
      'Bar Bending Schedules (BBS) and Rebar Placement Drawings',
      'Coordinated Sleeve Penetration Layouts for cast-in casting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
    isSampleDemonstration: true
  },
  {
    id: 'proj-healthcare-mep',
    title: 'Healthcare & Hospital Complex MEPF Services Coordination',
    category: 'MEP',
    clientSector: 'Healthcare & Life Sciences Typology',
    location: 'Specialized Medical Campus',
    lod: 'LOD 350 / 400',
    area: '62,000 m² (550 Beds)',
    software: ['Autodesk Revit MEP', 'Navisworks Manage', 'Revizto', 'AutoCAD MEP'],
    summary: 'Full MEPF modeling and high-density multi-trade coordination for operating suites, intensive care units, medical gas systems, cleanroom HVAC air filtration, and emergency generator distribution.',
    challenge: 'Restricted ceiling voids accommodating multiple competing service systems: cleanroom laminar flow supply ducts, medical vacuum, nitrous oxide, pneumatic tubes, domestic water, and fire sprinkler mains.',
    solution: 'Established disciplined priority-based routing hierarchies. Gravity drainage and large supply air ducts were coordinated first, with modular prefabricated multi-service racks (MSR) designed for corridor runs.',
    results: [
      'Resolved thousands of interdisciplinary trade clashes digitally prior to installation',
      'Designed prefabricated modular MEP corridor racks saving on-site ceiling installation time',
      'Achieved medical gas clearance compliance without site concessions',
      'Delivered clash-free Combined Services Drawings (CSD) on schedule'
    ],
    deliverables: [
      'Coordinated Revit MEP 3D Models (.RVT) with full system parameters',
      'Combined Services Drawings (CSD) and Builders Work Drawings (BWD)',
      'Medical Gas System Isometric Schematics and Valve Tag Schedules',
      'Navisworks Clash Audit Reports and BCF Action Logs'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    isSampleDemonstration: true
  },
  {
    id: 'proj-datacenter-coordination',
    title: 'Mission-Critical Facility BIM Clash Resolution',
    category: 'BIM Coordination',
    clientSector: 'Mission-Critical & Technology Typology',
    location: 'High-Tech Corridor',
    lod: 'LOD 350 / 400',
    area: '32,000 m²',
    software: ['Navisworks Manage', 'Autodesk Construction Cloud', 'Revit', 'Revizto'],
    summary: 'Interdisciplinary federated BIM coordination and clash resolution for mission-critical facilities with redundant cooling, heavy electrical bus ducts, and pre-action fire suppression.',
    challenge: 'Compressed delivery schedule requiring zero construction stoppage where overhead bus ducts, heavy chilled water ring mains, and structural steel bracing occupied the same ceiling zone.',
    solution: 'Conducted regular virtual coordination workshops using Autodesk Construction Cloud and Navisworks. Implemented automated rule sets to group clashes by severity and trade accountability.',
    results: [
      'Closed clash issues proactively before ground-break',
      'Zero reported site collisions between structural steel and chilled water headers',
      'Enabled offsite prefabrication of pipe spool headers with high dimensional certainty',
      'Maintained total alignment with project milestones'
    ],
    deliverables: [
      'Clash-Free Federated NWD Model Cache',
      'BCF Cloud Coordination Logs with audit trail history',
      'Detailed Builders Work in Connection (BWIC) penetrations',
      'Equipment Maintenance Clearance Volume Verification Model'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    isSampleDemonstration: true
  },
  {
    id: 'proj-residential-shopdrawings',
    title: 'Residential Multi-Tower Construction Documentation & Shop Drawings',
    category: 'Shop Drawings',
    clientSector: 'Residential & Multi-Family Typology',
    location: 'Urban Waterfront',
    lod: 'LOD 400',
    area: '95,000 m² (Multi-Tower)',
    software: ['Autodesk Revit', 'AutoCAD', 'Bluebeam Revu'],
    summary: 'Extraction and delivery of fully dimensioned, annotated architectural and MEP shop drawings for multi-tower residential developments and podium amenity decks.',
    challenge: 'High variation in unit layouts requiring exact coordination between MEP plumbing drops, ceiling steps, and decorative architectural finishes.',
    solution: 'Directly synchronized 2D sheet viewports inside Revit from the federated LOD 400 model. Developed automated sheet set templates ensuring consistent line weights, keyplans, and coordinate annotations.',
    results: [
      'Delivered approved shop drawing sheets across multiple contractor packages',
      'Eliminated typical discrepancy errors between architectural RCPs and MEP diffuser positions',
      'Mitigated rework from drawing dimensional mismatches',
      'Smooth authority drawing review and site installation sign-off'
    ],
    deliverables: [
      'Vector PDF and DWG Shop Drawing packages matching client title blocks',
      'Reflected Ceiling Plans (RCP) integrated with MEP lighting and diffusers',
      'Plumbing Riser Isometrics and Sanitary Pipe Spool Drawings',
      'Itemized Bill of Quantities (BOQ) with standard classification mapping'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    isSampleDemonstration: true
  },
  {
    id: 'proj-heritage-scantobim',
    title: 'Heritage & Existing Asset 3D Scan-to-BIM Reality Capture',
    category: 'Scan-to-BIM',
    clientSector: 'Heritage Preservation & Adaptive Reuse',
    location: 'Historic District',
    lod: 'LOD 350 / LOA 30',
    area: '24,000 m²',
    software: ['Autodesk ReCap Pro', 'Autodesk Revit', 'CloudCompare'],
    summary: '3D laser scanning point cloud processing and Scan-to-BIM modeling of historical stone masonry structures undergoing adaptive reuse and modernization.',
    challenge: 'Absence of reliable historical blueprints with masonry walls exhibiting non-standard arches, out-of-plumb bowing, and undocumented ceiling voids.',
    solution: 'Ingested terrestrial LiDAR scan stations. Modeled irregular heritage walls, vaults, and ornate stone cornice profiles in Revit with custom in-place families matching point cloud contours.',
    results: [
      'Delivered an accurate digital twin within strict point cloud tolerance',
      'Identified structural floor slab sagging enabling early reinforcement planning',
      'Successfully routed modern HVAC services through existing shafts without damaging historic elements',
      'Provided verified 2D measured survey drawings for conservation planning'
    ],
    deliverables: [
      'Parametric Revit As-Built Model (.RVT) segmented by conservation phases',
      'Point Cloud vs. BIM Surface Deviation Analysis & Color Heatmaps',
      'Existing Conditions Measured Architectural Drawings (Plans, Sections, Elevations)',
      'Heritage Architectural Profile Detail Catalog'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    isSampleDemonstration: true
  }
];
