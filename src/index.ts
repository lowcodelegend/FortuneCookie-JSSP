import "@k2oss/k2-broker-core";
import fortunes from "fortune-cookie";
import slugify from "slugify";
import dayjs from "dayjs";

/**
 * Fortune Cookie Broker - Returns random fortunes with metadata.
 */

metadata = {
  systemName: "com.demo.fortunecookie",
  displayName: "Fortune Cookie Broker",
  description: "Returns random fortune cookies with extra metadata, powered by npm modules!",
  configuration: {}
};

ondescribe = async function () {
  postSchema({
    objects: {
      fortune: {
        displayName: "Fortune",
        description: "A random fortune cookie message.",
        properties: {
          fortune: { displayName: "Fortune", type: "string" },
          slug: { displayName: "Slug", type: "string" },
          date: { displayName: "Date", type: "string" }
        },
        methods: {
          get: {
            displayName: "Get Fortune",
            type: "read",
            inputs: [],
            outputs: ["fortune", "slug", "date"]
          }
        }
      }
    }
  });
};

onexecute = async function ({
  objectName,
  methodName,
  properties,
  parameters,
  configuration
}) {
  switch (objectName) {
    case "fortune":
      await onexecuteFortune(methodName);
      break;
    default:
      throw new Error("Object '" + objectName + "' not supported.");
  }
};

async function onexecuteFortune(methodName: string) {
  switch (methodName) {
    case "get":
      await onexecuteFortuneGet();
      break;
    default:
      throw new Error("Method '" + methodName + "' not supported.");
  }
}

async function onexecuteFortuneGet() {
  // Get a random fortune from the npm package
  const idx = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[idx];
  const slug = slugify(fortune, { lower: true, strict: true });
  const date = dayjs().format("YYYY-MM-DD HH:mm:ss");
  postResult({
    fortune,
    slug,
    date
  });
}
