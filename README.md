# setup-ant
This action sets up ant tool. It downloads ant binaries from the https://archive.apache.org/dist/ant/binaries and adds path to PATH

   
# Usage
```yaml
- uses: md-actions/setup-ant@v1
  with:
    ant-version: '1.10.4' # The Ant version to make available on the path.
```
