import { TestBed } from '@angular/core/testing';

import { ProduitService } from './produit-service.service';

describe('PrduitServiceService', () => {
  let service: ProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
