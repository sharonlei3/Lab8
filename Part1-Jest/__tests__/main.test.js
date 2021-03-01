const formatVolumeIconPath = require("../assets/scripts/main");

describe('test format volume icon path', () => {
    test('returns the correct number', () => {
      expect(formatVolumeIconPath(0)).toBe("./assets/media/icons/volume-level-0.svg");
    });
    test('returns the correct number', () => {
      expect(formatVolumeIconPath(3)).toBe("./assets/media/icons/volume-level-1.svg");
    });
    test('returns the correct number', () => {
      expect(formatVolumeIconPath(33)).toBe("./assets/media/icons/volume-level-1.svg");
    });
    test('returns the correct number', () => {
      expect(formatVolumeIconPath(34)).toBe("./assets/media/icons/volume-level-2.svg");
    });
    test('returns the correct number', () => {
      expect(formatVolumeIconPath(66)).toBe("./assets/media/icons/volume-level-2.svg");
    });
    test('returns the correct number', () => {
      expect(formatVolumeIconPath(67)).toBe("./assets/media/icons/volume-level-3.svg");
    });
  });
