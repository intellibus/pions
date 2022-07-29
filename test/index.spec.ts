import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Pions Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'pions');
});

export const { run } = test;
