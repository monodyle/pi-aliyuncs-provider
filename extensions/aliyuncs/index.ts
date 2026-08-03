import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("aliyuncs", {
    name: "Aliyun",
    baseUrl: "https://token-plan.ap-southeast-1.maas.aliyuncs.com/apps/anthropic",
    apiKey: "$ALIYUNCS_API_KEY",
    api: "anthropic-messages",
    authHeader: true,
    headers: {
      "anthropic-version": "2023-06-01",
    },
    models: [
      {
        id: "qwen3.8-max",
        name: "Qwen3.8 Max",
        reasoning: true,
        input: ["text", "image"],
        cost: {
          input: 2,
          output: 6,
          cacheRead: 0.17,
          cacheWrite: 2.5,
        },
        contextWindow: 1_000_000,
        maxTokens: 32_000,
      },
      {
        id: "qwen3.8-max-preview",
        name: "Qwen3.8 Max Preview",
        reasoning: true,
        input: ["text", "image"],
        cost: {
          input: 0,
          output: 0,
          cacheRead: 0,
          cacheWrite: 0,
        },
        contextWindow: 1_000_000,
        maxTokens: 32_000,
      },
      {
        id: "qwen3.7-plus",
        name: "Qwen3.7 Plus",
        reasoning: true,
        input: ["text", "image"],
        cost: {
          input: 0,
          output: 0,
          cacheRead: 0,
          cacheWrite: 0,
        },
        contextWindow: 1_000_000,
        maxTokens: 64_000,
      },
      {
        id: "qwen3.7-max",
        name: "Qwen3.7 Max",
        reasoning: true,
        input: ["text", "image"],
        cost: {
          input: 0,
          output: 0,
          cacheRead: 0,
          cacheWrite: 0,
        },
        contextWindow: 1_000_000,
        maxTokens: 64_000,
      },
      {
        id: "deepseek-v4-flash-0731",
        name: "DeepSeek V4 Flash 0731",
        reasoning: true,
        input: ["text"],
        cost: {
          input: 0.2,
          output: 0.4,
          cacheRead: 0.04,
          cacheWrite: 0,
        },
        contextWindow: 1_000_000,
        maxTokens: 384_000,
      },
      {
        id: "deepseek-v4-pro",
        name: "DeepSeek V4 Pro",
        reasoning: true,
        input: ["text"],
        cost: {
          input: 0,
          output: 0,
          cacheRead: 0,
          cacheWrite: 0,
        },
        contextWindow: 1_000_000,
        maxTokens: 384_000,
      },
      {
        id: "glm-5.2",
        name: "GLM 5.2",
        reasoning: true,
        input: ["text"],
        cost: {
          input: 0,
          output: 0,
          cacheRead: 0,
          cacheWrite: 0,
        },
        contextWindow: 128_000,
        maxTokens: 32_000,
      },
    ],
  });
}
