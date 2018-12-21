import { TestBed } from '@angular/core/testing';

import { P2pServiceService } from './p2p-service.service';

describe('P2pServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: P2pServiceService = TestBed.get(P2pServiceService);
    expect(service).toBeTruthy();
  });
});
