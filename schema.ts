import { list } from "@keystone-6/core";

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  image,
  checkbox,
} from "@keystone-6/core/fields";

import { document } from "@keystone-6/fields-document";

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
  Post: list({
    fields: {
      title: text(),
      summary: text(),
      featuredImage: image(),
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
        ],
        defaultValue: "draft",
        ui: {
          displayMode: "segmented-control",
        },
      }),
      content: document({
        formatting: true,
        links: true,
        dividers: true,
      }),
      publishDate: timestamp(),
      relatedPosts: relationship({ ref: "Post", many: true }),
    },
  }),
  Page: list({
    fields: {
      title: text(),
      summary: text(),
      includeHeader: checkbox({
        label: "Include Header fields in the layout?",
      }),
      featuredImage: image(),
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
        ],
        defaultValue: "draft",
        ui: {
          displayMode: "segmented-control",
        },
      }),
      content: document({
        formatting: true,
        links: true,
        dividers: true,
      }),
    },
  }),
  Participant: list({
    fields: {
      name: text(),
      email: text(),
      githubHandle: text(),
      twitterHandle: text(),
      avatar: image(),
      role: select({
        options: [
          { label: "Speaker", value: "speaker" },
          { label: "Attendee", value: "attendee" },
        ],
        defaultValue: "speaker",
        ui: {
          displayMode: "segmented-control",
        },
      }),
    },
  }),
  Sponsor: list({
    fields: {
      name: text(),
      summary: text(),
      website: text(),
      logo: image(),
      sponsorshipLevel: select({
        options: [
          { label: "Gold", value: "gold" },
          { label: "Silver", value: "silver" },
          { label: "Bronze", value: "bronze" },
        ],
        defaultValue: "gold",
        ui: {
          displayMode: "segmented-control",
        },
      }),
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
        ],
        defaultValue: "draft",
        ui: {
          displayMode: "segmented-control",
        },
      }),
    },
  }),
};
