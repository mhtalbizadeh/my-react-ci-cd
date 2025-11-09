// eslint-rules/no-console-log.js
export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow console.log in codebase",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      noConsole: "console.log is not allowed.",
    },
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.object.name === "console" && node.property.name === "log") {
          context.report({ node, messageId: "noConsole" });
        }
      },
    };
  },
};
