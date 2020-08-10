import { Contract } from "./contract";
import { Customer } from "../models/customer.model";
import { Flunt } from "src/utils/flunt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateCustomerContract implements Contract {
  errors: any[];
  validate(model: Customer): boolean {
    const flunt = new Flunt([]);

    flunt.hasMinLen(model.name, 5, 'Nome inválido');
    flunt.isEmail(model.email, 'E-mail inválido');
    flunt.isFixedLen(model.name, 11, 'CPF inválido');

    this.errors = flunt.errors;

    return flunt.isValid()
  }
}