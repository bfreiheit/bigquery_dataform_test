// takes environment variable from workflow_settings.yaml
const env = dataform.projectConfig.vars?.environment || "prod";

function schema(base) {
  if (env === "dev") {
    return `${base}_dev`;
  }
  return base;
}

module.exports = { schema };
