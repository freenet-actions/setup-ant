import * as core from '@actions/core'
import * as installer from './installer'

async function run(): Promise<void> {
  try {
    const version = core.getInput('ant-version')
    if (version) {
      await installer.getAnt(version)
    }
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
