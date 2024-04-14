
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('core')
@ApiTags("app")
export class AppController {
    constructor(
    ) { }

}
