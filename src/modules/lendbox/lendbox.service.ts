import { Injectable } from '@nestjs/common';
import * as Axios from 'axios'

@Injectable()
export class LendboxService {
    constructor(
        private readonly baseUrl = "https://api-dev.lendbox.in"
    ) { }



}
