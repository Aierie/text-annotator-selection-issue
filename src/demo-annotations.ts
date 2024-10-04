import { TextAnnotation } from "@recogito/text-annotator";

export const demoAnnotations = [
  {
    id: "e84b83ae-b32b-461b-b052-939c66127632",
    bodies: [],
    target: {
      annotation: "e84b83ae-b32b-461b-b052-939c66127632",
      selector: [
        {
          quote: "SELECT",
          start: 0,
          end: 6,
          range: {},
        },
      ],
      creator: {
        isGuest: true,
        id: "ZfSaslytvYPXhgoEqoxo",
      },
      created: new Date("2024-10-03T09:48:17.209Z"),
      updated: new Date("2024-10-03T09:48:17.954Z"),
    },
  },
  {
    id: "7997f90c-9e25-4dd6-9bf7-2754e98c89a9",
    bodies: [],
    target: {
      annotation: "7997f90c-9e25-4dd6-9bf7-2754e98c89a9",
      selector: [
        {
          quote: "MULTIPLE",
          start: 7,
          end: 15,
          range: {},
        },
      ],
      creator: {
        isGuest: true,
        id: "ZfSaslytvYPXhgoEqoxo",
      },
      created: new Date("2024-10-03T09:48:19.852Z"),
      updated: new Date("2024-10-03T09:48:21.459Z"),
    },
  },
  {
    id: "4e01a3cf-a70e-4cfc-8987-0583bc752fc8",
    bodies: [],
    target: {
      annotation: "4e01a3cf-a70e-4cfc-8987-0583bc752fc8",
      selector: [
        {
          quote: "THINGS",
          start: 16,
          end: 22,
          range: {},
        },
      ],
      creator: {
        isGuest: true,
        id: "ZfSaslytvYPXhgoEqoxo",
      },
      created: new Date("2024-10-03T09:48:24.869Z"),
      updated: new Date("2024-10-03T09:48:25.532Z"),
    },
  },
] as unknown as  Partial<TextAnnotation>[];
