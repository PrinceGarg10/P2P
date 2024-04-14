import { BadRequestException } from '@nestjs/common';
import * as _ from 'lodash';

export class UtilsService {
  /**
   * convert entity to dto class instance
   * @param {{new(entity: E): T}} model
   * @param {E[] | E} user
   * @returns {T[] | T}
   */
  public static toDto<T, E>(model: new (entity: E) => T, user: E): T;
  public static toDto<T, E>(model: new (entity: E) => T, user: E[]): T[];
  public static toDto<T, E>(
    model: new (entity: E) => T,
    user: E | E[] | any,
  ): T | T[] {
    if (_.isArray(user)) {
      return user.map(u => new model(u));
    }

    return new model(user);
  }

  static isEmpty(object: any): boolean {
    return (
      object &&
      Object.keys(object).length === 0 &&
      object.constructor === Object
    );
  }

  static keyBy(array = [], key: any): any {
    return array.reduce((r, x) => {
      r[x[key]] = x;
      return r;
    }, {});
  }

  static maskContact(contactn: string): string {
    if (!contactn) {
      return contactn
    }
    const contact = String(contactn)
    const last = String(contact).substring(contact.length - 2, contact.length)
    return "********" + last
  }

  static maskAadhar(aadhar: string) {
    if (!aadhar) {
      return aadhar
    }
    const last = String(aadhar).substring(aadhar.length - 4, aadhar.length)
    return "********" + last
  }

  static maskEmail(email: string): string {
    if (!email) {
      return email
    }
    const splitted = _.split(email, "@")
    const last = splitted[1]

    const prefix = splitted[0]
    const elen = prefix.length

    if (elen < 3) {
      return email
    }

    const pren = elen < 6 ? 1 : 2
    const postn = elen < 6 ? 1 : 2

    const prefixLast = prefix.substring(prefix.length - postn, prefix.length)
    const prepre = prefix.substring(0, pren)

    const numstars = elen - pren - postn
    let stars = ""
    for (let i = 0; i < numstars; i++) {
      stars += "*"
    }
    return prepre + stars + prefixLast + "@" + last
  }

  static maskKeys = (key: string) => {
    const vars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const replacedVars = "Za0b1E3FcDdAeBfC2gGhiHj4I5klJKm6On7YL8M9NopqPrsQtRuSvWXTwUxVyz"

    const varsA = [...vars]
    const replacedVarsA = [...replacedVars]
    const mapped = [...key].map(k => {
      const index = _.findIndex(varsA, a => a === k)
      const value = replacedVarsA[index]
      return value
    })
    return _.join(mapped).replace(/,/g, "")

  }

  static unmaskKeys = (key: string) => {
    const vars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const replacedVars = "Za0b1E3FcDdAeBfC2gGhiHj4I5klJKm6On7YL8M9NopqPrsQtRuSvWXTwUxVyz"

    const varsA = [...vars]
    const replacedVarsA = [...replacedVars]
    const mapped = [...key].map(k => {
      const index = _.findIndex(replacedVarsA, a => a === k)
      const value = varsA[index]
      return value
    })
    return _.join(mapped).replace(/,/g, "")

  }

  static mongooseError(error: any, doc: any, next: any) {
    if (error.code === 11000) {
      error = Object.keys(error.keyValue)[0] + ' must be unique'
      next(error)
    }
    else if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      throw new BadRequestException(validationErrors.join(', '));
    }
    else {
      next(error);
    }
  }

}
