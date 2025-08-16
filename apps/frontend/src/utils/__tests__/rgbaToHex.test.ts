import { describe, it, expect } from 'vitest'

import { rgbaToHex } from '../rgbaToHex'

describe('rgbaToHex', () => {
  it('converts "rgb r g b / a" format to hex', () => {
    expect(rgbaToHex('rgb 255 0 0 / 0.5')).toBe('#ff000080')
  })

  it('converts classic rgba(r,g,b,a) format to hex', () => {
    expect(rgbaToHex('rgba(255, 0, 0, 0.5)')).toBe('#ff000080')
  })

  it('removes alpha when forceRemoveAlpha is true', () => {
    expect(rgbaToHex('rgb 255 0 0 / 0.5', true)).toBe('#ff0000')
  })
})
