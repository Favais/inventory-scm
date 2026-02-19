import { Test, TestingModule } from '@nestjs/testing';
import { PasswordResetService } from './password-reset.service.js';

describe('PasswordResetServiceService', () => {
  let service: PasswordResetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordResetServiceService],
    }).compile();

    service = module.get<PasswordResetServiceService>(
      PasswordResetServiceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
