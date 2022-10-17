import encryption from './caesarCipher.js'


test('caesar cipher', () => {
    expect(encryption('attack', 1)).toBe('buubdl')
})