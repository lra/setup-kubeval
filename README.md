# setup-kubeval V1

This action installs a specific version of [kubeval](https://www.kubeval.com/).

## Inputs

### `version`

__Optional__ Kubeval version to install (default: 0.15.0).

## Example usage

Without specifying a version:

```yaml
- uses: lra/setup-kubeval@v1
- run: kubeval some.yaml
```

Specifying a version:

```yaml
- uses: lra/setup-kubeval@v1
  with:
    version: 0.15.0
- run: cat some.yaml | kubeval
```
