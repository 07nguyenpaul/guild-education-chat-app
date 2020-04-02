export const getMockDevices = (devices = []) => {
  return defaultMockDevices.concat(devices);
};

const defaultMockDevices = [
  {
    createDate: 1533914950000,
    id: '1772b3d4-4c6c-4ba9-8e27-0df91785f2ef',
    status: 'OFFLINE',
    zones: [
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
    ],
    timeZone: 'America/Denver',
    latitude: 39.7488528683057,
    longitude: -104.999049763862,
    name: 'Rachio-43EC06',
    scheduleRules: [],
    serialNumber: 'VR0567915',
    rainDelayExpirationDate: 0,
    macAddress: '74C63B43EC06',
    on: true,
    flexScheduleRules: [
      {
        id: 'e1732132-11ea-4631-a727-154a6bccbe59',
        zones: [
          {
            zoneId: 'c7b13bbb-83bb-46ef-a5c1-1c14e609f6d5',
            sortOrder: 1,
            duration: 1390
          },
          {
            zoneId: '6f5acd65-7c7e-4e26-8788-fc6f9cd6f9f8',
            sortOrder: 2,
            duration: 1390
          },
          {
            zoneId: 'ce8ee075-b72b-43ef-905c-6ed277da760f',
            sortOrder: 3,
            duration: 1390
          }
        ],
        scheduleJobTypes: [
          'ANY'
        ],
        operator: 'AFTER',
        summary: 'As needed end by 6:00 AM',
        cycleSoak: false,
        startDate: 1534226400000,
        name: 'Scjfsj',
        enabled: true,
        startDay: 14,
        startMonth: 8,
        startYear: 2018,
        totalDuration: 11120,
        externalName: 'Scjfsj',
        type: 'FLEX'
      }
    ],
    model: 'GENERATION2_8ZONE',
    scheduleModeType: 'MANUAL',
    deleted: false,
    homeKitCompatible: false,
    utcOffset: -25200000
  },
  {
    createDate: 1527721269000,
    id: '09e93008-a39c-4421-97a6-9aee9a78af87',
    status: 'OFFLINE',
    zones: [
      {
        id: '15a8aa00-92a6-4f5a-a624-6b1ad21c9d07',
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
        lastWateredDate: 1527849481000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: '48c4c90c-92d1-435a-ab86-c3e11f935cab',
        zoneNumber: 3,
        name: 'Zone 3',
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
        lastWateredDate: 1527847802000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: '36458c26-1a34-4a7d-9235-99c7d024895a',
        zoneNumber: 8,
        name: 'Zone 8',
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
        lastWateredDuration: 838,
        lastWateredDate: 1527852002000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: '48abe5af-6ebb-4318-a3de-07028dc56467',
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
        lastWateredDate: 1527850323000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: 'db9755bc-4315-42e0-a3d1-45c058b6230a',
        zoneNumber: 7,
        name: 'Zone 7',
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
        lastWateredDate: 1527851162000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: '9a538221-1012-4f35-b85b-dd1bb9533de0',
        zoneNumber: 2,
        name: 'Zone 2',
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
        lastWateredDate: 1527846962000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: 'cf5cd5a5-61b9-4a13-985b-ea95af5b4a56',
        zoneNumber: 1,
        name: 'Zone 1',
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
        lastWateredDate: 1527846122000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      },
      {
        id: 'c04fa95a-5028-4e73-af52-ceef29f7b8d6',
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
        lastWateredDate: 1527848641000,
        scheduleDataModified: false,
        fixedRuntime: 0,
        wateringAdjustmentRuntimes: {
          '1': 2094,
          '2': 1745,
          '3': 1396,
          '4': 1047,
          '5': 698
        },
        saturatedDepthOfWater: 1.43,
        depthOfWater: 1.3,
        maxRuntime: 10800,
        runtimeNoMultiplier: 1396,
        runtime: 1396
      }
    ],
    timeZone: 'America/New_York',
    latitude: 26.3104648,
    longitude: -80.200489,
    name: 'Rachio-55C41F',
    scheduleRules: [
      {
        id: '57654472-18e8-4a3a-bbc8-c320dc66ecbf',
        zones: [
          {
            zoneId: 'c04fa95a-5028-4e73-af52-ceef29f7b8d6',
            duration: 660,
            sortOrder: 3
          },
          {
            zoneId: '48c4c90c-92d1-435a-ab86-c3e11f935cab',
            duration: 660,
            sortOrder: 2
          },
          {
            zoneId: '48abe5af-6ebb-4318-a3de-07028dc56467',
            duration: 660,
            sortOrder: 5
          },
          {
            zoneId: 'db9755bc-4315-42e0-a3d1-45c058b6230a',
            duration: 660,
            sortOrder: 6
          },
          {
            zoneId: '36458c26-1a34-4a7d-9235-99c7d024895a',
            duration: 660,
            sortOrder: 7
          },
          {
            zoneId: 'cf5cd5a5-61b9-4a13-985b-ea95af5b4a56',
            duration: 660,
            sortOrder: 0
          },
          {
            zoneId: '9a538221-1012-4f35-b85b-dd1bb9533de0',
            duration: 660,
            sortOrder: 1
          },
          {
            zoneId: '15a8aa00-92a6-4f5a-a624-6b1ad21c9d07',
            duration: 660,
            sortOrder: 4
          }
        ],
        scheduleJobTypes: [
          'DAY_OF_WEEK_6',
          'DAY_OF_WEEK_5'
        ],
        operator: 'AFTER',
        summary: 'Every Fri, Sat end by sunrise',
        cycleSoakStatus: 'ON',
        startDate: 1527652800000,
        name: 'hnnnn',
        enabled: true,
        startDay: 30,
        startMonth: 5,
        startYear: 2018,
        totalDuration: 5280,
        etSkip: true,
        externalName: 'hnnnn',
        cycleSoak: true
      }
    ],
    serialNumber: 'VR0567845',
    macAddress: '74C63B55C41F',
    on: true,
    flexScheduleRules: [],
    model: 'GENERATION2_8ZONE',
    scheduleModeType: 'MANUAL',
    deleted: false,
    utcOffset: -18000000,
    homeKitCompatible: false
  },
];
