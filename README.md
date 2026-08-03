# pi-aliyuncs-provider

Pi extension that registers **Aliyun Model Studio** models via its Anthropic-compatible API.
It exposes Qwen, DeepSeek, and GLM models hosted behind Aliyun's `token-plan` endpoint.

## Install

From git:

```bash
pi install git:github.com/monodyle/pi-aliyuncs-provider
```

## Setup

Run `/login aliyuncs` as usual and paste Aliyun Studio API key.

Or, set your Aliyun Model Studio API key as an environment variable:

```bash
export ALIYUNCS_API_KEY="your-key-here"
```

Pi will automatically discover the models after installation.
Select a model from the model picker (`/model`) or set one as default in settings.

## Model Details

| Model ID | Display Name | Reasoning | Context Window | Max Output | Pricing (USD / 1M tokens) |
|----------|---------------|-----------|-----------------|------------|---------------------------|
| `qwen3.8-max` | Qwen3.8 Max | Yes | 1,000,000 | 32,000 | In $2 / Out $6 / Cache write $2.5 / Cache read $0.17 |
| `qwen3.8-max-preview` | Qwen3.8 Max Preview | Yes | 1,000,000 | 32,000 | - |
| `qwen3.7-plus` | Qwen3.7 Plus | Yes | 1,000,000 | 64,000 | - |
| `qwen3.7-max` | Qwen3.7 Max | Yes | 1,000,000 | 64,000 | - |
| `deepseek-v4-flash-0731` | DeepSeek V4 Flash 0731 | Yes | 1,000,000 | 384,000 * | In $0.2 / Out $0.4 / Cache read $0.04 |
| `deepseek-v4-pro` | DeepSeek V4 Pro | Yes | 1,000,000 | 384,000 * | - |
| `glm-5.2` | GLM 5.2 | Yes | 128,000 | 32,000 | - |

\* DeepSeek V4 models share a 384k total budget across output and thinking.

| Attribute | Value |
|-----------|-------|
| Provider | Aliyun Model Studio |
| Base URL | `https://token-plan.ap-southeast-1.maas.aliyuncs.com/apps/anthropic` |
| API | Anthropic-compatible (`/v1/messages`) |
| Pricing | Per-million-token USD rates; `0` where not published, pending confirmation |

Context window and max output values are sourced from the
[Qwen Cloud docs](https://docs.qwencloud.com/developer-guides/getting-started/text-generation-models).
Pricing for `qwen3.8-max` and `deepseek-v4-flash-0731` comes from the
[Qwen Cloud model pages](https://www.qwencloud.com/models);
other models remain `0` pending confirmation.

## License

MIT
