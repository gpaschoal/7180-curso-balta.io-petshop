import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Customer } from "../models/customer.model";
import { Result } from "../models/result.model";

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get(): Result {
    return new Result(null, true, [], null);
  }

  @Get(':document')
  getById(@Param('document') document: string): Result {
    return new Result(null, true, {}, null);
  }

  @Post()
  post(@Body() body: Customer): Result {
    return new Result("Cliente cadastrado com sucesso!", true, body, null);
  }

  @Put(':document')
  put(@Param('document') document: string, @Body() body: Customer): Result {
    return new Result("Cliente alterado com sucesso!", true, body, null);
  }

  @Delete(':document')
  delete(@Param('document') document: string): Result {
    return new Result(`Cliente ${document} removido com sucesso!`, true, null, null);
  }
};
