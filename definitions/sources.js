// tables which are externally imported to stage layer (not handled by dataform)
// declare() register names as sources for reference in queries

/*
This would be the code to split stage schema in dev and prod:

const env = dataform.projectConfig.vars.environment || "prod";

const stageSchema = env === "dev" ? "analytics_stage_dev" : "analytics_stage";

declare({
  schema: stageSchema,
  name: "sessions",
  description: "Raw session events from the event tracking system"
});

declare({
  schema: stageSchema,
  name: "leases"
});

declare({
  schema: stageSchema,
  name: "channel_mapping"
});

declare({
  schema: stageSchema,
  name: "ads_benchmarks"
});
*/

declare({
  schema: "analytics_stage",
  name: "sessions",
  description: "Raw session events from the event tracking system"
});

declare({
  schema: "analytics_stage",
  name: "leases"
});

declare({
  schema: "analytics_stage",
  name: "channel_mapping"
});

declare({
  schema: "analytics_stage",
  name: "ads_benchmarks"
});