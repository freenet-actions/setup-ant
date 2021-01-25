# setup-ant
[![LICENSE](https://img.shields.io/github/license/md-actions/setup-ant)](https://github.com/ambientlight/md-actions/setup-ant/blob/main/LICENSE)

This action sets up ant tool. It downloads ant binaries from the https://archive.apache.org/dist/ant/binaries and adds path to PATH

   
# Usage
```yaml
- uses: md-actions/setup-ant@v1
  with:
    ant-version: '1.10.4' # The Ant version to make available on the path.
```
