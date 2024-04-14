import * as bcrypt from 'bcrypt';

export class HashService {

    // /**
    //  * convert entity to dto class instance
    //  * @param {{new(entity: E): T}} model
    //  * @param {E[] | E} user
    //  * @returns {T[] | T}
    //  */
    // public static toDto<T, E>(model: new (entity: E) => T, user: E): T;
    // public static toDto<T, E>(model: new (entity: E) => T, user: E[]): T[];
    // public static toDto<T, E>(model: new (entity: E) => T, user: E | E[]): T | T[] {
    //     if (_.isArray(user)) {
    //         return user.map((u) => new model(u));
    //     }

    //     return new model(user);
    // }

    /**
     * generate hash from password or string
     * @param {string} password
     * @returns {string}
     */
    static generateHash(password: string): string {
        return bcrypt.hashSync(password, 10);
    }

    /**
     * validate text with hash
     * @param {string} password
     * @param {string} hash
     * @returns {Promise<boolean>}
     */
    static validateHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash || '');
    }

    static isEmpty(object: any): boolean {
        return object && Object.keys(object).length === 0 && object.constructor === Object
    }

    static base64Encode (string : string){
        return string && Buffer.from(string).toString('base64')
    
    }

    static base64Decode (encoded : string){
        return encoded && Buffer.from(encoded, 'base64').toString("ascii")
    }
    
    static nullifyData(data: any) {
        for (let prop in data) {
            if(typeof data[prop] === 'string') {
                if (data[prop].trim().toLowerCase() === 'null') data[prop] = null
            }
        }
        return data
    }
}
