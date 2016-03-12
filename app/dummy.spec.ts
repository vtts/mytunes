import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
    injectAsync
} from 'angular2/testing';

describe("dummy", () => {
    it('true is true', () => expect(true).toEqual(true));
    it('null is not undefined', () => expect(null).not.toBeUndefined());
});
