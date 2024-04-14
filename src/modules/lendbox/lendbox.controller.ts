import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LendboxService } from './lendbox.service';

@Controller('lendbox')
@ApiTags("lendbox")
export class LendboxController {
    constructor(
        private lendboxService: LendboxService
    ) { }

   

}
