import { buildBashScript } from '../../utils/bashHelper'
import { createQuickstartConfig } from '../../model/NetworkConfig'

test('creates 3nodes raft bash tessera', () => {
  const config = createQuickstartConfig('3', 'raft', 'tessera', 'bash', false)
  const bash = buildBashScript(config).startScript
  expect(bash).toMatchSnapshot()
})

test('creates 3nodes raft bash tessera cakeshop', () => {
  const config = createQuickstartConfig('3', 'raft', 'tessera', 'bash', true)
  const bash = buildBashScript(config).startScript
  expect(bash).toMatchSnapshot()
})
