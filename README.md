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

| Model ID | Display Name | Reasoning | Context Window | Max Output |
|----------|---------------|-----------|-----------------|------------|
| `qwen3.8-max-preview` | Qwen3.8 Max Preview | Yes | 1,000,000 | 32,000 |
| `qwen3.7-plus` | Qwen3.7 Plus | Yes | 1,000,000 | 64,000 |
| `qwen3.7-max` | Qwen3.7 Max | Yes | 1,000,000 | 64,000 |
| `deepseek-v4-pro` | DeepSeek V4 Pro | Yes | 1,000,000 | 384,000 * |
| `glm-5.2` | GLM 5.2 | Yes | 128,000 | 32,000 |

\* DeepSeek V4 models share a 384k total budget across output and thinking.

| Attribute | Value |
|-----------|-------|
| Provider | Aliyun Model Studio |
| Base URL | `https://token-plan.ap-southeast-1.maas.aliyuncs.com/apps/anthropic` |
| API | Anthropic-compatible (`/v1/messages`) |
| Pricing | Not published, configured as `0` pending confirmation |

Context window and max output values are sourced from the
[Qwen Cloud docs](https://docs.qwencloud.com/developer-guides/getting-started/text-generation-models).
Pricing values are `0` pending confirmation.

## License

MIT
