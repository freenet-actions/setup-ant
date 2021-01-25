import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import * as path from 'path'

let tempDirectory = process.env['RUNNER_TEMPDIRECTORY'] || ''

if (!tempDirectory) {
  let baseLocation: string
  if (process.platform === 'win32') {
    baseLocation = process.env['USERPROFILE'] || 'C:\\'
  } else {
    if (process.platform === 'darwin') {
      baseLocation = '/Users'
    } else {
      baseLocation = '/home'
    }
  }
  tempDirectory = path.join(baseLocation, 'actions', 'temp')
}

export async function getAnt(version: string): Promise<void> {
  let toolPath: string
  toolPath = tc.find('ant', version)

  if (!toolPath) {
    toolPath = await downloadAnt(version)
  }

  toolPath = path.join(toolPath, 'bin')
  core.addPath(toolPath)
}

async function downloadAnt(version: string): Promise<string> {
  const toolDirectoryName = `apache-ant-${version}`
  const downloadUrl = `https://archive.apache.org/dist/ant/binaries/${toolDirectoryName}-bin.tar.gz`

  try {
    const downloadPath = await tc.downloadTool(downloadUrl)
    const extractedPath = await tc.extractTar(downloadPath)
    const toolRoot = path.join(extractedPath, toolDirectoryName)
    return await tc.cacheDir(toolRoot, 'ant', version)
  } catch (err) {
    throw err
  }
}
