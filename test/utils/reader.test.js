const Reader = require("./../../lib/utils/reader");

describe("Reader test suite", () => {
    test("1) Read a file", () => {
        const partners = Reader.readJsonFile("partners.json");

        expect(partners[0].name).toMatch(/Warren/);
        expect(partners.length).toBe(51);
    });
});
