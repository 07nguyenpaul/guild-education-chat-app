export const getMockZones = (zones = []) => {
  return defaultMockDevices.concat(zones);
};

const defaultMockZones = [
  {
    id: '51e55f65-2d5b-4350-ac84-b79c55fe2989',
    zoneNumber: 6,
    name: 'Zone 6',
    enabled: true,
    customNozzle: {
      name: 'FIXED_SPRAY_HEAD',
      inchesPerHour: 3.81
    },
    customSoil: {
      name: 'LOAM'
    },
    customSlope: {
      name: 'ZERO_THREE',
      sortOrder: 0
    },
    customCrop: {
      name: 'Cool Season Grass',
      coefficient: 0.8
    },
    customShade: {
      name: 'LOTS_OF_SUN'
    },
    availableWater: 0.17,
    rootZoneDepth: 15.24,
    managementAllowedDepletion: 0.5,
    efficiency: 0.8,
    yardAreaSquareFeet: 46,
    imageUrl: 'https://prod-media-photo.rach.io/8107d244-1176-44a4-9a7e-d1de3b803f82',
    lastWateredDate: 1524752701000,
    scheduleDataModified: false,
    fixedRuntime: 0,
    saturatedDepthOfWater: 1.43,
    depthOfWater: 1.3,
    maxRuntime: 10800,
    runtimeNoMultiplier: 1396,
    wateringAdjustmentRuntimes: {
      '1': 2094,
      '2': 1745,
      '3': 1396,
      '4': 1047,
      '5': 698
    },
    runtime: 1396
  },
  {
    id: '10f4a000-96d4-4574-9a43-59f20b226978',
    zoneNumber: 5,
    name: 'Zone 5',
    enabled: true,
    customNozzle: {
      name: 'FIXED_SPRAY_HEAD',
      inchesPerHour: 3.81
    },
    customSoil: {
      name: 'LOAM'
    },
    customSlope: {
      name: 'ZERO_THREE',
      sortOrder: 0
    },
    customCrop: {
      name: 'Cool Season Grass',
      coefficient: 0.8
    },
    customShade: {
      name: 'LOTS_OF_SUN'
    },
    availableWater: 0.17,
    rootZoneDepth: 15.24,
    managementAllowedDepletion: 0.5,
    efficiency: 0.8,
    yardAreaSquareFeet: 46,
    imageUrl: 'https://prod-media-photo.rach.io/8107d244-1176-44a4-9a7e-d1de3b803f82',
    lastWateredDate: 1524752281000,
    scheduleDataModified: false,
    fixedRuntime: 0,
    saturatedDepthOfWater: 1.43,
    depthOfWater: 1.3,
    maxRuntime: 10800,
    runtimeNoMultiplier: 1396,
    wateringAdjustmentRuntimes: {
      '1': 2094,
      '2': 1745,
      '3': 1396,
      '4': 1047,
      '5': 698
    },
    runtime: 1396
  },
  {
    id: 'ce8ee075-b72b-43ef-905c-6ed277da760f',
    zoneNumber: 4,
    name: 'Zone 4',
    enabled: true,
    customNozzle: {
      name: 'FIXED_SPRAY_HEAD',
      inchesPerHour: 3.81
    },
    customSoil: {
      name: 'LOAM'
    },
    customSlope: {
      name: 'ZERO_THREE',
      sortOrder: 0
    },
    customCrop: {
      name: 'Cool Season Grass',
      coefficient: 0.8
    },
    customShade: {
      name: 'LOTS_OF_SUN'
    },
    availableWater: 0.17,
    rootZoneDepth: 15.24,
    managementAllowedDepletion: 0.5,
    efficiency: 0.8,
    yardAreaSquareFeet: 46,
    imageUrl: 'https://prod-media-photo.rach.io/8107d244-1176-44a4-9a7e-d1de3b803f82',
    lastWateredDate: 1524751861000,
    scheduleDataModified: false,
    fixedRuntime: 0,
    saturatedDepthOfWater: 1.43,
    depthOfWater: 1.3,
    maxRuntime: 10800,
    runtimeNoMultiplier: 1396,
    wateringAdjustmentRuntimes: {
      '1': 2094,
      '2': 1745,
      '3': 1396,
      '4': 1047,
      '5': 698
    },
    runtime: 1396
  }
];
