export interface IndustrySector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyApplications: string[];
  sampleTypology: string;
  imageUrl: string;
}

export const industrySectors: IndustrySector[] = [
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    subtitle: 'High-Rise Office Towers, Corporate Headquarters & Business Parks',
    description: 'We optimize tenant space planning, complex core layouts, high-performance curtain walls, and central chilled-water MEP plant coordination for commercial developments.',
    keyApplications: ['LOD 350/400 Core & Shell Modeling', 'Double-Skin Facade Detailing', 'Automated Area Take-Offs (BOMA/RICS)', 'Tenancy Fit-Out Coordination'],
    sampleTypology: 'Grade-A Office Towers, Multi-Tenant Parks',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'residential',
    title: 'Residential Developments',
    subtitle: 'High-Density Towers, Luxury Condominiums & Master-Planned Communities',
    description: 'Standardized repetitive unit modeling, structural precast integration, plumbing riser stack coordination, and automated BOQ for residential builders.',
    keyApplications: ['Typical Unit Family Standardization', 'Plumbing Riser Stack Coordination', 'Precast Concrete Panel Detailing', 'High-Density MEP Corridor Routing'],
    sampleTypology: 'High-Rise Apartments, Gated Communities',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    subtitle: 'Acute Care Hospitals, Surgical Suites & Research Laboratories',
    description: 'Rigorous coordination of mission-critical medical gas pipelines, cleanroom laminar flow HVAC, radiation shielding walls, and emergency backup services.',
    keyApplications: ['NFPA 99 Medical Gas Clearance Modeling', 'Cleanroom Pressure Hierarchy Coordination', 'Operating Theater Equipment Ceiling Grids', 'Asset Tagging for Hospital CAFM'],
    sampleTypology: 'Multi-Specialty Hospitals, Bio-Pharma Labs',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Leisure',
    subtitle: 'Luxury 5-Star Hotels, Beach Resorts & Convention Centers',
    description: 'Preserving aesthetic architectural design intent while seamlessly concealing dense MEP distribution inside luxury guest rooms, grand ballrooms, and podium facilities.',
    keyApplications: ['Acoustic Partition Wall Modeling', 'Reflected Ceiling Plan (RCP) Integration', 'Commercial Kitchen & Laundry MEP', 'Swimming Pool & Spa Filtration Routing'],
    sampleTypology: '5-Star Hotels, Luxury Resorts',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    subtitle: 'Manufacturing Plants, Warehouses & Distribution Logistics Centers',
    description: 'Large-span structural steel framing, heavy crane runway girders, process piping networks, and automated material handling system coordination.',
    keyApplications: ['Structural Steel Shop Drawings', 'Process Piping Isometrics & Spools', 'Forklift & Crane Swept Path Modeling', 'High-Bay Sprinkler Network Design'],
    sampleTypology: 'Automotive Plants, E-Commerce Logistics Hubs',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'education',
    title: 'Education & Institutional',
    subtitle: 'University Campuses, Research Centers & Educational Complexes',
    description: 'Sustainable campus modeling, acoustic performance modeling for auditoriums, lab fume hood exhaust routing, and phased educational building development.',
    keyApplications: ['Auditorium Sightline & Acoustic Modeling', 'Chemistry Lab Fume Exhaust Routing', 'Campus-Wide Shared Coordinate Setup', 'Phased Modernization & Additions'],
    sampleTypology: 'University Campuses, STEM Facilities',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'retail',
    title: 'Retail & Mixed-Use Developments',
    subtitle: 'Shopping Malls, Entertainment Complexes & Lifestyle Destinations',
    description: 'Coordinating soaring multi-story central atriums, tenant lease line boundaries, complex escalators, smoke exhaust systems, and public circulation pathways.',
    keyApplications: ['Atrium Smoke Evacuation Routing', 'Tenant MEP Demarcation Boundaries', 'Architectural Feature Staircases', 'Wayfinding & Sightline Optimization'],
    sampleTypology: 'Destination Malls, Mixed-Use Towers',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Aviation',
    subtitle: 'Airport Terminals, Rail Transit Stations & Subsurface Transport',
    description: 'Civil and structural coordination for passenger interchanges, underground rail concourses, utility tunnels, and baggage handling conveyor networks.',
    keyApplications: ['Deep Excavation & Retention Modeling', 'Subsurface Utility Clashing Audits', 'Passenger Flow & Wayfinding BIM', 'Long-Span Space Frame Detailing'],
    sampleTypology: 'Airport Terminals, Metro Interchange Stations',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80'
  }
];
