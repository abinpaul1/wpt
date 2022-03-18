'use strict';

test(() => {
  // Compute Pressure should support at least "cpu"
  const sources = ComputePressureObserver.supportedSources;
  assert_in_array('cpu', sources);
}, 'ComputePressureObserver should support at least "cpu"');
