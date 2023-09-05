# setup-ant
[![LICENSE](https://img.shields.io/github/license/freenet-actions/setup-ant)](https://github.com/freenet-actions/setup-ant/blob/main/LICENSE)

This action sets up ant tool. It downloads ant binaries from the https://archive.apache.org/dist/ant/binaries and adds path to PATH


# Usage
```yaml
- uses: freenet-actions/setup-ant@v3
  with:
    ant-version: '1.10.14' #optional, the Ant version to make available on the path (default: 1.10.14)
