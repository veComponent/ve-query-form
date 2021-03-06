module.exports = {
  presets: [
    // "@vue/cli-plugin-babel/preset",
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/env", {
            "targets": { "node": "current" }
          }
        ],
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import"
      ]
    }
  }
}
